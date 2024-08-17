import { Outlet } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { brown } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import DrawerComponent from "../components/Drawer";
import Nav from "../components/Nav";

const RootLayout = () => {
  const [open, setOpen] = useState(false);
  const [triggerMode, setTriggerMode] = useState(
    localStorage.getItem("mode") || "light"
  );

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
