Template.meteorErrors.helpers({
	errors: function(){
		return Errors.collection.find();
	}
});
Template.meteorError.render = function(){
	var error = this.data;
	Meteor.derfer(function(){
		Errors.collection.update(erroe._id, {$set: {seen: true}});
	});
};