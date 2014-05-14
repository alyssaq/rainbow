module.exports = function (grunt) {
  grunt.registerTask('prod', [
    'default',
    'connect:production',
    'open:production',
    'watch'
  ]);
};