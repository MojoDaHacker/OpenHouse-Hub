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
  .then(session => {
    console.log(session)
    res.send({
      operationSuccessful: true,
      message: ""
    })
  })
  .catch(err => res.send({
    operationSuccessful: false,
    message: err
  }))
});

// send csv then delete csv from fs
router.get("/endSessionCSV", (req, res) => {
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
      const newSession = new Session({
        linkedUser: userId,
        address: "1651 SW 127TH AVE",
        address2: "APT 207",
        city: "PEMBROKE PINES",
        state: "FL",
        zip: 33027
      })
      newSession.save()
      .then(session => {
        user.hasActiveSession = true
        user.activeSession = session
        user.save()
        .then(() =>
          res.send({ operationSuccessful : true, session })
        )
        .catch(err => res.send({
          operationSuccessful: false,
          message: err
        }))
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

router.post("/endSession", (req, res) => {
  const userId = req.session.passport.user;

  User.findById(userId)
})



module.exports = router;

