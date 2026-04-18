const fs = require('fs');

const file = 'frontend/src/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /const ListRowItem = \(\{\s*item, index, onComingSoon\s*\}\) => \{[\s\S]*?\};/m;

const replacement = `const ListRowItem = ({ item, index, onComingSoon }) => {
  const [hovered, setHovered] = useState(false);
  const glowRaw = item.iconShadow?.match(/rgba\\([^)]+\\)/)?.[0] || 'rgba(99,102,241,0.15)';
  const bgWash = glowRaw.replace(/,[\\s]*[\\d.]+\\)/, ',0.05)');
  const glowMid = glowRaw.replace(/,[\\s]*[\\d.]+\\)/, ',0.18)');
  const borderGradient = item.iconGradient || 'linear-gradient(135deg,#BD1723,#8947B3)';
  const isExternal = item.link?.startsWith('http');

  return (
    <a
      href={item.link ? (isExternal ? item.link : getRoutePath(item.link)) : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={!item.link ? (e) => {
        e.preventDefault();
        onComingSoon?.(item.name);
      } : undefined}
      className="sz-list-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '12px 15px',
        borderRadius: 13,
        border: '1px solid rgba(15, 23, 42, 0.05)',
        background: hovered
          ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'
          : '#ffffff',
        cursor: item.link ? 'pointer' : 'default',
        transition: 'all 0.28s cubic-bezier(0.34,1.2,0.64,1)',
        textDecoration: 'none',
        position: 'relative',
        transform: hovered ? 'translateX(5px)' : 'translateX(0)',
        boxShadow: 'none',
        animationDelay: \`\${index * 30}ms\`,
      }}
    >
      {/* Shimmer — fixed geometry */}
      <div
        className={hovered ? 'sz-shimmer-active' : ''}
        style={{
          position: 'absolute',
          top: 0, left: '-75%',
          width: '60%', height: '100%',
          zIndex: 0,
          background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)',
          pointerEvents: 'none',
          transform: 'skewX(-8deg)',
          borderRadius: 13,
        }}
      />

      {item.icon && (
        <GradientIcon
          icon={item.icon}
          gradient={item.iconGradient}
          shadow={hovered ? \`0 6px 20px \${glowMid}\` : 'none'}
          size={38}
          fontSize={17}
        />
      )}

      <div style={{ flex: 1, minWidth: 0, paddingLeft: item.icon ? 0 : 6 }}>
        <div style={{
          fontSize: item.icon ? 14 : 15, fontWeight: 800,
          color: hovered ? '#0f172a' : '#1e293b',
          letterSpacing: -0.2,
          transition: 'color 0.2s ease',
        }}>
          {item.name}
        </div>
        <div style={{ fontSize: item.icon ? 12 : 13, color: hovered ? '#374f6b' : '#5a7394', lineHeight: 1.6, marginTop: 4, transition: 'color 0.2s ease' }}>
          {item.desc}
        </div>
      </div>

      {item.pill ? (
        <div style={{ flexShrink: 0 }}><Pill text={item.pill} color={item.pillColor} /></div>
      ) : (
        <div style={{
          color: hovered ? '#475569' : '#cbd5e1',
          fontSize: 15, flexShrink: 0,
          transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
          transform: hovered ? 'translate(2px,-2px) rotate(-45deg)' : 'translate(0,0) rotate(0deg)',
          fontWeight: 600,
        }}>↗</div>
      )}
    </a>
  );
};`;

content = content.replace(regex, replacement);
fs.writeFileSync(file, content);
console.log('Fixed ListRowItem');
