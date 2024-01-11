// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)
const port = 3000;
const images = ['img1', 'img2', 'img3']
const photos = require('./models/images.js')


// Mount middleware (app.use)


// Mount routes

// index
app.get('/photos', function(req, res) {
  	res.send(images);
});
// new
app.get('/photos/new', function(req, res) {
    res.send(`set up a form with that saves inputs<form></form>`)
});

// create
// app.post('/photos', function(req, res) {
//     ...
// });
// show
app.get('/photos/:id', function(req, res) {
      res.send(`You are asking for ${images[req.params.id]} with  "photos/${req.params.id}"`);
    console.log(req.query.id);
});
// edit
// app._('/photos', function(req, res) {
//   	...
// });
// update
// app._('/photos', function(req, res) {
//   	...
// });
// destroy
// app._('/photos', function(req, res) {
//   	...
// });



app.listen(port, function() {
	// this con.log will show up in bash terminal
	 console.log(`Listening on port ${port}`);
});