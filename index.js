'use strict';
require('es6-promise').polyfill();
require('promise.prototype.finally');

var build = require('./build');


exports.develop = function(config) {
  return build.devIndex(config).then(build.devServer.bind(null, config));
};

exports.build = function(config) {
  return build(config);
};
