<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%

response.setHeader( "Pragma", "no-cache" );
response.setHeader( "Cache-Control", "private, no-cache, no-store, must-revalidate proxy-revalidate" );
response.setDateHeader( "Expires", 0 );
String error	= (String)session.getAttribute("email");

System.out.println(error);

if(error == null)
{
	error = "";
}




%>
<html>
<style>
body{
background:	#A9A9A9 !important;
}

.col-md-5.col-md-offset-4.demo {
    top: 100px;
}

input#inputPassword3 {
     margin: 16px 60px 18px 11px;
}


h5 {
    margin: 16px 15px 10px -406px;
    padding: 16px 8px 9px 13px;
}
h4{
font-family:"Times New Roman", Times, serif;
}
#btnlogin{

text-shadow: 1px 1px 1px #57B245;
background-color: #CC3300;
color: white;
    padding: 6px 4px 6px;
    margin: 11px 116px 13px 122px;
}

button#login {
    padding: 10px 26px;
    margin: -39px 358px 14px;
}
input#inputEmail3 {
    margin: 18px 3px 14px 43px;
}


.box {
  width: 15%;
  background: rgba(255,255,255,0.2);
    padding: 27px 6px 17px 2px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
      margin: 32px 30px 14px 133px;
}

.button {
  font-size: 1em;
  padding: 10px;
  color: #fff;
  border: 2px solid #06D85F;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.button:hover {
  background: #06D85F;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 400px){
  .box{
    width: 80%;
  }
  .popup{
    width: 8%;
  }
}
h1 {
    padding: 0px 27px;
}
div#login {
    margin: 10px -50px 1px 5px;
}
</style>
	<head>
       
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		
		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		
	</head>
	<body>			        
	
	<div id="login" class="container">
	 <form class="form-group"  action="/loginvalidate" method="post">
<div class="col-md-5  col-md-offset-4 demo" >
	
	<div class="navbar-form navbar-left">
	
  <div class="form-group">
   	<h4><%=error%></h4>
    	<input type="text" class="form-control email"  name="email" placeholder="email" required>
   
        <input type="password"  class="form-control password"  name="password" placeholder="Password" required>
  		<button id="login" class="btn btn-default">Log In</button> 
  </div>
  
  
  </form>
  <br>
  <br><br>
  <button type="button" id="btnlogin" onclick="window.location.href='/loginWithGoogle'" value="Submit">login with google</button>
  <br>  <br>   <br>   <br>   <br>  
  
<!--   
  
  
  <h5>Sign up here <h5>
  <div class="signup"> 
       <form class="form-group"  action="/signup" method="post">
  
    <div class="form-group">
        <label for="inputEmail3" class="control-label">Email*</label>
        <input type="email" name="email" class="form-control" id="inputEmail3" placeholder="Email" required />
    </div>
    <br>
    <div class="form-group">
        <label for="inputPassword3" class="control-label">Password*</label>
        <input type="password" name="password"class="form-control" id="inputPassword3" placeholder="Password" required />
    </div>
    
    <div>
    



</form>
    
    </div> -->
    
    <h1>Create a new account</h1>
<div class="box">
	<a class="button" href="#popup1">Signin</a>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<a class="close" href="#">&times;</a>
		<div class="signup"> 
       <form class="form-group"  action="/signup" method="post">
  
    <div class="form-group">
        <label for="inputEmail3" class="control-label">Email*</label>
        <input type="email" name="email" class="form-control" id="inputEmail3" placeholder="Email" required />
    </div>
    <br>
    <div class="form-group">
        <label for="inputPassword3" class="control-label">Password*</label>
        <input type="password" name="password"class="form-control" id="inputPassword3" placeholder="Password" required />
    </div>
    
        <button type="submit" class="signupbtn">Sign Up</button>
  
		</div>
	</div>
</div>
    
    
    
  <!--   <div class="form-group">
       
    </div>
    
        <button type="submit" class="signupbtn">Sign Up</button> -->
        </form>
</div></div></div></div></body>





</html>