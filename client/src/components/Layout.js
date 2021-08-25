import { Container, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router'
import SideNavbar from './SideNavbar'



export default function Layout({ children, location, user}) {
  const history = useHistory()
  // if(!user && location.pathname !== "/noUser")
  //   history.push("/noUser")

  console.log(user)


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
