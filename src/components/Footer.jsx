import tokens from "../styles/tokens";

// ── FOOTER ───────────────────────────────────────────────────────
const footerLinks = [
  ["Navigate", [["Home","home"],["Collection","collection"],["Atelier","about"],["Lookbook","lookbook"]]],
  ["Support",  [["Sizing Guide",null],["Care Instructions",null],["Shipping Info",null],["Returns",null]]],
  ["Legal",    [["Privacy Policy",null],["Terms of Use",null],["Cookie Policy",null]]],
];

export default function Footer({ navigate }) {
  return (
    <footer style={{
      background: tokens.dark2,
      borderTop: `1px solid ${tokens.ash}`,
      padding: "clamp(2.5rem,6vw,4rem) clamp(1rem,5vw,3rem) clamp(1.5rem,4vw,2rem)",
    }}>
      {/* Top grid */}
      <div style={{
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: "clamp(1.5rem,4vw,3rem)",
        paddingBottom: "clamp(2rem,5vw,3rem)",
        borderBottom: `1px solid ${tokens.ash}`,
      }}>
        {/* Brand blurb */}
        <div>
          <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(.8rem,2vw,1.3rem)", letterSpacing: ".15em", marginBottom: ".8rem" }}>
           SUTRA
          </div>
          <p style={{ color: tokens.silver, fontStyle: "italic", fontSize: "clamp(.85rem,1.5vw,.95rem)", lineHeight: 1.7 }}>
            For the wanderers. The seekers.<br />The ones who never stopped moving.
          </p>
        </div>

        {/* Link columns */}
        {footerLinks.map(([title, links]) => (
          <div key={title}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "clamp(.45rem,1vw,.55rem)", letterSpacing: ".4em", color: tokens.red, textTransform: "uppercase", marginBottom: "1.2rem" }}>
              {title}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".7rem" }}>
              {links.map(([label, page]) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={e => { e.preventDefault(); if (page) navigate(page); }}
                    style={{ color: tokens.silver, textDecoration: "none", fontSize: "clamp(.8rem,1.5vw,.9rem)", transition: "color .3s" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: ".5rem", paddingTop: "1.5rem" }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "clamp(.45rem,1vw,.55rem)", letterSpacing: ".15em", color: tokens.ash }}>
          © 2025 Bhramachari. All rights reserved.
        </span>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "clamp(.45rem,1vw,.55rem)", letterSpacing: ".15em", color: tokens.ash }}>
          Made with intent in New Delhi ✦
        </span>
      </div>
    </footer>
  );
}
