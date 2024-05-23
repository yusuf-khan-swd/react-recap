import { useLoaderData } from "react-router-dom";
import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
  const shoes = useLoaderData();
  console.log(shoes);

  return (
    <div>
      <Banner />
      <Products />
      <Accordion />
    </div>
  );
};

export default Home;
