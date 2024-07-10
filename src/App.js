import React from "react";
import { Typography, Container, Button, Grid, Paper } from "@mui/material";
import MyAppBar from "./components/AppBar"; // Import the AppBar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

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
        <Grid container spacing={3} style={{ paddingTop: "20px" }}>
          <Grid
            item
            xs={12}
            style={{ backgroundColor: "#DADDD8", padding: "20px" }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              HI THERE! I'M ALEX FERNANDES
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              I'm a Web Developer student based in New Jersey, United States. I
              strive to build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </Typography>
            <Button variant="contained" color="primary">
              PROJECTS
            </Button>
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

              <Typography variant="h5" component="h2" gutterBottom>
                LANGUAGES{" "}
              </Typography>

              {/* <FontAwesomeIcon icon="fa-brands fa-html5" />
              <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
              <FontAwesomeIcon icon="fa-brands fa-js" />
              <FontAwesomeIcon icon="fa-brands fa-angular" /> */}
              <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '3rem', color: '#448FA3', padding: '0 20px' }} />
              <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: '3rem', color: '#448FA3', padding: '0 20px' }} />
              <FontAwesomeIcon icon={faJs} style={{ fontSize: '3rem', color: '#448FA3', padding: '0 20px' }} />
              <FontAwesomeIcon icon={faAngular} style={{ fontSize: '3rem', color: '#448FA3', padding: '0 20px' }}/>
              <FontAwesomeIcon icon={faReact} style={{ fontSize: '3rem', color: '#448FA3', padding: '0 20px' }}/>

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
