import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ThermometerHalf, DropletFill, Wind } from 'react-bootstrap-icons'

export default function WeatherDisplay({ weatherData }){
  console.log(weatherData)

  const formatWeatherDesc = desc => {
    const words = desc.split(" ");
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }


  return (
    <Container className="text-center p-2">
      <Row noGutters>
        <Col>
          <p className="text-left">{formatWeatherDesc(weatherData.weather[0].description)}</p>
        </Col>
      </Row>
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
        <Col className="my-auto">
          <div>
            <p>{Math.round(weatherData.main.temp)}</p>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col className="d-flex justify-content-center">
          <div>
            <p className="m-0">{weatherData.name}</p>
            <p className="m-0">{weatherData.weather[0].main}</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-center">
          <div>
            <p className="m-0 text-left"><ThermometerHalf size={12} />  <span>{Math.round(weatherData.main.temp_min)} - {Math.round(weatherData.main.temp_max)}</span></p>
            <p className="m-0 text-left"><DropletFill size={12} />  <span>{Math.round(weatherData.main.humidity)}</span></p>
            <p className="m-0 text-left"><Wind size={12} />  <span>{Math.round(weatherData.wind.speed)} m/s</span></p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}