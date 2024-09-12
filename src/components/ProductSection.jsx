import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Button from "./Button";
import axios from "axios";
import Skeleton from "./Skeleton";

const ProductSection = ({ title = "Best Seller", categoryId, imgData }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products-category/${categoryId}`,
        );
        setProducts(response.data.products.slice(0, 8));
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mb-12 lg:mb-14">
      {isLoading && (
        <div className="mb-12 space-y-4 lg:mb-14">
          <Skeleton
            className="h-7 w-6/12 lg:w-3/12"
            classContainer="flex justify-center"
          />
          <div className="mb-7 grid h-full grid-cols-12 gap-2 lg:gap-7">
            {(() => {
              const elements = [];
              for (let i = 0; i < 8; i++) {
                elements.push(
                  <div
                    className="col-span-6 h-full w-full lg:col-span-3"
                    key={i}
                  >
                    <Skeleton key={i} className={"aspect-card"} />
                  </div>,
                );
              }
              return elements;
            })()}
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="mb-7 flex flex-col text-center">
            <h1 className="text-xl font-semibold tracking-wider">{title}</h1>
          </div>
          <div className="mb-7 grid h-full grid-cols-12 gap-x-2 gap-y-5 lg:gap-x-7">
            {products?.map((item, index) => (
              <div
                className="col-span-6 h-full w-full lg:col-span-3"
                key={item.productid}
              >
                <ProductItem item={item} imgData={imgData} />
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
        </>
      )}
    </div>
  );
};

export default ProductSection;
