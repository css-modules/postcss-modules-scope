module.exports = {
  // Return names that are already escaped for CSS, as css-loader does.
  generateScopedName: function (name) {
    return String.raw`${name}\+x\/y\=\=`;
  },
};
