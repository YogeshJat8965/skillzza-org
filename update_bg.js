const fs = require('fs');

const file = 'frontend/src/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

// Target 1: AgentRow
content = content.replace(
  /: 'linear-gradient\\(135deg, #fefefe, #fafafa\\)',/g,
  ": '#f4f5f7',"
);

// Target 2: CardItem
content = content.replace(
  /: 'linear-gradient\\(135deg, rgba\\(255,255,255,0\\.85\\) 0%, rgba\\(255,255,255,0\\.4\\) 100%\\)',/g,
  ": '#f4f5f7',"
);

// Target 3: ListRowItem
content = content.replace(
  /\\? 'linear-gradient\\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\\)'\\n\\s*: '#ffffff',/g,
  "? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f4f5f7',"
);

// Target 4: CompactItem
content = content.replace(
  /\\? 'linear-gradient\\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\\)'\\n\\s*: '#f6f8fb',/g,
  "? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f4f5f7',"
);

// Target 5: SectionLink
content = content.replace(
  /background: h \\? 'linear-gradient\\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\\)' : '#fafbfd',/g,
  "background: h ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)' : '#f4f5f7',"
);

// Target 6: SvcCard
content = content.replace(
  /background: h \\? 'linear-gradient\\(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%\\)' : '#fafbfd',/g,
  "background: h ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)' : '#f4f5f7',"
);

// Target 7: PartnerCard (Might have similar)
content = content.replace(
  /background: h\\n\\s*\\? \\`linear-gradient\\(145deg,#ffffff,\\$\\{glowRaw\\.replace[\\s\\S]*?\\)\\`\\n\\s*: '#fafbfd',/g,
  "background: h\n          ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'\n          : '#f4f5f7',"
);

fs.writeFileSync(file, content);
console.log('Background colors updated');
