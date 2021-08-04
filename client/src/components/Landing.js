import React from 'react'
import { Container } from 'react-bootstrap'
import KitchenCounter from '../assets/img/kitchenCounter.jpeg'

const backgroundStyles = {
  backgroundImage: `url(${KitchenCounter})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const Landing = () => {
  return (
    <div className="min-vh-100" style={backgroundStyles}>
      <Container>
        
      </Container>
    </div>
  )
}

export default Landing