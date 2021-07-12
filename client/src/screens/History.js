import React, {useState} from 'react'
import Table from '../components/Table.js'

const History = props => {
  const [leadHistory, setHistory] = useState([])
  var rows = []
  var cols = [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "address",
      Header: "Address",
    },
    {
      accessor: "visitors",
      Header: "Visitors",
    },
    {
      accessor: "leads",
      Header: "Leads",
    },
    {
      accessor: "rating",
      Header: "Rating",
    },
  ]

  for (let i = 0; i < 25; i++) {
    const obj = {
      id: i,
      visitors: 10,
      leads: 5,
      address: "24123 Shabba St",
      rating: 4,
    }
    rows[i] = obj
  }

  return(
    <Table row={rows} col={cols} />
  )
}

export default History