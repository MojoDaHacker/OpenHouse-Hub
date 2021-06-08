const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session)
const path = require('path')
const mongoose = require('mongoose')
const keys = require('./config/keys')

mongoose.connect(
  `mongodb+srv://MattAdmin:${keys.module.MatthewMcKenzie_dbPass}@openhouseapplication.uz2u2.mongodb.net/Hub?retryWrites=true&w=majority`,
  {useNewUrlParser: true, useUnifiedTopology: true},
)

const store = new MongoDBStore({
  uri: `mongodb+srv://MattAdmin:${keys.module.MatthewMcKenzie_dbPass}@openhouseapplication.uz2u2.mongodb.net/Hub?retryWrites=true&w=majority`,
  collection: 'user_sessions',
})
store.on('error', function(error) {
  console.log(error);
  console.log("error here!");
});


const app = express();

app.set('view engine', 'pug')

// middlewares
app.use(cors());
app.use(session({
  secret: "terces12345",
  maxAge: 1000 * 60 * 60 * 24 * 7,
  store: store,
  saveUninitialized: false,
  resave: false
}));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'landing', 'build')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

const activeSession = require("./routes/api/sessions");
const submissions = require("./routes/submissions/users");
const { SIGILL } = require("constants");

app.use("/api/sessions", activeSession);
app.use("/submissions", submissions);

app.get('/', function (req, res) {
  store.get(req.session.id, (err, session) => {
    if(!err){
      if(session){
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
      }
      else{
        res.render('index', { main: "/" })
      }
    }
  })
});
app.get('/login', (req, res) => {
  res.render('index', { main : "login" })
} )
app.get('/register', (req, res) => {
  res.render('index', { main: "register" })
} )

//err handling
app.use(function (err, req, res, next) {

  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

const handleProcessTermination = () => {
  mongoose.disconnect()
}

process.on('SIGTERM', handleProcessTermination)
process.on('SIGINT', handleProcessTermination)