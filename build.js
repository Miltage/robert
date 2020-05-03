var exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout) }

var os = require('os');
//control OS
//then run command depengin on the OS

if (os.type() === 'Linux' || os.type() === 'Darwin') 
  exec("NODE_ENV=production webpack --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js && eleventy --config=eleventy.config.js --output=docs", puts); 
else if (os.type() === 'Windows_NT') 
  exec("SET NODE_ENV=production webpack --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js && eleventy --config=eleventy.config.js --output=docs", puts);
else
  throw new Error("Unsupported OS found: " + os.type());