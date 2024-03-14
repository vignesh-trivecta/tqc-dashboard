import "../../index.css";
import { Link } from "react-router-dom";
import { useZustStore } from "../../store/store";
import { Home, LucideIcon, LayoutTemplate, Users } from "lucide-react"

interface SidebarListItemProps {
  title: string;
  Icon: LucideIcon;
  to: string;
  page: string;
  currentPage: string;
}

const Sidebar = () => {
  const { currentPage, setCurrentPage } = useZustStore();

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
  const { setCurrentPage } = useZustStore();

  const handleClick = (value: string) => {
    setCurrentPage(value);
  };

  return (
    <li onClick={() => handleClick(page)}>
      <Link
        to={to}
        className={`sidebar-item space-x-2 ${
          currentPage === page ? "bg-black text-white" : ""
        }`}
      >
        <Icon className="w-4 h-4" />
        <span className="text-lg">{title}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
