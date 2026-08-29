import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/clients');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. The Hyderabad Hustlers
const svg1 = `
<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Anton&amp;family=Montserrat:wght@800;900&amp;display=swap');
      .title-the { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 32px; fill: #1D1E22; letter-spacing: 3px; }
      .title-hh { font-family: 'Anton', 'Impact', sans-serif; font-size: 76px; fill: #1D1E22; letter-spacing: 2px; }
    </style>
  </defs>
  <!-- Yellow Speech Bubble Box -->
  <path d="M 60 40 H 740 V 300 H 180 L 110 360 V 300 H 60 Z" fill="#F8B133"/>
  
  <!-- Text Elements -->
  <text x="100" y="95" class="title-the">THE</text>
  <text x="96" y="180" class="title-hh">HYDERABAD</text>
  <text x="96" y="260" class="title-hh">HUSTLERS</text>

  <!-- Charminar Silhouette Graphic -->
  <g transform="translate(520, 70)" fill="#1D1E22">
    <!-- Left Tower -->
    <rect x="10" y="30" width="22" height="190" />
    <path d="M 10 30 C 10 10 32 10 32 30 Z" />
    <polygon points="17,10 25,10 21,-5" />
    <rect x="6" y="80" width="30" height="8" />
    <rect x="6" y="145" width="30" height="8" />
    <circle cx="21" cy="55" r="4" fill="#F8B133" />
    <circle cx="21" cy="115" r="4" fill="#F8B133" />
    <circle cx="21" cy="180" r="4" fill="#F8B133" />

    <!-- Right Tower -->
    <rect x="128" y="30" width="22" height="190" />
    <path d="M 128 30 C 128 10 150 10 150 30 Z" />
    <polygon points="135,10 143,10 139,-5" />
    <rect x="124" y="80" width="30" height="8" />
    <rect x="124" y="145" width="30" height="8" />
    <circle cx="139" cy="55" r="4" fill="#F8B133" />
    <circle cx="139" cy="115" r="4" fill="#F8B133" />
    <circle cx="139" cy="180" r="4" fill="#F8B133" />

    <!-- Center Building -->
    <rect x="32" y="70" width="96" height="150" />
    <!-- Center Grand Arch Cutout -->
    <path d="M 54 220 C 54 150 106 150 106 220 Z" fill="#F8B133" />
    <path d="M 64 220 C 64 165 96 165 96 220 Z" fill="#1D1E22" />

    <!-- Gallery Windows -->
    <rect x="42" y="85" width="14" height="24" rx="7" fill="#F8B133" />
    <rect x="73" y="85" width="14" height="24" rx="7" fill="#F8B133" />
    <rect x="104" y="85" width="14" height="24" rx="7" fill="#F8B133" />

    <!-- Ornamental Cornice Balcony -->
    <rect x="28" y="55" width="104" height="15" />
    <rect x="22" y="50" width="116" height="5" />
    <circle cx="48" cy="62" r="3" fill="#F8B133" />
    <circle cx="68" cy="62" r="3" fill="#F8B133" />
    <circle cx="92" cy="62" r="3" fill="#F8B133" />
    <circle cx="112" cy="62" r="3" fill="#F8B133" />
  </g>
</svg>
`;

// 2. GridPOS (Clean white on dark / transparent, with white wordmark & 4-tile grid)
const svg2 = `
<svg width="800" height="240" viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800;900&amp;display=swap');
      .gridpos-text { font-family: 'Inter', sans-serif; font-weight: 900; font-size: 130px; fill: #FFFFFF; letter-spacing: -2px; }
    </style>
  </defs>
  <!-- 4 Rounded Square Tiles -->
  <rect x="30" y="30" width="75" height="75" rx="16" fill="none" stroke="#FFFFFF" stroke-width="18" />
  <rect x="125" y="30" width="75" height="75" rx="16" fill="none" stroke="#FFFFFF" stroke-width="18" />
  <rect x="30" y="125" width="75" height="75" rx="16" fill="none" stroke="#FFFFFF" stroke-width="18" />
  <rect x="125" y="125" width="75" height="75" rx="16" fill="none" stroke="#FFFFFF" stroke-width="18" />

  <!-- Wordmark -->
  <text x="240" y="165" class="gridpos-text">GridPOS</text>
</svg>
`;

