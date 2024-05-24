import { useEffect, useState } from "react";
import SingleProductDashboard from "../components/dashboard/SingleProductDashboard";

const AllProducts = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setShoes(shoes.filter((shoe) => shoe.id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="my-16 flex justify-center flex-wrap gap-4">
        {shoes.map((shoe) => (
          <SingleProductDashboard
            key={shoe.id}
            shoe={shoe}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
