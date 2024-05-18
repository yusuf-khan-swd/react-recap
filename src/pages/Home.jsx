import Banner from "../components/home/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="h-[350px] flex justify-center items-center">
        <h1 className="text-4xl font-bold">This is Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
