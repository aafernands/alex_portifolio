import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../images/logo.png';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles(() => ({
   
  toolbar: {
    minHeight: '36px', // Adjust the height as needed
    justifyContent: 'center', // Center the content horizontally
    backgroundColor: "#02182B"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" className={classes.appBar}>
        
      <Toolbar className={classes.toolbar}>
      <img src={logo} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            F.N.D.S Labs
          </Typography>
          {/* <Button color="inherit">Login</Button>{" "} */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
