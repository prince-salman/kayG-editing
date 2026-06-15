const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\Salman\\.gemini\\antigravity\\brain\\03bf43cd-8ce3-44a8-bfbe-89c690a1b94f\\.system_generated\\steps\\68\\content.md', 'utf-8');

// Google Drive file IDs are typically 33 characters long, alphanumeric with hyphens/underscores.
const regex = /"([a-zA-Z0-9_-]{33})"/g;
let match;
const ids = new Set();

while ((match = regex.exec(content)) !== null) {
  if (match[1] !== '1chdqgGtZH7AlwEYEDfDoBHgRqRGsCt_l') {
    ids.add(match[1]);
  }
}

console.log("Found IDs:", Array.from(ids));
