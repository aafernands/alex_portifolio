import * as React from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Hidden,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = "100%";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const MenuDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <Button
          onClick={() => scrollToSection("home")}
        //   variant="contained"
        //   color="primary"
        >
          HOME
        </Button>
        < br/>
        <Button
          onClick={() => scrollToSection("about")}
        //   variant="contained"
        //   color="primary"
        >
          ABOUT
        </Button>
        < br/>

        <Button
          onClick={() => scrollToSection("projects")}
        //   variant="contained"
        //   color="primary"
        >
          PROJECTS
        </Button>
        < br/>

        <Button
          onClick={() => scrollToSection("contact")}
        //   variant="contained"
        //   color="primary"
        >
          CONTACT
        </Button>
      </List>
    </div>
  );

  return (
    <Box>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              marginTop: 7,
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Box sx={{ display: "flex" }}>
          {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((text) => (
            <Box key={text} sx={{ mx: 2 }}>
              <ListItem button onClick={() => scrollToSection(text.toLowerCase())}>
                <ListItemText primary={text} />
              </ListItem>
            </Box>
          ))}
        </Box>
      </Hidden>
    </Box>
  );
};

export default MenuDrawer;
