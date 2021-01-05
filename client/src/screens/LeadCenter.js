import React, {useState} from 'react'
import Table from '../Components/Table.js'

const LeadCenter = props => {
  const [leadHistory, setLeads] = useState([])
  var rows = []
  var cols = [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "fName",
      Header: "First Name",
    },
    {
      accessor: "lName",
      Header: "Last Name",
    },
    {
      accessor: "openHouseVisited",
      Header: "Visited",
    },
    {
      accessor: "activeLooking",
      Header: "Actively Looking",
    },
  ]

  for (let i = 0; i < 25; i++) {
    const obj = {
      id: i,
      fName: "Mark",
      lName: "Tulan",
      openHouseVisited: "24123 Shabba St",
      activeLooking: false,
    }
    rows[i] = obj
  }

  return(
    <Table row={rows} col={cols} />
  )
}

export default LeadCenter