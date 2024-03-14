import { useZustStore } from "../store/store";

const Templates = () => {
  const {currentPage} = useZustStore();
  console.log(currentPage)
  return <div>Templates {currentPage}</div>;
};

export default Templates;
