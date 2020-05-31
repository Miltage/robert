#!/bin/sh
NODE_ENV=production
webpack --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js && eleventy --config=eleventy.config.js --output=docs;