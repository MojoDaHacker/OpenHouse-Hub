import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Header from './components/LandingNavbar'
// import {AuthContext} from '../contexts/authContext'

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
  onSubmitClick(values, actions) {
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(values),
    }

    fetch('submissions/register', init)
    .then(res => console.log(res))
    .then(data => console.log(data))
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
            onSubmit={this.onSubmitClick}
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