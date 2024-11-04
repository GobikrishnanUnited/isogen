import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import api from '../../constants/api';
import message from '../../components/Message';

const LocationDetails = () => {
  //All state variables
  const [locationForms, setLocationForms] = useState({
    location_name: '',
  });
  //Navigation and Parameters
  const navigate = useNavigate();
  //Setting data in locationForms
  const handleInputslocationForms = (e) => {
    setLocationForms({ ...locationForms, [e.target.name]: e.target.value });
  };
  //Insert Setting
  const insertLocation = () => {
    api
      .post('/location/insertLocation', locationForms)
      .then((res) => {
        const insertedDataId = res.data.data.insertId;
        console.log(insertedDataId);
        message('location inserted successfully.', 'success');
        setTimeout(() => {
          navigate(`/LocationEdit/${insertedDataId}`);
        }, 300);
      })
      .catch(() => {
        message('Network connection error.', 'error');
      });
  };
  useEffect(() => {}, []);
  return (
    <div>
      <BreadCrumbs />
      <ToastContainer />
      <Row>
        <Col md="6" xs="12">
          {/* Key Details */}
          <ComponentCard title="Key Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="12">
                    <Label>
                      {' '}
                      Name <span className="required"> *</span>{' '}
                    </Label>
                    <Input type="text" name="location_name" onChange={handleInputslocationForms} />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                    <Button
                      color="primary"
                      onClick={() => {
                        insertLocation();
                        setTimeout(() => {
                          navigate('/LocationEdit');
                        }, 800);
                      }}
                      type="button"
                      className="btn mr-2 shadow-none"
                    >
                      Save & Continue
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/Location');
                      }}
                      type="button"
                      className="btn btn-dark shadow-none"
                    >
                      Go to List
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

export default LocationDetails;
