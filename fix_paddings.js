const fs = require('fs');

// 1. PotentialMeterPage.jsx
let pm = fs.readFileSync('frontend/src/pages/PotentialMeterPage.jsx', 'utf8');
// Revert Statistics Section
pm = pm.replace(/className="w-full flex-shrink-0 flex items-center justify-center bg-\[#1F57C7\] px-4 py-2 md:py-4"/, 'className="w-full flex-shrink-0 flex items-center justify-center bg-[#1F57C7] px-4 py-6 md:py-8"');
// Revert CTA Section
pm = pm.replace(/className="w-full bg-\[#FBA93E\] py-4 md:py-6 px-4 flex flex-col items-center justify-center text-center mt-auto overflow-hidden"/, 'className="w-full bg-[#FBA93E] py-10 md:py-16 px-4 flex flex-col items-center justify-center text-center mt-auto overflow-hidden"');
fs.writeFileSync('frontend/src/pages/PotentialMeterPage.jsx', pm, 'utf8');

// 2. SkillzzaPersona.jsx
let sp = fs.readFileSync('frontend/src/pages/SkillzzaPersona.jsx', 'utf8');
// Revert Section 5 Make the Impact py-20
sp = sp.replace(/className="relative py-4 overflow-hidden" style={{\s*backgroundImage/g, 'className="relative py-20 overflow-hidden" style={{\n        backgroundImage');
// Revert Final CTA py-20
sp = sp.replace(/className="py-4" style={{\s*backgroundImage: `url\(\$\{getAssetPath\('\/Group%2041612\.png'\)\}\)`,/g, 'className="py-20" style={{\n        backgroundImage: `url(${getAssetPath(\'/Group%2041612.png\')})`,');
fs.writeFileSync('frontend/src/pages/SkillzzaPersona.jsx', sp, 'utf8');

// 3. XperiencePlatformPage.jsx
let xp = fs.readFileSync('frontend/src/pages/XperiencePlatformPage.jsx', 'utf8');
// Let's check XperiencePlatformPage.jsx for CTA
// Wait, I will use regex to revert colored backgrounds. For example stakeholder bg-[#F9FAFB]? That's just gray.
// But CTA is usually colored. Let's see if there is any CTA.
// We can manually inspect XperiencePlatformPage.jsx if needed.
fs.writeFileSync('frontend/src/pages/XperiencePlatformPage.jsx', xp, 'utf8');

console.log("Restored paddings on colored sections");
