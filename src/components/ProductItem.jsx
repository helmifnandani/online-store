import { useState } from "react";
import Button from "./Button";
import Image from "./Image";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const ProductItem = ({ item }) => {
  const [selectedColor, setSelectedColor] = useState(item.colors[0]);

  const handleClick = (color) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
    }
  };

  return (
    <div className="group flex max-w-xs flex-col overflow-hidden">
      <Link to={`/product/${item.productId}`} className="flex-grow">
        <div className="relative mb-4 flex aspect-card overflow-hidden">
          <Image
            className={"peer !absolute top-0 h-full max-h-full max-w-full"}
            imgSrc={item.images[0].img_src_1}
            ratio={"aspect-card"}
            objectFit={"object-cover"}
          />
          <Image
            className={
              "peer !absolute top-0 h-full max-h-full max-w-full transition-all delay-100 duration-300 hover:opacity-0 peer-hover:opacity-0"
            }
            imgSrc={item.images[0].img_src_2}
            ratio={"aspect-card"}
            objectFit={"object-cover"}
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between px-2 lg:px-5">
        <div className="flex flex-col gap-4">
          <Link to={`/product/${item.productId}`}>
            <h5 className="text-sm tracking-tight text-slate-900">
              {item.productName}
            </h5>
          </Link>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <p className="text-nowrap text-sm">
              Rp {new Intl.NumberFormat().format(item.price)}
            </p>
            {item.discount > 0 && (
              <p className="text-nowrap text-xs text-red-600 line-through">
                Rp {new Intl.NumberFormat().format(item.discount - item.price)}
              </p>
            )}
          </div>
          <ul className="flex flex-row items-center">
            {item.colors.map((color, index) => (
              <li className="mr-4 last:mr-0">
                <span
                  className={`block rounded-full border p-0.5 transition duration-300 ease-in ${
                    color === selectedColor ? "border-gray-500" : "border-white"
                  }`}
                >
                  <Button
                    type={"link"}
                    onClick={() => handleClick(color)}
                    style={{ backgroundColor: color }}
                    className="h-3 w-3 rounded-full"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
