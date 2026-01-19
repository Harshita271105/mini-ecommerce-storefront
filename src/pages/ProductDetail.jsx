import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/product";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product not found</h2>;
  }

  return (
    <>
      <Navbar search="" setSearch={() => {}} />

      <div className="container product-detail">
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "300px", border: "1px solid #ddd" }}
        />

        <div>
          <h2>{product.title}</h2>
          <h3>₹{product.price}</h3>
          <p>{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            style={{ marginTop: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
