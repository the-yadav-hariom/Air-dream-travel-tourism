module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method === 'POST') {
    return res.status(200).json({
      success: true,
      message: 'Welcome to the Air Dream VIP Travel Club! Exclusive deals will arrive in your inbox.'
    });
  }

  res.status(200).json({ status: 'ok' });
};
