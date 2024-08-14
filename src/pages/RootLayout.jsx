import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
// import Drawer from "../components/Drawer";
import DrawerComponent from "../components/Drawer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Nav />
      <DrawerComponent />
      <div className="mt-[50px] ml-[240px] w-[calc(100%-240px)] flex justify-center ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
