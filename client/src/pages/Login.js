import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { CheckCircleFill } from 'react-bootstrap-icons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import withFirebaseAuth from '../HOCs/withFirebaseAuth';

class LogIn extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Container>
        <Row>
          <Col className="vh-100 d-flex justify-content-center align-items-center">
            <Formik
              initialStatus={{
                submissionSuccessful: false
              }}
              initialValues={{
                email:'',
                password:''
              }}
              onSubmit={this.props.onSubmit}
            >
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                values,
                status,
                errors
              }) => (
                <Form onSubmit={handleSubmit}>
                  {Object.keys(values).map((field, i) => (
                    <Form.Group key={i}>
                      <Form.Label>{(field[0].toUpperCase()) + field.slice(1)}</Form.Label>
                      <Form.Control type="text" name={field} value={values[field]} onBlur={handleBlur} onChange={handleChange} />
                    </Form.Group>
                  ))}
                  {errors && (
                    <Form.Group>
                      <Form.Text className="text-danger">{errors.message}</Form.Text>
                    </Form.Group>
                  )}
                  <Form.Group>
                    <Form.Check type="checkbox" name="remember" label="Remember Me" />
                  </Form.Group>
                  {status.submissionSuccessful ? (
                    <CheckCircleFill size={24} className="text-success text-center"/>
                  ) : (
                    <Button type="submit">Log In</Button>
                  )}
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withFirebaseAuth(LogIn)