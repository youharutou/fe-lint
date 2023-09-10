/*eslint-disable*/
const { promises } = require('fs');

async function isFileExists(filepath) {
  return await promises
    .access(filepath)
    .then(() => true)
    .catch((_) => false);
}

module.exports = {
  isFileExists,
};
