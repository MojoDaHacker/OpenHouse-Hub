const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

const { User } = require('../../models/User')
const { Session } = require('../../models/Session')

// import helpers
const {addVisitor, downloadCSV} = require("../../helpers/addVisitors")

// @desc create or append new CSV file with new visitors
router.post("/addVisitor", (req, res) => {
  addVisitor(req.body, req.session)
  .then(() => {
    res.send({
      operationSuccessful: true,
    })
  })
  .catch(err => res.send({
    operationSuccessful: false,
    message: err
  }))
});

// creates
router.get("/downloadSessionCSV", (req, res) => {
  const file = downloadCSV(req.session.id);

  if(file){ // send CSV file for download
    res.download(path.join(file), err => {
      if(err) console.log("Error: " + err)
      res.end()
      fs.unlinkSync(file)
    })
  } else {
    res.status(404).end()
  }
});

/**
 * @description initializes new Open House Session
 */
router.post("/createSession", (req, res) => {
  const userId = req.session.passport.user;
  User.findById(userId)
  .then(user => {
    if(user){
      const createdSession = new Session({
        linkedUser: userId,
        ...req.body
      })
      user.latestSession = createdSession._id
      user.hasActiveSession = true
      user.save()
      .then(user => {
        createdSession.save()
        res.send({ operationSuccessful : true, createdSession, user })
      })
      .catch(err => res.send({
        operationSuccessful: false,
        message: err
      }))
    } else {
      res.send({operationSuccessful: false, message: "User not found"})
    }
  })
});

router.get("/endSession", (req, res) => {
  const userId = req.session.passport.user;
  User.findById(userId, '-password')
  .then(user => {
    if(user){
      user.completedSessions.push(user.latestSession)
      user.hasActiveSession = false;

      user.save()
      .then(async user => {
        await user.populate('latestSession').populate('completedSessions').execPopulate()
        res.send({ operationSuccessful : true, user })
      })
      .catch(err => {
        console.log(err)
        res.send({
          operationSuccessful: false,
          message: err
        })
      })
    } else {
      res.send({operationSuccessful: false, message: "User not found"})
    }
  })
})



module.exports = router;

