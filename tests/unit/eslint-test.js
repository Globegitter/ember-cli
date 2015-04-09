/*eslint-env node, mocha, es6 */
'use strict';

var lint = require('mocha-eslint');


var paths = [
  'tests',
  'lib',
  'bin',
  'blueprints'
];
var options = {};
options.formatter = 'stylish';

lint(paths, options);
