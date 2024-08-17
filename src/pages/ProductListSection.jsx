import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../components/Button";
import { productItems, categories, sorts } from "../constants";
import ProductItem from "../components/ProductItem";
import Icon from "../components/Icons";

const ProductListSection = () => {
  const { collection } = useParams();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((el) => el);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedSorts, setSelectedSorts] = useState("newest");
  const [style, setStyle] = useState({});
  const dropdownRef = useRef(null);

  const handlePosition = () => {
    if (dropdownRef.current) {
      const tooltipRect = dropdownRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      let newStyle = {};
      if (tooltipRect.right > viewportWidth) {
        newStyle.left = viewportWidth - tooltipRect.right - 32;
        setStyle(newStyle);
      }
    }
  };
  const toggleCategory = (e) => {
    setSelectedCategories(selectedCategories);
  };

  const toggleSortMenu = () => {
    if (!sortMenuOpen) {
      handlePosition();
    }
    setSortMenuOpen(!sortMenuOpen);
  };
  const toggleFilterMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  // useEffect(() => {
  //   if (mobileDrawerOpen) {
  //     document.querySelector("#sidebar").classList.add("translate-x-0");
  //     document.querySelector("#sidebar").classList.remove("translate-x-full");
  //   } else {
  //     document.querySelector("#sidebar").classList.remove("translate-x-0");
  //     document.querySelector("#sidebar").classList.add("translate-x-full");
  //   }
  // }, [mobileDrawerOpen]);
  return (
    <div className="group mx-auto py-7 lg:px-4">
      <div className="mb-7">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          {pathnames.map((value, index) => {
            let to = `/${pathnames.slice(0, index + 1).join("/")}`;
            if (to === "/products") to = "/products/all";
            return (
              <li key={to} className="flex items-center">
                <Icon
                  className="h-6 w-6 text-gray-400"
                  name="chevron-right"
                  width={20}
                  fill={"#374151"}
                />
                {index === pathnames.length - 1 ? (
                  <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2">
                    {value}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                  >
                    {value}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <div className="mb-7 flex justify-center">
        <h1 className="text-4xl font-semibold">{collection}</h1>
      </div>
      <div className="mb-7 flex justify-between">
        <div className="relative">
          <Button
            type="link"
            text="filter"
            iconWidth={20}
            iconName="filter"
            onClick={toggleFilterMenu}
          />
          <div
            className={`${filterMenuOpen ? "opacity-1 pointer-events-auto translate-y-0" : "pointer-events-none -translate-y-1/2 opacity-0"} absolute left-0 right-0 top-full z-10 mt-4 w-96 border-t bg-white p-8 shadow-xl transition-all ease-out`}
          >
            <h1 className="text-md mb-3 border-b pb-3">Categories</h1>
            {categories.map((category, index) => {
              return (
                <li key={index} className="mb-2 list-none">
                  <div className="flex items-center">
                    <input
                      className="hidden"
                      type="radio"
                      name="categories"
                      id={category.value}
                      value={category.value}
                      checked={selectedCategories === category.value}
                      onChange={() => setSelectedCategories(category.value)}
                    />
                    <label
                      className="flex cursor-pointer items-center gap-2"
                      htmlFor={category.value}
                    >
                      <span
                        className={`relative h-5 w-5 rounded-full border-2 shadow-sm transition-all ease-in-out before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] ${selectedCategories === category.value ? "border-slate-900 before:scale-100 before:bg-slate-900" : "border-gray-200 before:scale-0 before:bg-transparent"} before:rounded-full`}
                      ></span>
                      <span className="radio-text">{category.text}</span>
                    </label>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <Button
            type="link"
            text="sort"
            iconWidth={20}
            iconName="sort"
            onClick={toggleSortMenu}
          />
          <div
            className={`${sortMenuOpen ? "opacity-1 pointer-events-auto translate-y-0" : "pointer-events-none -translate-y-1/2 opacity-0"} absolute top-full z-10 mt-4 w-96 border-t bg-white p-8 shadow-xl transition-all ease-out`}
            ref={dropdownRef}
            style={style}
          >
            <h1 className="text-md mb-3 border-b pb-3">Categories</h1>
            {sorts.map((sort, index) => {
              return (
                <li key={index} className="mb-2 list-none">
                  <div className="flex items-center">
                    <input
                      className="hidden"
                      type="radio"
                      name="categories"
                      id={sort.value}
                      value={sort.value}
                      checked={selectedSorts === sort.value}
                      onChange={() => setSelectedSorts(sort.value)}
                    />
                    <label
                      className="flex cursor-pointer items-center gap-2"
                      htmlFor={sort.value}
                    >
                      <span
                        className={`before:content-[' '] relative h-5 w-5 rounded-full border-2 shadow-sm transition-all ease-in-out before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 ${selectedSorts === sort.value ? "border-slate-900 before:scale-100 before:bg-slate-900" : "border-gray-200 before:scale-0 before:bg-transparent"} before:rounded-full`}
                      ></span>
                      <span className="radio-text">{sort.text}</span>
                    </label>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mb-7 grid h-full grid-cols-12 gap-2 lg:gap-7">
        {productItems.map((item, index) => (
          <div
            className="col-span-6 h-full w-full lg:col-span-3"
            key={item.productId}
          >
            <ProductItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListSection;
