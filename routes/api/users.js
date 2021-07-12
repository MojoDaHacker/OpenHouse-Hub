const express = require("express");
const router = express.Router();

const { User } = require("../../models/User")

router.get("/getUser", (req, res, next) => {
  const user_id = req.session.passport.user
  User.findById(user_id, '-password')
  .then(user => res.send(user))
  .catch(next)
})

module.exports = router