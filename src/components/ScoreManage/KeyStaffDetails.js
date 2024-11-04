import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import ComponentCard from '../ComponentCard';
import api from '../../constants/api';
import message from '../Message';
import CustomerCredsMailModal from '../Customer/CustomerCredsMailModal';


export default function KeyStaffDetails({
  staffeditdetails,
  handleInputs,

}) {
  KeyStaffDetails.propTypes = {
    staffeditdetails: PropTypes.any,
    handleInputs: PropTypes.func,
  
  };
  const [customername, setCustomerName] = useState([]);

  const [customerCredsMailModal, setCustomerCredsMailModal] = useState(false);



  const getCustomerName = () => {
    api
      .get('/score/getCustomerName')
      .then((res) => {
        setCustomerName(res.data.data);
      })
      .catch(() => {
        message('Company not found', 'info');
      });
  };
  useEffect(() => {
    getCustomerName();

  }, []);
  return (
    <Form>
      <FormGroup>
      <ComponentCard
            title="Score Details"
            creationModificationDate={staffeditdetails}
          
          > 
          <Row>
            <Col md="3">
              <FormGroup>
                <Label>
                  Score <span className="required"> *</span>
                </Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.correct_count}
                  name="score"
                  disabled
                />
              </FormGroup>
            </Col>
         
            <Col md="3">
              <FormGroup>
                <Label>Comments</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.comments}
                  name="comments"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Result</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.result}
                  name="result"
                />
              </FormGroup>
            </Col>
            
            <Col md="3">
              <FormGroup>
                <Label>Review Status</Label>
                <Input
                  type="select"
                  name="review_status"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.review_status}
                >
                  <option value="">Please Select</option>
                  <option value="Pending">Pending</option>
                  <option value="Reviewed">Reviewed</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Company</Label>
                <Input
                  type="select"
                  name="company_id"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.company_id}
                >
                  <option value="">Please Select</option>
                  {customername &&
                    customername.map((e) => {
                      return (
                        <option key={e.company_id} value={e.company_id}>
                          {e.company_name}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Reviewer</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.reviewer}
                  name="reviewer"
                />
              </FormGroup>
            </Col>
            
            <Col md="3">
              <FormGroup>
              <Label>Findings</Label>
                <Input
                  type="textarea"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.findings}
                  name="findings"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="textarea"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.description}
                  name="description"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
              <Label>Summary</Label>
                <Input
                  type="textarea"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.summary}
                  name="summary"
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
              <Label>Action Required</Label>
                <Input
                  type="textarea"
                  onChange={handleInputs}
                  value={staffeditdetails && staffeditdetails.action_required}
                  name="action_required"
                />
              </FormGroup>
            </Col>
          </Row>
        </ComponentCard>
      </FormGroup>
      {customerCredsMailModal&&<CustomerCredsMailModal contactId={staffeditdetails.contact_id} customerCredsMailModal={customerCredsMailModal} setCustomerCredsMailModal={setCustomerCredsMailModal}/>}
    </Form>
  );
}
