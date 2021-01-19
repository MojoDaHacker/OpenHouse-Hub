import React, { useState, useEffect } from 'react'
import EndSession from '../Components/EndSessionButton'
import SetupModal from '../Components/sessionSetupModal'
import EditHostModal from '../Components/EditHostModal'
import {Container, Row, Col, Form, Card, Button, ListGroup, Image} from 'react-bootstrap'
import {Check, X, EnvelopeFill, TelephoneFill, Building, PersonCircle, PencilFill} from 'react-bootstrap-icons'

const formTypes = ["Name", "Phone", "Realtor"];

const Session = props => {
  const [currentForm, changeCurrentForm] = useState(0);
  const [isChecked, setCheck] = useState(false);
  const hostIcons = [<PersonCircle/>, <EnvelopeFill/>, <TelephoneFill/>, <Building/>];
  const [input, setInput] = useState("");
  const [visitor, addVisitor] = useState({});
  const [visitors, updateVisitors] = useState([]);
  const [showAppreciation, setAppreciation] = useState(false);
  const [host, changeHostInfo] = useState({})
  const [hostAvatar, changeAvatar] = useState(null)
  const [edit, editHost] = useState(false)

  useEffect(() => {
    if (currentForm > 2) {
      updateVisitors(visitors => [...visitors, visitor])
      saveVisitor(visitor)
      setAppreciation(true)
      setTimeout(() => {
        setAppreciation(false)
      }, 4000);
      changeCurrentForm(0)
    }
  }, [visitors, visitor, isChecked])

  const handleVisitors = e => currentForm !== 2 ? setInput(e.target.value) : setCheck(!isChecked)
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    if (currentForm !== 2) {
      setInput("")
      addVisitor(visitor => ({...visitor, [formTypes[currentForm]] : input}))
      changeCurrentForm(currentForm + 1)
    } else {
      addVisitor(visitor => ({...visitor, [formTypes[currentForm]] : isChecked}))
      changeCurrentForm(currentForm + 1)
      setCheck(false)
    }
  }
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
  
  return (
    <div className="vh-100" id="desk">
      <SetupModal edit={[edit, editHost]} changeHost={[host, changeHostInfo]} changeAvatar={changeAvatar} />
      <EditHostModal editKit={[edit, editHost]} changeHost={[host, changeHostInfo]} changeAvatar={changeAvatar} />
      <Container className="h-100 py-4">
        <Row className="h-100 mx-3">
          <Col className="h-100 d-flex flex-column">
            <Card className="h-100 m-3">
              <Card.Header>
                <Button className="bg-transparent text-primary border-0" onClick={() => editHost(true)}><PencilFill/></Button>
              </Card.Header>
              <Card.Body className="d-flex flex-column justify-content-center h-100">
                {hostAvatar && <Image className="w-50 mx-auto text-center mb-2" src={hostAvatar} alt="profile Picture" roundedCircle/>}
                {Object.values(host).map((val, i) => {
                  if(i !== host.length){
                    return (
                      <ListGroup className="text-center" horizontal>
                        <ListGroup.Item className="m-0 p-1 text-primary border-0">{hostIcons[i]}</ListGroup.Item>
                        <ListGroup.Item className="m-0 p-1 w-100 border-0"><p>{val}</p></ListGroup.Item>
                      </ListGroup>
                    )
                  } else {
                    return null
                  }
                })}
              </Card.Body>
            </Card>
            <div className="mt-auto text-center">
              <EndSession className="rounded-pill" numVisitors={visitors.length}/>
            </div>
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
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="p-2 text-center">
                    <Form.Label>{showAppreciation ? `Enjoy the tour ${visitors[visitors.length - 1].Name.split(" ")[0]}` : "Please Sign In" }</Form.Label>
                    {currentForm == 2 ? (
                      <Form.Check
                        onChange={handleVisitors}
                        type="checkbox"
                        label={`Have a ${formTypes[currentForm]}?`}
                      />
                    ) : (
                      <Form.Control 
                        required
                        className="border-0 bg-transparent text-center"
                        value={input} 
                        name={formTypes[currentForm]} 
                        onChange={handleVisitors} 
                        type={formTypes[currentForm]} 
                        placeholder={formTypes[currentForm]} 
                      />
                    )}
                  </Form.Group>
                  <Form.Group className="mt-3 text-center">
                    <Button type="sumbit">Submit</Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Session