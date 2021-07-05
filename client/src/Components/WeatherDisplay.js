import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col, Spinner, Card, Button, ListGroup} from 'react-bootstrap'
import { ThermometerHalf, DropletFill, Wind, ChevronDown } from 'react-bootstrap-icons'

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
    open: {
      borderRadius: '2rem',
      clipPath: "circle(150% at 50% 20%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      borderRadius: '2rem',
      clipPath: "circle(20% at 50% 18%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
  }
  const toggleButton = {
    open:{
      left: '50%',
      top: '100%',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    closed: {
      left: '45%',
      top: '40%',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }
  const ListGroupVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  const ListItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
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
      <div className="position-relative">
        <div style={{filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))'}}>
          <Card as={motion.div} initial={false} animate={expanded ? 'open': 'closed'} 
            variants={variants} className="bg-dark text-light">
            <Card.Body>
              <Container className="text-center d-flex flex-column justify-content-center h-100 mb-3">
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
                <ListGroup as={motion.ul} variants={ListGroupVariants}>
                  {[0,1,2,3,4,5,6,7].map(val => (
                    <ListGroup.Item as={motion.li} variants={ListItemVariants} key={val} className="bg-transparent text-light border-0">
                      <div className="w-100 text-center">
                        <span className="m-3">7/1</span>
                        <span className="m-3">
                          <img
                            width={30}
                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            alt="current weather logo"
                          />
                        </span>
                        <span className="m-3">66"</span>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
            </Card.Body>
          </Card>
        </div>
        <motion.div className="position-absolute" animate={expanded? 'open' : 'closed'} variants={toggleButton}>
          <Button as={motion.button} 
            animate={{ y : 10 }} 
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1 }} 
            variant="link" 
            className="p-0"
            onClick={handleClick}
          >
            <ChevronDown size={24} />
          </Button>
        </motion.div>
      </div>
    )
  }


}