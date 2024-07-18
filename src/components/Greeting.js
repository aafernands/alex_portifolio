import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Greeting = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

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
        // bgcolor: "#f0f0f0",
      }}
    >
      <Box
        sx={{
          // padding: "20px",
          textAlign: "center"
        }}
      >
        <Typography
          color="#25291C"
          variant="h1"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          HI THERE! I'M ALEX FERNANDES
        </Typography>
        <br />
        <br />
        <br />
        <Typography
          style={{ textAlign: "center"  }}
          variant="p"
          component="p"
          gutterBottom
        >
          I'm a Web Developer student based in New Jersey, United States. I
          strive to build immersive and beautiful web applications through
          carefully crafted code and user-centric design.
        </Typography>
        <br />
        <Button  onClick={scrollToProjects} variant="contained" color="primary">
          PROJECTS
        </Button>
      </Box>
    </Container>
  );
};

export default Greeting;
