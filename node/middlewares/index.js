const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json

app.use((request, response, next) => {
  // console.log(request);
  next();
});

app.use((request, response, next) => {
  request.extra = Math.random();
  next();
});

app.post("/body", (request, response) => {
  console.log(request.body);
  response.json({
    body: request.body,
  });
});

app.get("/", (request, response) => {
  response.json({
    extra: request.extra,
  });
});

const server = app.listen(port, err => {
  if (err) {
    return console.log("Something bad happened", err);
  }

  console.log(`Server running at http://localhost:${port}`);
});
