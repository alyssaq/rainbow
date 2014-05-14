require.config({
  baseUrl: 'js/',
  deps: ['app'],
  paths: {
    ractive: [
      '//cdn.ractivejs.org/latest/ractive.min',
      './libs/ractive.min'
    ],
    view: '../views',
    'amd-loader': './plugins/amd-loader',
    rv: './plugins/rv'
  }
});

require(['shape'], function(shape) {
  shape.draw(255,255,255);
});