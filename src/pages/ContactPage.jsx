import { useState } from "react";
import tokens from "../styles/tokens";
import { useReveal } from "../hooks/useReveal";
import { SectionLabel, SectionTitle, BtnPrimary } from "../components/UI";
import Footer from "../components/Footer";

// ── CONTACT PAGE ─────────────────────────────────────────────────
const contactInfo = [
  ["Studio Address", "47B, Hauz Khas Village\nNew Delhi — 110016"],
  ["Email",          "studio@bhramachari.in"],
  ["Phone",          "+91 98765 43210"],
  ["Studio Hours",   "Monday — Saturday\n11:00 AM — 7:00 PM IST"],
];

const formFields = [
  ["Your Name",      "text",  "Full name"],
  ["Email Address",  "email", "your@email.com"],
  ["Subject",        "text",  "Order enquiry, collaboration, etc."],
];

export default function ContactPage({ navigate }) {
  const [status, setStatus] = useState("idle");
  useReveal("contact");

  const handleSubmit = () => {
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div style={{ paddingTop: 70 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        minHeight: "calc(100vh - 70px)",
      }}>
        {/* ── Left: Contact Info ── */}
        <div className="reveal-left" style={{
          padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)",
          background: tokens.dark2,
          display: "flex", flexDirection: "column", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* Decorative bg glyph */}
          <div style={{
            fontSize: "clamp(10rem,25vw,30rem)", color: "rgba(200,16,46,.03)",
            position: "absolute", right: "-2rem", bottom: "-4rem",
            pointerEvents: "none", lineHeight: 1,
          }}>✦</div>

          <SectionLabel>Get in Touch</SectionLabel>
          <SectionTitle style={{ marginBottom: "2.5rem", fontSize: "clamp(2rem,5vw,3.5rem)" }}>
            Connect<br />With Us
          </SectionTitle>

          {contactInfo.map(([label, value], i) => (
            <div key={i} style={{ marginBottom: "2rem" }}>
              <div style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "clamp(.45rem,1vw,.55rem)", letterSpacing: ".4em",
                color: tokens.red, textTransform: "uppercase", marginBottom: ".4rem",
              }}>{label}</div>
              <div style={{
                fontSize: "clamp(.9rem,2vw,1.1rem)", color: tokens.cream,
                lineHeight: 1.6, whiteSpace: "pre-line",
              }}>{value}</div>
            </div>
          ))}

          {/* Social links */}
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {["Instagram", "Pinterest", "WhatsApp"].map(s => (
              <a key={s} href="#" style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "clamp(.5rem,1.2vw,.55rem)", letterSpacing: ".3em",
                color: tokens.silver, textDecoration: "none",
                textTransform: "uppercase", transition: "color .3s",
              }}>{s}</a>
            ))}
          </div>
        </div>

        {/* ── Right: Contact Form ── */}
        <div className="reveal-right" style={{
          padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <SectionLabel style={{ marginBottom: "1.5rem" }}>Send a Message</SectionLabel>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {formFields.map(([label, type, ph]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
                <label style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "clamp(.45rem,1vw,.55rem)", letterSpacing: ".3em",
                  color: tokens.silver, textTransform: "uppercase",
                }}>{label}</label>
                <input type={type} placeholder={ph} style={{
                  background: tokens.dark3, border: `1px solid ${tokens.ash}`,
                  color: tokens.white,
                  padding: "clamp(.7rem,2vw,1rem) clamp(.8rem,2vw,1.2rem)",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "clamp(.9rem,2vw,1rem)",
                  outline: "none", width: "100%", appearance: "none",
                }} />
              </div>
            ))}

            {/* Textarea */}
            <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
              <label style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "clamp(.45rem,1vw,.55rem)", letterSpacing: ".3em",
                color: tokens.silver, textTransform: "uppercase",
              }}>Message</label>
              <textarea placeholder="Tell us about yourself…" style={{
                background: tokens.dark3, border: `1px solid ${tokens.ash}`,
                color: tokens.white,
                padding: "clamp(.7rem,2vw,1rem) clamp(.8rem,2vw,1.2rem)",
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(.9rem,2vw,1rem)",
                outline: "none", width: "100%", height: 110, resize: "none",
              }} />
            </div>

            <BtnPrimary onClick={handleSubmit} style={{ alignSelf: "flex-start" }}>
              {status === "sending" ? "Sending…" : status === "sent" ? "✓ Message Sent" : "Send Message"}
            </BtnPrimary>
          </div>
        </div>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
