import { useRef } from "react";
import tokens from "../styles/tokens";

// ── PARTICLES ───────────────────────────────────────────────────
export default function Particles() {
  const particles = useRef(
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left:   Math.random() * 100,
      bottom: Math.random() * 30,
      dur:    6 + Math.random() * 8,
      delay:  Math.random() * 6,
      drift:  (Math.random() - 0.5) * 60,
    }))
  ).current;

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute", width: 2, height: 2,
          background: tokens.red, borderRadius: "50%",
          left: `${p.left}%`, bottom: `${p.bottom}%`,
          animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          "--drift": `${p.drift}px`,
        }} />
      ))}
    </div>
  );
}
