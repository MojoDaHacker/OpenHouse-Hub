import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {agent} from '../../../demoInfo.json'
import './index.css';

class AgentProfile extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      agent: agent
    }
  }
  componentDidMount(){

  }
  render(){
    return (
      <div>
        <div className="card">
          <div className="card-header"><h2>Agent Profile</h2></div>
          <ul className="list-group card-body text-center">
            <li className="list-group-item">{this.state.agent.fullName}</li>
            <li className="list-group-item">{this.state.agent.brokerComp}</li>
            <li className="list-group-item">{this.state.agent.officeLoc}</li>
            <li className="list-group-item">{this.state.agent.cellNum}</li>
            <li className="list-group-item">{this.state.agent.email}</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default AgentProfile;
