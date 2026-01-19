import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      return exists
        ? prev.map(i =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...prev, { ...product, qty: 1 }];
    });

    setToast("Item added to your cart");
    setTimeout(() => setToast(""), 2000);
  };

  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        toast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