// 3. Origami Paper Airplane (Teal & Lime Green)
const svg3 = `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Left Main Wing Teal -->
  <polygon points="300,20 40,195 300,165" fill="#46C2D6" />
  <!-- Right Main Wing Teal -->
  <polygon points="300,20 560,195 300,165" fill="#46C2D6" />
  <!-- Left Keel Green -->
  <polygon points="300,20 300,270 140,240" fill="#90C838" />
  <!-- Right Keel Green -->
  <polygon points="300,20 300,270 460,240" fill="#90C838" />
  <!-- Crisp Center Line Divider -->
  <line x1="300" y1="20" x2="300" y2="270" stroke="#FFFFFF" stroke-width="7" />
</svg>
`;

// 4. ZilVox STUDIO (3D wireframe cube with red square, outlined ZilVox + red dot, STUDIO)
const svg4 = `
<svg width="900" height="260" viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&amp;display=swap');
      .studio-text { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 32px; fill: #FFFFFF; letter-spacing: 24px; }
      .zv-font { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 130px; fill: none; stroke: #FFFFFF; stroke-width: 5; letter-spacing: 2px; }
    </style>
  </defs>

  <!-- 3D Perspective Cube Wireframe -->
  <g stroke="#FFFFFF" stroke-width="7" stroke-linejoin="round" fill="none">
    <!-- Front Face -->
    <polygon points="40,70 160,70 160,190 40,190" />
    <!-- Top Face -->
    <polygon points="40,70 90,30 210,30 160,70" />
    <!-- Right Face -->
    <polygon points="160,70 210,30 210,150 160,190" />
  </g>
  <!-- Red Solid Square on Front -->
  <rect x="75" y="105" width="50" height="50" rx="6" fill="#E50914" />

  <!-- Outlined ZilVox Text -->
  <g stroke="#FFFFFF" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <!-- Z -->
    <path d="M 270 75 H 335 L 270 175 H 340" stroke-width="7" />
    <!-- i (stem) -->
    <line x1="375" y1="105" x2="375" y2="175" stroke-width="7" />
    <!-- l -->
    <line x1="415" y1="75" x2="415" y2="175" stroke-width="7" />
    <!-- V -->
    <path d="M 455 75 L 495 175 L 535 75" stroke-width="7" />
    <!-- o -->
    <ellipse cx="585" cy="132" rx="30" ry="42" stroke-width="6.5" />
    <!-- x -->
    <line x1="645" y1="90" x2="705" y2="175" stroke-width="7" />
    <line x1="705" y1="90" x2="645" y2="175" stroke-width="7" />
  </g>
  <!-- Solid Red Dot above i -->
  <rect x="367" y="70" width="16" height="16" rx="3" fill="#E50914" />

  <!-- STUDIO Subtitle -->
  <text x="270" y="235" class="studio-text">STUDIO</text>
</svg>
`;

// 5. M Circle Logo (Golden Yellow disc with white cutout m)
const svg5 = `
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Gold Disc -->
  <circle cx="200" cy="200" r="190" fill="#FDB813" />
  <!-- White Cutout 'm' -->
  <path d="M 110 150 H 152 V 180 C 162 155 186 145 210 145 C 236 145 254 158 262 180 C 274 155 298 145 324 145 V 285 H 280 V 196 C 280 174 266 164 250 164 C 232 164 220 174 220 196 V 285 H 176 V 196 C 176 174 162 164 146 164 C 128 164 116 174 116 196 V 285 H 72 V 150 H 110 Z" fill="#FFFFFF" />
</svg>
`;

