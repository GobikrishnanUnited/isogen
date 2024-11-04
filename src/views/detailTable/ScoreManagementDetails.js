import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Button, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import api from '../../constants/api';
import message from '../../components/Message';
import creationdatetime from '../../constants/creationdatetime';

const StaffDetails = () => {
  // All state variables

  const [staffdetails, setStaffDetails] = useState({company_id:'',});
  const [customername, setCustomerName] = useState([]);
  const [applications, setApplications] = useState([]);

  const getApplications = () => {
    api
      .get('/score/getApplicationsWithoutScore')
      .then((res) => {
        setApplications(res.data.data);
      
      })
      .catch(() => {
        
      });
  };
  const getCustomerName = () => {
    api
      .get('/score/getCustomerName')
      .then((res) => {
        setCustomerName(res.data.data);
      })
      .catch(() => {
        message('Company not found', 'info');
      });
  };

  const [isoname, setIsoName] = useState([]);

  const getIsoName = () => {
    api
      .get('/score/getIsoName')
      .then((res) => {
        setIsoName(res.data.data);
      })
      .catch(() => {
        message('Iso not found', 'info');
      });
  };
  useEffect(() => {
    getCustomerName();
    getIsoName();
 getApplications();
  }, []);
  // Navigation and Parameter Constants

  const navigate = useNavigate();

  //All Functions/Methods

  //Setting Data in Staff Details
  const handleInputs = (e) => {
    setStaffDetails({ ...staffdetails, [e.target.name]: e.target.value });
  };

  //Api call for Insert Staff Data
  const insertStaffData = () => {
    staffdetails.creation_date = creationdatetime;
      api
        .post('/score/insertScore', staffdetails)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('Score Details inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/ScoreManagementEdit/${insertedDataId}?tab=1`);
          }, 300);
        }).then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('Score Details inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/ScoreManagementEdit/${insertedDataId}?tab=1`);
          }, 300);
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
   
  };

  return (
    <div>
      <BreadCrumbs />
      <ToastContainer />
      <Row>
        <Col md="6" xs="12">
          <ComponentCard title="Score Details">
        
            <FormGroup>
              <Row>
              <Col md="12">
                <FormGroup>
                <Label>
                Application</Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    name="company_id"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {applications &&
                      applications.map((e) => {
                        return (
                          <option key={e.application_id} value={e.application_id}>
                            {e.company_name}({e.date_of_application})
                          </option>
                        );               
                      })}
                  </Input>
                </FormGroup>
              </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
              <Col md="12">
                <FormGroup>
                <Label>
                Company Name</Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    name="company_id"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {customername &&
                      customername.map((e) => {
                        return (
                          <option key={e.company_id} value={e.company_id}>
                            {e.company_name}
                          </option>
                        );               
                      })}
                  </Input>
                </FormGroup>
              </Col>
              </Row>
            </FormGroup>
              
            <FormGroup>
              <Row>
              <Col md="12">
                <FormGroup>
                <Label>
                ISO Code</Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    name="iso_code_id"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {isoname &&
                      isoname.map((e) => {
                        return (
                          <option key={e.iso_code_id} value={e.iso_code_id}>
                            {e.iso_code}
                          </option>
                        );               
                      })}
                  </Input>
                </FormGroup>
              </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                  <Button
                    color="primary"
                    type="button"
                    className="btn mr-2 shadow-none"
                    onClick={() => {
                      insertStaffData();
                    }}
                  >
                    Save & Continue
                  </Button>
                  <Button
                    type="submit"
                    className="btn btn-dark shadow-none"
                    onClick={(e) => {
                      if (window.confirm('Are you sure you want to cancel? ')) {
                        navigate('/ScoreMnagement');
                      } else {
                        e.preventDefault();
                      }
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Row>
            </FormGroup>
          </ComponentCard>
        </Col>
      </Row>
    </div>
  );
};

export default StaffDetails;
