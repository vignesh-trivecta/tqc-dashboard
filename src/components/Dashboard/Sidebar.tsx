import "../../index.css";
import { Link } from "react-router-dom";
import {
  Home,
  LucideIcon,
  LayoutTemplate,
  Users,
  Settings,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/pageSlice";

interface SidebarListItemProps {
  title: string;
  Icon: LucideIcon;
  to: string;
  page: string;
  currentPage: string;
}

const Sidebar = () => {
  const currentPage = useSelector((state: any) => state.page.currentPage);

  return (
    <div>
      <ul className="space-y-4 py-6 px-4">
        <SidebarListItem
          title={"Home"}
          Icon={Home}
          to={"/dashboard"}
          page={"home"}
          currentPage={currentPage}
        />
        <SidebarListItem
          title={"Templates"}
          Icon={LayoutTemplate}
          to={"/dashboard/templates"}
          page={"templates"}
          currentPage={currentPage}
        />
        <SidebarListItem
          title={"Customers"}
          Icon={Users}
          to={"/dashboard/customers"}
          page={"customers"}
          currentPage={currentPage}
        />
        <SidebarListItem
          title={"Settings"}
          Icon={Settings}
          to={"/dashboard/settings"}
          page={"settings"}
          currentPage={currentPage}
        />
      </ul>
    </div>
  );
};

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  title,
  Icon,
  to,
  page,
  currentPage,
}) => {
  const dispatch = useDispatch();

  const handleClick = (value: string) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <li onClick={() => handleClick(page)}>
      <Link
        to={to}
        className={`sidebar-item space-x-0 lg:space-x-2 ${
          currentPage === page ? "bg-green-500 text-white" : ""
        }`}
      >
        <Icon className="w-4 h-4 hidden lg:block" />
        <span className="text-sm lg:text-lg">{title}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