// 6. EDVIFY (Dual tone blue/orange book spine E, graduate I cap, blue font)
const svg6 = `
<svg width="850" height="240" viewBox="0 0 850 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="edvifyBlue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#29B6F6" />
      <stop offset="100%" stop-color="#1565C0" />
    </linearGradient>
    <linearGradient id="edvifyOrange" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFA726" />
      <stop offset="100%" stop-color="#EF6C00" />
    </linearGradient>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&amp;display=swap');
      .ed-text { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 135px; fill: url(#edvifyBlue); }
    </style>
  </defs>

  <!-- E Book Spines -->
  <!-- Top Blue Book -->
  <path d="M 35 60 C 35 42 50 35 75 35 H 170 V 70 H 85 C 70 70 65 77 65 88 C 65 99 70 106 85 106 H 160 V 132 H 75 C 50 132 35 125 35 107 Z" fill="url(#edvifyBlue)" />
  <line x1="70" y1="62" x2="165" y2="62" stroke="#FFFFFF" stroke-width="4.5" />
  <line x1="70" y1="75" x2="165" y2="75" stroke="#FFFFFF" stroke-width="4.5" />
  <line x1="70" y1="88" x2="155" y2="88" stroke="#FFFFFF" stroke-width="4.5" />

  <!-- Bottom Orange Book -->
  <path d="M 35 118 C 35 100 50 93 75 93 H 160 V 119 H 85 C 70 119 65 126 65 137 C 65 148 70 155 85 155 H 170 V 190 H 75 C 50 190 35 183 35 165 Z" fill="url(#edvifyOrange)" />
  <line x1="70" y1="120" x2="155" y2="120" stroke="#FFFFFF" stroke-width="4.5" />
  <line x1="70" y1="133" x2="165" y2="133" stroke="#FFFFFF" stroke-width="4.5" />
  <line x1="70" y1="146" x2="165" y2="146" stroke="#FFFFFF" stroke-width="4.5" />

  <!-- Letters D, V -->
  <text x="195" y="178" class="ed-text">DV</text>

  <!-- Letter I with Student / Cap -->
  <!-- Mortarboard Cap -->
  <polygon points="560,18 600,35 560,52 520,35" fill="#1565C0" />
  <rect x="557" y="45" width="6" height="20" fill="#1565C0" />
  <!-- Student Head -->
  <circle cx="560" cy="70" r="22" fill="#F28518" />
  <!-- Body/Stem of I -->
  <path d="M 538 102 H 582 L 572 188 H 548 Z" fill="url(#edvifyBlue)" />

  <!-- Letters F, Y -->
  <text x="610" y="178" class="ed-text">FY</text>
</svg>
`;

// 7. Navigation Arrow Compass Ring
const svg7 = `
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer Ring -->
  <circle cx="200" cy="200" r="165" stroke="#FFFFFF" stroke-width="14" fill="none" />
  
  <!-- 3D Beveled Chevron Arrowhead -->
  <!-- Right Light Face -->
  <polygon points="200,60 320,320 200,255" fill="#FFFFFF" opacity="0.95" stroke="#FFFFFF" stroke-width="8" stroke-linejoin="round" />
  <!-- Left Darker Shaded Face -->
  <polygon points="200,60 80,320 200,255" fill="#C5C7CC" opacity="0.9" stroke="#FFFFFF" stroke-width="8" stroke-linejoin="round" />
  <!-- Center Crisp Seam -->
  <line x1="200" y1="60" x2="200" y2="255" stroke="#FFFFFF" stroke-width="6" />
</svg>
`;

