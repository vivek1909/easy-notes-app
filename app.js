const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// configuting the database
//const dbConfig =

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to EasyNotes application. Take notes quickly."
  });
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
