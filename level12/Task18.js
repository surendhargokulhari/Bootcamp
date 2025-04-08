const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'sourceDir');
const targetDir = path.join(__dirname, 'targetDir');

function syncDirs(src, dest) {
  try {
    const sourceFiles = fs.readdirSync(src);
    const targetFiles = fs.existsSync(dest) ? fs.readdirSync(dest) : [];

    const copied = [];
    const updated = [];
    const deleted = [];

    
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    
    sourceFiles.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);

      const srcStat = fs.statSync(srcPath);

      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        copied.push(file);
      } else {
        const destStat = fs.statSync(destPath);
        if (srcStat.mtimeMs > destStat.mtimeMs) {
          fs.copyFileSync(srcPath, destPath);
          updated.push(file);
        }
      }
    });

    
    targetFiles.forEach(file => {
      if (!sourceFiles.includes(file)) {
        const delPath = path.join(dest, file);
        fs.unlinkSync(delPath);
        deleted.push(file);
      }
    });

    console.log('📁 Directory Sync Summary:');
    if (copied.length) console.log('✅ Copied:', copied);
    if (updated.length) console.log('🔁 Updated:', updated);
    if (deleted.length) console.log('❌ Deleted:', deleted);
    if (!copied.length && !updated.length && !deleted.length) {
      console.log('👍 No changes needed. Directories are in sync.');
    }

  } catch (err) {
    console.error('❌ Error during directory sync:', err.message);
  }
}


syncDirs(sourceDir, targetDir);
