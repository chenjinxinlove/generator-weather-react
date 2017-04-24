'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-weather-react:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      '.babelrc',
      '.editorconfig',
      '.eslintrc',
      '.gitignore',
      'ftpConfig.js',
      'gulpfile.js',
      'package.json',
      'server.js',
      'webpack.config.js',
      'cfg/base.js',
      'cfg/defaults.js',
      'cfg/dev.js',
      'cfg/dist.js',
      'cfg/test.js',
      'src/actions/index.js',
      'src/components/header/index.js',
      'src/components/header/header.scss',
      'src/config/fetch.js',
      'src/config/rem.js',
      'src/pages/app.js',
      'src/pages/home/home.js',
      'src/pages/home/home.scss',
      'src/reducers/index.js',
      'src/router/router.js',
      'src/service/getData.js',
      'src/stores/configureStore.js',
      'src/styles/App.css',
      'src/styles/common.scss',
      'src/styles/mixin.scss',
      'src/favicon.ico',
      'src/index.html',
      'src/index.js'
    ]);
  });
});
