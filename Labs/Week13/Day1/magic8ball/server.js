// Require modules
const express = require("express");

// Create the Express app
const app = express();

// Configure the app (app.set)
const port = 3000;
const ball = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mount middleware (app.use)

// Mount routes
// app.get('/', function(req, res) {
//   	res.send('<h1>Hello World! 5000 and one</h1>');
// });

app.get("/greeting", (req, res) => {
  res.send("hello, stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`hello, ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let tip = req.params.tipPercentage / 100;
  res.send(
    `${req.params.total}, ${req.params.tipPercentage}% = 
    ${req.params.total * tip}`
  );
});
app.get("/magic/:question", (req, res) => {
  res.send(
    `${req.params.question}. 
    <br/> 
    <h1>${ball[getRandomInt(0, 19)]}</h1>`
  );
});

// Tell the app to listen on port 3000
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
