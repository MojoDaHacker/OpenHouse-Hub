import React, {useState, createContext} from 'react'

const AuthContext = createContext();

const authData = {
  isAuthenticated: true,
  authUser : {}
}

export const AuthProvider = props => {
  const [auth, setAuth] = useState(authData)

  function authorizeUser(user){
    setAuth({
      authUser: user
    })
  }

  const authKit = {auth, authorizeUser}

  return <AuthContext.Provider value={authKit} {...props} />
}

export const AuthConsumer = props => {
  return <AuthContext.Consumer {...props}/>
}

export default 0