import * as React from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, Hidden, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = "100%";

export default function MenuDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
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
            "& .MuiDrawer-paper": { marginTop: 7, boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Box  sx={{ display: "flex" }}>
          {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((text) => (
            <Box key={text} sx={{ mx: 2 }}>
              <ListItem button>
                <ListItemText primary={text} />
              </ListItem>
            </Box>
          ))}
        </Box>
      </Hidden>
    </Box>
  );
}
