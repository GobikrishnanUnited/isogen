import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import message from '../../components/Message';
import api from '../../constants/api';
import creationdatetime from '../../constants/creationdatetime';
import AppContext from '../../context/AppContext';

const CustomerDetails = () => {
  //All const variables
  const navigate = useNavigate();
  const [contentDetails, setContentDetails] = useState({
    title: '',
    creation_date: moment(),
    content_date: moment(),
    content_type: '',
  });
  const [applications, setApplications] = useState([]);
  //setting data in customerDetails
  const handleInputs = (e) => {
    setContentDetails({ ...contentDetails, [e.target.name]: e.target.value });
  };
 
  const { loggedInuser } = useContext(AppContext);


const getApplications=()=>{
  api.get('/content/getApplication').then((res) => {
    setApplications(res.data.data);}).catch(()=>{})
}

  //Insert Custmer Data
  const insertCustomerData = (code) => {
    if (contentDetails.company_name !== '') {
      contentDetails.creation_date = creationdatetime;
      contentDetails.created_by = loggedInuser.first_name;
      contentDetails.company_code = code;

      api
        .post('/contact/insertContact', contentDetails)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('Customer inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/CustomerEdit/${insertedDataId}`);
          }, 300);
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please fill all required fields.', 'error');
    }
  };
 
  // const generateCode = () => {
  //   api
  //     .post('/isocode/getCodeValue', { type: 'customercode' })
  //     .then((res) => {
  //       insertCustomerData(res.data.data);
  //     })
  //     .catch(() => {
  //       insertCustomerData('');
  //     });
  // };

useEffect(()=>{
  getApplications();
},[])

  return (
    <div>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="6">
          <ComponentCard title="Key Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="12">
                    <Label>Name</Label>
                    <Input
                      type="text"
                      onChange={handleInputs}
                      value={contentDetails && contentDetails.company_name}
                      name="company_name"
                    />
                  </Col>
                </Row>
                <Row>
                <Col md="12">
              <FormGroup>
              <Label>Application</Label>
              <Input
                type="select"
                name="application_id"
                onChange={handleInputs}
                value={contentDetails && contentDetails.application_id}
              >
                <option defaultValue="selected" value="">
                  Please Select
                </option>
                {applications &&
                  applications.map((app) => (
                    <option key={app.application_id} value={app.application_id}>
                      {app.customer_name}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Label>Email</Label>
                    <Input
                      type="text"
                      onChange={handleInputs}
                      value={contentDetails && contentDetails.email}
                      name="email"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Label>Password</Label>
                    <Input
                      type="text"
                      onChange={handleInputs}
                      value={contentDetails && contentDetails.pass_word}
                      name="pass_word"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                    <Button
                      className="shadow-none"
                      color="primary"
                      onClick={() => {
                        insertCustomerData();
                   
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      onClick={() => {
                        navigate(-1);
                      }}
                      type="button"
                      className="btn btn-dark shadow-none"
                    >
                      Cancel
                    </Button>
                  </div>
                </Row>
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
      </Row>
    </div>
  );
};
export default CustomerDetails;
