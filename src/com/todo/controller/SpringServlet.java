package com.todo.controller;

import java.io.BufferedReader;
import java.util.Collections;
import java.util.HashMap;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

//import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.google.gson.Gson;
import com.todo.jdo.ToDo;
import com.todo.jdo.ToDoList;
import com.todo.util.PMF;

@Controller
public class SpringServlet<UnexpectedErrorBean> {


	@RequestMapping("/")
	public String homePage(ModelMap model) {
		model.addAttribute("message", "Hello Spring MVC Framework!");

		return "home";
	}

	@RequestMapping("/home")
	public String home(ModelMap model, HttpServletRequest request) {
		HttpSession session = request.getSession(false);

		String page = "";

		if (session != null) {
			page = "hello";
		}
		return page;
	}
	

	@RequestMapping("/hello")
	public String hello(ModelMap model,HttpServletRequest request) {
		HttpSession session = request.getSession(false);

		String page = "";

		if (session != null) {
			page = "home";
		}
		return "hello";
	}

	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public void signup(HttpServletRequest request, HttpServletResponse response) throws IOException {

		String email = request.getParameter("email");
		String password = request.getParameter("password");
		System.out.println(email + "  " + password);

		PersistenceManager pm = PMF.get().getPersistenceManager();
		Query q = pm.newQuery(ToDo.class);
		q.setFilter(" email == '" + email + "'");
		List<ToDo> results = (List<ToDo>) q.execute(email);
		if (!(results.isEmpty())) {
			response.sendRedirect("home.jsp");
		} else {
			ToDo r = new ToDo();

			r.setEmail(email);
			r.setPassword(password);

			try {
				pm.makePersistent(r);

			} finally {
				pm.close();
			}
		}
		response.sendRedirect("/");

	}

	@RequestMapping(value = "/loginvalidate", method = RequestMethod.POST)
	public String validatelogin(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException, ServletException {

		String email = request.getParameter("email");
		String password = request.getParameter("password");

	   HttpSession session= request.getSession(false);
		System.out.println(email+ "    " + password);
   	 
        PersistenceManager pm = PMF.get().getPersistenceManager();
	    Query q= pm.newQuery(ToDo.class);
		q.setFilter("email == '"+email.trim()+"'"+ " &&" + "password == '" + password + "'");
		System.out.println(email+ "    " + password);
		
		List<ToDo> results = (List<ToDo>) q.execute();
		
	    System.out.println("after checking");


	    System.out.println(results);
	    
	    if(results.isEmpty()){
		    
		    
	    	PrintWriter out = response.getWriter();  
//	    	response.setContentType("text/html");  
//	    	   out.println("<script type=\"text/javascript\">");
//	           out.println("alert('User or password incorrect');");
//	           out.println("</script>");
	    	
		    	System.out.println("failed");
		    	session.setAttribute("Error", "Username or password is incorrect!! If you are a new user please Signup" );
		    	 response.sendRedirect("/");
		    	
		    }
	   
		    else{
		    	
		    	if(session !=null)
		    	{
		    		session.setAttribute("email", results.get(0).getEmail());
		    	}
		    	else{
		    		session = request.getSession(true);
		    		session.setAttribute("email", results.get(0).getEmail());
		    	}
		    	System.out.println("sucess");
		    	
		  
		    }
	       return "hello";
		}
      

	@RequestMapping(value = "/addsave", method = RequestMethod.POST)
	@ResponseBody
	public String save(HttpServletRequest request, HttpServletResponse response, @RequestBody String data) {
		
		String ret = "";
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			Gson gsonRead = new Gson();
			Gson gson = new Gson();
			ToDoList myList = gsonRead.fromJson(data, ToDoList.class);
			
			System.out.println("person.email");
			ToDoList d = new ToDoList();
			d.setData(data);
			String email= (String) request.getSession().getAttribute("email");
			d.setEmail(email);
//			d.setEmail("puriy248@gmail.com");
		
			pm.makePersistent(d);
			System.out.println(d);
			ret = gson.toJson(d);
			System.out.println(gson);

		} finally {
			pm.close();
		}

		return ret;

	}

