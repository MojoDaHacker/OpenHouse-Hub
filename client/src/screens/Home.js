import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';
import QuickAnalytics from '../components/QuickAnalytics';
import { Container, Row, Col, Button, Card, Image, Badge } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

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
      <Container className="d-flex flex-column h-100 p-0 m-0" fluid>
        <Row className="" noGutters>
          <Col className="border-bottom">
            <Container className="p-3">
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
        <Row className="h-100 m-3" noGutters>
          <Col xs={9}>
            <div className="border-bottom text-center mb-3">
              <h1>Open House Sessions</h1>
            </div>
            <div>
              <Link href="/session/252635"><Button>Create a Session<spam><Plus/></spam></Button></Link>
            </div>
          </Col>
          <Col xs={3} className="d-flex flex-column">
            <Card className="flex-shrink-1 shadow-sm">
              <Card.Body className="p-0 position-relative">
                {/* <WeatherDisplay/> */}
              </Card.Body>
            </Card>
            <div className="p-4">
              <QuickAnalytics/>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
