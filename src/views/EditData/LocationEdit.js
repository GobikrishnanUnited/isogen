import React, { useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import message from '../../components/Message';
import api from '../../constants/api';
import creationdatetime from '../../constants/creationdatetime';
import DeleteButton from '../../components/DeleteButton';

const LocationEdit = () => {
  //All state variable
  const [locationDetails, setLocationEdit] = useState();
  //navigation and parameters
  const { id } = useParams();
  const navigate = useNavigate();
  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Location');
  };
  //setting data in locationDetails
  const handleInputs = (e) => {
    setLocationEdit({ ...locationDetails, [e.target.name]: e.target.value });
  };
  //getting data from setting by Id
  const getLocationById = () => {
    api
      .post('/location/getLocationById', { Location_id: id })
      .then((res) => {
        setLocationEdit(res.data.data[0]);
      })
      .catch(() => {
        message('Location Data Not Found', 'info');
      });
  };
  //Update Setting
  const editLocationData = () => {
    locationDetails.modification_date = creationdatetime;
    if (locationDetails.location_name !== '') {
      api
        .post('/location/editLocation', locationDetails)
        .then(() => {
          message('Record editted successfully', 'success');
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields.', 'error');
    }
  };
  useEffect(() => {
    getLocationById();
  }, [id]);

  return (
    <>
      <BreadCrumbs />
      <Form>
        <FormGroup>
          <ToastContainer></ToastContainer>
          {/* Location Button */}
          <ComponentCardV2>
            <Row>
              <Col>
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    editLocationData();
                    setTimeout(() => {
                      navigate('/Location');
                    }, 1100);
                  }}
                >
                  Save
                </Button>
              </Col>
              <Col>
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    editLocationData();
                    applyChanges();
                  }}
                >
                  Apply
                </Button>
              </Col>
              <Col>
                <Button
                  type="submit"
                  className="btn btn-dark shadow-none"
                  onClick={(e) => {
                    if (window.confirm('Are you sure you want to cancel? ')) {
                      navigate('/Location');
                    } else {
                      e.preventDefault();
                    }
                  }}
                >
                  Cancel
                </Button>
              </Col>
              <Col>
                <DeleteButton id={id} columnname="Location_id" tablename="Location"></DeleteButton>
              </Col>
              <Col>
                <Button
                  className="shadow-none"
                  color="dark"
                  onClick={() => {
                    backToList();
                  }}
                >
                  Back to List
                </Button>
              </Col>
            </Row>
          </ComponentCardV2>
        </FormGroup>
      </Form>
      {/* Location Details */}
      <Form>
        <FormGroup>
          <ComponentCard title="Location Details" creationModificationDate={locationDetails}>
            {' '}
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Location</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={locationDetails && locationDetails.location_name}
                    name="location_name"
                  ></Input>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Company</Label>
                  <Input
                    type="textarea"
                    onChange={handleInputs}
                    value={locationDetails && locationDetails.company}
                    name="company"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Location Code</Label>
                  <Input
                    type="numbers"
                    onChange={handleInputs}
                    value={locationDetails && locationDetails.location_code}
                    name="location_code"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Time Zone</Label>
                  <Input
                    type="time"
                    onChange={handleInputs}
                    value={locationDetails && locationDetails.time_zone}
                    name="time_zone"
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Full Address</Label>
                  <Input
                    type="textarea"
                    value={locationDetails && locationDetails.full_address}
                    name="full_address"
                    onChange={handleInputs}
                  ></Input>
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Tags</Label>
                  <Input
                    name="tags"
                    type="text"
                    value={locationDetails && locationDetails.tags}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Latitude</Label>
                  <Input
                    type="text"
                    value={locationDetails && locationDetails.latitude}
                    name="latitude"
                    onChange={handleInputs}
                  ></Input>
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Longtitude</Label>
                  <Input
                    type="text"
                    value={locationDetails && locationDetails.longtitude}
                    name="longtitude"
                    onChange={handleInputs}
                  ></Input>
                </FormGroup>
              </Col>

            </Row>
            <Row>
            <Col md="4">
                <FormGroup>
                  <Label>To Email</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={locationDetails && locationDetails.to_email}
                    name="to_email"
                  ></Input>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Cc</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={locationDetails && locationDetails.cc}
                    name="cc"
                  ></Input>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Bcc</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={locationDetails && locationDetails.bcc}
                    name="bcc"
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
    </>
  );
};

export default LocationEdit;
