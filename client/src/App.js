import React from 'react';
import Session from './screens/Session';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated : false
    }
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(){
    this.state.isAuthenticated ? this.setState({isAuthenticated: false}) : this.setState({isAuthenticated: true})
  }

  render(){
    return <Session />
  } 
}
