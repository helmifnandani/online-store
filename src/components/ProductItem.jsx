import { useState, useEffect } from "react";
import Button from "./Button";
import Image from "./Image";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import placeholderImg from "../assets/images/placeholder-image.jpg";

const ProductItem = ({ item }) => {
  const [selectedColor, setSelectedColor] = useState(item.colors[0]);
  const [imgArray, setImgArray] = useState([]);

  const handleClickColor = (color) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
    }
  };

  useEffect(() => {
    if (item) {
      setImgArray(
        item.ProductImages.map((productImage) => {
          return productImage.color === selectedColor ? productImage.Image : [];
        })
          .flat()
          .slice(0, 2),
      );
    }
  }, [selectedColor]);

  return (
    <div className="group flex max-w-xs flex-col overflow-hidden">
      <Link to={`/product/${item.productid}`} className="flex-grow">
        <div className="relative mb-3 flex aspect-card overflow-hidden">
          <Image
            className={"peer !absolute top-0 h-full max-h-full max-w-full"}
            imgSrc={imgArray[0] ? imgArray[0].imagepath : placeholderImg}
            ratio={"aspect-card"}
            objectFit={"object-cover"}
          />
          {imgArray.length > 1 && (
            <Image
              className={
                "peer !absolute top-0 h-full max-h-full max-w-full transition-all delay-100 duration-300 hover:opacity-0 peer-hover:opacity-0"
              }
              imgSrc={imgArray[1].imagepath}
              ratio={"aspect-card"}
              objectFit={"object-cover"}
            />
          )}
        </div>
      </Link>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <Link to={`/product/${item.productid}`}>
            <h5 className="mb-2.5 text-sm tracking-wider text-slate-900">
              {item.productname}
            </h5>
          </Link>
          <div className="mb-4 flex items-center gap-3.5">
            <p className="text-nowrap text-sm">
              Rp {new Intl.NumberFormat().format(item.price)}
            </p>
            {item.discountprice > 0 && (
              <p className="text-nowrap text-xs line-through">
                Rp{" "}
                {new Intl.NumberFormat().format(
                  item.discountprice - item.price,
                )}
              </p>
            )}
          </div>
          <ul className="mb-4 flex flex-row items-center gap-2.5">
            {item.colors.map((color, index) => (
              <li className="last:mr-0" key={index}>
                <span
                  className={`block rounded-full border p-0.5 transition duration-300 ease-in ${
                    color === selectedColor ? "border-gray-500" : "border-white"
                  }`}
                >
                  <Button
                    type={"link"}
                    onClick={() => handleClickColor(color)}
                    style={{ backgroundColor: color }}
                    className="h-3 w-3 rounded-full p-2"
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
