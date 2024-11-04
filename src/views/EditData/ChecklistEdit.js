import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import message from '../../components/Message';
import api from '../../constants/api';
import ChecklistButton from '../../components/CategoryTable/ChecklistButton';
import ChecklistdetailComp from '../../components/CategoryTable/ChecklistdetailComp';


const CategoryEdit = () => {
  //All state variables
  const [checklist, setChecklist] = useState();
 
  const { id } = useParams();
  const navigate = useNavigate();
 

  // Button Save Apply Back List
  const applyChanges = () => {};
  const saveChanges = () => {
    if (checklist.title !== '') {
      navigate('/Checklist');
    }
  };
  const backToList = () => {
    navigate('/Checklist');
  };



  const handleInputs = (e) => {
    setChecklist({ ...checklist, [e.target.name]: e.target.value });
  };

  // Get Category By Id
  const ChecklistById = () => {
    api
      .post('/checklist/getChecklistById', { checklist_id: id })
      .then(({ data: { data } }) => {

        // Group questions into a single checklist object
        const groupedChecklist = {
          checklist_id: data[0].checklist_id,
          checklist_title: data[0].checklist_title,
          iso_code_title: data[0].iso_code_title,
          questions: data.map(item => ({
            question_title: item.question_title, 
            checklist_id: item.checklist_id
          }))
        };

        setChecklist(groupedChecklist);
      })
      .catch(() => {
        message('Cannot fetch checklist details', 'error');
      });
  };


  useEffect(() => {
    ChecklistById();

  }, [id]);

  return (
    <>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>

      {/* Button */}
      <ChecklistButton
        navigate={navigate}
        applyChanges={applyChanges}
        saveChanges={saveChanges}
        backToList={backToList}
        id={id}
      ></ChecklistButton>

      {/* More details*/}
      <ChecklistdetailComp
        checklist={checklist}
        handleInputs={handleInputs}
      ></ChecklistdetailComp>

    </>
  );
};
export default CategoryEdit;
