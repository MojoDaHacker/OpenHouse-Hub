import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, ListGroup, Carousel, Tabs, Tab, Sonnet } from 'react-bootstrap'
import ImageSideshow from '../components/ImageSideshow'
import Chart from '../components/Chart'

const SessionDetail = props => {
  const { i } = useParams();
  const session = props.user.completedSessions[i]

  console.log(session)
  return (
    <Container className="mt-3 vh-100" fluid>
      <Row className="h-50">
        <Col>
          <div>
            <h1></h1>
          </div>
          <div>
            <ImageSideshow />
          </div>
          {/* <div className="d-flex justify-content-around">
            <div>
              <p className="text-decoration-underline mb-2">Date</p>
              <p>Date</p>
            </div>
            <div>
              <p className="text-decoration-underline mb-2">Visitors</p>
              <p>Visitors</p>
            </div>
            <div>
              <p className="text-decoration-underline mb-2">Likes</p>
              <p>Likes</p>
            </div>
          </div> */}
        </Col>
        <Col>
          <div className="mb-3 border-bottom">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 ">
              <Tab eventKey="home" title="Info">
                <div>
                  <h3>Reviews</h3>
                  <Carousel>
                    <Carousel.Item>Very Good</Carousel.Item>
                    <Carousel.Item>It was ok</Carousel.Item>
                    <Carousel.Item>There was a roach in the bathroom</Carousel.Item>
                    <Carousel.Item>Nice neighborhood.</Carousel.Item>
                  </Carousel>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Reviews">
                <div>
                  <h3>Reviews</h3>
                  <Carousel>
                    <Carousel.Item>Very Good</Carousel.Item>
                    <Carousel.Item>It was ok</Carousel.Item>
                    <Carousel.Item>There was a roach in the bathroom</Carousel.Item>
                    <Carousel.Item>Nice neighborhood.</Carousel.Item>
                  </Carousel>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Performance" disabled>
                <div>
                  <h3>Reviews</h3>
                  <Carousel>
                    <Carousel.Item>Very Good</Carousel.Item>
                    <Carousel.Item>It was ok</Carousel.Item>
                    <Carousel.Item>There was a roach in the bathroom</Carousel.Item>
                    <Carousel.Item>Nice neighborhood.</Carousel.Item>
                  </Carousel>
                </div>
              </Tab>
            </Tabs>
          </div>
          {session.visitors.length < 1 ? (
            <div className="text-center">
              <p>Uh oh, it seems you didn't sign in any visitors at this open house...</p>
            </div>
          ) : (
            <ListGroup>
              {session.visitors.map(( obj, i ) => (
                <ListGroup.Item key={i}>Hello</ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default SessionDetail