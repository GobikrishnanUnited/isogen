import React, { useState } from 'react';
import { Button, Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logos/Pioneer.png';
import api from '../../constants/api';
import message from '../../components/Message';

const ApplicationForm = () => {
  const [applicationDetails, setApplicationDetails] = useState({
    company_name: '',
    organization_type: [], 
    doc_set_development: '', 
  });
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, type, value, checked } = e.target;

    // Handle text fields
    if (type !== 'checkbox') {
      setApplicationDetails({
        ...applicationDetails,
        [name]: value,
      });
    }
 // Handle radio buttons
 if (type === 'radio') {
  setApplicationDetails({
    ...applicationDetails,
    [name]: value === 'Yes' ? '1' : '0', // Map Yes/No to 1/0
  });
}
    // Handle checkbox
    if (type === 'checkbox') {
      let updatedOrganizationType = [...applicationDetails.organization_type];
      if (checked) {
        updatedOrganizationType.push(value); // Add checked value to the array
      } else {
        updatedOrganizationType = updatedOrganizationType.filter((item) => item !== value); // Remove unchecked value
      }
      setApplicationDetails({
        ...applicationDetails,
        organization_type: updatedOrganizationType,
      });
    }
  };
  const insertApplicationData = () => {
    api
      .post('/content/insertApplication', applicationDetails)
      .then((res) => {
        setApplicationDetails(res.data.data);
        message('Content inserted successfully.', 'success');
       
      })
      .catch(() => {
        message('Network connection error.', 'error');
      });
  };

  return (
    <Container className="pt-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="text-center mb-4">
        <img src={Logo} alt="Pioneers Logo" width="150" />
        <h5>Pioneers International Thought for Business Consulting</h5>
        <h6 style={{ color: 'red' }}>PIT</h6>
        <h5>APPLICATION FORM</h5>
      </div>
      <Table
        bordered
        className="application-form-table"
        style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}
      >
        <tbody>
          <tr>
            <td>Company Name</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.company_name}
                name="company_name"
              />
            </td>
          </tr>
          <tr>
            <td>Company Representative Name</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.company_rep_name}
                name="company_rep_name"
              />
            </td>
          </tr>
          <tr>
            <td>Legal Obligation</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.legal_obligation}
                name="legal_obligation"
              />
            </td>
          </tr>
          <tr>
            <td>Company Address</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.company_address}
                name="company_address"
              />
            </td>
          </tr>
          <tr>
            <td>Address one:</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.address1}
                name="address1"
              />
            </td>
            <td>Scope:</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.scope1}
                name="scope1"
              />
            </td>
          </tr>
          <tr>
            <td>Address Two:</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.address2}
                name="address2"
              />
            </td>
            <td>Scope:</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.scope2}
                name="scope2"
              />
            </td>
          </tr>
          <tr>
            <td>Temporary Site Address:</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.address3}
                name="address3"
              />
            </td>
            <td>Scope:</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.scope3}
                name="scope3"
              />
            </td>
          </tr>
          <tr>
            <td>Standard Applied (QMS, EMS, OHS or Integrated)</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.standard}
                name="standard"
              />
            </td>
          </tr>
          <tr>
            <td>Contact Tel Number</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.phone}
                name="phone"
              />
            </td>
            <td>Contact Email</td>
            <td colSpan="3">
              <input
                type="email"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.email}
                name="email"
              />
            </td>
          </tr>
          <tr>
            <td>Website</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.website}
                name="website"
              />
            </td>
            <td>Area of Organization</td>
            <td colSpan="3">
              <input
                type="email"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.area_of_org}
                name="area_of_org"
              />
            </td>
          </tr>

          <tr>
            <td>Scope of Registration</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.scope_of_reg}
                name="scope_of_reg"
              />
            </td>
          </tr>
          <tr>
            <td>Client Operations are multi-site</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.client_operation}
                name="client_operation"
              />
            </td>
          </tr>
          <tr>
            <td>If Multi-site operations: All activities identified at different locations</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.operation_location}
                name="operation_location"
              />
            </td>
          </tr>

          <tr>
            <td>Operational Processes involved in the Organization</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.process}
                name="process"
              />
            </td>
          </tr>
          <tr>
            <td>Outsourced Processes</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.outsource_process}
                name="outsource_process"
              />
            </td>
          </tr>
          <tr>
            <td>Type Of Organization</td>
            <td colSpan="6">
              <label htmlFor="Manufacturing">
                <input
                  type="checkbox"
                  id="Manufacturing"
                  name="organization_type"
                  value="Manufacturing"
                  onChange={handleInputs}
                  checked={applicationDetails.organization_type.includes('Manufacturing')}
                />{' '}
                Manufacturing
              </label>{' '}
              <label htmlFor="govt-org">
                <input
                  type="checkbox"
                  id="GovtOrganization"
                  name="organization_type"
                  value="GovtOrganization"
                  onChange={handleInputs}
                  checked={applicationDetails.organization_type.includes('GovtOrganization')}
                />{' '}
                Govt. Organization
              </label>{' '}
              <label htmlFor="service">
                <input
                  type="checkbox"
                  id="Service"
                  name="organization_type"
                  value="Service"
                  onChange={handleInputs}
                  checked={applicationDetails.organization_type.includes('Service')}
                />{' '}
                Service
              </label>{' '}
              <label htmlFor="psu">
                <input
                  type="checkbox"
                  id="PSU"
                  name="organization_type"
                  value="PSU"
                  onChange={handleInputs}
                  checked={applicationDetails.organization_type.includes('PSU')}
                />{' '}
                PSU
              </label>{' '}
              <label htmlFor="others">
                <input
                  type="checkbox"
                  id="Others"
                  name="organization_type"
                  value="Others"
                  onChange={handleInputs}
                  checked={applicationDetails.organization_type.includes('Others')}
                />{' '}
                Others
              </label>
            </td>
          </tr>
          <tr>
            <td>Detail any Applicable Legislation and/or standards you work to</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.applicable_legislation}
                name="applicable_legislation"
              />
            </td>
          </tr>
          <tr>
            <td>No. of working shift/No. of Employee</td>
            <td colSpan="6"></td>
          </tr>
          <tr>
            <td></td>
            <td>Permanent Employee</td>
            <td>Work from Home</td>
            <td>Contracted/Subcontracted Employee</td>
            <td>Part Time Employee</td>
            <td>Employee At temporary site</td>
            <td>Non Permanent Employee</td>
          </tr>
          <tr>
            <td>Working shift - 1</td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.permanent_employee1}
                name="permanent_employee1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.wfh1}
                name="wfh1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.sub_con1}
                name="sub_con1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.part_time_emp1}
                name="part_time_emp1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.tem_site_emp1}
                name="tem_site_emp1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.non_permanent_employee1}
                name="non_permanent_employee1"
              />
            </td>
          </tr>
          <tr>
            <td>Working shift - 2</td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.permanent_employee2}
                name="permanent_employee1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.wfh2}
                name="wfh1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.sub_con2}
                name="sub_con1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.part_time_emp2}
                name="part_time_emp1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.tem_site_emp2}
                name="tem_site_emp1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.non_permanent_employee2}
                name="non_permanent_employee1"
              />
            </td>
          </tr>
      
          <tr>
            <td>Total</td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.total_emp1}
                name="total_emp1"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.total_emp2}
                name="total_emp2"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.total_emp3}
                name="total_emp3"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.total_emp4}
                name="total_emp4"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.total_emp5}
                name="total_emp5"
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.total_emp6}
                name="total_emp6"
              />
            </td>
          </tr>
          <tr>
            <td>
              Do you run shifts? If so please give employee breakdown and types of work carried out
              for each shift
            </td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.employee_shift_breakdown}
                name="employee_shift_breakdown"
              />
            </td>
            <td>
              If you operate on temporary sites (Non-permanent), please detail typical number of
              sites
            </td>
            <td colSpan="3">
              <input
                type="email"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.typical_site_count}
                name="typical_site_count"
              />
            </td>
          </tr>

          <tr>
            <td>EA Code if Known</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.ea_code}
                name="ea_code"
              />
            </td>
            <td>Documentation Language</td>
            <td colSpan="3">
              <input
                type="email"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.doc_language}
                name="doc_language"
              />
            </td>
          </tr>

          <tr>
            <td>When do you expect to be ready for stage-1 assessment?</td>
            <td colSpan="3">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.stage1_assessment}
                name="stage1_assessment"
              />
            </td>
            <td>When do you expect to be ready for Stage-2 Assessment?</td>
            <td colSpan="3">
              <input
                type="email"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.stage2_assessment}
                name="stage2_assessment"
              />
            </td>
          </tr>

          <tr>
            <td>
              Have you used an external consultant or have you got any experience with Management
              Systems?
            </td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.external_consultant_experience}
                name="external_consultant_experience"
              />
            </td>
          </tr>

          <tr>
            <td>How did you hear about HEC?</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.how_heard_about_hec}
                name="how_heard_about_hec"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <Table
        bordered
        className="application-form-table"
        style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}
      >
        <thead>
          <tr>
            <th colSpan="2" style={{ textAlign: 'center' }}>
              Please complete this section for Integrated Management System Certification{' '}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Is your IMS an integrated documentation set, including work instructions to a good
              level of development:
            </td>
            <td>
            <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="doc_set_development"
                    value="Yes"
                    onChange={handleInputs}
                    checked={applicationDetails.doc_set_development === '1'}
                  />{' '}
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="doc_set_development"
                    value="No"
                    onChange={handleInputs}
                    checked={applicationDetails.doc_set_development === '0'}
                  />{' '}
                  No
                </Label>
              </FormGroup>
            </td>
          </tr>

          <tr>
            <td>
              Do your Management Reviews consider the overall business strategy and plan across all
              standards:
            </td>
            <td>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="managementReviews" value="Yes" /> Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="managementReviews" value="No" /> No
                </Label>
              </FormGroup>
            </td>
          </tr>

          <tr>
            <td>Do you have an integrated approach to internal audits:</td>
            <td>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="internalAudits" value="Yes" /> Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="internalAudits" value="No" /> No
                </Label>
              </FormGroup>
            </td>
          </tr>

          <tr>
            <td>Do you have an integrated approach to policy and objectives:</td>
            <td>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="policyObjectives" value="Yes" /> Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="policyObjectives" value="No" /> No
                </Label>
              </FormGroup>
            </td>
          </tr>

          <tr>
            <td>Do you have an integrated approach to systems processes:</td>
            <td>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="systemProcesses" value="Yes" /> Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="systemProcesses" value="No" /> No
                </Label>
              </FormGroup>
            </td>
          </tr>

          <tr>
            <td>
              Do you have an integrated approach to improvement mechanisms (corrective and
              preventive action; measurement and continual Improvement):
            </td>
            <td>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="improvementMechanisms" value="Yes" /> Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="improvementMechanisms" value="No" /> No
                </Label>
              </FormGroup>
            </td>
          </tr>

          <tr>
            <td>Do you have Integrated management support and responsibilities:</td>
            <td>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="managementSupport" value="Yes" /> Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="managementSupport" value="No" /> No
                </Label>
              </FormGroup>
            </td>
          </tr>

          <tr>
            <td>Please confirm the preferred language for the conduct of the audit</td>
            <td>
              <Input type="text" name="preferredLanguage" defaultValue="ENGLISH" />
            </td>
          </tr>
        </tbody>
      </Table>

      <p className="mt-4">
        * The effective number of personnel consists of all personnel (permanent, temporary, and
        part-time) involved within the scope of certification including those working on each shift.
        When included within the scope of certification, it shall also include
        contractors/subcontractors’ personnel performing work or work-related activities that are
        under the control or influence of the organization, that can impact on the organization’s
        Management System performance.
      </p>
      <Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th colSpan="2" style={{ textAlign: 'center' }}>
              Please complete this section for ISO 14001 Applications
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Please summarise the significant Environmental Aspects that you have identified</td>
            <td colSpan="12">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.significant_environmental_aspects}
                name="significant_environmental_aspects"
              />
            </td>
          </tr>
          <tr>
            <td>
              Please detail any Environmental legal requirements related to your company activity
            </td>
            <td colSpan="12">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.environmental_legal_requirements}
                name="environmental_legal_requirements"
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th colSpan="2" style={{ textAlign: 'center' }}>
              Please complete this section for OHSAS 18001/ISO 45001 Applications
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Please summarise the significant Hazards that you have identified</td>
            <td colSpan="12">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.significant_hazards}
                name="significant_hazards"
              />
            </td>{' '}
          </tr>
          <tr>
            <td>
              Please detail any hazardous materials that you typically use or come into contact with
              (give site specific details where appropriate)
            </td>
            <td colSpan="12">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.hazardous_materials}
                name="hazardous_materials"
              />
            </td>
          </tr>
          <tr>
            <td>Please detail any OH&S legal requirements related to your company activity</td>
            <td colSpan="12">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.ohs_legal_requirements}
                name="ohs_legal_requirements"
              />
            </td>
          </tr>
          <tr>
            <td>Do you recognise any Union(s), if so please give details</td>
            <td colSpan="12">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.recognized_unions}
                name="recognized_unions"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <Table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ textAlign: 'left', padding: '10px' }}>
              Please provide accident statistics for last two years and current year to date.
            </th>
          </tr>
          <tr>
            <th style={{ padding: '10px' }}>Type</th>
            <th style={{ padding: '10px' }}>Current year:</th>
            <th style={{ padding: '10px' }}>Previous year:</th>
            <th style={{ padding: '10px' }}>2 years ago:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>Major accidents/legal action</td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.major_accidents_current_year}
                name="major_accidents_current_year"
              ></input>
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.major_accidents_current_year}
                name="major_accidents_prev_year"
              ></input>
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.major_accidents_year_ago}
                name="major_accidents_year_ago"
              ></input>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Over seven days absences because of an incident</td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.absences_days_current_year}
                name="absences_days_current_year"
              ></input>
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.absences_days_prev_year}
                name="absences_days_prev_year"
              ></input>
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.absences_days_year_ago}
                name="absences_days_year_ago"
              ></input>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Dangerous occurrences</td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.occurrence_current_year}
                name="occurrence_current_year"
              ></input>
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.occurrence_prev_year}
                name="occurrence_prev_year"
              ></input>
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.occurrence_year_agp}
                name="occurrence_year_ago"
              ></input>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>
              Accidents/Incidents – minor not requiring hospital treatment
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.hospital_treatment_current_year}
                name="hospital_treatment_current_year"
              ></input>
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.hospital_treatment_prev_year}
                name="hospital_treatment_prev_year"
              ></input>
            </td>
            <td style={{ padding: '10px' }}>
              <input
                type="text"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.hospital_treatment_year_ago}
                name="hospital_treatment_year_ago"
              ></input>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        bordered
        className="application-form-table"
        style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}
      >
        <thead>
          <tr>
            <th colSpan="4" style={{ textAlign: 'left', padding: '10px' }}>
              Please complete this section for ISO 27001:2013 Applications
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Please list the ISO 27001 Annex A control objectives and controls that are justified
              as exclusions
            </td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.excluded_controls_iso27001}
                name="excluded_controls_iso27001"
              />
            </td>
          </tr>
          <tr>
            <td>Number of system users</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.no_of_sys_users}
                name="no_of_sys_users"
              />
            </td>
          </tr>
          <tr>
            <td>Number of servers</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.no_of_servers}
                name="no_of_servers"
              />
            </td>
          </tr>
          <tr>
            <td>Number of workstations</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.no_of_work_station}
                name="no_of_work_station"
              />
            </td>
          </tr>
          <tr>
            <td>Number of application development and maintenance staff</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.no_of_maintenance_staff}
                name="no_of_maintenance_staff"
              />
            </td>
          </tr>
          <tr>
            <td>Date of Application :</td>
            <td colSpan="6">
              <input
                type="date"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.date_of_application}
                name="date_of_application"
              />
            </td>
          </tr>
          <tr>
            <td>Signature of Representative:</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.sign_represent}
                name="sign_represent"
              />
            </td>
          </tr>
          <tr>
            <td>Provide details of Network and encryption technology in use as part of the ISMS</td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.network_encryption_tech}
                name="network_encryption_tech"
              />
            </td>
          </tr>
          <tr>
            <td>
              Please detail any Information security legal requirements related to your company
              activity
            </td>
            <td colSpan="6">
              <input
                type="text"
                className="form-control"
                onChange={handleInputs}
                value={applicationDetails && applicationDetails.inform_security_legal_req}
                name="inform_security_legal_req"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <Row>
        <Col md="6" className="d-flex justify-content-start">
          <Button
            className="shadow-none"
            color="primary"
            onClick={() => {
              insertApplicationData();
              setTimeout(() => {
                navigate(`/ApplicationList`);
              }, 300);
            }}
            
          >
            Save
          </Button>
        </Col>
        <Col md="6" className="d-flex justify-content-end">
          <Button
            onClick={() => {
              navigate(-1);
            }}
            type="button"
            className="btn btn-dark shadow-none"
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationForm;
