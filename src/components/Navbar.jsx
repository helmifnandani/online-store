import { navItems } from "../constants";
import Icon from "./Icons";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = ({ toggleNavbar, mobileDrawerOpen }) => {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-3xl"
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
              <li key={index}>
                <Button
                  isLink={true}
                  type={"link"}
                  urlTarget={item.href}
                  text={item.label}
                />
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
              urlTarget={"#"}
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
        className="absolute right-0 min-h-screen w-56 translate-x-full transform overflow-y-auto bg-white text-slate-900 shadow-xl transition-transform duration-300 ease-in-out"
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
                />
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center gap-6 p-4">
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
              urlTarget={"#"}
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
