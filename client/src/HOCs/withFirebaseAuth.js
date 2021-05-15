import useFirebaseAuth from '../hooks/useFirebaseAuth';
import { useRouter } from 'next/router'

const withFirebaseAuth = Component => props => {
  const Router = useRouter()
  const Auth = useFirebaseAuth()
  
  function onAuthSubmission(values, { setStatus, setSubmitting, setErrors }) {
    const authCallback = (err = {}) => {
      if(!err.code){
        setStatus({ submissionSuccessful: true })
      } else {
        if(err.code == 'auth/wrong-password' || err.code == 'auth/invalid-email'){
          setErrors({message : "Email or Password is Invalid. Try again."})
        } else {
          setErrors({message : "Cannot find account. Try creating a new account."})
        }
      }
      setSubmitting(false);
    }
    if(Component.name == "Register"){
      Auth.createUser(values).then(authCallback)
    } else if (Component.name == "LogIn"){
      Auth.loginUser(values).then(authCallback)
    }
  }

  return (
    <Component
      Auth={Auth}
      onSubmit={onAuthSubmission}
      {...props} 
    />
  )
}

export default withFirebaseAuth