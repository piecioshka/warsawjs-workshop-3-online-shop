'use strict';

const jsf = require('json-schema-faker');
jsf.extend('faker', function () {
    return require('faker');
});
const schema = require('./products-schema.json');
const sample = jsf(schema);
const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, 'products.json');
fs.writeFileSync(filename, JSON.stringify(sample, null, 4));
