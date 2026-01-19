import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />

      <div className="container" style={{ padding: "30px", maxWidth: "900px" }}>
        <h2 style={{ marginBottom: "20px" }}>My Profile</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "20px",
          }}
        >
          {/* LEFT CARD */}
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3>Harshita</h3>
            <p style={{ opacity: 0.8 }}>Customer</p>
          </div>

          {/* RIGHT CARD */}
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              Personal Information
            </h3>

            <div style={{ lineHeight: "2" }}>
              <p><strong>Email:</strong> harshita@email.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> Bengaluru, India</p>
              <p><strong>Pincode:</strong> 560001</p>
            </div>

            <button
              style={{
                marginTop: "20px",
                padding: "10px 16px",
                borderRadius: "6px",
                border: "none",
                background: "#2874f0",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
