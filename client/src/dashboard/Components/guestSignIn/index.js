import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './index.css'

var server = 'http://localhost:8080';

class GuestSignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      phone: "",
      withRealtor: "",
      contactProcessed: false
    }
  }
  processForm(event){
    event.preventDefault();
    var name, phone, withRealtor;
    
    ({name, phone, withRealtor} = this.state);
    let dataObj = {name, phone, withRealtor};

    fetch(server, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(dataObj) // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then((body) => {
      this.setState({
        contactProcessed : true,
      });
      setTimeout(() => {
        this.setState({
          contactProcessed : false,
          name: "",
          phone: "",
          withRealtor: ""
        })
      }, 3000);
    })
  }
  handleInputChange(event){
    var input = event.target.name;

    switch (input) {
      case "name":
        this.setState({name: event.target.value});
        break;
      case "phone":
        this.setState({phone: event.target.value});
        break;
      case "agent":
        this.setState({withRealtor: event.target.value});
        break;
      default:
        console.log("something wrong!!");
        break;
    }
  }
  render(){
    return (
      <div className= {this.props.className.concat(" card text-center")}>
        <div className="card-header">
          <h1>{this.state.contactProcessed ? `Enjoy The Tour ${this.state.name}` : `Please Sign in`}</h1>
        </div>
        <form className="card-body d-flex align-items-center flex-column" onSubmit={(event) => this.processForm(event)}>
          <input className="m-3 p-2 w-75 text-center" type="text" name="name" value={this.state.name} onChange={(event) => this.handleInputChange(event)}
            placeholder="Full Name"/>
          <input className="m-3 p-2 w-75 text-center" type="text" name="phone" value={this.state.phone} onChange={(event) => this.handleInputChange(event)}
            placeholder="Phone Number"/>
          <input className="m-3 p-2 w-75 text-center" type="text" name="agent" value={this.state.withRealtor} onChange={(event) => this.handleInputChange(event)}
            placeholder="Are you with a Realtor?"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}


export default GuestSignIn;
