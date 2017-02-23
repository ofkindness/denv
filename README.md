denv
====
[![NPM version](https://img.shields.io/npm/v/denv.svg)](https://npmjs.org/package/denv)
[![NPM Downloads](https://img.shields.io/npm/dm/denv.svg)](https://npmjs.org/package/denv)

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
import denv from 'denv';

const d = denv();

// Redis example
const conString = `redis://${d.env('redis_user', '')}\
:${d.env('redis_password', '')}\
@${d.addr('127.0.0.1')}\
:${d.port('6379')}\
/${d.env('db', 0)}`;

// Postgres example
const conString = `postgres://${d.env('postgres_user', 'postgres')}\
:${d.env('postgres_password', 'mysecretpassword')}\
@${d.addr('127.0.0.1')}\
:${d.port('5432')}\
/${d.env('database', 'postgres')}`;
```

Tests
-----

```console
  $ npm test
```

LICENSE
-------

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
