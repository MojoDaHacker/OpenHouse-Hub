import React from 'react';
import {Form, Button} from 'react-bootstrap'
import { CheckCircleFill } from 'react-bootstrap-icons'
import {Formik} from 'formik'
import * as Yup from 'yup'
import withFirebaseAuth from '../HOCs/withFirebaseAuth';

class Register extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="mt-4 h-100 d-flex align-items-center">
        <Formik
          initialStatus={{
            submissionSuccessful: false
          }}
          initialValues={{
            name: '',
            password: '', 
            passConf: '', 
            email: '', 
            company: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Name is Required!'),
            password: Yup.string().required('Password is Required!'),
            passConf: Yup.string().required('Password Confirmation is Required!'),
            email: Yup.string().email('Email Address is Invalid. Try Again!').required('Email is Required!'),
          })}
          onSubmit={this.props.onSubmit}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
            status
          }) => (
            <Form 
              className="mx-auto mt-5 w-25" 
              onSubmit={handleSubmit} 
              noValidate
            >
              {Object.keys(values).map((val, i) => {
                return (
                  <Form.Group key={i} controlId={`formSign${val}`} >
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
                      val === "email" ? 
                      <Form.Control type={val} onBlur={handleBlur} name={val} isInvalid={touched[val] && errors[val]} isValid={touched[val] && !errors[val]} value={values[val]} onChange={handleChange} required/> :
                      <Form.Control type={val} onBlur={handleBlur} name={val} isInvalid={touched[val] && errors[val]} isValid={touched[val] && !errors[val]} value={values[val]} onChange={handleChange} required/>
                    }
                    <Form.Control.Feedback type="invalid">
                      {errors[val]}
                    </Form.Control.Feedback>
                  </Form.Group>
                )
              })}
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="remember" label="Remember Me" />
              </Form.Group>
              {status.submissionSuccessful ? (
                <CheckCircleFill size={24} className="text-success text-center"/>
              ) : (
                <Button variant="primary" type="submit">
                  Create Account
                </Button>
              )}
            </Form>
          )} 
        </Formik>
      </div>
    )
  }
}

export default withFirebaseAuth(Register)