import React, { useState } from 'react'
import { Container, Row, Col, ListGroup, Carousel } from 'react-bootstrap'
import Chart from '../components/Chart'

const SessionDetail = props => {

  const { completedSessions } = props.user

  return (
    <Container className="mt-3 vh-100">
      <Row>
        <h2>Home Address</h2>
      </Row>
      <Row className="h-25">
        <Col>
          <div>
            <p>Data and Time</p>
            <p>Visitors</p>
            <p>Likes</p>
          </div>
        </Col>
        <Col>
          <div>
            <h3>Reviews</h3>
            <Carousel>
              <Carousel.Item>Very Good</Carousel.Item>
              <Carousel.Item>It was ok</Carousel.Item>
              <Carousel.Item>There was a roach in the bathroom</Carousel.Item>
              <Carousel.Item>Nice neighborhood.</Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          {completedSessions[0].visitors.length < 1 ? (
            <div className="text-center">
              <p>Uh oh, it seems you didn't sign in any visitors at this open house...</p>
            </div>
          ) : (
            <ListGroup>
              {completedSessions[0].visitors.map(( obj, i ) => (
                <ListGroup.Item key={i}>Hello</ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col>
          <Chart />
        </Col>
      </Row>
    </Container>
  )
}

export default SessionDetail