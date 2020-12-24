import React, {useState, useContext, createContext} from 'react'

const sessData = {
  sessInitialized: true,
}
const SessContext = createContext(sessData);


export const SessProvider = props => {
  const [session, setSession] = useState(sessData)

  function createSession(isSessionInitialized){
    console.log(isSessionInitialized)
    setSession({
      sessInitialized: isSessionInitialized
    })
  }

  const sessKit = {session, createSession}

  return <SessContext.Provider value={sessKit} {...props} />
}

export const SessConsumer = props => {
  return <SessContext.Consumer {...props}/>
}

export const SessHook = props => {
  const context = useContext(SessContext)
  return context
}

export default 0