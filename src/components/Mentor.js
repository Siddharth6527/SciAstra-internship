import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import icon1 from "../assets/icon/icon1.jpg";
import icon2 from "../assets/icon/icon2.jpg";
import icon3 from "../assets/icon/icon3.jpg";

const Mentor = () => {
  const mentors = [
    {
      id: 1,
      name: "Heena",
      from: "Cambridge University",
      icon: icon1,
    },
    {
      id: 2,
      name: "Tushar",
      from: "Max Planck University",
      icon: icon2,
    },
    {
      id: 3,
      name: "Rohan",
      from: "Edinburg University",
      icon: icon3,
    },
    {
      id: 4,
      name: "Heena",
      from: "Cambridge University",
      icon: icon1,
    },
    {
      id: 5,
      name: "Tushar",
      from: "Max Planck University",
      icon: icon2,
    },
    {
      id: 6,
      name: "Rohan",
      from: "Edinburg University",
      icon: icon3,
    },
  ];

  return (
    <Box
      sx={{ mb: 10, ml: 10, mr: 10 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
    >
      <Typography variant="h2" color="initial" sx={{ mb: 10 }}>
        Meet Your Mentors
      </Typography>
      <Box>
        <Grid container spacing={10}>
          {mentors.map((item) => (
            <Grid item xs={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
              >
                <Box
                  component="img"
                  sx={{
                    height: 200,
                    mb: 5,
                  }}
                  alt="The house from the offer."
                  src={item.icon}
                />
                <Typography variant="h5" color="initial">
                  {item.name}
                </Typography>
                <Typography variant="h5" color="initial">
                  {item.from}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Mentor;
