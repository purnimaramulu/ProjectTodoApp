describe(
		"Tests for a custom Backbone Model",
		function() {
			var Toms;

			beforeEach(function() {
				Toms = new StoreModel({
					title : 'todo',
				    yearFounded : 2007,
					isShoeAvailable : true
				});
			})

			it("can have default properties such as yearFounded, and isShoeAvailable",
					function() {
						
				        expect(Toms.defaults).toBeDefined();
					    
				        expect(Toms.defaults.yearFounded).toBeDefined();
						
				        expect(Toms.defaults.isShoeAvailable).toBeDefined();
					});
			
			

			it("can have a custom method called calculateAge", function() {
				
				expect(Toms.calculateAge).toBeDefined();
			});

			
			
			it("can have a custom method called shoeDepartments", function() {
				
				expect(Toms.shoeDepartments).toBeDefined();
			});

			
			it("will set the age after calculateAge is called", function() {
				Toms.calculateAge();
				
				expect(Toms.get('age')).toBeDefined();
				
				expect(Toms.get('age')).toEqual(
						(new Date().getFullYear()) - Toms.get('yearFounded'));
			});
			
			

			it("can make sure that calculateAge is called when instantiated",
					function() {
						spyOn(Toms, 'calculateAge');
						
						Toms.initialize();
						
						expect(Toms.calculateAge).toHaveBeenCalled();
					});

			
			
			
			it("make sure that shoeDepartments is called when instantiated, but only if isShoeAvailable is true",
					function() {

						spyOn(Toms, 'shoeDepartments');

						console.log(Toms.get('isShoeAvailable'))
					
						Toms.initialize();
						expect(Toms.shoeDepartments).toHaveBeenCalled();

						Toms.set('isShoeAvailable', false);
						Toms.initialize();

						expect(Toms.shoeDepartments.calls.count()).toEqual(1);
					});

			
			
			
			
		
		});