import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect} from "react";
import axios from "axios";

const ExcelUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
 
//   Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };
 
//   // Handle file upload to backend
  const handleUpload = async () => {
    if (!file) {
      alert("Please select an Excel file to upload.");
      return;
    }
 
    const formData = new FormData();
    formData.append("office_file", file); // Ensure this matches your Django API field name
 
    try {
      const response = await axios.post("http://localhost:8000/api/business/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
 
      console.log("Upload Success:", response.data);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload file.");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="upload-file"
      />
      <label htmlFor="upload-file">
        <Button
          variant="contained"
          component="span"
          startIcon={<UploadFileIcon />}
          sx={{ mt: 2 }}
        >
          Choose File
        </Button>
      </label>
    </div>
  );
}