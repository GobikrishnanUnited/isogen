/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import {
  Row,
  Form,
  ModalFooter,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  Table,
  Label,
  Input,
  Col,
  FormGroup,
  Button,
  CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import message from '../Message'
import api from '../../constants/api';

export default function ApplicationLink({
  addApplicationToggle,
  addApplicationModal,
  id,
  companyApplications,
  getCompanyApplications,
}) {
  ApplicationLink.propTypes = {
    addApplicationToggle: PropTypes.func,
    addApplicationModal: PropTypes.bool,
    id: PropTypes.any,
    companyApplications: PropTypes.array,
    getCompanyApplications: PropTypes.func,
  };

  const [selectedApplication, setSelectedApplication] = useState('');
  const [applications, setApplications] = useState([]);

  const getApplications = () => {
    api
      .get('/application/getApplications')
      .then((res) => {
        setApplications(res.data.data);
      })
      .catch(() => {
        message('Cannot get Applications', 'error');
      });
  };

  const addApplicationToCompany = () => {
    if (!selectedApplication) {
      message('Please select an Application', 'warning');
      return;
    }

    api
      .post('/company/addApplicationToCompany', { company_id: id, application_id: selectedApplication })
      .then(() => {
        message('Application added successfully', 'success');
        getCompanyApplications();
        setSelectedApplication('');
      })
      .catch(() => {
        message('Error adding Application', 'error');
      });
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <Form>
      <Row>
        <Col md="3">
          <FormGroup>
            <Button
              color="primary"
              className="shadow-none"
              onClick={addApplicationToggle}
            >
              Add Application
            </Button>
            <Modal
              size="lg"
              isOpen={addApplicationModal}
              toggle={addApplicationToggle}
            >
              <ModalHeader style={{ backgroundColor: '#0096FF', color: 'white' }} toggle={addApplicationToggle}>
                Add Application
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Card>
                      <CardBody>
                        <FormGroup>
                          <Label>Select Application</Label>
                          <Input
                            type="select"
                            onChange={(e) => setSelectedApplication(e.target.value)}
                            value={selectedApplication}
                          >
                            <option value="">Please Select</option>
                            {applications?.map((app) => (
                              <option key={app.application_id} value={app.application_id}>
                                {app.name}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={addApplicationToCompany}
                >
                  Add
                </Button>
                <Button
                  color="secondary"
                  onClick={addApplicationToggle}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </FormGroup>
        </Col>
      </Row>
      <Table id="applicationTable" className="display border border-secondary rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>Application Name</th>
          </tr>
        </thead>
        <tbody>
          {companyApplications?.map((application, index) => (
            <tr key={application.application_id}>
              <td>{index + 1}</td>
              <td>{application.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}
