const express = require("express");
const router = express.Router();

const { User } = require("../../models/User")

router.get("/getUser", (req, res, next) => {
  const user_id = req.session.passport.user
  User.findById(user_id, '-password')
  .populate('latestSession')
  .populate('completedSessions')
  .then(user => {
    res.send(user)
  })
  .catch(next)
})

router.post("/editUserRealtorProfile", (req, res, next) => {
  const user_id = req.session.passport.user
  
  User.findById(user_id)
  .then(user => {
    user.profile = req.body
    return user.save()
  })
  .then(user => {
    res.send(user)
  })
  .catch(next)
})

router.get("/resetUserPassword", (req, res, next) => {
  const user_id = req.session.passport.user
  User.findById(user_id, '-password')
  .populate('latestSession')
  .populate('completedSessions')
  .then(user => {
    res.send(user)
  })
  .catch(next)
})

module.exports = router