import One from './One';
import Footer from './components/Footer';
import Navbar from './components/LandingNavbar'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function LandingPage(props) {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <Container className="h-100">
        <One />
      </Container>
      <Footer />
    </div>
  )
}
