import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../images/logo.png";
import { makeStyles } from '@mui/styles';
import MenuDrawer from "./MenuDrawer";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  toolbar: {
    minHeight: "36px",
    justifyContent: "space-between", // Adjust this for spacing
    backgroundColor: "#02182B",
  },
  img: { height: "30px", marginRight: "10px" },
  title: { flexGrow: 1, textAlign: "center" },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scroll animation
    });

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.link} onClick={scrollToTop}>
        <img src={logo} alt="Logo" className={classes.img} />
            <Typography variant="h5" component="div" className={classes.title}>
              F.N.D.S DEV LABS
            </Typography>
          </Link>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
