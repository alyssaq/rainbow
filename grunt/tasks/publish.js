module.exports = function (grunt) {
  grunt.registerTask('publish', [
    'default',
    'gh-pages'
  ]);
};