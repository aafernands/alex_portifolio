import * as React from "react";
// import { makeStyles } from '@mui/styles';
import { Container, Grid } from "@mui/material";
import ContactForm from "../pages/ContactForm";
import About from "../pages/About";
import Projects from "./Portfolio";
import Services from "./Services";
import Greeting from "../components/Greeting";

// const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3} style={{ padding: "20px" }}>
        <Grid item xs={12} id="home">
          <Greeting />
        </Grid>
        <Grid item xs={12} id="about">
          <About />
        </Grid>
        <Grid item xs={12} id="services">
          <Services />
        </Grid>
        <Grid item xs={12} id="projects">
          <Projects />
        </Grid>
        <Grid item xs={12} id="contact">
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
