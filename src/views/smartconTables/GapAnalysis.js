import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import moment from 'moment';
import $ from 'jquery';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { Link } from 'react-router-dom';
import message from '../../components/Message';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';


const ISOCodes = () => {
  //Const Variables
  const [content, setContent] = useState(null);

  //getting data from content
  const getContent = () => {
    api
      .get('/GapAnalysis/getGapAnalysis')
      .then((res) => {
        setContent(res.data.data);
      })
      .catch(() => {
        message('Cannot get Content Data', 'error');
      });
  };
  useEffect(() => {
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

    getContent();
  }, []);
  //Structure of Content List view
  const Contentcolumns = [
    {
      name: '#',
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
      name: 'Title',
      selector: 'description',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Document',
  
    },
 
    {
      name: 'Date',
   
    },

 
  ];

  return (
    <div className="MainDiv  pt-xs-25">
      <BreadCrumbs />

      <CommonTable
        title="GapAnalysis List"
        Button={
          <Link to="/GapAnalysisDetail">
            <Button color="primary" className="shadow-none">
              Add New
            </Button>
          </Link>
        }
      >
        <thead>
          <tr>
            {Contentcolumns.map((cell) => {
              return <td key={cell.name}>{cell.name}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {content &&
            content.map((element, index) => {
              return (
                <tr key={element.iso_code_id}>
                  <td>{index + 1}</td>
                  <td>
                    {' '}
                    <Link to={`/GapAnalysisEdit/${element.gap_analysis_id}?tab=1`}>
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>{element.value}</td>
                  <td>{element.document_description}</td>
                  <td>{moment(element.released_date).format('YYYY-MM-DD')}</td>
                
                 
                </tr>
              );
            })}
        </tbody>
      </CommonTable>
    </div>
  );
};
export default ISOCodes;
