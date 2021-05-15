import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout'
import LandingPage from './LandingPage'
import Home from '../components/Home';



export default function Index(props) {
  
  return (
    props.Auth.currentUser ? (
      <Layout>
        <Home {...props}/>
      </Layout>
    ) : (
      <LandingPage />
    )
  )
}
