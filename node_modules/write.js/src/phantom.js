'use strict';

var stdout = require('system').stdout;

module.exports = function(message) {
  stdout.write('\r');
  stdout.write(message);
};
