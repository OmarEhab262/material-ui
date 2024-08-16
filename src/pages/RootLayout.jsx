import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
// import Drawer from "../components/Drawer";
import DrawerComponent from "../components/Drawer";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
// const mode = localStorage.getItem("mode");

const RootLayout = () => {
  const [triggerMode, setTriggerMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: triggerMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="root-layout">
        <Nav />
        <DrawerComponent
          setTriggerMode={setTriggerMode}
          triggerMode={triggerMode}
        />
        <div className="mt-[50px] ml-[240px] w-[calc(100%-240px)] flex justify-center ">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
