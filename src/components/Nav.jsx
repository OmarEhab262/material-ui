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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Nav = ({ setOpen, open }) => {
  const handelBtn = () => {
    setOpen(!open); // Toggle the drawer open/close state
    console.log("open: ", open);
  };
  //   useEffect(() => {
  //     console.log(name?.card.length);
  //   }, [name]);

  const name = useSelector((state) => state.user.user);
  const value = useSelector((state) => state.user.card);
  const valuee = useSelector((state) => state.user.value);
  console.log("valuee: ", valuee);
  console.log("value: ", value);

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
            <Badge badgeContent={valuee} color="success">
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
