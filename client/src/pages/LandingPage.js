import Head from 'next/head'
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Four from '../components/Four';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
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
