import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { productItems } from "../constants";
import Button from "./Button";
import axios from "axios";

const ProductSection = ({ title = "Best Seller" }) => {
  // const [products, setProduct] = useState([]); // State to store the product data
  // const [loading, setLoading] = useState(true); // State to manage loading state
  // const [error, setError] = useState(null); // State to handle errors
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(`http://localhost:8000/productItems`);
  //       setProduct(response.data); // Set the fetched data to the product state
  //     } catch (error) {
  //       setError(error.response ? error.response.data.message : error.message); // Handle any errors
  //     } finally {
  //       setLoading(false); // Set loading to false after the request completes
  //     }
  //   };

  //   // Call the fetch function
  //   fetchProducts();
  // }, []);

  return (
    <div className="mb-12 lg:mb-14">
      <div className="mb-7 flex flex-col text-center">
        <h1 className="text-xl font-semibold tracking-wider">{title}</h1>
      </div>
      <div className="mb-7 grid h-full grid-cols-12 gap-x-2 gap-y-5 lg:gap-x-7">
        {productItems.slice(0, 8).map((item, index) => (
          <div
            className="col-span-6 h-full w-full lg:col-span-3"
            key={item.productid}
          >
            <ProductItem item={item} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button
          isLink={true}
          className="text-xs font-semibold"
          text={"View More"}
        />
      </div>
    </div>
  );
};

export default ProductSection;
