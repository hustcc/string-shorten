var crc32 = require('./crc32.js');
var radix = require('./radix.js');
var utf8 = require('./utf8.js');

module.exports = function(str) {
  return radix(crc32(utf8(str)));
};
