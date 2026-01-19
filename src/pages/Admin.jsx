import { useState } from "react";
import { products as initialProducts } from "../data/product";

export default function Admin() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("adminProducts")) ||
      initialProducts
  );

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    thumbnail: "",
    description: "",
  });

  const save = (list) => {
    setProducts(list);
    localStorage.setItem(
      "adminProducts",
      JSON.stringify(list)
    );
  };

  const addProduct = () => {
    if (!form.title || !form.price || !form.category) {
      alert("Fill all required fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
    };

    save([...products, newProduct]);
    setForm({
      title: "",
      price: "",
      category: "",
      thumbnail: "",
      description: "",
    });
  };

  const removeProduct = (id) => {
    save(products.filter((p) => p.id !== id));
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>

      <div className="form">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />
        <input
          placeholder="Category (groceries/furniture/fashion/beauty)"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />
        <input
          placeholder="Image URL"
          value={form.thumbnail}
          onChange={(e) =>
            setForm({ ...form, thumbnail: e.target.value })
          }
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <h3>All Products</h3>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "10px",
          }}
        >
          {p.title} – ₹{p.price}
          <button
            onClick={() => removeProduct(p.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
