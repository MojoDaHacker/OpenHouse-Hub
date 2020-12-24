import React, {useEffect, useState} from 'react';
import Chart from '../Components/Chart';
import {Container, Row, Col, Button, Media, Card, Image,
  ListGroup, Badge} from 'react-bootstrap'
import {IconContext} from 'react-icons'
import {FcHome} from 'react-icons/fc'
import {BsArrowUp, BsArrowDown} from 'react-icons/bs'
import SessionCreator from '../Components/SessionCreator'
import profile from '../assets/profile.jpg'
import {SessConsumer} from '../contexts/sessContext';

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      recentLeads : [0],
      notifications : [0]
    }
  }
  
  render(){
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
      <Container className="h-100" fluid>
        <Row className="h-100">
          <Col className="my-auto" xs={9}>
            <Card className="mb-3">
              <Card.Body>
                <Container fluid>
                  <Row>
                    <Col className="border-right border-primary">
                      <Image className="border border-primary" style={{width: "4.5rem"}} src={profile} alt="User Profile Picture" roundedCircle/>
                      <span className="ml-3">Good Morning Squidward</span>
                    </Col>
                    <Col className="pl-0">
                      {this.state.notifications.length > 0 ? (
                        <div className="d-flex h-100">
                        <div className="my-auto text-center">
                          <Badge className="" variant="primary">3</Badge>
                          <Button className="bg-transparent border-0 text-primary" size="sm"><BsArrowDown /></Button>
                        </div>
                        <Card className="w-100 h-100 shadow-sm">
                          <Card.Body>

                          </Card.Body>
                        </Card>
                      </div>
                      ) : (
                        <div className="text-center">
                          <h5>No new notifications to show.</h5>
                        </div>
                      )}
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <SessConsumer>
                  {setSession => <SessionCreator {...setSession}/>}
                </SessConsumer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card className="uiCard h-100 overflow-hidden">
              <Card.Header>
                <Container>
                  <Row>
                    <p>{this.props.weatherData.name}</p>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <p>{this.props.weatherData.main && this.props.weatherData.weather[0].description}</p>
                      <Image src={`http://openweathermap.org/img/wn/${this.props.weatherData.main && this.props.weatherData.weather[0].icon}@2x.png`} />
                      <p>{this.props.weatherData.main && Math.round(this.props.weatherData.main.temp)}</p>
                    </Col>
                  </Row>
                  <Row className="text-center">
                    <Col><p>{this.props.weatherData.main && Math.round(this.props.weatherData.main.temp_max)}</p></Col>
                    <Col><p>{this.props.weatherData.main && Math.round(this.props.weatherData.main.temp_min)}</p></Col>
                  </Row>
                </Container>
              </Card.Header>
              <Card.Body className="p-0 overflow-auto position-relative">
                <ListGroup className="w-100 h-100 position-absolute">
                  {forecasts && forecasts.map((val,i) => (
                    <ListGroup.Item key={i} className="border-left-0 border-top-0 border-right-0 d-flex justify-content-between align-items-center">
                      <h6>{forecasts && `${days[new Date(forecasts[i].dt * 1000).getDay()]} ${new Date(forecasts[i].dt * 1000).getDate()}`}</h6>
                      <Image src={`http://openweathermap.org/img/wn/${forecasts && forecasts[i].weather[0].icon}@2x.png`} />
                      <h6>{forecasts && Math.round(forecasts[i].main.temp)}</h6>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

function WeatherDisplay(props){
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=3abd9c2df6a249e8abcf4f812de0a627`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWeatherData({
        name: data.name,
        ...data.weather[0],
        ...data.main
      })
    })
    .catch(err => console.log(err))
  }, [])


  return(
    <>
      <Container style={{borderRadius: "5px", height: "5.5rem"}} fluid>
        <Row>
          <Col xs="auto">
            <Container fluid>
              <Row>
                <div className="mx-auto">
                  <h6>{weatherData.name}</h6>
                </div>
              </Row>
              <Row>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                  alt="Generic placeholder"
                />
              </Row>
            </Container>
          </Col>
          <Col xs="auto">
            <Container>
              <Row>
                <Col xs="auto" className="p-1 mx-auto">
                  <h3>{Math.round(weatherData.temp)}</h3>
                </Col>
              </Row>
              <Row>
                <Col xs="auto" className="p-1 mx-auto">
                  <h6>{Math.round(weatherData.temp_min)}</h6>
                </Col>
                <Col xs="auto" className="p-1 mx-auto">
                  <h6>{Math.round(weatherData.temp_max)}</h6>
                </Col>
              </Row>
            </Container>
            {/* <p>{weatherData.main}</p>
            <p>{weatherData.description}</p>
            <p>{weatherData.icon}</p> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}
function QuickAnalytics(props){
  const [quickAnalysis, setAnalysis] = useState([])

  return(
    <>
      <Media className="flex-row-reverse" style={{height: "5.5rem"}}>
        <IconContext.Provider value={{size: "3rem", style:{fontWeight: "200"}, className: "p-1 rounded-circle align-self-center"}}>
          <FcHome />
        </IconContext.Provider>
        <Media.Body className="pr-3 text-right">
          {quickAnalysis.length > 0 ?
          quickAnalysis.map(val => (
            <p>{val}</p>
          )):
          <p>No Data Available!</p>}
        </Media.Body>
      </Media>
    </>
  )
}