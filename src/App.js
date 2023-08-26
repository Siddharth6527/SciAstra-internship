import "./App.css";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import UniversityCard from "./components/UnivesityCard";
import { Grid } from "@mui/material";
import CambridgeIMG from "./assets/img/Cambridge.jpeg";
import HarwardIMG from "../src/assets/img/Harward.jpeg";
import UniversityOfCaliforniaIMG from "../src/assets/img/UniversityOfCalifornia.jpeg";
import EthZurichIMG from "../src/assets/img/EthZurich.jpeg";
import MaxPlanckIMG from "../src/assets/img/MaxPlanck.jpeg";
import EdinburgIMG from "../src/assets/img/Edinburg.jpeg";

const style = {
  maxWidth: "auto",
  backgroundColor: "#f1f3f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

function App() {
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
    <Box sx={{ ml: 10, mr: 10 }}>
      <Box
        sx={{ mb: 10 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={style}>
          <Typography variant="h1" color="#343a40" sx={{ mb: 10 }}>
            TEAM PAGE
          </Typography>
          <Typography variant="h3" color="#343a40">
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
            <Typography sx={{ mt: 20 }} variant="h2" color="initial">
              ...... and so on.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
