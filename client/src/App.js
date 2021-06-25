import React from 'react';
import Layout from './components/Layout';
import Session from './screens/Session';
import Settings from './screens/Settings';
import Home from './screens/Home';
import { Spinner } from 'react-bootstrap'
import { Switch, Route } from "react-router-dom";
import useUser from './hooks/useUser'

export default function App(props){
  const user = useUser()

  if(!user){
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="grow" />
      </div>
    )
  } else {
    return (
      <Switch>
        <Route path="/session/:id">
          <Session user={user} />
        </Route>
        <Layout>
          <Route path="/settings">
            <Settings user={user}/>
          </Route>
          <Route path="/">
            <Home user={user}/>
          </Route>
        </Layout>
      </Switch>
    )
  }
}
