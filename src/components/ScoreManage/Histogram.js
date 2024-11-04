// HistogramChart.js

import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import 'chart.js';

const HistogramChart = ({ data }) => {
  // Preparing the data for the histogram
  const scores = data; // Assuming 'data' is an array of test scores
  const scoreRanges = ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100'];
  const frequency = Array(scoreRanges.length).fill(0);

  scores.forEach(score => {
    const rangeIndex = Math.floor(score / 10);
    frequency[rangeIndex]++;
  });

  const chartData = {
    labels: scoreRanges,
    datasets: [
      {
        label: 'Score Distribution',
        data: frequency,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Score Ranges',
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Frequency',
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
      <h1>Test Score Distribution</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

HistogramChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default HistogramChart;
