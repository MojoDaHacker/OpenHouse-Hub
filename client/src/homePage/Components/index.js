import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import GuestSignIn from '../../Components/guestSignIn';
import AgentProfile from '../../Components/agentProfile';
import OpenHouseInfo from '../../Components/openHouseInfo';
import SimilarHomeInfo from '../../Components/similarHomeInfo';
import NeighborhoodInfo from '../../Components/neighborhoodInfo';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <section className="container-fluid">
        <div className="row p-3">
          <OpenHouseInfo />
        </div >
        <div className="row justify-content-around">
          <NeighborhoodInfo className="col-4"/>
          <GuestSignIn className="col-5"/>
          <AgentProfile className="col-3"/>
        </div>
        <div className="row">
          <SimilarHomeInfo />
        </div>
      </section>
    );
  }
}


export default App;
