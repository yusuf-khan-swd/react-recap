/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SingleProductDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description } = shoe;

  const handleDelete = async () => {
    const proceedToDelete = confirm("Are sure you want to delete this item");

    if (proceedToDelete) {
      const res = await fetch(`http://localhost:3000/shoes/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);

      if (data) {
        toast.success("Product deleted successfully");
      }

      onDelete(id);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">Brand: {brand}</h3>
        <h3 className="text-xl font-semibold">Price: ${price}</h3>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDashboard;
