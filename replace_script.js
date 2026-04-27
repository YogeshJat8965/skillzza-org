const fs = require('fs');

const files = [
  '/home/yogesh/Desktop/INTERNSHIP/skillzza/skillzza-org/frontend/src/pages/PotentialMeterPage.jsx',
  '/home/yogesh/Desktop/INTERNSHIP/skillzza/skillzza-org/frontend/src/pages/SkillzzaPersona.jsx',
  '/home/yogesh/Desktop/INTERNSHIP/skillzza/skillzza-org/frontend/src/pages/XperiencePlatformPage.jsx'
];

function processTags(content) {
    // We will parse with simple regex to find <p ...> ... </p> or <li ...> ... </li>
    // and replace specifically font and text size classes/inline styles if they are not headings.

    // Better approach: regex specific known strings from manually inspecting them.
}

console.log("File created.")
