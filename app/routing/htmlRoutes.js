var path = require('path');


// Exports these variables to server.js for route direction
module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	app.post('/survey', function(req, res) {
		console.log(req.body);
	})
};
