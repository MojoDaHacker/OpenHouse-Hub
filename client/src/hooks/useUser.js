import { useEffect, useState } from 'react'

export default function useUser() {
  const [user, setUser] = useState()
  const [ authenticationChecked, setAuthenticationCheck ] = useState(false)

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    
    fetch('/api/getUser')
    .then(res => res.json())
    .then(user => {
      setUser(user)
      setAuthenticationCheck(true)
    })
  }

  const updateUser = user => {
    setUser(user)
  }
  const logOutUser = () => {
    fetch('/api/logout')
    .then(res => res.ok ? window.location.replace("/") : console.log("err"))
  }
  const updateUserRealtorProfile = profile => {
    const init =  {
      headers: { 'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify(profile)
    }

    fetch('/api/editUserRealtorProfile', init)
    .then(res => res.json())
    .then(user => setUser(user))
  }

  return {
    user,
    authenticationChecked,
    updateUser,
    updateUserRealtorProfile,
    logOutUser
  } 
}