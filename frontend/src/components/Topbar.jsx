import React from 'react';
import { getRoutePath } from '../utils/assets';

const Topbar = () => {
  return (
    <header style={{ background: "#111", color: "#fff", width: "100%", borderBottom: "1px solid #222" }}>
      <nav className="sz-topbar-nav" style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 22px", flexWrap: "wrap", gap: 6 }}>

        {/* Left - Nav Links */}
        <div className="sz-topbar-links" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          {[
            { label: "Interns", href: "https://portal.skillzza.com/" },
            { label: "K - 12", href: "https://cognifyai.skillzza.com/" },
            { label: "Universities", href: ""},
            { label: "Companies", href: "" },
          ].map((item) => (
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={/^https?:\/\//.test(item.href) ? "_blank" : undefined}
                rel={/^https?:\/\//.test(item.href) ? "noopener noreferrer" : undefined}
                style={{ color: "#fff", textDecoration: "none", fontSize: 14.5, fontWeight: 500, letterSpacing: 0.2, opacity: 0.9, transition: "opacity 0.2s", whiteSpace: "nowrap" }}
                onMouseEnter={e => e.target.style.opacity = 1}
                onMouseLeave={e => e.target.style.opacity = 0.9}
              >
                {item.label}
              </a>
            ) : (
              <span
                key={item.label}
                style={{ color: "#fff", fontSize: 14.5, fontWeight: 500, letterSpacing: 0.2, opacity: 0.9, whiteSpace: "nowrap", cursor: "default" }}
              >
                {item.label}
              </span>
            )
          ))}
        </div>

        {/* Right - Log in */}
        <div className="sz-topbar-login" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <a href={getRoutePath('/login')} style={{ color: "#fff", textDecoration: "none", fontSize: 14.5, fontWeight: 500, opacity: 0.9, whiteSpace: "nowrap" }}>
            Log in
          </a>
        </div>

      </nav>
      <style>{`
        @media (max-width: 640px) {
          .sz-topbar-nav {
            padding: 9px 12px !important;
            gap: 8px !important;
          }
          .sz-topbar-links {
            flex: 1 !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            gap: 12px !important;
            padding-bottom: 2px !important;
          }
          .sz-topbar-links::-webkit-scrollbar { display: none; }
          .sz-topbar-login {
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Topbar;