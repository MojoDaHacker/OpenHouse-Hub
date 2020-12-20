import React from "react";
import { Container, Row} from 'react-bootstrap';

export default class Content extends React.Component{
  render(){
    console.log(window.innerHeight);
    return (
      <Container className="pt-5 pl-0 pr-0" fluid>
        <Container style={{height: window.innerHeight}} className="p-0 showCase d-flex justify-content-center align-items-center" fluid>
          <Container className="h-100">
            <Row className="mt-5">
              <h2 className="mx-auto">Make Your Open House More Interactive</h2>
            </Row>
            <Row className="">
            </Row>
          </Container>
        </Container>
      </Container>
    )
  }
}

// const brandCont = {
//   "width": "200px",
//   "height": "100px"
// }
