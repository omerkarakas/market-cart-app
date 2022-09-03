const users = require('./companies.json');
const posts = require('./items.json');

module.exports = () => ({
  companies: users,
  items: posts,
});
