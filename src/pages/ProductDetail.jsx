import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Button from "../components/Button";
import Image from "../components/Image";
import Skeleton from "../components/Skeleton";
import SlideShow from "../components/SlideShow";
import Icon from "../components/Icons";
import SizeTshirt from "../assets/images/size-tshirt.jpg";
import SizeCoat from "../assets/images/size-coat.jpg";
import SizeDress from "../assets/images/size-dress.jpg";
import SizePants from "../assets/images/size-pants.jpg";
import SizeShirt from "../assets/images/size-shirt.jpg";
import SizeSkirt from "../assets/images/size-skirt.jpg";
import SizeTrousers from "../assets/images/size-trousers.jpg";

// ////////////////////////////////////////////////////////
// TEMP: DELETE LATER
import { productItems, productDetail } from "../constants";
// ////////////////////////////////////////////////////////

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
    setProduct(productDetail);
  }, []);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.size[0]);
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      setImgArray(
        product.productImages
          .map((image) => {
            return image.color === selectedColor ? image.imagePath : [];
          })
          .flat(),
      );
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [selectedColor]);

  const handleClickColor = (color) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
    }
  };

  const handleClickSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="group mx-auto mb-12 flex flex-col lg:mb-14 lg:flex-row lg:px-4 lg:py-7">
      {isLoading ? (
        <>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="basis-1/2">
              <Skeleton
                classContainer="relative mb-4 flex aspect-card overflow-hidden"
                className="aspect-card h-full w-full"
              />
              <div className="hidden justify-center gap-4 lg:flex">
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
            <div className="mb-10 w-full lg:mb-24 lg:w-1/2">
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
            </div>
            <div className="flex w-full flex-col justify-between px-2 lg:w-1/2 lg:px-5">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-3">
                  <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                    {product.productName}
                  </h5>
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                    {product.discountPrice > 0 && (
                      <p className="text-nowrap text-sm font-semibold line-through">
                        Rp{" "}
                        {new Intl.NumberFormat().format(
                          product.discountPrice - product.price,
                        )}
                      </p>
                    )}
                    <p className="text-md text-nowrap font-semibold text-gray-500">
                      Rp {new Intl.NumberFormat().format(product.price)}
                    </p>
                  </div>
                </div>
                {product.colors.length > 0 && (
                  <div>
                    <div className="mb-2 inline-flex">
                      <p className="text-slate-900">Colors:</p>
                      <p className="text-slate-400"></p>
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
                  </div>
                )}
                {product.size.length > 0 && (
                  <div>
                    <div className="mb-2 inline-flex">
                      <p className="text-slate-900">Size:</p>
                      <p className="text-slate-400"></p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {product.size.map((size, index) => (
                        <div key={index}>
                          <Button
                            type={`${size === selectedSize ? "primary" : "outline"}`}
                            text={size}
                            className="uppercase"
                            onClick={() => handleClickSize(size)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid divide-y divide-neutral-200">
                  {product.sizeMetric && (
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span>Sizing</span>
                          <span className="transition group-open:rotate-180">
                            <Icon name="chevron-down" />
                          </span>
                        </summary>
                        <div className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                          {product.sizeMetric == "tshirt" && (
                            <Image
                              imgSrc={SizeTshirt}
                              objectFit={"object-contain"}
                              ratio={"w-full aspect-9x10"}
                            />
                          )}
                          {product.sizeMetric == "coat" && (
                            <Image
                              imgSrc={SizeCoat}
                              objectFit={"object-contain"}
                              ratio={"w-full aspect-9x10"}
                            />
                          )}
                          {product.sizeMetric == "dress" && (
                            <Image
                              imgSrc={SizeDress}
                              objectFit={"object-contain"}
                              ratio={"w-full aspect-9x10"}
                            />
                          )}
                          {product.sizeMetric == "pants" && (
                            <Image
                              imgSrc={SizePants}
                              objectFit={"object-contain"}
                              ratio={"w-full aspect-9x10"}
                            />
                          )}
                          {product.sizeMetric == "shirt" && (
                            <Image
                              imgSrc={SizeShirt}
                              objectFit={"object-contain"}
                              ratio={"w-full aspect-9x10"}
                            />
                          )}
                          {product.sizeMetric == "skirt" && (
                            <Image
                              imgSrc={SizeSkirt}
                              objectFit={"object-contain"}
                              ratio={"w-full aspect-9x10"}
                            />
                          )}
                          {product.sizeMetric == "trousers" && (
                            <Image
                              imgSrc={SizeTrousers}
                              objectFit={"object-contain"}
                              ratio={"w-full aspect-9x10"}
                            />
                          )}
                        </div>
                      </details>
                    </div>
                  )}
                  {product.material && (
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span>Material</span>
                          <span className="transition group-open:rotate-180">
                            <Icon name="chevron-down" />
                          </span>
                        </summary>
                        <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                          {product.material}
                        </p>
                      </details>
                    </div>
                  )}
                  {product.shipping && (
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span>Shipping</span>
                          <span className="transition group-open:rotate-180">
                            <Icon name="chevron-down" />
                          </span>
                        </summary>
                        <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                          {product.shipping}
                        </p>
                      </details>
                    </div>
                  )}
                </div>
                <div className="flex w-full items-center gap-3">
                  {product.onlineStores.find(
                    (el) => el.onlineStore === "shopee",
                  ) && (
                    <Button
                      text="Shopee"
                      iconName={"shopee"}
                      className={"flex-grow"}
                      urlTarget={
                        product.onlineStores.find(
                          (el) => el.onlineStore === "shopee",
                        ).link
                      }
                      isLink={true}
                      openNewTab={true}
                    />
                  )}
                  {product.onlineStores.find(
                    (el) => el.onlineStore === "tokped",
                  ) && (
                    <Button
                      text="Tokopedia"
                      iconName={"tokopedia"}
                      className={"flex-grow"}
                      urlTarget={
                        product.onlineStores.find(
                          (el) => el.onlineStore === "tokped",
                        ).link
                      }
                      isLink={true}
                      openNewTab={true}
                    />
                  )}
                </div>
                <div className="flex w-full items-center gap-3">
                  <Button
                    text="Whatsapp"
                    iconName={"whatsapp"}
                    className={"flex-grow"}
                    urlTarget={`https://wa.me/6282323727197?text=${encodeURI("Hi! Mau tanya tentang produk")} ${encodeURI(product.productName)} ${fullUrl}`}
                    isLink={true}
                    openNewTab={true}
                    disabled={!product.status}
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
