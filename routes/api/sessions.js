const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

// import helpers
const {addVisitor, downloadCSV} = require("../../helpers/addVisitors")

// @desc create or append new CSV file with new visitors
router.post("/addVisitor", (req, res) => {
  if(addVisitor(req.body, req.session.id)) res.end()
  else res.status(500).end()
});

// @desc send csv then delete csv from fs
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

module.exports = router;

