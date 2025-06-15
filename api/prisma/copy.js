const fs = require('fs');
const path = require('path');

const srcDir = '.';
const dstDir = '/tmp/schema';

// Create the destination directory if it doesn't exist
if (!fs.existsSync(dstDir)) {
  fs.mkdirSync(dstDir, { recursive: true });
}

// Walk through the source directory and copy files ending in .schema
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.prisma')) {
      const dstFilePath = path.join(dstDir, file + '.txt');
      fs.copyFileSync(filePath, dstFilePath);
    }
  });
}

walkDir(srcDir);