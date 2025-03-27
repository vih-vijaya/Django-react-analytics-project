// import React, { useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from "@mui/material";

// function ExcelTable({ data }) {
//   const [tableData, setTableData] = useState(data);

//   // Handle input change for editable fields
//   const handleInputChange = (e, rowIndex, field) => {
//     const newData = [...tableData];
//     newData[rowIndex][field] = e.target.value;
//     setTableData(newData);
//   };

//   // Delete row
//   const handleDeleteRow = (rowIndex) => {
//     const newData = tableData.filter((_, index) => index !== rowIndex);
//     setTableData(newData);
//   };

//   return (
//     <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {Object.keys(data[0] || {}).map((key) => (
//               <TableCell key={key}>{key}</TableCell>
//             ))}
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {tableData.map((row, rowIndex) => (
//             <TableRow key={rowIndex}>
//               {Object.keys(row).map((key) => (
//                 <TableCell key={key}>
//                   <TextField
//                     value={row[key]}
//                     onChange={(e) => handleInputChange(e, rowIndex, key)}
//                   />
//                 </TableCell>
//               ))}
//               <TableCell>
//                 <Button color="secondary" onClick={() => handleDeleteRow(rowIndex)}>Delete</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default ExcelTable;

import { useEffect, useState } from "react";

function ExcelTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  const [updatedValue, setUpdatedValue] = useState({});

  // Fetch data from backend
  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/business/business/data/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle Delete ✅ FIXED
  const handleDelete = (id) => {
    console.log("Deleting row with ID:", id);

    fetch(`http://127.0.0.1:8000/api/business/business/update_delete_company/${id}/`, {  
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setData((prevData) => prevData.filter((row) => row.id !== id)); // ✅ Update UI after delete
        } else {
          console.error("Failed to delete row");
        }
      })
      .catch((error) => console.error("Error deleting row:", error));
  };

  // Handle Edit Mode
  const handleEdit = (row) => {
    console.log("Editing row with ID:", row.id);
    setEditingRow(row.id);
    setUpdatedValue({ ...row });
  };

  // Handle Input Change in Edit Mode
  const handleInputChange = (e, field) => {
    setUpdatedValue({ ...updatedValue, [field]: e.target.value });
  };

  // Handle Save Update ✅ FIXED
  const handleSave = (id) => {
    console.log("Saving row with ID:", id, "New Data:", updatedValue);

    fetch(`http://127.0.0.1:8000/api/business/business/update_delete_company/${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedValue),
    })
      .then((response) => response.json())
      .then((updatedRow) => {
        setData((prevData) => prevData.map((row) => (row.id === id ? updatedRow : row))); // ✅ Update UI after update
        setEditingRow(null);
      })
      .catch((error) => console.error("Error updating row:", error));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;
  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <div style={{ padding: "20px" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} style={thStyle}>{key}</th>
            ))}
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {Object.keys(row).map((key) => (
                <td key={key} style={tdStyle}>
                  {editingRow === row.id ? (
                    <input
                      type="text"
                      value={updatedValue[key]}
                      onChange={(e) => handleInputChange(e, key)}
                      style={{ width: "100%" }}
                    />
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
              <td style={tdStyle}>
                {editingRow === row.id ? (
                  <>
                    <button onClick={() => handleSave(row.id)} style={btnStyle}>Save</button>
                    <button onClick={() => setEditingRow(null)} style={btnStyle}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(row)} style={btnStyle}>Edit</button>
                    <button onClick={() => handleDelete(row.id)} style={btnStyleDelete}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ✅ CSS Styling
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
  border: "1px solid black",
};

const thStyle = {
  backgroundColor: "#f2f2f2",
  padding: "12px",
  textAlign: "left",
  border: "1px solid black",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid black",
};

const btnStyle = {
  margin: "5px",
  padding: "5px 10px",
  cursor: "pointer",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

const btnStyleDelete = {
  ...btnStyle,
  backgroundColor: "red",
};

export default ExcelTable;
