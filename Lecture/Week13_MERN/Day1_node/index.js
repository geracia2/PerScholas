// require (commonJS) =/= import (ES6)
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// call back function is the passed argument
// const server = http.createServer(() => {})
// request, result
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

// listen to a port, hostname and do a callback func. 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});