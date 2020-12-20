import React, {useState} from 'react'
import Table from '../Components/Table.js'

const History = props => {
  const [sessionHistory, setHistory] = useState([])

  return <Table/>
}

export default History