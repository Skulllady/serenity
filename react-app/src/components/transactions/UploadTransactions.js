import React, { useEffect, useState } from "react";
// import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import PublishIcon from '@material-ui/icons/Publish';
import "../stylesheets/dashboard.css";

export default function UploadTransactions() {
  const [selectedFile, setSelectedFile] = useState();
  const [isUploadConfirmed, setIsUploadConfirmed] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append('File', selectedFile);

    fetch(
      'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
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
};

return (
  <>
    {/* component that has a file input with an upload button */}
    <label id="upload_label">
      <input type="file" accept=".csv" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <PublishIcon id="upload_icon" onClick={handleSubmission} /> Upload Transactions
      </label>
  </>
)
}
