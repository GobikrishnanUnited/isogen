import React, { useContext, useState, useEffect } from 'react';
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
 // getting data from Category
 const [categoryLinked, setCategoryLinked] = useState();

 const getCategory = () => {
  api.get('/GapAnalysis/getISOValueList')
  .then((res) => {
    setCategoryLinked(res.data.data);
  });
};
  //setting data in contentDetails
  const handleInputs = (e) => {
    setContentDetails({ ...contentDetails, [e.target.name]: e.target.value });
  };

  //Insert Content Data
  const insertContentData = () => {
    if (contentDetails.description1 !== '') {
      
      contentDetails.creation_date = creationdatetime;
      contentDetails.created_by = loggedInuser.first_name;
      api
        .post('/GapAnalysis/insertGapAnalysis', contentDetails)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('Content inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/GapAnalysisEdit/${insertedDataId}?tab=1`);
          }, 300);
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please fill all required fields.', 'error');
    }
  };

  useEffect(() => {
    getCategory();
         
    }, []);
  return (
    <div>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="6">
          <ComponentCard title="Gap Analysis Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="12">
                   
                     <Label> Description </Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.description1}
                    name="description1"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {categoryLinked &&
                      categoryLinked.map((e) => {
                        return (
                          <option key={e.valuelist_id} value={e.valuelist_id}>
                            {e.value}
                          </option>
                        );
                      })}
                  </Input>
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
                        insertContentData();
                        
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
