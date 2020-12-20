import React from 'react';
import {Col} from 'react-bootstrap';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineContacts } from "react-icons/ai";
import { IconContext } from 'react-icons';


const Header = props => (
  <>
    <Col className="">
      <div>
        <h2>Hello Matthew</h2>
      </div>
    </Col>
    <Col className="d-flex justify-content-end">
      <div>
        <IconContext.Provider value={{ size: "1.5rem"}}>
          <AiOutlineContacts />
          <FaUserTie />
        </IconContext.Provider>
      </div>
    </Col>
  </>
)

export default Header