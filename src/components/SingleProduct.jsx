/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  console.log(image_url);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">Brand: {brand}</h3>
        <h3 className="text-xl font-semibold">Price: ${price}</h3>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`}>
            <button className="btn btn-primary">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;