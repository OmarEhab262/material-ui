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
import ProtectedRoute from "../auth/ProtectedRoute";
import Login from "../pages/Login";
const isLogin = !!localStorage.getItem("user");
console.log("isLogin: ", isLogin);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <ProtectedRoute isLogged={isLogin} redirectPath="/login">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="create"
          element={
            <ProtectedRoute isLogged={isLogin} redirectPath="/login">
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute isLogged={isLogin} redirectPath="/login">
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="profile"
          element={
            <ProtectedRoute isLogged={isLogin} redirectPath="/login">
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <ProtectedRoute isLogged={!isLogin} redirectPath="/">
            <Login />
          </ProtectedRoute>
        }
      />
    </>
  )
);

export default router;
