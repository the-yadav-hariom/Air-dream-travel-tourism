const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const liveFile = path.join(__dirname, '..', 'data', 'site-data.json');
  const defaultFile = path.join(__dirname, '..', 'data', 'default-data.json');

  if (req.method === 'GET') {
    const target = fs.existsSync(liveFile) ? liveFile : defaultFile;
    try {
      const data = fs.readFileSync(target, 'utf8');
      return res.status(200).json(JSON.parse(data));
    } catch (e) {
      return res.status(500).json({ error: 'Failed to read site data' });
    }
  }

  if (req.method === 'POST') {
    try {
      const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const dataDir = path.join(__dirname, '..', 'data');
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      fs.writeFileSync(liveFile, JSON.stringify(payload, null, 2), 'utf8');
      return res.status(200).json({ success: true, message: 'Saved successfully' });
    } catch (e) {
      return res.status(400).json({ error: 'Invalid payload' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
};
