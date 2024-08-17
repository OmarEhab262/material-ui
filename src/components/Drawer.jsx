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
  useTheme,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const DrawerComponent = ({ setTriggerMode, triggerMode, setOpen, open }) => {
  const theme = useTheme();
  const location = useLocation();

  const handleChangeMode = () => {
    const newMode = theme.palette.mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    setTriggerMode(newMode);
  };

  const menuItems = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <Person2 />, path: "/profile" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
    { text: "Logout", icon: <Logout />, path: "/logout" },
  ];

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
      variant="temporary"
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
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                backgroundColor:
                  location.pathname === item.path
                    ? triggerMode === "light"
                      ? theme.palette.grey[300]
                      : theme.palette.grey[800]
                    : "inherit",
              }}
              onClick={() => setOpen(false)} // Close drawer when clicking on a menu item
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

DrawerComponent.propTypes = {
  setTriggerMode: PropTypes.func.isRequired,
  triggerMode: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default DrawerComponent;
