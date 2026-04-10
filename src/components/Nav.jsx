import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import tokens from "../styles/tokens";
import logo from "../components/sutra logo.png";

export default function Nav({ currentPage, navigate, cartCount, likedProductsCount }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const doNav = (page) => { 
    setMobileOpen(false); 
    navigate(page); 
  };

  const pages  = ["home", "collection", "about", "contact"];
  const labels = { home: "Home", collection: "Collection", about: "Atelier",  contact: "Contact" };

  return (
    <>
      {/* Desktop Nav Bar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 70, padding: "0 clamp(1rem,4vw,3rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "linear-gradient(to bottom,rgba(0,0,0,.95),transparent)",
        backdropFilter: "blur(4px)",
      }}>
        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); doNav("home"); }}>
          <img src={logo} alt="Sutra Logo" style={{ height: "150px", marginTop: "20px", marginLeft: "-40px", objectFit: "contain", cursor: "pointer" }} />
        </a>

        {/* Desktop Links */}
        <ul style={{ display: "flex", gap: "clamp(1.2rem,2.5vw,2.5rem)", listStyle: "none" }}>
          {pages.map(p => (
            <li key={p} style={{ display: window.innerWidth <= 768 ? "none" : "block" }}>
              <a href="#" onClick={e => { e.preventDefault(); doNav(p); }} style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "clamp(.5rem,.9vw,.65rem)", letterSpacing: ".2em",
                textTransform: "uppercase",
                color: currentPage === p ? tokens.red : tokens.silver,
                textDecoration: "none", transition: "color .3s",
              }}>{labels[p]}</a>
            </li>
          ))}
        </ul>

        {/* Right Corner Buttons */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {/* Heart / Liked Page Button */}
          <button onClick={() => doNav("liked")} style={{
            background: likedProductsCount > 0 ? tokens.red : tokens.white,
            border: "none", padding: ".5rem",
            cursor: "pointer", color: likedProductsCount > 0 ? tokens.white : tokens.red,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", transition: "all .3s"
          }}>
            <FaHeart size={18} />
            {likedProductsCount > 0 && (
              <span style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                background: tokens.white,
                color: tokens.red,
                borderRadius: "50%",
                fontSize: "10px",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}>{likedProductsCount}</span>
            )}
          </button>

          {/* Cart Button */}
          <button onClick={() => doNav("cart")} style={{
            background: cartCount > 0 ? tokens.red : tokens.white,
            border: "none", padding: ".5rem",
            cursor: "pointer", color: cartCount > 0 ? tokens.white : tokens.red,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", transition: "all .3s"
          }}>
            <FaShoppingCart size={18} />
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                background: tokens.white,
                color: tokens.red,
                borderRadius: "50%",
                fontSize: "10px",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}>{cartCount}</span>
            )}
          </button>
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 5, background: "none", border: "none", padding: 6, cursor: "pointer", zIndex: 1100 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: 24, height: 1, background: tokens.white,
              transition: "all .3s",
              transform: mobileOpen && i === 0 ? "translateY(6px) rotate(45deg)" :
                         mobileOpen && i === 2 ? "translateY(-6px) rotate(-45deg)" : "none",
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <ul style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,.97)", zIndex: 1050,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: "2rem", listStyle: "none",
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform .4s cubic-bezier(.76,0,.24,1)",
      }}>
        {pages.map(p => (
          <li key={p}>
            <a href="#" onClick={e => { e.preventDefault(); doNav(p); }} style={{
              fontFamily: "'Cinzel Decorative',serif",
              fontSize: "clamp(1.2rem,6vw,2.5rem)", letterSpacing: ".1em",
              color: currentPage === p ? tokens.red : tokens.silver,
              textDecoration: "none",
            }}>{labels[p]}</a>
          </li>
        ))}
      </ul>
    </>
  );
}