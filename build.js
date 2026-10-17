// ============================================================
// Build Script — generates config.js from environment variables
// Run automatically by Netlify before deploying (see netlify.toml).
// Same pattern as GCDash and GCSeat.
// ============================================================

const fs = require('fs');

const driveApiKey = process.env.DRIVE_API_KEY;

if (!driveApiKey) {
	console.error('ERROR: DRIVE_API_KEY environment variable is not set.');
	process.exit(1);
}

const config = `var CONFIG = {
  driveApiKey: '${driveApiKey}'
};`;

fs.writeFileSync('config.js', config);
console.log('config.js generated successfully.');
