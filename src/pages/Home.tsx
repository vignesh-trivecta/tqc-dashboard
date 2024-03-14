import { useZustStore } from "../store/store";

const Home = () => {
  const { currentPage } = useZustStore();
  console.log(currentPage);
  return <div className="">Dashboard Home {currentPage}</div>;
};

export default Home;
