Notifications = new Meteor.Collection('notifications');
Notifications.allow({
	update: ownsDocument
});
createCommentNotification = function(comment){
	var post = Posts.findOne(comment.postId);
	if(comment.userId!==post.userId){
		var noti = Notifications.insert({
			userId: post.userId,
			postId: post._id,
			commentId: comment._id,
			commenterName: comment.author,
			read: false
		});
		console.log("notifications userId is "+Notifications.findOne({_id: noti}).userId);
	}
};