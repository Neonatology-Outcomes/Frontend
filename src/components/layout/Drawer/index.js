import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, Link, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { styles } from "./styles";

function DrawerComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Neonatology Outcomes
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="/" component="a" underline="none" style={{...styles.link}}>
              <ListItemText primary="Home" />
            </Link>
            
          </ListItem>
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="rules" component="a" underline="none" style={{...styles.link}}>
              <ListItemText primary="Rules" />
            </Link>
            
          </ListItem>
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="#/todo" component="a" underline="none" style={{...styles.link}}>
              <ListItemText primary="To DO" />
            </Link>
            
          </ListItem>
          {/* Add more ListItem components for additional menu items */}
        </List>
      </Drawer>
    </>
  );
}

  export default DrawerComponent;