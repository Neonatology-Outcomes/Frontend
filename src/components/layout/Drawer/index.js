import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styles } from './styles';
import logo from '../../../assets/img/logo.png';

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
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <img src={logo} alt="Logo" style={{ width: '100px' }} />
        </Box>
        <Divider />
        <List>
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="/" component="a" underline="none" style={{ ...styles.link }}>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="rules" component="a" underline="none" style={{ ...styles.link }}>
              <ListItemText primary="Rules" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="todo" component="a" underline="none" style={{ ...styles.link }}>
              <ListItemText primary="To Do" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="login" component="a" underline="none" style={{ ...styles.link }}>
              <ListItemText primary="Login" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="signup" component="a" underline="none" style={{ ...styles.link }}>
              <ListItemText primary="Sign Up" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem onClick={toggleDrawer(false)}>
            <Link href="assessment" component="a" underline="none" style={{ ...styles.link }}>
              <ListItemText primary="Assessment" />
            </Link>
          </ListItem>
          <Divider />
          {/* Add more ListItem components for additional menu items */}
        </List>
      </Drawer>
    </>
  );
}

export default DrawerComponent;
