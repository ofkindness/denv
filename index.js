'use strict';

function sanitize(value) {
  value = value || '';
  return value.replace(/-/g, '_');
}

function prefix(env) {
  const prefix = Object.keys(env).filter(function(key) {
    return new RegExp('_NAME').test(key);
  }).shift();
  return prefix.replace('_NAME', '');
}

module.exports = function(alias, env) {
  env = env || process.env;
  alias = alias || sanitize(prefix(env));

  const tcpAddr = env[alias.toUpperCase() + '_PORT'] || '';

  function addr() {
    return (tcpAddr.split(':')[1] || '').replace('//', '');
  }

  function port() {
    return tcpAddr.split(':')[2] || '';
  }

  function proto() {
    return tcpAddr.split(':')[0] || '';
  }

  return {
    addr: addr,
    port: port,
    proto: proto,
    env: function(name, defaultValue) {
      name = name || '';
      const val = alias.toUpperCase() + '_ENV_' + sanitize(name);
      return env[val.toUpperCase()] ||
        env[val] ||
        defaultValue;
    }
  };
};
