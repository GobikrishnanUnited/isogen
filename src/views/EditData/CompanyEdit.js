/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Button, Label, Input, TabContent, TabPane, Nav, NavItem, NavLink,Table  } from 'reactstrap';
import * as Icon from 'react-feather';
import { useNavigate, useParams,Link } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCardV2 from '../../components/ComponentCardV2';
import message from '../../components/Message';
import api from '../../constants/api';
import ComponentCard from '../../components/ComponentCard';
import creationdatetime from '../../constants/creationdatetime';
import ContactLink from '../../components/Customer/ContactLink';
import IsoLink from '../../components/Customer/IsoLink';
import ApplicationLink from '../../components/Customer/ApplicationLink';

const CompanyEdit = () => {
  // All state variables
  const [contentDetails, setContentDetails] = useState();
  const [allcountries, setAllCountries] = useState();

  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  const [teamById, setTeamById] = useState([]);
  const [contactDataTeam, setContactDataTeam] = useState();
  const [addContactModalTeam, setAddContactModalTeam] = useState(false);
  const [addContactModal, setAddContactModal] = useState(false);
  
 //All state variable
 const [salesReport, setSalesReport] = useState(null);
 const [startDate, setStartDate] = useState('');
 const [endDate, setEndDate] = useState('');
 const [companyName, setCompanyName] = useState('');
 const [company, setCompany] = useState();
 const [userSearchData, setUserSearchData] = useState('');

 //Get data from Training table
 const getProject = () => {
   api
     .post('/score/getGapReportByCompanyId',{company_id:id})
     .then((res) => {
       setSalesReport(res.data.data);
       setUserSearchData(res.data.data);
     })
     .catch(() => {
       message('Over all sales Data Not Found', 'info');
     });
 };

 const getCompany = () => {
   api.get('/company/getCompany').then((res) => {
     setCompany(res.data.data);
   });
 };

 const handleSearch = () => {
   const newData = salesReport
     .filter((x) =>
       endDate && startDate
         ? x.invoice_date <= (endDate === '' ? x.invoice_date : endDate) &&
           x.invoice_date >= (startDate === '' ? x.invoice_date : startDate)
         : startDate
         ? x.invoice_date === (startDate === '' ? x.invoice_date : startDate)
         : x.invoice_date === (endDate === '' ? x.invoice_date : endDate),
     );
   setUserSearchData(newData);
 };

 useEffect(() => {
   getProject();
   getCompany();
 }, []);
 const [page, setPage] = useState(0);

 const employeesPerPage = 20;
 const numberOfEmployeesVistited = page * employeesPerPage;
 const displayEmployees = userSearchData.slice(
   numberOfEmployeesVistited,
   numberOfEmployeesVistited + employeesPerPage,
 );
 const totalPages = Math.ceil(userSearchData.length / employeesPerPage);
 const changePage = ({ selected }) => {
   setPage(selected);
 };

 
 const columns = [
   {
     name: '#',
     selector: '',
     grow: 0,
     wrap: true,
     width: '4%',
   },
   {
     name: 'Edit',
     selector: 'edit',
     cell: () => <Icon.Edit2 />,
     grow: 0,
     width: 'auto',
     button: true,
     sortable: false,
   },
 
   {
     name: 'ISO Code',
     selector: 'title',
     sortable: true,
     grow: 0,
   },
   {
     name: 'Score',
     selector: 'first_name',
     sortable: true,
     grow: 0,
     wrap: true,
   },
   {
     name: 'Result',
     selector: 'result',
     sortable: true,
     grow: 2,
     wrap: true,
   },
 
   {
    name: 'Review Status',
    selector: 'review_status',
    sortable: true,
    grow: 2,
    wrap: true,
  },
 ];

  // const tabs = [
  //   { id: '1', name: 'Score History' },
  //   { id: '2', name: 'Analytics' },
  // ];
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  const addContactToggle = () => {
    setAddContactModal(!addContactModal);
  };
  // const addContactToggless = () => {
  //   setAddContactModalss(!addContactModalss);
  // };
  const addContactToggleTeam = () => {
    setAddContactModalTeam(!addContactModalTeam);
  };
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
    .post('/contact/getContactByCompanyId', { company_id: id })
    .then((res) => {
      setTeamById(res.data.data);
    })
    .catch(() => { });
};

 
  //setting data in Description Modal contentDetails
  const getAllCountries = () => {
    api
      .get('/contact/getCountry')
      .then((res) => {
        setAllCountries(res.data.data);
      })
      .catch(() => {
        //message('Country Data Not Found', 'info');
      });
  };

  // Get content data By content id
  const getContentById = () => {
    api
      .post('/contact/getCompanyByCompanyId', { company_id: id })
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
        .post('/contact/editCompany', contentDetails)
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
    getAllCountries();
    getTeamById();
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
                    navigate('/Company');
                    console.log('back to list');
                  }}
                >
                  Back to List
                </Button>
              </Col>
            </Row>
          </ComponentCardV2>
          {/* Content Details Form */}
          <ComponentCard title="Company details" creationModificationDate={contentDetails}>
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label> Customer Id </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.company_code}
                    name="company_code"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                <Label>Name</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.company_name}
                    name="company_name"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  {/* Category title from Category table */}
                  <Label>Mobile</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.phone}
                    name="phone"
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
                  {/* Category title from Category table */}
                  <Label>Street</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.address_street}
                    name="address_street"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                <Label>State</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.address_state}
                    name="address_state"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
              <FormGroup>
              <Label>Country</Label>
              <Input
                type="select"
                name="address_country"
                onChange={handleInputs}
                value={contentDetails && contentDetails.address_country}
              >
                <option defaultValue="selected" value="">
                  Please Select
                </option>
                {allcountries &&
                  allcountries.map((country) => (
                    <option key={country.country_code} value={country.country_code}>
                      {country.name}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>
                 
            </Row>
          </ComponentCard>
          </FormGroup>
      </Form>
      <ComponentCard title="More Details">
        <Nav tabs>
          {/* <NavItem>
            <NavLink
              className={activeTab === '1' ? 'active' : ''}
              onClick={() => {
                toggle('1');
              }}
            >
              Iso Compliance
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              className={activeTab === '2' ? 'active' : ''}
              onClick={() => {
                toggle('2');
              }}
            >  Contacts Linked 
              
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              className={activeTab === '3' ? 'active' : ''}
              onClick={() => {
                toggle('3');
              }}
            >
           Applications
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              className={activeTab === '4' ? 'active' : ''}
              onClick={() => {
                toggle('4');
              }}
            >
           Reports
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="p-4" activeTab={activeTab}>
       
          {/* <TabPane tabId="1">
          <ComponentCard title="Iso linked">
                <IsoLink/>
                </ComponentCard>
          </TabPane> */}
          <TabPane tabId="2">
            <Row>

<ContactLink
  setContactDataTeam={setContactDataTeam}
  id={id}
  teamById={teamById}
  addContactToggleTeam={addContactToggleTeam}
  addContactModalTeam={addContactModalTeam}
  //setEditTeamEditModal={setEditTeamEditModal}
  getTeamById={getTeamById}
/>
            </Row>
          </TabPane>
          {/* <TabPane tabId="3">
            <Row>
              <ComponentCard title="Applications">
                <ApplicationLink/>
              </ComponentCard>
            </Row>
          </TabPane> */}
          <TabPane tabId="4">
            <Row>
            <Table>
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {displayEmployees &&
              displayEmployees.map((element, index) => {
                return (
                  <tr key={element.gap_report_id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/GapAnalysisReportEdit/${element.gap_report_id}?tab=1`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                   
                    <td>{element.title}</td>
                    <td>{element.correct_count}</td>
                    <td>{element.result}</td>
                    <td>{element.review_status}</td>
                  
                  </tr>
                );
              })}
          </tbody>
          </Table>
            </Row>
          </TabPane>
        </TabContent>
      </ComponentCard>
     
    </>
  );
};
export default CompanyEdit;
