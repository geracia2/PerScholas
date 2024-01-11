// Load/import express
const express = require('express');

// Create our express app
const app = express();

// get is like fetch
// Define a "root" / route directly on app
// if they request from /, do this callback func.
app.get('/', function (req, res) {
    // send back a string of html
    res.send(`<h1>Hello World!</h1>`);
});

// Tell the app to listen on port 5000
// for HTTP requests from clients
app.listen(5000, function () {
    console.log('Listening on port 5000');
});