import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Modal, Button, Form, Col } from 'react-bootstrap'

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT	",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "VI",
  "WA",
  "WV",
  "WI",
  "WY",
]

const SessionCreationModal = props => {
  const [show, setModal] = useState(props.show)
  const [formState, setFormState] = useState({
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  })
  const history = useHistory()
  const handleModalVisibility = () => setModal(!show)
  const handleInputChange = e => {
    const value = e.target.value
    setFormState({
      ...formState,
      [e.target.name] : value
    })

  }
  const handleSubmission = () => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(formState)
    }

    fetch("/api/sessions/createSession", init)
    .then(res => res.json())
    .then(data => {
      if(data.operationSuccessful){
        handleModalVisibility()
        props.updateUser(user => ({
          ...user,
          latestSession: data.createdSession
        }))
      } else {
        console.log(data)
      }
    })
  }

  return (
    <Modal backdrop="static" show={show} onHide={handleModalVisibility}>
      <Modal.Header>
        <Modal.Title>Let's Setup Your Open House</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address" value={formState.address} onChange={handleInputChange} placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control name="address2" value={formState.address2} onChange={handleInputChange} placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" value={formState.city} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" name="state" onChange={handleInputChange} defaultValue="Choose...">
                {states.map((st, i) => <option key={`st${i}`}>{st}</option>)}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control name="zip" value={formState.zip} onChange={handleInputChange} />
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button as={Link} to="/" variant="secondary">
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmission}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SessionCreationModal