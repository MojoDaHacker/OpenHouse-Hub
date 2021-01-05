import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Cookies from 'js-cookie'
import {Header} from 'homePage'
import {AuthContext} from '../contexts/authContext'

export default class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: { value: '', isInvalid : null, feedback: false},
      password: { value: '', isInvalid : null},
      passConf: { value: '', isInvalid : null},
      email: { value: '', isInvalid : null},
      company: { value: '', isInvalid : null},
      formSubmitted: null,
      validated: null
    }
  }
  onInputChange(input){
    switch (input.target.name) {
      case 'name':
        this.setState({ name: { value: input.target.value , isInvalid : input.target.value.length > 0 ? false : true}})
        break;
      case 'pass':
        this.setState({ password: { value: input.target.value , isInvalid : input.target.value.length > 0 ? false : true}})
        break;
      case 'passConf':
        this.setState({ passConf: { value: input.target.value , isInvalid : input.target.value.length > 0 ? false : true}})
        break;
      case 'email':
        this.setState({ email: { value: input.target.value , isInvalid : input.target.value.length > 0 ? false : true}})
        break;
      case 'company':
        this.setState({ company: { value: input.target.value , isInvalid : input.target.value.length > 0 ? false : true}})
        break;

      default:
        console.log("Default Case");
        break;
    }
  }
  onSubmitClick(values, actions){
    const {cookieKit, authKit} = this.context;
    const init = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(values),
    }
    
    fetch('/register', init)
    .then(res => {
      if (res.status === 200) {
        this.setState({validated: true})
      } else if (res.status === 401) {
        this.setState({validated: false})
      } else {
        this.setState({validated: false})
      }
      return [res.json(), res.status]
    })
    .then(data => {
      if(data[1] === 200) {
        cookieKit.setCookie(Cookies.get())
        authKit.authorizeUser(true, data)
        this.props.history.push("/")
      } else if (data[1] === 401) {
        switch (data[0].field) {
          case "email":
            this.setState(prevState => ({
              email: {                   // object that we want to update
                ...prevState.email,    // keep all other key-value pairs
                isInvalid: true,       // update the value of specific key
                feedback: data[0].message
              }
            }))
          break;
          default:
            console.log("default case called")
          break;
        }
      } else {

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
              name: '',
              password: '', 
              passConf: '', 
              email: '', 
              company: '', 
              formSubmitted: null,
              validated: null
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Name is Required!'),
              password: Yup.string().required('Password is Required!'),
              passConf: Yup.string().required('Password Confirmation is Required!'),
              email: Yup.string().email('Email Address is Invalid. Try Again!').required('Email is Required!'),
            })}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
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
                  if(val !== "validated" && val !== "formSubmitted"){
                    return (
                      <Form.Group controlId={`formSign${val}`} >
                        {val === 'passConf' ? 
                          <Form.Label>Password Confirmation</Form.Label>
                          :
                          <Form.Label>{(val[0].toUpperCase()) + val.slice(1)}</Form.Label>
                        }
                        {val !== "email" && val !== "password" ? 
                          val === "company" ?
                          <Form.Control type="text" onBlur={handleBlur} name={val} isInvalid={touched[val] && errors[val]} value={values[val]} onChange={handleChange} required/> :
                          <Form.Control type="text" onBlur={handleBlur} name={val} isInvalid={touched[val] && errors[val]} isValid={touched[val] && !errors[val]} value={values[val]} onChange={handleChange} required/> 

                          : 
                          val == "email" ? 
                          <Form.Control type={val} onBlur={handleBlur} name={val} isInvalid={touched[val] && errors[val]} isValid={touched[val] && !errors[val]} value={values[val]} onChange={handleChange} required/> :
                          <Form.Control type={val} onBlur={handleBlur} name={val} isInvalid={touched[val] && errors[val]} isValid={touched[val] && !errors[val]} value={values[val]} onChange={handleChange} required/>
                        }
                        <Form.Control.Feedback type="invalid">
                          {errors[val]}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )
                  }
                })}
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" name="remember" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create Account
                </Button>
              </Form>
            )} 
          </Formik>
        </div>
      </>
    )
  }
}
Register.contextType = AuthContext;