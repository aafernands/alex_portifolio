import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "../images/logo.png";
import { makeStyles } from "@material-ui/styles";
import MenuDrawer from "./MenuDrawer";

const useStyles = makeStyles(() => ({
  toolbar: {
    minHeight: "36px",
    justifyContent: "space-between", // Adjust this for spacing
    backgroundColor: "#02182B",
  },
  img: { height: "30px", marginRight: "10px" },
  title: { flexGrow: 1, textAlign: "center" },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="Logo" className={classes.img} />
          <Typography variant="h5" component="div" className={classes.title}>
            F.N.D.S Labs
          </Typography>                <MenuDrawer />

        </Toolbar>
      </AppBar>

    </Box>
  );
}
