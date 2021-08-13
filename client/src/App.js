import React from 'react';
import Layout from './components/Layout';
import Session from './screens/Session';
import Settings from './screens/Settings';
import Home from './screens/Home';
import { Spinner } from 'react-bootstrap'
import { Switch, Route } from "react-router-dom";
import useUser from './hooks/useUser'
import SessionDetail from './screens/SessionDetails';

export default function App(props){
  const UserKit = useUser()

  if(!UserKit.user){
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="grow" />
      </div>
    )
  } else {
    return (
      <Switch>
        <Route path="/session/:id">
          <Session {...UserKit} />
        </Route>
        <Layout>
          <Switch>
            <Route path="/sessiondetail/:i">
              <SessionDetail {...UserKit} />
            </Route>
            <Route path="/settings">
              <Settings {...UserKit} />
            </Route>
            <Route path="/">
              <Home {...UserKit} />
            </Route>
          </Switch>
        </Layout>
      </Switch>
    )
  }
}
