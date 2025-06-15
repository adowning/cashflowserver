const fs = require('fs');
const path = require('path');

const directory = './'; // start from the current directory

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (path.extname(file) === '.html') {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const regex = /if\s*\(\s*!\s*sessionStorage/g;
      const replacement = `const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
if (!token)`;
      const newContent = fileContent.replace(regex, replacement);
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated ${filePath}`);
    }
  });
}

walkDir(directory);