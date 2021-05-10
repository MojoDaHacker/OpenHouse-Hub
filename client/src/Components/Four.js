import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Four = props => {

  return (
    <Container className="vh-100 py-5">
      <Row className="h-100" noGutters>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <h2>Easy sign in sheet for use.</h2>
              <p>Record your visitors.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <h2>Easy sign in sheet for use.</h2>
              <p>Record your visitors.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <h2>Easy sign in sheet for use.</h2>
              <p>Record your visitors.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-3 text-center">
        <Col>
          <Button>Join Now</Button>
        </Col>
      </Row>
    </Container>
  )
}
export default Four