import * as React from "react";
import { makeStyles } from '@mui/styles';
import { Typography, Container, Grid } from "@mui/material";
import Projects from "../Portifolio/Projects";

const useStyles = makeStyles((theme) => ({

  
}));

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
				HERE YOU CAN HAVE A GLIMPSE OF MY WORK
		
      </Typography>

      <Projects />
    </Grid>
  );
}
export default Portfolio;
