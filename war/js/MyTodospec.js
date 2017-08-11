describe("Test for mytodo app", function() {
	var Mytodo,MyView,myObj;

	beforeEach(function() {
		Mytodo = new app.Todo.prototype.defaults();
		MyView = new app.Todo();

		
	})

	it("can have default properties such as title, and done", function() {

		expect(Mytodo.done).toBeDefined();
		expect(Mytodo.title).toBeDefined();

	});
	it("Model Todo should to be defined", function() {

		expect(MyView).toBeDefined();
        expect(MyView.urlRoot).toEqual("/addsave");
	});
   
	it("should defined a collection", function(){
	   
       
		expect(app.TodoList).toBeDefined();
		expect(app.TodoList.url).toBeDefined();
		expect(app.TodoList.url).toEqual("/retriveTodo")
		expect(app.TodoList.models).toBeDefined();
		expect(app.TodoList.nextOrder).toBeDefined()
	
	   
   });


});
