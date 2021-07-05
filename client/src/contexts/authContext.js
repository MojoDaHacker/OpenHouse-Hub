import React, {useState, createContext, useContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [auth, setAuth] = useState()

  function authorizeUser(authenticated, user = {}){
    setAuth({
      isAuthenticated : authenticated,
      authUser: user
    })
  }


  return <AuthContext.Provider value={[auth, setAuth]} {...props}>{props.children}</AuthContext.Provider>
}

export const AuthConsumer = props => {
  return <AuthContext.Consumer {...props}/>
}

export const AuthHook = props => {
  const context = useContext(AuthContext)
  return context
}
