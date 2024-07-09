import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Grid, Paper } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Welcome to My Portfolio
              </Typography>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
