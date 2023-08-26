import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import UniversityCard from "../components/UnivesityCard";
import { Grid } from "@mui/material";
import CambridgeIMG from "../assets/img/Cambridge.jpeg";
import HarwardIMG from "../assets/img/Harward.jpeg";
import UniversityOfCaliforniaIMG from "../assets/img/UniversityOfCalifornia.jpeg";
import EthZurichIMG from "../assets/img/EthZurich.jpeg";
import MaxPlanckIMG from "../assets/img/MaxPlanck.jpeg";
import EdinburgIMG from "../assets/img/Edinburg.jpeg";

const style = {
  Width: "auto",
  backgroundColor: "#f1f3f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: 5,
  borderRadius: 5,
  mt: 4,
};

const University = () => {
  const universities = [
    {
      id: 1,
      name: "Cambridge University",
      image: CambridgeIMG,
      text: "The mission of the University of Cambridge is to contribute to society through education, learning and research at the highest international level.",
    },
    {
      id: 2,
      name: "Harward University",
      image: HarwardIMG,
      text: "The mission of the University of Cambridge is to contribute to society through education, learning and research at the highest international level.",
    },
    {
      id: 3,
      name: "University Of California",
      image: UniversityOfCaliforniaIMG,
      text: "The mission of the University of Cambridge is to contribute to society through education, learning and research at the highest international level.",
    },
    {
      id: 4,
      name: "Eth Zurich",
      image: EthZurichIMG,
      text: "The mission of the University of Cambridge is to contribute to society through education, learning and research at the highest international level.",
    },
    {
      id: 5,
      name: "Max Planck University",
      image: MaxPlanckIMG,
      text: "The mission of the University of Cambridge is to contribute to society through education, learning and research at the highest international level.",
    },
    {
      id: 6,
      name: "Edinburg University",
      image: EdinburgIMG,
      text: "The mission of the University of Cambridge is to contribute to society through education, learning and research at the highest international level.",
    },
  ];

  return (
    <Box sx={{ ml: 10, mr: 10, mb: 20 }}>
      <Box
        sx={{ mb: 10 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={style}>
          <Typography
            variant="h1"
            color="initial"
            sx={{ mb: 10, mt: 5, color: "#6741d9" }}
          >
            Team Page
          </Typography>
          <Typography variant="h5" color="#343a40">
            Learn from Scientists, research scholars from the Top Institutes in
            the World.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {universities.map((item) => (
            <Grid item xs={3}>
              {" "}
              <UniversityCard data={item} />
            </Grid>
          ))}
          <Grid item xs={6}>
            <Typography sx={{ mt: 20 }} variant="h2" color="#663dff">
              ...... and so on.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default University;
