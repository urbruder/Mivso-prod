const fs = require('fs');

const filePath = 'C:/Users/User/.gemini/antigravity-ide/brain/2da951ab-0d8a-4795-8f0b-0f04f2fd3d86/.system_generated/steps/21/content.md';
const content = fs.readFileSync(filePath, 'utf8');

const term = '/chat/completions';
let index = content.indexOf(term);
while (index !== -1) {
    console.log(`================ MATCH FOR ${term} at index ${index} ================`);
    const start = Math.max(0, index - 200);
    const end = Math.min(content.length, index + 2000);
    console.log(content.slice(start, end));
    index = content.indexOf(term, index + 1);
}
