var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'app';

	// view.query('company', keystone.list('Company').model.find()
	// 	.where('slug', req.params.company)
	// 	.populate('contacts')
	// );

	view.query('company', keystone.list('Company').model.findOne()
		.where('slug', req.params.company)
		.populate({ path: 'contacts', select: 'name title' })
	);
		// .populate('contacts'));

	// view.query('contacts', keystone.list('Contact').model.find());
		// .populate('contacts'));

		// .populate('contacts'));

	// view.query('companies', keystone.list('Company').model.find());

	// Render the view
	view.render('company');
};
