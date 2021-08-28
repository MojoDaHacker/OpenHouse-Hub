import React from 'react'
import { Card, Image } from 'react-bootstrap'
import ProfilePic from '../assets/img/profile.jpg'
import HostBackground from '../assets/img/hostBackground.jpeg'

const HostPanel = props => {
  return (
    <Card className="h-100 m-3" style={{ backgroundImage: `url(${HostBackground})` }}>
      <Card.Header className="bg-transparent border-bottom-0">
        <h1>Welcome to our open house!</h1>
        <h3 className="ml-3">We're glad you could make it!</h3>
      </Card.Header>
      <Card.Body className="d-flex flex-column h-100">
        {/* <SessionAdsAndInfo /> */}
        <div className="text-center h-100 d-flex flex-column align-items-center">
          <Image src={ProfilePic} width={200} roundedCircle/>
          {Object.values(props.user.profile)
          // .reverse()
          .map((val, i) => i > 0 ? <p className="" key={i}>{val}</p> : null )}
        </div>
      </Card.Body>
    </Card>
  )
}


// sort strings from length low to high
const formatRealtorInfo = arr => arr.sort()

export default HostPanel
