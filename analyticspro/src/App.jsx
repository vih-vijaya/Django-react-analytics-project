import React from "react";
import { Container, Typography } from "@mui/material";
import FileUpload from "./components/FileUpload";
import Grid from "@mui/material/Grid";
import BusinessStats from "./components/BusinessStats";
import TotalProfit from "./components/TotalProfit";
import UsaCompanies from "./components/UsaCompanies";
import HighProfitCompanies from "./components/HighProfitCompanies";
import HighRevenueCompanies from "./components/HighRevenueCompanies";
import Dashboard from "./components/Dashboard";
import AddCompany from "./components/AddCompany";
import Charts from "./components/Charts";
import ExcelTable from "./components/ExcelTable";

function App() {
  return (
    <Container>
      <Typography variant="h4" 
      gutterBottom align="center"
      fontSize={"38px"}
      fontWeight={"bold"}
      >
        Business Dashboard
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6} marginBottom={"25px"}>
          <FileUpload />
          <ExcelTable />
          <BusinessStats />
          <TotalProfit />
          <UsaCompanies />
          <HighProfitCompanies />
          <HighRevenueCompanies />
          <Grid container justifyContent="center" marginBottom={"25px"}>
            <Charts />
          </Grid>
          <AddCompany />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
