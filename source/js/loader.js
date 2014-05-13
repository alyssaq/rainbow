require.config({
  deps: ['app'],
  paths: {
    ractive: [
      '//cdn.ractivejs.org/latest/ractive.min',
      '/js/libs/ractive.min'
    ],
    view: '../views',
    'amd-loader': '/js/plugins/amd-loader',
    rv: '/js/plugins/rv'
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