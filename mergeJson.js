const fs = require('fs');
const deepmerge = require('deepmerge');

// Read and parse the first JSON file
const result = JSON.parse(fs.readFileSync('result.json', 'utf8'));

// Read and parse the second JSON file
const result2 = JSON.parse(fs.readFileSync('result2.json', 'utf8'));

// Perform a deep merge
const merged = deepmerge(result, result2);

// Write the merged JSON to a new file
fs.writeFileSync('merged.json', JSON.stringify(merged, null, 2));

console.log('Deep merged JSON saved to merged.json');
