import { Container, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router'
import SideNavbar from './SideNavbar'



export default function Layout({ children, location, user}) {

  return (
    <div className="w-100">
      <SideNavbar />
      <Container fluid>
        <Row noGutters>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
