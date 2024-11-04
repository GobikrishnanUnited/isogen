import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { Link } from 'react-router-dom';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { ToastContainer } from 'react-toastify';
import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import api from '../../constants/api';
import message from '../../components/Message';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ExportReport from '../../components/Report/ExportReport';

const ManageReports = () => {
  //All state variable
  const [salesReport, setSalesReport] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [company, setCompany] = useState();
  const [userSearchData, setUserSearchData] = useState('');

  //Get data from Training table
  const getProject = () => {
    api
      .get('/score/getGapReport')
      .then((res) => {
        setSalesReport(res.data.data);
        setUserSearchData(res.data.data);
      })
      .catch(() => {
        message('Over all sales Data Not Found', 'info');
      });
  };

  const getCompany = () => {
    api.get('/company/getCompany').then((res) => {
      setCompany(res.data.data);
    });
  };

  const handleSearch = () => {
    const newData = salesReport
      .filter((y) => y.company_name === (companyName === '' ? y.company_name : companyName))
      .filter((x) =>
        endDate && startDate
          ? x.creation_date <= (endDate === '' ? x.creation_date : endDate) &&
            x.creation_date >= (startDate === '' ? x.creation_date : startDate)
          : startDate
          ? x.creation_date === (startDate === '' ? x.creation_date : startDate)
          : x.creation_date === (endDate === '' ? x.creation_date : endDate),
      );
    setUserSearchData(newData);
  };

  useEffect(() => {
    getProject();
    getCompany();
  }, []);
  const [page, setPage] = useState(0);

  const employeesPerPage = 20;
  const numberOfEmployeesVistited = page * employeesPerPage;
  const displayEmployees = userSearchData.slice(
    numberOfEmployeesVistited,
    numberOfEmployeesVistited + employeesPerPage,
  );
  const totalPages = Math.ceil(userSearchData.length / employeesPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };

  
  const columns = [
    {
      name: '#',
      selector: '',
      grow: 0,
      wrap: true,
      width: '4%',
    },
    {
      name: 'Edit',
      selector: 'edit',
      cell: () => <Icon.Edit2 />,
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'Company',
      selector: 'company_name',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Score',
      selector: 'first_name',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Result',
      selector: 'result',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Review Status',
      selector: 'review_status',
      sortable: true,
      grow: 2,
      wrap: true,
    },
   
  ];

  return (
    <>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <Card>
        <CardBody>
          <Row>
            <Col>
              <FormGroup>
                <Label>Start Date</Label>
                <Input
                  type="date"
                  name="startDate"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>End Date</Label>
                <Input type="date" name="endDate" onChange={(e) => setEndDate(e.target.value)} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Select Company Name</Label>
                <Input
                  type="select"
                  name="company_id"
                  onChange={(e) => setCompanyName(e.target.value)}
                >
                  <option value="">Please Select</option>
                  {company &&
                    company.map((ele) => {
                      return (
                        <option key={ele.company_id} value={ele.company_name}>
                          {ele.company_name}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>
            <Col md="1">
              <Button color="primary" className="shadow-none" onClick={() => handleSearch()}>Go</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <Row>
            <Col md="3">
              <Label>
                <b>Company:</b> {companyName}
              </Label>
            </Col>
            <Col md="3">
              <Label>
                <b>Start Date:</b> {startDate}
              </Label>
            </Col>
            <Col md="3">
              <Label>
                <b> End Date:</b> {endDate}
              </Label>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <Row>
            <Col>
              <ExportReport columns={columns} data={userSearchData} />
            </Col>
          </Row>
        </CardBody>

        <CardBody>
          <Table>
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {displayEmployees &&
              displayEmployees.map((element, index) => {
                return (
                  <tr key={element.gap_report_id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/GapAnalysisReportEdit/${element.gap_report_id}?tab=1`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>{element.company_name}</td>
                    <td>{element.title}</td>
                    <td>{element.correct_count}</td>
                    <td>{element.result}</td>
                    <td>{element.review_status}</td>
                  
                  </tr>
                );
              })}
          </tbody>
          </Table>
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={totalPages}
            onPageChange={changePage}
            containerClassName="navigationButtons"
            previousLinkClassName="previousButton"
            nextLinkClassName="nextButton"
            disabledClassName="navigationDisabled"
            activeClassName="navigationActive"
          />
        </CardBody>
      </Card>
    </>
  );
};
export default ManageReports;
