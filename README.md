# JQStub [![endorse](http://api.coderwall.com/fredwu/endorsecount.png)](http://coderwall.com/fredwu)

### A simple stub library for jQuery / Zepto objects.

## NPM

If you use [npm](https://npmjs.org/), you can grab the source code by:

```
npm install jqstub
```

## Usage

```javascript
$(document).stub('height', 1337);
$(document).stub('height', function() { return 42; } );
$(document).unstub('height');
$(document).unstubAll();
```

## License

Copyright (c) 2012 [Fred Wu](http://fredwu.me/)

Licensed under the [MIT license](http://fredwu.mit-license.org/).
