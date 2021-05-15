import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import QuickAnalytics from './QuickAnalytics';
import { Container, Row, Col, Button, Card, Image, Badge } from 'react-bootstrap'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      recentLeads : [0],
      notifications : []
    }
  }
  
  render(){
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
      <Container className="d-flex flex-column h-100 p-0 py-3" fluid>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col className="border-right border-primary">
                  {/* <Image className="border border-primary" style={{width: "4.5rem"}} src={profile} alt="User Profile Picture" roundedCircle/> */}
                  <span className="ml-3">Good Morning Squidward</span>
                </Col>
                <Col className="pl-0">
                  <div className="d-flex h-100">
                    <div className="my-auto text-center">
                      <Badge variant={notifications.length > 0 ? "warning" : "primary"}>{notifications.length}</Badge>
                      <Button className="bg-transparent border-0 text-primary" size="sm">a</Button>
                    </div>
                    <Card className="w-100 h-100 shadow-sm">
                      <Card.Body>
                        {notifications.length > 0 ? null : <p className="text-success text-center">You have no new notifications!</p>}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="h-100 m-3">
          <Col xs={9}>
            <div className="border-bottom mb-3">
              <h1>Open House Sessions</h1>
            </div>
            <div>
              <Button>Create a Session</Button>
            </div>
            {/* <Card>
              <Card.Body>
                <SessConsumer>
                  {setSession => <SessionCreator {...setSession}/>}
                </SessConsumer>
              </Card.Body>
            </Card> */}
          </Col>
          <Col xs={3} className="border">
            <Card className="h-100 overflow-hidden border-0">
              <Card.Body className="p-0 overflow-auto position-relative">
                <WeatherDisplay />
              </Card.Body>
            </Card>
            <Card className="h-100 overflow-hidden border-0">
              <Card.Body className="p-0 overflow-auto position-relative">
                <QuickAnalytics />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}