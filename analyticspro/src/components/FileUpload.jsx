import React, { useState } from "react";
import { Button } from "@mui/material";
import { uploadFile } from "../services/api";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("office_file", selectedFile);

    await uploadFile(formData);
    alert("File uploaded successfully!");
  };

  return (
    <div>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <Button variant="contained" color="primary" onClick={handleFileUpload}>
        Upload File
      </Button>
    </div>
  );
}

export default FileUpload;
