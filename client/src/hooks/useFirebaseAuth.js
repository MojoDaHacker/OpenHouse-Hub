import React, { useEffect, useState } from 'react'
import firebase, { Auth } from '../config/firebaseAuth'
import { postIdTokenToSession, verifyUserSessionCookie } from '../lib/firebase/AuthOperations'

export const AuthContext = React.createContext(Auth)

const useFirebaseAuth = props => {
  const [user, setUser] = useState(Auth.currentUser)
  const [checkingSession, setCheckingSession] = useState(true)
  
  useEffect(() => {
    Auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
    if(user === null){
      verifyUserSessionCookie()
      .then(user => {
        if(user.err){
          console.log(user.err)
          setUser(() => {
            setCheckingSession(false)
            return false
          })
        } else {
          setUser(() => {
            setCheckingSession(false)
            return user
          })
        }
      })
      .catch(err => {
        console.log(err)
        console.log("something went wrong!")
        setUser(false)
      })
      .finally(() => setCheckingSession(false))
    }
  }, [])

  const loginUser = ({ email, password }) => {
    Auth.signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      user.getIdToken().then(idToken => {
        // const csrfToken = getCookie('csrfToken')
        return postIdTokenToSession(idToken, 'abd7shdna2')
      })
      setUser(user)
      console.log(user)
    })
    .catch(err => err)
  }
  const createUser = ({ email, password }) => {
    Auth.createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      // setUser(user)
      user.getIdToken().then(idToken => {
        // const csrfToken = getCookie('csrfToken')
        setUser(user)
        return postIdTokenToSession(idToken, 'abd7shdna2')
      })
      setUser(user)
      console.log(user)
    })
    .catch(err => console.log(err))
  }
  const logoutUser = ({ email, password }) => {
    Auth.signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      setUser(user)
      console.log(user)
    })
    .catch(err => err)
  }
  const deleteUser = ({ email, password }) => {
    Auth.signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      setUser(user)
      console.log(user)
    })
    .catch(err => err)
  }  

  return {
    user,
    checkingSession,
    createUser,
    loginUser,
    logoutUser,
    deleteUser,
  }
}

export default useFirebaseAuth