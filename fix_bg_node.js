const fs = require('fs');

const file = 'frontend/src/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  {
    from: /: 'linear-gradient\(135deg, #fefefe, #fafafa\)',/g,
    to: ": '#f8f9fa',"
  },
  {
    from: /: 'linear-gradient\(135deg, rgba\(255,255,255,0\.85\) 0%, rgba\(255,255,255,0\.4\) 100%\)',/g,
    to: ": '#f8f9fa',"
  },
  {
    from: /\? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)'\n\s*: '#ffffff',/g,
    to: "? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f8f9fa',"
  },
  {
    from: /\? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)'\n\s*: '#f6f8fb',/g,
    to: "? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f8f9fa',"
  },
  {
    from: /background: h \? 'linear-gradient\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\)' : '#fafbfd',/g,
    to: "background: h ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)' : '#f8f9fa',"
  },
  {
    from: /background: h\n\s*\? `linear-gradient\(145deg,#ffffff,\$\{glowRaw\.replace.*?`\n\s*: '#fafbfd',/s,
    to: "background: h\n          ? `linear-gradient(145deg,#ffffff,${glowRaw.replace(/,[\\\\s]*[\\\\d.]+\\\\)/, ',0.06)')})`\n          : '#f8f9fa',"
  }
];

replacements.forEach(({from, to}) => {
  content = content.replace(from, to);
});

fs.writeFileSync(file, content);
