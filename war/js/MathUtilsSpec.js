describe("Hello World", function() {

	it("should Return Hello world", function() {
		expect(helloworld()).toEqual('Hello World');
	});

	it("it should check this function", function() {
		expect()
	})

});

describe("About the main process", function() {
	it("about the function", function() {
		a = true;
		expect(a).toBe(true);
	});
});

describe("Email validation", function() {

	it("should validate info@knoldus.com", function() {
		var result = isEmail_valid("info@knoldus.com");
		expect(result).toBe(true);
	});

	it("should not validate info@knoldus", function() {
		var result = isEmail_valid("info@knoldus");
		expect(result).not.toBe(true);
	});
});
describe("to be equal", function() {

	it("The Example of toEqual() method", function() {
		expect(expectexam.currentVal).toEqual(0);
	});

	it("The Example of not.toEqual() method", function() {
		//negation  testing expect(expectexam.currentVal).not.toEqual(5); 
	});
});

describe("toBEtruthy", function() {

	it("The Example of toBeTruthy() method", function() {
		expect(expectexam.exampleoftrueFalse(5)).toBeTruthy();
	});

	it("The Example of toBeFalsy() method", function() {
		expect(expectexam.exampleoftrueFalse(15)).toBeFalsy();
	});

});

describe("contains word or not", function() {

	it("The  Example of toContain() method", function() {
		expect([ 1, 2, 3, 4 ]).toContain(3);
	});

});

describe("whether close to given number or not", function() {

	it("Example of toBeCloseTo()", function() {
		expect(12.34).toBeCloseTo(12.3, 1);
	});

});
describe("whether matching or not", function() {

	it("Example of toMatch()", function() {
		expect("Jasmine tutorial in tutorials.com").toMatch(/tuto/);
	});

});

current = 0;
describe("Have to be defined", function() {

	it("example toBeDefined", function() {

		expect(current).toBeDefined();
	});

});

describe("greater than or not", function() {
	var e = 10;

	it("checking toBeGreaterThan()", function() {

		expect(e).toBeGreaterThan(5);

	});
	it("less than or not", function() {
		expect(e).toBeLessThan(11);
	})
});

var thorwme = function() {
	throw new Error(); //throw new Error();
}

describe("exceptions chekcking ", function() {
	var exception = 10;

	it("expected exception", function() {
		expect(thorwme).toThrow();
	})

})

var val = 0;
beforeEach(function() {
	val = 5;
});
describe("beforeEach checking ", function() {

	it("after each function", function() {

		expect(val).toEqual(5);
	});

});

//var currentVal = 0;
//afterEach(function() {
//	currentVal = 5;
//});
//
//describe("afterEach() function checking ", function() {
//
//	 it("first call ", function(){ 
//	      expect(currentVal).toEqual(0);     
//	   });     
//	   
//	   it("second call ",  function() { 
//	      expect(currentVal).toEqual(5);     
//	   });   
//
//	
//});
