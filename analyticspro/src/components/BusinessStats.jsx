import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { getBusinessStats } from "../services/api";

function BusinessStats() {
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    const response = await getBusinessStats();
    setStats(response.data);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Business Statistics</Typography>
        <Button variant="contained" color="primary" onClick={fetchStats}>
          Load Statistics
        </Button>
        {stats && (
          <>
            <Typography>Mean: {stats.mean.join(", ")}</Typography>
            <Typography>Median: {stats.median.join(", ")}</Typography>
            <Typography>Std Dev: {stats.std_deviation.join(", ")}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default BusinessStats;
