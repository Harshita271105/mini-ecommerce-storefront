import Navbar from "../components/Navbar";

export default function Orders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <>
      <Navbar />

      <div className="container" style={{ padding: "30px", maxWidth: "1000px" }}>
        <h2>My Orders</h2>

        {orders.length === 0 ? (
          <p style={{ marginTop: "20px", opacity: 0.8 }}>
            You have not placed any orders yet.
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                marginTop: "20px",
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              {/* ORDER HEADER */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <strong>Order ID:</strong> {order.id}
                  <p style={{ margin: 0, opacity: 0.8 }}>
                    Placed on {order.date}
                  </p>
                </div>

                <div
                  style={{
                    padding: "6px 12px",
                    background: "#e6f4ea",
                    color: "#137333",
                    borderRadius: "20px",
                    fontSize: "13px",
                    height: "fit-content",
                  }}
                >
                  Delivered
                </div>
              </div>

              {/* ITEMS */}
              {order.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderTop: "1px solid var(--border-color)",
                    padding: "12px 0",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      marginRight: "15px",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0 }}>
                      <strong>{item.title}</strong>
                    </p>
                    <p style={{ margin: 0, opacity: 0.8 }}>
                      Quantity: {item.qty}
                    </p>
                  </div>

                  <div>
                    ₹{item.price * item.qty}
                  </div>
                </div>
              ))}

              {/* TOTAL */}
              <div
                style={{
                  textAlign: "right",
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Order Total: ₹{order.total}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
