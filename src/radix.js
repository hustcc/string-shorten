var RadixFormatter = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+<>?-=[]{}:;,/|';

module.exports = function(num) {
  var radix = RadixFormatter.length;

  var result = '';
  while (num !== 0) {
    var remainder = num % radix;

    result = RadixFormatter.charAt(remainder) + result;

    num = (num - remainder) / radix;
  }
  return result;
};
