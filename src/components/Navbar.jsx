import React, { useState, useEffect } from "react";
import { navItems, categories } from "../constants";
import Icon from "./Icons";
import Button from "./Button";
import { Link } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";

const Navbar = ({
  toggleNavbar,
  mobileDrawerOpen,
  isScrolled,
  categoryList,
  sideBarPosition,
}) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [isCollapseChild, setIsCollapseChild] = useState(true);
  const handleClickNestedMenu = (e) => {
    e.classList.toggle("active");
    setIsCollapse(!isCollapse);
  };
  const handleClickNestedChildMenu = (index, e) => {
    e.classList.toggle("active");
    setIsCollapseChild(isCollapseChild === index ? null : index);
  };

  return (
    <>
      <AnnouncementBar isScrolled={isScrolled} />
      <nav
        className={`sticky top-0 z-50 transition-all lg:!mt-0 ${isScrolled ? "bg-white bg-opacity-90 shadow-md" : ""} ${mobileDrawerOpen ? "bg-white" : ""}`}
        id="navbar"
      >
        <div className="container relative mx-auto px-4 py-3 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex-col justify-end md:flex lg:hidden">
              <button
                className="relative px-5 py-2.5 focus:outline-none"
                onClick={toggleNavbar}
              >
                <span
                  className={`absolute block h-0.5 w-5 transform bg-current text-primary-500 transition duration-500 ease-in-out ${mobileDrawerOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-5 transform bg-current text-primary-500 transition duration-500 ease-in-out ${mobileDrawerOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-5 transform bg-current text-primary-500 transition duration-500 ease-in-out ${mobileDrawerOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <Icon name="logo" className="h-12 w-12 lg:h-20 lg:w-20" />
              </Link>
            </div>
            <ul className="ml-14 hidden gap-10 lg:flex">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={item.hasNestedMenu ? "group relative" : ""}
                >
                  <Button
                    isLink={true}
                    type={"link"}
                    urlTarget={item.href}
                    text={item.label}
                    className={
                      item.label.toLowerCase() === "sale"
                        ? "!containertext-red-500"
                        : ""
                    }
                  />
                  {item.hasNestedMenu && (
                    <ul className="min-w pointer-events-none absolute -left-10 top-full z-50 flex w-screen flex-wrap gap-7 bg-white p-3 opacity-0 shadow-md transition-all group-hover:pointer-events-auto group-hover:opacity-80 lg:max-w-screen-lg lg:-translate-x-1/2 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                      {categoryList.map((category, index) => (
                        <li key={index}>
                          <p className="mx-4 text-nowrap border-b border-gray-300 py-2 font-semibold">
                            {category.categoryName}
                          </p>
                          <ul>
                            {category.categoryDetails.map(
                              (categoryDetail, index) => (
                                <li className="px-4 py-2" key={index}>
                                  <Button
                                    isLink={true}
                                    type={"link"}
                                    urlTarget={`/products/${categoryDetail.categoryDetailName}`}
                                    text={categoryDetail.categoryDetailName}
                                    className={"!justify-start !text-start"}
                                  />
                                </li>
                              ),
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-2 lg:gap-6">
              <Button
                isLink={true}
                type={"link"}
                urlTarget={"/account"}
                text={"Favorites"}
                iconName={"heart"}
                iconWidth={20}
                btnTextClass="hidden lg:block"
              />
              <Button
                isLink={true}
                type={"link"}
                urlTarget={"/account"}
                iconName={"profile"}
                iconWidth={20}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute left-0 flex w-56 -translate-x-full overflow-auto bg-white text-primary-500 shadow-xl transition-transform duration-300 ease-in-out lg:hidden"
          style={{
            height: `calc(100vh - ${sideBarPosition}px)`,
          }}
          id="sidebar"
        >
          <div className="w-full p-4">
            <ul className="px-4">
              {navItems.map((item, index) => (
                <li key={index} className="py-2">
                  <div className="relative">
                    <Button
                      isLink={!item.hasNestedMenu}
                      type={"link"}
                      urlTarget={item.href ? item.href : ""}
                      text={item.label}
                      className={`!justify-start ${
                        item.label.toLowerCase() === "sale"
                          ? "!text-red-500"
                          : ""
                      } `}
                      onClick={(event) =>
                        item.hasNestedMenu &&
                        handleClickNestedMenu(event.currentTarget)
                      }
                    >
                      {item.hasNestedMenu && (
                        <div className="icon-collapsable-plus"></div>
                      )}
                    </Button>
                  </div>

                  {item.hasNestedMenu && (
                    <div
                      className={`transition-height overflow-hidden pt-2 duration-300 ease-in-out ${isCollapse ? "hidden h-0" : "block h-full"}`}
                    >
                      <ul>
                        {categoryList.map((category, index) => (
                          <li key={index} className="ps-2 pt-2">
                            <div className="relative text-nowrap font-semibold">
                              <Button
                                isLink={!category.categoryDetails.length > 0}
                                type={"link"}
                                text={category.categoryName}
                                onClick={(event) =>
                                  category.categoryDetails.length > 0 &&
                                  handleClickNestedChildMenu(
                                    index,
                                    event.currentTarget,
                                  )
                                }
                              >
                                {item.hasNestedMenu && (
                                  <div className="icon-collapsable-plus"></div>
                                )}
                              </Button>
                            </div>
                            <div
                              className={`transition-height overflow-hidden pt-2 duration-300 ease-in-out ${isCollapseChild === index ? "block h-full" : "hidden h-0"}`}
                            >
                              <ul>
                                {category.categoryDetails.map(
                                  (categoryDetail, index) => (
                                    <li className="py-2 ps-2" key={index}>
                                      <Button
                                        isLink={true}
                                        type={"link"}
                                        urlTarget={`/${categoryDetail.categoryDetailName}`}
                                        text={categoryDetail.categoryDetailName}
                                        className={"!justify-start !text-start"}
                                      />
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
