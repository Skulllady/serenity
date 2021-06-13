import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PublishIcon from '@material-ui/icons/Publish';
import "../stylesheets/dashboard.css";

export default function UploadTransactions() {

  const { accountId } = useParams();

  const [selectedFile, setSelectedFile] = useState();
  const [isUploadConfirmed, setIsUploadConfirmed] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    debugger
    setIsUploadConfirmed(true);
  };

  const handleFileSubmission = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch(
      `/api/accounts/${accountId}/transactions/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      {/* component that has a file input with an upload button */}
      <label id="upload_label">
        <input type="file" accept=".csv" onChange={changeHandler} />
        <PublishIcon />
      </label>
      {isUploadConfirmed && (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
          <button onClick={handleFileSubmission}><CheckBoxIcon /> Confirm Upload </button>
        </div>
      )
      }
    </>
  )
}
