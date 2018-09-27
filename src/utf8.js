module.exports = function(str) {
  str = str.replace(/\r\n/g, '\n');

  var utftext = '';

  for (var n = 0; n < str.length; n ++) {
    var c = str.charCodeAt(n);
    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if((c > 127) && (c < 2048)) {
      utftext += String.fromCharCode((c >> 6) | 192);
      utftext += String.fromCharCode((c & 63) | 128);
    } else {
      utftext += String.fromCharCode((c >> 12) | 224);
      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
      utftext += String.fromCharCode((c & 63) | 128);
    }
  }
  return utftext;
};
