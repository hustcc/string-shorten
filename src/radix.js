var RadixFormatter = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+<>?-=[]{}:;,/|';

module.exports = function(num) {
  var radix = RadixFormatter.length;

  var result = '';

  do {
    var remainder = num % radix;

    result = RadixFormatter.charAt(remainder) + result;

    num = (num - remainder) / radix;
  } while (num !== 0);
  return result;
};
