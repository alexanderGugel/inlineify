# inlineify

Inline code from external (source) files.

## Usage

Install the package via npm:

```
npm i inlineify
```

Add it as a [browserify](https://github.com/substack/node-browserify) transform (also works with https://github.com/substack/watchify):

```
browserify -t inlineify example/index.js
```

Write your code (See `/example` directory):

```javascript
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
```

## Why

Hand-writing [asm.js](http://asmjs.org/spec/latest) modules really isn't fun when you can't split up your code into multiple files.

## Credits

* [brfs](https://github.com/substack/brfs)
