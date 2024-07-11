import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../images/logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed">
        
        <Toolbar style={{backgroundColor: "#02182B"}}>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            ALEX FERNANDES
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
