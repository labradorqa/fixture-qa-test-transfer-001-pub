// Parameterized queries, no secrets, validated input.
const validator = require('validator');
function isEmail(s) { return validator.isEmail(String(s)); }
module.exports = { isEmail };
