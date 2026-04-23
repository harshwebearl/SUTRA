import { useState } from "react";
import tokens from "../styles/tokens";
import { FaTrash, FaPlus, FaMinus, FaCheck } from "react-icons/fa";

export default function CartPage({ navigate, cart, setCart }) {
  const [message, setMessage] = useState("");

  const isSameItem = (a, b) => {
  return a.name === b.name && a.size === b.size && a.color === b.color;
};

  // ✅ Increase
  const increaseQty = (product) => {
  setCart((prev) =>
    prev.map((item) =>
      isSameItem(item, product)
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    )
  );
};

  // ✅ Decrease (min 1)
 const decreaseQty = (product) => {
  setCart((prev) =>
    prev.map((item) =>
      isSameItem(item, product)
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    )
  );
};

  // ✅ Remove
 const removeFromCart = (product) => {
  setCart((prev) => prev.filter((item) => !isSameItem(item, product)));
};

  // ✅ Total Price
  const totalPrice = cart.reduce((total, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^0-9]/g, ""))
        : item.price;

    return total + price * (item.quantity || 1);
  }, 0);

  // ✅ Checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      setMessage("Cart is empty ❌");
    } else {
      setMessage("Order placed successfully ✅");
      setCart([]);
    }
  };

  return (
    <div
      style={{
        paddingTop: 70,
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* TITLE */}
      <h1 style={{ textAlign: "center", margin: "2rem 0", color: tokens.red }}>
        My Cart
      </h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: tokens.silver }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          {/* HEADER */}
          <div style={tableHeader}>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Remove</span>
          </div>

          {/* ITEMS */}
          {cart.map((p, i) => {
            const price =
              typeof p.price === "string"
                ? Number(p.price.replace(/[^0-9]/g, ""))
                : p.price;

            const qty = p.quantity || 1;
            const itemTotal = price * qty;

            return (
              <div key={p.name + i} style={row}>
<div style={productCol}>
  <img src={p.image} alt={p.name} style={imgStyle} />
  <div>
    <span>{p.name}</span>
    {p.size && <span style={{ display: "block", fontSize: "12px", opacity: 0.7 }}>Size: {p.size}</span>}
    {p.color && (
      <span style={{ display: "block", fontSize: "12px", opacity: 0.7 }}>
        Color: <span style={{ display: "inline-block", width: 12, height: 12, background: p.color, borderRadius: "50%", marginLeft: 4 }}></span>
      </span>
    )}
  </div>
</div>

                {/* PRICE (FIXED) */}
                <span>₹ {price.toLocaleString()}</span>

                {/* QUANTITY */}
                <div style={qtyBox}>
                  <button onClick={() => decreaseQty(p)} style={qtyBtn}>
                    <FaMinus />
                  </button>

                  <span>{qty}</span>

                  <button onClick={() => increaseQty(p)} style={qtyBtn}>
                    <FaPlus />
                  </button>
                </div>

                {/* TOTAL */}
                <span>₹ {itemTotal.toLocaleString()}</span>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(p)}
                  style={removeBtn}
                >
                  <FaTrash />
                </button>
              </div>
            );
          })}

          {/* TOTAL SECTION */}
          <div
            style={{
              textAlign: "right",
              marginTop: "2rem",
              paddingRight: "3rem",
            }}
          >
            <h2>Total: ₹ {totalPrice.toLocaleString()}</h2>

            <div style={{ marginTop: "1rem" }}>
              <button
                onClick={() => navigate("collection")}
                style={outlineBtn}
              >
                Continue Shopping
              </button>

              <button onClick={handleCheckout} style={mainBtn}>
                Checkout <FaCheck />
              </button>
            </div>

            {message && (
              <p style={{ marginTop: "1rem", color: tokens.red }}>
                {message}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const tableHeader = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 1fr 0.5fr",
  padding: "1rem 3rem",
  borderBottom: "1px solid #333",
  fontWeight: "bold",
};

const row = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 1fr 0.5fr",
  alignItems: "center",
  padding: "1rem 3rem",
  borderBottom: "1px solid #222",
};

const productCol = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const imgStyle = {
  width: "70px",
  height: "90px",
  objectFit: "cover",
  borderRadius: "10px",
};

const qtyBox = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const qtyBtn = {
  background: "#222",
  border: "none",
  color: "#fff",
  padding: "5px 8px",
  cursor: "pointer",
  borderRadius: "5px",
};

const removeBtn = {
  background: "transparent",
  border: "1px solid #ff4d4d",
  color: "#ff4d4d",
  padding: "6px 12px",
  cursor: "pointer",
  borderRadius: "6px",
  fontSize: "14px",
};

const mainBtn = {
  marginLeft: "10px",
  padding: "0.7rem 2rem",
  background: "#ff4d4d",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const outlineBtn = {
  padding: "0.7rem 2rem",
  background: "transparent",
  border: "1px solid #ff4d4d",
  color: "#ff4d4d",
  borderRadius: "10px",
  cursor: "pointer",
};