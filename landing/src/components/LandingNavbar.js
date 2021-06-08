import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import LogInModal from './LogInModal'

export default function Bar() {
  const [show, setModal] = useState(false)
  const toggleModal = () => setModal(!show)

  return (
    <>
      <LogInModal show={show} onHide={toggleModal} />
      <Navbar bg="transparent" variant="light" expand="lg" className="">
        <Navbar.Brand href="#home">
          <img
            src="/assets/illustrations/favicon_io/favicon.ico"
            // width="30"
            // height="30"
            className="d-inline-block align-top"
            alt="Open House Hub logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/login">Log In</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
