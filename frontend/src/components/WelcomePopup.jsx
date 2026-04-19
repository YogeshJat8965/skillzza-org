import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* ─── Module-level flag — resets on every page refresh,
       but persists across client-side React Router navigations.
       sessionStorage / localStorage survive F5, so we avoid both. ── */
let _dismissed = false;
const MOBILE_MAX_WIDTH = 767;

/* ─── Chip list (matches screenshot) ────────────────────────── */
const chips = [
  'AI Engineer',
  'Cybersecurity Analyst',
  'Agentic AI Developer',
  'VFX Designer',
  'Quantum Computing',
  'EV Engineer',
  'Climate Tech',
];

/* ─── Stats (matches screenshot) ────────────────────────────── */
const stats = [
  { num: 50,  suffix: 'K+', accent: true,  label: 'Learners assessed' },
  { num: 200, suffix: '+',  accent: true,  label: 'Partner institutions' },
  { num: 8,   suffix: '',   accent: false, label: 'Deeptech schools' },
  { num: 6,   suffix: '',   accent: false, label: 'Agentic AI products' },
  { num: null, label: 'to enterprise coverage' }, // K-12 → static
];

/* ─── Count-up hook ──────────────────────────────────────────── */
function useCountUp(target, duration, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active || target === null) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setVal(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

/* ─── Single stat item ───────────────────────────────────────── */
const StatItem = ({ stat, active }) => {
  const count = useCountUp(stat.num, 1800, active);

  const numStyle = {
    fontFamily: "'Sora', system-ui, sans-serif",
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1,
  };
  const accentStyle = { color: '#00e5b0', fontStyle: 'normal' };
  const labelStyle = { fontSize: 11, color: '#8892a4', marginTop: 5, lineHeight: 1.4 };

  return (
    <div style={{ textAlign: 'center' }}>
      {stat.num !== null ? (
        <div style={numStyle}>
          {count}
          {stat.suffix && (
            <em style={stat.accent ? accentStyle : { fontStyle: 'normal' }}>
              {stat.suffix}
            </em>
          )}
        </div>
      ) : (
        /* K-12 → special */
        <div style={numStyle}>
          K-12<em style={accentStyle}> →</em>
        </div>
      )}
      <div style={labelStyle}>{stat.label}</div>
    </div>
  );
};

/* ─── Main popup ─────────────────────────────────────────────── */
const WelcomePopup = () => {
  const { pathname } = useLocation();
  const [visible,  setVisible]  = useState(false);
  const [closing,  setClosing]  = useState(false);
  const [counting, setCounting] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches
      : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const media = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
    const onChange = (event) => setIsMobile(event.matches);
    setIsMobile(media.matches);

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  useEffect(() => {
    // Only show on the home page
    if (pathname !== '/') return;
    // _dismissed resets to false on every full page refresh
    if (_dismissed) return;
    const t1 = setTimeout(() => setVisible(true), 400);
    const t2 = setTimeout(() => setCounting(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  const dismiss = () => {
    _dismissed = true;
    setClosing(true);
    setTimeout(() => setVisible(false), 360);
  };

  const visibleChips = isMobile ? chips.slice(0, 6) : chips;

  if (!visible) return null;

  const overlayStyle = {
    position: 'fixed', inset: 0,
    background: 'rgba(4,6,20,0.72)',
    backdropFilter: 'blur(7px)',
    WebkitBackdropFilter: 'blur(7px)',
    zIndex: 9998,
    opacity: closing ? 0 : 1,
    transition: 'opacity 0.36s ease',
  };

  const wrapStyle = {
    position: 'fixed', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 9999,
    padding: isMobile ? 10 : 20,
    pointerEvents: 'none',
  };

  const cardStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: isMobile ? 360 : 800,
    background: 'linear-gradient(165deg, #07091a 0%, #0a0d1e 50%, #060818 100%)',
    borderRadius: isMobile ? 18 : 22,
    padding: isMobile ? '44px 16px 20px' : '52px 52px 46px',
    textAlign: 'center',
    pointerEvents: 'all',
    border: '1px solid rgba(124,111,255,0.14)',
    boxShadow:
      '0 56px 128px rgba(0,0,0,0.88), 0 24px 64px rgba(0,0,0,0.5), ' +
      '0 0 80px rgba(124,111,255,0.09), inset 0 1px 0 rgba(255,255,255,0.04)',
    opacity: closing ? 0 : 1,
    transform: closing ? 'scale(0.95) translateY(18px)' : 'scale(1) translateY(0)',
    transition: 'opacity 0.36s ease, transform 0.36s cubic-bezier(0.4,0,0.2,1)',
    animation: 'szWelcomeIn 0.48s cubic-bezier(0.16,1,0.3,1)',
    maxHeight: isMobile ? '90vh' : 'unset',
    overflowY: isMobile ? 'auto' : 'visible',
  };

  return (
    <>
      <div style={overlayStyle} onClick={dismiss} />

      <div style={wrapStyle}>
        <div style={cardStyle}>

          {/* ── Close button ── */}
          <button
            onClick={dismiss}
            aria-label="Close"
            style={{
              position: 'absolute', top: isMobile ? 10 : 16, right: isMobile ? 10 : 16,
              width: isMobile ? 30 : 34, height: isMobile ? 30 : 34, borderRadius: 9,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.4)',
              fontSize: isMobile ? 14 : 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.11)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            ✕
          </button>

          {/* ── Agent badge ── */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#0d1020',
            border: '1px solid rgba(124,111,255,0.28)',
            borderRadius: 20,
            padding: isMobile ? '4px 10px' : '5px 14px',
            fontSize: isMobile ? 10.5 : 11.5,
            color: '#a09cf7',
            marginBottom: isMobile ? 14 : 22,
            maxWidth: isMobile ? 'calc(100% - 44px)' : '100%',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#00e5b0', flexShrink: 0, display: 'inline-block',
            }} />
            Powered by Agentic AI — assess, simulate, match &amp; hire autonomously
          </div>

          {/* ── Heading ── */}
          <h2 style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: isMobile ? 'clamp(28px, 7.5vw, 34px)' : 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.12,
            marginBottom: isMobile ? 16 : 26,
            letterSpacing: isMobile ? -1 : -1.4,
            color: '#fff',
          }}>
            Your career,
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #7c6fff 0%, #38d9f5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              AI-engineered.
            </span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #00e5b0 0%, #38d9f5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              School to boardroom.
            </span>
          </h2>

          {/* ── Chips ── */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center',
            gap: isMobile ? 7 : 8,
            marginBottom: isMobile ? 16 : 28,
          }}>
            {visibleChips.map((chip, i) => (
              <span
                key={chip}
                style={{
                  padding: isMobile ? '5px 12px' : '6px 16px', borderRadius: 22,
                  fontSize: isMobile ? 11.5 : 12.5,
                  fontWeight: 500,
                  color: '#8892a4',
                  border: '1px solid rgba(255,255,255,0.09)',
                  background: 'rgba(255,255,255,0.03)',
                  cursor: 'default',
                  transition: 'all 0.2s ease',
                  animation: `szChipIn 0.4s ${0.12 + i * 0.06}s cubic-bezier(0.16,1,0.3,1) backwards`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(124,111,255,0.45)';
                  e.currentTarget.style.color = '#a09cf7';
                  e.currentTarget.style.background = 'rgba(124,111,255,0.07)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                  e.currentTarget.style.color = '#8892a4';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* ── Buttons ── */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: isMobile ? 8 : 12,
            marginBottom: isMobile ? 20 : 38,
            flexWrap: 'wrap',
          }}>
            {/* Primary CTA */}
            <a
              href="/product/potential-meter"
              onClick={() => { _dismissed = true; }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'linear-gradient(135deg, #7c6fff 0%, #6254e0 100%)',
                color: '#fff',
                fontSize: isMobile ? 13 : 13.5,
                fontWeight: 600,
                padding: isMobile ? '10px 20px' : '11px 28px', borderRadius: 9,
                textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(124,111,255,0.38)',
                transition: 'all 0.25s ease',
                minWidth: isMobile ? 196 : 'unset',
                justifyContent: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 40px rgba(124,111,255,0.52)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,111,255,0.38)';
              }}
            >
              Start your assessment →
            </a>

            {/* Secondary */}
            <a
              href="/use-case/institutions"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'none',
                color: '#c8cde0',
                fontSize: isMobile ? 13 : 13.5,
                fontWeight: 500,
                padding: isMobile ? '10px 20px' : '11px 28px', borderRadius: 9,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.13)',
                transition: 'all 0.25s ease',
                minWidth: isMobile ? 178 : 'unset',
                justifyContent: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)';
                e.currentTarget.style.color = '#c8cde0';
              }}
            >
              Explore for schools
            </a>
          </div>

          {/* ── Stats row (desktop only) ── */}
          {!isMobile && (
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.055)',
              paddingTop: 26,
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(20px, 4vw, 40px)',
              flexWrap: 'wrap',
            }}>
              {stats.map((s) => (
                <StatItem key={s.label} stat={s} active={counting} />
              ))}
            </div>
          )}

        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes szWelcomeIn {
          from {
            opacity: 0;
            transform: scale(0.91) translateY(28px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }
        @keyframes szChipIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default WelcomePopup;
