const fs = require('fs');
const files = [
  'frontend/src/pages/PotentialMeterPage.jsx',
  'frontend/src/pages/SkillzzaPersona.jsx',
  'frontend/src/pages/XperiencePlatformPage.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<(h[1-6])\b[^>]*>/gi, (match, tag) => {
    let newMatch = match;
    newMatch = newMatch.replace(/\b(sm:|md:|lg:|xl:|2xl:)?text-\[[^\]]+\]\s?/g, '');
    newMatch = newMatch.replace(/\b(sm:|md:|lg:|xl:|2xl:)?text-\w+\s?/g, (m) => {
      if (m.includes('text-[#') || m.includes('text-white') || m.includes('text-black') || m.includes('text-center') || m.includes('text-left') || m.includes('text-right')) return m;
      return '';
    });
    newMatch = newMatch.replace(/\b(sm:|md:|lg:|xl:|2xl:)?leading-\[[^\]]+\]\s?/g, '');
    newMatch = newMatch.replace(/\b(sm:|md:|lg:|xl:|2xl:)?leading-(tight|snug|normal|relaxed|loose)\s?/g, '');
    newMatch = newMatch.replace(/\bfont-\['DM_Sans',sans-serif\]\s?/g, '');
    
    // Remove explicit style fontSize, lineHeight, fontFamily
    newMatch = newMatch.replace(/fontSize:\s*['"][^'"]+['"],?\s*/g, '');
    newMatch = newMatch.replace(/lineHeight:\s*['"][^'"]+['"],?\s*/g, '');
    newMatch = newMatch.replace(/fontFamily:\s*(['"`]).*?\1,?\s*/g, '');
    
    if (newMatch.includes('className="')) {
      if (!newMatch.includes('product-heading')) {
        newMatch = newMatch.replace('className="', 'className="product-heading ');
      }
    } else {
      newMatch = newMatch.replace(`<${tag}`, `<${tag} className="product-heading"`);
    }
    
    // Clean up double spaces in class names
    newMatch = newMatch.replace(/className="([^"]*)"/g, (m, classes) => {
       return `className="${classes.replace(/\s+/g, ' ').trim()}"`;
    });
    
    return newMatch;
  });
  
  fs.writeFileSync(file, content, 'utf8');
});
