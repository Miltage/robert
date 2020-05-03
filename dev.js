var exec = require('child_process').exec;
function puts(error, stdout, stderr) { 
  console.log(stdout);
}

var os = require('os');
//control OS
//then run command depengin on the OS

if (os.type() === 'Linux' || os.type() === 'Darwin') 
  exec("ELEVENTY_ENV=development eleventy --config=eleventy.config.js --serve & webpack --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js", puts);
else if (os.type() === 'Windows_NT') 
  exec("SET ELEVENTY_ENV=development eleventy --config=eleventy.config.js --serve & webpack --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js", puts);
else
  throw new Error("Unsupported OS found: " + os.type());