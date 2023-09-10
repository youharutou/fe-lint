/*eslint-disable*/
const shell = require('shelljs');

function setPackage(pkgObj, success, fail) {
  let scripts = 'npm pkg set';
  for (const key in pkgObj) {
    scripts += ' scripts.' + key + '="' + pkgObj[key] + '"';
  }
  if (shell.exec(scripts).code === 0) {
    success && success();
  } else {
    fail && fail();
    shell.echo('Failed to set package');
    shell.exit(1);
  }
}

module.exports = {
  setPackage,
};
