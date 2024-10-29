import React from "react";
import Link from "next/link";
import "../allStyleFile/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link href="/" aria-label="Logo" className="footer-logo">
          LOGO
        </Link>
        <p className="footer-text">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
