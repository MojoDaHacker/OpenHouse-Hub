import { Link } from 'react-router-dom'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { GraphUp, GearFill, Bell } from 'react-bootstrap-icons'
import ProfilePic from '../assets/img/profile.jpg'

const SideNavbar = props => {

  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand as={Link} to="/">H</Navbar.Brand>
      <Nav defaultActiveKey="home" className="ml-auto">
        {/* <Nav.Link as={Link} to="/" className="text-primary" eventKey="home">
          <GraphUp />
        </Nav.Link>
        <Nav.Link as={Link} to="/settings" className="text-primary" eventKey="settings">
          <div>
            <div className="notificationBlip" />
            <Bell />
          </div>
        </Nav.Link> */}
        <Nav.Link as={Link} to="/settings" className="text-primary" eventKey="profile">
          <span className="h6 mr-3">Settings</span>
          <Image src={ProfilePic} roundedCircle height="25" />
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default SideNavbar