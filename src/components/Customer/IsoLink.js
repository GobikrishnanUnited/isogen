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

export default function IsoLink({
  addIsoToggleTeam,
  addIsoModalTeam,
  id,
  companyIsoCodes,
  getCompanyIsoCodes,
}) {
  IsoLink.propTypes = {
    addIsoToggleTeam: PropTypes.func,
    addIsoModalTeam: PropTypes.bool,
    id: PropTypes.any,
    companyIsoCodes: PropTypes.array,
    getCompanyIsoCodes: PropTypes.func,
  };

  const [selectedIso, setSelectedIso] = useState('');
  const [isos, setIsos] = useState([]);

  const getIsoCodes = () => {
    api
      .get('/isocode/getIsoCode')
      .then((res) => {
        setIsos(res.data.data);
      })
      .catch(() => {
        message('Cannot get ISO Codes', 'error');
      });
  };

  const addIsoToCompany = () => {
    if (!selectedIso) {
      message('Please select an ISO code', 'warning');
      return;
    }

    api
      .post('/company/addIsoToCompany', { company_id: id, iso_id: selectedIso })
      .then(() => {
        message('ISO code added successfully', 'success');
        getCompanyIsoCodes();
        setSelectedIso('');
      })
      .catch(() => {
        message('Error adding ISO code', 'error');
      });
  };

  useEffect(() => {
    getIsoCodes();
  }, []);

  return (
    <Form>
      <Row>
        <Col md="3">
          <FormGroup>
            <Button
              color="primary"
              className="shadow-none"
              onClick={addIsoToggleTeam}
            >
              Add ISO Code
            </Button>
            <Modal
              size="lg"
              isOpen={addIsoModalTeam}
              toggle={addIsoToggleTeam}
            >
              <ModalHeader style={{ backgroundColor: '#0096FF', color: 'white' }} toggle={addIsoToggleTeam}>
                Add ISO Code
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Card>
                      <CardBody>
                        <FormGroup>
                          <Label>Select ISO Code</Label>
                          <Input
                            type="select"
                            onChange={(e) => setSelectedIso(e.target.value)}
                            value={selectedIso}
                          >
                            <option value="">Please Select</option>
                            {isos.map((iso) => (
                              <option key={iso.iso_id} value={iso.iso_id}>
                                {iso.title}
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
                  onClick={addIsoToCompany}
                >
                  Add
                </Button>
                <Button
                  color="secondary"
                  onClick={addIsoToggleTeam}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </FormGroup>
        </Col>
      </Row>
      <Table id="isoTable" className="display border border-secondary rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>ISO Code</th>
          </tr>
        </thead>
        <tbody>
          {companyIsoCodes?.map((isoCode, index) => (
            <tr key={isoCode.iso_id}>
              <td>{index + 1}</td>
              <td>{isoCode.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}
