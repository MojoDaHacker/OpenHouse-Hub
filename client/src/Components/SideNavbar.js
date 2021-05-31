import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import { House, GearFill } from 'react-bootstrap-icons'

const SideNavbar = props => {

  return (
    <Navbar className="flex-column h-100 p-0">
      <Navbar.Brand className="p-3 m-0 border-bottom">H</Navbar.Brand>
      <Nav defaultActiveKey="home" className="h-100 flex-column justify-content-between">
        <Nav.Link className="m-2" eventKey="home">
          <Link href='/'><House /></Link>
        </Nav.Link>
        <Nav.Link className="m-2" eventKey="home">
          <Link href='/'><GearFill /></Link>
        </Nav.Link>
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