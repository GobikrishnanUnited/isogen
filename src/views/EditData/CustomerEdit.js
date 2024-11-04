/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Button, Label, Input} from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCardV2 from '../../components/ComponentCardV2';
import message from '../../components/Message';
import api from '../../constants/api';
import ComponentCard from '../../components/ComponentCard';
import creationdatetime from '../../constants/creationdatetime';


const ContentUpdate = () => {
  // All state variables
  const [contentDetails, setContentDetails] = useState();
  // const [allcountries, setAllCountries] = useState();
  const [teamById, setTeamById] = useState([]);
  const [contactDataTeam, setContactDataTeam] = useState();
  const [addContactModalTeam, setAddContactModalTeam] = useState(false);
  const [addContactModal, setAddContactModal] = useState(false);
  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();


  // const tabs = [
  //   { id: '1', name: 'Score History' },
  //   { id: '2', name: 'Analytics' },
  // ];

  //Setting data in contentDetails
  const handleInputs = (e) => {
    setContentDetails({ ...contentDetails, [e.target.name]: e.target.value });
  };
  //setting data in Description Modal contentDetails
  // const getAllCountries = () => {
  //   api
  //     .get('/contact/getCountry')
  //     .then((res) => {
  //       setAllCountries(res.data.data);
  //     })
  //     .catch(() => {
  //       //message('Country Data Not Found', 'info');
  //     });
  // };
 //Getting data from milestone
 const getTeamById = () => {
  api
    .post('/contact/getContactsByCompanyId', { company_id: id })
    .then((res) => {
      setTeamById(res.data.data);
    })
    .catch(() => { });
};

  // Get content data By content id
  const getContentById = () => {
    api
      .post('/contact/getContactByContactId', { contact_id: id })
      .then((res) => {
        setContentDetails(res.data.data[0]);
      })
      .catch(() => {
        message('Content Data Not Found', 'info');
      });
  };
  //Edit Content
  const editContentData = () => {
    contentDetails.modification_date = creationdatetime;
    console.log(contentDetails);
    
      api
        .post('/contact/editContact', contentDetails)
        .then(() => {
          message('Record edited successfully', 'success');
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    
  };

  // getting data from Category
 

  useEffect(() => {
    getContentById();
    getTeamById();
   // getAllCountries();
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
                      navigate('/Customer');
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
                    navigate('/Customer');
                    console.log('back to list');
                  }}
                >
                  Back to List
                </Button>
              </Col>
            </Row>
          </ComponentCardV2>
          {/* Content Details Form */}
          <ComponentCard title="Customer details" creationModificationDate={contentDetails}>
            <ToastContainer></ToastContainer>
            <Row>
             
              <Col md="3">
                <FormGroup>
                <Label>Name</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.name}
                    name="name"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Position</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.position}
                    name="position"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Email</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.email}
                    name="email"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Password </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.pass_word}
                    name="pass_word"
                    disabled
                  />
                </FormGroup>
              </Col>
             
            </Row>
          </ComponentCard>
          </FormGroup>
      </Form>
     
  
    </>
  );
};
export default ContentUpdate;
