module.exports = function (grunt) {
  return {
    development: {
      options: {
        base: '<%= source %>',
        port: 9000
      }
    },
    production: {
      options: {
        base: '<%= production %>',
        port: process.env.PORT || 9002
      }
    },
    options: {
      hostname: '*',
      middleware: function (connect, options) {
        return [
          connect.static(options.base[0]),
          function (req, res) {
            var path = options.base[0] + '/index.html';
            var file = grunt.file.read(path);
            res.end(file);
          }
        ];
      }
    }
  };
};