module.exports = function(str) {
  str = str.replace(/\r\n/g, '\n');

  var utf = '';

  for (var n = 0; n < str.length; n ++) {
    var c = str.charCodeAt(n);
    if (c < 128) {
      utf += String.fromCharCode(c);
    } else if((c > 127) && (c < 2048)) {
      utf += String.fromCharCode((c >> 6) | 192);
      utf += String.fromCharCode((c & 63) | 128);
    } else {
      utf += String.fromCharCode((c >> 12) | 224);
      utf += String.fromCharCode(((c >> 6) & 63) | 128);
      utf += String.fromCharCode((c & 63) | 128);
    }
  }
  return utf;
};
