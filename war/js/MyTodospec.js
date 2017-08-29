describe("Test for mytodo app", function() {
	var Mytodo,MyView,View, Fetch,obj,valueReturned;

	beforeEach(function() {
		Mytodo = new app.Todo.prototype.defaults();
		MyView = new app.Todo();


//		console.error(app.TodoView());
//		Fetch = new app.TodoList.fetch();
	
		
	});

	beforeAll(function(done){
	
		setTimeout(function () {
		app.TodoList.fetch({
		success : function(collection, response, options) {
	    console.log(options);
	    console.log(collection);
	    console.log(response);

		valueReturned = options.xhr.responseText; 
	
		console.log(valueReturned);
		return valueReturned;
		}
		});
		done();
		}, 1);
		});
	
	

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
        expect(app.AppView.clearCompleted).toBeDefined();
	
	});
    it("expected Clear complete to be define", function(){
    expect(app.AppView.clearCompleted).toBeDefined();
    })
    it(" create function should be defined", function(){
    	expect(app.AppView.createOnEnter).toBeDefined();
    })
     it(" deleteList function should be defined", function(){
    	expect(app.AppView.deleteList).toBeDefined();
    })
     it(" edit function should be defined", function(){
    	expect(app.AppView.edit).toBeDefined();
    })
    it(" these elements should  be defined", function(){
    	expect(app.AppView.saveNow).toBeDefined();
    	expect(app.AppView.tagName).toBeDefined();
    	expect(app.AppView.toggle).toBeDefined();
    	expect(app.AppView.toggle).toBeDefined();
    	expect(app.AppView.events).toBeDefined();



    })
   

    it('fetch should populate the collection', function() {
        
    	expect(typeof valueReturned).toBeDefined();
    })
    
    it('save should be present', function(){
    	
    	MyView.save({
    		success : function(data){
    			console.log(data);
    		}
    	});
    	
        expect(MyView).toBeDefined();

    });
    
   
   
    

	



});
