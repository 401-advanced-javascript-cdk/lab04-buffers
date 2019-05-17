'use strict';

module.exports = exports = {};

exports.readFile = (file) => {
  if( file.match(/bad/i) ) {
    throw new Error('Mock failure results');
  }
  else {
    return('Mock success results');
  }
};

exports.writeFile = (file) => {
  if(!file) {
    throw new Error('Mock failure results');
  }
  else {
    return 'Mock success results';
  }
}