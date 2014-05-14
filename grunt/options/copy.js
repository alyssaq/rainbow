module.exports = {
  staging: {
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
  },
  production: {
    expand: true,
    cwd: '<%= source %>/',
    dest: '<%= production %>/',
    src: [
      'index.html',
      'img/**/*.{jpg,jpeg,gif,png,ico,webp,svg}'
    ]
  },
  ghpages: {
    flatten: true,
    filter: 'isFile',
    cwd: '<%= production %>',
    src: '**',
    dest: 'ghpages/',
    expand: true
  }

};