	@RequestMapping(value = "/retriveTodo", method = RequestMethod.GET)
	@ResponseBody
	public String retrieve(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException, NullPointerException {

		HttpServletResponse resp = response;

		resp.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP
																				// 1.1.
		resp.setHeader("Pragma", "no-cache"); // HTTP 1.0.
		resp.setDateHeader("Expires", 0); // Proxies.

		HttpSession session = request.getSession(false);
//		if (session.getAttribute("email") !=null) {

			String email = (String) session.getAttribute("email");
			System.out.println("session email");
			System.out.println(email);
		
				PersistenceManager pm = PMF.get().getPersistenceManager();
				Query q = pm.newQuery(ToDoList.class);
				q.setFilter("email == '" +email+"'");


				
				List<ToDoList> results = (List<ToDoList>) q.execute();
				if(results.isEmpty()){
					System.out.println("empty");
					  
					
				}else{
					System.out.println("Todo List  :: " + new Gson().toJson(results));
					Gson obj = new Gson();
					String ret = obj.toJson(results);
					
					   System.out.println("List value are "+ret);
				

					return ret;
				}
				
				return null;

			}
		


	



	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public @ResponseBody String delete(@RequestParam long key, HttpServletRequest request) {

		PersistenceManager pm = PMF.get().getPersistenceManager();

		try {

			ToDoList c = pm.getObjectById(ToDoList.class, key);
			String email = c.getEmail();
			String data = c.getData();
			this.mail(email,data);
			
			System.out.println();
			pm.deletePersistent(c);
			System.out.println("deleting");

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pm.close();
		}

		return "deleted";

	}

	// @RequestMapping(value = "/destroy/{ID}", method = RequestMethod.GET)
	// public ResponseBody delete(@PathVariable Long data) {
	//
	//
	// PersistenceManager pm = PMF.get().getPersistenceManager();
	//
	// ToDoList c = pm.getObjectById(ToDoList.class, data);
	//
	// if (c== null) {
	// return (ResponseBody) new
	// ResponseEntity<UnexpectedErrorBean>(HttpStatus.BAD_REQUEST);
	// }
	//
	//
	// return (ResponseBody) new ResponseEntity(HttpStatus.OK);
	// }
	//

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public @ResponseBody String update(HttpServletRequest request, @RequestBody String data) throws ParseException {

		JSONObject json = (JSONObject) new JSONParser().parse(data);

		String myKey = json.get("key").toString();
		String myData = json.get("dataVal").toString();
		long searchKey = Long.parseLong(myKey);

		Gson obj = new Gson();
		String ret = "";

		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {

			ToDoList c = pm.getObjectById(ToDoList.class, searchKey);

			c.setData(myData);
			pm.makePersistent(c);

			ret = obj.toJson(c);
			System.out.println(ret);

		} finally {
			pm.close();
		}

		return ret;
	}

	@RequestMapping(value = "/destroy", method = RequestMethod.DELETE)
	public @ResponseBody String destory(@RequestParam long key, HttpServletRequest request) {

		PersistenceManager pm = PMF.get().getPersistenceManager();

		try {
			ToDoList c = pm.getObjectById(ToDoList.class, key);
			pm.deletePersistent(c);
			System.out.println("deleting");

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pm.close();
		}

		return "deleted";

	}

	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	public void logout(HttpServletRequest request, HttpServletResponse response) throws IOException {

		HttpServletResponse resp = response;

		resp.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP
																				// 1.1.
		resp.setHeader("Pragma", "no-cache"); // HTTP 1.0.
		resp.setDateHeader("Expires", 0); // Proxies.

		HttpSession session = request.getSession(false);

		if (session != null) {
			session.removeAttribute("email");

			session.invalidate();
		}

		response.sendRedirect("/");
		// return "home";

	}
	
	public void mail(String email, String data){
		
		 String to = email;

		    String from = "purnima.ramulu@a-cti.com";

		    String host = "smtp.gmail.com";

		    Properties properties = System.getProperties();

		    properties.setProperty("mail.smtp.host", host);

		    Session session = Session.getDefaultInstance(properties);

		    try{

		       MimeMessage message = new MimeMessage(session);


		       message.setFrom(new InternetAddress(from));


		       message.addRecipient(Message.RecipientType.TO,
		                                new InternetAddress(to));


		       message.setSubject("Hi,Your Todo is completed");
		       message.setContent("Content = "+ data, "text/html; charset=utf-8");
		       
		       Transport.send(message);
		       System.out.println(message);
		    }catch (MessagingException mex) {
		       mex.printStackTrace();
		    }
		
	}
	
	@RequestMapping("/loginWithGoogle")
	public ModelAndView loginWithGoogle() {
		return new ModelAndView(
				"redirect:https://accounts.google.com/o/oauth2/auth?redirect_uri=http://1-dot-purnimatodo.appspot.com/get_auth_code&response_type=code&client_id=599072444323-ail94i33mej19p9ldka8gq6djs6t5rrb.apps.googleusercontent.com&approval_prompt=force&scope=email&access_type=online");
	}
	
	

	@RequestMapping(value = "/get_auth_code")
	public String get_code1(@RequestParam String code, HttpServletRequest request, HttpServletResponse resp)
			throws IOException {

		// code for getting authorization_code
		System.out.println("Getting Authorization.");
		String auth_code = code;
		System.out.println(auth_code);

		// code for getting access token

		URL url = new URL("https://www.googleapis.com/oauth2/v3/token?"
				+ "client_id=599072444323-ail94i33mej19p9ldka8gq6djs6t5rrb.apps.googleusercontent.com"
				+ "&client_secret=qP9RkGsJGT5UONSueWyJcex1&" + "redirect_uri=http://1-dot-purnimatodo.appspot.com/get_auth_code&"
				+ "grant_type=authorization_code&" + "code=" + auth_code);
		HttpURLConnection connect = (HttpURLConnection) url.openConnection();
		connect.setRequestMethod("POST");
		connect.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
		connect.setDoOutput(true);
		System.out.println(connect);
		BufferedReader in = new BufferedReader(new InputStreamReader(connect.getInputStream()));
		String inputLine;
		String response = "";
		while ((inputLine = in.readLine()) != null) {
			response += inputLine;
		}
		in.close();
		System.out.println(response.toString());

		JSONParser jsonParser = new JSONParser();
		JSONObject jsonAccessToken = null;
		try {
			jsonAccessToken = (JSONObject) jsonParser.parse(response);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String access_token = (String) jsonAccessToken.get("access_token");
		System.out.println("Access token =" + access_token);
		System.out.println("access token caught");

		URL obj1 = new URL("https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + access_token);
		HttpURLConnection conn = (HttpURLConnection) obj1.openConnection();
		BufferedReader in1 = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String inputLine1;
		String responsee = "";
		while ((inputLine1 = in1.readLine()) != null) {
			responsee += inputLine1;
		}
		in1.close();
		System.out.println(responsee.toString());
		JSONObject json_user_details = null;
		try {
			json_user_details = (JSONObject) jsonParser.parse(responsee);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String userMail1 = (String) json_user_details.get("email");
		String userName1 = (String) json_user_details.get("password");

		System.out.println(userMail1);
	
		
		HttpSession session= request.getSession(false);
		PersistenceManager pm = PMF.get().getPersistenceManager();
		javax.jdo.Query q = pm.newQuery(ToDo.class);
		
		List<ToDo> results = (List<ToDo>) q.execute(userMail1);
		
	 	if(session !=null)
    	{
    		session.setAttribute("email", userMail1);
    		
    	}
    	else{
    		session = request.getSession(true);
    		session.setAttribute("email", userMail1);
    	}
		
	    if(!(results.isEmpty())) {
			
			System.out.println("this is not empty");
			System.out.println(userMail1);

			ToDo r = new ToDo();

			r.setEmail(userMail1);
			try {
				pm.makePersistent(r);
				session.setAttribute("email", r.getEmail());

			} finally {
				pm.close();
			}
			}
			return "hello";
		}
	
	
}