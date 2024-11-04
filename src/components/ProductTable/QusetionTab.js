import React, { useEffect, useState } from 'react';
import {
  Button, CardBody, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table
} from 'reactstrap';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import api from '../../constants/api';
import message from '../Message';

export default function QuestionTab({ id }) {
  QuestionTab.propTypes = {
    id: PropTypes.any,
  };

  const [questions, setQuestions] = useState([]);
  const [isoQuestions, setIsoQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [addContactModal, setAddContactModal] = useState(false);

  const addContactToggle = () => {
    setAddContactModal(!addContactModal);
  };

  const deleteRecord = (questionId) => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        api.post('/isocode/deleteISOquestion', { question_id: questionId })
          .then(() => {
            Swal.fire('Deleted!', 'Contact has been deleted.', 'success');
            message('Record deleted successfully', 'success'); 
            setTimeout(() => {
              window.location.reload();
            }, 300);
          })
          .catch(() => {
            message('Unable to delete record.', 'error');
          });
      }
    });
  };

  const getQuestions = (categoryId) => {
    api.get('/isocode/getQuestion', { params: { iso_code_id: id, category_id: categoryId } })
      .then((res) => {
        setQuestions(res.data.data);
      })
      .catch(() => {
        message('Unable to fetch questions', 'error');
      });
  };

  const getIsoQuestions = () => {
    api.post('/isocode/getIsoQuestionById', { iso_code_id: id })
      .then((res) => {
        setIsoQuestions(res.data.data);
      })
      .catch(() => {
        message('Content Data Not Found', 'info');
      });
  };

  const getQuestionCategories = () => {
    api.get('/questionmanagement/getCategory')
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch(() => {
        message('Unable to fetch categories', 'error');
      });
  };

  const insertQuestionHistory = () => {
    if (selectedQuestions.length > 0) {
      const questionData = selectedQuestions.map(questionId => ({
        question_id: questionId,
        iso_code_id: id,
      }));
  
      api.post('/isocode/insertQuestion', { questionData })
        .then(() => { 
          message('Client inserted successfully.', 'success');
          addContactToggle();
          getIsoQuestions();
          // Optionally, you can reload specific data without refreshing the entire page
          window.location.reload();
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please select at least one question', 'warning');
    }
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    getQuestions(categoryId);
  };

  const handleQuestionSelect = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedQuestions([...selectedQuestions, value]);
    } else {
      setSelectedQuestions(selectedQuestions.filter(q => q !== value));
    }
  };

  useEffect(() => {
    getQuestionCategories();
    getIsoQuestions();
  }, [id]);

  const columns = [
    { name: 'ID' },
    { name: 'Title' },
    { name: 'Actions' },
  ];

  return (
    <>
      <Form>
        <FormGroup>
          <Row>
            <Col md="3">
              <FormGroup>
                <Button color="primary" className="shadow-none" onClick={addContactToggle}>
                  Add New Question
                </Button>
                <Modal size="lg" isOpen={addContactModal} toggle={addContactToggle}>
                  <ModalHeader toggle={addContactToggle}>New Question</ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col md="12">
                        <CardBody>
                          <Form>
                            <Row>
                              <Col md="4">
                                <FormGroup>
                                  <Label>Category<span className="required">*</span></Label>
                                  <Input
                                    type="select"
                                    name="category"
                                    onChange={handleCategoryChange}
                                    value={selectedCategory}
                                  >
                                    <option value="">Please Select</option>
                                    {categories && categories.map((cat) => (
                                      <option key={cat.category_id} value={cat.category_id}>
                                        {cat.category_title}
                                      </option>
                                    ))}
                                  </Input>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="12">
                                {questions && questions.map((q) => (
                                  <FormGroup key={q.question_id} check>
                                    <Label check>
                                      <Input
                                        type="checkbox"
                                        value={q.question_id}
                                        onChange={handleQuestionSelect}
                                      />{' '}
                                      {q.question}
                                    </Label>
                                  </FormGroup>
                                ))}
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="shadow-none"
                      color="primary"
                      onClick={insertQuestionHistory}
                    >
                      Submit
                    </Button>
                    <Button
                      color="secondary"
                      className="shadow-none"
                      onClick={addContactToggle}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Table striped>
                <thead>
                  <tr>
                    {columns.map((cell) => (
                      <th key={cell.name}>{cell.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {isoQuestions && isoQuestions.map((element, i) => (
                    <tr key={element.iso_code_id}>
                      <td>{i + 1}</td>
                      <td>{element.question}</td>
                      <td>
                        <Button color="danger" size="sm" onClick={() => deleteRecord(element.question_id)}>
                          <Icon.Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>      
        </FormGroup>
      </Form>
    </>
  );
}