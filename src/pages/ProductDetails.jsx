import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, price, title } = shoe;

  return (
    <div>
      <figure>
        <img
          className="h-[600px]"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>

      <h1 className="text-5xl text-center font-bold">{title}</h1>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">Brand: {brand}</h3>
        <h3 className="text-xl font-semibold">Price: ${price}</h3>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
