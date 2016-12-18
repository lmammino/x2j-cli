'use strict';

var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');
var tap = require('tap');

tap.test(
  'It should get an XML string as stdin and return a JSON string as stdout',
  function (t) {
    var cmd = 'cat test/sample.xml | node index';

    childProcess.exec(cmd, function (err, stdout) {
      if (err) {
        return t.error(err);
      }

      var output = JSON.parse(stdout);
      t.same(output, {
        note: {
          to: ['Tove'],
          from: ['Jani'],
          heading: ['Reminder'],
          body: ['Don\'t forget me this weekend!']
        }
      });

      t.end();
    });
  }
);
