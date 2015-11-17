$(function(){
  Parse.$ = jQuery;

  Parse.initialize("BtWdIpUPO3ajrNeLEia0wTb0DjuFF0p1u1kjDzmR", "PqJo0OEJeSAMPKaiszGEZXUgtRN4FH1hw5aHpZsg");

  var Blog = Parse.Object.extend("Blog"),
		Blogs = Parse.Collection.extend({
			model: Blog
		}),
		BlogsView = Parse.View.extend({
			template: Handlebars.compile($('#blogs-tpl').html()),
			render: function() {
				var collection = { blog: this.collection.toJSON() };
				this.$el.html(this.template(collection));
			}
		});
		blogs = new Blogs();

		blogs.fetch({
			success: function(blogs) {
				var blogsView = new BlogsView({ collection: blogs });
				blogsView.render();
				$('.main-container').html(blogsView.el);
			},
			error: function(blogs, error) {
				console.log(error);
			}
		});

});
