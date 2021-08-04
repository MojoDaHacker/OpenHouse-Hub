import { Container } from 'react-bootstrap'
import Landing from '../components/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function LandingPage(props) {
  return (
    <div className="vh-100">
      <Landing />
      {/* <Footer /> */}
    </div>
  )
}
