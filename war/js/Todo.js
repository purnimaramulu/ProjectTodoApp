var StoreModel = Backbone.Model.extend({
	defaults: {
		
	
		yearFounded: null,
		isShoeAvailable: false
	},
	
	calculateAge : function(){
		var age = (new Date().getFullYear()) - this.get('yearFounded');
		this.set('age', age);
	},
	initialize: function() {
		this.calculateAge();
		if(this.get('isShoeAvailable')=== true){
			this.shoeDepartments();
		}
	},
	shoeDepartments :function(){
		
	},
	triggerCustomEvent : function() {
		this.trigger('customEvent');
	}
	
	
	
});
  