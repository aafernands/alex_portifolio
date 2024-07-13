import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid } from "@mui/material";
import ContactForm from "../pages/ContactForm";
import About from "../pages/About"; // Import the Greeting component
import Projects from "../pages/Projects"; // Import the Greeting component
import Greeting from "../components/Greeting"; // Import the Greeting component

const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  return (
    <Container>
      <Grid container id="home" spacing={3} style={{ padding: "20px" }}>
        <Grid item xs={12}>
          <Greeting />
        </Grid>
      </Grid>
      <About />
      <Projects />
      <ContactForm />
    </Container>
  );
};
export default Home;
