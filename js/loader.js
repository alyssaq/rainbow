require.config({
  baseUrl: '/js',
  paths: {
    ractive: [
      '//cdn.ractivejs.org/latest/ractive.min.js',
      'ractive.min.js'
    ]
  },
  shim: {
    ractive: {
      exports: 'Ractive'
    }
  }
});