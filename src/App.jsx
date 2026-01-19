import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      {/* ✅ FOOTER ON ALL PAGES */}
      <Footer />
    </BrowserRouter>
  );
}

 