import { RouterProvider } from "react-router-dom";
import "./App.css";
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";
// import MuiTextField from "./components/MuiTextField";
import router from "./router/route";

function App() {
  return (
    <>
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
