Meteor.publish('posts',function(){
	return Posts.find();
});
Meteor.publish('comments', function(postid){
	return Comments.find({postId: postid});
});
Meteor.publish('notifications',function(){
	return Notifications.find({userId:this.userId});
});