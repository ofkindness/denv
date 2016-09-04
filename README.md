denv
====

Easy load environment variables in your app inside docker container
-------------------------------------------------------------------

Installation
------------

```console
  $ npm install --save denv
```

USAGE
-----

```js
const d = require('denv')();

const conString = 'postgres://' + d.env('postgres_user') +
    ':' + d.env('postgres_password') +
    '@' + d.addr() +
    ':' + d.port() +
    '/' + d.env('database', 'test');
```

Tests
-----

```console
  $ npm test
```

LICENSE
-------

[MIT](https://github.com/ofkindness/denv/blob/master/LICENSE)
