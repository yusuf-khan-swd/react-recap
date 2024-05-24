import { useEffect, useState } from "react";
import SingleProductDashboard from "../components/dashboard/SingleProductDashboard";

const AllProducts = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="my-16 flex justify-center flex-wrap gap-4">
        {shoes.map((shoe) => (
          <SingleProductDashboard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
