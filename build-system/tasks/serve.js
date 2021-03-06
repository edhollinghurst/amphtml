/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var argv = require('minimist')(process.argv.slice(2));
var gulp = require('gulp-help')(require('gulp'));
var util = require('gulp-util');
var nodemon = require('nodemon');

/**
 * Starts a simple http server at the repository root
 */
function serve() {
  nodemon({
    script: require.resolve('../server.js'),
    watch: [require.resolve('../app.js'),
        require.resolve('../server.js')],
    env: {'NODE_ENV': 'development'},
  });

  util.log(util.colors.yellow('Run `gulp build` then go to '
      + getHost() + '/examples/article.amp.max.html'
  ));
}

gulp.task(
    'serve',
    'Serves content in root dir over ' + getHost() + '/',
    serve,
    {
      options: {
        'host': '  Hostname or IP address to bind to (default: localhost)',
        'port': '  Specifies alternative port (default: 8000)',
        'https': '  Use HTTPS server (default: false)'
      }
    }
);

var host = argv.host || 'localhost';
var port = argv.port || process.env.PORT || 8000;
var useHttps = argv.https != undefined;
function getHost() {
  return (useHttps ? 'https' : 'http') + '://' + host + ':' + port;
}

