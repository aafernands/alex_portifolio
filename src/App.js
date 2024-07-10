import React from "react";
import { Typography, Container, Button, Grid, Paper } from "@mui/material";
import MyAppBar from "./components/AppBar"; // Import the AppBar component
import { useRef } from 'react';

function App() {
  return (
    <div>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar> */}

      <MyAppBar />

      <Container>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={12}>
            <Paper style={{ backgroundColor: "#DADDD8", padding: "20px" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                HI THERE! I'M ALEX FERNANDES
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                I'm a Web Developer student based in New Jersey, United States.
                I strive to build immersive and beautiful web applications
                through carefully crafted code and user-centric design.
              </Typography>
              <Button variant="contained" color="primary">
                PROJECTS
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper style={{ padding: "20px" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                ABOUT{" "}
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                I'm a Web Developer student based in New Jersey, United States.
                I strive to build immersive and beautiful web applications
                through carefully crafted code and user-centric design.
              </Typography>
             
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper style={{ padding: "20px" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                PROJECTS{" "}
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                I'm a Web Developer student based in New Jersey, United States.
                I strive to build immersive and beautiful web applications
                through carefully crafted code and user-centric design.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper style={{ padding: "20px" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                CONTACT{" "}
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                I'm a Web Developer student based in New Jersey, United States.
                I strive to build immersive and beautiful web applications
                through carefully crafted code and user-centric design.
              </Typography>
              <Button variant="contained" color="primary">
                PROJECTS
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
