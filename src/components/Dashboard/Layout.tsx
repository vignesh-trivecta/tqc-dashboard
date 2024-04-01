import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="grid grid-rows-2 h-44">
      <div className="">
        <Navbar />
      </div>
      <div className="grid grid-cols-6 overflow-x-hidden h-[85vh]">
        <div className="border-r-2 col-start-1 col-span-1 hidden md:block fixed h-full">
          <Sidebar />
        </div>
        <div className="col-start-2 col-end-7 p-6 -ml-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
