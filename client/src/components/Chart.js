import React from 'react';
import {Pie} from 'react-chartjs-2'

var data = {
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
}

const Chart = props => {


  return (
    <Pie data={data}/>
  )
}

export default Chart