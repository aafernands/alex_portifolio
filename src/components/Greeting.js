import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Greeting = () => {

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects"); // Replace with the actual id of your projects section
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // backgroundColor: "#f0f0f0",
      }}
    >
      <Box
        sx={{
          padding: "20px",
        }}
      >
        <Typography color="#25291C" variant="h1" component="div" sx={{ flexGrow: 1 }}>
          HI THERE! I'M ALEX FERNANDES
        </Typography>
        <br /> 
        <br />
        <br />
        <Typography variant="h6" component="p" gutterBottom>
              I'm a Web Developer student based in New Jersey, United States. I
              strive to build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </Typography>
            <br />
            <Button onClick={scrollToProjects} variant="contained" color="primary">
            PROJECTS
        </Button>
      </Box>
    </Container>
  );
};

export default Greeting;
