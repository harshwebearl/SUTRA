import { useEffect } from "react";
import tokens from "../styles/tokens";
import { GLOBAL_CSS } from "../styles/globalCSS";

// ── INJECT GLOBAL CSS ───────────────────────────────────────────
export function InjectCSS() {
  useEffect(() => {
    if (document.getElementById("bhrama-global")) return;
    const style = document.createElement("style");
    style.id = "bhrama-global";
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => {
      const el = document.getElementById("bhrama-global");
      if (el) el.remove();
    };
  }, []);
  return null;
}

// ── SECTION LABEL ───────────────────────────────────────────────
export const SectionLabel = ({ children }) => (
  <p style={{
    fontFamily: "'Space Mono',monospace",
    fontSize: "clamp(.5rem,1.2vw,.6rem)", letterSpacing: ".5em",
    color: tokens.red, textTransform: "uppercase", marginBottom: "1.5rem",
  }}>{children}</p>
);

// ── SECTION TITLE ───────────────────────────────────────────────
export const SectionTitle = ({ children, style = {} }) => (
  <h2 style={{
    fontFamily: "'Cinzel Decorative',serif",
    fontSize: "clamp(1.6rem,5vw,4rem)", lineHeight: 1.1,
    marginBottom: "1rem", ...style,
  }}>{children}</h2>
);

// ── SECTION DESC ────────────────────────────────────────────────
export const SectionDesc = ({ children, style = {} }) => (
  <p style={{
    color: tokens.silver, fontStyle: "italic",
    fontSize: "clamp(.95rem,2vw,1.1rem)", maxWidth: 500, lineHeight: 1.8, ...style,
  }}>{children}</p>
);

// ── PRIMARY BUTTON ──────────────────────────────────────────────
export const BtnPrimary = ({ children, onClick, style = {} }) => (
  <button onClick={onClick} style={{
    fontFamily: "'Space Mono',monospace",
    fontSize: "clamp(.55rem,1.2vw,.65rem)", letterSpacing: ".2em",
    textTransform: "uppercase",
    padding: "clamp(.7rem,2vw,1rem) clamp(1.5rem,4vw,2.5rem)",
    background: tokens.red, color: tokens.white, border: "none", cursor: "pointer",
    position: "relative", overflow: "hidden", transition: "all .3s", ...style,
  }}>{children}</button>
);

// ── OUTLINE BUTTON ──────────────────────────────────────────────
export const BtnOutline = ({ children, onClick, style = {} }) => (
  <button onClick={onClick} style={{
    fontFamily: "'Space Mono',monospace",
    fontSize: "clamp(.55rem,1.2vw,.65rem)", letterSpacing: ".2em",
    textTransform: "uppercase",
    padding: "clamp(.7rem,2vw,1rem) clamp(1.5rem,4vw,2.5rem)",
    background: "transparent", color: tokens.white,
    border: `1px solid ${tokens.ash}`, cursor: "pointer",
    transition: "all .3s", ...style,
  }}>{children}</button>
);
