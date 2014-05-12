require.config({
  baseUrl: '/js',
  deps: ['app'],
  paths: {
    ractive: [
      '//cdn.ractivejs.org/latest/ractive.min',
      'ractive.min'
    ]
  },
  shim: {
    ractive: {
      exports: 'Ractive'
    }
  }
});

require(['shape'], function(shape) {
  shape.draw(255,255,255);
});