const express = require("express");
const router = express.Router();
const multer = require("multer");
const flash = require('connect-flash')
const passport = require("passport");

router.use(passport.initialize())
router.use(passport.session())
router.use(flash())
require('../../config/passport')(passport)

const upload = multer();



const { register } = require('../../operations/register')

// Load input validation
const { validateRegisterInput, validateLoginInput } = require("../../validation/index");


const validationRegisterHandler = (req, res, next) => {
  // Form validation
  const validation = validateRegisterInput(req.body);
  if(!validation.errors){
    req.body = validation
    next()
  } else {
    res.status(400).json(validation)
  }
}
const validationLoginHandler = (req, res, next) => {
  // Form validation
  const validation = validateLoginInput(req.body);
  if(!validation.errors){
    req.body = validation
    next()
  } else {
    res.status(400).json(validation)
  }
}


/// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", upload.none(), validationRegisterHandler, register, 
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

// @route POST submissions/login
// @access Public
router.post('/login',
  upload.none(),
  validationLoginHandler,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

router.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something not working!')
})

module.exports = router;

