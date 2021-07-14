

const createCSV = visitorsRecords => {
  //create data string
  var csvContent = "data:text/csv;charset=utf-8,";

  visitorsRecords.forEach(record => {
    const row = Object.values(record).join(",")
    csvContent += row + "\r\n" 
  })

  console.log(csvContent)
}

export default createCSV