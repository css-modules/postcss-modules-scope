const cssesc = require('cssesc');

//eslint-disable-next-line no-control-regex
const filenameReservedRegex = /[<>:"/\\|?*\x00-\x1F]/g;
//eslint-disable-next-line no-control-regex
const reControlChars = /[\u0000-\u001f\u0080-\u009f]/g;
const reRelativePath = /^\.+/;

module.exports = {
  generateScopedName: function(name) {
    return cssesc(
      name
        .replace(/smile/, '😀')
        .replace(/_with_A/g, 'A')
        .replace(/^((-?[0-9])|--)/, '_$1')
        .replace(filenameReservedRegex, '-')
        .replace(reControlChars, '-')
        .replace(reRelativePath, '-')
        .replace(/\./g, '-'),
      { isIdentifier: true }
    );
  },
};
