import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Bar, Pie, Doughnut} from 'react-chartjs-2'


  const hunterGreen = "#386641";
  const mayGreen = "#6a994e";
  const androidGreen = "#a7c957";
  const eggshell = "#f2e8cf";
  const deepChestnut = "#bc4749";


const Analytics = props => {

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: mayGreen,
        borderColor: androidGreen,
        borderWidth: 1,
        hoverBackgroundColor: hunterGreen,
        hoverBorderColor: androidGreen,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  const pieData = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };
  const doughnutData = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };

  return (
    <Container className="justify-content-center h-100 d-flex flex-column text-light" fluid>
      <Row className="mb-5">
        <Col className="text-white">
          <Bar
            data={barData}
            width={100}
            height={300}
            legend={{display: false}}
            options={{maintainAspectRatio: false}}
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Pie data={pieData} legend={{display: false}}/>
        </Col>
        <Col>
          <Doughnut data={doughnutData} legend={{display: false}}/>
        </Col>
        <Col>
          <Pie data={pieData} legend={{display: false}}/>
        </Col>
      </Row>
   </Container>
  )
}

export default Analytics