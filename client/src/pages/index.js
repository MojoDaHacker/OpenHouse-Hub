import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout'
import LandingPage from './LandingPage'
import { Spinner } from 'react-bootstrap'
import Home from '../components/Home';
import { getWeatherData } from '../lib/getProps'



export default function Index(props) {
  
  return props.Auth.user ? (
    <Layout>
      <Home {...props} />
    </Layout>
  ) : (
    <LandingPage />
  )
}

export async function getStaticProps(){
  const weatherData = await getWeatherData()

  return {
    props: { weatherData  }
  }
}
