import React from 'react'
import { Form } from 'react-bootstrap'

const RealtorProfileForm = props => {
  return (
    <Form onSubmit>
      <Form.Group>
        <Form.Label>Realtor Name</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Realtor Phone</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Realtor Email</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Realtor Website</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Realtor Company</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
    </Form>
  )
}

export default RealtorProfileForm