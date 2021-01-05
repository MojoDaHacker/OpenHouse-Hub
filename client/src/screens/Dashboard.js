import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Header from '../Components/Header';
import LeadCenter from './LeadCenter';
import History from './History';
import Analytics from './Analytics';
import Settings from './Settings'
import Session from './Session';
import {Container, Row, Col, Navbar, Button, ButtonGroup} from 'react-bootstrap'
import { IconContext } from 'react-icons';
import { AiOutlineLineChart} from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import * as cloneDeep from "lodash/cloneDeep"

import 'styles/dashboard.scss'





export default class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userName: this.props.name,
      weatherData: false,
      forecastData: false,
    }
  }
  componentDidMount(){
    const weatherUrls = [
      `http://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=3abd9c2df6a249e8abcf4f812de0a627`,
      `http://api.openweathermap.org/data/2.5/forecast?q=Orlando&units=imperial&appid=3abd9c2df6a249e8abcf4f812de0a627`
    ]

    Promise.all(weatherUrls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => this.setState({ weatherData: data[0], forecastData: data[1] },
      () => console.log(this.state.weatherData, this.state.forecastData)))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <>
        <Container className="p-0 vh-100 d-flex flex-column main" fluid>
          {/* <Row className="p-2">
            <Header />
          </Row> */}
          <Row className="flex-grow-1 h-100">
            {this.state.sessInit ? (
              <Route path="/session/:id"><Session /></Route>
            ) : (
              <>
                <Col xs="auto" className="d-flex h-100">
                  <Navbar bg="transparent">
                    <Sidebar />
                  </Navbar>
                </Col>
                <Col className="overflow-hidden pt-3 pb-3 h-100">
                  <Switch>
                    <Route exact path="/">
                      <Home weatherData={this.state.weatherData} forecastData={this.state.forecastData}/>
                    </Route>
                    <Route exact path="/analytics" >
                      <Analytics />
                    </Route>
                    <Route exact path="/settings" >
                      <Settings authenticate={this.props.authenticate[1]}/>
                    </Route>
                    <Route exact path="/history" >
                      <History />
                    </Route>
                    <Route exact path="/leads" >
                      <LeadCenter />
                    </Route>
                  </Switch>
                </Col>
              </>
            )}
          </Row> 
        </Container>
      </>
    )
  }
}

function Sidebar(props){
  return (
    <div className="bg-primary rounded-pill">
      <ButtonGroup vertical>
        <IconContext.Provider value={{ size: "1.5rem"}}>
          <Link to="/"><Button className="rounded-circle p-3"><AiOutlineHome/></Button></Link>
          <Link to="/history"><Button className="rounded-circle p-3"><BsClockHistory/></Button></Link>
          <Link to="/analytics"><Button className="rounded-circle p-3"><AiOutlineLineChart/></Button></Link>
          <Link to="/leads"><Button className="rounded-circle p-3"><TiDocumentText/></Button></Link>
          <Link to="/settings"><Button className="rounded-circle p-3"><FiSettings /></Button></Link>
        </IconContext.Provider>
      </ButtonGroup>
    </div>
  )
}


