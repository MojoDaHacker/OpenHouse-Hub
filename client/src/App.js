import React from 'react';
import Layout from './components/Layout';
import Session from './screens/Session';
// import HomePage from './screens/LandingPage';
// import Login from './screens/Login';
// import Register from './screens/Register';
import Home from './screens/Home';
import { Switch, Route } from "react-router-dom";
import {SessProvider, SessConsumer} from './contexts/sessContext';
import {AuthProvider, AuthConsumer} from './contexts/authContext';

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
    return (
      <AuthProvider>
        <AuthConsumer>
          {({authKit}) => {
            return (
              <Switch>
                {authKit.auth.isAuthenticated ? (
                  <SessProvider>
                    <SessConsumer>
                      {({session}) => {
                        return session.sessInitialized ? (
                          <Route path="/session/:id"><Session /></Route>
                        ) : (
                          <Layout>
                            <Home authenticate={[this.state.isAuthenticated, this.authenticate]}/>
                          </Layout>
                        )
                      }}
                    </SessConsumer>
                  </SessProvider>
                ) : (
                  <>
                    {/* <Route path="/register" render={({history}) => (
                      <Register history={history} authenticate={this.authenticate}/>
                      )}/>
                    <Route path="/login" render={({history}) => (
                      <Login history={history} authenticate={this.authenticate}/>
                      )}/>
                    <Route exact path="/"><HomePage /></Route> */}
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
