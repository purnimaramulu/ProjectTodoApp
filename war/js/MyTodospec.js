describe("Test for mytodo app", function() {
	var Mytodo,MyView,View, Fetch;

	beforeEach(function() {
		Mytodo = new app.Todo.prototype.defaults();
		MyView = new app.Todo();
	
		View   = new app.AppView();
		console.log(View);
//		console.error(app.TodoView());
//		Fetch = new app.TodoList.fetch();

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
		expect(app.TodoList.done).toBeDefined();

		expect(app.TodoList.url).toEqual("/retriveTodo")
		expect(app.TodoList.models).toBeDefined();
		expect(app.TodoList.nextOrder).toBeDefined()
	    
	   
   });
	
	it("should define the view", function(){
		expect(View).toBeDefined();
        expect(app.AppView.prototype.clearCompleted).toBeDefined();
	
	});
    it("expected Clear complete to be define", function(){
    expect(app.AppView.prototype.clearCompleted).toBeDefined();
    })
    it(" create function should be defined", function(){
    	expect(app.AppView.prototype.createOnEnter).toBeDefined();
    })
     it(" deleteList function should be defined", function(){
    	expect(app.AppView.prototype.deleteList).toBeDefined();
    })
     it(" edit function should be defined", function(){
    	expect(app.AppView.prototype.edit).toBeDefined();
    })
    it(" these elements should  be defined", function(){
    	expect(app.AppView.prototype.saveNow).toBeDefined();
    	expect(app.AppView.prototype.tagName).toBeDefined();
    	expect(app.AppView.prototype.toggle).toBeDefined();
    	expect(app.AppView.prototype.toggle).toBeDefined();
    	expect(app.AppView.prototype.events).toBeDefined();
    	expect(app.AppView.prototype.el).toBeDefined();
    	expect(app.AppView.hasOwnProperty).toBeDefined();



    })
    
    
    
    
    
    

	



});
