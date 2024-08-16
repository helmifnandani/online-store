import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productItems } from "../constants";
import Button from "../components/Button";
import Image from "../components/Image";

const ProductDetailSection = () => {
  const { guid } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setProduct(
      productItems.find((el) => {
        return el.productId === guid;
      }),
    );
  }, []);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.size[0]);
      setLoading(false);
    }
  }, [product]);

  const handleClickColor = (color) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
    }
  };

  const handleClickSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      {isLoading ? (
        <p>is loading</p>
      ) : (
        <div className="group mx-auto flex flex-col py-7 lg:flex-row lg:px-4">
          <div className="relative mb-4 flex aspect-card basis-1/2 overflow-hidden">
            <Image
              className={"peer !absolute top-0 h-full max-h-full max-w-full"}
              imgSrc={product.images[0].img_src_1}
              ratio={"aspect-card"}
              objectFit={"object-cover"}
            />
            <Image
              className={
                "peer !absolute top-0 h-full max-h-full max-w-full transition-all delay-100 duration-300 hover:opacity-0 peer-hover:opacity-0"
              }
              imgSrc={product.images[0].img_src_2}
              ratio={"aspect-card"}
              objectFit={"object-cover"}
            />
          </div>
          <div className="flex basis-1/2 flex-col justify-between px-2 lg:px-5">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-3">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.productName}
                </h5>
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                  <p className="text-md text-nowrap">
                    Rp {new Intl.NumberFormat().format(product.price)}
                  </p>
                  {product.discount > 0 && (
                    <p className="text-nowrap text-sm text-red-600 line-through">
                      Rp{" "}
                      {new Intl.NumberFormat().format(
                        product.discount - product.price,
                      )}
                    </p>
                  )}
                </div>
              </div>
              <p>{product.description}</p>
              <div className="flex flex-wrap gap-3">
                {product.size.map((size, index) => (
                  <div key={index}>
                    <Button
                      type={`${size === selectedSize ? "primary" : "outline"}`}
                      text={size}
                      onClick={() => handleClickSize(size)}
                    />
                  </div>
                ))}
              </div>
              <ul className="flex flex-row items-center">
                {product.colors.map((color, index) => (
                  <li className="mr-4 last:mr-0" key={index}>
                    <span
                      className={`block rounded-full border p-1 transition duration-300 ease-in ${
                        color === selectedColor
                          ? "border-gray-500"
                          : "border-white"
                      }`}
                    >
                      <Button
                        type={"link"}
                        onClick={() => handleClickColor(color)}
                        style={{ backgroundColor: color }}
                        className="h-6 w-6 !rounded-full p-3"
                      />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex w-full items-center gap-3">
                <Button
                  text="Shopee"
                  iconName={"shopee"}
                  className={"flex-grow"}
                />
                <Button
                  text="Tokopedia"
                  iconName={"tokopedia"}
                  className={"flex-grow"}
                />
              </div>
              <Button
                type={"outline"}
                text="Add to Favorites"
                iconName={"heart"}
                className={"flex-grow"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailSection;
