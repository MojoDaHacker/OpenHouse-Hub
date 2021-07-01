import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col, Spinner, Card, Button, ListGroup} from 'react-bootstrap'
import { ThermometerHalf, DropletFill, Wind, ChevronDoubleDown } from 'react-bootstrap-icons'

export default function WeatherDisplay(){
  const [weatherData, setWeather] = useState(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=3abd9c2df6a249e8abcf4f812de0a627`)
    .then(res => res.json())
    .then(data => setWeather(data))
    .catch(err => console.log(err))
  }, [])
  const variants = {
    expanded: {
      borderRadius: '2rem',
      clipPath: "circle(150% at 50% 20%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    unexpanded: {
      borderRadius: '2rem',
      clipPath: "circle(23% at 50% 20%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    // displayBody:{
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   padding: 0
    // }
  }
  const handleClick = () => setExpanded(!expanded)
  const formatWeatherDesc = desc => {
    const words = desc.split(" ");
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }
  console.log(weatherData)

  if (!weatherData) {
    return (
      <div className="text-center h-100">
        <Spinner animation="grow" />
      </div>
    )
  } else {
    return (
      <div style={{filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))'}}>
        <Card as={motion.div} initial={false} animate={expanded ? 'expanded': 'unexpanded'} 
          variants={variants} className="bg-dark text-light">
          <Card.Body>
            <Container className="text-center d-flex flex-column justify-content-center h-100">
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
              <ListGroup>
                <ListGroup.Item className="bg-transparent text-light border-0">Hello!</ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0">Hello!</ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0">Hello!</ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0">Hello!</ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0">Hello!</ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0">Hello!</ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0">Hello!</ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-light border-0">Hello!</ListGroup.Item>
              </ListGroup>
          </Card.Body>
        </Card>
        <div className="text-center">
          <Button as={motion.button} animate={{ y : 10 }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1 }} variant="link" onClick={handleClick}>
            <ChevronDoubleDown size={24} />
          </Button>
        </div>
      </div>
    )
  }


}