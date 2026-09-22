const db = require('../models/db');
 
const getCircleMember = async (req, res) => {
try {
const { id } = req.params;
 
const member = await db('circle_members')
.where({ id })
.first();
 
if (!member) {
return res.status(404).json({
error: 'Member not found'
});
}
 
res.json(member);
} catch (err) {
res.status(500).json({
error: err.message
});
}
};
 
const listCircleMembers = async (req, res) => {
try {
const members = await db('circle_members')
.orderBy('created_at', 'asc');
 
console.log('MEMBERS FROM DB:', members);
 
res.json({ members });
} catch (err) {
res.status(500).json({
error: err.message
});
}
};
 
const updateCircleMember = async (req, res) => {
try {
const { id } = req.params;
 
const allowed = [
'display_name',
'role',
'avatar_url',
'bio'
];
 
const updates = Object.fromEntries(
Object.entries(req.body).filter(([key]) =>
allowed.includes(key)
)
);
 
updates.updated_at = new Date().toISOString();
 
const [updated] = await db('circle_members')
.where({ id })
.update(updates)
.returning('*');
 
if (!updated) {
return res.status(404).json({
error: 'Member not found'
});
}
 
res.json(updated);
} catch (err) {
res.status(500).json({
error: err.message
});
}
};
 
module.exports = {
getCircleMember,
listCircleMembers,
updateCircleMember
};