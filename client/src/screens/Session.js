import React, { useState, useEffect } from 'react'
import SessionAdsAndInfo from '../components/SessionAdsAndInfo'
import SessionCreationModal from '../components/SessionCreationModal'
import ProfilePic from '../assets/img/profile.jpg'
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Image, ButtonGroup } from 'react-bootstrap'
import { Check, X, EnvelopeFill, TelephoneFill, PersonCircle, PencilFill, CircleFill, InfoCircle, Building } from 'react-bootstrap-icons'
import VisitorSignIn from '../components/VisitorSignIn'

const Session = props => {
  const [visitors, updateVisitors] = useState(
    props.user.activeSession ? props.user.activeSession.visitors : []
  );
  const history = useHistory()
  
  const saveVisitor = (visitor, cb) => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(visitor) // body data type must match "Content-Type" header
    }

    //send vistor to server to be saved
    return fetch("/api/sessions/addVisitor", init)
    .then(res => res.json())
    .then(data => {
      if(data.operationSuccessful) {
        updateVisitors(visitors => [...visitors, visitor])
      }
    })
    .catch(err => err)
  }
  const endSession = () => {
    fetch("/api/sessions/endSession")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.operationSuccessful){
        props.updateUser(data.user)
        history.push("/")
      }
    })
  }


  return (
    <div className="vh-100" id="desk">
      <SessionCreationModal show={!props.user.hasActiveSession}/>
      <Container className="h-100 py-4">
        <Row className="h-100 mx-3">
          <Col xs="auto" className="mb-3 mt-auto">
            <ButtonGroup vertical toggle={false} size="sm">
              <Button variant="light"><PencilFill /></Button>
              <Button variant="light"><InfoCircle /></Button>
              <Button onClick={endSession} variant="light" className="text-danger"><CircleFill /></Button>
            </ButtonGroup>
          </Col>
          <Col className="h-100 d-flex flex-column">
            <Card className="h-100 m-3">
              <Card.Body className="d-flex flex-column h-100">
                {/* <SessionAdsAndInfo /> */}
                <div className="text-center h-100 d-flex flex-column align-items-center">
                  <Image src={ProfilePic} width={200} roundedCircle/>
                  <div className="h-100">
                    <p className="">Realtor Badges</p>
                  </div>
                  <div className="h-100">
                    <p className=""><PersonCircle />{props.user.name}</p>
                  </div>
                  <div className="h-100">
                    <p className=""><TelephoneFill />Realtor Number</p>
                  </div>
                  <div className="h-100">
                    <p className=""><EnvelopeFill />Realtor Email</p>
                  </div>
                  <div className="h-100">
                    <p className=""><Building />Realtor Company</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="h-100 overflow-hidden">
            <div className="h-100 d-flex flex-column overflow-hidden rounded shadow" id="paper">
              <div>
                <ListGroup className="px-2 border-bottom border-primary m-0" as={Row} horizontal>
                  <ListGroup.Item as={Col} xs={2} className="bg-transparent border-0">Realtor</ListGroup.Item>
                  <ListGroup.Item as={Col} xs={5} className="bg-transparent border-0 flex-grow-1">Name</ListGroup.Item>
                  <ListGroup.Item as={Col} xs={5} className="flex-grow-1 bg-transparent border-0">Phone</ListGroup.Item>
                </ListGroup>
              </div>
              <div className="overflow-auto">
                {visitors.map((val, i) => (
                  <ListGroup className="p-2 m-0" key={i} as={Row} horizontal>
                    <ListGroup.Item as={Col} xs={2} className="bg-transparent border-0">{val.realtor ? <Check /> : <X />}</ListGroup.Item>
                    <ListGroup.Item as={Col} xs={5} className="bg-transparent border-0 flex-grow-1">{val.name}</ListGroup.Item>
                    <ListGroup.Item as={Col} xs={5} className="flex-grow-1 bg-transparent border-0">{val.phone}</ListGroup.Item>
                  </ListGroup>
                ))}
              </div>
              <div className="my-auto p-2">
                <VisitorSignIn saveVisitor={saveVisitor}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Session