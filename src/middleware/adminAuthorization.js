const jwt = require('jsonwebtoken');

const authorizeAdmin = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) {
    return res.status(401).json({ message: 'Token tidak disediakan!' });
  }

  const token = bearerHeader.split(' ')[1]; // ambil setelah "Bearer"

  try {
    console.log('Token diterima:', token);
    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.peran !== 'ADMINISTRATOR') {
      return res.status(403).json({ message: 'Anda tidak memiliki akses' });
    }
    next();
  } catch (error) {
    console.error('Authorization error:', error.message);
    return res.status(401).json({ message: 'Token tidak valid!' });
  }
};

module.exports = authorizeAdmin;
