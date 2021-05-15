'use strict';

var isNode = 'process' in global;
var write;

if(isNode) {
  write = require('./src/node');
} else {
  write = require('./src/phantom');
}

module.exports = write;
