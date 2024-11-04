// PieChart.js

import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import 'chart.js';

const PieChart = ({ data }) => {
  // Assuming 'data' is an object with keys as statuses and values as number of tests
  const statuses = Object.keys(data);
  const counts = Object.values(data);

  const chartData = {
    labels: statuses,
    datasets: [
      {
        data: counts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Test Submission Status</h1>
      <Pie data={chartData} />
    </div>
  );
};

PieChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default PieChart;
