/* eslint-disable react/prop-types */
import SingleProduct from "./SingleProduct";

const Products = ({ shoes }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Our Products</h1>

      <div className="flex justify-center gap-2">
        {shoes.map((shoe) => (
          <SingleProduct key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default Products;
