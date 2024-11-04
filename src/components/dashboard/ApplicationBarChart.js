import React from 'react';
import Chart from 'react-apexcharts';

const ApplicationsBarChart = () => {
    // Mock data for applications received and approved
    const data = {
        series: [
            {
                name: 'Applications Received',
                data: [30, 50, 40, 70, 60, 80, 90, 100, 110, 120, 130, 140],
            },
            {
                name: 'Applications Certified',
                data: [20, 30, 25, 50, 45, 70, 80, 90, 100, 110, 120, 130],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            title: {
                text: 'Monthly Applications Received and Certified',
                align: 'center',
            },
            xaxis: {
                categories: [
                    'January', 'February', 'March', 'April', 'May',
                    'June', 'July', 'August', 'September', 'October',
                    'November', 'December',
                ],
                title: {
                    text: 'Months',
                },
            },
            yaxis: {
                title: {
                    text: 'Number of Applications',
                },
                min: 0,
                max: 150,
            },
            legend: {
                position: 'top',
            },
            dataLabels: {
                enabled: true,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
        },
    };

    return (
        <div>
            <Chart
                options={data.options}
                series={data.series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default ApplicationsBarChart;
