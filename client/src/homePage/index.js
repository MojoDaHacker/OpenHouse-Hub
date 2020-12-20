import React from 'react';
import Content from './layout/content.js';
import SessionDemo from './Components/sessionDemo';
import './assets/img/index.js';
import './custom.css';
import { Container, Row, Col, Image, Nav, Navbar, Form, Button} from 'react-bootstrap';
import getAssets from './assets/img/index.js';



export default class HomePage extends React.Component{

  render(){
    return (
      <>
        <Header header={1}/>
        <Content />
        <SessionDemo />
        <ReviewSection rows={5} cols={5}/>
        <NewsLetter />
        <Header header={0}/>
      </>
    );
  }
}

function ReviewSection(props){

  function renderPics(numRow, numCol) {
    var render =  [];
    var children = [];
    var assetArr = getAssets();


    for (let i = 0; i < numRow; i++) {
      for (let x = 0; x < numCol; x++) { 
        if((x + i) % 2 === 0){
          children.push(<Col className="d-flex justify-content-center"><Image src={assetArr.shift()} style={{maxWidth: "inherit", objectFit: "contain"}}/></Col>)
        }
        else{
          children.push(<Col><div></div></Col>)
        }
      }
      render.push(<Row className="mt-3 ">{children.map(val => val)}</Row>)
      children = [];
    }
    return render.map(val => val)
  }

  return (
    <Container >
      <Row>
        <Col>
          {renderPics(props.rows, props.cols)}
        </Col>
      </Row>
    </Container>
  )
}
export function Header (props){
    var header = 
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">OpenHouse Hub</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link href='/login'>Log In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/register'>Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>;
    
    var footer = 
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="">OpenHouse HUB</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
        </Nav>
      </Navbar>;

    return (
      <>
        {props.header ? header : footer }
      </>
    )
}
function NewsLetter(props){
  return(
    <Container className="mt-5 mb-3">
      <Row>
        <Col>
          <h2>Don't be a Stranger.</h2>
          <p>Stay Connected with us and recieve the latest news, updates, and blog posts. </p>
        </Col>
        <Col>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
      </Row>
    </Container>
  )
}

