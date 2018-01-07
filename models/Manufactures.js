var DB = require('../config/db');
/**
* All user related methods will be define in this class
* create, update, delete,edit users DB queries
* DB is a object of mysql connection, where you can run all the SQL Queries
*/
var Manufactures = {
	getManufactures:function(){
		//Due to Async JS nature we had used Promise
		//For detail: https://www.promisejs.org/
		return new Promise(function (fulfill, reject){
		   DB.query("select * from Manufactures",function(err, rows, fields){
			   DB.end(); //It required to close DB connection instance 
			   if (!err){
				 console.log('The solution is: ', rows);// It fetch rows inside DB tables
					fulfill(rows); //It will return all the table rows;
			   }else{
				 console.log('Error while performing Query.',err); //It will print all the DB errors
				 reject(err); //It will reject request with throwing errors
			   }
		   });
		});
		
	}
};

module.exports = Manufactures;