import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { getHighRevenueCompanies } from "../services/api";

function HighRevenueCompanies() {
  const [companies, setCompanies] = useState(null);

  const fetchHighRevenueCompanies = async () => {
    const response = await getHighRevenueCompanies();
    setCompanies(response.data.companies);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">High Revenue Companies</Typography>
        <Button variant="contained" color="primary" onClick={fetchHighRevenueCompanies}>
          Load High Revenue Companies
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

export default HighRevenueCompanies;
