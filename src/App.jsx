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
import ReturnsExchanges from "./pages/ReturnsExchanges";
import Shipping from "./pages/Shipping";
import axios from "axios";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingCustomers, setIsLoadingCustomers] = useState(true);
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [addWishlist, setAddWishlist] = useState(false);
  const [errorLogIn, setErrorLogIn] = useState(null);
  const [user, setUser] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [heightNavbar, setHeightNavbar] = useState(0);
  const [announcementBarHeight, setAnnouncementBarHeight] = useState(0);
  const containerRef = useRef(null);
  const [categoryList, setCategoryList] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const fetchCategories = async () => {
    try {
      setIsLoadingCategories(true);
      const response = await axios.get(
        `${import.meta.env.VITE_ENV === "development" ? import.meta.env.VITE_API_LOCAL : import.meta.env.VITE_API_URL}/api/categories`,
      );
      setCategoryList(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const fetchCustomers = async () => {
    try {
      setIsLoadingCustomers(true);
      const response = await axios.get(
        `${import.meta.env.VITE_ENV === "development" ? import.meta.env.VITE_API_LOCAL : import.meta.env.VITE_API_URL}/api/customers`,
      );
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const fetchWishlist = async () => {
    if (isAuthenticated && user && user.customerid) {
      try {
        setIsLoadingWishlist(true);
        const response = await axios.get(
          `${import.meta.env.VITE_ENV === "development" ? import.meta.env.VITE_API_LOCAL : import.meta.env.VITE_API_URL}/api/wishlist/${user.customerid}`,
        );
        setWishlist(response.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setIsLoadingWishlist(false);
      }
    }
  };

  const updateHeight = () => {
    var navbar = document.querySelector("#navbar");
    setAnnouncementBarHeight(
      document.querySelector("#announcement_bar").offsetHeight,
    );
    if (navbar) {
      if (window.innerWidth <= 768) {
        setHeightNavbar(navbar.offsetHeight);
      } else {
        setHeightNavbar(navbar.offsetHeight + navbar.getClientRects()[0].top);
      }
    }
  };

  const fetchImages = async () => {
    try {
      setIsLoadingImage(true);
      const response = await axios.get(
        `${import.meta.env.VITE_ENV === "development" ? import.meta.env.VITE_API_LOCAL : import.meta.env.VITE_API_URL}/api/images`,
      );
      setImgData(response.data);
      updateHeight();
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoadingImage(false);
    }
  };

  const toggleNavbar = (e) => {
    e.stopPropagation();
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogin = async (user) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ENV === "development" ? import.meta.env.VITE_API_LOCAL : import.meta.env.VITE_API_URL}/api/customer-login`,
        user,
      );

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem(
          "authState",
          JSON.stringify({
            isAuthenticated: true,
            user: JSON.stringify(user),
            token: response.data.token,
          }),
        );
        setIsAuthenticated(true);
        setUser(() =>
          customers?.find(
            (customer) => customer.customeremail === user.customeremail,
          ),
        );
        setIsLoadingCustomers(false);
      }
    } catch (error) {
      setErrorLogIn("Your account is not registered");
      console.error("Login failed", error);
    }
  };

  const handleRegister = async (user) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ENV === "development" ? import.meta.env.VITE_API_LOCAL : import.meta.env.VITE_API_URL}/api/customer-create`,
        {
          customeremail: user.customeremail,
          customername: user.customername,
        },
      );

      if (response.status >= 200 && response.status < 300) {
        refreshCustomer(user);
        setUser(user);
      }
    } catch (error) {
      setErrorLogIn("Your account is not registered");
      console.error("Login failed", error);
    }
  };

  const refreshCustomer = async (user) => {
    await fetchCustomers();
  };

  const handleLogout = () => {
    localStorage.removeItem("authState");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    fetchWishlist();
  }, [user, addWishlist]);

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
    const parsedState = JSON.parse(localStorage.getItem("authState"));
    if (customers.length > 0 && parsedState) {
      setIsAuthenticated(parsedState.isAuthenticated);
      setUser(() =>
        customers?.find(
          (customer) =>
            customer.customeremail ===
            JSON.parse(parsedState.user).customeremail,
        ),
      );
    }
    if (!parsedState) {
      handleLogin(user);
    }
    setIsLoadingCustomers(false);
  }, [customers]);

  useEffect(() => {
    fetchCustomers();
    fetchImages();
    fetchCategories();

    const handleScroll = () => {
      const element = containerRef.current;
      setIsScrolled(element.scrollTop > 0);
    };

    const element = containerRef.current;

    element.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="container"
      ref={containerRef}
      className={`relative flex h-screen flex-col overflow-x-hidden lg:space-y-10 ${mobileDrawerOpen ? "overflow-y-hidden" : ""} `}
    >
      <ScrollToTop />
      <Navbar
        toggleNavbar={toggleNavbar}
        mobileDrawerOpen={mobileDrawerOpen}
        isScrolled={isScrolled}
        categoryList={categoryList}
        sideBarPosition={heightNavbar + announcementBarHeight}
      />
      <div
        className="mx-auto w-full max-w-7xl flex-grow px-4 lg:px-6"
        id="hero_container"
      >
        {mobileDrawerOpen && (
          <div
            id="drawer_overlay"
            className={`fixed inset-0 bg-black pt-20 transition-opacity duration-300 ${
              mobileDrawerOpen
                ? "z-20 opacity-50"
                : "pointer-events-none opacity-0"
            }`}
            onClick={toggleNavbar}
            style={{
              marginTop: `${heightNavbar + announcementBarHeight}px`,
            }}
          ></div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                heightNavbar={heightNavbar}
                imgData={imgData}
                isLoadingImage={isLoadingImage}
                categoryList={categoryList}
              />
            }
          />
          <Route path="/products" element={<Navigate to="/products/all" />} />
          <Route
            path="/products/:collection"
            element={
              <ProductList categoryList={categoryList} imgData={imgData} />
            }
          />
          <Route
            path="/product/:guid"
            element={
              <ProductDetail
                imgData={imgData}
                user={user}
                wishlist={wishlist}
                addWishlist={addWishlist}
                setAddWishlist={setAddWishlist}
              />
            }
          />
          <Route
            path="/account"
            element={
              <Account
                onLogin={handleLogin}
                errorLogIn={errorLogIn}
                setErrorLogIn={setErrorLogIn}
                isAuthenticated={isAuthenticated}
                user={user}
                wishlist={wishlist}
                imgData={imgData}
                isLoadingCustomers={isLoadingCustomers}
                handleLogout={handleLogout}
                onRegister={handleRegister}
              />
            }
          />
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
