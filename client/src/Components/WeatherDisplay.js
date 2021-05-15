import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function WeatherDisplay(props){
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