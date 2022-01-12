// Load Node modules
var express = require('express');
// Initialize Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
  res.render('pages/index');
});
