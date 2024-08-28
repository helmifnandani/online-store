import { useState, useEffect, useRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Account from "./pages/Account";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Input from "./pages/Input";
import ReturnsExchanges from "./pages/ReturnsExchanges";
import Shipping from "./pages/Shipping";
import { categories } from "./constants";

function App() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [heightNavbar, setHeightNavbar] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList(categories);
  }, []);
  const toggleNavbar = (e) => {
    e.stopPropagation();
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.querySelector("#sidebar").classList.add("translate-x-0");
      document.querySelector("#sidebar").classList.remove("-translate-x-full");
    } else {
      document.querySelector("#sidebar").classList.remove("translate-x-0");
      document.querySelector("#sidebar").classList.add("-translate-x-full");
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
      const element = containerRef.current;
      setIsScrolled(element.scrollTop > 0);
    };

    const element = containerRef.current;
    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="container"
      ref={containerRef}
      className={`flex h-screen flex-col overflow-x-hidden lg:space-y-10 ${mobileDrawerOpen ? "overflow-y-hidden" : ""} `}
    >
      <Navbar
        toggleNavbar={toggleNavbar}
        mobileDrawerOpen={mobileDrawerOpen}
        isScrolled={isScrolled}
        categoryList={categoryList}
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
                ? "z-20 opacity-50"
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
          <Route path="/products" element={<Navigate to="/products/all" />} />
          <Route
            path="/products/:collection"
            element={<ProductList categoryList={categoryList} />}
          />
          <Route path="/product/:guid" element={<ProductDetail />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/returnsExchanges" element={<ReturnsExchanges />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
