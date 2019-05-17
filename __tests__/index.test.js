'use strict';

jest.mock('fs');

const BufferFunctions = require('../index.js');

describe('createLoopFromBuffer', () => {
  it('doesn\'t return an error when called', () => {
    try {
      BufferFunctions.createLoopFromBuffer();
    }
    catch(e) {
      expect(e).toBeUndefined();
    }
  });
});

describe('createHtmlFromBuffer', () => {
  it('doesn\'t return an error when called', () => {
    try {
      BufferFunctions.createHtmlFromBuffer();
    }
    catch(e) {
      expect(e).toBeUndefined();
    }
  });
});