import React from "react";
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    toolbar: {
      minHeight: '36px', // Adjust the height as needed
      justifyContent: 'center', // Center the content horizontally
      bgcolor: "#02182B"
    },
  }));
  

export default function Footer() {
    const classes = useStyles();

    return (
      <AppBar position="static"  className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} F.N.D.S Labs. All rights reserved.
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    );
  


}


