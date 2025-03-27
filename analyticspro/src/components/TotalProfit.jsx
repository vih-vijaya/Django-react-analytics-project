import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { getTotalProfit } from "../services/api";

function TotalProfit() {
  const [totalProfit, setTotalProfit] = useState(null);

  const fetchTotalProfit = async () => {
    const response = await getTotalProfit();
    setTotalProfit(response.data.total_profit);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Total Profit</Typography>
        <Button variant="contained" color="primary" onClick={fetchTotalProfit}>
          Load Total Profit
        </Button>
        {totalProfit !== null && <Typography>${totalProfit}</Typography>}
      </CardContent>
    </Card>
  );
}

export default TotalProfit;
