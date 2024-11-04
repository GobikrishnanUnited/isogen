import React, { useContext, useState } from 'react';
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

const ContentDetails = () => {
  //All const variables
  const navigate = useNavigate();
  const [contentDetails, setContentDetails] = useState({
    title: '',
    creation_date: moment(),
  
  });
  const { loggedInuser } = useContext(AppContext);

  //setting data in contentDetails
  const handleInputs = (e) => {
    setContentDetails({ ...contentDetails, [e.target.name]: e.target.value });
  };

  //Insert Content Data
  const insertContentData = (code) => {
    if (contentDetails.title !== '') {
      contentDetails.iso_code = code;
      contentDetails.creation_date = creationdatetime;
      contentDetails.created_by = loggedInuser.first_name;
      api
        .post('/isocode/insertISOcode', contentDetails)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('Content inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/ISOcodeEdit/${insertedDataId}?tab=1`);
          }, 300);
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please fill all required fields.', 'error');
    }
  };

  const generateCode = () => {
    api
      .post('/isocode/getCodeValue', { type: 'isocode' })
      .then((res) => {
        insertContentData(res.data.data);
      })
      .catch(() => {
        insertContentData('');
      });
  };
  return (
    <div>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="6">
          <ComponentCard title="ISO Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="12">
                    <Label>Title</Label>
                    <Input
                      type="text"
                      onChange={handleInputs}
                      value={contentDetails && contentDetails.title}
                      name="title"
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
                        generateCode();
                        
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
export default ContentDetails;
