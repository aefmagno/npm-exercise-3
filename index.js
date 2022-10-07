const { parse, resolve, toString, toArray } = require('@estilles/expression-parser');

const { argv } = require('node:process');

const result = argv.length - 2 === 1 ? toString(parse(argv[2])) : 'Please Input A Single Argument';

console.log(result);
