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
import PdfCreateInvoice from '../../components/PDF/PDFReport';
import AppContext from '../../context/AppContext';
import creationdatetime from '../../constants/creationdatetime';

const ContentUpdate = () => {
  // All state variables
  const [contentDetails, setContentDetails] = useState({code:''});
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [categoryLinked, setCategoryLinked] = useState();
  const [categoryLinked2, setCategoryLinked2] = useState();
  const [categoryLinked3, setCategoryLinked3] = useState();
  const [categoryLinked4, setCategoryLinked4] = useState();
  const [attachmentData, setDataForAttachment] = useState({
    modelType: '',
  });
 
  const stripHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };
  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  const { loggedInuser } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('1');
 

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // Get content data By content id
  const getContentById = () => {
    api
      .post('/GapAnalysis/getIsoCodeById', { gap_analysis_id: id })
      .then((res) => {
        setContentDetails(res.data.data[0]);
      })
      .catch(() => {
        message('Content Data Not Found', 'info');
      });
  };

    // getting data from Category
    const getCategory = () => {
      api.get('/GapAnalysis/getISOValueList')
      .then((res) => {
        setCategoryLinked(res.data.data);
      });
    };

    const getCategory2 = (codeId) => {
      console.log("Fetching data for code:", codeId);
      api.post('/GapAnalysis/getISOValueList2', { code: codeId })
        .then((res) => {
          setCategoryLinked2(res.data.data);
        })
        .catch((error) => {
          console.error('Error fetching data for description2:', error);
        });
    };
    

    const getCategory3 = (codeId) => {
      api.post('/GapAnalysis/getISOValueList3', { code: codeId })
      .then((res) => {
        setCategoryLinked3(res.data.data);
      });
    };

    const getCategory4 = (codeId) => {
      api.post('/GapAnalysis/getISOValueList4', { code: codeId })
      .then((res) => {
        setCategoryLinked4(res.data.data);
      });
    };
  //Edit Content
  const editContentData = () => {
    console.log(contentDetails);
    if (
      contentDetails.description1 !== '' 
    
    )
  
    {
      contentDetails.modification_date = creationdatetime;
      contentDetails.modified_by = loggedInuser.first_name;
      api
        .post('/GapAnalysis/editISOCode', contentDetails)
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

  const handleInputs = (e) => {
    const { name, value, type } = e.target;

    // Check if the input is a radio button for the gap field
    if (type === 'radio' && name === 'gap') {
      setContentDetails({
        ...contentDetails,
        [name]: parseInt(value, 10), // Ensure the value is stored as a number (1 or 0) with radix 10
      });
      return;
    }
    console.log('2222222):', name,value); // Log the numeric value
    if (name === 'description1') {
      // Convert value to a number if needed
      const numericValue = Number(value);
      console.log('Dropdown Value (numeric):', numericValue); // Log the numeric value
      const selectedOption = categoryLinked.find((option) => option.valuelist_id === numericValue);
      console.log('Selected Option:', selectedOption); // Log the selected option
      const code = selectedOption ? selectedOption.code : '';
      console.log("Code to fetch:", code); // Log code to fetch
      if (code) {
        getCategory2(code);
      } else {
        console.log('No code to fetch.');
      }
    }
    if (name === 'description2') {
      // Convert value to a number if needed
      const numericValue = Number(value);
      console.log('Dropdown Value (numeric):', numericValue); // Log the numeric value
      const selectedOption = categoryLinked2.find((option) => option.valuelist_id === numericValue);
      console.log('Selected Option1:', selectedOption); // Log the selected option
      const code = selectedOption ? selectedOption.code : '';
      console.log("Code to fetch1:", code); // Log code to fetch
      if (code) {
        getCategory3(code);
      } else {
        console.log('No code to fetch.');
      }
    }
    if (name === 'description3') {
      // Convert value to a number if needed
      const numericValue = Number(value);
      console.log('Dropdown Value (numeric):', numericValue); // Log the numeric value
      const selectedOption = categoryLinked3.find((option) => option.valuelist_id === numericValue);
      console.log('Selected Option:', selectedOption); // Log the selected option
      const code = selectedOption ? selectedOption.code : '';
      console.log("Code to fetch:", code); // Log code to fetch
      if (code) {
        getCategory4(code);
      } else {
        console.log('No code to fetch.');
      }
    }
    setContentDetails({ ...contentDetails, [name]: stripHtmlTags(value) });
  };

  
  useEffect(() => {
    if (contentDetails&&contentDetails.code) {
      // Use taskdetails.code directly to get the selected project ID
      const selectedTask = contentDetails&&contentDetails.code;
      getCategory2(selectedTask);
    }
  }, [contentDetails&&contentDetails.code]);
  useEffect(() => {
    if (contentDetails&&contentDetails.code) {
      // Use taskdetails.code directly to get the selected project ID
      const selectedTask = contentDetails&&contentDetails.code;
      getCategory3(selectedTask);
    }
  }, [contentDetails&&contentDetails.code]);
  useEffect(() => {
    if (contentDetails&&contentDetails.code) {
      // Use taskdetails.code directly to get the selected project ID
      const selectedTask = contentDetails&&contentDetails.code;
      getCategory4(selectedTask);
    }
  }, [contentDetails&&contentDetails.code]);

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
    
  }, [id]);
