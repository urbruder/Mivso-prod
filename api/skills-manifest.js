const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const skillsRoot = path.join(process.cwd(), 'public', 'skills');
        const categories = [];

        const categoryFolders = fs.readdirSync(skillsRoot, { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name)
            .sort();

        for (const categoryName of categoryFolders) {
            const categoryPath = path.join(skillsRoot, categoryName);
            const skillFolders = fs.readdirSync(categoryPath, { withFileTypes: true })
                .filter(d => d.isDirectory())
                .map(d => d.name)
                .sort();

            const skills = skillFolders.map((skillFolder, index) => {
                const skillPath = path.join(categoryPath, skillFolder);
                const files = fs.readdirSync(skillPath).sort();

                // Prettify name: replace hyphens/underscores with spaces, strip trailing number brackets, Title Case
                const prettyName = skillFolder
                    .replace(/[-_]/g, ' ')
                    .replace(/\s*[\[(]\d+[\])]\s*$/, '')
                    .replace(/\b\w/g, c => c.toUpperCase())
                    .trim();

                return {
                    name: prettyName,
                    slug: skillFolder,
                    folder: categoryName,
                    free: index < 3,
                    files
                };
            });

            const categorySlug = categoryName
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');

            categories.push({ name: categoryName, slug: categorySlug, skills });
        }

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'public, max-age=60');
        return res.status(200).json({ categories });
    } catch (err) {
        console.error('skills-manifest error:', err.message);
        return res.status(500).json({ error: err.message });
    }
};
