import { useState, useEffect } from "react";
import tokens from "../styles/tokens";

// ── LOADER ──────────────────────────────────────────────────────
export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t  = setTimeout(() => setVisible(false), 2200);
    const t2 = setTimeout(onDone, 2700);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#000", zIndex: 99999,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: "2rem",
      opacity: visible ? 1 : 0, transition: "opacity .5s ease",
      pointerEvents: visible ? "auto" : "none",
    }}>
      <div style={{
        fontFamily: "'Cinzel Decorative',serif",
        fontSize: "clamp(.9rem,4vw,2rem)", letterSpacing: ".4em",
        color: tokens.white, animation: "fadeUp .8s ease .5s both", textAlign: "center",
      }}>
        BHRAMACHARI
      </div>
      <div style={{ width: "min(200px,60vw)", height: 1, background: tokens.ash, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          background: tokens.red, width: 0,
          animation: "loadProgress 1.5s ease .8s forwards",
        }} />
      </div>
    </div>
  );
}
