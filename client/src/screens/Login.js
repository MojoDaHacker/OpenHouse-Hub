import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Cookies from 'js-cookie'
import {Header} from '../homePage'
import {AuthContext} from '../contexts/authContext'


export default class LogIn extends React.Component{
  constructor(props){
    super(props)
  }

  onSubmitClick(values, actions) {
    const {cookieKit, authKit} = this.context;

    console.log("HELOO!")
    console.log(values)
    console.log(actions)
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Credentials": true,
      },
      // credentials: "include",
      body: JSON.stringify(values),
    }

    fetch('api/users/login', init)
    .then(res => {
      console.log(res)
      return res.text().then(val => [val, res.status])
    })
    .then(data => {
      console.log(data[0])
      if(data[1] == 200) {
        cookieKit.setCookie(Cookies.get())
        authKit.authorizeUser(true, data)
        this.props.history.push("/")
      } else if (data[1] == 401) {
        actions.setFieldError("credentialsRejected", "Invalid Email or Password!" )
      } else {
        console.log("Something wrong with server!")
      }
    })
  }

  render(){
    return (
      <>
        <Header header={1} />
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
LogIn.contextType = AuthContext;