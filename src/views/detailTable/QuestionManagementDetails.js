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
  const [category, setCategory] = useState();
  const { loggedInuser } = useContext(AppContext);
  const navigate = useNavigate();
  const [questionDetails, setQuestionDetails] = useState([]);
  //setting data in questionDetails
  const handleInputs = (e) => {
    setQuestionDetails({ ...questionDetails, [e.target.name]: e.target.value });
  };
  //getting data from category
  //   const getCategory = () => {
  //     api.get('/questionmanagement/getCategory').then((res) => {
  //       setCategory(res.data.data);
  //       console.log(category);
  //     });
  //   };
  // Get Iso Code
  const getIsoCode = () => {
    api.get('/questionmanagement/getCategory').then((res) => {
      setCategory(res.data.data);
    });
  };
  //Insert Content Data
  const insertQuestion = () => {
    if (questionDetails.title !== '') {
      questionDetails.creation_date = creationdatetime;
      questionDetails.created_by = loggedInuser.first_name;
      api
        .post('/questionmanagement/insertQuestion', questionDetails)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('Question inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/QuestionManagementEdit/${insertedDataId}`);
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
                <Label>Category</Label>
                <Input
                  type="select"
                  onChange={handleInputs}
                  value={questionDetails && questionDetails.category_id}
                  name="category_id"
                >
                  <option value="selected">Please Select</option>
                  {category &&
                    category.map((e) => {
                      return (
                        <option key={e.category_id} value={e.category_id}>
                          {' '}
                          {e.category_title}
                        </option>
                      );
                    })}
                </Input>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Label>Question</Label>
                <Input
                  type="textarea"
                  onChange={handleInputs}
                  value={questionDetails && questionDetails.question}
                  name="question"
                ></Input>
              </Col>
            </Row>

            <Row>
              <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    insertQuestion();
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
