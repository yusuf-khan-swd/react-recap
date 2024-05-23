import { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";

const AllProducts = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="flex justify-center flex-wrap gap-2">
        {shoes.map((shoe) => (
          <SingleProduct key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
