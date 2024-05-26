import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, price, title } = shoe;

  return (
    <div className="flex flex-col items-center my-6">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[600px]"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body pt-4">
          <h2 className="card-title justify-center text-3xl">{title}</h2>
          <h3 className="text-xl font-semibold">Brand: {brand}</h3>
          <h3 className="text-xl font-semibold">Price: ${price}</h3>
          <p>
            <span className="text-xl font-semibold">Description:</span>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
