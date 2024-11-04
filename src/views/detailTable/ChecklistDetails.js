import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import message from '../../components/Message';
import api from '../../constants/api';
import creationdatetime from '../../constants/creationdatetime';
import AppContext from '../../context/AppContext';

const ContentDetails = () => {
  //All const variables
  //   const [category, setCategory] = useState();
  const [isoCode, setISOCode] = useState();
  const { loggedInuser } = useContext(AppContext);
  const navigate = useNavigate();
  const [questionDetails, setQuestionDetails] = useState([]);
  //setting data in questionDetails
  const handleInputs = (e) => {
    setQuestionDetails({ ...questionDetails, [e.target.name]: e.target.value });
  };
 
  const getIsoCode = () => {
    api.get('/checklist/getISO').then((res) => {
      setISOCode(res.data.data);
    });
  };
  //Insert Content Data
  const insertChecklist = () => {
    if (questionDetails.title !== '') {
      questionDetails.creation_date = creationdatetime;
      questionDetails.created_by = loggedInuser.first_name;
      api
        .post('/checklist/insertChecklist', questionDetails)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('ISO inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/ChecklistEdit/${insertedDataId}`);
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
    // getCategory();
    getIsoCode();
  }, []);

  return (
    <div>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="6">
          <ComponentCard title="Question Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="12">
                    <Label>Checklist Name</Label>
                    <Input
                      type="text"
                      onChange={handleInputs}
                      value={questionDetails && questionDetails.title}
                      name="title"
                    ></Input>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Label>Select ISO</Label>
                    <Input
                      type="select"
                      onChange={handleInputs}
                      value={questionDetails && questionDetails.iso_code_id}
                      name="iso_code_id"
                    >
                      <option value="selected">Please Select</option>
                      {isoCode &&
                        isoCode.map((e) => {
                          return (
                            <option key={e.iso_code_id} value={e.iso_code_id}>
                              {' '}
                              {e.title}
                            </option>
                          );
                        })}
                    </Input>
                  </Col>
                </Row>

                <Row>
                  <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                    <Button
                      className="shadow-none"
                      color="primary"
                      onClick={() => {
                        insertChecklist();
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
