import React, { useState } from 'react'
import { Media } from 'react-bootstrap'

export default function QuickAnalytics(props){
  const [quickAnalysis, setAnalysis] = useState([])

  return(
    <>
      <Media className="flex-row-reverse" style={{height: "5.5rem"}}>
        {/* <IconContext.Provider value={{size: "3rem", style:{fontWeight: "200"}, className: "p-1 rounded-circle align-self-center"}}>
          <FcHome />
        </IconContext.Provider> */}
        <Media.Body className="pr-3 text-right">
          {quickAnalysis.length > 0 ?
          quickAnalysis.map(val => (
            <p>{val}</p>
          )):
          <p>No Data Available!</p>}
        </Media.Body>
      </Media>
    </>
  )
}