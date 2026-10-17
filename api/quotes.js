module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method === 'POST') {
    const data = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const quoteId = 'ADT-' + Math.floor(100000 + Math.random() * 900000);
    return res.status(201).json({
      success: true,
      message: `Thank you, ${data.name || 'Traveler'}! Your quote request #${quoteId} has been received. Our team will contact you within 2 hours.`,
      quoteId
    });
  }

  res.status(200).json({ status: 'ok' });
};
