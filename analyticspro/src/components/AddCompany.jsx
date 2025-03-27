import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { addCompany } from "../services/api";

function AddCompany({ refreshData }) {
  const [company, setCompany] = useState({
    name: "",
    revenue: "",
    profit: "",
    employees: "",
    country: "",
  });

  const handleAddCompany = async () => {
    await addCompany(company);
    alert("Company added successfully!");
    refreshData();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Add a New Company</Typography>
        {Object.keys(company).map((field) => (
          <TextField
            key={field}
            label={field}
            fullWidth
            margin="normal"
            value={company[field]}
            onChange={(e) => setCompany({ ...company, [field]: e.target.value })}
          />
        ))}
        <Button variant="contained" color="primary" onClick={handleAddCompany}>
          Add Company
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddCompany;
