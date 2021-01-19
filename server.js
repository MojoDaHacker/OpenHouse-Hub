const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require('express-session');
const path = require('path');

const activeSession = require("./routes/api/sessions");

const app = express();

// middlewares
app.use(cors());
app.use(session({secret: "terces12345", saveUninitialized: true , resave: false}));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/', function (req, res) {
  console.log("File Send!!");
});

// Routes
app.use("/api/sessions", activeSession);

//err handling
app.use(function (err, req, res, next) {
  console.log("ran")
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));