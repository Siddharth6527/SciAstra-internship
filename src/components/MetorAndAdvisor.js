import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

import icon1 from "../assets/icon/icon1.jpg";
import icon2 from "../assets/icon/icon2.jpg";
import icon3 from "../assets/icon/icon3.jpg";

const MentorAndAdvisor = () => {
  // const metors = [
  //   {
  //     id: 1,
  //     name: "Heena",
  //     from: "Cambridge University",
  //     icon: icon1,
  //   },
  //   {
  //     id: 2,
  //     name: "Tushar",
  //     from: "Max Planck University",
  //     icon: icon2,
  //   },
  //   {
  //     id: 3,
  //     name: "Rohan",
  //     from: "Edinburg University",
  //     icon: icon3,
  //   },
  //   {
  //     id: 1,
  //     name: "Heena",
  //     from: "Cambridge University",
  //     icon: icon1,
  //   },
  //   {
  //     id: 2,
  //     name: "Tushar",
  //     from: "Max Planck University",
  //     icon: icon2,
  //   },
  //   {
  //     id: 3,
  //     name: "Rohan",
  //     from: "Edinburg University",
  //     icon: icon3,
  //   },
  // ];

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
        <Grid container spacing={20}>
          <Grid item xs={4}>
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
                src={icon3}
              />
              <Typography variant="h5" color="initial">
                Dr. Omkar
              </Typography>
              <Typography sx={{ width: 300 }} variant="h5" color="initial">
                Principal Project Scientist
              </Typography>
              <Typography variant="h5" color="initial">
                IIT Madras
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
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
                src={icon2}
              />
              <Typography variant="h5" color="initial">
                Akhil Tripathi
              </Typography>

              <Button sx={{ mt: 2 }} variant="contained">
                Message him now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
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
                src={icon1}
              />
              <Typography variant="h5" color="initial">
                Preeti Diwedi
              </Typography>
              <Button sx={{ mt: 2 }} variant="contained">
                Message him now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MentorAndAdvisor;
