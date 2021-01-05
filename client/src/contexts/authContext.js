import React, {useState, createContext, useContext} from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext();

const authData = {
  isAuthenticated: Object.keys(Cookies.get()).length > 0,
  authUser : {}
}

export const AuthProvider = props => {
  const [auth, setAuth] = useState(authData)
  const [cookies, setCookies] = useState([])

  function setCookie(cookie){
    setCookies([...cookies, cookie])
  }

  function authorizeUser(authenticated, user = {}){
    setAuth({
      isAuthenticated : authenticated,
      authUser: user
    })
  }

  const authKit = {auth, authorizeUser}
  const cookieKit = {cookies, setCookie}

  return <AuthContext.Provider value={{authKit, cookieKit}} {...props} />
}

export const AuthConsumer = props => {
  return <AuthContext.Consumer {...props}/>
}

export const AuthHook = props => {
  const context = useContext(AuthContext)
  return context
}

export default 0