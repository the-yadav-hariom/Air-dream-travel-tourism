/**
 * Air Dream Travel & Tourism - Zero-Dependency High Performance Node.js Server
 * Runs out-of-the-box using pure Node.js built-in modules (http, fs, path, url).
 * No 'npm install' or external dependencies required!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

// MIME types dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// Ensure user uploaded and generated card images exist locally in assets/cards
const userUploadDir = 'C:\\Users\\hario\\.gemini\\antigravity-ide\\brain\\77e24771-f204-4317-ba9d-104dbbde6991\\.user_uploaded';
const brainDir = 'C:\\Users\\hario\\.gemini\\antigravity-ide\\brain\\77e24771-f204-4317-ba9d-104dbbde6991';
const cardSyncList = [
  { src: path.join(userUploadDir, 'media_1792255830332.png'), dest: 'card1.png' },
  { src: path.join(userUploadDir, 'media_1792255998371.jpg'), dest: 'card2.jpg' },
  { src: path.join(userUploadDir, 'media_1792256004995.jpg'), dest: 'card3.jpg' },
  { src: path.join(userUploadDir, 'media_1792256015178.jpg'), dest: 'card4.jpg' },
  { src: path.join(userUploadDir, 'media_1792256043061.jpg'), dest: 'card5.jpg' },
  { src: path.join(brainDir, 'competitive_fare_card_1792256208155.jpg'), dest: 'card6.jpg' }
];

try {
  const cardsDir = path.join(__dirname, 'assets', 'cards');
  if (!fs.existsSync(cardsDir)) fs.mkdirSync(cardsDir, { recursive: true });
  cardSyncList.forEach(({ src, dest }) => {
    const destPath = path.join(cardsDir, dest);
    if (fs.existsSync(src)) {
      try { fs.copyFileSync(src, destPath); } catch (err) {}
    }
  });
} catch (e) {
  // Silent fallback
}

// In-memory database
const quoteSubmissions = [];
const newsletterSubscribers = new Set();

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // --------------------------------------------------------------------------
  // API Endpoints
  // --------------------------------------------------------------------------
  
  // POST /api/quotes
  if (pathname === '/api/quotes' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const quoteId = 'ADT-' + Math.floor(100000 + Math.random() * 900000);
        data.quoteId = quoteId;
        data.receivedAt = new Date().toISOString();
        quoteSubmissions.push(data);

        console.log(`[Air Dream] New Quote Received #${quoteId}: ${data.name || 'Anonymous'} - ${data.serviceType || 'Travel'}`);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: `Thank you, ${data.name || 'Traveler'}! Your quote request #${quoteId} has been received. Our team will contact you within 2 hours.`,
          quoteId
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // POST /api/newsletter
  if (pathname === '/api/newsletter' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        if (data.email) {
          newsletterSubscribers.add(data.email);
          console.log(`[Air Dream] Newsletter subscriber added: ${data.email}`);
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Welcome to the Air Dream VIP Travel Club! Exclusive deals will arrive in your inbox.'
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid request' }));
      }
    });
    return;
  }

  // GET /api/search
  if (pathname === '/api/search' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      results: [
        { id: '1', title: 'Dubai Luxury Skyline & Desert Safari', price: 649, category: 'tours' },
        { id: '2', title: 'Executive Umrah 5-Star Package', price: 1199, category: 'umrah' },
        { id: '3', title: 'Bali Tropical Paradise Tour', price: 899, category: 'tours' }
      ]
    }));
    return;
  }

  // --------------------------------------------------------------------------
  // Static File Serving & Direct Card Image Delivery
  // --------------------------------------------------------------------------
  if (pathname.startsWith('/assets/cards/')) {
    const cardDest = pathname.replace('/assets/cards/', '');
    const matched = cardSyncList.find(c => c.dest === cardDest);
    if (matched && fs.existsSync(matched.src)) {
      const ext = path.extname(matched.dest).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'image/jpeg' });
      fs.createReadStream(matched.src).pipe(res);
      return;
    }
  }

  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  let filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routing
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  ✈️  Air Dream Travel & Tourism - Server Running!`);
  console.log(`  📍 Local URL:  http://localhost:${PORT}`);
  console.log(`  🚀 Ready for live browser browsing & API requests`);
  console.log(`======================================================\n`);
});
