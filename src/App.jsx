import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Account from "./pages/Account";

function App() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [heightNavbar, setHeightNavbar] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      setIsScrolled(element.scrollTop > 0);
    };

    const element = scrollRef.current;
    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="container"
      ref={scrollRef}
      className={`flex h-screen flex-col space-y-10 overflow-x-hidden ${mobileDrawerOpen ? "overflow-y-hidden" : ""} `}
    >
      <Navbar
        toggleNavbar={toggleNavbar}
        mobileDrawerOpen={mobileDrawerOpen}
        isScrolled={isScrolled}
      />
      <div
        className="mx-auto w-full max-w-7xl flex-grow px-4 lg:px-6"
        id="hero_container"
      >
        {mobileDrawerOpen ? (
          <div
            id="drawer_overlay"
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
          <Route path="/products/:collection" element={<ProductList />} />
          <Route path="/product/:guid" element={<ProductDetail />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
