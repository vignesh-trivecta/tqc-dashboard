import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  setSuggestions,
  setShowSuggestions,
  setSelectedCustomers,
  setSelectedCustomersSet,
  setTemplateData,
  setTemplateId,
} from "../store/multiSelectSlice";
import { useEffect } from "react";

// const customersList = [
//   { id: 1, name: "All", phone: 1 },
//   { id: 2, name: "Suresh", phone: 9876543210 },
//   { id: 3, name: "Ramesh", phone: 7410852963 },
//   { id: 4, name: "Ganesh", phone: 8529637410 },
//   { id: 5, name: "Suresh", phone: 9876543210 },
//   { id: 6, name: "Ramesh", phone: 7410852963 },
//   { id: 7, name: "Ganesh", phone: 8529637410 },
//   { id: 8, name: "Suresh", phone: 9876543210 },
//   { id: 9, name: "Ramesh", phone: 7410852963 },
//   { id: 10, name: "Ganesh", phone: 8529637410 },
// ];

const Templates = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => state.multiSelect.searchTerm);
  const suggestions = useSelector(
    (state: any) => state.multiSelect.suggestions
  );
  const showSuggestions = useSelector(
    (state: any) => state.multiSelect.showSuggestions
  );
  const selectedCustomersSet = useSelector(
    (state: any) => state.multiSelect.selectedCustomersSet
  );
  const templateData = useSelector(
    (state: any) => state.multiSelect.templateData
  );
  const templateId = useSelector((state: any) => state.multiSelect.templateId);

  useEffect(() => {
    const fetchUsers = async () => {
      if (searchTerm.trim() === "") {
        dispatch(setSuggestions([]));
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setSuggestions(data.users));
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchUsers();
  }, [searchTerm]);

  useEffect(() => {
    const handleTemplateSelect = async (id: any) => {
      id = id || 1;
      fetch(`http://localhost:5000/templates/${id}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(setTemplateData(res.data));
        })
        .catch((err) => {
          console.error(err);
        });
    };
    handleTemplateSelect(templateId);
  }, [templateId]);

  return (
    <div>
      <div className="font-semibold text-2xl">Templates</div>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {/* Multi Select Input box */}
        <div className="">
          <label className="font-semibold ">Select Customers: </label>
          <div>
            <input
              className="border rounded-md outline-none py-1 px-2 "
              value={searchTerm}
              onChange={(e) => {
                dispatch(setSearchTerm(e.target.value));
              }}
            />
            {!showSuggestions && (
              <ul className="border w-48 p-1 rounded-md mt-1 h-44 overflow-y-scroll">
                {suggestions?.map((data: any) => {
                  return (
                    <li
                      key={data.id}
                      className="flex items-center justify-start gap-2 border-b last:border-none my-1"
                    >
                      <input type="checkbox" value={data.firstName} />{" "}
                      {data.firstName} - {data.phone}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        {/* Templates Selection box */}
        <div className="flex flex-col outline-none">
          <label>Select a Template:</label>
          <select
            className="border rounded-md p-1 w-44"
            onChange={(e) => {
              const selectedTemplateId = parseInt(e.target.value);
              dispatch(setTemplateId(selectedTemplateId));
            }}
          >
            <option value={1}>Template 1</option>
            <option value={2}>Template 2</option>
            <option value={3}>Template 3</option>
            <option value={4}>Template 4</option>
            <option value={5}>Template 5</option>
          </select>
          <textarea
            className="resize mt-2 p-1 border rounded-md outline-none"
            value={templateData}
            onChange={(e) => dispatch(setTemplateData(e.target.value))}
            rows={10}
            cols={50}
          />
        </div>
        <div className="mt-8">
          <button className="border p-2 rounded-md bg-green-500 text-white">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
