import * as React from "react";
import { Typography, Grid } from "@mui/material";
import Projects from "../components/Projects/Projects";

function Portfolio() {


  return (
    <Grid item xs={12}>
      <Typography id="projects" variant="h4" component="h2" gutterBottom>
        PROJECTS{" "}
      </Typography>
      <Typography
        className="questrial-regular"
        variant="p"
        component="p"
        gutterBottom
      >
Welcome to our Projects page, where we showcase the innovative and impactful work we've accomplished. Each project reflects our commitment to excellence and our passion for technology. Explore our portfolio to see how we've transformed ideas into reality, delivering solutions that drive success and inspire creativity.
      </Typography>

      <Projects />
    </Grid>
  );
}
export default Portfolio;
