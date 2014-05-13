module.exports = function (grunt) {
  grunt.registerTask('dev', [
    'connect:development',
    'open:development',
    'watch'
  ]);
};