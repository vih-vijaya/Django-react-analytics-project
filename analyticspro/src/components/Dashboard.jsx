import React from "react";
import { Box, Container, Stack, Paper, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import BusinessStats from "./BusinessStats";
import TotalProfit from "./TotalProfit";
import UsaCompanies from "./UsaCompanies";
import HighProfitCompanies from "./HighProfitCompanies";
import HighRevenueCompanies from "./HighRevenueCompanies";
import AddCompany from "./AddCompany";
import FileUpload from "./FileUpload";
import ExcelTable from "./ExcelTable";

function Dashboard() {
  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #ffdde1)"
    }}>
      <Navbar />
      <Sidebar />
      
      <Container sx={{ 
        marginTop: 12, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        flexDirection: "column",
      }}>
        <Paper 
          elevation={10} 
          sx={{
            padding: 4,
            backgroundColor: "#ffffff",
            borderRadius: 4,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            width: "100%",
            maxWidth: "600px",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: "#d32f2f", 
              fontWeight: "bold", 
              marginBottom: 3 ,
              fontSize: 26, 
              textTransform: "uppercase"
            }}
          >
            Business Dashboard
          </Typography>

          <Stack spacing={3} alignItems="center" justifyContent="center" sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <FileUpload />
            <ExcelTable />
            <ColoredCard component={<BusinessStats />} title="Business Statistics" color="#f57c00" />
            <ColoredCard component={<TotalProfit />} title="Total Profit" color="#388e3c" />
            <ColoredCard component={<UsaCompanies />} title="USA Companies" color="#1976d2" />
            <ColoredCard component={<HighProfitCompanies />} title="High Profit Companies" color="#7b1fa2" />
            <ColoredCard component={<HighRevenueCompanies />} title="High Revenue Companies" color="#0288d1" />
            <ColoredCard component={<AddCompany />} title="Add Company" color="#c2185b" />
            <ColoredCard component={<Charts />} title="Chart" color="#c2185b" />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

/* Reusable Card Component for Adding Colors */
const ColoredCard = ({ component, title, color }) => {
  return (
    <Paper 
      elevation={6} 
      sx={{
        padding: 2,
        backgroundColor: color,
        color: "#fff",
        borderRadius: 2,
        width: "100%",
        textAlign: "center"
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        {title}
      </Typography>
      {component}
    </Paper>
  );
};

export default Dashboard;
