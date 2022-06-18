const express = require("express");
const startDb = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path");
const hostname = "0.0.0.0";
const port = 8080;
// App
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const passport = require("passport");

// for parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use(passport.initialize());

app.use(require("./app/routes"));

// // GET method route
// app.get("/", function (req, res) {
//   res.send("GET => Bienvenidos a mi primer web app con NODE.js");
// });
// // POST method route
// app.post("/", function (req, res) {
//   res.send("POST request to the homepage");
// });
// // GET method route
// app.get("/secret", function (req, res, next) {
//   res.send("Never be cruel, never be cowardly. And never eat pears!");
//   console.log("This is a console.log message.");
// });
/*
Your implementation here
*/
app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);

startDb();
