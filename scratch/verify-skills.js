const fs = require('fs');
const path = require('path');

// 1. Read skills-data.js and find all keys in REAL_ESTATE_SKILLS_METADATA
const skillsDataContent = fs.readFileSync(path.join(__dirname, '../public/skills-data.js'), 'utf8');

// Match keys like "expired-listing-re-engager": {
const keyRegex = /"([^"]+)"\s*:\s*\{/g;
const metadataKeys = [];
let match;
while ((match = keyRegex.exec(skillsDataContent)) !== null) {
    metadataKeys.push(match[1]);
}

console.log(`Found ${metadataKeys.length} keys in REAL_ESTATE_SKILLS_METADATA`);

// 2. Scan public/skills for all subdirectories
const skillsRoot = path.join(__dirname, '../public/skills');
const categoryFolders = fs.readdirSync(skillsRoot, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

const filesystemSlugs = [];
const missingSkillMd = [];
const folderMappings = {};

for (const catFolder of categoryFolders) {
    const catPath = path.join(skillsRoot, catFolder);
    const skillFolders = fs.readdirSync(catPath, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);
    
    for (const skillFolder of skillFolders) {
        filesystemSlugs.push(skillFolder);
        folderMappings[skillFolder] = path.join(catFolder, skillFolder);
        
        const skillMdPath = path.join(catPath, skillFolder, 'SKILL.md');
        if (!fs.existsSync(skillMdPath)) {
            missingSkillMd.push(path.join(catFolder, skillFolder));
        }
    }
}

console.log(`Found ${filesystemSlugs.length} skill folders in filesystem`);

// 3. Find mismatches
const inMetaButNotFS = metadataKeys.filter(k => !filesystemSlugs.includes(k));
const inFSButNotMeta = filesystemSlugs.filter(s => !metadataKeys.includes(s));

console.log('\nMismatches:');
console.log(`- In metadata but not filesystem: ${inMetaButNotFS.length}`);
if (inMetaButNotFS.length > 0) {
    console.log(inMetaButNotFS);
}
console.log(`- In filesystem but not metadata: ${inFSButNotMeta.length}`);
if (inFSButNotMeta.length > 0) {
    console.log(inFSButNotMeta);
}

console.log(`\nMissing SKILL.md: ${missingSkillMd.length}`);
if (missingSkillMd.length > 0) {
    console.log(missingSkillMd);
}
