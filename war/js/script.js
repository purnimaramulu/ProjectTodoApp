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


















