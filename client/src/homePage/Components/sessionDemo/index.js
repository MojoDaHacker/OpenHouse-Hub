import React from 'react';
import {Container, Row, Button} from 'react-bootstrap';

export function HouseInfo(){

  return 0
}

export default class SessionDemo extends React.Component{
  render(){
    return (
      <Container style={{height: window.innerHeight}} className="d-flex flex-column align-items-center justify-content-center">
        <Row>
          <Button><div style={iconPlaceholder}></div></Button>
          <Button><div style={iconPlaceholder}></div></Button>
          <Button><div style={iconPlaceholder}></div></Button>
        </Row>
        <Row>
          <Button><div style={iconPlaceholder}></div></Button>
          <Button><div style={iconPlaceholder}></div></Button>
          <Button><div style={iconPlaceholder}></div></Button>
        </Row>
      </Container>
    )
  }
}

const iconPlaceholder = {
  width: "150px",
  height: "150px",
  outline: "2px solid gray",
  backgroundColor: "gray"
}