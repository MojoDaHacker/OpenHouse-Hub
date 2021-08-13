import React, { useState } from 'react'
import { RealtorFormValidation } from '../../formValidations'
import { Form, Button, InputGroup } from 'react-bootstrap'

const RealtorProfileForm = props => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    company: "",
  })

  const onSubmit = e => {
    e.preventDefault()

    const newObj = Object.create(form)

    newObj.website = "https://" + newObj.website + ".com"
    

    RealtorFormValidation.validate(newObj)
    .then(val => props.updateRealtorProfile(val))
    .then(user => props.dismissModal())
    .catch(err => console.log(err))
  }
  const handleChange = e => {
    const { name, value } = e.target 

    setForm(state => ({
      ...state,
      [name]: value
    }))
  }

  return (
    <>
    <Form onSubmit={onSubmit}>
      {Object.keys(form).map((val, i) => (
        <Form.Group key={i}>
          <Form.Label>Realtor {val[0].toUpperCase() + val.slice(1)}</Form.Label>
          <InputGroup>
            {val == 'website' && (
              <InputGroup.Text>https://</InputGroup.Text>
              ) || val == "phone" && (
              <InputGroup.Text>+ 1</InputGroup.Text>
            )}
            <Form.Control name={val} onChange={handleChange} type="text" value={form[val]}/>
            {val == 'website' && (
              <InputGroup.Text>.com</InputGroup.Text>
            )}
          </InputGroup>
        </Form.Group>
      ))}
      <Form.Group >
        <Button variant="danger" onClick={props.handleCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </Form.Group>
    </Form>
    </>
  )
}

export default RealtorProfileForm