import React, {useState} from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const SessionCreator = props => {
  const [sessionID, setSessionID] = useState(0)

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    console.log(props)
  }

  return(
  <>
    <Form onSubmit={handleSubmit}>
      <Form.Row><h2 className="mx-auto">Create a Session</h2></Form.Row>
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Row>
        <div className="mx-auto">
          {/* <Link to={`session/${sessionID}`}> */}
            <Button type="submit">Create Session</Button>
          {/* </Link> */}
        </div>
      </Form.Row>
    </Form>
  </>
  )
}

export default SessionCreator