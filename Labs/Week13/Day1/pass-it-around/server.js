// Require modules
const express = require("express");

// Create the Express app
const app = express();
const port = 3000;
let count = 5;

// Configure the app (app.set)

// Mount middleware (app.use)

// Mount routes

app.get("/", function (req, res) {
  res.send(`99 Bottles of beer on the wall<br/> 
    <a href='/98'>take one down, pass it around</a>`);
});

app.get("/:number_of_bottles", function (req, res) {
  if (req.params.number_of_bottles > 0) {
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall<br/> 
            <a href='/${
              Number(req.params.number_of_bottles) - 1
            }'>take one down, pass it around</a>`);
  } else {
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall<br/>
            <a href='/'>Start over</>`);
  }
});


// === extra ===
// `/` 99 bottles <a> req.parms -1 </>
// counter -1 
// if counter <= 0
//      <a href=/radom(200,0)>
//      counter 10
app.get("/", function (req, res) {
    res.send(`99 Bottles of beer on the wall<br/> 
      <a href='/98'>take one down, pass it around</a>`);
  });
  
  app.get("/:number_of_bottles", function (req, res) {
    if (req.params.number_of_bottles > 0) {
      res.send(`${req.params.number_of_bottles} Bottles of beer on the wall<br/> 
              <a href='/${
                Number(req.params.number_of_bottles) - 1
              }'>take one down, pass it around</a>`);
    } else {
      res.send(`${req.params.number_of_bottles} Bottles of beer on the wall<br/>
              <a href='/'>Start over</>`);
    }
  });


// Tell the app to listen on port 3000
app.listen(port, function () {
  // this con.log will show up in bash terminal
  console.log(`Listening on port ${port}`);
});
