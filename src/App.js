import "./App.css";
import University from "./components/University";
import { Box } from "@mui/material";
import React from "react";
import Mentor from "./components/Mentor";
import MentorAndAdvisor from "./components/MetorAndAdvisor";

const App = () => {
  return (
    <Box sx={{ ml: 10, mr: 10 }}>
      <University />
      <Mentor />
      <MentorAndAdvisor />
    </Box>
  );
};

export default App;
