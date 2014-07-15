Template.commentSubmit.events({
	'submit form': function(event,template){
		event.preventDefault();
		//console.log("this template's data id is  "+template.data._id);
		var comment = {
			body: $(event.target).find('[name=body]').val(),
			postId: template.data._id
		};
		Meteor.call('comment', comment, function(error,commentId){
			error&&throwError(error.reason);
		});
	}
});