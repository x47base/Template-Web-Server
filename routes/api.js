const express = require('express');
// var fs = require('fs');
const route = express.Router();

const example = require('./example')
route.use('/example', example)

// TODO: Fix TypeError: Router.use() requires a middleware function but got a Object

/*
route.use(express.static(__dirname));

const fileList = fs.readdirSync(__dirname);

for (const file of fileList) {
  var mod = file.replace('.js','')
  
  if (mod == 'api') return null;
  
  console.log(file)
  route.use(`/${file}`, require(`./${file}`))
}
*/

module.exports = route;