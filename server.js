const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require('express-session');
const path = require('path');


const {registerUser} = require("./operations/index")
const users = require("./routes/api/users");

const app = express();

// Passport config
require("./config/passport")(passport);


const cookie = {
  httpOnly : false,
  sameSite : false,
}

// middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(session({secret: "terces", saveUninitialized: false , resave: false, cookie}));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


// MongoDB configuration and connection
const db = require("./config/keys.js").mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB successfully connected")
})
.catch(err => console.log(err));

// app.get('/ping', function (req, res) {
//   return res.send('pong');
//  });
 
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

// Routes
app.use("/api/users", users);

app.get('/logout', function(req, res){
  console.log("Logged Out!")
  req.logout();
  res.end();
});

app.post('/login',
  passport.authenticate('local'),
  function(req, res) { 
    res.json({name : req.user.name})
  }
);

app.post('/register',
 registerUser,
 passport.authenticate('local'),
 function(req, res){
  res.json({name : req.user.name});
  console.log("Registered and Logged In!")
});

//err handling
app.use(function (err, req, res, next) {
  console.log("ran")
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));