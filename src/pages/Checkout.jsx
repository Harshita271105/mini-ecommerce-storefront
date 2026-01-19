import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      ),
      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    clearCart();
    alert("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="container form">
      <h2>Checkout</h2>

      <input placeholder="Name" />
      <input placeholder="Address" />
      <input placeholder="Phone" />

      <button className="checkout-btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}
