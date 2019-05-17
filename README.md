
## Lab 04 - Buffers

### Author: Chris Kozlowski

### Links and Resources
* [Submission PR](https://github.com/401-advanced-javascript-cdk/lab04-buffers/pull/1)
* [Travis](https://travis-ci.com/401-advanced-javascript-cdk/lab04-buffers)

### Modules
#### `index.js`
##### Values and Methods
###### `fs.writeFile()` -> `./files/loop.js`
Loops through a string of code, changing the characters to hexidecimal values, and adding them to a buffer.  The buffer is then written to `loop.js`.
###### `fswriteFile()` => `./files/index.html`
Reads a text file into a buffer, then splices the text and concatenates HTML tags into the buffer.  The buffer is then written to `index.html`.

### Instructions
* Pull git repository
* Run `node index.js` from the root directory
* `./files/loop.js and ./files/index.html` will be created.
* Run `node ./files/loop.js` from the root directory to test the loop.
* Copy the path of `index.html` into a browser to view it as a webpage.

### Testing
* `npm test`
  * Uses a mock of `fs.readFile` and `fs.writeFile` to facilitate testing.
