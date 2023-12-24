"use client"

import React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";

import { AppBar, Box, Chip, Toolbar, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Header = () => {

  const increaseToday = async ()  => {
    try {
      const response = await axios.put('/api/visit', {}, {
        withCredentials: true,  
      })
      return response.data
    } catch (error) {
    }
  }
  increaseToday()

  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <DashboardIcon
          sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
        />
        <Typography variant="h6" noWrap component="div" color="black">
          절대 디자인 보지마
        </Typography>
        <Box sx={{flex:1}} />
        <Chip sx={{marginRight:2}} label={"today : "} />
        <Chip sx={{marginRight:2}} label={"total : "} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
