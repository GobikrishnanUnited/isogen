/*eslint-disable*/
import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import ComponentCard from '../ComponentCard';

export default function CorrelationDetailComp({ categoryDetails, handleInputs, section, valuelist }) {
  CorrelationDetailComp.propTypes = {
    categoryDetails: PropTypes.object,
    handleInputs: PropTypes.func,
    section: PropTypes.array,
    valuelist: PropTypes.array,
  };
  return (
    <>
      <Form>
        <FormGroup>
        <ComponentCard title="Correlation Details"
         creationModificationDate={categoryDetails}>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>
                    Software Version <span className="required"> *</span>
                  </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={categoryDetails && categoryDetails.software_version}
                    name="software_version"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>File Name</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={categoryDetails && categoryDetails.file_name}
                    name="file_name"
                  />
                </FormGroup>
              </Col>
             
        
              <Col md="4">
                <FormGroup>
                  <Label>File Size</Label>
                  <Input
                    type="text"
                    value={categoryDetails && categoryDetails.file_size}
                    onChange={handleInputs}
                    name="file_size"
                  ></Input>
                </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col md="4">
              <FormGroup>
                <Label>Provider</Label>
                <Input
                  value={categoryDetails && categoryDetails.provider}
                  type="textarea"
                  onChange={handleInputs}
                  name="provider"
                />
              </FormGroup>
            </Col>
              <Col md="4">
              <FormGroup>
                
                <Label>Validation Test Run</Label>
                <br></br>
                <Input
                  name="validation_test"
                  value="1"
                  type="radio"
                  defaultChecked={categoryDetails && categoryDetails.validation_test === 1 && true}
                  onChange={handleInputs}
                />
                &nbsp; 
                <Label> Pass </Label>
                &nbsp; 
                &nbsp; 
                <Input
                  name="validation_test"
                  value="0"
                  type="radio"
                  defaultChecked={categoryDetails && categoryDetails.validation_test === 0 && true}
                  onChange={handleInputs}
                />
                &nbsp; 
                <Label>Fail</Label>
                
              </FormGroup>
              </Col>
              <Col md="4">
        <FormGroup>
          <Label>Validation Date</Label>
          <Input
            value={categoryDetails && categoryDetails.validation_date
            }
            type="date"
            onChange={handleInputs}
            name="validation_date"
          />
        </FormGroup>
      </Col>
      </Row>
      <Row>
            <Col md="4">
              <FormGroup>
                <Label>Validated By</Label>
                <Input
                  value={categoryDetails && categoryDetails.validated_by}
                  type="text"
                  onChange={handleInputs}
                  name="validated_by"
                />
              </FormGroup>
            </Col>
           
            <Col md="4">
              <FormGroup>
                <Label>Comments</Label>
                <Input
                  value={categoryDetails && categoryDetails.comments}
                  type="textarea"
                  onChange={handleInputs}
                  name="comments"
                />
              </FormGroup>
            </Col>
            </Row>
          </ComponentCard>
         
        </FormGroup>
      </Form>
     
     
    </>
  );
}
