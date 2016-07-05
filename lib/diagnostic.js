// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

const sumLines = (filename, callback) => {
  fs.readFile(filename, { encoding: 'utf8'}, (err, numbers) => {
    if (err) {
      console.error(err);
    }

    let numArray = numbers.split('\n');
    numArray.pop();

    let sum = numArray.reduce( (prev, curr) => Number(prev) + Number(curr) );

    if (isNaN(sum)) {
      callback(new Error('line not a number'));
    } else {
      callback(null, sum);
    }
  });
};

module.exports = {
  sumLines,
};
