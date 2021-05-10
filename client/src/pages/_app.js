import '../styles/globals.css'
import useFirebaseAuth, { AuthContext } from '../hooks/useFirebaseAuth'
import { useEffect, useContext } from 'react'
import { Spinner } from 'react-bootstrap'
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
  //is user session is found
  return (
    <>
      <Head>
        <title>OpenHouse Hub</title>
      </Head>
      {useFirebaseAuth() ? (
        <Component user={Auth.currentUser} {...pageProps} />
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Spinner animation="grow"/>
        </div>
      )}
    </>
  )
}

export default App
