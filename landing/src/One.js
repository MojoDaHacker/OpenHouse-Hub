import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const One = props => {

  return (
    <Container id='LandingPageSVG'>
      <Row className="h-100">
        <Col md={6}>
          <div className="mt-5 w-100">
            <p className="h4 text-center">
              Attract and engage with more visitors, while 
              having an information hub for everyone in the house to access.
            </p>
            <div className="text-center">
              <Button as={Link} to="/register">Sign Up Now!</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default One