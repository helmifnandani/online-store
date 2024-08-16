import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductListSection from "./pages/ProductListSection";
import ProductDetailSection from "./pages/ProductDetailSection";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl flex-grow px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListSection />} />
          <Route path="/product/:guid" element={<ProductDetailSection />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
