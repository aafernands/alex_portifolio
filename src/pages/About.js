import * as React from "react";
import { Typography, Container, Grid } from "@mui/material";
import Skills from "../components/Skills";
import './styles.css'


const About = () => {
  return (
    <Container
      sx={{
        color: "white",
        // bgcolor: "red",
        // margin: "0px",
      }}
    >
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography
          style={{ color: "white" }}
          id="about"
          variant="h2"
          component="h2"
          gutterBottom
        >
          ABOUT{" "}
        </Typography>
        <br />
        <hr />
        <br />
        <Typography
          style={{ color: "#bdbdbd", textAlign: "center" }}
          variant="p"
          component="p"
          gutterBottom
        >
          I am a passionate and dedicated web developer based in New Jersey,
          USA, with a strong foundation in front-end and back-end development
          technologies. With a background in Pharmacy and a relentless drive for
          learning, I transitioned into the dynamic world of web development to
          pursue my passion for creating innovative digital experiences.
        </Typography>
      </Grid>
      <Skills />
    </Container>
  );
};
export default About;
