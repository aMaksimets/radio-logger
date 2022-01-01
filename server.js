// Load Node modules
var express = require('express');
// Initialize Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(3001, ()=> {
	console.log("Listening on Port 3000");
});

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
