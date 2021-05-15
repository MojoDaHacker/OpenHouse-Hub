import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import { House, GearFill } from 'react-bootstrap-icons'

const SideNavbar = props => {

  return (
    <Navbar className="flex-column p-0">
      <Navbar.Brand>B</Navbar.Brand>
      <Nav defaultActiveKey="home" className="flex-column">
        <Nav.Link as={Link} href='/' eventKey="home"><House /></Nav.Link>
        <Nav.Link as={Link} href='/' eventKey="home"><GearFill /></Nav.Link>
        {/* <Nav.Link as={Link} href='' eventKey="link-1">Link</Nav.Link>
        <Nav.Link as={Link} href='' eventKey="link-2">Link</Nav.Link>
        <Nav.Link as={Link} href='' eventKey="disabled" disabled>
          Disabled
        </Nav.Link> */}
      </Nav>
    </Navbar>
  )
}

export default SideNavbar