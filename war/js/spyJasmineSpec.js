describe("Example Of Spy using spyOn()", function() { 
  
   it('uses the dicto to say "hello world"', function() { 
      var dicto = new child; 
      var person = new human; 
		
      spyOn(dicto, "hello");  
      spyOn(dicto, "world");  
		
      person.sayHelloWorld(dicto);
      expect(dicto.hello).toHaveBeenCalled();  

  
      expect(dicto.world).toHaveBeenCalled();  
    
   }); 

});

describe("Create spy", function() { 
	   
	   it("SpyOn with Create functions", function() { 
	      var MobileNumber = new human(); 
	      
	      MobileNumber.getNumber = jasmine.createSpy("Purnima"); 
	      
	      MobileNumber.getNumber(); 
	      expect(MobileNumber.getNumber).toHaveBeenCalled(); 
	   }); 

	}); 

//custom matchers

