module.exports = function (grunt) {
  grunt.registerTask('default', [
    'clean:production',
    'cssmin',
    'requirejs',
    'filerev',
    'copy:production',
    'usemin'
  ]);
};