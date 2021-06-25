const LocalStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose')
const keys = require('./keys')
const bcrypt = require("bcryptjs");


// // Load User model
const { User } = require("../models/User");

module.exports = passport => {
  passport.use(new LocalStrategy({usernameField: 'email'} , (username, password, done) => {
    User.findOne({ email: username }, function (err, user) {
      if (err) return done(err)
      if (!user) return done(null, false, { field: "email", message: 'Incorrect Email.' })
      if (!bcrypt.compare(password, user.password)) return done(null, false, { field: "password", message: 'Incorrect password.' })
      return done(null, user);
    });
  }));
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    })
  })
}; 

