var human = function() {}; 

human.prototype.sayHelloWorld = function(a){ 
   return a.hello() + " " + a.world(); 
}; 
    
var child = function() {}; 

child.prototype.hello = function() { 
   return "hello"; 
}; 
    
child.prototype.world = function() { 
   return "world"; 
}; 
