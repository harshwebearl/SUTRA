// import { useEffect, useRef } from "react";
// import tokens from "../styles/tokens";

// // ── CURSOR ──────────────────────────────────────────────────────
// export default function Cursor() {
//   const cursorRef = useRef(null);
//   const trailRef  = useRef(null);
//   const pos       = useRef({ mx: 0, my: 0, tx: 0, ty: 0 });

//   useEffect(() => {
//     if (!window.matchMedia("(pointer:fine)").matches) return;

//     const onMove = (e) => {
//       pos.current.mx = e.clientX;
//       pos.current.my = e.clientY;
//       if (cursorRef.current) {
//         cursorRef.current.style.left = (e.clientX - 6)  + "px";
//         cursorRef.current.style.top  = (e.clientY - 6)  + "px";
//       }
//     };
//     document.addEventListener("mousemove", onMove);

//     let raf;
//     const animate = () => {
//       pos.current.tx += (pos.current.mx - pos.current.tx) * 0.1;
//       pos.current.ty += (pos.current.my - pos.current.ty) * 0.1;
//       if (trailRef.current) {
//         trailRef.current.style.left = (pos.current.tx - 18) + "px";
//         trailRef.current.style.top  = (pos.current.ty - 18) + "px";
//       }
//       raf = requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       document.removeEventListener("mousemove", onMove);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   const isFine = typeof window !== "undefined" && window.matchMedia("(pointer:fine)").matches;
//   if (!isFine) return null;

//   return (
//     <>
//       <div ref={cursorRef} style={{
//         width: 12, height: 12, background: tokens.red, borderRadius: "50%",
//         position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999,
//         transition: "transform .1s ease", mixBlendMode: "difference",
//       }} />
//       <div ref={trailRef} style={{
//         width: 36, height: 36, border: `1px solid ${tokens.red}`, borderRadius: "50%",
//         position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9998,
//         transition: "all .15s ease", opacity: .5,
//       }} />
//     </>
//   );
// }

import { useEffect, useRef } from "react";
import tokens from "../styles/tokens";

// ── CURSOR ──────────────────────────────────────────────────────
export default function Cursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, tx: 0, ty: 0 });

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;

    // 🔥 Hide default cursor
    document.body.style.cursor = "none";

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + "px";
        cursorRef.current.style.top = e.clientY - 6 + "px";
      }
    };

    // 🔥 Hover effect (buttons / links)
    const onHover = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1.8)";
      }
      if (trailRef.current) {
        trailRef.current.style.transform = "scale(1.5)";
      }
    };

    const onLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1)";
      }
      if (trailRef.current) {
        trailRef.current.style.transform = "scale(1)";
      }
    };

    document.addEventListener("mousemove", onMove);

    const hoverElements = document.querySelectorAll("button, a");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    let raf;
    const animate = () => {
      pos.current.tx += (pos.current.mx - pos.current.tx) * 0.1;
      pos.current.ty += (pos.current.my - pos.current.ty) * 0.1;

      if (trailRef.current) {
        trailRef.current.style.left = pos.current.tx - 18 + "px";
        trailRef.current.style.top = pos.current.ty - 18 + "px";
      }

      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", onMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  const isFine =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer:fine)").matches;

  if (!isFine) return null;

  return (
    <>
      {/* 🔴 Main Cursor */}
      <div
        ref={cursorRef}
        style={{
          width: 12,
          height: 12,
          background: tokens.red,
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10001, // ✅ always top
          transition: "transform .15s ease",
          mixBlendMode: "difference",
        }}
      />

      {/* 🔴 Trail Cursor */}
      <div
        ref={trailRef}
        style={{
          width: 36,
          height: 36,
          border: `1px solid ${tokens.red}`,
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10000, // ✅ below main cursor
          transition: "all .2s ease",
          opacity: 0.5,
        }}
      />
    </>
  );
}