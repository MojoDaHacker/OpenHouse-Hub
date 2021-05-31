
export const postIdTokenToSession = (idToken, csrfToken) => {
  const init = {
    method: 'POST',
    body: JSON.stringify({ idToken, csrfToken })
  }

  return fetch('/api/createSession', init)
  .then((res) => (
    res.json()
    ))
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
export const verifyUserSessionCookie = () => {
  const init = {
    method: 'POST',
  }

  return fetch('/api/verifySession', init)
  .then(res => res.json())
  .catch(err => console.log(err.msg))
}

