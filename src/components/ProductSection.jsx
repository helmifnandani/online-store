import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import SlideShow from "./SlideShow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productItems } from "../constants";
import Button from "./Button";
import axios from "axios";

const ProductSection = ({
  title = "Best Seller",
  description = "Check out our best seller collection",
}) => {
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
    <div className="mb-10">
      <div className="mb-7 flex flex-col">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <h3 className="text-lg">{description}</h3>
      </div>
      <div className="mb-7 grid h-full grid-cols-12 gap-2 lg:gap-7">
        {productItems.slice(0, 4).map((item, index) => (
          <div
            className="col-span-6 h-full w-full lg:col-span-3"
            key={item.productId}
          >
            <ProductItem item={item} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button
          isLink={true}
          type={"outline"}
          text={"View More"}
          isPill={true}
        />
      </div>
    </div>
  );
};

export default ProductSection;
