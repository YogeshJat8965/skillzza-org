const fs = require('fs');
let content = fs.readFileSync('frontend/src/components/Navbar.jsx', 'utf8');

// Logo
content = content.replace(
  /<div style=\{\{ flexShrink: 0 \}\}>/,
  "<div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>"
);

// Nav
content = content.replace(
  /gap: 2,\n\s*flex: 1,\n\s*justifyContent: 'center',/,
  "gap: 2,\n                justifyContent: 'center',"
);

// CTA
content = content.replace(
  /className="sz-cta-group"\n\s*style=\{\{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 \}\}/,
  'className="sz-cta-group"\n              style={{ flex: 1, display: \'flex\', alignItems: \'center\', justifyContent: \'flex-end\', gap: 10 }}'
);

fs.writeFileSync('frontend/src/components/Navbar.jsx', content);
