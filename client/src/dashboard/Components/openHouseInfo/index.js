import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {mainInfo} from '../../demoInfo.json'

class OpenHouseInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainInfo: mainInfo
    }
  }
  doThis(){
    console.log("bah!");
  }
  render(){
    return (
      <div className="w-100">
        <h1>Welcome to the Open House!</h1>
        <div className="d-flex flex-wrap flex-column pl-3 pr-3" style={{height: "150px"}}>
          <p>Today's Date: <span className="font-weight-bold">{new Date().toDateString()}</span></p>
          <p>Street Address:  <span className="font-weight-bold">{this.state.mainInfo.address}</span></p>
          <p>City, State: <span className="font-weight-bold">{this.state.mainInfo.city}, {this.state.mainInfo.state}</span></p>
          <p>Zip Code:  <span className="font-weight-bold">{this.state.mainInfo.zip}</span></p>
          <p>Beds:  <span className="font-weight-bold">{this.state.mainInfo.bed}</span></p>
          <p>Baths:  <span className="font-weight-bold">{this.state.mainInfo.bath}</span></p>
          <p>Square Feet:  <span className="font-weight-bold">{this.state.mainInfo.sqFt}</span></p>
        </div>
      </div>
    );
  }
}


export default OpenHouseInfo;
