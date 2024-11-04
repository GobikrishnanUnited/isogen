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
import api from '../../constants/api'; // Import your API library or use a fetch/axios/etc.


export default function ContactLink({
  addContactToggleTeam,
  addContactModalTeam,
  setEditTeamEditModal,
  id,
  teamById,
  setContactDataTeam,
  getTeamById,
}) {
    ContactLink.propTypes = {
    addContactToggleTeam: PropTypes.func,
    setEditTeamEditModal: PropTypes.func,
    addContactModalTeam: PropTypes.bool,
    id: PropTypes.any,
    teamById: PropTypes.array, // Assuming teamById is an array
    setContactDataTeam: PropTypes.func,
    getTeamById: PropTypes.func,
  };

  const [selectedContact, setSelectedContact] = useState();
  const [contacts, setContacts] = useState([]);

  // Function to fetch team titles
  const getTeamTitles = () => {
    api
      .get('/contact/getContactwithoutCompany')
      .then((res) => {
        setContacts(res.data.data); 
      })
      .catch(() => {
        message('Team titles not found', 'info');
      });
  };

  /// Insert or update team member
const insertTeamMember = () => {
  // Check if a team title is selected
  if (!selectedContact) {
    message('Please select a team title', 'danger');
    return;
  }
console.log('selectedContact',selectedContact);
  // Check if a project ID is available
  if (!id) {
    message('Company ID not available', 'error');
    return;
  }

  // Find the team with the selected team title
  // const existingTeam = contacts.find((team) => team.contact_id === selectedContact);

  // if (!existingTeam) {
  //   message('Selected team title not found', 'danger');
  //   return;
  // }

  // Update the project ID for the existing team
  const updatedTeam = {
    contact_id:selectedContact,
    company_id: id,
  };

  api
    .post(`/contact/editContactCompany`, updatedTeam)
    .then(() => {
      message('Contact updated successfully.', 'success');
      // setTimeout(()=>{
      //   window.location.reload();
      // },500)
      getTeamById(); // Assuming this function retrieves updated team data
    })
    .catch(() => {
      message('Network connection error.', 'error');
    });
};
useEffect(() => {
  getTeamTitles();

 }, [id]);

  return (
    <Form>
      <Row>
        <Col md="3">
          <FormGroup>
            <Button
              color="primary"
              className="shadow-none"
              onClick={addContactToggleTeam.bind(null)}
            >
              Add New
            </Button>
            <Modal
              size="lg"
              isOpen={addContactModalTeam}
              toggle={addContactToggleTeam.bind(null)}
            >
              <ModalHeader  style={{ backgroundColor: ' #0096FF', color: 'white' }} toggle={addContactToggleTeam.bind(null)}>
                New Contact
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <Card>
                      <CardBody>
                        <Form>
                        <Row>
                            <Col md="4">
                              <FormGroup>
                                <Label>Select Contact</Label>
                                <Input
                                  type="select"
                                  onChange={(e) => {
                                    setSelectedContact(e.target.value);
                                  }}
                                  value={selectedContact}
                                >
                                  <option value="">Please Select</option>
                                  {contacts &&
                                    contacts.map((e) => {
                                      return (
                                        <option
                                          key={e.contact_id}
                                          value={e.contact_id}
                                        >
                                          {e.name}
                                        </option>
                                      );
                                    })}
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    insertTeamMember();
                  }}
                >
                  Submit
                </Button>
                <Button
                  color="secondary"
                  className="shadow-none"
                  onClick={addContactToggleTeam.bind(null)}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </FormGroup>
        </Col>
      </Row>
      <Table id="example" className="display border border-secondary rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
           
          </tr>
        </thead>
        <tbody>
          {teamById &&
            teamById.map((element, index) => {
              return (
                <tr key={element.contact_id}>
                  <td>{index + 1}</td>
                  <td>
                    {/* <span
                      onClick={() => {
                        setContactDataTeam(element);
                        setEditTeamEditModal(true);
                      }}
                    >
                      <Icon.Edit2 />
                    </span> */}
                    {element.name}
                  </td>
                  {/* <td>{element.team_title}</td> */}
                </tr>
              );
            })}
        </tbody>
      </Table>
      
    </Form>
    
  );
}
