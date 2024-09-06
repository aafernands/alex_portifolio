import * as React from "react";
import { Typography, Grid } from "@mui/material";
import Projects from "../components/Projects/Projects";

function Portfolio() {
  return (
    <Grid item xs={12}>
      <Typography
        id="projects"
        style={{ color: "#06090A" }}
        variant="h2"
        component="h2"
        gutterBottom
      >
        PROJECTS{" "}
      </Typography>
      <br />
      <hr />
      <br />
      <Typography
        className="questrial-regular"
        variant="p"
        component="p"
        gutterBottom
      >
        Take a look at the projects I've worked on—each one is a reflection of
        my dedication to turning ideas into something real and meaningful. From
        concept to completion, I've put my heart into crafting solutions that
        not only solve problems but also spark creativity and drive success.
        This version is warmer, more conversational, and fits better with the
        flow of an SPA. Let me know what you think!
      </Typography>
      <Projects />
    </Grid>
  );
}
export default Portfolio;
