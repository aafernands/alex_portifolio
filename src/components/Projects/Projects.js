import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import password from "./Password.png"; // Import the Thumbnail component  my-portfolio\src\images\Books.png
import quiz from "./Quiz.png"; // Import the Thumbnail component
import weather from "./Weather.png"; // Import the Thumbnail component
import scheduler from "./Scheduler.png"; // Import the Thumbnail component
import WowRealtor from "./WowRealtor.png"; // Import the Thumbnail component
import books from "./Books.png"; // Import the Thumbnail component
import Container from "@mui/material/Container";

import { makeStyles } from "@mui/styles";
import "./Projects.css";

import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    marging: "20px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "",
    boxShadow: "2.5px 5px 4px #fff",
    color: "white",
  },
  root: {
    backgroundColor: "red",
  },
}));

function Projects(props) {
  const classes = useStyles();

  return (
    // Render a Thumbnail component
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid
            style={{
              padding: 30,
              backgroundColor: "transparent",
              alignContent: "flex-end",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item md={4}>
              <Thumbnail
                className={classes.thumbnail}
                linkLive="https://aafernands.github.io/password-generator/"
                linkGithub="https://github.com/aafernands/password-generator"
                image={password}
                title="Password Generator"
                description="Prevent a threat to security by obtaining a secure and random password with this password generator."
              />
            </Grid>
            <Grid item md={4}>
              <Thumbnail
                className={classes.thumbnail}
                linkLive="https://aafernands.github.io/quiz-game/"
                linkGithub="https://github.com/aafernands/quiz-game"
                image={quiz}
                title="Quiz Game"
                description="Answer this fun trivia multiple questions quiz within the time limit. Incorrect answers wil penalize your socre by 10 seconds."
              />
            </Grid>
            <Grid item md={4}>
              <Thumbnail
                className={classes.thumbnail}
                linkLive="https://aafernands.github.io/weatherApp/"
                linkGithub="https://github.com/aafernands/weatherApp"
                image={weather}
                title="Weather Dashboard"
                description="Search for a city to get weather information like hunidity, wind speed, UV index and a 5 day weather forecast"
              />
            </Grid>
            <Grid item md={4}>
              <Thumbnail
                className={classes.thumbnail}
                linkLive="https://aafernands.github.io/work-day-scheduler/"
                linkGithub="https://github.com/aafernands/work-day-scheduler/"
                image={scheduler}
                title="Note Taker"
                description="Organize your daily tasks with this work day scheduller app. Save the notes and on specific time."
              />
            </Grid>
            <Grid item md={4}>
              <Thumbnail
                className={classes.thumbnail}
                linkLive="https://wow-realtor-app.herokuapp.com/"
                linkGithub="https://github.com/aafernands/RealtorApp"
                image={WowRealtor}
                title="Wow Realtor App"
                description="Search for properties and save them on your favorites lists and more."
              />
            </Grid>
            <Grid item md={4}>
              <Thumbnail
                className={classes.thumbnail}
                linkLive="https://alex-books-search-app.herokuapp.com/"
                linkGithub="https://github.com/aafernands/google-books"
                image={books}
                title="Google Books Search"
                description="Search the world's most comprehensive index of full-text books."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
