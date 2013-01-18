
/*
 JQStub - a simple stub library for jQuery / Zepto objects

 Copyright (c) 2012 Fred Wu

 Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php

 Usage:

   $(document).stub('height', 1337);
   $(document).stub('height', function() { return 42; } );
   $(document).unstub('height');
   $(document).unstubAll();
*/


(function() {
  var JQStub, jqstub;

  JQStub = (function() {

    function JQStub() {}

    JQStub.prototype.stubbedFuncs = {};

    JQStub.prototype.stub = function(target, funcName, stubVal) {
      var self, _tempFunc;
      self = this;
      _tempFunc = this.stubbedFuncs[funcName] = $.fn[funcName];
      $.fn[funcName] = function() {
        if (this[0] === target[0] && !!self.stubbedFuncs[funcName]) {
          return self._returnValOrFunction(stubVal);
        } else {
          return _tempFunc.apply(this, arguments);
        }
      };
      return target;
    };

    JQStub.prototype.unstub = function(target, funcName) {
      delete this.stubbedFuncs[funcName];
      return target;
    };

    JQStub.prototype.unstubAll = function() {
      return this.stubbedFuncs = {};
    };

    JQStub.prototype._returnValOrFunction = function(thing) {
      if (this._isFunction(thing)) {
        return thing.apply(this, arguments);
      } else {
        return thing;
      }
    };

    JQStub.prototype._isFunction = function(thing) {
      return thing && {}.toString.call(thing) === '[object Function]';
    };

    return JQStub;

  })();

  jqstub = new JQStub;

  /*
   jQuery/Zepto plugin methods
  */


  $.fn.stub = function(funcName, stubVal) {
    return jqstub.stub(this, funcName, stubVal);
  };

  $.fn.unstub = function(funcName) {
    return jqstub.unstub(this, funcName);
  };

  $.unstubAll = function() {
    return jqstub.unstubAll();
  };

}).call(this);
