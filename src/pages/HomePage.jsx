import tokens from "../styles/tokens";
import { useReveal } from "../hooks/useReveal";
import { SectionLabel, SectionTitle, SectionDesc, BtnPrimary, BtnOutline } from "../components/UI";
import Particles from "../components/Particles";
import Footer from "../components/Footer";
import { products } from "../data";
import k3_k1 from "../assets/women/kurta/k3/k1.jpg";
import c6_c2 from "../assets/women/cordset/c6/c2.jpg";
import j2_j2 from "../assets/women/jackets/j2/j2.jpg";

// ── HOME PAGE ───────────────────────────────────────────────────
export default function HomePage({ navigate }) {
  useReveal("home");

  return (
    <div style={{ minHeight: "100vh" }}>

      {/* ── HERO SECTION ── */}
      <section style={{
        height: "100svh", minHeight: 500,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 80% at 50% 50%,rgba(139,0,0,.15) 0%,transparent 70%),radial-gradient(ellipse 40% 60% at 80% 20%,rgba(200,16,46,.08) 0%,transparent 60%),#000",
        }} />

        {/* Floating vertical lines */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{
            position: "absolute", width: 1, height: "60%", left: "15%", top: "20%",
            background: "linear-gradient(to bottom,transparent,#8B0000,transparent)",
            animation: "lineFloat 6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", width: 1, height: "40%", right: "20%", top: "30%",
            background: "linear-gradient(to bottom,transparent,#8B0000,transparent)",
            animation: "lineFloat 6s ease-in-out 2s infinite",
          }} />
        </div>

        {/* Red particles */}
        <Particles />

        {/* Hero Content */}
        <div style={{
          textAlign: "center", position: "relative", zIndex: 2,
          padding: "0 clamp(1rem,5vw,3rem)", width: "100%", maxWidth: 1100,
        }}>
          {/* Tagline above logo */}
          <p style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "clamp(.45rem,1.5vw,.6rem)", letterSpacing: ".4em",
            color: tokens.red, textTransform: "uppercase",
            marginBottom: "clamp(1rem,3vw,2rem)",
            animation: "fadeUp 1s ease .3s both",
          }}>
            Est. 2024 — New Delhi, India
          </p>

          {/* Main Heading with Glitch effect */}
          <h1 style={{
            fontFamily: "'Cinzel Decorative',serif",
            fontSize: "clamp(2.6rem, 8.5vw, 7rem)", fontWeight: 900,
            lineHeight: .9, letterSpacing: "-.02em", position: "relative",
          }}>
            <span
              className="glitch"
              data-text="BHRAMACHARI"
              style={{
                display: "block",
                background: "linear-gradient(135deg,#F5F0EB 0%,#E8DDD0 40%,#C8102E 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", animation: "fadeUp 1s ease .5s both",
              }}
            >
             SUTRA
            </span>
            <span style={{
              display: "block",
              fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontStyle: "italic",
              fontSize: "clamp(.8rem,2.5vw,1.6rem)", letterSpacing: ".3em",
              color: tokens.silver, marginTop: ".5rem",
              animation: "fadeUp 1s ease .7s both",
            }}>
              The wanderer's wardrobe
            </span>
          </h1>

          {/* Subtitle para */}
          <p style={{
            color: tokens.silver, fontStyle: "italic",
            fontSize: "clamp(.9rem,2vw,1.15rem)", maxWidth: 480,
            margin: "clamp(1.5rem,3vw,2.5rem) auto", lineHeight: 1.8,
            animation: "fadeUp 1s ease .9s both",
          }}>
            Born from the dust of ancient roads and the silence of ascetic wandering.
            Clothing for those who move through worlds.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex", gap: "1rem", justifyContent: "center",
            flexWrap: "wrap", animation: "fadeUp 1s ease 1.1s both",
          }}>
            <BtnPrimary onClick={() => navigate("collection")}>Explore Collection</BtnPrimary>
            <BtnOutline onClick={() => navigate("lookbook")}>Lookbook '25</BtnOutline>
          </div>
        </div>
      </section>

      {/* ── TICKER / MARQUEE ── */}
      <div style={{
        overflow: "hidden",
        borderTop: `1px solid ${tokens.ash}`,
        borderBottom: `1px solid ${tokens.ash}`,
        padding: ".6rem 0",
      }}>
        <div style={{ display: "flex", animation: "ticker 20s linear infinite", width: "max-content" }}>
          {[
            "Bhramachari","The Wanderer","New Collection 2025","Made in India","Dark Luxury","Fearless Fashion",
            "Bhramachari","The Wanderer","New Collection 2025","Made in India","Dark Luxury","Fearless Fashion",
          ].map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "clamp(.45rem,1vw,.55rem)", letterSpacing: ".4em",
              textTransform: "uppercase", color: tokens.silver, padding: "0 2rem",
            }}>
              {t} <span style={{ color: tokens.red, margin: "0 .5rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{ padding: "clamp(3rem,8vw,8rem) clamp(1rem,5vw,3rem)" }}>
        <div className="reveal">
          <SectionLabel>Featured Drops</SectionLabel>
          <SectionTitle>The Ascetic<br />Collection</SectionTitle>
          <SectionDesc>Each garment a verse. Each stitch a mantra. Wear the wilderness.</SectionDesc>
        </div>

        {/* Product Grid — first 3 only */}
    <div className="reveal" style={{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // 3 equal columns
  gap: "2rem",  // spacing between them
  marginTop: "3rem",
}}>
  {[ // Your 3 collection images
    { name: "Sanyasi Shirt", price: "₹6,500", image: k3_k1 , tag: "New" },
    { name: "Agni Cordset", price: "₹12,800", image: c6_c2 , tag: "Popular" },
    { name: "Noir CordSet", price: "₹15,200", image: j2_j2, tag: "Limited" },
  ].map((p, i) => ( 
    <div key={i} style={{ 
      background: tokens.dark2, position: "relative",
      overflow: "hidden", cursor: "pointer", 
    }}>
      <div style={{ 
        minHeight: 390,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: ".5rem",
        backgroundImage: `url(${p.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} />
      
      {p.tag && (
        <div style={{
          position: "absolute", top: "1rem", right: "1rem",
          fontFamily: "'Space Mono',monospace", fontSize: ".5rem",
          letterSpacing: ".1em", background: tokens.red, padding: ".2rem .5rem",
        }}>
          {p.tag}
        </div>
      )}

      <div style={{
        padding: "clamp(.8rem,2vw,1.2rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(.6rem,1.5vw,.85rem)" }}>
          {p.name}
        </span>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "clamp(.55rem,1.2vw,.7rem)", color: tokens.red }}>
          {p.price}
        </span>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* ── MANIFESTO QUOTE ── */}
      <div style={{
        background: tokens.dark2,
        padding: "clamp(4rem,10vw,8rem) clamp(2rem,8vw,6rem)",
        textAlign: "center",
      }}>
        <div className="reveal">
          <p style={{
            fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
            fontSize: "clamp(1.1rem,3vw,2rem)", lineHeight: 1.8,
            maxWidth: 700, margin: "0 auto", color: tokens.cream,
          }}>
            "We dress the <em style={{ color: tokens.red }}>wanderer</em>, the seeker, the one who left the ordinary behind.
            Fashion is not vanity — it is <em style={{ color: tokens.red }}>identity carved in cloth</em>,
            a flag for the soul that refuses to be still."
          </p>
          <p style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "clamp(.45rem,1vw,.55rem)", letterSpacing: ".3em",
            color: tokens.silver, textTransform: "uppercase", marginTop: "2rem",
          }}>
            — Sutra Manifesto, 2024
          </p>
        </div>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
