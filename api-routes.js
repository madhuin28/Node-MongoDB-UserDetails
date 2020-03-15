let router =require('express').Router();

router.get('/',function (req, res) {
	// body...
	res.json({
		status: 'API Is Working',
		message: 'Welcome to RESTHub crafter with love!'
	});
});

var contactController= require('./contactController');

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
    
router.route('/contacts/:contact_id')
	.get(contactController.view)
	.patch(contactController.update)
	.put(contactController.update)
	.delete(contactController.delete);

module.exports = router;