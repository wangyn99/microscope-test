if(Posts.find().count()===0){
	var now = new Date().getTime();
	var tomId = Meteor.users.insert({
		profile: {name:'Tom Coleman'}
	});
	var tom = Meteor.users.findOne(tomId);
	var SachaId = Meteor.users.insert({
		profile: {name: 'Sacha Greif'}
	});
	var sacha = Meteor.users.findOne(SachaId);
	var telescopeId = Posts.insert({
		title:'Introducing Telescope',
		userId: sacha._id,
		author:sacha.profile.name,
		url:'http://sachcagreif.com/introducing-telescope/',
		submitted: now - 7*3600*1000,
		commentsCount:2
	});
	Comments.insert({
		postId : telescopeId,
		userId : tom._id,
		author : tom.profile.name,
		submitted : now - 5*3600*1000,
		body : 'Interesting project Sachca, can I get involved?'
	});
	Comments.insert({
		postId : telescopeId,
		userId : sacha._id,
		author : sacha.profile.name,
		submitted : now - 3*3600*1000,
		body : 'You sure can Tom!'
	});
	
	Posts.insert({
		title:'Meteor',
		userId: tom._id,
		author: tom.profile.name,
		url:'http://meteor.com',
		submitted: now - 10*3600*1000,
		commentsCount:0
	});
	Posts.insert({
		title:'The Meteor Book',
		userId: tom._id,
		author:'Tom Coleman',
		url:'http://themeteorbook.com',
		submitted: now - 12*3600*1000,
		commentsCount:0
	});
}