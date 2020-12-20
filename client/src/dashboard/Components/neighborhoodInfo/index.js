import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {neighborhoodInfo, extraInfo} from '../../demoInfo.json'
import './index.css';




class AgentProfile extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      extraInfo : extraInfo,
      neighborhood: neighborhoodInfo
    }
  }
  render(){
    return (
      <div>
        <div className="card text-center small">
          <div className="card-header"><h2>The Neighborhood</h2></div>
          <div className="card-body">
            <p>{`Walkable Score: ${this.state.neighborhood.walkScore}`}</p>
            <p>{`Transit Score: ${this.state.neighborhood.transitScore}`}</p>
            <p>{`Property Value Since Last Year: ${this.state.neighborhood.valueIncOrDec}`}</p>
            <p>{`Predicted Value In Next Year: ${this.state.neighborhood.valuePrediction}`}</p>
            <p>{`Neighborhood Median Value Comparison: ${this.state.neighborhood.compareMedianValue}`}</p>
            <p>{`Neighborhood Median Zestimate: ${this.state.neighborhood.medianZest}`}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default AgentProfile;
