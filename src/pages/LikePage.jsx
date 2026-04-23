import { useState } from "react";
import tokens from "../styles/tokens";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import ProductDetail from "./ProductDetail";

export default function LikedPage({
  navigate,
  likedProducts = [],
  addToCart,
  liked,
  setLiked,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ fallback: always use correct data
  const products = liked && liked.length ? liked : likedProducts;

  // ✅ REMOVE FROM LIKED
  const removeFromLiked = (productName) => {
    const updated = products.filter((item) => item.name !== productName);
    setLiked(updated);

    // close popup if deleted
    if (selectedProduct?.name === productName) {
      setSelectedProduct(null);
    }
  };

  return (
    <div style={{ paddingTop: 70 }}>
      <h1 style={{ textAlign: "center", margin: "2rem 0", color: tokens.red }}>
        Liked Products
      </h1>

      {products.length === 0 ? (
        <p style={{ textAlign: "center", color: tokens.silver }}>
          No liked products yet.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: 20,
            padding: "20px clamp(1rem,5vw,3rem) clamp(3rem,8vw,6rem)",
          }}
        >
          {products.map((p) => (
            <div
              key={p.name}
              onClick={() => setSelectedProduct(p)}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "4/6",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
 
              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }}
              />

              {/* LEFT ACTIONS */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  display: "flex",
                  gap: ".5rem",
                  zIndex: 2,
                }}
              >
                <button
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    background: tokens.red,
                    border: "none",
                    padding: ".5rem",
                    borderRadius: "50%",
                    color: tokens.white,
                    cursor: "pointer",
                  }}
                >
                  <FaHeart size={16} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      ...p,
                      size: p.sizes?.[0] || "Free",
                      qty: 1,
                    });
                  }}
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "none",
                    padding: ".5rem",
                    borderRadius: "50%",
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  <FaShoppingCart size={16} />
                </button>
              </div>

              {/* ✅ DELETE BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromLiked(p.name);
                }}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "red",
                  border: "none",
                  padding: ".5rem",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  zIndex: 3,
                }}
              >
                <FaTrash size={14} />
              </button>

              {/* TEXT */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  padding: "1rem",
                  color: "black",
                  fontSize: "30px",
                }}
              >
                <div>{p.name}</div>
                <div>{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* POPUP */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90%",
              maxWidth: "900px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "20px",
            }}
          >
            <ProductDetail
              product={selectedProduct}
              liked={liked}
              setLiked={setLiked}
              addToCart={addToCart}
              navigate={() => setSelectedProduct(null)}
            />
          </div>
        </div>
      )}

      {/* BACK */}
      <button
        onClick={() => navigate("collection")}
        style={{
          margin: "2rem auto",
          display: "block",
          padding: "0.6rem 1.2rem",
          background: tokens.red,
          color: tokens.white,
          border: "none",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Back to Collection
      </button>
    </div>
  );
}