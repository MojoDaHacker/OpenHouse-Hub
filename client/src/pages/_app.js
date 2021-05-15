import '../styles/globals.css'
import useFirebaseAuth, { AuthContext } from '../hooks/useFirebaseAuth'
import { useEffect, useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import Head from 'next/head'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const Auth = useContext(AuthContext)
  const Router = useRouter()

  return (
    <>
      <Head>
        <title>OpenHouse Hub</title>
      </Head>
      {true ? (
        <Component Auth={Auth} {...pageProps} />
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Spinner animation="grow"/>
        </div>
      )}
    </>
  )
}

export default App
