import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Form,
  Row, Col,
  FormGroup,
  Button,
  TabPane,
  TabContent,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import message from '../../components/Message';
import api from '../../constants/api';
import ViewFileComponentV2 from '../../components/ProjectModal/ViewFileComponentV2';
import AttachmentModalV2 from '../../components/Tender/AttachmentModalV2';
import KeyStaffDetails from '../../components/ScoreManage/KeyStaffDetails';
import StaffButton from '../../components/ScoreManage/StaffButton';
import creationdatetime from '../../constants/creationdatetime';
import Tab from '../../components/ScoreManage/Tab';
import './StaffEdit.css'; // Custom CSS for further styling

import BarChart from './BarChart';
import CategoryChart from '../../components/ScoreManage/CategoryChartss';
import HistogramChart from '../../components/ScoreManage/Histogram';
import PieChart from '../../components/ScoreManage/PieChart';
import LineChart from '../../components/ScoreManage/LineChart';
import BoxPlot from '../../components/ScoreManage/BoxPlot';
import PDFReport from '../../components/PDF/PDFReport';


const StaffEdit = () => {
  const [staffeditdetails, setStaffEditDetails] = useState('');
  const [scoreHistory, setScoreHistory] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(null); // New state for current question id
  const [attachmentData, setDataForAttachment] = useState({
    modelType: '',
  });
  const dataForAttachment = () => {
    setDataForAttachment({
      modelType: 'attachment',
    });
    console.log('inside DataForAttachment');
  };
  const { id } = useParams();
  const navigate = useNavigate();

  const tabs = [
    { id: '1', name: 'Score History' },
    { id: '2', name: 'Analytics' },
  ];
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  const fetchQuestions = () => {
    api
      .get('/score/getQuestions', { params: { iso_code_id: staffeditdetails && staffeditdetails.iso_code_id }})
      .then((res) => {
        const transformedQuestions = res.data.data.map((question) => ({
          ...question,
          options: [question.option_1, question.option_2, question.option_3, question.option_4].filter(Boolean)
        }));
        const correctAns = res.data.data.reduce((acc, question) => {
          acc[question.question_id] = question.correct_answer;
          return acc;
        }, {});
        setQuestions(transformedQuestions);
        setCorrectAnswers(correctAns);
      })
      .catch(() => {
        message('Questions not found', 'info');
      });
  };

  const fetchPreviousAnswers = () => {
    api
      .post('/score/getScoreHistory', { score_management_id: id })
      .then((res) => {
        const previousAnswers = res.data.data.reduce((acc, answer) => {
          acc[answer.question_id] = answer.answer;
          return acc;
        }, {});
        setSelectedAnswers(previousAnswers);
      })
      .catch(() => {
        message('Previous answers not found', 'info');
      });
  };

  const handleInputs = (e) => {
    setStaffEditDetails({ ...staffeditdetails, [e.target.name]: e.target.value });
  };

  const applyChanges = () => { };
  const saveChanges = () => {
    navigate('/ScoreManagement');
    window.location.reload();
  };
  const backToList = () => {
    navigate('/ScoreManagement');
  };

  const editStaffById = () => {
    api
      .post('/score/getScoreManageById', { score_management_id: id })
      .then((res) => {
        setStaffEditDetails(res.data.data[0]);
      })
      .catch(() => {
        message('Staff Data Not Found', 'info');
      });
  };

  const editStaffData = () => {
    staffeditdetails.modification_date = creationdatetime;

    api
      .post('/score/editScore', staffeditdetails)
      .then(() => {
        message('Record edited successfully', 'success');
        editStaffById();
      })
      .catch(() => {
        message('Unable to edit record.', 'error');
      });
  };

  const fetchScoreHistory = () => {
    api
      .post('/score/getScoreHistory', { score_management_id: id })
      .then((res) => {
        setScoreHistory(res.data.data);
      })
      .catch(() => {
        message('Score History Not Found', 'info');
      });
  };

  useEffect(() => {
    editStaffById();
    fetchScoreHistory();
    fetchQuestions();
    fetchPreviousAnswers();
  }, [id, staffeditdetails && staffeditdetails.iso_code_id]);

  const handleCheckboxChange = (questionId, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleTextInputChange = (questionId, value) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

console.log('selected answers',selectedAnswers);

  const handleSubmitAnswers = () => {
    const answersToUpdate = [];
    const answersToAdd = [];

    Object.entries(selectedAnswers).forEach(([questionId, answer]) => {
      const questionIdNumber = Number(questionId);
      const existingAnswer = scoreHistory.find(item => item.question_id === questionIdNumber);

      if (existingAnswer) {
        if (existingAnswer.answer !== answer) {
          answersToUpdate.push({
            ...existingAnswer,
            answer,
            modification_date: new Date(),
          });
        }
      } else {
        answersToAdd.push({
          score_management_id: id,
          question_id: questionIdNumber,
          answer,
          creation_date: new Date(),
        });
      }
    });
    const submission=[...answersToAdd,...answersToUpdate];
console.log('answersToUpdate',answersToUpdate);
console.log('answersToAdd',answersToAdd);

        const answeredCount = Object.keys(selectedAnswers).length;
        const unansweredCount = questions.length - answeredCount;
        const totalScore = questions.length;

        const correctCount = Object.entries(selectedAnswers).reduce((acc, [questionId, answer]) => {
          if (correctAnswers[questionId] === answer) {
            acc++;
          }
          return acc;
        }, 0);
        const scorePercent= (correctCount / totalScore) * 100;
        const Result=parseFloat(scorePercent)< parseFloat(75)?'POOR':parseFloat(scorePercent)< parseFloat(90)?'FAIR':"PASS"
        console.log('percentage',scorePercent);
        console.log('correctCount',correctCount);   
        console.log('unansweredCount',unansweredCount);
        console.log('answeredCount',answeredCount);  

        api.post('/score/insertGapReport', {
          company_id:staffeditdetails.company_id,
          creation_time:creationdatetime,
                score_management_id: id,
                iso_code_id: staffeditdetails && staffeditdetails.iso_code_id,
                total_question: questions.length,
                answered_count: answeredCount,
                unanswered_count: unansweredCount,
                correct_count: correctCount,
                score_percent:scorePercent,
                result:Result
              }).then((re)=>{
                submission.forEach((el)=>{
                  el.gap_report_id=re.data.data.insertId
                })
                console.log('submission',submission);
               api.post('/score/addScoreHistory', { answers: submission })
              }) .then(() => {api.post('/score/updateAnswerCounts', {
                      score_management_id: id,
                      gap_report_id: submission[0].gap_report_id,
                      iso_code_id: staffeditdetails && staffeditdetails.iso_code_id,
                      total_question: questions.length,
                      answered_count: answeredCount,
                      unanswered_count: unansweredCount,
                      correct_count: correctCount,
                     
                    });
                  })
             .then(() => {
                    fetchScoreHistory();
                  })
                  .catch(() => {
                    message('Unable to submit answers.', 'error');
                  });
    // const updatePromises = answersToUpdate.map(answer =>
    //   api.post('/score/editScoreHistory', answer)
    // );

    // const addPromise = answersToAdd.length > 0
    //   ? api.post('/score/addScoreHistory', { answers: answersToAdd })
    //   : Promise.resolve();

    // Promise.all([...updatePromises, addPromise])
    //   .then(() => {
    //     message('Answers submitted successfully', 'success');

    //     const answeredCount = Object.keys(selectedAnswers).length;
    //     const unansweredCount = questions.length - answeredCount;
    //     const correctCount = Object.entries(selectedAnswers).reduce((acc, [questionId, answer]) => {
    //       if (correctAnswers[questionId] === answer) {
    //         acc++;
    //       }
    //       return acc;
    //     }, 0);

    //     return api.post('/score/updateAnswerCounts', {
    //       score_management_id: id,
    //       iso_code_id: staffeditdetails && staffeditdetails.iso_code_id,
    //       total_question: questions.length,
    //       answered_count: answeredCount,
    //       unanswered_count: unansweredCount,
    //       correct_count: correctCount
    //     });
    //   })
    //   .then(() => {
    //     fetchScoreHistory();
    //   })
    //   .catch(() => {
    //     message('Unable to submit answers.', 'error');
    //   });
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const calculateCategoryData = () => {
    const categoryData = questions.reduce((acc, question) => {
      const category = question.category_title;
      if (!acc[category]) {
        acc[category] = { name: category, answeredCount: 0, correctCount: 0 };
      }
      acc[category].answeredCount += selectedAnswers[question.question_id] ? 1 : 0;
      acc[category].correctCount += correctAnswers[question.question_id] === selectedAnswers[question.question_id] ? 1 : 0;
      return acc;
    }, {});

    return Object.values(categoryData);
  };

  const categories = calculateCategoryData();

  const testScores = [55, 23, 67, 89, 90, 42, 33, 78, 85, 95, 48, 59, 61, 74, 88, 92, 100, 45, 58, 72, 84, 91, 66, 77]; // Example data
  const testData = {
    submitted: 45,
    pending: 20,
    approved: 35,
  }; // Example data

  const scoreData = {
    '2023-01-01': 75,
    '2023-02-01': 80,
    '2023-03-01': 85,
    '2023-04-01': 90,
    '2023-05-01': 95,
  }; // Example data

  const plotData = {
    'Category A': [55, 60, 65, 70, 75],
    'Category B': [50, 55, 60, 65, 70],
    'Category C': [45, 50, 55, 60, 65],
    'Category D': [40, 45, 50, 55, 60],
  }; // Example data



  return (
    <>
      <BreadCrumbs />
      <ToastContainer />

      <StaffButton
        navigate={navigate}
        saveChanges={saveChanges}
        applyChanges={applyChanges}
        backToList={backToList}
        editStaffData={editStaffData}
        id={id}
      />

      <BreadCrumbs heading={staffeditdetails && staffeditdetails.score_management_id} />
      <KeyStaffDetails
        staffeditdetails={staffeditdetails}
        handleInputs={handleInputs}
      />

      <Form>
        <FormGroup>
          <ComponentCard title="More Details">
            <ToastContainer />
            <Tab toggle={toggle} tabs={tabs} />

            <TabContent className="p-4" activeTab={activeTab}>
              <TabPane tabId="1">
                {currentQuestions.map((question) => (
                  <Card key={question.question_id} className="mb-3">
                    <CardBody>
                      <CardTitle tag="h5">{question.question}</CardTitle>
                      <CardText>
                        {question.question_type === 'MCQ' && Array.isArray(question.options) && question.options.length > 0 && (
                          question.options.map((option) => (
                            <FormGroup check key={option}>
                              <Label check>
                                <Input
                                  type="checkbox"
                                  checked={selectedAnswers[question.question_id] === option}
                                  onChange={() => handleCheckboxChange(question.question_id, option)}
                                />
                                {option}
                              </Label>
                            </FormGroup>
                          ))
                        )}
                        {question.question_type === 'Yes/No' && (
                          <div>
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="radio"
                                  checked={selectedAnswers[question.question_id] === 'Yes'}
                                  onChange={() => handleCheckboxChange(question.question_id, 'Yes')}
                                />
                                Yes
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="radio"
                                  checked={selectedAnswers[question.question_id] === 'No'}
                                  onChange={() => handleCheckboxChange(question.question_id, 'No')}
                                />
                                No
                              </Label>
                            </FormGroup>
                          </div>
                        )}
                        {question.question_type === 'Objective' && (
                          <FormGroup>
                            <Input
                              type="text"
                              value={selectedAnswers[question.question_id] || ''}
                              onChange={(e) => handleTextInputChange(question.question_id, e.target.value)}
                            />
                          </FormGroup>
                        )}
                        {question.question_type === 'File Upload' && (
                          <FormGroup>
                            <ComponentCard title="Attachments">
                              <Row>
                                <Col xs="12" md="3" className="mb-3">
                                  <Button
                                    color="primary"
                                    onClick={() => {
                                      dataForAttachment();
                                      console.log('Question ID:', question.question_id); // Debugging line
                                      setCurrentQuestionId(question.question_id); // Set the current question id
                                      setAttachmentModal(true);
                                    }}
                                  >
                                    Add
                                  </Button>
                                </Col>
                              </Row>
                              <AttachmentModalV2
                                moduleId={id}
                                quesId={currentQuestionId} // Pass the current question id as a prop
                                roomName="ScoreManagement"
                                altTagData="ScoreManagement Data"
                                desc="ScoreManagement Data"
                                fileTypes={["JPG", "PNG", "GIF", "PDF"]}
                                modelType={attachmentData.modelType}

                                attachmentModal={attachmentModal}
                                setAttachmentModal={setAttachmentModal}
                              />
                              <ViewFileComponentV2 quesId={currentQuestionId} moduleId={id} roomName="ScoreManagement" />
                            </ComponentCard>
                          </FormGroup>
                        )}
                      </CardText>
                    </CardBody>
                  </Card>
                ))}
                <Button color="primary" onClick={handleSubmitAnswers}>
                  Submit Answers
                </Button>
                <Pagination aria-label="Page navigation example" className="mt-4">
                  <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink first onClick={() => paginate(1)} />
                  </PaginationItem>
                  <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
                  </PaginationItem>
                  {[...Array(totalPages).keys()].map(number => (
                    <PaginationItem active={currentPage === number + 1} key={number + 1}>
                      <PaginationLink onClick={() => paginate(number + 1)}>
                        {number + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem disabled={currentPage === totalPages}>
                    <PaginationLink next onClick={() => paginate(currentPage + 1)} />
                  </PaginationItem>
                  <PaginationItem disabled={currentPage === totalPages}>
                    <PaginationLink last onClick={() => paginate(totalPages)} />
                  </PaginationItem>
                </Pagination>
              </TabPane>
              <TabPane tabId="2">
                <PDFReport/>
                <BarChart
                  answeredCount={scoreHistory.length}
                  unansweredCount={questions.length - scoreHistory.length}
                  totalQuestion={questions.length}
                  correctCount={scoreHistory.filter(item => correctAnswers[item.question_id] === item.answer).length}
                />
                <CategoryChart categories={categories} />
              
      <HistogramChart data={testScores} />
      <PieChart data={testData} />
      <LineChart data={scoreData} />
      <BoxPlot data={plotData} />
              </TabPane>
            </TabContent>
          </ComponentCard>
        </FormGroup>
      </Form>
    </>
  );
};

export default StaffEdit;
