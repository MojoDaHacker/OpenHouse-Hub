import React, { useState } from 'react'
import Chart from './Chart'
import { Media } from 'react-bootstrap'

export default function QuickAnalytics(props){
  const [quickAnalysis, setAnalysis] = useState([])

  return (
    <div>
      <Chart />
    </div>
  )
}