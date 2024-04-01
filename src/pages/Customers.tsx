import { CirclePlus, FileUp } from "lucide-react";
import DialogBox from "../components/Dialog";
import { useState } from "react";
import axios from "axios";

const Customers = () => {
  const [file, setFile] = useState();
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold">Customers</h1>
      <div className="flex space-x-2 mt-4">
        <AddCustomer />
        <div className="flex">
          <div className="mr-2 flex items-center">
            Choose file
            <input
              type="file"
              accept=".xls,.xlsx,.csv"
              className="absolute opacity-0 hover:cursor-pointer"
              // value={file}
              onChange={(e: any) => {
                setFile(e?.target?.files[0]);
              }}
            />
          </div>
          <button
            onClick={async (e) => {
              e.preventDefault();

              if (!file) {
                return;
              }

              const formData = new FormData();
              formData.append("file", file);

              try {
                const response = await axios.post(
                  "http://localhost:5000/api/upload/singleFile",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                console.log(response);
                // Handle response as needed
              } catch (error) {
                console.error("Error uploading file:", error);
              }
            }}
            className="flex relative text-white border-2 border-green-500 p-1 rounded-md bg-green-500 hover:cursor-pointer hover:bg-green-700"
          >
            <FileUp /> Upload
          </button>
        </div>
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
  const formSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={formSubmit} className="">
        <InputBox label={"Name"} />
        <InputBox label={"Number"} />
        <div className="flex justify-center items-center mt-4 gap-2">
          <button className="bg-green-500 p-2 text-white rounded-md hover:bg-green-700">
            Submit
          </button>
          <button className="bg-gray-500 p-2 text-white rounded-md hover:bg-gray-700">
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
      <div className="mt-4 flex justify-between">
        <label>{label}</label>
        <input className="w-1/2 h-8 border border-gray-300 rounded-md p-1" />
      </div>
    </>
  );
};

export default Customers;
