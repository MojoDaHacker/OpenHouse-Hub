import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {Header} from 'homePage'

export default class LogIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: { value: '', isInvalid : null},
      password: { value: '', isInvalid : null},
      formSubmitted: null,
      validated: null
    }
  }

  onInputChange(input){
    switch (input.target.name) {
      case 'pass':
        this.setState({ password: { value: input.target.value , isInvalid : input.target.value.length > 0 ? false : true}})
      break;
      case 'email':
        this.setState({ email: { value: input.target.value , isInvalid : input.target.value.length > 0 ? false : true}})
      break;
      default:
        console.log("Default Case");
      break;
    }
  }

  onSubmitClick(e){
    e.preventDefault();
    var form = e.currentTarget;
    //quick validation
    if (form.checkValidity() === false) {
      this.setState({validated: false});
      return 0
    }
    this.setState({formSubmitted: true})

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

    
    fetch('http://localhost:5000/api/users/login', init)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.isValid === false){ //is form validated?
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
              default:
                console.log("default case called")
              break;
            }
          }
        }
      } 
      else if(Object.keys(data)[0] === "emailnotfound" || Object.keys(data)[0] === "passwordincorrect") { //are credentials valid
        this.setState({validated: false})
      } 
      else {
        this.setState({validated: true})
        this.props.authenticate();
        this.props.history.push("/")
        
      }
    })
  }

  render(){
    return (
      <>
        <Header header={1}/>
        <div className="mt-5 pt-5">

          <Form className="mx-auto w-25" onSubmit={ event => this.onSubmitClick(event)} validated={this.state.validated}
            noValidate>
            <Form.Group>
              <Form.Group controlId="formSignEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" 
                  isInvalid={(this.state.email.isInvalid || this.state.validated === false) || this.state.formSubmitted === true} 
                  onChange={(input) => this.onInputChange(input)} required
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.validated ? 
                   "" : this.state.formSubmitted && this.state.email.isInvalid === true ? "Email or Password is invalid" : "Email is required"}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formSignPass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="pass" 
                  isInvalid={(this.state.password.isInvalid || this.state.validated === false) || this.state.formSubmitted === true} 
                  onChange={(input) => this.onInputChange(input)} required
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.formSubmitted ? "" : "Password is required!"} 
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            
            <div className="w-100 text-center">
              <Button className="" variant="primary" type="submit">Submit</Button>
            </div>        
          </Form>
        </div>
      </>
    )
  }
}