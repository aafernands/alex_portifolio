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

const drawerWidth = "50%";

const scrollToSection = (sectionId, setMobileOpen) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = -64; // Adjust this value according to the height of your AppBar or any fixed header
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setMobileOpen(false); // Close the drawer
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
        <Button onClick={() => scrollToSection("home", setMobileOpen)}>
          HOME
        </Button>
        <br/>
        <Button onClick={() => scrollToSection("about", setMobileOpen)}>
          ABOUT
        </Button>
        <br/>
        <Button onClick={() => scrollToSection("services", setMobileOpen)}>
          SERVICES
        </Button>
        <br/>
        <Button onClick={() => scrollToSection("projects", setMobileOpen)}>
          PROJECTS
        </Button>
        <br/>
        <Button onClick={() => scrollToSection("contact", setMobileOpen)}>
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
          {["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"].map((text) => (
            <Box key={text} sx={{ mx: 2 }}>
              <ListItem button onClick={() => scrollToSection(text.toLowerCase(), setMobileOpen)}>
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
