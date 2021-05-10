import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

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
              <Button>Sign Up Now!</Button>
            </div>
          </div>
        </Col>
        {/* <Col>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Control type='text' placeholder="Username" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type='password' placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button type='submit'>Sign In</Button>
                <Button>Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  )
}
export default One