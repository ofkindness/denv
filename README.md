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

// Postgres example
const conString = 'postgres://' + d.env('postgres_user', 'postgres') +
    ':' + d.env('postgres_password', 'mysecretpassword') +
    '@' + d.addr('127.0.0.1') +
    ':' + d.port('5432') +
    '/' + d.env('database', 'postgres');

// Redis example
const conString = 'redis://' + d.env('redis_user', '') +
    ':' + d.env('redis_password', '') +
    '@' + d.addr('127.0.0.1') +
    ':' + d.port('6379') +
    '/' + d.env('db', 0);
```

Tests
-----

```console
  $ npm test
```

LICENSE
-------

[MIT](https://github.com/ofkindness/denv/blob/master/LICENSE)
