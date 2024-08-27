import * as React from "react";
// import { makeStyles } from '@mui/styles';
import { Container, Grid } from "@mui/material";
import ContactForm from "../pages/ContactForm";
import About from "../pages/About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Greeting from "../components/Greeting";
import ScrollArrow from "../components/ScrollArrow"; // Adjust the path as necessary

// const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  return (
    <Container  sx={{
      color: "white",
      width: "100%"
    }} >
      <Grid container spacing={3} style={{ margin: "0px" }}>
        <Grid item xs={12} id="home">
          <Greeting />
          <ScrollArrow />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            color: "white",
            bgcolor: "#06090a",
            width: "100%"
          }}
          id="about"
        >
          <About />
        </Grid>
        <Grid item xs={12} id="services">
          <Services />
        </Grid>
        <Grid item xs={12} id="projects">
          <Portfolio />
        </Grid>
        <Grid item xs={12} id="contact">
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
