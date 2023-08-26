import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import icon1 from "../assets/icon/icon1.jpg";
import icon2 from "../assets/icon/icon2.jpg";
import icon3 from "../assets/icon/icon3.jpg";

const MentorAndAdvisor = () => {
  return (
    <Box
      sx={{ mb: 10, ml: 10, mr: 10 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
    >
      <Typography
        variant="h2"
        color="initial"
        sx={{ mb: 10, justifyContent: "flex-start" }}
      >
        Mentor And Advisor
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

              <Button sx={{ mt: 2, background: "#663dff" }} variant="contained">
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
              <Button sx={{ mt: 2, background: "#663dff" }} variant="contained">
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
