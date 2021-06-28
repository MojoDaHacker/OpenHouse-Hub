import { useEffect, useState } from 'react'

export default function useUser() {
  const [user, setUser] = useState()

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    fetch('/api/getUser')
    .then(res => res.json())
    .then(user => setUser(user))
  }

  const updateUser = user => {
    setUser(user)
  }

  return {
    user,
    updateUser
  } 
}