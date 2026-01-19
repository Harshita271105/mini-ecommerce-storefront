import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <>
        <Navbar search="" setSearch={() => {}} />

        <div className="container">
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <>
      <Navbar search="" setSearch={() => {}} />

      <div className="container cart-page">
        <h2>My Cart</h2>

        <div className="cart-box">
          {cart.map((i) => (
            <div key={i.id} className="cart-row">
              {/* PRODUCT IMAGE */}
              <img
                src={i.thumbnail}
                alt={i.title}
                className="cart-img"
              />

              {/* PRODUCT DETAILS */}
              <div className="cart-info">
                <h4>{i.title}</h4>
                <p>₹{i.price}</p>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(i.id)}>-</button>
                  <span>{i.qty}</span>
                  <button onClick={() => increaseQty(i.id)}>+</button>
                </div>
              </div>

              {/* PRICE */}
              <div className="cart-price">
                ₹{i.price * i.qty}
              </div>

              {/* REMOVE */}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(i.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="cart-summary">
          <h3>Total: ₹{total}</h3>
          <Link to="/checkout">
            <button className="checkout-btn">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
