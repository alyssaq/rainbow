module.exports = function (grunt) {
  return {
    build: {
      options: grunt.util._.merge({
        node: true
      }, grunt.file.readJSON('.jshintrc')),
      src: [
        'package.json',
        'Gruntfile.js',
        'grunt/**/*.js'
      ]
    },
    app: {
      options: grunt.util._.merge({
        browser: true,
        devel: true,
        globals: {
          require: true,
          define: true
        }
      }, grunt.file.readJSON('.jshintrc')),
      src: [
        '<%= source %>/js/**/*.js',
        '!<%= source %>/js/libs/**/*.js',
        '!<%= source %>/js/plugins/**/*.js'
      ]
    }
  };
};