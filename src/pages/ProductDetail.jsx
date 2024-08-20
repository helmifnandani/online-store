import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { productItems } from "../constants";
import Button from "../components/Button";
import Image from "../components/Image";
import Skeleton from "../components/Skeleton";
import SlideShow from "../components/SlideShow";

const ProductDetailSection = () => {
  const { guid } = useParams();
  const [product, setProduct] = useState(null);
  const [imgArray, setImgArray] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

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
      setImgArray(
        product.images
          .map((image) => {
            return Object.keys(image)
              .filter((key) => key.startsWith("img_src"))
              .map((key) => image[key]);
          })
          .flat(),
      );
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.size[0]);
      setTimeout(() => {
        setLoading(false);
      }, 500);
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
    <div className="group mx-auto flex flex-col lg:flex-row lg:px-4 lg:py-7">
      {isLoading ? (
        <>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="basis-1/2">
              <Skeleton
                classContainer="relative mb-4 flex aspect-card overflow-hidden"
                className="aspect-card h-full w-full"
              />
              <div className="flex justify-center gap-4">
                <Skeleton
                  classContainer="relative mb-4 flex aspect-card overflow-hidden"
                  className="aspect-card size-16"
                />
                <Skeleton
                  classContainer="relative mb-4 flex aspect-card overflow-hidden"
                  className="aspect-card size-16"
                />
                <Skeleton
                  classContainer="relative mb-4 flex aspect-card overflow-hidden"
                  className="aspect-card size-16"
                />
                <Skeleton
                  classContainer="relative mb-4 flex aspect-card overflow-hidden"
                  className="aspect-card size-16"
                />
              </div>
            </div>
            <div className="flex basis-1/2 flex-col justify-between px-2 lg:px-5">
              <div className="flex flex-col gap-7">
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-7 w-6/12" />
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-7 w-4/12" />
                <Skeleton className="h-7 w-5/12" />
                <div className="flex gap-3">
                  <div className="w-full">
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="w-full">
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex max-w-full flex-col lg:flex-row">
            <div className="mb-24 w-full lg:w-1/2">
              <SlideShow
                className="aspect-card"
                dots={true}
                propsCustomPaging={imgArray}
                fade={false}
              >
                {imgArray.map((item, index) => (
                  <div key={index}>
                    <Image
                      imgSrc={item}
                      ratio={"w-full aspect-card"}
                      className=""
                    />
                  </div>
                ))}
              </SlideShow>
              {/* <Image
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
              /> */}
            </div>
            <div className="flex w-full flex-col justify-between px-2 lg:w-1/2 lg:px-5">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-3">
                  <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                    {product.productName}
                  </h5>
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                    <p className="text-md text-nowrap font-semibold text-gray-500">
                      Rp {new Intl.NumberFormat().format(product.price)}
                    </p>
                    {product.discount > 0 && (
                      <p className="text-nowrap text-sm font-semibold text-red-600 line-through">
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
                    urlTarget={
                      product.url.find((el) => el.onlineStore === "shopee").link
                    }
                    isLink={true}
                    openNewTab={true}
                  />
                  <Button
                    text="Tokopedia"
                    iconName={"tokopedia"}
                    className={"flex-grow"}
                    urlTarget={
                      product.url.find((el) => el.onlineStore === "tokped").link
                    }
                    isLink={true}
                    openNewTab={true}
                  />
                </div>
                <div className="flex w-full items-center gap-3">
                  <Button
                    text="Whatsapp"
                    iconName={"whatsapp"}
                    className={"flex-grow"}
                    urlTarget={`https://wa.me/6282323727197?text=${encodeURI("Hi! Mau tanya tentang produk")} ${encodeURI(product.productName)} ${fullUrl}`}
                    isLink={true}
                    openNewTab={true}
                  />
                  <Button
                    type={"outline"}
                    iconName={"heart"}
                    className={"flex-shrink"}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailSection;
