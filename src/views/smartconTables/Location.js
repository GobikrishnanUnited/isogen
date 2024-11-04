import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import api from '../../constants/api';

const Location = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    api
      .get('/location/getLocation')
      .then((res) => {
        setLocation(res.data.data);
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
        setLoading(false);
        console(location);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const columns = [
    {
      name: 'id',
      selector: 'location_id',
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
      name: 'Location',
      selector: 'location_name',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Company',
      selector: 'company',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Full Address',
      selector: 'full_address',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Tags',
      selector: 'tags',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />

        <CommonTable
          loading={loading}
          title="Location List"
          Button={
            <Link to="/LocationDetails">
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
            {location &&
              location.map((element) => {
                return (
                  <tr key={element.location_id}>
                    <td>{element.location_id}</td>
                    <td>
                      <Link to={`/LocationEdit/${element.location_id}`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>{element.location_name}</td>
                    <td>{element.company}</td>
                    <td>{element.full_address}</td>
                    <td>{element.tags}</td>
                  </tr>
                );
              })}
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default Location;
