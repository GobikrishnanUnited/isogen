
/*eslint-disable*/
import React,{useRef,useEffect} from 'react';
import PropTypes from 'prop-types';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button } from 'reactstrap';
import { Chart, registerables } from 'chart.js';

const PDFReport = ({reportDetails,staffeditdetails}) => {
  PDFReport.propTypes = {
    reportDetails: PropTypes.any,
    staffeditdetails:PropTypes.any
  }
  const canvasRef = useRef(null);
console.log('reportDetails',reportDetails);
console.log('staffeditdetails',staffeditdetails);
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
    const dd = {
      pageSize: 'A4',
      pageMargins: [40, 100, 40, 80],
      header: {
        margin: [0, 30, 0, 0], // Margin around the header
        stack: [
          {
            text: `${staffeditdetails?.company_name? staffeditdetails.company_name:''}`,
            style: 'headerTitle',
            alignment: 'center',
            margin: [0, 0, 0, 5] // Margin below to create space between titles
          },
          {
            text: `${staffeditdetails?.title? staffeditdetails.title:''}`,
            style: 'headerSubtitle',
            alignment: 'center'
          }
        ]
      },
        
      footer: (currentPage, pageCount) => ({
        stack: [
          {
            text: `Page ${currentPage} of ${pageCount}`,
            alignment: 'center',
            margin: [0, 10, 0, 0],
          },
          {
            text: '0%-74.99%: POOR | 75%-89.99%: FAIR | 90%-100%: PASS',
            style: 'legend',
            alignment: 'center',
            margin: [0, 20, 0, 0],
          },
        ],
        margin: [0, 10, 0, 0], // Margin for the entire footer
      }),
      
      content: [
        { text: 'Porter Building | London, UK', style: 'subHeader', alignment: 'center' },
        { text: '\n\n' },
        { text: 'TUESDAY 7th May 2024', style: 'date', alignment: 'center' },
        { text: `${staffeditdetails?.result? staffeditdetails.result:''}`, style: 'status', alignment: 'center' },
        { text: `${staffeditdetails?.score_percent? staffeditdetails.score_percent:''}`, style: staffeditdetails.score_percent< 75?'fail': staffeditdetails.score_percent <90?'fair':'score', alignment: 'center' },
        { text: `${staffeditdetails?.score? staffeditdetails.score:''}`, style: 'scoreDetails', alignment: 'center' },
        { text: '\nHISTORY', style: 'historyHeader', alignment: 'center' },
        {
          image: barChartImage,
          width: 500,
          alignment: 'center'
      },
 { text: '\nDESCRIPTION', style: 'sectionTitle' },
        { text: `${staffeditdetails?.description? staffeditdetails.description:''}`, style: 'textSize' },
        { text: '\nSUMMARY', style: 'sectionTitle' },
        { text: `${staffeditdetails?.summary? staffeditdetails.summary:''}`, style: 'textSize' },
        { text: '\n\n' },
       

        { text: '\nSERVER ROOM', style: 'sectionTitle' },
        {
          table: {
            widths: ['*', '*', '*'],
            body: [
              [{ text: 'Question', style: 'tableHeader' }, { text: 'Score', style: 'tableHeader' }, { text: 'Response', style: 'tableHeader' }],
              ['Server Room door previously locked?', '1/1', 'YES'],
              ['Server Room lights working?', '1/1', 'YES'],
              ['Server lights all blue?', '1/1', 'YES'],
              ['Any UPS warning messages?', '1/1', 'YES'],
              ['SAN lights all blue?', '1/1', 'YES'],
              ['Switches functioning correctly?', '0/1', 'NO']
            ]
          },
          layout: 'lightHorizontalLines'
        },
        { text: `${staffeditdetails?.title? staffeditdetails.title:''}`, style: 'sectionTitle' },
        {
          table: {
            widths: ['*', '*', '*'],
            body: [
              [{ text: 'Question', style: 'tableHeader' }, { text: 'Score', style: 'tableHeader' }, { text: 'Response', style: 'tableHeader' }],
              ['Server Room door previously locked?', '1/1', 'YES'],
              ['Server Room lights working?', '1/1', 'YES'],
              ['Server lights all blue?', '1/1', 'YES'],
              ['Any UPS warning messages?', '1/1', 'YES'],
              ['SAN lights all blue?', '1/1', 'YES'],
              ['Switches functioning correctly?', '0/1', 'NO']
            ]
          },
          layout: 'lightHorizontalLines'
        },
        { text: '\nSYSTEMS CHECK', style: 'sectionTitle' },
        {
          table: {
            widths: ['*', '*', '*'],
            body: [
              [{ text: 'Question', style: 'tableHeader' }, { text: 'Score', style: 'tableHeader' }, { text: 'Response', style: 'tableHeader' }],
              ['Temperature (Degrees Celsius)', '1/1', '21°C'],
              ['Dial tone on ADSL line(s)?', '1/1', 'YES'],
              ['PABX and M2 voicemail systems working?', '1/1', 'YES'],
              ['Previous night\'s backup job successful?', '1/1', 'YES'],
              ['Backup tapes inserted?', '1/1', 'YES'],
              ['Test run of daily/monthly backup completed?', '1/1', 'YES']
            ]
          },
          layout: 'lightHorizontalLines'
        },

        { text: '\n\nCOMMENTS & ACTION PLAN', style: 'sectionTitle' },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [{ text: 'Findings', style: 'tableHeader' }, { text: 'Action Required', style: 'tableHeader' }],
              [`${staffeditdetails?.findings? staffeditdetails.findings:''}`, `${staffeditdetails?.action_required? staffeditdetails.action_required:''}`]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          columns: [
            { text: 'Priority: High', style: 'textSize' },
            { text: 'Due Date: 08 May 2024', style: 'textSize' },
            { text: 'Assignee: John Doe', style: 'textSize' }
          ]
        },

        { text: '\nDECLARATION', style: 'sectionTitle' },
        {
          columns: [
            {
              stack: [
                { text: 'Auditor', style: 'textSize' },
                { text: 'Jane Williams', style: 'signature' }
              ]
            },
           
          ]
        },

       
      ],
      styles: {
        headerTitle: { fontSize: 18, bold: true },
        headerSubtitle: { fontSize: 14, color: '#d9534f' },
        subHeader: { fontSize: 10, color: '#777' },
        date: { fontSize: 12, bold: true },
        status: { fontSize: 16, color: 'green', bold: true },
        score: { fontSize: 28, color: 'green', bold: true },
        fail: { fontSize: 28, color: 'red', bold: true },
        fair: { fontSize: 28, color: 'orange', bold: true },
        scoreDetails: { fontSize: 10, color: '#777' },
        historyHeader: { fontSize: 14, bold: true },
        sectionTitle: { fontSize: 12, bold: true, margin: [0, 10, 0, 5] },
        tableHeader: { bold: true, fillColor: '#eeeeee' },
        textSize: { fontSize: 10 },
        signature: { fontSize: 12, italics: true },
        legend: { fontSize: 10, color: '#777' },
      }
    };

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(dd, null, null, pdfFonts.pdfMake.vfs).open();
  };

  return (
    <div>
       <canvas ref={canvasRef} width="400" height="200" style={{ display: 'none' }} ></canvas>
      <Button type="button" className="btn btn-dark" onClick={generatePDF}>
        Print Static Report
      </Button>
    </div>
  );
};

export default PDFReport;
