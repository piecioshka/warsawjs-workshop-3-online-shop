'use strict';

let jsf = require('json-schema-faker');
let schema = require('./products-schema.json');
let sample = jsf(schema);
let fs = require('fs');
let path = require('path');
let filename = path.resolve(__dirname, 'products.json');
fs.writeFileSync(filename, JSON.stringify(sample, null, 4));
