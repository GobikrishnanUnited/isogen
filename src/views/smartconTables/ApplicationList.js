import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { Link } from 'react-router-dom';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const ApplicationList = () => {
  //state variable
  const [application, setApplication] = useState();
   //get category data
  const getCategory = () => {
    api.get('/content/getApplication').then((res) => {
      setApplication(res.data.data);
      setTimeout(() => {
        $('#example').DataTable({
          pagingType: 'full_numbers',
          pageLength: 20,
          processing: true,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'print',
              text: 'Print',
              className: 'shadow-none btn btn-primary',
            },
          ],
        });
      }, 1000);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  //  stucture of Category list view
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
      cell: () => (
        <Link to="/">
          {' '}
          <Icon.Edit3 />
        </Link>
      ),
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'Company Name',
 
    },
    {
      name: 'Company Representative Name ',
   
    },
    {
      name: 'Standard Applied',
    
    },
    {
      name: 'Type of Organization',
   
    },
    {
      name: 'Date of Application',
  
    },
    {
      name: 'Status',
  
    },
    
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />

        <CommonTable
          title="Application List"
          Button={
            <Link to="/Application">
              <Button color="primary" className="shadow-none">
                Add New
              </Button>
            </Link>
          }
        >
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {application &&
              application.map((element, index) => {
                return (
                  <tr key={element.application_id}>
                    <td>{index + 1}</td>
                    <td>
                    {' '}
                    <Link to={`/ApplicationEdit/${element.application_id}`}>
                      <Icon.Edit2 />
                    </Link>
                  </td>
                    <td>{element.company_name}</td>
                    <td>{element.company_rep_name}</td>
                    <td>{element.standard}</td>
                    <td>{element.organization_type}</td>
                    <td>{element.date_of_application}</td>
                    <td>{element.result==='PASS'?'PASS':element.gap_report_id?"Checklist Submitted":element.score_management_id?'Checklist Created':'Applied'}</td>
                  </tr>
                );
              })}
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};
export default ApplicationList;
