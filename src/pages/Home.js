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
      <Grid container id="home" spacing={3} style={{ padding: "20px" }}>
        <Grid item xs={12}>
          <Greeting />
        </Grid>
      </Grid>
      <About />
      <Services />
      <Projects />
      <ContactForm />
    </Container>
  );
};
export default Home;
