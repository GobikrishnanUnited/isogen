
/*eslint-disable*/
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
import message from '../../components/Message';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';
import Application from './Application';

const ISOCodes = () => {
  //Const Variables
  const [content, setContent] = useState(null);
  const [showApplication, setShowApplication] = useState(false);
  const [selectedISOCode, setSelectedISOCode] = useState(null);

  //getting data from content
  const getContent = () => {
    api
      .get('/isocode/getIsoCode')
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

  const handleApplicationClick = (isoCode) => {
    setSelectedISOCode(isoCode);
    setShowApplication(true);
  };

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
          <Icon.Edit3 />
        </Link>
      ),
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'ISO Code',
      selector: 'iso_code',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Category',
      selector: 'category_title',
      sortable: true,
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
    }
  ];

  return (
    <div className="MainDiv pt-xs-25">
      <BreadCrumbs />
      {showApplication && selectedISOCode ? (
        <Application isoCode={selectedISOCode} />
      ) : (
        <CommonTable
          title="ISO Code List"
          Button={
            <Link to="/ISOcodeDetail">
              <Button color="primary" className="shadow-none">
                Add New
              </Button>
            </Link>
          }
        >
          <thead>
            <tr>
              {Contentcolumns.map((cell) => (
                <td key={cell.name}>{cell.name}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {content &&
              content.map((element, index) => (
                <tr key={element.iso_code_id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/ISOcodeEdit/${element.iso_code_id}?tab=1`}>
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>{element.iso_code}</td>
                  <td>{element.title}</td>
                  <td>{element.category_title}</td>
                  <td>{element.status}</td>
                 
                </tr>
              ))}
          </tbody>
        </CommonTable>
      )}
    </div>
  );
};

export default ISOCodes;
