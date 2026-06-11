const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Replace fontSize: 'XXpx'
  content = content.replace(/fontSize:\s*['"]?([0-9]+(?:\.[0-9]+)?)px['"]?/g, (match, p1) => {
    let num = parseFloat(p1);
    if (num <= 18) {
      changed = true;
      return `fontSize: '${num + 2}px'`;
    }
    return match;
  });

  // 2. Replace fontSize: XX
  content = content.replace(/fontSize:\s*([0-9]+(?:\.[0-9]+)?)/g, (match, p1) => {
    let num = parseFloat(p1);
    if (num <= 18) {
      changed = true;
      return `fontSize: ${num + 2}`;
    }
    return match;
  });

  // 3. Replace Tailwind text-[XXpx]
  content = content.replace(/text-\[([0-9]+(?:\.[0-9]+)?)px\]/g, (match, p1) => {
    let num = parseFloat(p1);
    if (num <= 18) {
      changed = true;
      return `text-[${num + 2}px]`;
    }
    return match;
  });

  // 4. Replace standard tailwind classes
  const twMap = {
    'text-xs': 'text-sm',      // 12px -> 14px
    'text-sm': 'text-base',    // 14px -> 16px
    'text-base': 'text-lg',    // 16px -> 18px
    'text-lg': 'text-xl'       // 18px -> 20px
  };
  content = content.replace(/\b(text-xs|text-sm|text-base|text-lg)\b/g, (match, p1) => {
    changed = true;
    return twMap[p1];
  });

  // 5. Darken greys for readability
  const colorMap = {
    '#71717B': '#52525B', // zinc-500 -> zinc-600
    '#71717A': '#52525B', // zinc-500
    '#64748B': '#475569', // slate-500 -> slate-600
    '#475569': '#334155', // slate-600 -> slate-700
    '#6B7280': '#4B5563', // gray-500 -> gray-600
    '#9CA3AF': '#6B7280', // gray-400 -> gray-500
    '#A1A1AA': '#71717B', // zinc-400 -> zinc-500
    '#71717b': '#52525b',
    '#64748b': '#475569',
    '#6b7280': '#4b5563',
    '#9ca3af': '#6b7280',
    '#a1a1aa': '#71717b',
    'text-gray-500': 'text-gray-600',
    'text-gray-400': 'text-gray-500',
    'text-slate-500': 'text-slate-600',
    'text-slate-600': 'text-slate-700',
    'text-zinc-500': 'text-zinc-600',
  };

  for (const [oldC, newC] of Object.entries(colorMap)) {
    if (content.includes(oldC)) {
      content = content.split(oldC).join(newC);
      changed = true;
    }
  }

  // 6. Handle raw CSS font-size: 14px
  content = content.replace(/font-size:\s*([0-9]+(?:\.[0-9]+)?)px/g, (match, p1) => {
    let num = parseFloat(p1);
    if (num <= 18) {
      changed = true;
      return `font-size: ${num + 2}px`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkSync(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== 'assets') {
        walkSync(filePath);
      }
    } else {
      if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
        processFile(filePath);
      }
    }
  }
}

walkSync('./src');
