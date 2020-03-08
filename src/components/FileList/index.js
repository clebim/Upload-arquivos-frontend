
import React from 'react';
//import CircularProgressbar from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import './styles.css'


function FileList({files}) {


    return (
      <div className="Container">
         {files.map(uploadedfile => (
              <li key={uploadedfile.id}>
              <div className="fileInfo">
                <div>
                    <strong>{uploadedfile.name}</strong>
                    <span>{uploadedfile.readableSize}</span>
                    { !!uploadedfile.url && (
                        <button onClick={() => {}}>Excluir</button>
                    )}
                </div>
                </div>

                <div>
                    
                    {uploadedfile.url && (
                        <a
                            href={uploadedfile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <MdLink style={{ marginRight: 8}} size={24} color="#222" />
                    </a>
                    )}

                    {uploadedfile.uploaded && <MdCheckCircle size={24} color="#78e5d5"></MdCheckCircle>}
                    {uploadedfile.error &&  <MdError size={24} color="#e57878"></MdError>}

                </div>

          </li>
         ))}
       </div>
    );
  }
  
  export default FileList;
  