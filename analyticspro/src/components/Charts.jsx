import React, { useState } from "react";
import { getHighestProfitByCountry } from "../services/api";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, PieChart, Pie, Cell, ScatterChart, Scatter, CartesianGrid } from "recharts";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

// Define chart colors
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Charts() {
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartType] = useState("bar");

  // Fetch highest profit by country
  const fetchChartData = async () => {
    const response = await getHighestProfitByCountry();
    const data = response.data.data;

    // Format data for charts
    const formattedData = data.map((item) => ({
      name: item.country,
      revenue: item.max_profit, // Real profit from API
    }));

    setChartData(formattedData);
  };

  return (
    <Card sx={{ backgroundColor: "#f5f5f5", textAlign: "center", padding: 3 }}>
      <CardContent>
        <Typography variant="h6">Country-Wise Highest Profit Charts</Typography>

        {/* Fetch Data Button */}
        <Button variant="contained" color="primary" onClick={fetchChartData} sx={{ mt: 2 }}>
          Load Data
        </Button>

        {/* Buttons to switch chart types */}
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Button variant="contained" onClick={() => setChartType("bar")} color="primary">
              Bar Chart
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => setChartType("pie")} color="secondary">
              Pie Chart
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => setChartType("scatter")} color="success">
              Scatter Chart
            </Button>
          </Grid>
        </Grid>

        {/* Display Charts */}
        <ResponsiveContainer width="100%" height={300}>
          {chartType === "bar" && (
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          )}

          {chartType === "pie" && (
            <PieChart>
              <Pie data={chartData} dataKey="revenue" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}

          {chartType === "scatter" && (
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="category" dataKey="name" />
              <YAxis type="number" dataKey="revenue" />
              <Tooltip />
              <Scatter data={chartData} fill="#FF8042" />
            </ScatterChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default Charts;
