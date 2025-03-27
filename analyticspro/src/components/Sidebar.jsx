import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import BusinessIcon from "@mui/icons-material/Business";

const Sidebar = ({ setActiveSection }) => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List>
        <ListItem button onClick={() => setActiveSection("dashboard")}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => setActiveSection("stats")}>
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary="Statistics" />
        </ListItem>
        <ListItem button onClick={() => setActiveSection("companies")}>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Companies" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
