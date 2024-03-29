import React, { useState, useEffect } from 'react'
// import SessionAdsAndInfo from '../components/SessionAdsAndInfo'
import SessionCreationModal from '../components/modals/SessionCreationModal'
import SetupRealtorProfileModal from '../components/modals/SetupRealtorProfileModal'
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Image, ButtonGroup } from 'react-bootstrap'
import { Check, X, EnvelopeFill, TelephoneFill, PersonCircle, PencilFill, CircleFill, InfoCircle, Building } from 'react-bootstrap-icons'
import VisitorSignIn from '../components/VisitorSignIn'
import HostPanel from '../components/HostPanel';

const Session = props => {
  const [endSessionSwitch, setEndSession] = useState(false)
  const [visitors, updateVisitors] = useState(
    props.user.latestSession && props.user.hasActiveSession ? props.user.latestSession.visitors : []
  );
  const history = useHistory()

  useEffect(() => {
    endSessionSwitch && history.push("/")
  }, [endSessionSwitch])
  
  const saveVisitor = (visitor, cb) => {
    const { latestSession } = props.user

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latestSessionId: latestSession._id,
        visitor
      }) // body data type must match "Content-Type" header
    }

    //send vistor to server to be saved
    return fetch("/api/sessions/addVisitor", init)
    .then(res => res.json())
    .then(data => {
      if(data.operationSuccessful) {
        console.log(data)
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
        setEndSession(true)
      }
    })
  }

  return (
    <div className="vh-100" id="desk">
      <SessionCreationModal show={!props.user.hasActiveSession} updateUser={props.updateUser}/>
      <SetupRealtorProfileModal show={Object.keys(props.user.profile).length === 0} updateRealtorProfile={props.updateUserRealtorProfile} />
      <Container className="h-100 py-4">
        <Row className="h-100 mx-3 justify-content-center">
          <Col xs="auto" className="mb-3 mt-auto">
            <ButtonGroup vertical toggle={false} size="sm">
              <Button variant="light"><PencilFill /></Button>
              <Button variant="light"><InfoCircle /></Button>
              <Button onClick={endSession} variant="light" className="text-danger"><CircleFill /></Button>
            </ButtonGroup>
          </Col>
          {/* <Col className="h-100 d-flex flex-column">
            <HostPanel {...props} />
          </Col> */}
          <Col xs={6} className="h-100 overflow-hidden">
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