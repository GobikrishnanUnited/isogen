import React, {useEffect, useState} from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import ComponentCard from '../ComponentCard';
import api from '../../constants/api';

export default function QuestionmoreDetails({
  questionDetails,
  handleInputs,
  questionType,
  }) {
  QuestionmoreDetails.propTypes = {
    questionDetails: PropTypes.object,
    handleInputs: PropTypes.any,
    questionType: PropTypes.object,
      };

      const [question, setQuestion] = useState(questionDetails?.question_type || '');
      const [category, setCategory] = useState();
      const getCategory= () => {
        api.get('/questionmanagement/getCategory').then((res) => {
          setCategory(res.data.data);
        });
      };
  useEffect(() => {
    if (questionDetails) {
      setQuestion(questionDetails.question_type);
    }
    getCategory();
  }, [questionDetails]);

  if (!questionDetails) {
    return null; // or you can return some loading indicator
  }
      
  return (
    <div>
   <ComponentCard title="Question details" creationModificationDate={questionDetails}>
            <ToastContainer></ToastContainer>
            <Row>
            
             
              <Col md="3">
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
              <Col md="6">
                <FormGroup>
                  {/* Section title from section table */}
                  <Label>Question</Label>
                  <Input
                    type="textarea"
                    name="question"
                    value={questionDetails && questionDetails.question}
                    onChange={handleInputs}
                  >
                  </Input>
                </FormGroup>
              </Col>
          

              <Col md="3">
            <FormGroup>
              <Label>Question Type</Label>
              <Input
                type="select"
                onChange={(e) => {
                  handleInputs(e);
                  setQuestion(e.target.value);
                }}
                value={question || ''}
                name="question_type"
              >
                <option value="">Please Select</option>
                {questionType &&
                  questionType.map((e) => (
                    <option key={e.value} value={e.value}>
                      {e.value}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>

          {question === 'MCQ' && (
            <>
              <Col md="3">
                <FormGroup>
                  <Label>Option 1</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails?.option_1 || ''}
                    name="option_1"
                  />
                </FormGroup>
              </Col>       
             

              <Col md="3">
                <FormGroup>
                  <Label>Option 2</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails && questionDetails.option_2}
                    name="option_2"
                  >
                  </Input>
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Option 3</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails && questionDetails.option_3}
                    name="option_3"
                  >
                  </Input>
                </FormGroup>
              </Col>


              <Col md="3">
                <FormGroup>
                  <Label>Option 4</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={questionDetails && questionDetails.option_4}
                    name="option_4"
                  >
                  </Input>
                </FormGroup>
              </Col>

              </>
          )}

              <Col md="3">
                <FormGroup>
                  {/* Section title from section table */}
                  <Label>Correct Answer</Label>
                  <Input
                    type="text"
                    name="correct_answer"
                    value={questionDetails && questionDetails.correct_answer}
                    onChange={handleInputs}
                  >
                  </Input>
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  {/* Section title from section table */}
                  {/* <Label>Status</Label>
                  <Input
                    type="select"
                    name="status"
                    value={questionDetails && questionDetails.status}
                    onChange={handleInputs}
                  >
                    <option defaultValue="selected">Please Select</option>
                    {questionStatus &&
                      questionStatus.map((e) => {
                        return (
                          <option key={e.value} value={e.value}>
                            {e.value}
                          </option>
                        );
                      })}
                  </Input> */}
                  <Label>Published</Label>
                  <br></br>
                  <Label>Yes</Label>
                  <Input
                    name="published"
                    value="1"
                    type="radio"
                    defaultChecked={questionDetails && questionDetails.published === 1 && true}
                    onChange={handleInputs}
                  />
                  <Label>No</Label>
                  <Input
                    name="published"
                    value="0"
                    type="radio"
                    defaultChecked={questionDetails && questionDetails.published === 0 && true}
                    onChange={handleInputs}
                  />

                </FormGroup>
              </Col>

            </Row>
          </ComponentCard>
    </div>
  );
}
