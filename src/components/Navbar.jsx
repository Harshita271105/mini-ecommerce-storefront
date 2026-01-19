import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ search = "", setSearch = () => {} }) {
  const [open, setOpen] = useState(false);
  const { cart, clearCart } = useCart();
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ SIMPLE LOGOUT (NO CONDITIONS)
  const logout = () => {
    localStorage.clear();
    clearCart();
    alert("Logged out");
    navigate("/");
  };

  return (
    <>
      {/* ===== TOP NAVBAR ===== */}
      <div className="topbar">
        <div className="top-left">
          <div className="logo" onClick={() => goToSection("home")}>
            ShopEase
          </div>
        </div>

        <div className="top-center">
          <div className="search-box">
            <input
              placeholder="Search for products, brands and more"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="top-actions">
          {/* 🌙 THEME TOGGLE */}
          <button onClick={toggleTheme} style={{ marginRight: "10px" }}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* 👤 ACCOUNT DROPDOWN */}
          <div className="login-wrapper">
            <div className="login-btn" onClick={() => setOpen(!open)}>
              Account
            </div>

            {open && (
              <div className="login-dropdown">
                <div onClick={() => navigate("/login")}>Login</div>
                <div onClick={() => navigate("/signup")}>Sign Up</div>

                {/* ✅ ALWAYS VISIBLE */}
                <div onClick={() => navigate("/profile")}>
                  My Profile
                </div>

                <div onClick={() => navigate("/orders")}>
                  Orders
                </div>

                <div
                  onClick={logout}
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="cart-btn">
            🛒 Cart ({cart.length})
          </Link>
        </div>
      </div>

      {/* ===== CATEGORY BAR ===== */}
      <div className="category-bar">
        <div onClick={() => goToSection("home")}>Home 🏠</div>
        <div onClick={() => goToSection("groceries")}>Grocery 🛒</div>
        <div onClick={() => goToSection("furniture")}>Furniture 🛋️</div>
        <div onClick={() => goToSection("fashion")}>Fashion 👗</div>
        <div onClick={() => goToSection("beauty")}>Beauty 💄</div>
      </div>
    </>
  );
}
