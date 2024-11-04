/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import ComponentCard from '../ComponentCard';

import api from '../../constants/api';



const LabourSummary = () => {
  //All state variable
  const [labour, setLabour] = useState([]);
  const [userSearchData, setUserSearchData] = useState([
    {id:1,test:'ISO4001',date:'12-03-2024',score:6},
    {id:2,test:'ISO9001',date:'18-04-2024',score:6},
    {id:3,test:'ISO4001',date:'1-05-2024',score:7},
    {id:4,test:'ISO916',date:'26-05-2024',score:8},
    {id:5,test:'ISO4001',date:'20-06-2024',score:10}
  ]);
  const [requestType, setRequestType] = useState('');
  //Get data from Reports table

  const getLabour = () => {
    api
      .get('labourrequest/getLabourRequestSummary')
      .then((res) => {
        setLabour(res.data.data);
        
        
      })
      .catch(() => {});
  };

  const handleSearch = () => {
    const newData = labour.filter(
      (x) => x.request_type === (requestType === '' ? x.request_type : requestType),
    );
    setUserSearchData(newData);
  };
  //   const [page, setPage] = useState(0);

  //   const employeesPerPage = 20;
  //   const numberOfEmployeesVistited = page * employeesPerPage;
  //   const displayEmployees = userSearchData.slice(
  //     numberOfEmployeesVistited,
  //     numberOfEmployeesVistited + employeesPerPage,
  //   );
  //   const totalPages = Math.ceil(userSearchData.length / employeesPerPage);
  //   const changePage = ({ selected }) => {
  //     setPage(selected);
  //   };

  const columns = [
    {
      name: '#',
      selector: 's_no',
    },

    {
      name: 'Test',
      selector: 'title',
      grow: 0,
      wrap: true,
      width: '4%',
    },

    {
      name: 'Date Of Submission',
      selector: 'request_start_date',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: ' Score ',
      selector: 'request_urgency',
      sortable: true,
      grow: 0,
      wrap: true,
    }
  ];
  return (
    <>
<Row>
<Col md="12">
      <ComponentCard title="Submission Histories">
      
          {/* <Row>

            <Col>
              <FormGroup>
                <Label>Request Type</Label>
                <Input
                  type="select"
                  name="request_type"
                  onChange={(e) => setRequestType(e.target.value)
                  
                  }
                >
                  <option value="Skilled">Skilled</option>
                  <option value="UnSkilled">UnSkilled</option>
                  <option value="Temporary">Temporary</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="1" className="mt-3">
              <Button color="primary" className="shadow-none" onClick={() =>{ handleSearch()
              getLabour();}
              }>
                Go
              </Button>
            </Col>
          </Row>


          <Row>
          
            <Col md="3">
              <Label>
                <b> Request Type:</b>
                {requestType}
              </Label>
            </Col>
            
          </Row>
         */}

      
          <Table>
            <thead>
              <tr>
                {columns.map((cell) => {
                  return <td key={cell.name}>{cell.name}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {userSearchData &&
                userSearchData.map((element, index) => {
                  return (
                    <tr key={element.project_id}>
                      <td>{index + 1}</td>
                      <td>{element.test}</td>
                      <td>{element.date}</td>
                      <td>{element.score}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        
      </ComponentCard>
      </Col>
      </Row>
    </>
  );
};
export default LabourSummary;
