'use strict';

var assert = require('assert');

describe('Link without alias', function() {
  const env = {
    SOME_POSTGRES_PORT: 'tcp://172.17.0.2:5432',
    SOME_POSTGRES_PORT_5432_TCP: 'tcp://172.17.0.2:5432',
    SOME_POSTGRES_PORT_5432_TCP_ADDR: '172.17.0.2',
    SOME_POSTGRES_PORT_5432_TCP_PORT: '5432',
    SOME_POSTGRES_PORT_5432_TCP_PROTO: 'tcp',
    SOME_POSTGRES_NAME: '/nostalgic_mestorf/some-postgres',
    SOME_POSTGRES_ENV_POSTGRES_PASSWORD: 'mysecretpassword',
    SOME_POSTGRES_ENV_POSTGRES_USER: 'test',
    SOME_POSTGRES_ENV_no_proxy: '*.local, 169.254/16',
    SOME_POSTGRES_ENV_SOME_NAME: 'SOME_NAME'
  };
  const qwer = require('../index.js')(null, env);

  it('should return port', function() {

    assert.equal(qwer.port(), '5432');
  });

  it('should return addr', function() {
    assert.equal(qwer.addr(), '172.17.0.2');
  });

  it('should return proto', function() {
    assert.equal(qwer.proto(), 'tcp');
  });

  it('should return postgres_user', function() {
    assert.equal(qwer.env('postgres_user'), 'test');
  });

  it('should return postgres_password', function() {
    assert.equal(qwer.env('postgres_password'), 'mysecretpassword');
  });

  it('should return no_proxy', function() {
    assert.equal(qwer.env('no_proxy'), '*.local, 169.254/16');
  });
});

describe('Link with alias', function() {
  const env = {
    QWER_PORT: 'tcp://172.17.0.2:5432',
    QWER_PORT_5432_TCP: 'tcp://172.17.0.2:5432',
    QWER_PORT_5432_TCP_ADDR: '172.17.0.2',
    QWER_PORT_5432_TCP_PORT: '5432',
    QWER_PORT_5432_TCP_PROTO: 'tcp',
    QWER_NAME: '/determined_golick/qwer',
    QWER_ENV_POSTGRES_PASSWORD: 'mysecretpassword',
    QWER_ENV_POSTGRES_USER: 'test',
    QWER_ENV_no_proxy: '*.local, 169.254/16'
  };
  const qwer = require('../index.js')('qwer', env);

  it('should return port', function() {

    assert.equal(qwer.port(), '5432');
  });

  it('should return addr', function() {
    assert.equal(qwer.addr(), '172.17.0.2');
  });

  it('should return proto', function() {
    assert.equal(qwer.proto(), 'tcp');
  });

  it('should return postgres_user', function() {
    assert.equal(qwer.env('postgres_user'), 'test');
  });

  it('should return postgres_password', function() {
    assert.equal(qwer.env('postgres_password'), 'mysecretpassword');
  });

  it('should return no_proxy', function() {
    assert.equal(qwer.env('no_proxy'), '*.local, 169.254/16');
  });
});
