import '../styles/globals.css'
import { Spinner } from 'react-bootstrap'
import useFirebaseAuth, { AuthContext } from '../hooks/useFirebaseAuth'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const Auth = useFirebaseAuth()

  return (
    <>
      <Head>
        <title>OpenHouse Hub</title>
      </Head>
      {Auth.checkingSession ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Spinner animation="grow"/>
        </div>
      ) : (
        <Component Auth={Auth} {...pageProps} />
      )}
    </>
  )
}
