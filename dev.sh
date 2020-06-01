#!/bin/sh
set ELEVENTY_ENV=development
eleventy --config=eleventy.config.js --serve & webpack --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js;