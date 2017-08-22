<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%

response.setHeader( "Pragma", "no-cache" );
response.setHeader( "Cache-Control", "private, no-cache, no-store, must-revalidate proxy-revalidate" );
response.setDateHeader( "Expires", 0 );
String loggedInEmail	= (String)session.getAttribute("email");

System.out.println(loggedInEmail);

System.out.println(loggedInEmail);



%>
<script>
  window.loggedInUser = '<%=loggedInEmail%>';
</script>

<html>
<header>
	<form class="navbar-form navbar-left" action="/logout" method="post"">
		<button type="sumbit" class="logout button">logout</button>
	</form>

	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<link
		href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"
		rel="stylesheet">
	<link
		href="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.min.css"
		rel="stylesheet">
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
		integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
		crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
		integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
		crossorigin="anonymous">

	<script type="text/javascript"
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>

	<script type="text/javascript"
		src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
	<script type="text/javascript"
		src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone.js"></script>
	<link
		href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
		rel="stylesheet"
		integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
		crossorigin="anonymous">



	<style>
body {
	background: url("urban-wallpaper-4.jpg");
	padding: 10px 5px 7px 1px;
	width: 438px;
	margin: 70px 13px 7px 404px;
	background-color: #ccc;
}

#todoapp {
	background: #fff;
	padding: 20px;
	margin-bottom: 40px;
}

#todoapp h1 {
	font-size: 36px;
	text-align: center;
}

#todoapp input[type="text"] {
	width: 396px;
	font-size: 24px;
	line-height: 1.4em;
	padding: 6px;
}

#main {
	display: none;
}

#todo-list {
	margin: 10px 0;
	padding: 0;
	list-style: none;
}

#todo-list li {
	padding: 11px 25px 9px 0px;
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #cccccc;
	display: table;
	position: relative;
	font-size: 20px;
	border-bottom: 1px solid #ededed;
	width: 100%;
	height: 60px;
}

#todo-list li:last-child {
	border-bottom: none;
}

#todo-list li.done label {
	color: #777777;
	text-decoration: line-through;
}

#todo-list li .edit {
	display: none;
}

#todo-list li.editing {
	border-bottom: 1px solid #778899;
}

#todo-list li.editing .view {
	display: none;
}

#todo-list li.editing .edit {
	display: block;
	width: 444px;
	padding: 13px 15px 14px 20px;
	margin: 0;
}

#todo-list li.done label {
	color: #777777;
	text-decoration: line-through;
}

#todo-list .destroy {
	position: absolute;
	right: 5px;
	top: 20px;
	display: none;
	cursor: pointer;
	width: 20px;
	height: 20px;
}

#todoapp footer {
	display: none;
	margin: 0 -20px -20px -20px;
	overflow: hidden;
	color: #555555;
	background: #f4fce8;
	border-top: 1px solid #ededed;
	padding: 0 20px;
	line-height: 37px;
}

#clear-completed {
	float: right;
	line-height: 20px;
	text-decoration: none;
	background: rgba(0, 0, 0, 0.1);
	color: #555555;
	font-size: 11px;
	margin-top: 8px;
	margin-bottom: 8px;
	padding: 0 10px 1px;
	cursor: pointer;
}

.deleteEntry {
	right: 39px;
	position: absolute;
	margin: -30px 10px 9px 0px;
}

ul {
	padding: 8px 1px 9px 5px;
}

.clear-completed .myDataTitle {
	text-decoration: line-through;
}

button.logout.button {
	margin: -57px 735px;
}

.myclass {
	top: 1px;
	position: absolute;
	margin: 78px 485px 15px;
}

body {
	background-color: A9A9A9;
}
</style>



</header>

<body>

	<div id="todoapp">

		<input id="new-todo" type="text" placeholder="What needs to be done?" />
		<section id="main style=" display:block;">
			<ul id="todo-list">
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
			</ul>
			<button class="clear-completed" style="display: none">Clear
				completed</button>

		</section>

		<footer style="display: block;">
			<!--       <div class="todo-count"><b>2</b> items left</div>
 -->
		</footer>






		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script
			src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
		<script
			src="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>

	</div>

	</div>

	<script type="text/template" id="item-template">


       <ul>
           <@ _.each(persons, function(person) {console.log(JSON.parse(person.data));
		var myData = JSON.parse(person.data);
	@>


                <li id="<@=person.key@>">
                    <input class="toggle-all" id="<@=person.key@>" type="checkbox">
                    <div class="Myli" id="<@=person.key@>">
                        <h5 id="<@=person.key@>" class="myDataTitle">
                            <@= myData.title @>
                        </h5>
                        <input value="<@=myData.title@>" class="inputRecord" id="record" type="text" style="display:none">
                        <input type="text" class="textEdit" id="<@=person.key@>" value="<@=myData.title@>" style="display:none">
                        <button id="<@=person.key@>" value="<@=myData.title@>" class="deleteEntry"><i class="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                </li>

                <@  });  @> 
        </ul> 





    </script>

	<script>
		_.templateSettings = {
			interpolate : /\<\@\=(.+?)\@\>/gim,
			evaluate : /\<\@([\s\S]+?)\@\>/gim,
			escape : /\<\@\-(.+?)\@\>/gim
		};
	</script>

	<script src="js/script.js"></script>
	<script src="js/Listview.js"></script>
	<script src="js/TodoView.js"></script>

	<script>
	$(document).ready(function(){
		app.AppView= new app.AppView();
	});
	</script>

</body>


</html>