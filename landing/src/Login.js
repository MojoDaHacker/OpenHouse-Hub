import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {Formik} from 'formik'
import withFormSubmission from './withFormSubmission'
import * as Yup from 'yup'
import Header from './components/LandingNavbar'
// import {AuthContext} from '../contexts/authContext'


class Login extends React.Component{
  constructor(props){
    super(props)
  }

  onSubmitClick(values, actions) {
    const {cookieKit, authKit} = this.context;
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(values),
    }

    fetch('submissions/login', init)
    .then(res => console.log(res))
    .then(data => console.log(data))
  }

  render(){
    return (
      <>
        <div className="mt-4 h-100 d-flex align-items-center">
          <Formik 
            initialValues={{
              email: '',
              password: '',
              credentialsRejected: null
            }}
            validationSchema={Yup.object({
              email: Yup.string().required('Email is Required!'),
              password: Yup.string().required('Password is Required!'),
            })}
            onSubmit={(values, actions) => this.onSubmitClick(values, actions)}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form 
                className="mx-auto mt-5 w-25"
                onSubmit={handleSubmit}
                noValidate
              >
                {Object.keys(values).map(val => {
                  if(val !== "credentialsRejected") { 
                    return (
                      <Form.Group controlId={`formSign${val}`} >
                        <Form.Label>{(val[0].toUpperCase()) + val.slice(1)}</Form.Label>
                        <Form.Control type={val} onBlur={handleBlur} name={val} isInvalid={touched[val] && errors[val]} isValid={touched[val] && !errors[val]} value={values[val]} onChange={handleChange} required/> 
                        <Form.Control.Feedback type="invalid">
                          {values.credentialsRejected ? errors.credentialsRejected : errors[val]}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )
                  }
                })}
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" name="remember" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
              </Form>
            )} 
          </Formik>
        </div>
      </>
    )
  }
}

export default withFormSubmission(Login)