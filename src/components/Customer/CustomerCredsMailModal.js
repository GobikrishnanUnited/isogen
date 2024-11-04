/*eslint-disable*/
import React,{useEffect, useState} from 'react'
import { Row,Col,FormGroup,Button,Modal,ModalHeader,ModalBody,Form,Input,Label } from 'reactstrap';
import random from 'random';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'
//import moment from 'moment';
import message from '../Message'
import api from '../../constants/api'

function CustomerCredsMailModal({customerCredsMailModal,setCustomerCredsMailModal,pc,contactId}) {
    CustomerCredsMailModal.propTypes = {
        customerCredsMailModal: PropTypes.bool,
        setCustomerCredsMailModal: PropTypes.func,
    pc:PropTypes.object,
    contactId:PropTypes.any
  }

  const [contact, setContact] = useState();
 
  

  const{id}=useParams()
 
//get line items
const getContact=()=>{
  api.post('/contact/getContactByContactId',{contact_id:contactId})
  .then((res)=>{
    setContact(res.data.data[0]);
  }).catch(()=>{
    message('unable to get products','error');
  })
}


//Insert claim line items
const insertClaimLineItems=(elem)=>{
  elem.project_claim_id=projectClaimId;
  elem.project_id=id;
api.post('/claim/insertClaimLineItems',elem)
.then(() => {
message('Record created successfully', 'success');
})
.catch(() => {
message('Unable to edit record.', 'error');
});

}


useEffect(()=>{
  getContact();
},[])

  return (
    <>
    <Modal size="lg" isOpen={customerCredsMailModal}>
                <ModalHeader> Customer Creds <Button onClick={()=>setCustomerCredsMailModal(false)}>x</Button></ModalHeader>
                <ModalBody>
                    <FormGroup>
                    <Form>
                        <Row>
                        <Col md="4">
                            <FormGroup>
                            <Label>Email</Label>
                            <Input name="email"  type="text" value={contact && contact.email}/>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                            <Label>Password</Label>
                            <Input name="pass_word"  type="text" value={contact && contact.pass_word}/>
                            </FormGroup>
                        </Col>
                      
                        
                            </Row>
                            <Row>
                            <Col md="12">
                            <FormGroup>
                            <Label>Quizz link</Label>
                            <Input name="link"  type="text" value={contact && contact.link}/>
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                            <FormGroup>
                            
                            <Button type='submit'>Send</Button>
                            </FormGroup>
                        </Col>
                        </Row>
                        </Form>
                    </FormGroup>
                </ModalBody>
            </Modal>
           
        </>
  )
}

export default CustomerCredsMailModal