function getPathByExtension(paths, extension) {
  const extensions = extension.split(',');
  return paths.filter((p) => {
    const ps = p.split('.');
    return extensions.includes('.' + ps[ps.length - 1]);
  }).join(' ');
}

module.exports = {
  getPathByExtension,
};
