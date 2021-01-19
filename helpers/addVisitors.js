const path = require("path");
const fs = require("fs");
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;

//create file to hold temporary data of visitors from open house

const addVisitor = (visitor, sessionID) => {
  var appendHead;

  if (!fs.existsSync(path.join("sessionCSVs", sessionID + '.csv'))) {
    appendHead = true;
  }
  const csvStringifier = createCsvStringifier({
    header: Object.keys(visitor).map(val => ({id: val , title: val})),
  });
  
  fs.open(path.join("sessionCSVs", sessionID + ".csv"), "a", (err, fd) => {
    if (err) console.log("Error: " + err)
    if (appendHead) fs.writeSync(fd, csvStringifier.getHeaderString())
    fs.writeSync(fd, csvStringifier.stringifyRecords([visitor]))
    fs.closeSync(fd)
  })

  return 1
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

