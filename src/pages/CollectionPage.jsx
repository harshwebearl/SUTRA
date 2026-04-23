import { useState } from "react";
import tokens from "../styles/tokens";
import { useReveal } from "../hooks/useReveal";
import { SectionLabel, SectionTitle, SectionDesc } from "../components/UI";
import Footer from "../components/Footer";
import ProductDetail from "./ProductDetail";
import { products } from "../data";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const filters = ["all", "Kurta-Sets", "co-Ords", "dresses", "jackets"];

export default function CollectionPage({ navigate, liked, setLiked, addToCart }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hovered, setHovered] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useReveal("collection");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.cat === activeFilter);

  const toggleLike = (product) => {
    setLiked((prev) => ({
      ...prev,
      [product.name]: !prev[product.name],
    }));
  };

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Header */}
      <div
        className="reveal"
        style={{
          textAlign: "center",
          padding: "clamp(2rem,6vw,4rem) clamp(1rem,5vw,3rem) 1rem",
        }}
      >
        <SectionLabel>SS 2025</SectionLabel>
        <SectionTitle>The Full Collection</SectionTitle>
        <SectionDesc style={{ margin: ".8rem auto" }}>
          Garments that carry stories. Silence stitched into fabric.
        </SectionDesc>
      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: ".5rem",
          justifyContent: "center",
          padding: "1.5rem clamp(1rem,5vw,3rem)",
          flexWrap: "wrap",
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "clamp(.5rem,1.5vw,.6rem)",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              padding: "clamp(.5rem,1.5vw,.6rem) clamp(.8rem,2vw,1.5rem)",
              background: activeFilter === f ? tokens.red : "transparent",
              color: activeFilter === f ? tokens.white : tokens.silver,
              border: `1px solid ${
                activeFilter === f ? tokens.red : tokens.ash
              }`,
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          padding: "20px clamp(1rem,5vw,3rem) clamp(3rem,8vw,6rem)",
        }}
      >
        {filtered.map((p, i) => (
          <div
            key={p.name + i}
            onClick={() => setSelectedProduct(p)}
            onMouseEnter={() => setHovered(p.name)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: "pointer",
              transition: "all 0.4s ease",
              transform: hovered === p.name ? "scale(1.03)" : "scale(1)",
            }}
          >
            {/* IMAGE */}
          <div
  style={{
    height: "280px",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    boxShadow:
      hovered === p.name
        ? "0 20px 40px rgba(0,0,0,0.6)"
        : "0 10px 30px rgba(0,0,0,0.4)",
  }}
>
  {/* 🔥 Background Blur (fills full card) */}
  <img
    src={p.image}
    alt=""
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "blur(20px)",
      transform: "scale(1.2)",
    }}
  />

  {/* ✅ Main Image (perfect fit) */}
  <img
    src={p.image}
    alt={p.name}
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transition: "transform 0.4s ease",
      transform: hovered === p.name ? "scale(1.05)" : "scale(1)",
    }}
  />
</div>

            {/* TEXT + ACTIONS */}
            <div
              style={{
                padding: "0.8rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
               background: "#1a1a1ab4",
              }}
            >
              {/* LEFT */}
              <div>
                <div
                  style={{
                    fontFamily: "'Cinzel Decorative',serif",
                    fontSize: "14px",
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    color: tokens.red,
                    fontSize: "18px",
                    marginTop: "4px",
                  }}
                >
                  {p.price}
                </div>
              </div>

              {/* RIGHT BUTTONS */}
              <div style={{ display: "flex", gap: "10px" }}>
  {/* ❤️ LIKE */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      toggleLike(p);
    }}
    onMouseEnter={(e) => {
      if (!liked[p.name]) {
        e.currentTarget.style.color = tokens.red;
      }
    }}
    onMouseLeave={(e) => {
      if (!liked[p.name]) {
        e.currentTarget.style.color = "#fff";
      }
    }}
    style={{
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#222", // ✅ same always
      border: "none",
      cursor: "pointer",
      color: liked[p.name] ? tokens.red : "#fff", // ✅ selected = red
      transition: "all 0.3s ease",
    }}
  >
    <FaHeart size={16} />
  </button>

  {/* 🛒 CART */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      addToCart(p);
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = tokens.red;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = "#fff";
    }}
    style={{
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#222", // ✅ same always
      border: "none",
      cursor: "pointer",
      color: "#fff", // ✅ default white
      transition: "all 0.3s ease",
    }}
  >
    <FaShoppingCart size={16} />
  </button>
</div>
              </div>
            </div>
          
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#000",
              border: "1px solid #333",
              width: "90%",
              maxWidth: "900px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <ProductDetail
              product={selectedProduct}
              liked={liked}
              setLiked={setLiked}
              addToCart={addToCart}
              navigate={(page) => {
                if (page === "collection") {
                  setSelectedProduct(null);
                }
              }}
            />
          </div>
        </div>
      )}

      <Footer navigate={navigate} />
    </div>
  );
}