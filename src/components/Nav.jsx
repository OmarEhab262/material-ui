import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const Nav = ({ setOpen, open }) => {
  const handelBtn = () => {
    setOpen(!open); // Toggle the drawer open/close state
    console.log("open: ", open);
  };

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

            <Typography sx={{ mr: "10px" }}>Omar Ehab</Typography>
            <Avatar alt="User Avatar" src="/" />
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
