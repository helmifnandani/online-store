import React, { useState, useEffect } from "react";
import { navItems } from "../constants";
import Icon from "./Icons";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = ({ toggleNavbar, mobileDrawerOpen, isScrolled }) => {
  return (
    <nav
      className={`sticky top-0 z-50 bg-white py-3 transition-all ${isScrolled ? "bg-opacity-90 shadow-md" : ""}`}
      id="navbar"
    >
      <div className="container relative mx-auto px-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link to={"/"}>
              <Icon name="logo" className="h-12 w-12 lg:h-24 lg:w-24" />
            </Link>
          </div>
          <ul className="ml-14 hidden gap-10 lg:flex">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={item.menus?.length > 0 ? "group relative" : ""}
              >
                <Button
                  isLink={true}
                  type={"link"}
                  urlTarget={item.href}
                  text={item.label}
                  className={
                    item.label.toLowerCase() === "sale" ? "text-red-500" : ""
                  }
                />
                {item.menus?.length > 0 ? (
                  <div className="pointer-events-none absolute left-0 top-full z-50 flex w-fit -translate-x-1/2 gap-7 bg-white p-3 opacity-0 shadow-md transition-all group-hover:pointer-events-auto group-hover:opacity-100">
                    {item.menus.map((menu, index) => (
                      <li key={index}>
                        <p className="mx-4 text-nowrap border-b border-gray-300 py-2 font-semibold">
                          {menu.label}
                        </p>
                        <ul>
                          {menu.menuItems.map((menuItem, index) => (
                            <li className="px-4 py-2" key={index}>
                              <Button
                                isLink={true}
                                type={"link"}
                                urlTarget={menuItem.href}
                                text={menuItem.label}
                                className={"!justify-start !text-start"}
                              />
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
          <div className="hidden items-center justify-center gap-6 lg:flex">
            <Button
              isLink={true}
              type={"link"}
              urlTarget={"#"}
              text={"Favorites"}
              iconName={"heart"}
              iconWidth={20}
            />
            <Button
              isLink={true}
              type={"link"}
              urlTarget={"/account"}
              iconName={"profile"}
              iconWidth={20}
            />
          </div>
          <div className="flex-col justify-end md:flex lg:hidden">
            <button
              className="relative px-5 py-2.5 focus:outline-none"
              onClick={toggleNavbar}
            >
              <span
                className={`absolute block h-0.5 w-5 transform bg-current text-slate-900 transition duration-500 ease-in-out ${mobileDrawerOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 transform bg-current text-slate-900 transition duration-500 ease-in-out ${mobileDrawerOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 transform bg-current text-slate-900 transition duration-500 ease-in-out ${mobileDrawerOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute right-0 min-h-screen w-56 translate-x-full transform overflow-y-auto bg-white text-slate-900 shadow-xl transition-transform duration-300 ease-in-out lg:hidden"
        id="sidebar"
      >
        <div className="p-4">
          <div className="flex justify-center border-b pb-3">
            <Icon name="logo" className="h-12 w-12 lg:h-24 lg:w-24" />
          </div>
          <ul className="border-b px-4 pb-3">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <Button
                  isLink={true}
                  type={"link"}
                  urlTarget={item.href}
                  text={item.label}
                  className={
                    item.label.toLowerCase() === "sale" ? "text-red-500" : ""
                  }
                />
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center gap-6 p-4">
            <Button
              isLink={true}
              type={"link"}
              urlTarget={"/account"}
              text={"Favorites"}
              iconName={"heart"}
              iconWidth={20}
            />
            <Button
              isLink={true}
              type={"link"}
              urlTarget={"/account"}
              text={"Account"}
              iconName={"profile"}
              iconWidth={20}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <ul className="flex space-x-8">
//         <li className="relative group">
//           <a href="#" className="text-white">
//             Menu Item 1
//           </a>
//           <ul className="absolute left-0 mt-2 hidden w-48 bg-white text-black shadow-lg group-hover:block">
//             <li className="px-4 py-2 hover:bg-gray-200">
//               <a href="#">Dropdown Item 1</a>
//             </li>
//             <li className="px-4 py-2 hover:bg-gray-200">
//               <a href="#">Dropdown Item 2</a>
//             </li>
//             <li className="px-4 py-2 hover:bg-gray-200">
//               <a href="#">Dropdown Item 3</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href="#" className="text-white">
//             Menu Item 2
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
