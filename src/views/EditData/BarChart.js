// import React from 'react';
// import PropTypes from 'prop-types';
// //import { Bar } from 'react-chartjs-2';
// import { Doughnut } from 'react-chartjs-2';

// const BarChart = ({ answeredCount, unansweredCount, totalQuestion, correctCount }) => {
//   const data = {
//     labels: ['Answered', 'Unanswered', 'Total Questions', 'Correct Answers'],
//     datasets: [
//       {
//         label: 'Counts',
//         backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4CAF50'],
//         borderColor: 'rgba(0,0,0,0.2)',
//         borderWidth: 3,
//         hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4CAF50'],
//         hoverBorderColor: 'rgba(0,0,0,0.2)',
//         data: [answeredCount, unansweredCount, totalQuestion, correctCount],
//       },
//     ],
//   };

//   return (
//     <div>
//       <h4>Score Summary</h4>
//       <Doughnut data={data} />
//     </div>
//   );
// };

// // PropTypes definition
// BarChart.propTypes = {
//   answeredCount: PropTypes.number.isRequired,
//   unansweredCount: PropTypes.number.isRequired,
//   totalQuestion: PropTypes.number.isRequired,
//   correctCount: PropTypes.number.isRequired,
// };

// export default BarChart;

/*eslint-disable*/
/*eslint-disable*/
/*eslint-disable*/
import React, { useRef, useEffect } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Chart, registerables } from 'chart.js';

//Chart.register(...registerables);

//pdfMake.vfs = pdfFonts.pdfMake.vfs;

const GapAnalysisReport = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Current Status', 'Desired Status'],
                datasets: [{
                    label: 'Percentage',
                    data: [70, 90],
                    backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)']
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }, []);

    const createBarChartImage = () => {
        return new Promise((resolve) => {
            const canvas = canvasRef.current;
            resolve(canvas.toDataURL('image/png'));
        });
    };

    const generatePDF = async () => {
        const barChartImage = await createBarChartImage();
        
        const docDefinition = {
            content: [
                { text: 'Gap Analysis Report', style: 'header' },
                { text: 'This report provides a gap analysis of our current status vs. desired status.', style: 'subheader' },
                {
                    image: barChartImage,
                    width: 500,
                    alignment: 'center'
                },
                {
                    text: 'Analysis Summary:',
                    style: 'subheader'
                },
                {
                    ul: [
                        'Current Status: 70%',
                        'Desired Status: 90%',
                        'Gap: 20%'
                    ]
                },
                {
                    text: 'Recommendations:',
                    style: 'subheader'
                },
                {
                    ul: [
                        'Improve training programs.',
                        'Enhance resource allocation.',
                        'Increase stakeholder engagement.'
                    ]
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
            }
        };
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(docDefinition, null, null, pdfFonts.pdfMake.vfs).open();
        //pdfMake.createPdf(docDefinition).open();
    };

    return (
        <div>
            <h1>Gap Analysis Report Generator</h1>
            <canvas ref={canvasRef} width="400" height="200"></canvas>
            <button onClick={generatePDF}>Generate PDF</button>
        </div>
    );
};

export default GapAnalysisReport;
