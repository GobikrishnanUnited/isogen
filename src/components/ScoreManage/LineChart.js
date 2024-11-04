// LineChart.js

import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import 'chart.js';

const LineChart = ({ data }) => {
  // Assuming 'data' is an object with keys as time intervals and values as scores
  const timeIntervals = Object.keys(data);
  const scores = Object.values(data);

  const chartData = {
    labels: timeIntervals,
    datasets: [
      {
        label: 'Scores Over Time',
        data: scores,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        lineTension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day', // Can be changed to 'week', 'month', etc.
            tooltipFormat: 'll',
          },
          scaleLabel: {
            display: true,
            labelString: 'Time',
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Scores',
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h1>Scores Over Time</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

LineChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default LineChart;
