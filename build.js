#! /usr/bin/env node

var fs = require('fs');
var path = require('path');

var srcContent = fs.readFileSync(path.resolve(__dirname, 'Overview.html'), { encoding: 'utf8' });
var distContent = srcContent
  .replace('https://whatwg.org/style/specification', './specification.css')
  .replace('https://resources.whatwg.org/file-issue.js', './file-issue.js')
  .replace('https://resources.whatwg.org/dfn.js', './dfn.js')
  .replace(/https:\/\/resources\.whatwg\.org\/logo\-fetch\.svg/g, './logo-fetch.svg');

fs.writeFileSync('index.html', distContent, { encoding: 'utf8' });

console.log('Build index.html complete!');
