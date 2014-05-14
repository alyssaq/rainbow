module.exports = {
  compile: {
    options: {
      baseUrl: '<%= source %>/js/',
      mainConfigFile: './<%= source %>/js/loader.js',
      out: '<%= production %>/js/loader.js',
      name: 'loader',
      optimize: 'uglify',
      paths: {
        'amd-loader': './plugins/amd-loader',
        rv: './plugins/rv',
        ractive: './libs/ractive.min'
      },
      stubModules: [ 'rv', 'rvc', 'amd-loader' ],
      preserveLicenseComments: false
    }
  }
};