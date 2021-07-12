import { Container, Row, Col} from 'react-bootstrap'
import SideNavbar from './SideNavbar'



export default function Layout(props) {
  return (
    <div className="w-100">
      <SideNavbar />
      <Container fluid>
        <Row noGutters>
          <Col>
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
