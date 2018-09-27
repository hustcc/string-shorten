var expect = require('expect');
var shorten = require('..');

describe('shorten', function() {
  it('1. en', function() {
    expect(shorten('')).toBe('');
    expect(shorten('abc')).toBe('eiZPG');
    expect(shorten('a.b.c')).toBe('M&;yV');
  });

  it('2. zh', function() {
    expect(shorten('你好，hustcc')).toBe('Nxp9)');
    expect(shorten('世界，你好')).toBe('oTM]^');
  });

  it('3. unicode', function() {
    expect(shorten('你好，👏' + String.fromCharCode(1000))).toBe('b/-7,');
  });

  it('4. long string', function() {
    var s = 'This page provides a Javascript implementation CRC32 (Cyclic Redundancy Checksum) calculator. CRC32 (Cyclic Redundancy Checksum) is a fast and efficient algorithm to check the integrity of the data. It returns a 32-bit integer (signed or unsigned). It can be considered a weak type of Cryptographic hash functions (such as MD5). The cryptographic has functions normally has the following 4 goals.';
    expect(shorten(s)).toBe('6ZtPq');
  });

  it('5. conflict sense', function() {
    expect(shorten('codding')).toBe(shorten('gnu'));
    expect(shorten('exhibiters')).toBe(shorten('schlager'));
  });
});
