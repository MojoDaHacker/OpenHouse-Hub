const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const keys = require('../config/keys')

// // Load User model
const User = require("../models/User");

exports.register = (req, res, next) => {
  // Implement the middleware function based on the options object
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.status(401).json({ field: "email", message: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) next(err);
          else {
            newUser.password = hash;
            newUser.save()
            .then(user => {
              next()
            })
            .catch(next);
          }
        });
      });
    }
  })
}
