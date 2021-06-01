import Cookies from 'cookies'
import adminAuth from '../../config/firebaseAdmin'

export default function createSession(req, res) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  const { idToken } = JSON.parse(req.body)
  const cookies = new Cookies(req, res)
  
  adminAuth.createSessionCookie(idToken, { expiresIn })
  .then(cookie => {
    const options = { maxAge: expiresIn, httpOnly: true };
    cookies.set('session', cookie, options)
    res.end(JSON.stringify({ status: 'success' }));
  })
  .catch(err => {
    console.log(err)
    return res.status(401).send('UNAUTHORIZED REQUEST!')
  })
}