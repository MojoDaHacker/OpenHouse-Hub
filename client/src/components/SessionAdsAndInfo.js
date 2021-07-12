import React from 'react'
import { Carousel } from 'react-bootstrap'

const SessionAdsAndInfo = props => {
  return (
    <Carousel fade={false} indicators={false} controls={false}>
      <Carousel.Item>
        <div>Did you know you could save 15% on your car insurance?</div>
        {/* <Carousel.Caption>
          <p>Or more...</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div>How?</div>
        {/* <Carousel.Caption>
          <p>Or more...</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default SessionAdsAndInfo