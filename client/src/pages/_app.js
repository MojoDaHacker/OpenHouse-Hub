import '../styles/globals.css'
import { AuthContext } from '../hooks/useFirebaseAuth'
import { useEffect, useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import { House } from 'react-bootstrap-icons'
import Head from 'next/head'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const Auth = useContext(AuthContext)
  const Router = useRouter()

  useEffect(() => {
    if (!Auth.currentUser && Router.pathname !== "/") {
      Router.push('/')
    }
  }, [])
  //is user session is not found
  if(false){
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="grow"/>
      </div>
    )
  }
  //is user session is found
  return (
    <>
      <Head>
        <title>OpenHouse Hub</title>
      </Head>
      <Component user={Auth.currentUser} {...pageProps} />
    </>
  )
}

export default App
