import { AppBar, Avatar, Box, Link, Toolbar, Typography } from "@mui/material";

const Nav = () => {
  return (
    <div className="ml-[240px]">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              href="/"
              sx={{ flexGrow: 1, "&:hover": { color: "black" } }}
              color="inherit"
              underline="none"
            >
              My expenses
            </Link>
            <Typography sx={{ mr: "10px" }}>Omar Ehab</Typography>
            <Avatar alt="dfdfasd" src="/" />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
