import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

async function optimizeImages() {
  try {
    console.log('🖼️ Optimizing images for web...');

    // Get all PNG files from public directory
    const files = fs.readdirSync(publicDir).filter(file => file.endsWith('.png'));

    let totalOriginal = 0;
    let totalOptimized = 0;

    for (const file of files) {
      const inputPath = path.join(publicDir, file);
      const fileName = path.basename(file, '.png');

      // Skip optimization for very small files (like logo)
      const stats = fs.statSync(inputPath);
      const fileSizeKb = stats.size / 1024;

      if (fileSizeKb < 50) {
        console.log(`⏭️ Skipping ${file} (${fileSizeKb.toFixed(1)} KiB - too small)`);
        continue;
      }

      totalOriginal += stats.size;

      // Convert to WebP with high compression in public directory
      const webpPath = path.join(publicDir, `${fileName}.webp`);
      
      // Skip if WebP already exists
      if (fs.existsSync(webpPath)) {
        console.log(`⏭️ Skipping ${file} (WebP already exists)`);
        continue;
      }

      try {
        const metadata = await sharp(inputPath).metadata();
        
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(webpPath);

        const webpStats = fs.statSync(webpPath);
        const webpSizeKb = webpStats.size / 1024;
        const savings = ((1 - webpStats.size / stats.size) * 100).toFixed(1);

        totalOptimized += webpStats.size;

        console.log(`✅ ${file} → ${fileName}.webp`);
        console.log(`   Original: ${fileSizeKb.toFixed(1)} KiB → WebP: ${webpSizeKb.toFixed(1)} KiB (${savings}% saved)`);
      } catch (err) {
        console.error(`❌ Failed to optimize ${file}:`, err.message);
      }
    }

    if (totalOriginal > 0) {
      const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
      console.log(`\n📊 Total savings: ${((totalOriginal - totalOptimized) / 1024).toFixed(1)} KiB (${totalSavings}% reduction)`);
    }

    console.log('✨ Image optimization complete!\n');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();

