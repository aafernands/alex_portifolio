import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Greeting = () => {
  return (
    <Container 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0'
      }}
    >
      <Box 
        sx={{
          backgroundColor: '#fff',
          padding: '20px',
          border: '1px solid #ccc'
        }}
      >
        <Typography>

        HI THERE! I'M ALEX FERNANDES

        </Typography>
      </Box>
    </Container>
  );
};

export default Greeting;
