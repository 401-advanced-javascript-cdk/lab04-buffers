'use strict';

const fs = require('fs');

// ./files/loop.js

const code = `const arr = ['Larry','Jerry','Mary'];
arr.forEach(name => {
  console.log(name);
});`

let codeBuffer = Buffer.alloc(code.length);

let i = 0;
while(i < codeBuffer.length) {
  let hex = `0x${code.charCodeAt(i).toString(16)}`;
  codeBuffer[i] = hex;
  i++;
}

fs.writeFile('./files/loop.js', codeBuffer, (err) => {
  if (err) { return err }
  console.log('Writing to ./files/loop.js');
});

// ./files/index.js

const buildHtml = (buffer) => {
  return new Promise((resolve, reject) => {
    let textBuffer = Buffer.alloc(0);
    textBuffer = Buffer.concat([
      Buffer.from('<html>\n<head></head>\n<body>\n<article>\n<h2>'),
      buffer.slice(0,30),
      Buffer.from('</h2>\n'),
      buffer.slice(31, 749),
      Buffer.from('<h2>'),
      buffer.slice(750, 781),
      Buffer.from('</h2>'),
      buffer.slice(781, 1521),
      Buffer.from('<h2>'),
      buffer.slice(1521, 1538),
      Buffer.from('</h2>'),
      buffer.slice(1538,2454),
      Buffer.from('<h2>'),
      buffer.slice(2455, 2490),
      Buffer.from('</h2>\n<ul>\n  <li>\n<h3>'),
      buffer.slice(2491, 2512),
      Buffer.from('</h3>\n'),
      buffer.slice(2521, 3400),
      Buffer.from('  </li>\n  <li>\n<h3>'),
      buffer.slice(3401, 3425),
      Buffer.from('</h3>\n'),
      buffer.slice(3426, 4193),
      Buffer.from('  </li>\n  <li>\n<h3>'),
      buffer.slice(4194, 4226),
      Buffer.from('</h3>\n'),
      buffer.slice(4227, 4911),
      Buffer.from('  </li>\n  <li>\n<h3>'),
      buffer.slice(4912, 4928),
      Buffer.from('</h3>\n'),
      buffer.slice(4929, 5554),
      Buffer.from('  </li>\n  <li>\n<h3>'),
      buffer.slice(5555, 5581),
      Buffer.from('</h3>\n'),
      buffer.slice(5582, 6211),
      Buffer.from('  </li>\n  <li>\n<h3>'),
      buffer.slice(6212, 6241),
      Buffer.from('</h3>\n'),
      buffer.slice(6242, 6534),
      Buffer.from('\n  </li> \n</ul> \n</article>\n</body>\n</html>')
      ]);
    resolve(textBuffer);
  });
}

fs.readFile('./files/pair-programming.txt', (err, data) => {
  if (err) { return err; }
  buildHtml(data)
  .then((results) => {
    console.log('Writing to ./files/index.html...');
    fs.writeFile('./files/index.html', results, (err => {
      if(err) { return err; }
    }));
  })
  .catch(err => {
    return err;
  });
});