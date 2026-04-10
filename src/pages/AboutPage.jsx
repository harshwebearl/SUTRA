// import tokens from "../styles/tokens";
// import { useReveal } from "../hooks/useReveal";
// import { SectionLabel } from "../components/UI";
// import Footer from "../components/Footer";

// // ── ABOUT PAGE ──────────────────────────────────────────────────
// const values = [
//   "Handcrafted in India, worn across the world",
//   "Slow fashion — limited drops, no excess",
//   "Sustainably sourced natural fabrics",
//   "Each piece numbered and authenticated",
//   "Zero synthetic dyes in core collection",
// ];

// const stats = [
//   ["2024", "Year Founded"],
//   ["India", "Country of Origin"],
//   ["Limited", "Drops per Year"],
//   ["100%", "Natural Fabrics"],
// ];

// export default function AboutPage({ navigate }) {
//   useReveal("about");

//   return (
//     <div style={{ paddingTop: 70 }}>
//       {/* Hero Banner */}
//       <div style={{
//         minHeight: "clamp(280px,50vw,500px)",
//         display: "flex", alignItems: "flex-end",
//         padding: "clamp(2rem,6vw,4rem) clamp(1rem,5vw,3rem)",
//         position: "relative",
//         background: "linear-gradient(to bottom right,#0a0000,#000,#050010)",
//         overflow: "hidden",
//       }}>
//         {/* Large background letter */}
//         <div style={{
//           fontFamily: "'Cinzel Decorative',serif",
//           fontSize: "clamp(20vw,35vw,40vw)",
//           color: "rgba(200,16,46,.04)", position: "absolute",
//           right: "-3vw", top: "50%", transform: "translateY(-50%)",
//           userSelect: "none", pointerEvents: "none",
//         }}>B</div>

//         <div style={{ position: "relative", zIndex: 2 }}>
//           <SectionLabel>Our Story</SectionLabel>
//           <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2rem,7vw,5.5rem)", lineHeight: 1.1 }}>
//             The Atelier
//           </h1>
//         </div>
//       </div>

//       {/* Two-column content */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
//         {/* Left — Origin */}
//         <div className="reveal-left" style={{
//           padding: "clamp(2.5rem,6vw,6rem) clamp(1.5rem,5vw,3rem)",
//           borderRight: `1px solid ${tokens.ash}`,
//         }}>
//           <SectionLabel>Origin</SectionLabel>
//           <p style={{ fontSize: "clamp(.9rem,2vw,1.15rem)", lineHeight: 2, color: tokens.silver, marginBottom: "1.5rem" }}>
//             <strong style={{ color: tokens.white }}>Bhramachari</strong> — the Sanskrit word for a wanderer,
//             one who moves freely through space and time. Founded in the shadow of the Himalayas,
//             our brand was born from the philosophy that{" "}
//             <em style={{ color: tokens.red }}>clothing is not merely covering</em> — it is a second skin, a declaration.
//           </p>
//           <p style={{ fontSize: "clamp(.9rem,2vw,1.15rem)", lineHeight: 2, color: tokens.silver, marginBottom: "1.5rem" }}>
//             We draw from India's ancient textile traditions, the silence of monasteries, and the ferocity of the streets.{" "}
//             <strong style={{ color: tokens.white }}>Every garment is a contradiction resolved</strong>: raw yet refined,
//             dark yet luminous, solitary yet universal.
//           </p>

//           {/* Values list */}
//           <ul style={{ listStyle: "none", marginTop: "1.5rem" }}>
//             {values.map((v, i) => (
//               <li key={i} style={{
//                 padding: "1rem 0", borderBottom: `1px solid ${tokens.ash}`,
//                 display: "flex", alignItems: "flex-start", gap: "1rem",
//                 fontSize: "clamp(.85rem,1.8vw,1rem)", color: tokens.silver, lineHeight: 1.5,
//               }}>
//                 <span style={{ color: tokens.red, fontSize: ".5rem", flexShrink: 0, paddingTop: ".3rem" }}>◆</span>
//                 {v}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right — Philosophy */}
//         <div className="reveal-right" style={{
//           padding: "clamp(2.5rem,6vw,6rem) clamp(1.5rem,5vw,3rem)",
//           background: tokens.dark2,
//         }}>
//           <SectionLabel>Philosophy</SectionLabel>

