#!/usr/bin/env node

'use strict';

var stdin = process.stdin;
var stdout = process.stdout;
var content = '';

var xml2js = require('xml2js');

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  content += chunk;
});

stdin.on('end', function () {
  xml2js.parseString(content, (err, parsedData) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var outputJSON = JSON.stringify(parsedData, null, 2);
    stdout.write(outputJSON);
    stdout.write('\n');
    process.exit(0);
  });
});
