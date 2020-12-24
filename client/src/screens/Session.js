import React, { useState, useEffect } from 'react'
import Table from '../Components/Table'
import EndSession from '../Components/EndSessionButton'
import {Container, Row, Col, Form, Card, Button, ListGroup} from 'react-bootstrap'
import {Check, X} from 'react-bootstrap-icons'


const Session = props => {
  const [currentForm, changeCurrentForm] = useState(0);
  const [isChecked, setCheck] = useState(false);
  const formTypes = ["Name", "Phone", "Realtor"];
  const [input, setInput] = useState("");
  const [visitor, addVisitor] = useState({});
  const [visitors, updateVisitors] = useState([]);
  const [showAppreciation, setAppreciation] = useState(false);

  useEffect(() => {
    if (currentForm > 2) {
      updateVisitors(visitors => [...visitors, visitor])
      setAppreciation(true)
      setTimeout(() => {
        setAppreciation(false)
      }, 4000);
      changeCurrentForm(0)
    }
  }, [visitors, visitor, isChecked])


  const handleChange = e => currentForm !== 2 ? setInput(e.target.value) : setCheck(!isChecked)
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
  return (
    <div className="vh-100" id="desk">
      <Container className="h-100 py-4">
        <Row className="h-100 mx-3">
          <Col className="h-100 d-flex flex-column text-center">
            <h1>Welcome</h1>
            <Card className="h-75 my-auto">
              <Card.Header className="p-1">
                <h2>Did you know?</h2>
              </Card.Header>
              <Card.Body>
                J
              </Card.Body>
            </Card>

            <div className="mt-auto">
              <EndSession className="rounded-pill"></EndSession>
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
                        onChange={handleChange}
                        type="checkbox"
                        label={`Have a ${formTypes[currentForm]}?`}
                      />
                    ) : (
                      <Form.Control 
                        required
                        className="border-0 bg-transparent text-center"
                        value={input} 
                        name={formTypes[currentForm]} 
                        onChange={handleChange} 
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