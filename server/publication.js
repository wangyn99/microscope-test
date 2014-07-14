Meteor.publish('posts',function(){
	return Posts.find();
});
Meteor.publish('comments', function(postid){
	return Comments.find({postId: postid});
});