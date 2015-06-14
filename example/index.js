// "Putting It All Together" example from the asm.js spec
// http://asmjs.org/spec/latest/

var inlineify = require('inlineify');

function GeometricMean(stdlib, foreign, buffer) {
  'use asm';

  inlineify('./geometricMean');
  inlineify('./init');
  inlineify('./logSum');

  return { geometricMean: geometricMean };
}
