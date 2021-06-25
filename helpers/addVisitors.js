const path = require("path");
const fs = require("fs");

const { Session } = require("../models/Session")
const { Visitor } = require("../models/Visitor")


const addVisitor = (visitor, session) => {
  console.log(visitor, session.passport)
  return Session.findOne()
  .byLinkedUser(session.passport.user)
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

