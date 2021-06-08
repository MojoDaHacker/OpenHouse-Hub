import One from '../../../client/src/components/One';
import Footer from '../../../client/src/components/Footer';
import Navbar from '../../../client/src/components/LandingNavbar'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function LandingPage(props) {
  return (
    <div>
      <Navbar />
      <Container>
        <One />
      </Container>
      <Footer />
    </div>
  )
}
