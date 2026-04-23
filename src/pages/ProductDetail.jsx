import { useState } from "react";
import tokens from "../styles/tokens";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function ProductDetail({ liked, setLiked, addToCart, navigate, product }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "M");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return (
      <div style={{ padding: 50, textAlign: "center", color: "#fff", background: "#000" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  // Compute current image based on selected color
  const getCurrentImage = () => {
    if (product.colorImages && selectedColor in product.colorImages) {
      return product.colorImages[selectedColor];
    }
    return product.image;
  };

  const toggleLike = () => {
    setLiked(prev => ({ ...prev, [product.name]: !prev[product.name] }));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    setShowModal(true);
  };

  return (
    <>
      <div style={{ paddingTop: 12, paddingBottom: 40, background: "#000", color: "#fff" }}>

        {/* Back Button */}
        <div style={{ padding: "1rem clamp(1rem,5vw,3rem)" }}>
          <button
            onClick={() => navigate("collection")}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: ".8rem",
              background: "transparent",
              border: "1px solid " + tokens.red,
              padding: "0.5rem 1rem",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            &larr; Back
          </button>
        </div>

        {/* Product Content */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            padding: "0 clamp(1rem,5vw,3rem)",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Image */}
          <div
            style={{
              flex: "1 1 280px",
              maxWidth: 280,
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {product.tag && (
              <span
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  background: tokens.red,
                  color: "#fff",
                  fontSize: "11px",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  zIndex: 1,
                }}
              >
                {product.tag}
              </span>
            )}
            <img
              src={getCurrentImage()}
              alt={product.name}
              style={{ width: "100%", display: "block", transition: "opacity 0.3s" }}
            />
          </div>

          {/* Product Details */}
          <div style={{ flex: "1 1 300px", maxWidth: 420 }}>
            <p style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 4px" }}>
              {product.cat}
            </p>

            <h1 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.1rem, 3vw, 1.5rem)", margin: "0 0 8px", lineHeight: 1.3 }}>
              {product.name}
            </h1>

            <p style={{ color: tokens.red, fontSize: "1.3rem", fontWeight: 600, margin: "0 0 12px" }}>
              {product.price}
            </p>

            <p style={{ opacity: 0.75, fontSize: "14px", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
              {product.description || "No description available"}
            </p>

            {/* Size Selector */}
            {product.sizes && (
              <div style={{ marginBottom: "1.2rem" }}>
                <p style={{ fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 8px" }}>
                  Size
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        background: selectedSize === size ? tokens.red : "transparent",
                        color: "#fff",
                        border: selectedSize === size ? "none" : "1px solid #555",
                        padding: "5px 14px",
                        cursor: "pointer",
                        fontSize: "13px",
                        transition: "background 0.2s",
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors && (
              <div style={{ marginBottom: "1.2rem" }}>
                <p style={{ fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 8px" }}>
                  Color
                </p>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  {product.colors.map(color => (
                    <div
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: color,
                        border: selectedColor === color ? `2px solid ${tokens.red}` : "1px solid #555",
                        cursor: "pointer",
                        transition: "border 0.2s",
                      }}
                    />
                  ))}
                </div>
                <p style={{ fontSize: "12px", color: "#aaa", marginTop: 6, textTransform: "capitalize" }}>
                  {selectedColor}
                </p>
              </div>
            )}

            {/* Quantity Selector */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 8px" }}>
                Quantity
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  style={{
                    width: 32, height: 32,
                    background: "transparent",
                    border: "1px solid #555",
                    color: "#fff",
                    fontSize: "18px",
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  −
                </button>
                <span style={{ fontSize: "15px", minWidth: 24, textAlign: "center" }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  style={{
                    width: 32, height: 32,
                    background: "transparent",
                    border: "1px solid #555",
                    color: "#fff",
                    fontSize: "18px",
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={toggleLike}
                style={{
                  cursor: "pointer",
                  background: liked[product.name] ? tokens.red : "transparent",
                  color: "#fff",
                  border: liked[product.name] ? "none" : "1px solid #555",
                  padding: "9px 18px",
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: "13px",
                  transition: "background 0.2s",
                }}
              >
                <FaHeart /> {liked[product.name] ? "Liked" : "Like"}
              </button>

              <button
                onClick={handleAddToCart}
                style={{
                  cursor: "pointer",
                  background: tokens.red,
                  color: "#fff",
                  border: "none",
                  padding: "9px 22px",
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: "13px",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed", top: 0, left: 0,
            width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#111", color: "#fff",
              padding: "28px", borderRadius: "12px",
              width: "300px", textAlign: "center",
              border: "1px solid #333",
            }}
          >
            <h3 style={{ margin: "0 0 8px" }}>Added to Cart ✅</h3>
            <p style={{ color: "#aaa", fontSize: "14px", margin: "0 0 4px" }}>
              {product.name}
            </p>
            <p style={{ color: "#666", fontSize: "13px", margin: "0 0 16px" }}>
              Size: {selectedSize} &nbsp;|&nbsp; Qty: {quantity}
            </p>
            <button
              onClick={() => setShowModal(false)}
              style={{
                padding: "8px 24px",
                background: tokens.red, color: "#fff",
                border: "none", cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}