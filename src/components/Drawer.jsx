import { Create, Home, Logout, Person2, Settings } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const DrawerComponent = () => {
  return (
    <Drawer
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/create">
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/profile">
            <ListItemIcon>
              <Person2 />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/logout">
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default DrawerComponent;
