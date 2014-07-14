Template.postPage.helpers({
	currentPost: function(){
		return this;
	},
	comments: function(){
		return Comments.find({postId: this._id});
	}
});