Template.postSubmit.events({
	'submit form': function(e){
		e.preventDefault();
		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			message:$(e.target).find('[name=message]').val()
		};
		//post_id = Posts.insert(post);
		//Meteor.call  function callls  a method 'post'.
		//fistt argument: 'post' , a method
		//second argument: post , a post object constructed fron the form
		//third argument ; a callback function, will excute when thes server-side method is done
		Meteor.call('post', post, function(error, id){
			if(error){
				throwError(error.reason);
				if(error.error===302)
					Router.go('postPage', {_id: error.details});

			}
				else{
					Router.go('postPage', {_id: id});
				}
			//Router.go('postPage', {_id: id})
		});
		//Router.go('postsList');
		//Router.go('postPage', {_id: post_id});
		//notice: must be {_id: post_id}, not "post" directly(it may lead to null id);
	}
});