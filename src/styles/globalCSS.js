// ── GLOBAL CSS ──────────────────────────────────────────────────
export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; font-size:16px; }
body { background:#000; color:#F5F0EB; font-family:'Cormorant Garamond',serif; overflow-x:hidden; }
img { display:block; max-width:100%; height:auto; }
button { font-family:inherit; }

@media (pointer:fine) {
  body, * {
    cursor: none !important;
  }
}

body::before {
  content:'';
  position:fixed; inset:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  opacity:0.03; pointer-events:none; z-index:9990;
}

@keyframes fadeUp     { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
@keyframes lineFloat  { 0%,100%{opacity:.3;transform:scaleY(1)} 50%{opacity:.8;transform:scaleY(1.2)} }
@keyframes ticker     { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes float      { 0%,100%{transform:translateY(0) translateX(0) scale(1);opacity:0} 10%{opacity:1} 90%{opacity:.5} 50%{transform:translateY(-100px) translateX(var(--drift,30px)) scale(1.5)} }
@keyframes glitch1    { 0%,90%,100%{transform:translate(0)} 92%{transform:translate(-3px,1px)} 94%{transform:translate(3px,-1px)} 96%{transform:translate(-2px,0)} }
@keyframes glitch2    { 0%,90%,100%{transform:translate(0)} 92%{transform:translate(3px,-1px)} 94%{transform:translate(-3px,1px)} }
@keyframes loadProgress { to{width:100%} }
@keyframes slideIn  { from{transform:translateY(100%)} to{transform:translateY(0)} }
@keyframes slideOut { from{transform:translateY(0)} to{transform:translateY(-100%)} }
@keyframes revealIn { to{opacity:1;transform:none} }

.glitch { position:relative; }
.glitch::before,.glitch::after {
  content:attr(data-text);
  position:absolute; top:0; left:0; width:100%; height:100%;
}
.glitch::before { color:#C8102E; animation:glitch1 3s infinite; clip-path:polygon(0 0,100% 0,100% 35%,0 35%); }
.glitch::after  { color:#00ffff; animation:glitch2 3s infinite; clip-path:polygon(0 65%,100% 65%,100% 100%,0 100%); opacity:.3; }

.reveal       { opacity:0; transform:translateY(40px);  transition:opacity .8s ease, transform .8s ease; }
.reveal-left  { opacity:0; transform:translateX(-40px); transition:opacity .8s ease, transform .8s ease; }
.reveal-right { opacity:0; transform:translateX(40px);  transition:opacity .8s ease, transform .8s ease; }
.reveal.visible,.reveal-left.visible,.reveal-right.visible { opacity:1; transform:none; }

@media (prefers-reduced-motion:reduce) {
  *,*::before,*::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
}
`;
