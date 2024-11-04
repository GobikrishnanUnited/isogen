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
//import Publish from '../../components/Publish';
//import SortOrder from '../../components/SortOrder';

const Correlation = () => {
  //state variable
  const [category, setCategory] = useState();
   //get category data
  const getCategory = () => {
    api.get('/category/getCorrelations').then((res) => {
      setCategory(res.data.data);
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
      cell: () => <Icon.Edit2 />,
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'Software version',
      selector: 'software_version',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'File name&size',
      selector: 'file_name',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Storage Location',
      selector: 'storage_location',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Provider/Supplier',
      selector: 'provider',
      sortable: true,
      width: 'auto',
      grow: 2,
    },
    {
      name: 'Validation Test Runs',
      selector: 'validation_test',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: 'Validation Date',
      selector: 'published',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: 'Validated By',
      selector: 'validated_by',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: 'Comments',
      selector: 'comments',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />

        <CommonTable
          title="Correlation List"
          Button={<>
            <Link to="/CorrelationDetails">
              <Button color="primary" className="shadow-none">
                Add New
              </Button>
            </Link>
             <Button color="primary" className="shadow-none">
             Export
           </Button>
           </>
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
            {category &&
              category.map((element, index) => {
                return (
                  <tr key={element.correlation_id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/CorrelationEdit/${element.correlation_id}`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>{element.software_version}</td>
                    <td>
                    <td>{element.file_name}</td>
                    </td>
                    <td>{element.storage_location}</td>
                    <td>{element.provider}</td>
                    <td>{element.validation_test}</td>
                    <td>{element.validation_date}</td>
                    <td>{element.validated_by}</td>
                    <td>{element.comments}</td>
                    
                  </tr>
                );
              })}
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};
export default Correlation;
