const express = require('express');
const jwt = require('jsonwebtoken');
 
const router = express.Router();
 
router.get('/', (req, res) => {
const token = jwt.sign(
{
sub: 'dev-user-123',
name: 'David Avery',
 
// Match the UUID we inserted into the database
circleId: '11111111-1111-1111-1111-111111111111',
 
aud: process.env.SSO_AUDIENCE || 'circle-onboarding',
iss: process.env.SSO_ISSUER || 'http://localhost/dev-sso',
 
exp: Math.floor(Date.now() / 1000) + 60 * 60,
iat: Math.floor(Date.now() / 1000)
},
process.env.SSO_JWT_SECRET || 'dev-secret'
);
 
res.json({ token });
});
 
module.exports = router;