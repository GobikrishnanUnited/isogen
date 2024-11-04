import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import {
  Button,
  Label,
  FormGroup,
  CardTitle,
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap';
//import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthLogo from '../../layouts/logo/AuthLogo';
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';
//import img1 from '../../assets/images/users/user4.jpg';
import message from '../../components/Message';
import api from '../../constants/api';

const ResetPassword = () => {
  //const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const location = useLocation();
const navigate=useNavigate();
  const initialValues = {
    password: '',
    confirmPassword: ''
  };
const sendotp=(value)=>{
  value.resetToken=token;
  value.newPassword=value.password;
          api.post("/api/reset", value)
          .then(() => {
            message('Password has been Changed successfully', 'success');
setTimeout(()=>{
  navigate("/login")
},200);
          })
          .catch(() => {
            message(' Unable to Change the Password', 'error');
          });
}
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });
  
  console.log('token',token);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tokens = searchParams.get('token');
    const stringWithoutQuotes = tokens.replace(/"/g, '');
    console.log('tokens',tokens);
    console.log('stringWithoutQuotes',stringWithoutQuotes);
    setToken(stringWithoutQuotes);
  }, [location]);
  return (
    <div className="loginBox">
        <ToastContainer></ToastContainer>
      <LeftBg className="position-absolute left bottom-0" />
      <RightBg className="position-absolute end-0 top" />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            <AuthLogo />
            <Card>
              <CardBody className="p-4 m-1">
                <div className="text-center">
                  {/* <img src='' alt="avatar" className="rounded-circle" width="95" /> */}
                  <CardTitle tag="h4" className="mt-2">
                   Reset Password
                  </CardTitle>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(fields) => {
                
                    sendotp(fields);
                    // eslint-disable-next-line no-alert
                   // alert(`SUCCESS!! :-)\n\n${JSON.stringify(fields, null, 4)}`);
                   // navigate('/');
                  }}
                  render={({ errors, touched }) => (
                     <Form className="mt-3">
                     {/* <FormGroup>
                        <Label htmlFor="name">Name</Label>
                         <Field 
                           name="name"
                           type="text"
                           className={`form-control${
                            errors.uname && touched.uname ? ' is-invalid' : ''
                           }`}
                         />
                         <ErrorMessage name="name" component="div" className="invalid-feedback" />
                       </FormGroup> */}
                        <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Field
                          name="password"
                          type="password"
                          className={`form-control${
                            errors.password && touched.password ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          className={`form-control${
                            errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button type="submit" color="info" block className="me-2">
                          Reset
                        </Button>
                      </FormGroup>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
