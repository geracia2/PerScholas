// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)
const port = 5000
const colors=['red', 'blue', 'green']

// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res) {
  	res.send('<h1>Hello World! 5000 and one</h1>');
});
// method: get, path: /home, app function: ...
app.get('/home', function(req, res) {
    res.send('<h1>double up, what happens? The first one is rendered, second is ignored.</h1>');
    // error cannot send more than one response!
    res.send('<h1>what about a second response</h1>');
});
// different method, same path 
app.post('/home', function(req, res) {
    res.send('<h1>you are on the home page... i think?</h1>');
});


// app.get('/colors/:indexOfColors', (req, res) => {
//     // (request.params) what the user put into the url or query after "localhost:5000/colors/___"
//     res.send(colors[req.params.indexOfColors]);
// });

app.get('/colors/:indexOfColors', (req, res) => {
    if (colors[req.params.index]) {
          res.send(colors[req.params.indexOfColors]);
    } else {
      res.send('cannot find anything at this index: ' + req.params.indexOfColors);
    }

});

app.get('/howdy/:firstName', function(req, res) {
    // params is the first thing after /howdy/_param_?title=duke
    console.log(req.params);
    // query is the first thing after /howdy/name?_key_=_value_
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });

// Tell the app to listen on port 3000
app.listen(port, function() {
 console.log(`Listening on port ${port}`);
});