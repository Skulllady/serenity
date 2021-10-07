import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PublishIcon from '@material-ui/icons/Publish';
import { displayTransactions } from '../../store/transaction';
import "../stylesheets/dashboard.css";

export default function UploadTransactions() {

  const { accountId } = useParams();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [isFileChosen, setIsFileChosen] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFileChosen(true);
  };

  const fileSubmission = async (e) => {
    e.preventDefault();
    await uploadFile();
    setIsFileChosen(false);
    // debugger
    const action = displayTransactions(accountId)
    dispatch(action)
  }
  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    return fetch(
      `/api/accounts/${accountId}/transactions/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )
  };

  return (
    <>
      {/* component that has a file input with an upload button */}
      <label className="cursor-pointer" id="upload_label" style={{ float: "right" }}>
        <input type="file" accept=".csv" onChange={changeHandler} />
        <PublishIcon className="material-ui-icon" />
      </label>
      {isFileChosen && (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
          <button onClick={fileSubmission}><CheckBoxIcon /> Confirm Upload </button>
        </div>
      )
      }
    </>
  )
}
