/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, CardBody, Container } from 'reactstrap';
import api from '../../constants/api';
import MainChart from '../../views/charts/DonutChart';
import { ELEVATION_1 } from '@blueprintjs/core/lib/esm/common/classes';


const ApplicationDonutDashboard = () => {
  const [projectStats, setProjectStats] = useState([]);
  const [projectStatsTitle, setProjectStatsTitle] = useState([]);
  const [projectStatsEmployee, setProjectStatsEmployee] = useState([]);
  const navigate=useNavigate();
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

    
 
  // Get the project statistics for StatusCards
  const getStats = () => {
    api
    .get('support/getDashboardChart')
    .then((res) => {
        setProjectStats(res.data.data);
      })
      .catch((error) => {
        console.log('Error fetching project statistics:', error);
      });
  };

  // Get the project statistics for ProjectTitle
  const getStatsTitle = () => {
    api
    .get('support/getDashboardTicket')
    .then((res) => {
        setProjectStatsTitle(res.data.data);
      })
      .catch((error) => {
        console.log('Error fetching project statistics:', error);
      });
  };

  // Get the project statistics for ProjectTitle
  const getStatsEmployeeTask = () => {
    api
    .get('support/getDashboardTicketChart2')
    .then((res) => {
        setProjectStatsEmployee(res.data.data);
      })
      .catch((error) => {
        console.log('Error fetching project statistics:', error);
      });
  };
  const handleChartClick = (y) => {
    console.log('yy',y)
    if (y) {
 navigate(`?project=${y}`);

    }
  };
  useEffect(() => {
    getStats();
    getStatsTitle();
    getStatsEmployeeTask();
  }, []);

  const optionsDonut = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Rubik', sans-serif",
      events: {
        click:(event, chartContext, opts)=> {
          console.log('event',event);
          console.log('chartContext',chartContext);
          console.log('opts',opts);
          // config.seriesIndex gives the index of the clicked segment
          const { seriesIndex } = opts;
 // Access the project ID associated with the clicked segment
 const projectId = projectStatsTitle[seriesIndex].support_id;

 // Assuming you have routes like '/project/:projectId'
 navigate(`/ProjectEdit/${projectId}`);
        
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        console.log('opts',opts);
        const { seriesIndex } = opts;
        return projectStatsTitle[seriesIndex].task_title_count;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              color: '#99abb4',
            },
          },
        },
      },
    },
    
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
      fontFamily: "'Montserrat', sans-serif",
    },
    tooltip: {
      fillSeriesColor: false,
      theme: 'dark',
    },
  };

  const optionsDonut1 = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Rubik', sans-serif",
    },
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        const { seriesIndex } = opts;

        return projectStatsEmployee[seriesIndex].task_count;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              color: '#99abb4',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
      fontFamily: "'Montserrat', sans-serif",
    },
    tooltip: {
      fillSeriesColor: false,
      theme: 'dark',
    },
  };
  const data = [
    { label: 'Quality', value: 75 },
    { label: 'Service', value: 88 },
    { label: 'Health Care', value: 92 },
    { label: 'Management', value: 60 }
  ];


  const statusdata = [
    { id:1,in_progress_task_count: 60, completed: 75,on_hold: 25, not_started_task: 88  }
  ];

  const seriesDonut = projectStatsTitle.map((stat) => stat.task_title_count);
  const labelsDonut = projectStatsTitle.map((stat) => stat.title);

  const seriesDonut1 = projectStatsEmployee.map((stat) => stat.task_count);
  const labelsDonut1 = projectStatsEmployee.map((stat) => stat.first_name);
  return (
    <>
    <div >
   
            <Row className="align-items-stretch">
                <Col>
                    
                    <Card className="h-100">
                        <CardBody>
                            {/* Your status component */}
                            <div>
                            <h5 className="status-heading">Application Status</h5>
                  <Row>
                    {statusdata.map((project) => (
                      <Col sm="6" lg="2" key={project.id}>
                        <Card className="custom-card">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="font-12 mb-0">No Progress</h6>
                                <h4 className="mt-1 fw-bolder mb-0" style={{color:'orange'}}>
                                  {' '}
                                  {project.in_progress_task_count}
                                </h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}

                    {statusdata.map((project) => (
                      <Col sm="6" lg="2" key={project.id}>
                        <Card className="custom-card1">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="font-12 mb-0">Quizz Created</h6>
                                <h4 className="mt-1 fw-bolder mb-0" style={{color:'orange'}}> {project.completed}</h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                    {statusdata.map((project) => (
                      <Col sm="6" lg="2" key={project.id}>
                        <Card className="custom-card2">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="font-12 mb-0"> Quizz Submitted</h6>
                                <h4 className="mt-1 fw-bolder mb-0" style={{color:'orange'}}> {project.on_hold}</h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                    {statusdata.map((project) => (
                      <Col sm="12" lg="3" key={project.id}>
                        <Card className="custom-card3">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="font-12 mb-0">Certificate Provided</h6>
                                <h4 className="mt-1 fw-bolder mb-0" style={{color:'orange'}}> {project.not_started_task}</h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                <Card className="h-100">
                        <CardBody>
                            {/* Your chart component */}
                            <div style={{ width: '400px', height: '600px' }}>
                            <h5>Applications</h5>
                  {/* <Chart
                    options={{ ...optionsDonut, labels: labelsDonut }}
                    series={seriesDonut}
                    type="donut"
                    height="360"
                  /> */}
                  <MainChart projectStatsTitle={data} handleChartClick={handleChartClick}/>
              
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                {/* Add more columns as needed */}
            </Row>
        </div>
      {/* <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <Row>
                <Col md="8">
                  <h5>Project Stats</h5>
                
                  <MainChart projectStatsTitle={projectStatsTitle} handleChartClick={handleChartClick}/>
                </Col>
                <Col md="8">
                  <h5 className="status-heading">Status</h5>
                  <Row>
                    {projectStats.map((project) => (
                      <Col sm="6" lg="2" key={project.id}>
                        <Card className="custom-card">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="font-12 mb-0">In Progress</h6>
                                <h4 className="mt-1 fw-bolder mb-0">
                                  {' '}
                                  {project.in_progress_task_count}
                                </h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}

                    {projectStats.map((project) => (
                      <Col sm="6" lg="2" key={project.id}>
                        <Card className="custom-card1">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="font-12 mb-0">Completed</h6>
                                <h4 className="mt-1 fw-bolder mb-0"> {project.completed}</h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                    {projectStats.map((project) => (
                      <Col sm="6" lg="2" key={project.id}>
                        <Card className="custom-card2">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="font-12 mb-0">On Hold</h6>
                                <h4 className="mt-1 fw-bolder mb-0"> {project.on_hold}</h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                    {projectStats.map((project) => (
                      <Col sm="12" lg="3" key={project.id}>
                        <Card className="custom-card3">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="font-12 mb-0">Not Started</h6>
                                <h4 className="mt-1 fw-bolder mb-0"> {project.not_started_task}</h4>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row> */}

      {/* <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <Row>
                <Col md="4">
                  <h5>Overall Employee Statistics</h5>
                  {/* <Chart
                    options={{ ...optionsDonut1, labels: labelsDonut1 }}
                    series={seriesDonut1}
                    type="donut"
                    height="360"
                  /> */}
                  {/* <MainChart/>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row> */} 
    </>
  );
};

export default ApplicationDonutDashboard;
