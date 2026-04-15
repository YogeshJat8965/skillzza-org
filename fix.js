const fs = require('fs');
const file = 'frontend/src/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<a[\s\S]*?className="sz-list-item"[\s\S]*?onMouseEnter[^>]*>[\s\S]*?\{item\.icon && \(/;

fs.writeFileSync('debug_matches.txt', JSON.stringify(content.match(regex)));
