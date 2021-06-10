import React, { useEffect } from "react";
// import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import PublishIcon from '@material-ui/icons/Publish';
import "../stylesheets/dashboard.css";

export default function UploadTransactions() {
  return (
    <>
      <label id="upload_label">
        <input type="file" accept=".csv" />
        <PublishIcon id="upload_icon" />  Upload Transactions
      </label>
    </>
  )
}
