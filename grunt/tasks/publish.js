module.exports = function (grunt) {
  grunt.registerTask('publish', [
    'default',
    'copy:ghpages' 
  ]);

  grunt.registerTask('ghpages', [
    'gh-pages' 
  ]);
};