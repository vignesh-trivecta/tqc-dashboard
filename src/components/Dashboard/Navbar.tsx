import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../@/components/ui/popover";
// import { ModeToggle } from "../mood-toggle";

interface listItemType {
  listItem: string;
}

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 p-6 fixed inset-x-0 top-0 z-50">
      <div className="flex justify-between items-center">
        <img src="/tqc.png" width={50} height={50} />
        <p className="font-bold text-3xl">Trivecta Quick Connect</p>
      </div>
      <div className="flex items-center">
        {/* <ModeToggle /> */}
        <AvatarIcon />
      </div>
    </div>
  );
};

const AvatarIcon = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="h-10 w-10 rounded-full"
            />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <UserDropDown />
        </PopoverContent>
      </Popover>
    </>
  );
};

const UserDropDown = () => {
  return (
    <div className="border-2 p-2 bg-white -mt-4 rounded-lg">
      <ul className="space-y-2">
        {/* <UserOptionsList listItem={"Settings"} /> */}
        <UserOptionsList listItem={"Sign Out"} />
      </ul>
    </div>
  );
};

const UserOptionsList: React.FC<listItemType> = ({ listItem }) => {
  return (
    <li className="hover:bg-gray-100 p-2 hover:cursor-pointer hover:rounded-lg">
      {listItem}
    </li>
  );
};

export default Navbar;
