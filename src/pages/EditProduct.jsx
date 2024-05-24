import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
  const shoe = useLoaderData();
  console.log(shoe);

  return <div>Edit Product</div>;
};

export default EditProduct;
