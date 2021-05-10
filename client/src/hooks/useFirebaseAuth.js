import React, { useContext, useEffect, useState } from 'react'
import firebase from '../lib/firebaseAuth'

export const AuthContext = React.createContext(firebase.auth())

const useFirebaseAuth = props => {
  const FireAuth = useContext(AuthContext)

  console.log(firebase)
  useEffect(() => {
    console.log(firebase.auth().currentUser)
  }, [])

  if (typeof window !== undefined) {
    const Router = useRouter()
  }

  return (
    <FireAuth.Provider children={props.children}/>
  )
}

export default useFirebaseAuth