import React from "react";

const Footer = () => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3 py-3 bg-light">
      <span>&copy; 2026 Airbnb</span>

      <a href="#privacy" className="text-decoration-none text-dark">
        Privacy
      </a>

      <a href="#terms" className="text-decoration-none text-dark">
        Terms
      </a>

      <a href="#company" className="text-decoration-none text-dark">
        Company details
      </a>
    </div>
  );
};

export default Footer;
