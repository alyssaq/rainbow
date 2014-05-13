define(['ractive', 'shape', 'rv!view/main'],
function(Ractive, shape, mainTemplate) {
  function valueToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + valueToHex(r) + valueToHex(g) + valueToHex(b);
  }

  var ractive = new Ractive({
    el: 'output',
    template: mainTemplate,
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

  ractive.observe('colors', function(oldVal, newVal) {
    shape.draw(newVal.red, newVal.green, newVal.blue);
  });

  return ractive;
});