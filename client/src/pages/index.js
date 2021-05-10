import Head from 'next/head'
import Link from 'next/Link'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { House } from 'react-bootstrap-icons'
import LandingPage from './LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';



export default function Index(props) {
  
  return (
    props.user ? (
      <Container className="vh-100" fluid>
        <Row>
          <Col xs='auto'>
            <Navbar className="flex-column">
              <Navbar.Brand>B</Navbar.Brand>
              <Nav defaultActiveKey="home" className="flex-column">
                <Nav.Link as={Link} href='/' eventKey="home"><House /></Nav.Link>
                <Nav.Link as={Link} href='' eventKey="link-1">Link</Nav.Link>
                <Nav.Link as={Link} href='' eventKey="link-2">Link</Nav.Link>
                <Nav.Link as={Link} href='' eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <Home hello="hello" {...props} />
          </Col>
        </Row>
      </Container>
    ) : (
      <LandingPage />
    )
  )
}
