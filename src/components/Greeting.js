import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Greeting = () => {
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
        <Button variant="contained" color="primary" style={{alignItems: "center"}}>
          PROJECTS
        </Button>
      </Box>
    </Container>
  );
};

export default Greeting;
