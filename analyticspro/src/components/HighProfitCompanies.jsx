import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { getHighProfitCompanies } from "../services/api";

function HighProfitCompanies() {
  const [companies, setCompanies] = useState(null);

  const fetchHighProfitCompanies = async () => {
    const response = await getHighProfitCompanies();
    setCompanies(response.data.companies);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">High Profit Companies</Typography>
        <Button variant="contained" color="primary" onClick={fetchHighProfitCompanies}>
          Load High Profit Companies
        </Button>
        {companies && (
          <ul>
            {companies.map((company, index) => (
              <li key={index}>{company}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export default HighProfitCompanies;
