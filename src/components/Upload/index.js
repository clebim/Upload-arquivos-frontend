import React from 'react';
import Dropzone from 'react-dropzone';
import './styles.css';



function Upload(props) {

    const onUpload = props.onUpload;

  return (
    <div className="Upload">
        <Dropzone accept="image/*" onDropAccepted={onUpload}>
            { ({ getRootProps, getInputProps, isDragActive}) => (
                <div className="dropcontainer"  {...getRootProps()} isDragActive={isDragActive}>
                    <div className="uploadmessage" >
                        <input {...getInputProps()}>
                        </input>
                    {
                        isDragActive ?
                        <p>solte seus arquivos aqui ...</p> :
                        <p>Arraste seus arquivos aqui</p>
                    }
                    </div>
                
                </div>
            )}
        </Dropzone>
    </div>
  );
}

export default Upload;
