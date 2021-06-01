import Head from 'next/head'
import Link from 'next/Link'
import { Container, Row, Col} from 'react-bootstrap'
import SideNavbar from './SideNavbar'



export default function Layout(props) {
  
  return (
    <Container className="p-0" fluid>
      <Row noGutters>
        <Col xs='auto' className="border vh-100">
          <SideNavbar />
        </Col>
        <Col>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}
