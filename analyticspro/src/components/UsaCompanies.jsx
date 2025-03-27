import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { getUsaCompanies } from "../services/api";

function UsaCompanies() {
  const [companies, setCompanies] = useState(null);

  const fetchUsaCompanies = async () => {
    const response = await getUsaCompanies();
    setCompanies(response.data.companies);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">USA Companies</Typography>
        <Button variant="contained" color="primary" onClick={fetchUsaCompanies}>
          Load USA Companies
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

export default UsaCompanies;
