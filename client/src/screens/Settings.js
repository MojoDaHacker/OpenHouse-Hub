import React from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Card, Container, Button, ListGroup, Col, Row, Jumbotron, Image} from 'react-bootstrap'

const Settings = props => {
  const history = useHistory();
  const logout = () => {
    fetch('/logout')
    .then(res => {
      if(res.status == 200) {
        // Cookies.remove('connect.sid', { path: '/' })
        // authKit.authorizeUser(false)
        // history.push("/")
      }
    })
  }

  return (
    <Container className="h-100 overflow-auto" fluid>
      <Row>
        <Col>
          <Jumbotron className="mt-2">
            <Container>
              <Row>
                <Col>
                  <Image src="#" alt="profiler picture of user" roundedCircle/>
                </Col>
                <Col>
                  <p>Full Name : Matthew McKenzie</p>
                  <p>Email : Mojomckenzie@knights.ucf.edu</p>
                  <p>Contact Number : 786-686-8452</p>
                  <p>Company : EXP Realty LLC</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <Button>Edit Profile</Button>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup className="mt-5">
            <ListGroup.Item>
              <Button className="text-primary bg-transparent border-0 p-0 ">Invite a Friend</Button>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="mt-5">
            <ListGroup.Item>
              <Button className="text-primary bg-transparent border-0 p-0 ">Rate OpenHouse Hub</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="text-primary bg-transparent border-0 p-0 ">About OpenHouse Hub</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="text-primary bg-transparent border-0 p-0 ">Terms & Policy</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="text-primary bg-transparent border-0 p-0 ">Privacy Policy</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="text-primary bg-transparent border-0 p-0 ">Report a Problem / Provide Feedback</Button>
            </ListGroup.Item>
          </ListGroup>
          <div className="w-100 text-center">
            <Button className="m-3 btn-danger" onClick={logout}>Log Out</Button>
          </div>
        </Col>
      </Row>
         
    </Container>
  )
}

export default Settings