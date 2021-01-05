import React from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AuthHook} from '../contexts/authContext'
import {Card, Container, Button, ListGroup, Col, Row, Jumbotron} from 'react-bootstrap'

const Settings = props => {
  const history = useHistory();
  const {authKit} = AuthHook();
  const logout = () => {
    fetch('/logout')
    .then(res => {
      if(res.status == 200) {
        Cookies.remove('connect.sid', { path: '/' })
        authKit.authorizeUser(false)
        history.push("/")
      }
    })
  }

  return (
    <Container className="h-100 d-flex flex-column" fluid>
      <Row className="h-100">
        <Col className="h-100">
          <Card className="my-auto h-100">
            <Card.Body className="p-2 overflow-auto">
              <ListGroup>
                <ListGroup.Item>
                  <Button className="text-primary bg-transparent p-1 border-0">Edit Profile</Button>
                </ListGroup.Item>
              </ListGroup>
              <Jumbotron className="mt-2">
                <Container>
                  <Row>
                    <Col>
                      <p>Full Name : Matthew McKenzie</p>
                      <p>Email : Mojomckenzie@knights.ucf.edu</p>
                      <p>Company : EXP Realty LLC</p>
                    </Col>
                    <Col>

                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Settings