//           {/* Pull quote */}
//           <div style={{ background: tokens.dark3, padding: "clamp(2rem,5vw,3rem)", marginBottom: "2rem", position: "relative" }}>
//             <div style={{
//               fontSize: "clamp(4rem,10vw,6rem)", color: "rgba(200,16,46,.08)",
//               fontFamily: "'Cinzel Decorative',serif", position: "absolute", top: ".5rem", left: "1rem",
//             }}>"</div>
//             <p style={{ fontSize: "clamp(1rem,2.5vw,1.3rem)", lineHeight: 1.8, fontStyle: "italic", color: tokens.cream, paddingTop: "2rem" }}>
//               We do not follow trends. We study <span style={{ color: tokens.red }}>time</span>.
//               The ancient wanderer had no seasons — only paths. We design for those paths.
//             </p>
//           </div>

//           <p style={{ fontSize: "clamp(.9rem,2vw,1.15rem)", lineHeight: 2, color: tokens.silver, marginBottom: "1.5rem" }}>
//             Our atelier operates from New Delhi with artisan partnerships in Rajasthan, Varanasi, and the Northeast.
//             We believe luxury is not about price — it is about <em style={{ color: tokens.red }}>intention</em>.
//           </p>
//           <p style={{ fontSize: "clamp(.9rem,2vw,1.15rem)", lineHeight: 2, color: tokens.silver }}>
//             Every thread tells a story of hands that shaped it — of craftspeople who carry centuries of knowledge
//             in their fingertips.
//           </p>
//         </div>
//       </div>

//       {/* Stats row */}
//       <div style={{
//         display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
//         borderTop: `1px solid ${tokens.ash}`, borderBottom: `1px solid ${tokens.ash}`,
//       }}>
//         {stats.map(([n, l], i) => (
//           <div key={i} style={{
//             padding: "clamp(2rem,5vw,3rem) clamp(1rem,3vw,2rem)",
//             textAlign: "center",
//             borderRight: i < stats.length - 1 ? `1px solid ${tokens.ash}` : "none",
//           }}>
//             <span style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(1.8rem,5vw,3rem)", color: tokens.red, display: "block" }}>
//               {n}
//             </span>
//             <span style={{
//               fontFamily: "'Space Mono',monospace", fontSize: "clamp(.45rem,1vw,.55rem)",
//               letterSpacing: ".3em", color: tokens.silver, textTransform: "uppercase",
//               marginTop: ".5rem", display: "block", lineHeight: 1.5,
//             }}>
//               {l}
//             </span>
//           </div>
//         ))}
//       </div>

//       <Footer navigate={navigate} />
//     </div>
//   );
// }


import tokens from "../styles/tokens";
import { useReveal } from "../hooks/useReveal";
import { SectionLabel } from "../components/UI";
import Footer from "../components/Footer";

// ── ABOUT PAGE ──────────────────────────────────────────────────
const values = [
  "Inspired by the timeless wisdom of Indian traditions",
  "Minimalist design with meaningful details",
  "Ethically sourced and handcrafted materials",
  "Limited editions — each piece unique",
  "Harmony between craft, wearer, and environment",
];

const stats = [
  ["2026", "Year Founded"],
  ["India", "Country of Origin"],
  ["Exclusive", "Drops per Year"],
  ["100%", "Natural Fabrics"],
];

