export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ABOUT */}
        <div className="footer-section">
          <h4>About</h4>
          <p>ShopEase is a mini e-commerce platform built using React.</p>
          <p>Created for internship & learning purposes.</p>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Groceries</p>
          <p>Furniture</p>
          <p>Fashion</p>
          <p>Beauty</p>
        </div>

        {/* HELP */}
        <div className="footer-section">
          <h4>Help</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>FAQ</p>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@shopease.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
