'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var WebStarterKitGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous WebStarterKit generator!'));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Project Name:'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author:'
      }
    ];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      this.author = props.author;

      done();
    }.bind(this));
  },

  app: function () {
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_LICENSE', 'LICENSE');
    this.copy('_README.md', 'README.md');

    this.directory('app');
  },

  projectfiles: function () {
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
    this.copy('editorconfig', '.editorconfig');
  }
});

module.exports = WebStarterKitGenerator;
