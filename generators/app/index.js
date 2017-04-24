'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const extend = require('deep-extend');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stellar ' + chalk.red('generator-weather-react') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Please input project name (weather_spa):',
        default: 'weather_spa'
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: 'Please input project description:'
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: 'Author (chenjinxinlvoe):',
        default: 'chenjinxinlvoe'
      },
      {
        type: 'list',
        name: 'projectLicense',
        message: 'Please choose license:',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'AGPL-3.0']
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var readmeTpl = _.template(this.fs.read(this.templatePath('README.md')));
    this.fs.write(this.destinationPath('README.md'), readmeTpl({
      generatorName: 'generator-weather-spa',
      yoName: 'weather-spa'
    }));

    var pkg = this.fs.readJSON(this.templatePath('package_tmpl.json'), {});
    extend(pkg, {
      devDependencies: {
        'babel-core': '^6.0.0',
        'babel-eslint': '^6.0.0',
        'babel-loader': '^6.0.0',
        'babel-polyfill': '^6.23.0',
        'babel-preset-es2015': '^6.0.15',
        'babel-preset-react': '^6.0.15',
        'babel-preset-stage-0': '^6.5.0',
        'bower-webpack-plugin': '^0.1.9',
        'copyfiles': '^1.0.0',
        'css-loader': '^0.23.0',
        'eslint': '^3.7.1',
        'eslint-config-standard': '^6.2.1',
        'eslint-friendly-formatter': '^2.0.5',
        'eslint-loader': '^1.5.0',
        'eslint-plugin-html': '^1.3.0',
        'eslint-plugin-promise': '^2.0.1',
        'eslint-plugin-react': '^6.0.0',
        'eslint-plugin-standard': '^2.0.1',
        'fastclick': '^1.0.6',
        'file-loader': '^0.9.0',
        'glob': '^7.0.0',
        'gulp': '^3.9.1',
        'gulp-ftp': '^1.1.0',
        'gulp-open': '1.0.0',
        'gulp-sftp': '^0.1.5',
        'gulp-zip': '^4.0.0',
        'isomorphic-fetch': '^2.2.1',
        'isparta-instrumenter-loader': '^1.0.0',
        'minimist': '^1.2.0',
        'node-sass': '^4.5.0',
        'null-loader': '^0.1.1',
        'open': '0.0.5',
        'phantomjs-prebuilt': '^2.0.0',
        'postcss-loader': '^1.3.1',
        'react-addons-test-utils': '^15.0.0',
        'react-hot-loader': '^1.2.9',
        'redux-devtools-extension': '^2.13.0',
        'redux-logger': '^2.8.2',
        'redux-thunk': '^2.2.0',
        'rimraf': '^2.4.3',
        'sass-loader': '^6.0.1',
        'style-loader': '^0.13.0',
        'url-loader': '^0.5.6',
        'webpack': '^1.12.0',
        'webpack-dev-server': '^1.12.0'
      },
      dependencies: {
        classnames: '^2.2.5',
        'core-js': '^2.0.0',
        'gulp-sequence': '^0.4.6',
        'gulp-util': '^3.0.8',
        'md5': '^2.2.1',
        'normalize.css': '^4.2.0',
        'os': '^0.1.1',
        'react': '^15.0.0',
        'react-dom': '^15.0.0',
        'react-redux': '^5.0.3',
        'react-router': '^3.0.2',
        'react-router-redux': '^4.0.8',
        'redux': '^3.6.0'
      }
    });
    pkg.keywords = pkg.keywords || [];
    pkg.keywords.push('generator-weather-spa');

    pkg.name = this.props.projectName;
    pkg.description = this.props.projectDesc;
    pkg.main = this.props.projectMain;
    pkg.author = this.props.projectAuthor;
    pkg.license = this.props.projectLicense;

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    mkdirp('cfg');
    mkdirp('src');
    mkdirp('src/actions');
    mkdirp('src/components');
    mkdirp('src/config');
    mkdirp('src/libs');
    mkdirp('src/reducers');
    mkdirp('src/router');
    mkdirp('src/service');
    mkdirp('src/stores');
    mkdirp('src/styles');
    mkdirp('src/pages/home');
    mkdirp('src/components/common');
    mkdirp('src/components/header');

    this.fs.copy(
      this.templatePath('gitignore_tmpl'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('eslintrc_tmpl'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('gulpfile_tmpl.js'),
      this.destinationPath('gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('editorconfig_tmpl'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('ftpConfig_tmpl.js'),
      this.destinationPath('ftpConfig.js')
    );
    this.fs.copy(
      this.templatePath('webpack.config_tmpl.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('babelrc_tmpl'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('server_tmpl.js'),
      this.destinationPath('server.js')
    );
    this.fs.copy(
      this.templatePath('./cfg/base_tmpl.js'),
      './cfg/base.js'
    );
    this.fs.copy(
      this.templatePath('./cfg/defaults_tmpl.js'),
      './cfg/defaults.js'
    );
    this.fs.copy(
      this.templatePath('./cfg/dev_tmpl.js'),
      './cfg/dev.js'
    );
    this.fs.copy(
      this.templatePath('./cfg/dist_tmpl.js'),
      './cfg/dist.js'
    );
    this.fs.copy(
      this.templatePath('./cfg/test_tmpl.js'),
      './cfg/test.js'
    );
    this.fs.copy(
      this.templatePath('./src/actions/index_tmpl.js'),
      './src/actions/index.js'
    );

    this.fs.copy(
      this.templatePath('./src/components/header/index_tmpl.js'),
      './src/components/header/index.js'
    );
    this.fs.copy(
      this.templatePath('./src/components/header/header_tmpl.scss'),
      './src/components/header/header.scss'
    );
    this.fs.copy(
      this.templatePath('./src/config/fetch_tmpl.js'),
      './src/config/fetch.js'
    );
	this.fs.copy(
      this.templatePath('./src/config/env_tmpl.js'),
      './src/config/env.js'
    );
    this.fs.copy(
      this.templatePath('./src/config/rem_tmpl.js'),
      './src/config/rem.js'
    );
    this.fs.copy(
      this.templatePath('./src/pages/app_tmpl.js'),
      './src/pages/app.js'
    );
    this.fs.copy(
      this.templatePath('./src/pages/home/home_tmpl.js'),
      './src/pages/home/home.js'
    );
    this.fs.copy(
      this.templatePath('./src/pages/home/home_tmpl.scss'),
      './src/pages/home/home.scss'
    );
    this.fs.copy(
      this.templatePath('./src/reducers/index_tmpl.js'),
      './src/reducers/index.js'
    );
    this.fs.copy(
      this.templatePath('./src/router/router_tmpl.js'),
      './src/router/router.js'
    );

    this.fs.copy(
      this.templatePath('./src/service/getData_tmpl.js'),
      './src/service/getData.js'
    );

    this.fs.copy(
      this.templatePath('./src/stores/configureStore_tmpl.js'),
      './src/stores/configureStore.js'
    );
    this.fs.copy(
      this.templatePath('./src/styles/mixin_tmpl.scss'),
      'src/styles/mixin.scss'
    );
    this.fs.copy(
      this.templatePath('./src/styles/common_tmpl.scss'),
      'src/styles/common.scss'
    );
    this.fs.copy(
      this.templatePath('./src/styles/App_tmpl.css'),
      'src/styles/App.css'
    );
    this.fs.copy(
      this.templatePath('./src/favicon_tmpl.ico'),
      'src/favicon.ico'
    );
    this.fs.copy(
      this.templatePath('./src/index_tmpl.html'),
      'src/index.html'
    );
    this.fs.copy(
      this.templatePath('./src/index_tmpl.js'),
      'src/index.js'
    );
  }

  install() {
    this.installDependencies();
  }
};
