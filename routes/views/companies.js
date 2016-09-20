var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'app';

	view.query('companies', keystone.list('Company').model.find().populate('contacts'));
	view.query('contacts', keystone.list('Contact').model.find());

	// Render the view
	view.render('app');
};