console.log("1q1q11",contentDetails && contentDetails.gap)
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
                      navigate('/GapAnalysis');
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
                    navigate('/GapAnalysis');
                    console.log('back to list');
                  }}
                >
                  Back to List
                </Button>
                
                <PdfCreateInvoice
                
                 ></PdfCreateInvoice>
              </Col>
            </Row>
          </ComponentCardV2>
          {/* Content Details Form */}
          <ComponentCard title="Gap Analysis Details" creationModificationDate={contentDetails}>
            <ToastContainer></ToastContainer>
            <ComponentCard title="Clause Assesment" >
            <Row>
             
              <Col md="3">
                <FormGroup>
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
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Description 2 </Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.description2}
                    name="description2"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {categoryLinked2 &&
                      categoryLinked2.map((e) => {
                        return (
                          <option key={e.valuelist_id} value={e.valuelist_id}>
                            {e.value}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>
              </Col>
            
              <Col md="3">
                <FormGroup>
                  <Label> Description 3 </Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.description3}
                    name="description3"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {categoryLinked3 &&
                      categoryLinked3.map((e) => {
                        return (
                          <option key={e.valuelist_id} value={e.valuelist_id}>
                            {e.value}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Description 4 </Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.description4}
                    name="description4"
                  >
                    <option defaultValue="selected">Please Select</option>
                    {categoryLinked4 &&
                      categoryLinked4.map((e) => {
                        return (
                          <option key={e.valuelist_id} value={e.valuelist_id}>
                            {e.value}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>
              </Col>
             
            </Row>
            </ComponentCard>
            <ComponentCard title="Gap Assesment" >
            <Row>
              <Col md="3">
                <Label>Gap</Label>
                <FormGroup>
                  <Label>Yes</Label>
                  &nbsp;
                  <Input
                  type="radio"
                    name="gap"
                    value="1"
                    onChange={handleInputs}
                    defaultChecked={contentDetails && contentDetails.gap === 1 && true}
                    
                  />
                  &nbsp; &nbsp;
                  <Label>No</Label>
                  &nbsp;
                  <Input
                  type="radio"
                    name="gap"
                    value="0"
                    onChange={handleInputs}
                    defaultChecked={contentDetails && contentDetails.gap === 0 && true}
                  />
                </FormGroup>
              </Col>
             
                  <Col md="3">
                    <FormGroup>
                      <Label> Indicate Your Action </Label> 
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.indicate_action}
                        name="indicate_action"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label> Requirements Implmented </Label> 
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.requirements_implemented}
                        name="requirements_implemented"
                      />
                    </FormGroup>
                  </Col>
             
            </Row>
            </ComponentCard>
            <ComponentCard title="Implementation" >
            <Row>
             
                  <Col md="3">
                    <FormGroup>
                      <Label> Document Id </Label> 
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.document_id}
                        name="document_id"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label> Document Description </Label> 
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.document_description}
                        name="document_description"
                      />
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
                  <Col md="3">
                    <FormGroup>
                      <Label> Release Date </Label> 
                      <Input
                        type="date"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.release_date}
                        name="release_date"
                      />
                    </FormGroup>
                  </Col>
             
            </Row>
            </ComponentCard>
            <ComponentCard title="Off Site Assesment" >
            <Row>
            
             
                  <Col md="3">
                    <FormGroup>
                      <Label> Assessed </Label>
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.assessed}
                        name="assessed"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label> Acceptable </Label>
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.acceptable}
                        name="acceptable"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label> Remarks </Label>
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.remarks}
                        name="remarks"
                      />
                    </FormGroup>
                  </Col>
             
            </Row>
            </ComponentCard>
            <ComponentCard title="On Site Assesment" >
            <Row>
            
             
                  <Col md="3">
                    <FormGroup>
                      <Label> Assessed </Label>
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.onsite_assessed}
                        name="onsite_assessed"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label> Acceptable </Label>
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.onsite_acceptable}
                        name="onsite_acceptable"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label> Remarks </Label>
                      <Input
                        type="text"
                        onChange={handleInputs}
                        value={contentDetails && contentDetails.onsite_remarks}
                        name="onsite_remarks"
                      />
                    </FormGroup>
                  </Col>
             
            </Row>
            </ComponentCard>
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
                className={activeTab === '2' ? 'active' : ''}
                onClick={() => {
                  toggle('1');
                }}
              >
                Attachments
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
     

    
        <TabPane tabId="1">
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
