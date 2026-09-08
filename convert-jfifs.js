// bulk-convert.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Next.js static assets are stored in the 'public' directory
const targetFolder = path.join(__dirname, "public");

function scanAndConvert(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively search nested folders inside public/
      scanAndConvert(fullPath);
    } else if (file.toLowerCase().endsWith(".jfif")) {
      const outputPath = fullPath.replace(/\.jfif$/i, ".jpg");

      sharp(fullPath)
        .jpeg({ quality: 90 }) // Maintains great web resolution
        .toFile(outputPath)
        .then(() => {
          console.log(`✅ Converted: ${file} -> .jpg`);
          fs.unlinkSync(fullPath); // Automatically deletes the old .jfif file
        })
        .catch((err) => console.error(`❌ Error converting ${file}:`, err));
    }
  });
}

console.log("🔄 Scanning public folder for .jfif files...");
scanAndConvert(targetFolder);
