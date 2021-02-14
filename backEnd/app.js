const express = require("express"),
  cors = require("cors"),
  body_parser = require("body-parser");

const app = express();

//Requiring the route
const route = require("./Routes/route");

//set view engine
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.json());
app.use(route);

//Serving static files
app.use(express.static("frontEnd/public"));

//Declaring the port for connection
const port = process.env.PORT || 3000;

//STARTING A SERVER
app.listen(port, () => {
  console.log("Server started on localhost:3000");
});
