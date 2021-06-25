import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

const ResumeSessionModal = props => {
  const [show, setModal] = useState(false)

  const handleClose = () => {
    setModal(!show)
    fetch("/api/sessions/endSession")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      
      <Modal.Body>
        <div>
          <p>Whoops, it seems you have an active session currently running.
            Would you like to resume?</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          End Session
        </Button>
        <Button as={Link} to="/session/123123" variant="primary">
          Resume Session
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ResumeSessionModal