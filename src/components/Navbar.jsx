// import {Menu, X} from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import Icon from "./Icons";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-3xl">
      <div className="container relative mx-auto px-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link to={"/"}>
              <Icon name="logo" width={100} />
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
            <button onClick={toggleNavbar}>
              {/* {mobileDrawerOpen ? <X /> : <Menu />} */}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex w-full flex-col items-center justify-center bg-neutral-900 p-12 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex">
              <a href="#" className="rounded-md border px-3 py-2">
                Sign In
              </a>
              <a
                href="#"
                className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
