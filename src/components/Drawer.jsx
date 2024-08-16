import {
  Brightness3,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
  WbSunny,
} from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
DrawerComponent.propTypes = {
  setTriggerMode: PropTypes.func.isRequired,
  triggerMode: PropTypes.string.isRequired,
};
const DrawerComponent = ({ setTriggerMode, triggerMode }) => {
  const handleChangeMode = () => {
    if (triggerMode === "light") {
      setTriggerMode("dark");
    } else {
      setTriggerMode("light");
    }
  };

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
      <div className="flex justify-center items-center h-[100px]">
        {triggerMode === "light" ? (
          <WbSunny
            className="cursor-pointer"
            fontSize="large"
            sx={{ color: orange[400] }}
            onClick={handleChangeMode}
          />
        ) : (
          <Brightness3
            className="cursor-pointer"
            fontSize="large"
            onClick={handleChangeMode}
          />
        )}
      </div>

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
