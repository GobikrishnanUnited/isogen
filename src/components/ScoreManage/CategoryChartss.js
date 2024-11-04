import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const CategoryChart = ({ categories }) => {
  const data = {
    labels: categories.map(category => category.name),
    datasets: [
      {
        label: 'Answered',
        data: categories.map(category => category.answeredCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Correct',
        data: categories.map(category => category.correctCount),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: 'bottom', // You can change the position as needed
    },
  };

  return (
    <div>
            <h1>Category Wise Chart</h1>

      <Doughnut data={data} options={options} />
    </div>
  );
};

CategoryChart.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      answeredCount: PropTypes.number.isRequired,
      correctCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CategoryChart;
