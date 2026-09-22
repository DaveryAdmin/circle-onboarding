const jwt = require('jsonwebtoken');

const requireSSO = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or malformed Authorization header' });
  }
  const token = authHeader.slice(7);
  try {
    const decoded = jwt.verify(token, process.env.SSO_JWT_SECRET, {
      algorithms: ['HS256', 'RS256'],
      audience: process.env.SSO_AUDIENCE,
      issuer: process.env.SSO_ISSUER,
    });
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') return res.status(401).json({ error: 'Token expired' });
    return res.status(403).json({ error: 'Invalid token' });
  }
};

const optionalSSO = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) return next();
  try { req.user = jwt.verify(authHeader.slice(7), process.env.SSO_JWT_SECRET); } catch (_) {}
  next();
};

module.exports = { requireSSO, optionalSSO };