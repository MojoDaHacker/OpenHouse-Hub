import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from '../lib/firebaseAuth'
import { postIdTokenToSession } from '../lib/session'

const firebaseAuth = firebase.auth()
firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.NONE)
export const AuthContext = React.createContext(firebaseAuth)

const useFirebaseAuth = props => {
  const [user, setUser] = useState(null)
  const Router = useRouter();

  useEffect(() => {
    // firebaseAuth.onAuthStateChanged(newUser => {
    //   if(newUser){
    //     setUser(newUser)
    //     Router.push("/")
    //   }
    // })
  }, [])

  const createUser = ({email, password}) => (
    firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      // setUser(user)
      user.getIdToken().then(idToken => {
        // const csrfToken = getCookie('csrfToken')
        return postIdTokenToSession(idToken, 'abd7shdna2')
      })
      console.log(user)
    })
    .catch(err => console.log(err))
  )
  const loginUser = ({email, password}) => (
    firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      setUser(userCredential.user)
      console.log(userCredential.user)
    })
    .catch(err => err)
  )
  const logoutUser = ({email, password}) => (
    firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      setUser(userCredential.user)
      console.log(userCredential.user)
    })
    .catch(err => err)
  )

  return {
    user,
    createUser,
    loginUser,
    logoutUser,
  }
}

export default useFirebaseAuth