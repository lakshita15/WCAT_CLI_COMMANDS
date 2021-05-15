'use strict';

/**
* Ideas on how to test this:
*
* 1. Hook into `process.stdout.write`
* 2. Shell out the test script to bash and inspect `stdout`: http://stackoverflow.com/a/637837/339827
*/

var write = require('./');
write('foo' + Math.random() * 42);
