import React, {useState, createContext} from 'react'

const SessContext = createContext();

const sessData = {
  sessInitialized: false,
}

export const SessProvider = props => {
  const [session, setSession] = useState(sessData)

  // function createSession(isSessionInitialized){
  //   setSession({
  //     sessInitialized: isSessionInitialized
  //   })
  // }

  const sessKit = {session, setSession}

  return <SessContext.Provider value={sessKit} {...props} />
}

export const SessConsumer = props => {
  return <SessContext.Consumer {...props}/>
}

export default 0