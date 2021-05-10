import { Container, Nav } from 'react-bootstrap';

const Footer = props => {

  return (
    <Container fluid>
      <Nav className="justify-content-end">
        <Nav.Link>Facebook</Nav.Link>
        <Nav.Link>Twitter</Nav.Link>
        <Nav.Link>Google</Nav.Link>
      </Nav>
    </Container>
  )
}
export default Footer