import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductListSection from "./pages/ProductListSection";
import ProductDetailSection from "./pages/ProductDetailSection";

function App() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [heightNavbar, setHeightNavbar] = useState(0);

  const toggleNavbar = (e) => {
    e.stopPropagation();
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.querySelector("#sidebar").classList.add("translate-x-0");
      document.querySelector("#sidebar").classList.remove("translate-x-full");
    } else {
      document.querySelector("#sidebar").classList.remove("translate-x-0");
      document.querySelector("#sidebar").classList.add("translate-x-full");
    }
  }, [mobileDrawerOpen]);

  useEffect(() => {
    var navbar = document.querySelector("#navbar");
    const updateHeight = () => {
      if (navbar) {
        setHeightNavbar(navbar.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div
      id="container"
      className={`flex h-screen flex-col overflow-x-hidden ${mobileDrawerOpen ? "overflow-y-hidden" : ""} `}
    >
      <Navbar toggleNavbar={toggleNavbar} mobileDrawerOpen={mobileDrawerOpen} />
      <div
        className="mx-auto w-full max-w-7xl flex-grow px-4 lg:px-6"
        id="hero_container"
      >
        {mobileDrawerOpen ? (
          <div
            className={`fixed inset-0 bg-black pt-20 transition-opacity duration-300 ${
              mobileDrawerOpen
                ? "z-10 opacity-50"
                : "pointer-events-none opacity-0"
            }`}
            onClick={toggleNavbar}
            style={{ marginTop: `${heightNavbar}px` }}
          ></div>
        ) : (
          <></>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:collection"
            element={<ProductListSection />}
          />
          <Route path="/product/:guid" element={<ProductDetailSection />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
