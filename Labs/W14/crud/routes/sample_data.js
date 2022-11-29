var express = require('express');
var router = express.Router();
//added line
var database = require('../database');

/* 
router.get("/", function(request, response, next){

	response.send('List all Sample Data');
});
router.get("/add", function(request, response, next){
	response.send('Add Sample Data');
});
 */


router.get("/", function(request, response, next){

	var query = "SELECT * FROM sample_data ORDER BY id DESC";

	database.query(query, function(error, data){

	if(error)
	{
		throw error; 
	}
	else
	{
	response.render('sample_data', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:data});
		
	}

	});

});


module.exports = router;
