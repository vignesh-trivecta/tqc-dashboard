import { CirclePlus, FileUp } from "lucide-react";
import DialogBox from "../components/Dialog";

const Customers = () => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-2xl font-semibold">Customers</h1>
      <div className="flex space-x-2">
        <AddCustomer />
        <button className="flex relative text-white border-2 border-green-500 p-1 rounded-lg bg-green-500 hover:cursor-pointer hover:bg-green-700">
          <input
            type="file"
            accept=".xls,.xlsx,.csv"
            className="absolute opacity-0 hover:cursor-pointer"
          />
          <span className="mr-2">
            <FileUp />
          </span>
          Upload from Excel
        </button>
      </div>
    </div>
  );
};

const AddCustomer = () => {
  return (
    <>
      <DialogBox
        DialogIcon={CirclePlus}
        title={"Add new Customer"}
        comp={<UserAddForm />}
      />
    </>
  );
};

const UserAddForm = () => {
  const formSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={formSubmit} className="">
        <InputBox label={"Name"} />
        <InputBox label={"Number"} />
        <div className="flex justify-center items-center mt-4 gap-2">
          <button className="bg-green-500 p-2 text-white rounded-lg hover:bg-green-700">
            Submit
          </button>
          <button className="bg-gray-500 p-2 text-white rounded-lg hover:bg-gray-700">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

const InputBox = ({ label }: { label: string }) => {
  return (
    <>
      <div className="mt-4 flex flex-row justify-between">
        <label>{label}</label>
        <input className="w-1/2 h-8 border border-gray-300 rounded-md p-1" />
      </div>
    </>
  );
};

export default Customers;
