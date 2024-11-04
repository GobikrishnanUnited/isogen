import React from 'react';
import { Col, Row } from 'reactstrap';
//import TaskSummary from '../../components/dashboard/TaskSummary';
//import ProjectSummaryChart from '../../components/dashboard/ProjectSummaryChart';
import LabourSummary from '../../components/dashboard/LabourSummary';
//import MaterrialIssueChart from '../../components/dashboard/MaterialIssueChart';
//import ProjectChart from '../../components/DashboardProj/ProjectChart';
//import QuoteChart from '../../components/DashboardProj/QuoteChart';
//import CustoChart from '../../components/DashboardProj/CustoChart';
//import Subcon from '../../components/DashboardProj/SubCon';
//import MaterialIssue from '../../components/DashboardProj/MaterialIssue';
//import ProjectEnq from '../../components/DashboardProj/ProjectEnq';
import IsoDashboard from '../../components/dashboard/ISODashboard';
import ScoreprogressSummary from '../../components/dashboard/ScoreprogressSummary';
import SubmissionScoreCharts from '../../components/DashboardProj/SubmissionScoreCharts';
import Questionaries from '../../components/DashboardProj/Questionaries';
import MultiCharts from '../charts/MultiCharts';
import ApplicationMultiChart from '../charts/ApplicationMultiChart';
import ApplicationsBarChart from '../../components/dashboard/ApplicationBarChart';

const Test = () => {

  return (
    <div >
      <Row>
        <Col lg='12'>
       <MultiCharts />
       <ApplicationMultiChart />
       <ApplicationsBarChart/>
        <IsoDashboard/>
        <ScoreprogressSummary/>
        <SubmissionScoreCharts/>
        <LabourSummary/>
        <Questionaries/>
                {/* <CustoChart/>
        <ProjectEnq/> */}
       
        {/* <QuoteChart/>
        <ProjectChart/>
        <Subcon/>
        <MaterialIssue/>
        <ProjectSummaryChart/>
        <TaskSummary/> */}
        {/*
        <MaterrialIssueChart/> */}
        
        </Col>
      </Row>
  
    </div>
  );
};

export default Test;
