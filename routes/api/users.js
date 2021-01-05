const express = require("express");
const path = require("path");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

/// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json({errors, isValid});
  }
});

// @route POST api/users/login
// @access Public
router.post('/login',
  passport.authenticate('local'),
  function(req, res) { 
    res.send({name : req.user.name})
  }
);

module.exports = router;

