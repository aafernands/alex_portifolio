import React from "react";
import "./App.css";

import { Typography, Container, Button, Grid, Paper } from "@mui/material";
import MyAppBar from "./components/AppBar"; // Import the AppBar component
import Greeting from "./components/Greeting"; // Import the AppBar component
import Footer from "./components/Footer"; // Import the AppBar component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

function App() {
  return (
    <div>
      <MyAppBar />

      <Container>
        <Grid spacing={3} style={{ padding: "20px" }}>
          <Grid item xs={12}>
            {/* <Typography  variant="h1" component="h1" gutterBottom>
                HI THERE! I'M ALEX FERNANDES
              </Typography> */}
            <Greeting />
          </Grid>

          <Grid item xs={12}>
            <Paper style={{ padding: "20px" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                ABOUT{" "}
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                I am a passionate and dedicated web developer based in New
                Jersey, USA, with a strong foundation in front-end and back-end
                development technologies. With a background in Pharmacy and a
                relentless drive for learning, I transitioned into the dynamic
                world of web development to pursue my passion for creating
                innovative digital experiences.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                Skills{" "}
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
                I am enthusiastic about leveraging my technical skills and
                creativity to solve real-world challenges and deliver engaging
                digital solutions. Whether it's crafting elegant front-end
                designs or implementing complex back-end functionalities, I am
                committed to delivering high-quality results that exceed
                expectations.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline />
                  </ListItemIcon>
                  <strong>Front-end Development: </strong> Proficient in HTML5,
                  CSS3, JavaScript, and various front-end frameworks like
                  React.js and Bootstrap.
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline />
                  </ListItemIcon>{" "}
                  <strong>Back-end Development: </strong>Experienced in Node.js,
                  Express, MongoDB, and MySQL for building robust server-side
                  applications.{" "}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline />
                  </ListItemIcon>{" "}
                  <strong>Full Stack Proficiency:</strong>
                  Skilled in integrating front-end and back-end technologies to
                  develop scalable and responsive web applications.{" "}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline />
                  </ListItemIcon>{" "}
                  <strong>Version Control and Deployment:</strong>
                  Familiar with Git for version control and deploying
                  applications using platforms like GitHub and Heroku.{" "}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline />
                  </ListItemIcon>{" "}
                  <strong> UI/UX Design Principles: </strong>
                  Knowledgeable about designing intuitive user interfaces and
                  enhancing user experience through responsive design and
                  accessibility practices.{" "}
                </ListItem>
              </List>
              <br />{" "}
              <Typography variant="h5" component="h2" gutterBottom>
                Languages{" "}
              </Typography>
              {/* <FontAwesomeIcon icon="fa-brands fa-html5" />
              <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
              <FontAwesomeIcon icon="fa-brands fa-js" />
              <FontAwesomeIcon icon="fa-brands fa-angular" /> */}
              <FontAwesomeIcon
                icon={faHtml5}
                style={{
                  fontSize: "3rem",
                  color: "#448FA3",
                  padding: "0 20px",
                }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{
                  fontSize: "3rem",
                  color: "#448FA3",
                  padding: "0 20px",
                }}
              />
              <FontAwesomeIcon
                icon={faJs}
                style={{
                  fontSize: "3rem",
                  color: "#448FA3",
                  padding: "0 20px",
                }}
              />
              <FontAwesomeIcon
                icon={faAngular}
                style={{
                  fontSize: "3rem",
                  color: "#448FA3",
                  padding: "0 20px",
                }}
              />
              <FontAwesomeIcon
                icon={faReact}
                style={{
                  fontSize: "3rem",
                  color: "#448FA3",
                  padding: "0 20px",
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper style={{ padding: "20px" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                PROJECTS{" "}
              </Typography>
              <Typography
                className="questrial-regular"
                variant="body1"
                component="p"
                gutterBottom
              >
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
      <Footer />

    </div>
    
  );
}

export default App;
