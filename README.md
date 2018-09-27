# string-shorten

> Shorten a string with crc32 and radix. [Try online](https://runkit.com/hustcc/string-shorten).

[![Build Status](https://travis-ci.org/hustcc/string-shorten.svg?branch=master)](https://travis-ci.org/hustcc/string-shorten)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/string-shorten/badge.svg)](https://coveralls.io/github/hustcc/string-shorten)
[![npm](https://img.shields.io/npm/v/string-shorten.svg)](https://www.npmjs.com/package/string-shorten)
[![npm download](https://img.shields.io/npm/dm/string-shorten.svg)](https://www.npmjs.com/package/string-shorten)



## Usage

> **npm i --save string-shorten**


```js
var shorten = require('string-shorten');

shorten('世界，你好'); // 'oTM]^'

shorten('Shorten a string with crc32 and radix.'); // 'e:::%'
```

**Warning**: base on crc32 algorithm which has collision probability: `216555` english words, `2` collisions.


## License

MIT@[hustcc](https://github.com/hustcc).

