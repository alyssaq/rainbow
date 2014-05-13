module.exports = function (grunt) {
  require('load-grunt-config')(grunt, {
    configPath: require('path').join(process.cwd(), 'grunt/options'),
    config: {
      base: grunt.option('base') || process.cwd(),
      source: 'source',
      production: 'publish'
    }
  });
  grunt.loadTasks('grunt/tasks');
};