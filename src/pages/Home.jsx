import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { products as allProducts } from "../data/product";

export default function Home() {
  const [products] = useState(allProducts);
  const [search, setSearch] = useState("");
  const { addToCart, toast } = useCart();

  const categories = ["groceries", "furniture", "fashion", "beauty"];

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="container" id="home">
        {categories.map((cat) => (
          <div key={cat} className="category" id={cat}>
            <h2 style={{ textTransform: "capitalize" }}>{cat}</h2>

            <div className="grid">
              {products
                .filter((p) => p.category === cat)
                .filter((p) =>
                  p.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((p) => (
                  <div key={p.id} className="card">
                    {/* CLICKABLE PRODUCT → DETAIL PAGE */}
                    <Link to={`/product/${p.id}`} className="card-link">
                      <img src={p.thumbnail} alt={p.title} />
                      <h3>{p.title}</h3>
                      <p className="price">₹{p.price}</p>
                    </Link>

                    {/* ADD TO CART */}
                    <button onClick={() => addToCart(p)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
