import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import message from '../../components/Message';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const Checklist = () => {
  // State to store checklists with question count
  const [checklistData, setChecklistData] = useState([]);

  // Function to get checklist data from the API
  const getChecklist = () => {
    api
      .get('/checklist/getChecklist')
      .then((res) => {
        const checklists = res.data.data; // API response with checklists

        // Set the checklist data
        setChecklistData(checklists);
      })
      .catch(() => {
        message('Cannot get Content Data', 'error');
      });
  };

  useEffect(() => {
    getChecklist();
  }, []);

  return (
    <div className="MainDiv pt-xs-25">
      <BreadCrumbs />
      <CommonTable
        title="Check List"
        Button={
          <Link to="/ChecklistDetails">
            <Button color="primary" className="shadow-none">
              Add New
            </Button>
          </Link>
        }
      >
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>S.No</th> {/* Narrow the width for serial number */}
              <th style={{ width: '5%' }}>Edit</th> {/* Narrow the width for the edit button */}
              <th>Checklist Title</th> {/* Keep title width flexible */}
            </tr>
          </thead>
          <tbody>
            {checklistData.length === 0 ? (
              <tr>
                <td colSpan="3">No checklists available</td>
              </tr>
            ) : (
              checklistData.map((checklist, index) => (
                <tr key={checklist.checklist_id}>
                  <td>{index + 1}</td> {/* Serial number */}
                  <td>
                    <Link to={`/ChecklistEdit/${checklist.checklist_id}`}>
                      <Icon.Edit2 size={16} /> {/* Smaller edit icon */}
                    </Link>
                  </td>
                  <td>
                    <strong>{checklist.checklist_title}</strong> {/* Checklist title */}
                    <p style={{ margin: '0', fontSize: '0.9rem', color: '#555' }}>
                      {checklist.question_count} questions {/* Question count underneath */}
                    </p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </CommonTable>
    </div>
  );
};

export default Checklist;
