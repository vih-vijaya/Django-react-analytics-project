import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <Typography variant="h6">Business Analytics Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
