const express = require("express");
const cors = require('cors')

const app = express();
const PORT = 8080;

// solves issues of connecting to a server from a react app
// app.use(cors())

app.get("/api/test", (req, res) => {
  console.log(`test`);
  // res.send("Server says hello client");
  // server needs to send json when client rendering, not when server rendering
  res.json("Server says hello client");
});

app.listen(PORT, () => {
  console.log(`Listening on port: `, PORT);
});
