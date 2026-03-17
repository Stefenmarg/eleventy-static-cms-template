const rawData = require("./site_data.json");

module.exports = rawData.items.reduce((acc, { name, value }) => {
  acc[name] = value;
  return acc;
}, {});