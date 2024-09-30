import * as React from "react";
import { Typography, Container, Grid } from "@mui/material";
import Skills from "../components/Skills";
import "./styles.css";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <Container
      sx={{
        color: "white",
        bgcolor: "#140524",
        margin: "0px",
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
          <br />
          ABOUT ME{" "}
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
          I am a front-end web developer based in New Jersey, specializing in
          creating responsive, user-friendly websites. With experience as a
          freelancer, I've worked on a range of projects, helping businesses
          build and enhance their online presence. My expertise lies in HTML5,
          CSS3, JavaScript, and modern frameworks like React.js. I focus on
          delivering clean, efficient code and visually appealing designs. I am
          dedicated to creating intuitive user experiences and continuously
          refining my skills to stay current with the latest trends in web
          development.
        </Typography>
      </Grid>
      <Skills />
    </Container>
  );
};
export default About;
