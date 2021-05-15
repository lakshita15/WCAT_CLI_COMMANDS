'use strict';

var stdout = process.stdout;

module.exports = function(message) {
  stdout.clearLine();
  stdout.cursorTo(0);
  stdout.write(message);
};
