// SubmissionsChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const SubmissionsChart = () => {
    const submissions = [
        { date: '2023-01-01', score: 85 },
        { date: '2023-03-01', score: 90 },
        { date: '2023-06-01', score: 78 },
        { date: '2023-09-01', score: 88 },
        { date: '2023-12-01', score: 92 },
      ];
  const options = {
    chart: {
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: submissions.map(submission => submission.date),
      title: {
        text: 'Date',
      },
    },
    yaxis: {
      title: {
        text: 'Scores',
      },
    },
    title: {
      text: 'Test Scores Over the Year',
      align: 'center',
    },
  };

  const series = [
    {
      name: 'Scores',
      data: submissions.map(submission => submission.score),
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default SubmissionsChart;
