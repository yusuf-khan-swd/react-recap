import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Our Products</h1>
      <div className="flex gap-2">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  );
};

export default Products;
