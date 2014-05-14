module.exports = {
  staging: {
    files: [{
      expand: true,
      cwd: '<%= source %>/',
      dest: '<%= staging %>/',
      src: [
        'index.html',
        'robots.txt',
        'js/**',
        'styles/**',
        'img/**',
        'templates/**',
        'bower_components/**'
      ]
    }]
  },
  production: {
    files: [{
      expand: true,
      cwd: '<%= source %>/',
      dest: '<%= production %>/',
      src: [
        'index.html',
        'img/**/*.{jpg,jpeg,gif,png,ico,webp,svg}',
        '../rainbow.png',
        '../README.md'
      ]
    }]
  }
};