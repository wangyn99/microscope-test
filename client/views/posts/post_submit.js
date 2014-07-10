Template.postSubmit.events({
	'submit form': function(e){
		e.preventDefault();
		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			message:$(e.target).find('[name=message]').val()
		};
		post_id = Posts.insert(post);
		Router.go('postPage', {_id: post_id});
		//notice: must be {_id: post_id}, not "post" directly(it may lead to null id);
	}
})