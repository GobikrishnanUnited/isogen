import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Button, Label, Input, NavItem, NavLink, TabPane, TabContent, Nav } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
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
import QuestionTab from '../../components/ProductTable/QusetionTab';
import AppContext from '../../context/AppContext';
import creationdatetime from '../../constants/creationdatetime';

const ContentUpdate = () => {
  // All state variables
  const [lineItem] = useState(null);
  const [contentDetails, setContentDetails] = useState();
  const [categoryLinked, setCategoryLinked] = useState();
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [attachmentData, setDataForAttachment] = useState({
    modelType: '',
  });
  const [valuelist, setValuelist] = useState();
  const stripHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };
  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  const { loggedInuser } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('1');
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setContentDetails({ ...contentDetails, [name]: stripHtmlTags(value) });
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // Get content data By content id
  const getContentById = () => {
    api
      .post('/isocode/getIsoCodeById', { iso_code_id: id })
      .then((res) => {
        setContentDetails(res.data.data[0]);
      })
      .catch(() => {
        message('Content Data Not Found', 'info');
      });
  };

  //Edit Content
  const editContentData = () => {
    console.log(contentDetails);
    if (
      contentDetails.content_title !== '' &&
      contentDetails.sub_category_id !== '' &&
      contentDetails.published !== ''
    )
  
    {
      contentDetails.modification_date = creationdatetime;
      contentDetails.modified_by = loggedInuser.first_name;
      api
        .post('/isocode/editISOCode', contentDetails)
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

  // getting data from Category
  const getCategory = () => {
    api.get('/isocode/getCategory', categoryLinked).then((res) => {
      setCategoryLinked(res.data.data);
    });
  };
  
  const getValuelist = () => {
    api
      .get('/isocode/getISOValueList')
      .then((res) => {
        setValuelist(res.data.data);
      })
      .catch(() => {
        message('valuelist not found', 'info');
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
    getCategory();
    getContentById();
    getValuelist();
    console.log(lineItem);
  }, [id]);

  return (
    <>
      <BreadCrumbs heading={contentDetails && contentDetails.title} />
      <Form>
        <FormGroup>
          <ComponentCardV2>
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={() => {
                    editContentData();
                    setTimeout(() => {
                      navigate('/ISOCodes');
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
                    editContentData();
                  }}
                >
                  Apply
                </Button>
              </Col>
              <Col>
                <Button
                  color="dark"
                  onClick={() => {
                    navigate('/ISOCodes');
                    console.log('back to list');
                  }}
                >
                  Back to List
                </Button>
              </Col>
            </Row>
          </ComponentCardV2>
          {/* Content Details Form */}
          <ComponentCard title="ISO Details" creationModificationDate={contentDetails}>
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label> ISO Code </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.iso_code}
                    name="iso_code"
                    readOnly
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Title </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.title}
                    name="title"
                  />
                </FormGroup>
              </Col>
             
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Category</Label>
                  <Input
                    type="select"
                    name="category_id"
                    value={contentDetails && contentDetails.category_id}
                    onChange={handleInputs}
                  >
                    <option value="" selected="selected">
                      Please Select
                    </option>
                    {categoryLinked &&
                      categoryLinked.map((ele) => {
                        return <option value={ele.category_id}>{ele.category_title}</option>;
                      })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Description </Label>
                  <Input
                    type="textarea"
                    name="description"
                    value={contentDetails && contentDetails.description}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Status </Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.status}
                    name="status"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {valuelist &&
                      valuelist.map((e) => {
                        return (
                          <option key={e.value} value={e.value}>
                            {e.value}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label> Version </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.version}
                    name="version"
                  />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>

         
        </FormGroup>
      </Form>
      {/* Picture and Attachments Form */}
      <ComponentCard>
      <Form>
        <FormGroup>
      


            <TabContent className="p-4" activeTab={activeTab}>
          <Row>
          <Nav tabs>   
          <NavItem>
              <NavLink
                className={activeTab === '1' ? 'active' : ''}
                onClick={() => {
                  toggle('1');
                }}
              >
                Question Linked
              </NavLink>
            </NavItem>                
            <NavItem>
              <NavLink
                className={activeTab === '2' ? 'active' : ''}
                onClick={() => {
                  toggle('2');
                }}
              >
                Attachments
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
     

       <TabPane tabId="1">
          <ComponentCard >
            <QuestionTab
            id={id}
            ></QuestionTab>
          </ComponentCard>
        </TabPane>
        <TabPane tabId="2">
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
              roomName="ISO"
              altTagData="ISO Data"
              desc="ISO Data"
              modelType={attachmentData.modelType}
              attachmentModal={attachmentModal}
              setAttachmentModal={setAttachmentModal}
            />
            <ViewFileComponentV2 moduleId={id} roomName="ISO" />
          </ComponentCard>
        </TabPane>
      </TabContent>
    
        </FormGroup>
      </Form>
      </ComponentCard>
    </>
  );
};
export default ContentUpdate;
