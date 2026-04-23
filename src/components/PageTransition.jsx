import tokens from "../styles/tokens";

// ── PAGE TRANSITION ─────────────────────────────────────────────
export default function PageTransition({ state }) {
  return (
    <div style={{
      position: "fixed", inset: 0, background: tokens.red, zIndex: 9000,
      transform: "translateY(100%)", pointerEvents: "none",
      animation:
        state === "in"  ? "slideIn .5s cubic-bezier(.76,0,.24,1) forwards"
      : state === "out" ? "slideOut .5s cubic-bezier(.76,0,.24,1) forwards"
      : "none",
    }} />
  );
}
