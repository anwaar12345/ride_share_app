var Routes = require('../models/Routes');

var Routes = {
	getRoutes:function(req, res, next) {
		//Here we have catch Promise Then from model class
		user.getRoutes().then(function(data){
			//On success we will do some operation
			//e.g we can render template here etc..
			res.send('respond with a resource');
		}).catch(function(error){
			//Here we have caught error exceptions thrown by Promise
			res.send('respond with error in DB');
		});

	}
};

module.exports=Routes;