export default function AboutPage({ navigate }) {
  useReveal("about");

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero Banner */}
      <div style={{
        minHeight: "clamp(280px,50vw,500px)",
        display: "flex", alignItems: "flex-end",
        padding: "clamp(2rem,6vw,4rem) clamp(1rem,5vw,3rem)",
        position: "relative",
        background: "linear-gradient(to bottom right,#050010,#000,#0a0000)",
        overflow: "hidden",
      }}>
        {/* Large background letter */}
        <div style={{
          fontFamily: "'Cinzel Decorative',serif",
          fontSize: "clamp(20vw,35vw,40vw)",
          color: "rgba(16,200,46,.04)", position: "absolute",
          right: "-3vw", top: "50%", transform: "translateY(-50%)",
          userSelect: "none", pointerEvents: "none",
        }}>S</div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <SectionLabel>Our Story</SectionLabel>
          <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2rem,7vw,5.5rem)", lineHeight: 1.1 }}>
            Sutra
          </h1>
        </div>
      </div>

      {/* Two-column content */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
        {/* Left — Origin */}
        <div className="reveal-left" style={{
          padding: "clamp(2.5rem,6vw,6rem) clamp(1.5rem,5vw,3rem)",
          borderRight: `1px solid ${tokens.ash}`,
        }}>
          <SectionLabel>Origin</SectionLabel>
          <p style={{ fontSize: "clamp(.9rem,2vw,1.15rem)", lineHeight: 2, color: tokens.silver, marginBottom: "1.5rem" }}>
            <strong style={{ color: tokens.white }}>Sutra</strong> — meaning thread, line, or connection. 
            Every design connects heritage with modernity, tradition with intention. 
            Our pieces are crafted for those who seek meaning in every stitch.
          </p>

          {/* Values list */}
          <ul style={{ listStyle: "none", marginTop: "1.5rem" }}>
            {values.map((v, i) => (
              <li key={i} style={{
                padding: "1rem 0", borderBottom: `1px solid ${tokens.ash}`,
                display: "flex", alignItems: "flex-start", gap: "1rem",
                fontSize: "clamp(.85rem,1.8vw,1rem)", color: tokens.silver, lineHeight: 1.5,
              }}>
                <span style={{ color: tokens.red, fontSize: ".5rem", flexShrink: 0, paddingTop: ".3rem" }}>◆</span>
                {v}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Philosophy */}
        <div className="reveal-right" style={{
          padding: "clamp(2.5rem,6vw,6rem) clamp(1.5rem,5vw,3rem)",
          background: tokens.dark2,
        }}>
          <SectionLabel>Philosophy</SectionLabel>

          {/* Pull quote */}
          <div style={{ background: tokens.dark3, padding: "clamp(2rem,5vw,3rem)", marginBottom: "2rem", position: "relative" }}>
            <div style={{
              fontSize: "clamp(4rem,10vw,6rem)", color: "rgba(16,200,46,.08)",
              fontFamily: "'Cinzel Decorative',serif", position: "absolute", top: ".5rem", left: "1rem",
            }}>"</div>
            <p style={{ fontSize: "clamp(1rem,2.5vw,1.3rem)", lineHeight: 1.8, fontStyle: "italic", color: tokens.cream, paddingTop: "2rem" }}>
              Sutra is not fashion. It is a journey. Each thread, a path; each garment, a story.
            </p>
          </div>

          <p style={{ fontSize: "clamp(.9rem,2vw,1.15rem)", lineHeight: 2, color: tokens.silver, marginBottom: "1.5rem" }}>
            Crafted in India with artisan collaborations across Rajasthan and Varanasi, we prioritize purpose and sustainability.
          </p>
          <p style={{ fontSize: "clamp(.9rem,2vw,1.15rem)", lineHeight: 2, color: tokens.silver }}>
            Every piece carries the wisdom of its maker — a thread connecting tradition, wearer, and the world.
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
        borderTop: `1px solid ${tokens.ash}`, borderBottom: `1px solid ${tokens.ash}`,
      }}>
        {stats.map(([n, l], i) => (
          <div key={i} style={{
            padding: "clamp(2rem,5vw,3rem) clamp(1rem,3vw,2rem)",
            textAlign: "center",
            borderRight: i < stats.length - 1 ? `1px solid ${tokens.ash}` : "none",
          }}>
            <span style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(1.8rem,5vw,3rem)", color: tokens.red, display: "block" }}>
              {n}
            </span>
            <span style={{
              fontFamily: "'Space Mono',monospace", fontSize: "clamp(.45rem,1vw,.55rem)",
              letterSpacing: ".3em", color: tokens.silver, textTransform: "uppercase",
              marginTop: ".5rem", display: "block", lineHeight: 1.5,
            }}>
              {l}
            </span>
          </div>
        ))}
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}