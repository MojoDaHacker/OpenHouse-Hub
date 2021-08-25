import React from 'react';
import Layout from './components/Layout';
import Session from './screens/Session';
import Settings from './screens/Settings';
import UserNotFound from './screens/UserNotFound';
import Home from './screens/Home';
import { Spinner } from 'react-bootstrap'
import { Switch, Route } from "react-router-dom";
import useUser from './hooks/useUser'
import SessionDetail from './screens/SessionDetails';

export default function App(props){
  const UserKit = useUser()

  console.log(UserKit)

  if(!UserKit.authenticationChecked){
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="grow" />
      </div>
    )
  }

  
  return (
    <Switch>
      <Route path="/session/:id">
        <Session {...UserKit} />
      </Route>
      <Layout {...UserKit}>
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
          {/* <Route path="/noUser">
            <UserNotFound {...UserKit} />
          </Route> */}
        </Switch>
      </Layout>
    </Switch>
  )
}
