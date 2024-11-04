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
import Publish from '../../components/Publish';



const QuestionManagement = () => {
  //Const Variables
  const [question, setQuestion] = useState(null);

  //getting data from question
  const getQuestion = () => {
    api
      .get('/questionmanagement/getQuestion')
      .then((res) => {
        setQuestion(res.data.data);
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

    getQuestion();
  }, []);
  //Structure of Content List view
  const QuestionColumns = [
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

    // {
    //   name: 'Question ID',
    //   selector: 'title',
    //   sortable: true,
    //   grow: 0,
    //   wrap: true,
    // },
    // {
    //   name: 'ISO Code',
    //   selector: 'sort_order',
    //   sortable: true,
    //   grow: 0,
    // },
    {
      name: 'Question',
      selector: 'section_title',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Category',
      selector: 'category_title',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Published',
      selector: 'published',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    
  ];

  return (
    <div className="MainDiv  pt-xs-25">
      <BreadCrumbs />

      <CommonTable
        title="Question List"
        Button={
          <Link to="/QuestionManagementDetails">
            <Button color="primary" className="shadow-none">
              Add New
            </Button>
          </Link>
        }
      >
        <thead>
          <tr>
            {QuestionColumns.map((cell) => {
              return <td key={cell.name}>{cell.name}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {question &&
            question.map((element, index) => {
              return (
                <tr key={element.question_id}>
                  <td>{index + 1}</td>
                  <td>
                    {' '}
                    <Link to={`/QuestionManagementEdit/${element.question_id}`}>
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  {/* <td>{element.question_id}</td> */}
                  {/* <td>{element.iso_code}</td> */}
                  <td>{element.question}</td>
                  <td>{element.category_title}</td>
                  <td>
                      <Publish
                        idColumn="question_id"
                        tablename="question_management"
                        idValue={element.question_id.toString()}
                        value={element.published}
                      ></Publish>
                    </td>
                </tr>
              );
            })}
        </tbody>
      </CommonTable>
    </div>
  );
};
export default QuestionManagement;
