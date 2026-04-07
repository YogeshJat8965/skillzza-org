const fs = require('fs');
const file = '/home/yogesh/Desktop/INTERNSHIP/skillzza/skillzza-org/frontend/src/pages/XperiencePlatformPage.jsx';
let content = fs.readFileSync(file, 'utf8');

let changed = 0;

content = content.replace(
  '<div className="relative w-full py-6 md:py-8 lg:py-12 xl:py-16">',
  () => { changed++; return '<div className="relative w-full py-6 md:py-8 lg:py-12 xl:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'; }
);

content = content.replace(
  '<nav className="mb-6 md:mb-8 lg:mb-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 max-w-[1920px] mx-auto">',
  () => { changed++; return '<nav className="mb-6 md:mb-8 lg:mb-12">'; }
);

content = content.replace(
  '<div className="w-full lg:w-[55%] xl:w-1/2 space-y-4 md:space-y-6 lg:space-y-6 xl:space-y-8 z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">',
  () => { changed++; return '<div className="w-full lg:w-[55%] xl:w-1/2 space-y-4 md:space-y-6 lg:space-y-6 xl:space-y-8 z-10 pr-0 lg:pr-8 xl:pr-12">'; }
);

content = content.replace(
  /className="max-w-\[1920px\] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32"/g,
  () => { changed++; return 'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"'; }
);

content = content.replace(
  /className="max-w-\[1400px\] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12"/g,
  () => { changed++; return 'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"'; }
);

content = content.replace(
  /className="max-w-\[1600px\] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12"/g,
  () => { changed++; return 'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"'; }
);

content = content.replace(
  /className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 max-w-\[1400px\]"/g,
  () => { changed++; return 'className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"'; }
);

content = content.replace(
  /className="container mx-auto px-4 md:px-8 lg:px-12 max-w-\[1400px\]"/g,
  () => { changed++; return 'className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"'; }
);

console.log("Made " + changed + " replacements");
fs.writeFileSync(file, content);
