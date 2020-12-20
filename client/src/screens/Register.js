import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {Header} from 'homePage'

export default class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: { value: '', isInvalid : null},
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
  onSubmitClick(e){
    e.preventDefault();
    e.stopPropagation();
    var form = e.currentTarget;
    //quick validation
    if (form.checkValidity() === false) {
      this.setState({validated: false});
      return 0
    }

    var subForm = {};
    Object.assign(subForm, this.state);
    delete subForm.validated;
    delete subForm.formSubmitted;


    for ( let prop in subForm){
      subForm[prop] = Object.values(subForm[prop]).shift()
    }

    const init = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(subForm),
    }

    
    fetch('http://localhost:5000/api/users/register', init)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      console.log(data.errors, data.isValid)
      if (data.isValid === false){
        this.setState({formSubmitted: true})
        for (const key in data.errors) {
          for (let i = 0; i < Object.keys(data.errors).length; i++) {
            switch (key) {
              case "email":
                this.setState(prevState => ({
                  email: {                   // object that we want to update
                    ...prevState.email,    // keep all other key-value pairs
                    isInvalid: true       // update the value of specific key
                  }
                }))
                break;
              case "password":
                this.setState(prevState => ({
                  password: {                   // object that we want to update
                    ...prevState.password,    // keep all other key-value pairs
                    isInvalid: true       // update the value of specific key
                  }
                }))
                break;
              case "passConf":
                this.setState(prevState => ({
                  passConf: {                   // object that we want to update
                    ...prevState.passConf,    // keep all other key-value pairs
                    isInvalid: true       // update the value of specific key
                  }
                }))
                break;
            
              default:
                console.log("default case called")
                break;
            }
          }
        }
      } else {
        this.setState({validated: true})
        this.props.authenticate();
        this.props.history.push("/")
      }
    })
  } 
  render(){
    return (
      <>
        <Header header={1} />
        <div className="mt-5 pt-5">
          <Form className="mx-auto w-25" onSubmit={ event => this.onSubmitClick(event)} validated={this.state.validated}
            noValidate>
            <Form.Group controlId="formSignName" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" onChange={(input) => this.onInputChange(input)} isInvalid={this.state.name.isInvalid || this.state.validated === false} required/>
              <Form.Control.Feedback type="invalid">Name is required!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formSignEmail" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" isInvalid={(this.state.email.isInvalid || this.state.validated === false) || this.state.formSubmitted === true} onChange={(input) => this.onInputChange(input)} required/>
              <Form.Control.Feedback type="invalid">
              {this.state.formSubmitted ? "Email is missing @ or .com!" : "Email is required!"}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formSignPass">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="pass" isInvalid={(this.state.password.isInvalid || this.state.validated === false) || this.state.formSubmitted === true} onChange={(input) => this.onInputChange(input)} required/>
              <Form.Control.Feedback type="invalid">
              {this.state.formSubmitted ? "Password must be between 6 and 30 characters!" : "Password is required!"} 
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formSignConfPass">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="passConf" isInvalid={(this.state.passConf.isInvalid || this.state.validated === false) || this.state.formSubmitted === true} onChange={(input) => this.onInputChange(input)} required/>
              <Form.Control.Feedback type="invalid">
              {this.state.formSubmitted ? "Password Confirmation does not match" : "Password Confirmation is required!"}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formSignCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="company" isInvalid={this.state.company.isInvalid || this.state.validated === false} onChange={(input) => this.onInputChange(input)} required/>
              <Form.Control.Feedback type="invalid">Company is required!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" name="remember" label="Remember Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </div>
      </>
    )
  }
}
