import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import message from '../Message';
import api from '../../constants/api';

function ViewFileComponentV2({ moduleId, quesId,roomName,updateFile}) {
  ViewFileComponentV2.propTypes = {
    moduleId: PropTypes.string,
    quesId: PropTypes.string,
    roomName: PropTypes.string,
    updateFile:PropTypes.bool,
  };

  const tableStyle = {};

  const [getFile, setGetFile] = useState(null);

  const getFiles = () => {
    api
      .post('/file/getListOfFiles', { record_id: moduleId,sub_category_id:quesId, room_name: roomName })
      .then((res) => {
        setGetFile(res.data);
      })
      .catch(() => {
        message('Unable to fetch files', 'info');
      });
  };

  const deleteFile = (fileId) => {
     
        api
          .post('/file/deleteFile', { media_id: fileId })
          .then(() => {
            setGetFile((prevFiles) => prevFiles.filter((file) => file.media_id !== fileId));
          })
          .catch(() => {
            message('Unable to Delete Media', 'info');
          });
      }
      useEffect(() => {
        getFiles();
      }, [updateFile]); 

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr style={tableStyle}>
            <th style={tableStyle}>
             File Name
            </th>
            <th width="5%"></th>
          </tr>
        </thead>
        <tbody>
        {getFile ? (
          getFile.map((res) => {
            return (
                <tr key={res.media_id}>
                  <td style={tableStyle}>
                      <a
                        href={`https://isodemo.unitdtechnologies.com/storage/uploads/${res.name}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {res.name}
                      </a>
                  </td>
                  <td style={tableStyle}>
                    <button
                      type="button"
                      className="btn shadow-none"
                      onClick={() => {
                        deleteFile(res.media_id);
                      }}
                    >
                      <Icon.Trash2 />{' '}
                    </button>
                  </td>
                </tr>
            );
          })
        ) : (
          <tr><td><p>no files uploaded yet</p></td></tr>
        )}
        </tbody>
        
      </table>
    </>
  );
}

export default ViewFileComponentV2;
