import React, { useEffect, useState, useContext} from 'react';
import { Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import AttachmentModalV2 from '../../components/Tender/AttachmentModalV2';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import ViewFileComponentV2 from '../../components/ProjectModal/ViewFileComponentV2';
import message from '../../components/Message';
import api from '../../constants/api';
import QuestionManagementMainDetails from '../../components/QuestionManagement/QuestionManagementMainDetails';
import creationdatetime from '../../constants/creationdatetime';
import AppContext from '../../context/AppContext';

const QuestionManagementEdit = () => {
  // All state variables
  const [questionDetails, setQuestionDetails] = useState();
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [questionType, setQuestionType] = useState();
  const [questionStatus, setQuestionStatus] = useState();
  const [attachmentData, setDataForAttachment] = useState({
    modelType: '',
  });

  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  const { loggedInuser } = useContext(AppContext);

  //Setting data in questionDetails
  const handleInputs = (e) => {
    setQuestionDetails({ ...questionDetails, [e.target.name]: e.target.value });
  };
  // Get content data By content id
  const getQuestionById = () => {
    api
      .post('/questionmanagement/getQuestionById', { question_id: id })
      .then((res) => {
        setQuestionDetails(res.data.data);
      })
      .catch(() => {
        message('Content Data Not Found', 'info');
      });
  };
  //Edit Content
  const editQuestionData = () => {
    console.log(questionDetails);
    if (
      questionDetails.content_title !== '' &&
      questionDetails.sub_category_id !== '' &&
      questionDetails.published !== ''
    ) {
      questionDetails.modification_date = creationdatetime;
      questionDetails.modified_by = loggedInuser.first_name;
      api
        .post('/questionmanagement/editQuestionData', questionDetails)
        .then(() => {
          message('Record edited successfully', 'success');
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };
// get data from questionType
  const getQuestionTypeFromValuelist = () => {
    api
      .get('/questionmanagement/getQuestionTypeFromValuelist')
      .then((res) => {
        setQuestionType(res.data.data);
      })
      .catch(() => {
        message('questionType not found', 'info');
      });
  };

  // get data from Question Status
  const getQuestionStatusFromValuelist = () => {
    api
      .get('/questionmanagement/getQuestionStatusFromValuelist')
      .then((res) => {
        setQuestionStatus(res.data.data);
      })
      .catch(() => {
        message('questionStatus not found', 'info');
      });
  };


  //Attachments
  const dataForAttachment = () => {
    setDataForAttachment({
      modelType: 'attachment',
    });
    console.log('inside DataForAttachment');
  };

  useEffect(() => {
    getQuestionById();
    getQuestionTypeFromValuelist();
    getQuestionStatusFromValuelist();
  }, [id]);

  return (
    <>
      <BreadCrumbs heading={questionDetails && questionDetails.title} />
      <Form>
        <FormGroup>
          <ComponentCardV2>
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={() => {
                    editQuestionData();
                    setTimeout(() => {
                      navigate('/QuestionManagement');
                    }, 1100);
                  }}
                >
                  Save
                </Button>
              </Col>
              <Col>
                <Button
                  color="primary"
                  onClick={() => {
                    editQuestionData();
                  }}
                >
                  Apply
                </Button>
              </Col>
              <Col>
                <Button
                  color="dark"
                  onClick={() => {
                    navigate('/QuestionManagement');
                    console.log('back to list');
                  }}
                >
                  Back to List
                </Button>
              </Col>
            </Row>
          </ComponentCardV2>
          {/* Content Details Form */}
          <QuestionManagementMainDetails
            questionDetails={questionDetails}
            handleInputs={handleInputs}
            questionType={questionType}
            questionStatus={questionStatus}
          ></QuestionManagementMainDetails>

        </FormGroup>
      </Form>
      {/* Picture and Attachments Form */}
      <Form>
        <FormGroup>
          <ComponentCard title="Attachments">
            <Row>
              <Col xs="12" md="3" className="mb-3">
                <Button
                  color="primary"
                  onClick={() => {
                    dataForAttachment();
                    setAttachmentModal(true);
                  }}
                >
                  Add
                </Button>
              </Col>
            </Row>
            <AttachmentModalV2
              moduleId={id}
              roomName="Question"
              altTagData="Question Data"
              desc="Question Data"
              modelType={attachmentData.modelType}
              attachmentModal={attachmentModal}
              setAttachmentModal={setAttachmentModal}
            />
            <ViewFileComponentV2 moduleId={id} roomName="Question" />
          </ComponentCard>
        </FormGroup>
      </Form>
    </>
  );
};
export default QuestionManagementEdit;