// 8. Iqbal Jewellers (Since 1975 Gold Crest)
const svg8 = `
<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&amp;family=Playfair+Display:ital,wght@1,600&amp;display=swap');
      .gold-text { font-family: 'Cinzel', serif; font-weight: 700; fill: #DFB15B; font-size: 38px; letter-spacing: 7px; text-anchor: middle; }
      .gold-since { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 600; fill: #DFB15B; font-size: 32px; letter-spacing: 4px; text-anchor: middle; }
      .monogram { font-family: 'Cinzel', serif; font-weight: 700; font-size: 130px; fill: #DFB15B; }
    </style>
  </defs>

  <!-- Solitaire Diamond at Top -->
  <polygon points="250,25 300,65 250,105 200,65" stroke="#DFB15B" stroke-width="5" fill="none" />
  <polygon points="200,65 225,25 275,25 300,65" stroke="#DFB15B" stroke-width="4" fill="none" />
  <line x1="250" y1="25" x2="250" y2="105" stroke="#DFB15B" stroke-width="4" />
  <line x1="225" y1="25" x2="250" y2="65" stroke="#DFB15B" stroke-width="3" />
  <line x1="275" y1="25" x2="250" y2="65" stroke="#DFB15B" stroke-width="3" />

  <!-- Ring Band Halo -->
  <path d="M 100 255 A 155 155 0 1 1 400 255" stroke="#DFB15B" stroke-width="7" fill="none" />
  <circle cx="95" cy="255" r="9" fill="#DFB15B" />
  <circle cx="405" cy="255" r="9" fill="#DFB15B" />

  <!-- IJ Monogram -->
  <text x="175" y="270" class="monogram">I</text>
  <text x="235" y="285" class="monogram">J</text>
  
  <!-- Diagonal Spear / Scepter -->
  <line x1="185" y1="315" x2="310" y2="135" stroke="#DFB15B" stroke-width="8" stroke-linecap="round" />
  <polygon points="310,135 290,155 318,160" fill="#DFB15B" />

  <!-- IQBAL JEWELLERS Text -->
  <text x="250" y="410" class="gold-text">IQBAL JEWELLERS</text>
  <!-- SINCE 1975 -->
  <text x="250" y="460" class="gold-since">SINCE 1975</text>
</svg>
`;

// 9. neo HOMEO (Continuous indigo ligature ribbon + homeopathic spheres + green leaf)
const svg9 = `
<svg width="700" height="350" viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;display=swap');
      .homeo-text { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 38px; fill: #8C8C91; letter-spacing: 26px; text-anchor: middle; }
    </style>
  </defs>

  <!-- 'neo' Continuous Indigo Ribbon Loop -->
  <path d="M 60 250 V 135 C 60 70 110 45 160 45 C 215 45 250 85 250 145 V 250" 
        stroke="#232F87" stroke-width="24" stroke-linecap="round" fill="none" />
  
  <path d="M 235 165 H 370 C 370 95 315 50 270 90 C 215 130 235 250 355 250 C 445 250 515 155 565 155" 
        stroke="#232F87" stroke-width="24" stroke-linecap="round" fill="none" />

  <!-- Diminishing Grey Homeopathic Dots Trail -->
  <circle cx="465" cy="215" r="24" fill="#8C8C91" />
  <circle cx="505" cy="232" r="19" fill="#A2A2A7" />
  <circle cx="540" cy="235" r="14.5" fill="#BDBDC2" />
  <circle cx="572" cy="225" r="11" fill="#D6D6DB" />
  <circle cx="600" cy="204" r="7.5" fill="#E8E8ED" />

  <!-- Fresh Green Leaf Accent -->
  <path d="M 565 155 C 590 115 625 118 618 165 C 595 190 560 175 565 155 Z" fill="#00A859" />

  <!-- HOMEO Subtitle -->
  <text x="350" y="320" class="homeo-text">HOMEO</text>
</svg>
`;

async function buildPngs() {
  const images = [
    { name: '1.png', svg: svg1 },
    { name: '2.png', svg: svg2 },
    { name: '3.png', svg: svg3 },
    { name: '4.png', svg: svg4 },
    { name: '5.png', svg: svg5 },
    { name: '6.png', svg: svg6 },
    { name: '7.png', svg: svg7 },
    { name: '8.png', svg: svg8 },
    { name: '9.png', svg: svg9 },
  ];

  for (const item of images) {
    const dest = path.join(outDir, item.name);
    await sharp(Buffer.from(item.svg))
      .png({ quality: 100 })
      .toFile(dest);
    console.log(`Saved ${dest}`);
  }
}

buildPngs().catch(console.error);
