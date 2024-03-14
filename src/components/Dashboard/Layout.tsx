import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="flex gap-5">
        <div className="border-r-2 h-[85vh] hidden md:block">
          <Sidebar />
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
