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
import { Link as ScrollLink } from "react-scroll";

const drawerWidth = "50%";

const MenuDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {["home", "about", "services", "projects", "contact"].map((sectionId) => (
          <ScrollLink
            key={sectionId}
            to={sectionId}
            smooth={true}
            duration={500}
            offset={-64} // Adjust according to AppBar height
            onClick={() => setMobileOpen(false)}
          >
            <Button fullWidth>{sectionId.toUpperCase()}</Button>
          </ScrollLink>
        ))}
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
          {["home", "about", "services", "projects", "contact"].map((sectionId) => (
            <Box key={sectionId} sx={{ mx: 2 }}>
              <ScrollLink
                to={sectionId}
                smooth={true}
                duration={500}
                offset={-64} // Adjust according to AppBar height
                className="MuiButtonBase-root MuiListItem-root MuiListItem-button"
              >
                <ListItemText primary={sectionId.toUpperCase()} />
              </ScrollLink>
            </Box>
          ))}
        </Box>
      </Hidden>
    </Box>
  );
};

export default MenuDrawer;
