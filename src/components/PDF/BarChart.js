import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Bar } from 'react-chartjs-2';
import html2canvas from 'html2canvas';

const BarChart = ({ setChartImage }) => {
  const chartContainerRef = useRef(null); // Reference for the chart container

  const data = {
    labels: ['23-MAR-24', '29-MAR-24', '03-APR-24', '14-APR-24'],
    datasets: [
      {
        label: 'Score',
        backgroundColor: '#1B3B6F',
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 2,
        hoverBackgroundColor: '#1B3B6F',
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        data: [52.63, 68.42, 78.95, 84.21],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}%`,
        },
        title: {
          display: true,
          text: 'SCORE',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    // Wait for the chart to fully render before capturing it as an image
    const timer = setTimeout(() => {
      if (chartContainerRef.current) {
        html2canvas(chartContainerRef.current).then((canvas) => {
          const chartImage = canvas.toDataURL('image/png');
          setChartImage(chartImage); // Pass the base64 image back to the parent component
        });
      }
    }, 1000); // Give it a delay to ensure the chart is fully rendered

    return () => clearTimeout(timer); // Clean up the timer
  }, [setChartImage]);

  return (
    <div ref={chartContainerRef} style={{ padding: '20px', backgroundColor: 'white' }}>
      <h4>Score Progress Over Time</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

// Define PropTypes for BarChart
BarChart.propTypes = {
  setChartImage: PropTypes.func.isRequired, // Expect a function and mark it as required
};

export default BarChart;
