var app = app || {};
app.myArray = new Array();
app.Todo = Backbone.Model.extend({
    urlRoot: "/addsave",
    defaults: function() {
        return {
            title: "no title...",
            done: false,
            Order: app.TodoList.nextOrder()
        };
    },
});




// Model Collection


app.TodoList = Backbone.Collection.extend({
    url: "/retriveTodo",
    model: app.Todo,
    nextOrder: function() {
    	if (!this.length) return 1;
    	return this.last().get('order') + 1;
    	},
    done: function() {
        return this.where({
            done: true
        });
    },
});
app.TodoList = new app.TodoList();




// Model View & event action




app.TodoView = Backbone.View.extend({
    tagName: "li",
    template: _.template($("#item-template").html()),

    initialize: function() {

        this.render();
    },

    render: function() {

        console.log("rendering");
        console.log(this.collection);
        var template = _.template($("#item-template").html())
        template = this.template({
            persons: this.collection.toJSON()
        });
        $('#todo-list').html(template);
        this.$el.html(template);

        return this;
    },




});

app.AppView = Backbone.View.extend({
    el: $("#todoapp"),

    events: {
        "keypress #new-todo": "createOnEnter",
        "click .clear-completed": "clearCompleted",
        "click .toggle-all": "toggle",
        "click .deleteEntry": "deleteList",
        "dblclick .Myli": "edit",
        "blur .textEdit": "saveNow",
        "click .delete": "remove"
    },

    initialize: function() {
        this.render();
        var _this = this;
        this.collection = app.TodoList;
        var todos;
        this.collection.fetch({

            success: function(data) {

                _this.collection = data;
                app.TodoView = new app.TodoView({
                    collection: data
                
                });
                this.collection.comparator = function(model) {
              	  return model.get("title"); 
              	}

                var template = _.template($('#item-template').html(), {
                    tempData: _this.collection
                });
                $('#todo-list').html(template);

            }
        });

        this.input = this.$("#new-todo");




    },




    createOnEnter: function(e) {


        if (e.keyCode != 13)
            return;
        if (!this.input.val())
            return;

        //		app.TodoList.create({
        //			
        //			title : this.input.val()
        //			
        //		});

        var myModel = new app.Todo();
//        myModel.set("title","purnima");
//        myModel.set("done",false);
//        myModel.save();
//        console.log(myModel);
        
//        myModel.save({
//            title: this.input.val(),
//            userId: $('userId',loggedInUser),
//        });
        
        
        myModel.save({
            title: this.input.val(),
            email: window.loggedInUser

        }, {
            success: function(model, response) {
                var myKey = model.get("key");
                var myTitle = model.get("title");

                var myHtml =
                    '<li id=' + myKey + '><input class= "toggle-all"id=' + myKey + ' type="checkbox"><div class="Myli" id=' + myKey + '><h5 class="myDataTitle">' + myTitle + '</h5>' +
                    '<input value=' + myTitle + ' class="inputRecord" id="record" type="text" style="display:none">' +
                    '<input type="text" class="textEdit" id=' + myKey + ' value=' + myTitle + ' style="display:none">' +
                
                    '<button  id=' + myKey + ' value=' + myTitle + ' class="deleteEntry"> <i class="fa fa-times" aria-hidden="true"></i></button></div></li>'




                $("#todo-list ul").append(myHtml);
                $('#new-todo').val("");



            },
            error: function(model, response) {
                console.log("error");
            }
        });




    },


    deleteList: function(e) {




        var self = this;
        var id = parseInt($(e.currentTarget).attr('id'));
        var myModel = this.collection.where({
            key: id
        });

        $.ajax({
            url: "/delete?key=" + id,
            type: "DELETE",
            success: function() {

                self.collection.remove(myModel);
                app.TodoView.render();

            },
            error: function() {}
        });




    },


    edit: function(e) {
        //		
        var self = this;
        //		 var key = $(e.currentTarget).parent().attr('id');
        //		 console.log(key);
        var key = $(e.currentTarget).attr('id');
        console.log(key);
        //		
        $("#" + key).find(".textEdit").show();
        $("#" + key).find(".myDataTitle").hide();
        var val = $("#" + key).find(".textEdit").val();
        this.saveNow(e, val);
    },
    saveNow: function(e) {
        e.stopPropagation();
        e.preventDefault();

        var oldVal = $(".textEdit").val();
        $(".textEdit").on("blur", function(e) {
            var key = $(e.currentTarget).parent().attr('id');
            var updateVal = $("#" + key).children(".textEdit").val();
            console.log("updated value is " + updateVal);
            if (oldVal == updateVal) {
                //alert("Nothing to change");
            } else {
                //				 if(e.keyCode == 13){
                //var newVal = value; 
                //console.log(val);

                var data = {};
                //				 var key = $(e.currentTarget).parent().attr('id');
                var dataVal = {};
                dataVal.title = $(e.currentTarget).val();
                data.key = key;
                data.dataVal = dataVal;
                var self = this;

                $.ajax({
                        url: "/update",
                        type: "POST",

                        contentType: "application/json",
                        data: JSON.stringify(data),

                        success: function(data) {

                            console.log(JSON.parse(data));
                            console.log("i am here");
                            var myData = JSON.parse(data);
                            $("#" + key).find(".textEdit").hide();
                            var val = $("#" + key).find(".textEdit").val();
                            console.log(val);


                            $("#" + key).find(".myDataTitle").html(val);

                            $("#" + key).find(".myDataTitle").show();
                            //$("#todo-list li").html(val);

                            $(".textEdit").off('blur');
                        }

                    })
                    //}

            }
        });




    },




    toggle: function(e) {

        var key = $(e.currentTarget).attr('id');

        var a = app.myArray.indexOf(key);

        if (a < 0) {
            console.log("added");
            app.myArray.push(key);
        } else {
            app.myArray.pop(key);
            console.log("removed")
        }

        console.log(key);
        //				  if(key==!!0){
        //					  clear-completed();
        $(".clear-completed").show();


    },

    clearCompleted: function(e) {
        for (i = 0; i < app.myArray.length; i++) {
            console.log(app.myArray[i]);
            var myModel = app.TodoList.findWhere("key", app.myArray[i]);
            var self = this;
            $.ajax({
                url: "/delete?key=" + app.myArray[i],
                type: "DELETE",
                success: function() {
                    console.log(JSON.stringify(myModel));
                    app.myArray.pop(app.myArray[i]);
                    $(this).attr('id')
                        //									$'#myDataTitle').remove();
                    self.collection.remove(myModel);
                    app.TodoView.render();
                    //									 $('#todo-list '+myModel.key).remove();
                },
                error: function() {}
            });
        }
    },




});

app.Appview = new app.AppView();