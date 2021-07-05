import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SessionAdsAndInfo from '../../Components/SessionAdsAndInfo'
// import SetupModal from '../../Components/sessionSetupModal'
// import EditHostModal from '../../Components/EditHostModal'
import { Container, Row, Col, Form, Card, Button, ListGroup, Image, ButtonGroup } from 'react-bootstrap'
import { Check, X, EnvelopeFill, TelephoneFill, Building, PersonCircle, PencilFill, CircleFill, InfoCircle } from 'react-bootstrap-icons'
import VisitorSignIn from '../../components/VisitorSignIn'

const Session = props => {
  const Router = useRouter();
  const [visitors, updateVisitors] = useState([]);
  const hostIcons = [<PersonCircle/>, <EnvelopeFill/>, <TelephoneFill/>, <Building/>];
  
  const [host, changeHostInfo] = useState({})
  const [hostAvatar, changeAvatar] = useState(null)
  const [edit, editHost] = useState(false)

  const saveVisitor = visitor => {
    console.log(visitor)
    const opt = {
      method: 'POST',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(visitor) // body data type must match "Content-Type" header
    }

    //send vistor to server to be saved
    fetch("/api/sessions/addVisitor", opt)
    .then(res => console.log(res.status))
  }
  const endSession = () => {
    Router.push('/')
  }
  
  return (
    <div className="vh-100" id="desk">
      {/* <SetupModal edit={[edit, editHost]} changeHost={[host, changeHostInfo]} changeAvatar={changeAvatar} /> */}
      {/* <EditHostModal editKit={[edit, editHost]} changeHost={[host, changeHostInfo]} changeAvatar={changeAvatar} /> */}
      <Container className="h-100 py-4">
        <Row className="h-100 mx-3">
          <Col xs="auto" className="mb-3 mt-auto">
            <ButtonGroup vertical toggle={false} size="sm">
              <Button variant="light"><PencilFill /></Button>
              <Button variant="light"><InfoCircle /></Button>
              <Button variant="light" className="text-danger" onClick={endSession}><CircleFill /></Button>
            </ButtonGroup>
          </Col>
          <Col className="h-100 d-flex flex-column">
            <Card className="h-100 m-3">
              <Card.Header>
                <div className="d-flex">
                  <div>
                    <Image src='/assets/img/profile.jpg' width={100} roundedCircle/>
                  </div>
                  <div className="ml-3">
                    <div className="d-inline-block">
                      <p>Realtor Name</p>
                      <p>Realtor Number</p>
                      <p>Realtor Email</p>
                    </div>
                    <div className="d-inline-block">
                      <p>Realtor Company</p>
                      <p>Realtor Badges</p>
                    </div>
                  </div>
                </div>
              </Card.Header>
              <Card.Body className="d-flex flex-column justify-content-center h-100">
                <SessionAdsAndInfo />
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
                    <ListGroup.Item as={Col} xs={2} className="bg-transparent border-0">{val.Realtor ? <Check /> : <X />}</ListGroup.Item>
                    <ListGroup.Item as={Col} xs={5} className="bg-transparent border-0 flex-grow-1">{val.Name}</ListGroup.Item>
                    <ListGroup.Item as={Col} xs={5} className="flex-grow-1 bg-transparent border-0">{val.Phone}</ListGroup.Item>
                  </ListGroup>
                ))}
              </div>
              <div className="my-auto p-2">
                <VisitorSignIn visitorsState={[visitors, updateVisitors]}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Session