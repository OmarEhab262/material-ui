import { Outlet } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { brown } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import DrawerComponent from "../components/Drawer";
import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  const [open, setOpen] = useState(false);

  // Function to determine the initial mode based on user's preference or localStorage
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      return savedMode;
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDarkMode ? "dark" : "light";
    }
  };

  const [triggerMode, setTriggerMode] = useState(getInitialMode);

  useEffect(() => {
    // Save mode to localStorage whenever it changes
    localStorage.setItem("mode", triggerMode);
  }, [triggerMode]);

  // Creating the theme based on the mode
  const darkTheme = createTheme({
    palette: {
      mode: triggerMode,
      ...(triggerMode === "light"
        ? {
            omar: {
              main: brown[100],
              divider: brown[200],
              text: {
                primary: brown[800],
                secondary: brown[200],
              },
            },
          }
        : {
            omar: {
              main: brown[800],
              divider: brown[700],
              text: {
                primary: brown[100],
                secondary: brown[700],
              },
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ScrollToTop />
      <div className="root-layout">
        <Nav setOpen={setOpen} open={open} />
        <DrawerComponent
          setTriggerMode={setTriggerMode}
          triggerMode={triggerMode}
          setOpen={setOpen}
          open={open}
        />
        <Box
          sx={{
            ml: { xs: 0, md: "240px" },
            width: { xs: "100%", md: "calc(100% - 240px)" },
          }}
          className="mt-[50px] flex justify-center"
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
