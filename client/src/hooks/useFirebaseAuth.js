import React, { useContext, useEffect, useState } from 'react'
import firebase from '../lib/firebaseAuth'

export const AuthContext = React.createContext(firebase.auth())

const useFirebaseAuth = props => {
  const [user, setUser] = useState(null)
  const FireAuth = useContext(AuthContext)
  
  useEffect(() => {
    setUser(window.document.cookie)
    fetch('/api/getSessions')
    .then(res => res.json())
    .then(res => console.log(res))
  }, [])

  return user
  return (
    <FireAuth.Provider children={props.children}/>
  )
}

export default useFirebaseAuth