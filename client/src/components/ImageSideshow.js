import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import house1 from '../assets/img/house1.jpeg'
import house2 from '../assets/img/house2.jpeg'
import house3 from '../assets/img/house3.jpg'


const ImageSideshow = () => {

  return (
    <Carousel className=" w-100">
      <Carousel.Item>
        <Image
          // className="d-block w-100"
          src={house1}
          alt="First slide"
          fluid
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          // className="d-block w-100"
          src={house2}
          alt="Second slide"
          fluid
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          // className="d-block w-100"
          src={house3}
          alt="Third slide"
          fluid
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ImageSideshow