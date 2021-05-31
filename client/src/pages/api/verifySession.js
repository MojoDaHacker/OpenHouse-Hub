import Cookies from 'cookies'
import adminAuth from '../../config/firebaseAdmin'

export default function createSession(req, res) {
  const sessionCookie = req.cookies.session || undefined;

  if (sessionCookie === undefined) return res.status(401).end(JSON.stringify({ err : "No session cookie sent with request." }))
  
  adminAuth.verifySessionCookie( sessionCookie )
  .then(decodedClaims => adminAuth.getUser(decodedClaims.sub))
  .then(user => res.send(user))
  .catch(err => {
    console.log(err)
    return res.status(401).end()
  })
}