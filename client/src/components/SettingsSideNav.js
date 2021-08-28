import { Nav } from 'react-bootstrap'
import { PersonCircle, GearFill, CreditCard2FrontFill, BellFill } from 'react-bootstrap-icons'

const SettingsSideNav = props => {

  return (
    <Nav  className="bg-light h-100 p-3 flex-column">
      <Nav.Link className="text-primary" eventKey={1}>
        <p><PersonCircle />   Account</p>
      </Nav.Link>
    </Nav>
  )
}

export default SettingsSideNav