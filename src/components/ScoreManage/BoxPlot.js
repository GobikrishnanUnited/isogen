// BoxPlot.js

import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import 'chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot';

const quantile = (arr, q) => {
  const sorted = arr.slice().sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  }
  return sorted[base];
};

const BoxPlot = ({ data }) => {
  // Assuming 'data' is an object with keys as categories and values as arrays of scores
  const categories = Object.keys(data);
  const scores = Object.values(data);

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Scores',
        data: scores.map((scoresArray) => {
          return {
            min: Math.min(...scoresArray),
            q1: quantile(scoresArray, 0.25),
            median: quantile(scoresArray, 0.5),
            q3: quantile(scoresArray, 0.75),
            max: Math.max(...scoresArray),
          };
        }),
        backgroundColor: 'rgba(255, 0, 0)',
        borderColor: 'rgba(255, 0, 0)',
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Categories',
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
      <h1>Box Plot of Scores</h1>
      <Bar data={chartData} options={options} type="boxplot" />
    </div>
  );
};

BoxPlot.propTypes = {
  data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default BoxPlot;
