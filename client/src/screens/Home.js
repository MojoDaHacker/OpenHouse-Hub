import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';
import ResumeSessionModal from '../components/ResumeSessionModal';
import Illustration1 from '../assets/illustrations/teamwork.svg'
import { Container, Row, Col, Button, Card, Image, Badge, ListGroup } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      recentLeads : [0],
      notifications : [],
    }
  }
  
  render(){
    const { user } = this.props
    const notifications = this.state.notifications
    var forecasts = this.props.forecastData && this.props.forecastData.list
    const days = {
      0 : "Sun",
      1 : "Mon",
      2 : "Tue",
      3 : "Wed",
      4 : "Thur",
      5 : "Fri",
      6 : "Sat"
    }
    return (
      <Container className="d-flex flex-column vh-100" fluid>
        <ResumeSessionModal show={user.hasActiveSession} />
        <Row className="h-100 m-3">
          <Col className="d-flex flex-column">
            <div className="border-bottom text-center mb-3">
              <h1>Open House Sessions</h1>
            </div>
            <div className="text-center h-100">
              {user.completedSessions.length < 1 ? (
                <div className="mt-3">
                  <p className="mx-auto w-75">
                    You don't have any sessions. Start one now or schedule one for later and give your visitors a new open house experience.
                  </p>
                  <Image src={Illustration1} width="50%"/>
                </div>
              ) : (
                <ListGroup>
                  {this.state.pastSessions.map(session => (
                    <ListGroup.Item>{session}</ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              <div>
                <Button className="m-3" as={Link} to="/session/252635">Create a Session<span><Plus/></span></Button>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <WeatherDisplay />
          </Col>
        </Row>
      </Container>
    )
  }
}
