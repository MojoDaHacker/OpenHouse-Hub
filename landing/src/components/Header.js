import React from 'react';
import { Col } from 'react-bootstrap';


const Header = props => (
  <>
    <Col className="">
      <div>
        <h2>Hello Matthew</h2>
      </div>
    </Col>
    <Col className="d-flex justify-content-end">
      <div>
        Icons
      </div>
    </Col>
  </>
)

export default Header