import { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function LogInModal(props) {
  const [formInputValues, setInputValues] = useState({email: '', pass: ''})
  const handleChange = e => setInputValues({
    ...formInputValues,
    [e.target.name]: e.target.value
  })
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <Modal {...props}>
        <Modal.Body>
          <div id="firebaseLoginUi"></div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' value={formInputValues.email} onChange={handleChange} type='email' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name='pass' value={formInputValues.pass} onChange={handleChange} type='password' />
            </Form.Group>
            <Form.Group>
              <div>
                <Form.Check label='Remember Me' />
              </div>
              <div>
                <Button type='button' variant="link">Forgot Username/Password</Button>
                <Button type='submit'>Log In</Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
