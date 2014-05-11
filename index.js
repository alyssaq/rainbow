;(function (Ractive, window, document, drawShape, undefined) { 
  console.log('loaded')
function valueToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + valueToHex(r) + valueToHex(g) + valueToHex(b);
}

var ractive = new Ractive({
  el: 'output',
  template: '#template',
  data: {
    colors : {
      red: 255,
      green: 255,
      blue: 255
    },
    hex: function(r, g, b) {
      return (arguments.length == 1) ? valueToHex(r) : rgbToHex(r, g, b);
    }
  }
});

function observeColor(color) {
  ractive.observe( color+'_picker', function (newValue, oldValue, keypath) {
    key = keypath.split('_')[0]
    console.log( keypath + ' changed to ' + newValue + ' ' +key);
    ractive.animate(key, newValue);

  }, {'init': false});
}

ractive.observe('colors', function(oldVal, newVal) {
  drawShape(newVal.red, newVal.green, newVal.blue);
});
//['colors'].forEach(update_diagram);
})(Ractive, window, document, drawShape);

