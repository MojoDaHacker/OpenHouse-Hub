import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './homePage';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Session from './screens/Session';
import { Switch, Route} from "react-router-dom";
import {SessProvider, SessConsumer} from './contexts/sessContext';
import {AuthProvider, AuthConsumer} from './contexts/authContext';

// import GuestSignIn from './Components/guestSignIn';
// import AgentProfile from './Components/agentProfile';
// import OpenHouseInfo from './Components/openHouseInfo';
// import SimilarHomeInfo from './Components/similarHomeInfo';
// import NeighborhoodInfo from './Components/neighborhoodInfo';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated: true
    }
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(){
    this.state.isAuthenticated ? this.setState({isAuthenticated: false}) : this.setState({isAuthenticated: true})
  }

  render(){
    return (
      <AuthProvider>
        <AuthConsumer>
          {kit => {
            return (
              <Switch>
                {kit.auth.isAuthenticated ? (
                  <SessProvider>
                    <SessConsumer>
                      {({session}) => {
                        console.log(session)
                        return session.sessInitialized ? (
                          <Route path="/session/:id"><Session /></Route>
                        ) : (
                          <Dashboard authenticate={[this.state.isAuthenticated, this.authenticate]}/>
                        )
                      }}
                    </SessConsumer>
                  </SessProvider>
                ) : (
                  <>
                    <Route path="/register" render={({history}) => (
                      <Register history={history} authenticate={this.authenticate}/>
                      )}/>
                    <Route path="/login" render={({history}) => (
                      <Login history={history} authenticate={this.authenticate}/>
                      )}/>
                    <Route exact path="/"><HomePage /></Route>
                  </>
                )}
              </Switch>
            )
          }}
        </AuthConsumer>
      </AuthProvider>
    );
  }
}
