import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Create from "../pages/Create";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import RootLayout from "../pages/RootLayout";
import Settings from "../pages/Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);

export default router;
