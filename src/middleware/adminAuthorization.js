const jwt = require('jsonwebtoken');

const authorizeAdmin = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) {
    return res.status(401).json({ message: 'Token tidak disediakan!' });
  }

  const token = bearerHeader.split(' ')[1]; // Ambil token setelah "Bearer"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Token valid, simpan data admin ke req untuk akses di endpoint
    req.admin = decoded; // misalnya: { id, username, email }
    
    next(); // lanjut ke handler berikutnya
  } catch (error) {
    return res.status(401).json({ message: 'Token tidak valid!' });
  }
};

module.exports = authorizeAdmin;
