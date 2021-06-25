import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner, Card} from 'react-bootstrap'
import { ThermometerHalf, DropletFill, Wind } from 'react-bootstrap-icons'

export default function WeatherDisplay(){
  const [weatherData, setWeather] = useState(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=3abd9c2df6a249e8abcf4f812de0a627`)
    .then(res => res.json())
    .then(data => setWeather(data))
    .catch(err => console.log(err))
  }, [])
  
  const formatWeatherDesc = desc => {
    const words = desc.split(" ");
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }
  if (!weatherData) {
    return (
      <div className="text-center h-100">
        <Spinner animation="grow" />
      </div>
    )
  } else {
    return (
      <Card className="bg-dark text-light rounded-circle flex-shrink-1 shadow-lg" style={{ width: '12rem', height: '12rem' }} >
        <Card.Body className="p-0 position-relative" >
          <Container className="text-center">
            <Row noGutters>
              <Col>
                <div>
                  <img
                    width={76}
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="current weather logo"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <p>{Math.round(weatherData.main.temp)}</p>
                </div>
              </Col>
            </Row>
            <Row noGutters>
              <Col className="">
                <div>
                  <p className="m-0">{weatherData.name}</p>
                  <p className="m-0">{weatherData.weather[0].main}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    )
  }


}