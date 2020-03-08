import React, { useState } from 'react';
import Upload from './components/Upload/index'
import { uniqueId } from 'lodash'
import filesize from 'filesize';

import FileList from './components/FileList/index';
import api from './services/api';


import './global.css';
import './styles.css'



function App() {

  const [ uploadFiles, setuploadFiles] = useState([]);

  function handleUpload (files){
    
    const uploadedFiles = files.map(file => ({
        file,
        id: uniqueId(),
        name: file.name,
        readableSize: filesize(file.size),
        uploaded: false,
        error: false,
        url: null,
      }));
      
    setuploadFiles(uploadFiles.concat(uploadedFiles));

    console.log(uploadFiles);
      
    uploadedFiles.forEach(processUpload)

  };


  function processUpload(uploadedFile){

    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    api.post('/posts', data).then(response => {
      updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url
      })
    }).catch(() => {
      updateFile(uploadedFile.id, {
        error: true,
      })
    })

  };
  
  function updateFile(id, data) {
  
  }
  

  return (
    
    <div className="container">
      <div className="content">
        <Upload onUpload={handleUpload}></Upload>
        { !! uploadFiles.length && (
          <FileList files={uploadFiles}></FileList>
        )}
      </div>
    </div>
  );
};

export default App;
