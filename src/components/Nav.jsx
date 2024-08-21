import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axiosUser from "../config/axiosUser";

const Nav = ({ setOpen, open }) => {
  const userId = useSelector((state) => state.user.user?.id);
  const name = useSelector((state) => state.user.user);

  const handelBtn = () => {
    setOpen(!open); // Toggle the drawer open/close state
    console.log("open: ", open);
  };
  const fetchUserData = async (userId) => {
    const response = await axiosUser.get(`/users/${userId}`);
    return response.data;
  };
  const { data } = useQuery(["user", userId], () => fetchUserData(userId), {
    enabled: !!userId, // Fetch data only if userId is available
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const value = data?.card.length;
  return (
    <Box sx={{ ml: { xs: 0, md: "240px" } }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={handelBtn}
              size="small"
              sx={{
                mr: "10px",
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Link
              href="/"
              sx={{ flexGrow: 1 }}
              color="inherit"
              underline="none"
            >
              My expenses
            </Link>

            <Typography sx={{ mr: "10px" }}>{name.name}</Typography>
            <Badge badgeContent={value} color="success">
              <Avatar alt="User Avatar" src="/" />
            </Badge>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

Nav.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Nav;
