module.exports = {
  js: {
    files: [
      'Gruntfile.js',
      'package.json',
      '<%= source %>/js/**/*.js'
    ],
    tasks: [
      'jshint'
    ]
  }
};