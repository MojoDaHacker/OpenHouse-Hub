const path = require("path");
const fs = require("fs");

const { Session } = require("../models/Session")
const { Visitor } = require("../models/Visitor");


const addVisitor = payload => {
  const { visitor, latestSessionId } = payload
  
  return Session.findById(latestSessionId)
  .then(session => {
    const newVisitor = new Visitor(visitor)
    session.visitors.push(newVisitor)
    return session.save()
  })
};


// 
const downloadCSV = sessionID => {
  if (fs.existsSync(path.join("sessionCSVs", sessionID + '.csv'))) {
    return path.join("sessionCSVs", sessionID + ".csv")
  } else {
    return false
  }
}

module.exports = {
  addVisitor,
  downloadCSV
}

