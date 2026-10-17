module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  res.status(200).json({
    success: true,
    results: [
      { id: '1', title: 'Dubai Luxury Skyline & Desert Safari', price: 649, category: 'tours' },
      { id: '2', title: 'Executive Umrah 5-Star Package', price: 1199, category: 'umrah' },
      { id: '3', title: 'Bali Tropical Paradise Tour', price: 899, category: 'tours' }
    ]
  });
};
