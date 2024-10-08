import React, { useState, useEffect, useRef } from "react";
import { navItems } from "../constants";
import Icon from "./Icons";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
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
  const [menuPosition, setMenuPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const handleClickNestedMenu = (e) => {
    e.classList.toggle("active");
    setIsCollapse(!isCollapse);
  };

  const handleClickNestedChildMenu = (index, e) => {
    e.classList.toggle("active");
    setIsCollapseChild(isCollapseChild === index ? null : index);
  };
  const isHome = location.pathname === "/";
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const updatePosition = () => {
      const element = menuRef.current;
      if (element) {
        const leftElement = element.getClientRects()[0]?.left;
        const widthElement = element.offsetWidth;
        const windowWidth = window.innerWidth;
        if (leftElement + widthElement > windowWidth) {
          const leftValue = windowWidth - (leftElement + widthElement + 32);
          setMenuPosition(leftValue);
        }
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [isHovered]);

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
                  className={`absolute block h-0.5 w-5 transform bg-current ${isScrolled || mobileDrawerOpen || !isHome ? "text-primary-500" : "text-white"} transition duration-500 ease-in-out ${mobileDrawerOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-5 transform bg-current ${isScrolled || mobileDrawerOpen || !isHome ? "text-primary-500" : "text-white"} transition duration-500 ease-in-out ${mobileDrawerOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-5 transform bg-current ${isScrolled || mobileDrawerOpen || !isHome ? "text-primary-500" : "text-white"} transition duration-500 ease-in-out ${mobileDrawerOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <Icon name="logo" className="h-12 w-12 lg:h-16 lg:w-16" />
              </Link>
            </div>
            <ul className="ml-14 hidden gap-10 lg:flex">
              {navItems.map(
                (item, index) =>
                  item.label.toLowerCase() !== "sale" &&
                  item.label.toLowerCase() !== "best seller" && (
                    <li
                      key={index}
                      className={item.hasNestedMenu ? "group relative" : ""}
                    >
                      <Button
                        isLink={true}
                        type={"link"}
                        urlTarget={item.href}
                        text={item.label}
                        className={`tracking-[0.125em] ${isHome && !isScrolled && "not-scrolled"}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                      {item.hasNestedMenu &&
                        categoryList &&
                        categoryList.length > 0 && (
                          <ul
                            className="min-w pointer-events-none absolute top-full z-50 flex w-fit flex-wrap gap-7 bg-white p-3 opacity-0 shadow-md transition-all group-hover:pointer-events-auto group-hover:opacity-100 lg:max-w-screen-lg lg:flex-nowrap xl:max-w-screen-xl 2xl:max-w-screen-2xl"
                            style={{
                              left: `${menuPosition}px`,
                            }}
                            id={`menu_${index}`}
                            ref={menuRef}
                          >
                            {categoryList?.map(
                              (category, index) =>
                                category.categoryname.toLowerCase() !==
                                  "collection" &&
                                category.categoryid !==
                                  "44fc86f7-216a-41ff-8ec6-3623a7f15912" &&
                                category.categoryid !==
                                  "006f4a95-0653-4d38-a9e2-976f2c55c1e5" &&
                                category.categoryid !==
                                  "fc64fa3e-cd69-438a-9201-960f0f48491f" &&
                                category.categoryid !==
                                  "1575dcde-3eeb-4da7-a1d1-73e4dea52e4c" &&
                                category.CategoryDetails.length > 1 && (
                                  <li key={category.categoryid}>
                                    <Button
                                      isLink={true}
                                      type={"link"}
                                      urlTarget={`/products/${category.categoryid}`}
                                      text={category.categoryname}
                                      className={
                                        "mx-4 !justify-start text-nowrap border-b border-gray-300 py-2 !text-start font-semibold tracking-widest"
                                      }
                                    />
                                    {/* <p className="mx-4 text-nowrap border-b border-gray-300 py-2 font-semibold tracking-widest"></p> */}
                                    {category.CategoryDetails.length > 1 && (
                                      <ul>
                                        {category.CategoryDetails.map(
                                          (categoryDetail, index) => (
                                            <li
                                              className="px-4 py-2"
                                              key={
                                                categoryDetail.categorydetailid
                                              }
                                            >
                                              <Button
                                                isLink={true}
                                                type={"link"}
                                                urlTarget={`/products/${categoryDetail.categorydetailid}`}
                                                text={
                                                  categoryDetail.categorydetailname
                                                }
                                                className={
                                                  "!justify-start text-nowrap !text-start"
                                                }
                                              />
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    )}
                                  </li>
                                ),
                            )}
                            <li>
                              <ul>
                                {categoryList?.map(
                                  (category, index) =>
                                    category.CategoryDetails.length === 1 &&
                                    category.categoryid !==
                                      "44fc86f7-216a-41ff-8ec6-3623a7f15912" &&
                                    category.categoryid !==
                                      "006f4a95-0653-4d38-a9e2-976f2c55c1e5" &&
                                    category.categoryid !==
                                      "fc64fa3e-cd69-438a-9201-960f0f48491f" &&
                                    category.categoryid !==
                                      "1575dcde-3eeb-4da7-a1d1-73e4dea52e4c" && (
                                      <li key={index}>
                                        <Button
                                          isLink={true}
                                          type={"link"}
                                          urlTarget={`/products/${category.CategoryDetails[0].categorydetailid}`}
                                          text={category.categoryname}
                                          className={
                                            "mx-4 !justify-start text-nowrap py-2 !text-start font-semibold"
                                          }
                                        />
                                      </li>
                                    ),
                                )}
                              </ul>
                            </li>
                          </ul>
                        )}
                    </li>
                  ),
              )}
              {categoryList?.map(
                (category, index) =>
                  category.categoryname.toLowerCase() === "collection" && (
                    <li key={category.categoryid} className="group relative">
                      <Button
                        isLink={true}
                        type={"link"}
                        text={category.categoryname}
                        className={`tracking-[0.125em] ${isHome && !isScrolled && "not-scrolled"}`}
                      />
                      <ul className="min-w pointer-events-none absolute left-0 top-full z-50 flex w-fit flex-wrap gap-7 bg-white p-3 opacity-0 shadow-md transition-all group-hover:pointer-events-auto group-hover:opacity-100 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                        {categoryList?.map(
                          (category, index) =>
                            category.categoryname.toLowerCase() ===
                              "collection" && (
                              <li key={index}>
                                <ul>
                                  {category.CategoryDetails.map(
                                    (categoryDetail, index) => (
                                      <li
                                        className="px-4 py-2"
                                        key={categoryDetail.categorydetailid}
                                      >
                                        <Button
                                          isLink={true}
                                          type={"link"}
                                          urlTarget={`/products/${categoryDetail.categorydetailid}`}
                                          text={
                                            categoryDetail.categorydetailname
                                          }
                                          className={
                                            "!justify-start text-nowrap !text-start"
                                          }
                                        />
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </li>
                            ),
                        )}
                      </ul>
                    </li>
                  ),
              )}
              {navItems.map(
                (item, index) =>
                  item.label.toLowerCase() === "best seller" && (
                    <li
                      key={index}
                      className={item.hasNestedMenu ? "group relative" : ""}
                    >
                      <Button
                        isLink={true}
                        type={"link"}
                        urlTarget={item.href}
                        text={item.label}
                        className={`tracking-[0.125em] ${isHome && !isScrolled && "not-scrolled"}`}
                      />
                    </li>
                  ),
              )}
              {navItems.map(
                (item, index) =>
                  item.label.toLowerCase() === "sale" && (
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
                          "!uppercase tracking-[0.125em] !text-red-500"
                        }
                      />
                    </li>
                  ),
              )}
            </ul>
            <div className="flex items-center justify-center gap-4 lg:gap-6">
              <Button
                isLink={true}
                type={"link"}
                urlTarget={"/account"}
                text={"Favorites"}
                iconName={"heart"}
                iconWidth={20}
                btnTextClass="tracking-[0.125em] hidden lg:block"
                className={`${isScrolled || mobileDrawerOpen || (isHome && "text-white")}`}
              />
              <Button
                isLink={true}
                type={"link"}
                urlTarget={"/account"}
                iconName={"profile"}
                iconWidth={20}
                className={`${isScrolled || mobileDrawerOpen || (isHome && "text-white")}`}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute left-0 flex w-10/12 -translate-x-full overflow-auto bg-white text-primary-500 shadow-xl transition-transform duration-300 ease-in-out lg:hidden"
          style={{
            height: `calc(100vh - ${sideBarPosition}px)`,
          }}
          id="sidebar"
        >
          <div className="w-full p-4">
            <ul className="px-4">
              {navItems.map(
                (item, index) =>
                  item.label.toLowerCase() !== "sale" &&
                  item.label.toLowerCase() !== "best seller" && (
                    <li key={index} className="border-b py-5">
                      <div className="relative flex justify-between">
                        <Button
                          isLink={true}
                          type={"link"}
                          urlTarget={item.href ? item.href : ""}
                          text={item.label}
                          className={`!justify-start ${
                            item.label.toLowerCase() === "sale"
                              ? "!uppercase !text-red-500"
                              : ""
                          } `}
                          btnTextClass={"tracking-[0.125em]"}
                        ></Button>
                        {item.hasNestedMenu && (
                          <button
                            onClick={(event) =>
                              handleClickNestedMenu(event.currentTarget)
                            }
                          >
                            <div className="icon-collapsable-plus"></div>
                          </button>
                        )}
                      </div>

                      {item.hasNestedMenu && (
                        <div
                          className={`transition-height overflow-hidden pt-2 duration-300 ease-in-out ${isCollapse ? "hidden h-0" : "block h-full"}`}
                        >
                          <ul>
                            {categoryList?.map(
                              (category, index) =>
                                category.categoryname.toLowerCase() !==
                                  "collection" &&
                                category.categoryid !==
                                  "44fc86f7-216a-41ff-8ec6-3623a7f15912" &&
                                category.categoryid !==
                                  "006f4a95-0653-4d38-a9e2-976f2c55c1e5" &&
                                category.categoryid !==
                                  "fc64fa3e-cd69-438a-9201-960f0f48491f" &&
                                category.categoryid !==
                                  "1575dcde-3eeb-4da7-a1d1-73e4dea52e4c" && (
                                  <li
                                    key={index}
                                    className="border-b pb-5 ps-2 pt-5 last:border-0 last:pb-0"
                                  >
                                    <div className="relative flex justify-between text-nowrap font-semibold">
                                      <Button
                                        isLink={true}
                                        urlTarget={`/products/${category.categoryid}`}
                                        type={"link"}
                                        text={category.categoryname}
                                        className={"!justify-start !text-start"}
                                      ></Button>

                                      <button
                                        onClick={(event) =>
                                          handleClickNestedChildMenu(
                                            index,
                                            event.currentTarget,
                                          )
                                        }
                                      >
                                        <div className="icon-collapsable-plus"></div>
                                      </button>
                                    </div>
                                    <div
                                      className={`transition-height overflow-hidden pt-2 duration-300 ease-in-out ${isCollapseChild === index ? "block h-full" : "hidden h-0"}`}
                                    >
                                      <ul>
                                        {category.CategoryDetails.map(
                                          (categoryDetail, index) => (
                                            <li
                                              className="border-b pb-5 ps-2 pt-5 last:border-0 last:pb-0"
                                              key={index}
                                            >
                                              <Button
                                                isLink={true}
                                                type={"link"}
                                                urlTarget={`/products/${categoryDetail.categorydetailid}`}
                                                text={
                                                  categoryDetail.categorydetailname
                                                }
                                                className={
                                                  "!justify-start !text-start"
                                                }
                                              />
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                  </li>
                                ),
                            )}
                          </ul>
                        </div>
                      )}
                    </li>
                  ),
              )}
              {categoryList?.map(
                (category, index) =>
                  category.categoryname.toLowerCase() === "collection" && (
                    <li key={index} className="border-b py-5">
                      <div className="relative text-nowrap font-semibold">
                        <Button
                          isLink={!category.CategoryDetails.length > 0}
                          type={"link"}
                          text={category.categoryname}
                          btnTextClass={"tracking-[0.125em]"}
                          onClick={(event) =>
                            category.CategoryDetails.length > 0 &&
                            handleClickNestedChildMenu(
                              index,
                              event.currentTarget,
                            )
                          }
                        >
                          <div className="icon-collapsable-plus"></div>
                        </Button>
                      </div>
                      <div
                        className={`transition-height overflow-hidden pt-2 duration-300 ease-in-out ${isCollapseChild === index ? "block h-full" : "hidden h-0"}`}
                      >
                        <ul>
                          {category.CategoryDetails.map(
                            (categoryDetail, index) => (
                              <li
                                className="border-b pb-5 ps-2 pt-5 last:border-0 last:pb-0"
                                key={index}
                              >
                                <Button
                                  isLink={true}
                                  type={"link"}
                                  urlTarget={`/products/${categoryDetail.categorydetailid}`}
                                  text={categoryDetail.categorydetailname}
                                  className={"!justify-start !text-start"}
                                />
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </li>
                  ),
              )}
              {navItems.map(
                (item, index) =>
                  item.label.toLowerCase() === "best seller" && (
                    <li key={index} className="border-b py-5">
                      <div className="relative">
                        <Button
                          isLink={true}
                          type={"link"}
                          urlTarget={item.href}
                          text={item.label}
                          className={"!justify-start"}
                          btnTextClass={"tracking-[0.125em]"}
                        ></Button>
                      </div>
                    </li>
                  ),
              )}
              {navItems.map(
                (item, index) =>
                  item.label.toLowerCase() === "sale" && (
                    <li key={index} className="border-b py-5">
                      <div className="relative">
                        <Button
                          isLink={true}
                          type={"link"}
                          urlTarget={item.href}
                          text={item.label}
                          className={"!justify-start !uppercase !text-red-500"}
                          btnTextClass={"tracking-[0.125em]"}
                        ></Button>
                      </div>
                    </li>
                  ),
              )}
              <li className="border-b py-5">
                <div className="relative">
                  <Button
                    isLink={true}
                    type={"link"}
                    urlTarget={"/account"}
                    text={"Sign In"}
                    className={"!justify-start"}
                    btnTextClass={"tracking-[0.125em]"}
                  ></Button>
                </div>
              </li>
              <li className="border-b py-5">
                <div className="relative">
                  <Button
                    isLink={true}
                    type={"link"}
                    urlTarget={"/contact"}
                    text={"Contact"}
                    className={"!justify-start"}
                    btnTextClass={"tracking-[0.125em]"}
                  ></Button>
                </div>
              </li>
              <li className="flex items-center gap-2 border-b py-5">
                <Button
                  className={"!justify-start"}
                  isLink={true}
                  type={"link"}
                  text={"the.koreandaily"}
                  urlTarget="https://www.instagram.com/the.koreandaily"
                  iconName={"instagram"}
                  iconWidth={20}
                  openNewTab={true}
                  btnTextClass={"tracking-[0.125em]"}
                />
                <Button isLink={true} type={"link"} href={"#"} />
              </li>
              <li className="flex items-center gap-2 border-b py-5">
                <Button
                  className={"!justify-start"}
                  isLink={true}
                  type={"link"}
                  urlTarget="https://www.instagram.com/titipkitadi"
                  text={"titipkitadi"}
                  iconName={"instagram"}
                  iconWidth={20}
                  btnTextClass={"tracking-[0.125em]"}
                  openNewTab={true}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
