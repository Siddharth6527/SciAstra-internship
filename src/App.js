import "./App.css";
import University from "./components/University";
import { Box, Typography } from "@mui/material";
import React from "react";
import Mentor from "./components/Mentor";
import MentorAndAdvisor from "./components/MetorAndAdvisor";

const App = () => {
  return (
    <Box sx={{ ml: 10, mr: 10 }}>
      <University />
      <Mentor />
      <MentorAndAdvisor />
      <Typography variant="h6" sx={{ mb: 2 }} color="#adb5bd">
        Made By Siddharth Verma
      </Typography>
    </Box>
  );
};

export default App;
