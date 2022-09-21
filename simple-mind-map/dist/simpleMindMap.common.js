module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "simpleMindMap.common." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpsimpleMindMap"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpsimpleMindMap"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0259":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "074d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brainImpairedPink.511fee22.jpg";

/***/ }),

/***/ "08be":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vitalityOrange.5dd9014f.jpg";

/***/ }),

/***/ "0930":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logicalStructure.624920ce.jpg";

/***/ }),

/***/ "0965":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("44c7");
var toAbsoluteIndex = __webpack_require__("50f5");
var lengthOfArrayLike = __webpack_require__("9440");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "0cca":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("5e8c");
var definePropertyModule = __webpack_require__("6e16");
var makeBuiltIn = __webpack_require__("54be");
var defineGlobalProperty = __webpack_require__("f2fc");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "0d2c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/classicBlue.4b8243c6.jpg";

/***/ }),

/***/ "0e26":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("fe11");
var uid = __webpack_require__("6bd1");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "14cc":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "181c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dark.894c1d36.jpg";

/***/ }),

/***/ "1a33":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("46ab");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "1a34":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/earthYellow.c35e546d.jpg";

/***/ }),

/***/ "1a89":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2347":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("2ed3");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "23a2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1a89");
var userAgent = __webpack_require__("9431");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "279c":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("f1a2");
var global = __webpack_require__("1a89");
var uncurryThis = __webpack_require__("46ab");
var isObject = __webpack_require__("feb8");
var createNonEnumerableProperty = __webpack_require__("f770");
var hasOwn = __webpack_require__("4d80");
var shared = __webpack_require__("660c");
var sharedKey = __webpack_require__("0e26");
var hiddenKeys = __webpack_require__("6797");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "293c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("3475");
var $reduce = __webpack_require__("ac5f").left;
var arrayMethodIsStrict = __webpack_require__("5afb");
var CHROME_VERSION = __webpack_require__("23a2");
var IS_NODE = __webpack_require__("364c");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2c9d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("46ab");
var isCallable = __webpack_require__("5e8c");
var store = __webpack_require__("660c");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "2ed3":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("23a2");
var fails = __webpack_require__("8af8");

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "2f2d":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8af8");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "3475":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1a89");
var getOwnPropertyDescriptor = __webpack_require__("dacf").f;
var createNonEnumerableProperty = __webpack_require__("f770");
var defineBuiltIn = __webpack_require__("0cca");
var defineGlobalProperty = __webpack_require__("f2fc");
var copyConstructorProperties = __webpack_require__("44b2");
var isForced = __webpack_require__("afc0");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "3556":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default.1312a3ba.jpg";

/***/ }),

/***/ "361f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("b257");
var hasOwn = __webpack_require__("4d80");
var createNonEnumerableProperty = __webpack_require__("f770");
var isPrototypeOf = __webpack_require__("1a33");
var setPrototypeOf = __webpack_require__("bbea");
var copyConstructorProperties = __webpack_require__("44b2");
var proxyAccessor = __webpack_require__("ef7a");
var inheritIfRequired = __webpack_require__("ce2e");
var normalizeStringArgument = __webpack_require__("899a");
var installErrorCause = __webpack_require__("d898");
var clearErrorStack = __webpack_require__("6c12");
var ERROR_STACK_INSTALLABLE = __webpack_require__("7e07");
var DESCRIPTORS = __webpack_require__("8d5c");
var IS_PURE = __webpack_require__("ec82");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "364c":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("424c");
var global = __webpack_require__("1a89");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "424c":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("46ab");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "42c9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dark2.c49dc11c.jpg";

/***/ }),

/***/ "43f9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/classicGreen.c2ae7bde.jpg";

/***/ }),

/***/ "443d":
/***/ (function(module, exports) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "44b2":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("4d80");
var ownKeys = __webpack_require__("bac8");
var getOwnPropertyDescriptorModule = __webpack_require__("dacf");
var definePropertyModule = __webpack_require__("6e16");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "44c7":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("8109");
var requireObjectCoercible = __webpack_require__("601e");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "46ab":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("2f2d");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "4d80":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("46ab");
var toObject = __webpack_require__("8300");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "4eb4":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("cc50");
var isNullOrUndefined = __webpack_require__("443d");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "4f65":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("e3ca");
var isSymbol = __webpack_require__("fd50");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "50f5":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("ed00");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "51a6":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("b895");
var enumBugKeys = __webpack_require__("d0dc");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "5265":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("8d5c");
var fails = __webpack_require__("8af8");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "54be":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8af8");
var isCallable = __webpack_require__("5e8c");
var hasOwn = __webpack_require__("4d80");
var DESCRIPTORS = __webpack_require__("8d5c");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("d665").CONFIGURABLE;
var inspectSource = __webpack_require__("2c9d");
var InternalStateModule = __webpack_require__("279c");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "5afb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("8af8");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "5e8c":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "601e":
/***/ (function(module, exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__("443d");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "6053":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1a89");
var shared = __webpack_require__("fe11");
var hasOwn = __webpack_require__("4d80");
var uid = __webpack_require__("6bd1");
var NATIVE_SYMBOL = __webpack_require__("2ed3");
var USE_SYMBOL_AS_UID = __webpack_require__("2347");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "6171":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "660c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1a89");
var defineGlobalProperty = __webpack_require__("f2fc");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "6632":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("2f2d");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "6797":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "682c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "6967":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/organizationStructure.8064f4da.jpg";

/***/ }),

/***/ "6ba1":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("2f2d");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "6bd1":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("46ab");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "6c12":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("46ab");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "6e16":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("8d5c");
var IE8_DOM_DEFINE = __webpack_require__("acc5");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("5265");
var anObject = __webpack_require__("cf4b");
var toPropertyKey = __webpack_require__("4f65");

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "6ef5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gold.3093b3c8.jpg";

/***/ }),

/***/ "72ed":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/greenLeaf.6789e8fc.jpg";

/***/ }),

/***/ "77be":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("5e8c");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "77ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export AcroForm */
/* unused harmony export AcroFormAppearance */
/* unused harmony export AcroFormButton */
/* unused harmony export AcroFormCheckBox */
/* unused harmony export AcroFormChoiceField */
/* unused harmony export AcroFormComboBox */
/* unused harmony export AcroFormEditBox */
/* unused harmony export AcroFormListBox */
/* unused harmony export AcroFormPasswordField */
/* unused harmony export AcroFormPushButton */
/* unused harmony export AcroFormRadioButton */
/* unused harmony export AcroFormTextField */
/* unused harmony export GState */
/* unused harmony export ShadingPattern */
/* unused harmony export TilingPattern */
/* unused harmony export jsPDF */
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6171");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fflate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dcfb");
/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 2.5.1 Built on 2022-01-28T15:37:57.791Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2021 yWorks GmbH, http://www.yworks.com
 *               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */

var n=function(){return"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this}();function i(){n.console&&"function"==typeof n.console.log&&n.console.log.apply(n.console,arguments)}var a={log:i,warn:function(t){n.console&&("function"==typeof n.console.warn?n.console.warn.apply(n.console,arguments):i.call(null,arguments))},error:function(t){n.console&&("function"==typeof n.console.error?n.console.error.apply(n.console,arguments):i(t))}};function o(t,e,r){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,r)},n.onerror=function(){a.error("could not download file")},n.send()}function s(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&e.status<=299}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var u,h,l=n.saveAs||("object"!==("undefined"==typeof window?"undefined":_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window))||window!==n?function(){}:"undefined"!=typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype?function(t,e,r){var i=n.URL||n.webkitURL,a=document.createElement("a");e=e||t.name||"download",a.download=e,a.rel="noopener","string"==typeof t?(a.href=t,a.origin!==location.origin?s(a.href)?o(t,e,r):c(a,a.target="_blank"):c(a)):(a.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(a.href)}),4e4),setTimeout((function(){c(a)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,n){if(r=r||e.name||"download","string"==typeof e)if(s(e))o(e,r,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){c(i)}))}else navigator.msSaveOrOpenBlob(function(e,r){return void 0===r?r={autoBom:!1}:"object"!==_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(r)&&(a.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}(e,n),r)}:function(e,r,i,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,r,i);var s="application/octet-stream"===e.type,c=/constructor/i.test(n.HTMLElement)||n.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||s&&c)&&"object"===("undefined"==typeof FileReader?"undefined":_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(FileReader))){var h=new FileReader;h.onloadend=function(){var t=h.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},h.readAsDataURL(e)}else{var l=n.URL||n.webkitURL,f=l.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){l.revokeObjectURL(f)}),4e4)}});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function f(t){var e;t=t||"",this.ok=!1,"#"==t.charAt(0)&&(t=t.substr(1,6));t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[t=(t=t.replace(/ /g,"")).toLowerCase()]||t;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],n=0;n<r.length;n++){var i=r[n].re,a=r[n].process,o=i.exec(t);o&&(e=a(o),this.r=e[0],this.g=e[1],this.b=e[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),r=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==r.length&&(r="0"+r),"#"+t+e+r}}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function d(t,e){var r=t[0],n=t[1],i=t[2],a=t[3];r=g(r,n,i,a,e[0],7,-680876936),a=g(a,r,n,i,e[1],12,-389564586),i=g(i,a,r,n,e[2],17,606105819),n=g(n,i,a,r,e[3],22,-1044525330),r=g(r,n,i,a,e[4],7,-176418897),a=g(a,r,n,i,e[5],12,1200080426),i=g(i,a,r,n,e[6],17,-1473231341),n=g(n,i,a,r,e[7],22,-45705983),r=g(r,n,i,a,e[8],7,1770035416),a=g(a,r,n,i,e[9],12,-1958414417),i=g(i,a,r,n,e[10],17,-42063),n=g(n,i,a,r,e[11],22,-1990404162),r=g(r,n,i,a,e[12],7,1804603682),a=g(a,r,n,i,e[13],12,-40341101),i=g(i,a,r,n,e[14],17,-1502002290),r=m(r,n=g(n,i,a,r,e[15],22,1236535329),i,a,e[1],5,-165796510),a=m(a,r,n,i,e[6],9,-1069501632),i=m(i,a,r,n,e[11],14,643717713),n=m(n,i,a,r,e[0],20,-373897302),r=m(r,n,i,a,e[5],5,-701558691),a=m(a,r,n,i,e[10],9,38016083),i=m(i,a,r,n,e[15],14,-660478335),n=m(n,i,a,r,e[4],20,-405537848),r=m(r,n,i,a,e[9],5,568446438),a=m(a,r,n,i,e[14],9,-1019803690),i=m(i,a,r,n,e[3],14,-187363961),n=m(n,i,a,r,e[8],20,1163531501),r=m(r,n,i,a,e[13],5,-1444681467),a=m(a,r,n,i,e[2],9,-51403784),i=m(i,a,r,n,e[7],14,1735328473),r=v(r,n=m(n,i,a,r,e[12],20,-1926607734),i,a,e[5],4,-378558),a=v(a,r,n,i,e[8],11,-2022574463),i=v(i,a,r,n,e[11],16,1839030562),n=v(n,i,a,r,e[14],23,-35309556),r=v(r,n,i,a,e[1],4,-1530992060),a=v(a,r,n,i,e[4],11,1272893353),i=v(i,a,r,n,e[7],16,-155497632),n=v(n,i,a,r,e[10],23,-1094730640),r=v(r,n,i,a,e[13],4,681279174),a=v(a,r,n,i,e[0],11,-358537222),i=v(i,a,r,n,e[3],16,-722521979),n=v(n,i,a,r,e[6],23,76029189),r=v(r,n,i,a,e[9],4,-640364487),a=v(a,r,n,i,e[12],11,-421815835),i=v(i,a,r,n,e[15],16,530742520),r=b(r,n=v(n,i,a,r,e[2],23,-995338651),i,a,e[0],6,-198630844),a=b(a,r,n,i,e[7],10,1126891415),i=b(i,a,r,n,e[14],15,-1416354905),n=b(n,i,a,r,e[5],21,-57434055),r=b(r,n,i,a,e[12],6,1700485571),a=b(a,r,n,i,e[3],10,-1894986606),i=b(i,a,r,n,e[10],15,-1051523),n=b(n,i,a,r,e[1],21,-2054922799),r=b(r,n,i,a,e[8],6,1873313359),a=b(a,r,n,i,e[15],10,-30611744),i=b(i,a,r,n,e[6],15,-1560198380),n=b(n,i,a,r,e[13],21,1309151649),r=b(r,n,i,a,e[4],6,-145523070),a=b(a,r,n,i,e[11],10,-1120210379),i=b(i,a,r,n,e[2],15,718787259),n=b(n,i,a,r,e[9],21,-343485551),t[0]=_(r,t[0]),t[1]=_(n,t[1]),t[2]=_(i,t[2]),t[3]=_(a,t[3])}function p(t,e,r,n,i,a){return e=_(_(e,t),_(n,a)),_(e<<i|e>>>32-i,r)}function g(t,e,r,n,i,a,o){return p(e&r|~e&n,t,e,i,a,o)}function m(t,e,r,n,i,a,o){return p(e&n|r&~n,t,e,i,a,o)}function v(t,e,r,n,i,a,o){return p(e^r^n,t,e,i,a,o)}function b(t,e,r,n,i,a,o){return p(r^(e|~n),t,e,i,a,o)}function y(t){var e,r=t.length,n=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=t.length;e+=64)d(n,w(t.substring(e-64,e)));t=t.substring(e-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<t.length;e++)i[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(d(n,i),e=0;e<16;e++)i[e]=0;return i[14]=8*r,d(n,i),n}function w(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return r}u=n.atob.bind(n),h=n.btoa.bind(n);var N="0123456789abcdef".split("");function L(t){for(var e="",r=0;r<4;r++)e+=N[t>>8*r+4&15]+N[t>>8*r&15];return e}function A(t){return String.fromCharCode((255&t)>>0,(65280&t)>>8,(16711680&t)>>16,(4278190080&t)>>24)}function x(t){return y(t).map(A).join("")}var S="5d41402abc4b2a76b9719d911017c592"!=function(t){for(var e=0;e<t.length;e++)t[e]=L(t[e]);return t.join("")}(y("hello"));function _(t,e){if(S){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}return t+e&4294967295}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function P(t,e){var r,n,i,a;if(t!==r){for(var o=(i=t,a=1+(256/t.length>>0),new Array(a+1).join(i)),s=[],c=0;c<256;c++)s[c]=c;var u=0;for(c=0;c<256;c++){var h=s[c];u=(u+h+o.charCodeAt(c))%256,s[c]=s[u],s[u]=h}r=t,n=s}else s=n;var l=e.length,f=0,d=0,p="";for(c=0;c<l;c++)d=(d+(h=s[f=(f+1)%256]))%256,s[f]=s[d],s[d]=h,o=s[(s[f]+s[d])%256],p+=String.fromCharCode(e.charCodeAt(c)^o);return p}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var k={print:4,modify:8,copy:16,"annot-forms":32};function I(t,e,r,n){this.v=1,this.r=2;var i=192;t.forEach((function(t){if(void 0!==k.perm)throw new Error("Invalid permission: "+t);i+=k[t]})),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var a=(e+this.padding).substr(0,32),o=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(a,o),this.P=-(1+(255^i)),this.encryptionKey=x(a+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=P(this.encryptionKey,this.padding)}function F(t){if(/[^\u0000-\u00ff]/.test(t))throw new Error("Invalid PDF Name Object: "+t+", Only accept ASCII characters.");for(var e="",r=t.length,n=0;n<r;n++){var i=t.charCodeAt(n);if(i<33||35===i||37===i||40===i||41===i||47===i||60===i||62===i||91===i||93===i||123===i||125===i||i>126)e+="#"+("0"+i.toString(16)).slice(-2);else e+=t[n]}return e}function C(e){if("object"!==_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e))throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var r={};this.subscribe=function(t,e,n){if(n=n||!1,"string"!=typeof t||"function"!=typeof e||"boolean"!=typeof n)throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");r.hasOwnProperty(t)||(r[t]={});var i=Math.random().toString(35);return r[t][i]=[e,!!n],i},this.unsubscribe=function(t){for(var e in r)if(r[e][t])return delete r[e][t],0===Object.keys(r[e]).length&&delete r[e],!0;return!1},this.publish=function(t){if(r.hasOwnProperty(t)){var i=Array.prototype.slice.call(arguments,1),o=[];for(var s in r[t]){var c=r[t][s];try{c[0].apply(e,i)}catch(t){n.console&&a.error("jsPDF PubSub Error",t.message,t)}c[1]&&o.push(s)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return r}}function j(t){if(!(this instanceof j))return new j(t);var e="opacity,stroke-opacity".split(",");for(var r in t)t.hasOwnProperty(r)&&e.indexOf(r)>=0&&(this[r]=t[r]);this.id="",this.objectNumber=-1}function O(t,e){this.gState=t,this.matrix=e,this.id="",this.objectNumber=-1}function B(t,e,r,n,i){if(!(this instanceof B))return new B(t,e,r,n,i);this.type="axial"===t?2:3,this.coords=e,this.colors=r,O.call(this,n,i)}function M(t,e,r,n,i){if(!(this instanceof M))return new M(t,e,r,n,i);this.boundingBox=t,this.xStep=e,this.yStep=r,this.stream="",this.cloneIndex=0,O.call(this,n,i)}function E(e){var r,i="string"==typeof arguments[0]?arguments[0]:"p",o=arguments[1],s=arguments[2],c=arguments[3],u=[],d=1,p=16,g="S",m=null;"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e=e||{})&&(i=e.orientation,o=e.unit||o,s=e.format||s,c=e.compress||e.compressPdf||c,null!==(m=e.encryption||null)&&(m.userPassword=m.userPassword||"",m.ownerPassword=m.ownerPassword||"",m.userPermissions=m.userPermissions||[]),d="number"==typeof e.userUnit?Math.abs(e.userUnit):1,void 0!==e.precision&&(r=e.precision),void 0!==e.floatPrecision&&(p=e.floatPrecision),g=e.defaultPathOperation||"S"),u=e.filters||(!0===c?["FlateEncode"]:u),o=o||"mm",i=(""+(i||"P")).toLowerCase();var v=e.putOnlyUsedFonts||!1,b={},y={internal:{},__private__:{}};y.__private__.PubSub=C;var w="1.3",N=y.__private__.getPdfVersion=function(){return w};y.__private__.setPdfVersion=function(t){w=t};var L={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};y.__private__.getPageFormats=function(){return L};var A=y.__private__.getPageFormat=function(t){return L[t]};s=s||"a4";var x={COMPAT:"compat",ADVANCED:"advanced"},S=x.COMPAT;function _(){this.saveGraphicsState(),lt(new Vt(_t,0,0,-_t,0,Rr()*_t).toString()+" cm"),this.setFontSize(this.getFontSize()/_t),g="n",S=x.ADVANCED}function P(){this.restoreGraphicsState(),g="S",S=x.COMPAT}var k=y.__private__.combineFontStyleAndFontWeight=function(t,e){if("bold"==t&&"normal"==e||"bold"==t&&400==e||"normal"==t&&"italic"==e||"bold"==t&&"italic"==e)throw new Error("Invalid Combination of fontweight and fontstyle");return e&&(t=400==e||"normal"===e?"italic"===t?"italic":"normal":700!=e&&"bold"!==e||"normal"!==t?(700==e?"bold":e)+""+t:"bold"),t};y.advancedAPI=function(t){var e=S===x.COMPAT;return e&&_.call(this),"function"!=typeof t||(t(this),e&&P.call(this)),this},y.compatAPI=function(t){var e=S===x.ADVANCED;return e&&P.call(this),"function"!=typeof t||(t(this),e&&_.call(this)),this},y.isAdvancedAPI=function(){return S===x.ADVANCED};var O,q=function(t){if(S!==x.ADVANCED)throw new Error(t+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},D=y.roundToPrecision=y.__private__.roundToPrecision=function(t,e){var n=r||e;if(isNaN(t)||isNaN(n))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return t.toFixed(n).replace(/0+$/,"")};O=y.hpf=y.__private__.hpf="number"==typeof p?function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return D(t,p)}:"smart"===p?function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return D(t,t>-1&&t<1?16:5)}:function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return D(t,16)};var R=y.f2=y.__private__.f2=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return D(t,2)},T=y.__private__.f3=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f3");return D(t,3)},U=y.scale=y.__private__.scale=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.scale");return S===x.COMPAT?t*_t:S===x.ADVANCED?t:void 0},z=function(t){return S===x.COMPAT?Rr()-t:S===x.ADVANCED?t:void 0},H=function(t){return U(z(t))};y.__private__.setPrecision=y.setPrecision=function(t){"number"==typeof parseInt(t,10)&&(r=parseInt(t,10))};var W,V="00000000000000000000000000000000",G=y.__private__.getFileId=function(){return V},Y=y.__private__.setFileId=function(t){return V=void 0!==t&&/^[a-fA-F0-9]{32}$/.test(t)?t.toUpperCase():V.split("").map((function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))})).join(""),null!==m&&(Ye=new I(m.userPermissions,m.userPassword,m.ownerPassword,V)),V};y.setFileId=function(t){return Y(t),this},y.getFileId=function(){return G()};var J=y.__private__.convertDateToPDFDate=function(t){var e=t.getTimezoneOffset(),r=e<0?"+":"-",n=Math.floor(Math.abs(e/60)),i=Math.abs(e%60),a=[r,Q(n),"'",Q(i),"'"].join("");return["D:",t.getFullYear(),Q(t.getMonth()+1),Q(t.getDate()),Q(t.getHours()),Q(t.getMinutes()),Q(t.getSeconds()),a].join("")},X=y.__private__.convertPDFDateToDate=function(t){var e=parseInt(t.substr(2,4),10),r=parseInt(t.substr(6,2),10)-1,n=parseInt(t.substr(8,2),10),i=parseInt(t.substr(10,2),10),a=parseInt(t.substr(12,2),10),o=parseInt(t.substr(14,2),10);return new Date(e,r,n,i,a,o,0)},K=y.__private__.setCreationDate=function(t){var e;if(void 0===t&&(t=new Date),t instanceof Date)e=J(t);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t))throw new Error("Invalid argument passed to jsPDF.setCreationDate");e=t}return W=e},Z=y.__private__.getCreationDate=function(t){var e=W;return"jsDate"===t&&(e=X(W)),e};y.setCreationDate=function(t){return K(t),this},y.getCreationDate=function(t){return Z(t)};var $,Q=y.__private__.padd2=function(t){return("0"+parseInt(t)).slice(-2)},tt=y.__private__.padd2Hex=function(t){return("00"+(t=t.toString())).substr(t.length)},et=0,rt=[],nt=[],it=0,at=[],ot=[],st=!1,ct=nt,ut=function(){et=0,it=0,nt=[],rt=[],at=[],Qt=Kt(),te=Kt()};y.__private__.setCustomOutputDestination=function(t){st=!0,ct=t};var ht=function(t){st||(ct=t)};y.__private__.resetCustomOutputDestination=function(){st=!1,ct=nt};var lt=y.__private__.out=function(t){return t=t.toString(),it+=t.length+1,ct.push(t),ct},ft=y.__private__.write=function(t){return lt(1===arguments.length?t.toString():Array.prototype.join.call(arguments," "))},dt=y.__private__.getArrayBuffer=function(t){for(var e=t.length,r=new ArrayBuffer(e),n=new Uint8Array(r);e--;)n[e]=t.charCodeAt(e);return r},pt=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];y.__private__.getStandardFonts=function(){return pt};var gt=e.fontSize||16;y.__private__.setFontSize=y.setFontSize=function(t){return gt=S===x.ADVANCED?t/_t:t,this};var mt,vt=y.__private__.getFontSize=y.getFontSize=function(){return S===x.COMPAT?gt:gt*_t},bt=e.R2L||!1;y.__private__.setR2L=y.setR2L=function(t){return bt=t,this},y.__private__.getR2L=y.getR2L=function(){return bt};var yt,wt=y.__private__.setZoomMode=function(t){var e=[void 0,null,"fullwidth","fullheight","fullpage","original"];if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t))mt=t;else if(isNaN(t)){if(-1===e.indexOf(t))throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+t+'" is not recognized.');mt=t}else mt=parseInt(t,10)};y.__private__.getZoomMode=function(){return mt};var Nt,Lt=y.__private__.setPageMode=function(t){if(-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(t))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+t+'" is not recognized.');yt=t};y.__private__.getPageMode=function(){return yt};var At=y.__private__.setLayoutMode=function(t){if(-1==[void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(t))throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+t+'" is not recognized.');Nt=t};y.__private__.getLayoutMode=function(){return Nt},y.__private__.setDisplayMode=y.setDisplayMode=function(t,e,r){return wt(t),At(e),Lt(r),this};var xt={title:"",subject:"",author:"",keywords:"",creator:""};y.__private__.getDocumentProperty=function(t){if(-1===Object.keys(xt).indexOf(t))throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return xt[t]},y.__private__.getDocumentProperties=function(){return xt},y.__private__.setDocumentProperties=y.setProperties=y.setDocumentProperties=function(t){for(var e in xt)xt.hasOwnProperty(e)&&t[e]&&(xt[e]=t[e]);return this},y.__private__.setDocumentProperty=function(t,e){if(-1===Object.keys(xt).indexOf(t))throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return xt[t]=e};var St,_t,Pt,kt,It,Ft={},Ct={},jt=[],Ot={},Bt={},Mt={},Et={},qt=null,Dt=0,Rt=[],Tt=new C(y),Ut=e.hotfixes||[],zt={},Ht={},Wt=[],Vt=function t(e,r,n,i,a,o){if(!(this instanceof t))return new t(e,r,n,i,a,o);isNaN(e)&&(e=1),isNaN(r)&&(r=0),isNaN(n)&&(n=0),isNaN(i)&&(i=1),isNaN(a)&&(a=0),isNaN(o)&&(o=0),this._matrix=[e,r,n,i,a,o]};Object.defineProperty(Vt.prototype,"sx",{get:function(){return this._matrix[0]},set:function(t){this._matrix[0]=t}}),Object.defineProperty(Vt.prototype,"shy",{get:function(){return this._matrix[1]},set:function(t){this._matrix[1]=t}}),Object.defineProperty(Vt.prototype,"shx",{get:function(){return this._matrix[2]},set:function(t){this._matrix[2]=t}}),Object.defineProperty(Vt.prototype,"sy",{get:function(){return this._matrix[3]},set:function(t){this._matrix[3]=t}}),Object.defineProperty(Vt.prototype,"tx",{get:function(){return this._matrix[4]},set:function(t){this._matrix[4]=t}}),Object.defineProperty(Vt.prototype,"ty",{get:function(){return this._matrix[5]},set:function(t){this._matrix[5]=t}}),Object.defineProperty(Vt.prototype,"a",{get:function(){return this._matrix[0]},set:function(t){this._matrix[0]=t}}),Object.defineProperty(Vt.prototype,"b",{get:function(){return this._matrix[1]},set:function(t){this._matrix[1]=t}}),Object.defineProperty(Vt.prototype,"c",{get:function(){return this._matrix[2]},set:function(t){this._matrix[2]=t}}),Object.defineProperty(Vt.prototype,"d",{get:function(){return this._matrix[3]},set:function(t){this._matrix[3]=t}}),Object.defineProperty(Vt.prototype,"e",{get:function(){return this._matrix[4]},set:function(t){this._matrix[4]=t}}),Object.defineProperty(Vt.prototype,"f",{get:function(){return this._matrix[5]},set:function(t){this._matrix[5]=t}}),Object.defineProperty(Vt.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Vt.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Vt.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Vt.prototype,"isIdentity",{get:function(){return 1===this.sx&&(0===this.shy&&(0===this.shx&&(1===this.sy&&(0===this.tx&&0===this.ty))))}}),Vt.prototype.join=function(t){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(O).join(t)},Vt.prototype.multiply=function(t){var e=t.sx*this.sx+t.shy*this.shx,r=t.sx*this.shy+t.shy*this.sy,n=t.shx*this.sx+t.sy*this.shx,i=t.shx*this.shy+t.sy*this.sy,a=t.tx*this.sx+t.ty*this.shx+this.tx,o=t.tx*this.shy+t.ty*this.sy+this.ty;return new Vt(e,r,n,i,a,o)},Vt.prototype.decompose=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty,o=Math.sqrt(t*t+e*e),s=(t/=o)*r+(e/=o)*n;r-=t*s,n-=e*s;var c=Math.sqrt(r*r+n*n);return s/=c,t*(n/=c)<e*(r/=c)&&(t=-t,e=-e,s=-s,o=-o),{scale:new Vt(o,0,0,c,0,0),translate:new Vt(1,0,0,1,i,a),rotate:new Vt(t,e,-e,t,0,0),skew:new Vt(1,0,s,1,0,0)}},Vt.prototype.toString=function(t){return this.join(" ")},Vt.prototype.inversed=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty,o=1/(t*n-e*r),s=n*o,c=-e*o,u=-r*o,h=t*o;return new Vt(s,c,u,h,-s*i-u*a,-c*i-h*a)},Vt.prototype.applyToPoint=function(t){var e=t.x*this.sx+t.y*this.shx+this.tx,r=t.x*this.shy+t.y*this.sy+this.ty;return new Cr(e,r)},Vt.prototype.applyToRectangle=function(t){var e=this.applyToPoint(t),r=this.applyToPoint(new Cr(t.x+t.w,t.y+t.h));return new jr(e.x,e.y,r.x-e.x,r.y-e.y)},Vt.prototype.clone=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty;return new Vt(t,e,r,n,i,a)},y.Matrix=Vt;var Gt=y.matrixMult=function(t,e){return e.multiply(t)},Yt=new Vt(1,0,0,1,0,0);y.unitMatrix=y.identityMatrix=Yt;var Jt=function(t,e){if(!Bt[t]){var r=(e instanceof B?"Sh":"P")+(Object.keys(Ot).length+1).toString(10);e.id=r,Bt[t]=r,Ot[r]=e,Tt.publish("addPattern",e)}};y.ShadingPattern=B,y.TilingPattern=M,y.addShadingPattern=function(t,e){return q("addShadingPattern()"),Jt(t,e),this},y.beginTilingPattern=function(t){q("beginTilingPattern()"),Br(t.boundingBox[0],t.boundingBox[1],t.boundingBox[2]-t.boundingBox[0],t.boundingBox[3]-t.boundingBox[1],t.matrix)},y.endTilingPattern=function(t,e){q("endTilingPattern()"),e.stream=ot[$].join("\n"),Jt(t,e),Tt.publish("endTilingPattern",e),Wt.pop().restore()};var Xt=y.__private__.newObject=function(){var t=Kt();return Zt(t,!0),t},Kt=y.__private__.newObjectDeferred=function(){return et++,rt[et]=function(){return it},et},Zt=function(t,e){return e="boolean"==typeof e&&e,rt[t]=it,e&&lt(t+" 0 obj"),t},$t=y.__private__.newAdditionalObject=function(){var t={objId:Kt(),content:""};return at.push(t),t},Qt=Kt(),te=Kt(),ee=y.__private__.decodeColorString=function(t){var e=t.split(" ");if(2!==e.length||"g"!==e[1]&&"G"!==e[1]){if(5===e.length&&("k"===e[4]||"K"===e[4])){e=[(1-e[0])*(1-e[3]),(1-e[1])*(1-e[3]),(1-e[2])*(1-e[3]),"r"]}}else{var r=parseFloat(e[0]);e=[r,r,r,"r"]}for(var n="#",i=0;i<3;i++)n+=("0"+Math.floor(255*parseFloat(e[i])).toString(16)).slice(-2);return n},re=y.__private__.encodeColorString=function(e){var r;"string"==typeof e&&(e={ch1:e});var n=e.ch1,i=e.ch2,a=e.ch3,o=e.ch4,s="draw"===e.pdfColorType?["G","RG","K"]:["g","rg","k"];if("string"==typeof n&&"#"!==n.charAt(0)){var c=new f(n);if(c.ok)n=c.toHex();else if(!/^\d*\.?\d*$/.test(n))throw new Error('Invalid color "'+n+'" passed to jsPDF.encodeColorString.')}if("string"==typeof n&&/^#[0-9A-Fa-f]{3}$/.test(n)&&(n="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),"string"==typeof n&&/^#[0-9A-Fa-f]{6}$/.test(n)){var u=parseInt(n.substr(1),16);n=u>>16&255,i=u>>8&255,a=255&u}if(void 0===i||void 0===o&&n===i&&i===a)if("string"==typeof n)r=n+" "+s[0];else switch(e.precision){case 2:r=R(n/255)+" "+s[0];break;case 3:default:r=T(n/255)+" "+s[0]}else if(void 0===o||"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(o)){if(o&&!isNaN(o.a)&&0===o.a)return r=["1.","1.","1.",s[1]].join(" ");if("string"==typeof n)r=[n,i,a,s[1]].join(" ");else switch(e.precision){case 2:r=[R(n/255),R(i/255),R(a/255),s[1]].join(" ");break;default:case 3:r=[T(n/255),T(i/255),T(a/255),s[1]].join(" ")}}else if("string"==typeof n)r=[n,i,a,o,s[2]].join(" ");else switch(e.precision){case 2:r=[R(n),R(i),R(a),R(o),s[2]].join(" ");break;case 3:default:r=[T(n),T(i),T(a),T(o),s[2]].join(" ")}return r},ne=y.__private__.getFilters=function(){return u},ie=y.__private__.putStream=function(t){var e=(t=t||{}).data||"",r=t.filters||ne(),n=t.alreadyAppliedFilters||[],i=t.addLength1||!1,a=e.length,o=t.objectId,s=function(t){return t};if(null!==m&&void 0===o)throw new Error("ObjectId must be passed to putStream for file encryption");null!==m&&(s=Ye.encryptor(o,0));var c={};!0===r&&(r=["FlateEncode"]);var u=t.additionalKeyValues||[],h=(c=void 0!==E.API.processDataByFilters?E.API.processDataByFilters(e,r):{data:e,reverseChain:[]}).reverseChain+(Array.isArray(n)?n.join(" "):n.toString());if(0!==c.data.length&&(u.push({key:"Length",value:c.data.length}),!0===i&&u.push({key:"Length1",value:a})),0!=h.length)if(h.split("/").length-1==1)u.push({key:"Filter",value:h});else{u.push({key:"Filter",value:"["+h+"]"});for(var l=0;l<u.length;l+=1)if("DecodeParms"===u[l].key){for(var f=[],d=0;d<c.reverseChain.split("/").length-1;d+=1)f.push("null");f.push(u[l].value),u[l].value="["+f.join(" ")+"]"}}lt("<<");for(var p=0;p<u.length;p++)lt("/"+u[p].key+" "+u[p].value);lt(">>"),0!==c.data.length&&(lt("stream"),lt(s(c.data)),lt("endstream"))},ae=y.__private__.putPage=function(t){var e=t.number,r=t.data,n=t.objId,i=t.contentsObjId;Zt(n,!0),lt("<</Type /Page"),lt("/Parent "+t.rootDictionaryObjId+" 0 R"),lt("/Resources "+t.resourceDictionaryObjId+" 0 R"),lt("/MediaBox ["+parseFloat(O(t.mediaBox.bottomLeftX))+" "+parseFloat(O(t.mediaBox.bottomLeftY))+" "+O(t.mediaBox.topRightX)+" "+O(t.mediaBox.topRightY)+"]"),null!==t.cropBox&&lt("/CropBox ["+O(t.cropBox.bottomLeftX)+" "+O(t.cropBox.bottomLeftY)+" "+O(t.cropBox.topRightX)+" "+O(t.cropBox.topRightY)+"]"),null!==t.bleedBox&&lt("/BleedBox ["+O(t.bleedBox.bottomLeftX)+" "+O(t.bleedBox.bottomLeftY)+" "+O(t.bleedBox.topRightX)+" "+O(t.bleedBox.topRightY)+"]"),null!==t.trimBox&&lt("/TrimBox ["+O(t.trimBox.bottomLeftX)+" "+O(t.trimBox.bottomLeftY)+" "+O(t.trimBox.topRightX)+" "+O(t.trimBox.topRightY)+"]"),null!==t.artBox&&lt("/ArtBox ["+O(t.artBox.bottomLeftX)+" "+O(t.artBox.bottomLeftY)+" "+O(t.artBox.topRightX)+" "+O(t.artBox.topRightY)+"]"),"number"==typeof t.userUnit&&1!==t.userUnit&&lt("/UserUnit "+t.userUnit),Tt.publish("putPage",{objId:n,pageContext:Rt[e],pageNumber:e,page:r}),lt("/Contents "+i+" 0 R"),lt(">>"),lt("endobj");var a=r.join("\n");return S===x.ADVANCED&&(a+="\nQ"),Zt(i,!0),ie({data:a,filters:ne(),objectId:i}),lt("endobj"),n},oe=y.__private__.putPages=function(){var t,e,r=[];for(t=1;t<=Dt;t++)Rt[t].objId=Kt(),Rt[t].contentsObjId=Kt();for(t=1;t<=Dt;t++)r.push(ae({number:t,data:ot[t],objId:Rt[t].objId,contentsObjId:Rt[t].contentsObjId,mediaBox:Rt[t].mediaBox,cropBox:Rt[t].cropBox,bleedBox:Rt[t].bleedBox,trimBox:Rt[t].trimBox,artBox:Rt[t].artBox,userUnit:Rt[t].userUnit,rootDictionaryObjId:Qt,resourceDictionaryObjId:te}));Zt(Qt,!0),lt("<</Type /Pages");var n="/Kids [";for(e=0;e<Dt;e++)n+=r[e]+" 0 R ";lt(n+"]"),lt("/Count "+Dt),lt(">>"),lt("endobj"),Tt.publish("postPutPages")},se=function(t){Tt.publish("putFont",{font:t,out:lt,newObject:Xt,putStream:ie}),!0!==t.isAlreadyPutted&&(t.objectNumber=Xt(),lt("<<"),lt("/Type /Font"),lt("/BaseFont /"+F(t.postScriptName)),lt("/Subtype /Type1"),"string"==typeof t.encoding&&lt("/Encoding /"+t.encoding),lt("/FirstChar 32"),lt("/LastChar 255"),lt(">>"),lt("endobj"))},ce=function(){for(var t in Ft)Ft.hasOwnProperty(t)&&(!1===v||!0===v&&b.hasOwnProperty(t))&&se(Ft[t])},ue=function(t){t.objectNumber=Xt();var e=[];e.push({key:"Type",value:"/XObject"}),e.push({key:"Subtype",value:"/Form"}),e.push({key:"BBox",value:"["+[O(t.x),O(t.y),O(t.x+t.width),O(t.y+t.height)].join(" ")+"]"}),e.push({key:"Matrix",value:"["+t.matrix.toString()+"]"});var r=t.pages[1].join("\n");ie({data:r,additionalKeyValues:e,objectId:t.objectNumber}),lt("endobj")},he=function(){for(var t in zt)zt.hasOwnProperty(t)&&ue(zt[t])},le=function(t,e){var r,n=[],i=1/(e-1);for(r=0;r<1;r+=i)n.push(r);if(n.push(1),0!=t[0].offset){var a={offset:0,color:t[0].color};t.unshift(a)}if(1!=t[t.length-1].offset){var o={offset:1,color:t[t.length-1].color};t.push(o)}for(var s="",c=0,u=0;u<n.length;u++){for(r=n[u];r>t[c+1].offset;)c++;var h=t[c].offset,l=(r-h)/(t[c+1].offset-h),f=t[c].color,d=t[c+1].color;s+=tt(Math.round((1-l)*f[0]+l*d[0]).toString(16))+tt(Math.round((1-l)*f[1]+l*d[1]).toString(16))+tt(Math.round((1-l)*f[2]+l*d[2]).toString(16))}return s.trim()},fe=function(t,e){e||(e=21);var r=Xt(),n=le(t.colors,e),i=[];i.push({key:"FunctionType",value:"0"}),i.push({key:"Domain",value:"[0.0 1.0]"}),i.push({key:"Size",value:"["+e+"]"}),i.push({key:"BitsPerSample",value:"8"}),i.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),i.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ie({data:n,additionalKeyValues:i,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:r}),lt("endobj"),t.objectNumber=Xt(),lt("<< /ShadingType "+t.type),lt("/ColorSpace /DeviceRGB");var a="/Coords ["+O(parseFloat(t.coords[0]))+" "+O(parseFloat(t.coords[1]))+" ";2===t.type?a+=O(parseFloat(t.coords[2]))+" "+O(parseFloat(t.coords[3])):a+=O(parseFloat(t.coords[2]))+" "+O(parseFloat(t.coords[3]))+" "+O(parseFloat(t.coords[4]))+" "+O(parseFloat(t.coords[5])),lt(a+="]"),t.matrix&&lt("/Matrix ["+t.matrix.toString()+"]"),lt("/Function "+r+" 0 R"),lt("/Extend [true true]"),lt(">>"),lt("endobj")},de=function(t,e){var r=Kt(),n=Xt();e.push({resourcesOid:r,objectOid:n}),t.objectNumber=n;var i=[];i.push({key:"Type",value:"/Pattern"}),i.push({key:"PatternType",value:"1"}),i.push({key:"PaintType",value:"1"}),i.push({key:"TilingType",value:"1"}),i.push({key:"BBox",value:"["+t.boundingBox.map(O).join(" ")+"]"}),i.push({key:"XStep",value:O(t.xStep)}),i.push({key:"YStep",value:O(t.yStep)}),i.push({key:"Resources",value:r+" 0 R"}),t.matrix&&i.push({key:"Matrix",value:"["+t.matrix.toString()+"]"}),ie({data:t.stream,additionalKeyValues:i,objectId:t.objectNumber}),lt("endobj")},pe=function(t){var e;for(e in Ot)Ot.hasOwnProperty(e)&&(Ot[e]instanceof B?fe(Ot[e]):Ot[e]instanceof M&&de(Ot[e],t))},ge=function(t){for(var e in t.objectNumber=Xt(),lt("<<"),t)switch(e){case"opacity":lt("/ca "+R(t[e]));break;case"stroke-opacity":lt("/CA "+R(t[e]))}lt(">>"),lt("endobj")},me=function(){var t;for(t in Mt)Mt.hasOwnProperty(t)&&ge(Mt[t])},ve=function(){for(var t in lt("/XObject <<"),zt)zt.hasOwnProperty(t)&&zt[t].objectNumber>=0&&lt("/"+t+" "+zt[t].objectNumber+" 0 R");Tt.publish("putXobjectDict"),lt(">>")},be=function(){Ye.oid=Xt(),lt("<<"),lt("/Filter /Standard"),lt("/V "+Ye.v),lt("/R "+Ye.r),lt("/U <"+Ye.toHexString(Ye.U)+">"),lt("/O <"+Ye.toHexString(Ye.O)+">"),lt("/P "+Ye.P),lt(">>"),lt("endobj")},ye=function(){for(var t in lt("/Font <<"),Ft)Ft.hasOwnProperty(t)&&(!1===v||!0===v&&b.hasOwnProperty(t))&&lt("/"+t+" "+Ft[t].objectNumber+" 0 R");lt(">>")},we=function(){if(Object.keys(Ot).length>0){for(var t in lt("/Shading <<"),Ot)Ot.hasOwnProperty(t)&&Ot[t]instanceof B&&Ot[t].objectNumber>=0&&lt("/"+t+" "+Ot[t].objectNumber+" 0 R");Tt.publish("putShadingPatternDict"),lt(">>")}},Ne=function(t){if(Object.keys(Ot).length>0){for(var e in lt("/Pattern <<"),Ot)Ot.hasOwnProperty(e)&&Ot[e]instanceof y.TilingPattern&&Ot[e].objectNumber>=0&&Ot[e].objectNumber<t&&lt("/"+e+" "+Ot[e].objectNumber+" 0 R");Tt.publish("putTilingPatternDict"),lt(">>")}},Le=function(){if(Object.keys(Mt).length>0){var t;for(t in lt("/ExtGState <<"),Mt)Mt.hasOwnProperty(t)&&Mt[t].objectNumber>=0&&lt("/"+t+" "+Mt[t].objectNumber+" 0 R");Tt.publish("putGStateDict"),lt(">>")}},Ae=function(t){Zt(t.resourcesOid,!0),lt("<<"),lt("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),ye(),we(),Ne(t.objectOid),Le(),ve(),lt(">>"),lt("endobj")},xe=function(){var t=[];ce(),me(),he(),pe(t),Tt.publish("putResources"),t.forEach(Ae),Ae({resourcesOid:te,objectOid:Number.MAX_SAFE_INTEGER}),Tt.publish("postPutResources")},Se=function(){Tt.publish("putAdditionalObjects");for(var t=0;t<at.length;t++){var e=at[t];Zt(e.objId,!0),lt(e.content),lt("endobj")}Tt.publish("postPutAdditionalObjects")},_e=function(t){Ct[t.fontName]=Ct[t.fontName]||{},Ct[t.fontName][t.fontStyle]=t.id},Pe=function(t,e,r,n,i){var a={id:"F"+(Object.keys(Ft).length+1).toString(10),postScriptName:t,fontName:e,fontStyle:r,encoding:n,isStandardFont:i||!1,metadata:{}};return Tt.publish("addFont",{font:a,instance:this}),Ft[a.id]=a,_e(a),a.id},ke=function(t){for(var e=0,r=pt.length;e<r;e++){var n=Pe.call(this,t[e][0],t[e][1],t[e][2],pt[e][3],!0);!1===v&&(b[n]=!0);var i=t[e][0].split("-");_e({id:n,fontName:i[0],fontStyle:i[1]||""})}Tt.publish("addFonts",{fonts:Ft,dictionary:Ct})},Ie=function(t){return t.foo=function(){try{return t.apply(this,arguments)}catch(t){var e=t.stack||"";~e.indexOf(" at ")&&(e=e.split(" at ")[1]);var r="Error in function "+e.split("\n")[0].split("<")[0]+": "+t.message;if(!n.console)throw new Error(r);n.console.error(r,t),n.alert&&alert(r)}},t.foo.bar=t,t.foo},Fe=function(t,e){var r,n,i,a,o,s,c,u,h;if(i=(e=e||{}).sourceEncoding||"Unicode",o=e.outputEncoding,(e.autoencode||o)&&Ft[St].metadata&&Ft[St].metadata[i]&&Ft[St].metadata[i].encoding&&(a=Ft[St].metadata[i].encoding,!o&&Ft[St].encoding&&(o=Ft[St].encoding),!o&&a.codePages&&(o=a.codePages[0]),"string"==typeof o&&(o=a[o]),o)){for(c=!1,s=[],r=0,n=t.length;r<n;r++)(u=o[t.charCodeAt(r)])?s.push(String.fromCharCode(u)):s.push(t[r]),s[r].charCodeAt(0)>>8&&(c=!0);t=s.join("")}for(r=t.length;void 0===c&&0!==r;)t.charCodeAt(r-1)>>8&&(c=!0),r--;if(!c)return t;for(s=e.noBOM?[]:[254,255],r=0,n=t.length;r<n;r++){if((h=(u=t.charCodeAt(r))>>8)>>8)throw new Error("Character at position "+r+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(h),s.push(u-(h<<8))}return String.fromCharCode.apply(void 0,s)},Ce=y.__private__.pdfEscape=y.pdfEscape=function(t,e){return Fe(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},je=y.__private__.beginPage=function(t){ot[++Dt]=[],Rt[Dt]={objId:0,contentsObjId:0,userUnit:Number(d),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(t[0]),topRightY:Number(t[1])}},Me(Dt),ht(ot[$])},Oe=function(t,e){var r,n,o;switch(i=e||i,"string"==typeof t&&(r=A(t.toLowerCase()),Array.isArray(r)&&(n=r[0],o=r[1])),Array.isArray(t)&&(n=t[0]*_t,o=t[1]*_t),isNaN(n)&&(n=s[0],o=s[1]),(n>14400||o>14400)&&(a.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),n=Math.min(14400,n),o=Math.min(14400,o)),s=[n,o],i.substr(0,1)){case"l":o>n&&(s=[o,n]);break;case"p":n>o&&(s=[o,n])}je(s),pr(fr),lt(Lr),0!==kr&&lt(kr+" J"),0!==Ir&&lt(Ir+" j"),Tt.publish("addPage",{pageNumber:Dt})},Be=function(t){t>0&&t<=Dt&&(ot.splice(t,1),Rt.splice(t,1),Dt--,$>Dt&&($=Dt),this.setPage($))},Me=function(t){t>0&&t<=Dt&&($=t)},Ee=y.__private__.getNumberOfPages=y.getNumberOfPages=function(){return ot.length-1},qe=function(t,e,r){var n,i=void 0;return r=r||{},t=void 0!==t?t:Ft[St].fontName,e=void 0!==e?e:Ft[St].fontStyle,n=t.toLowerCase(),void 0!==Ct[n]&&void 0!==Ct[n][e]?i=Ct[n][e]:void 0!==Ct[t]&&void 0!==Ct[t][e]?i=Ct[t][e]:!1===r.disableWarning&&a.warn("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts."),i||r.noFallback||null==(i=Ct.times[e])&&(i=Ct.times.normal),i},De=y.__private__.putInfo=function(){var t=Xt(),e=function(t){return t};for(var r in null!==m&&(e=Ye.encryptor(t,0)),lt("<<"),lt("/Producer ("+Ce(e("jsPDF "+E.version))+")"),xt)xt.hasOwnProperty(r)&&xt[r]&&lt("/"+r.substr(0,1).toUpperCase()+r.substr(1)+" ("+Ce(e(xt[r]))+")");lt("/CreationDate ("+Ce(e(W))+")"),lt(">>"),lt("endobj")},Re=y.__private__.putCatalog=function(t){var e=(t=t||{}).rootDictionaryObjId||Qt;switch(Xt(),lt("<<"),lt("/Type /Catalog"),lt("/Pages "+e+" 0 R"),mt||(mt="fullwidth"),mt){case"fullwidth":lt("/OpenAction [3 0 R /FitH null]");break;case"fullheight":lt("/OpenAction [3 0 R /FitV null]");break;case"fullpage":lt("/OpenAction [3 0 R /Fit]");break;case"original":lt("/OpenAction [3 0 R /XYZ null null 1]");break;default:var r=""+mt;"%"===r.substr(r.length-1)&&(mt=parseInt(mt)/100),"number"==typeof mt&&lt("/OpenAction [3 0 R /XYZ null null "+R(mt)+"]")}switch(Nt||(Nt="continuous"),Nt){case"continuous":lt("/PageLayout /OneColumn");break;case"single":lt("/PageLayout /SinglePage");break;case"two":case"twoleft":lt("/PageLayout /TwoColumnLeft");break;case"tworight":lt("/PageLayout /TwoColumnRight")}yt&&lt("/PageMode /"+yt),Tt.publish("putCatalog"),lt(">>"),lt("endobj")},Te=y.__private__.putTrailer=function(){lt("trailer"),lt("<<"),lt("/Size "+(et+1)),lt("/Root "+et+" 0 R"),lt("/Info "+(et-1)+" 0 R"),null!==m&&lt("/Encrypt "+Ye.oid+" 0 R"),lt("/ID [ <"+V+"> <"+V+"> ]"),lt(">>")},Ue=y.__private__.putHeader=function(){lt("%PDF-"+w),lt("%ºß¬à")},ze=y.__private__.putXRef=function(){var t="0000000000";lt("xref"),lt("0 "+(et+1)),lt("0000000000 65535 f ");for(var e=1;e<=et;e++){"function"==typeof rt[e]?lt((t+rt[e]()).slice(-10)+" 00000 n "):void 0!==rt[e]?lt((t+rt[e]).slice(-10)+" 00000 n "):lt("0000000000 00000 n ")}},He=y.__private__.buildDocument=function(){ut(),ht(nt),Tt.publish("buildDocument"),Ue(),oe(),Se(),xe(),null!==m&&be(),De(),Re();var t=it;return ze(),Te(),lt("startxref"),lt(""+t),lt("%%EOF"),ht(ot[$]),nt.join("\n")},We=y.__private__.getBlob=function(t){return new Blob([dt(t)],{type:"application/pdf"})},Ve=y.output=y.__private__.output=Ie((function(t,e){switch("string"==typeof(e=e||{})?e={filename:e}:e.filename=e.filename||"generated.pdf",t){case void 0:return He();case"save":y.save(e.filename);break;case"arraybuffer":return dt(He());case"blob":return We(He());case"bloburi":case"bloburl":if(void 0!==n.URL&&"function"==typeof n.URL.createObjectURL)return n.URL&&n.URL.createObjectURL(We(He()))||void 0;a.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var r="",i=He();try{r=h(i)}catch(t){r=h(unescape(encodeURIComponent(i)))}return"data:application/pdf;filename="+e.filename+";base64,"+r;case"pdfobjectnewwindow":if("[object Window]"===Object.prototype.toString.call(n)){var o="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",s=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';e.pdfObjectUrl&&(o=e.pdfObjectUrl,s="");var c='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+o+'"'+s+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(e)+");<\/script></body></html>",u=n.open();return null!==u&&u.document.write(c),u}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if("[object Window]"===Object.prototype.toString.call(n)){var l='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(e.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+e.filename+'" width="500px" height="400px" /></body></html>',f=n.open();if(null!==f){f.document.write(l);var d=this;f.document.documentElement.querySelector("#pdfViewer").onload=function(){f.document.title=e.filename,f.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(d.output("bloburl"))}}return f}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if("[object Window]"!==Object.prototype.toString.call(n))throw new Error("The option dataurlnewwindow just works in a browser-environment.");var p='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",e)+'"></iframe></body></html>',g=n.open();if(null!==g&&(g.document.write(p),g.document.title=e.filename),g||"undefined"==typeof safari)return g;break;case"datauri":case"dataurl":return n.document.location.href=this.output("datauristring",e);default:return null}})),Ge=function(t){return!0===Array.isArray(Ut)&&Ut.indexOf(t)>-1};switch(o){case"pt":_t=1;break;case"mm":_t=72/25.4;break;case"cm":_t=72/2.54;break;case"in":_t=72;break;case"px":_t=1==Ge("px_scaling")?.75:96/72;break;case"pc":case"em":_t=12;break;case"ex":_t=6;break;default:if("number"!=typeof o)throw new Error("Invalid unit: "+o);_t=o}var Ye=null;K(),Y();var Je=function(t){return null!==m?Ye.encryptor(t,0):function(t){return t}},Xe=y.__private__.getPageInfo=y.getPageInfo=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Rt[t].objId,pageNumber:t,pageContext:Rt[t]}},Ke=y.__private__.getPageInfoByObjId=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var e in Rt)if(Rt[e].objId===t)break;return Xe(e)},Ze=y.__private__.getCurrentPageInfo=y.getCurrentPageInfo=function(){return{objId:Rt[$].objId,pageNumber:$,pageContext:Rt[$]}};y.addPage=function(){return Oe.apply(this,arguments),this},y.setPage=function(){return Me.apply(this,arguments),ht.call(this,ot[$]),this},y.insertPage=function(t){return this.addPage(),this.movePage($,t),this},y.movePage=function(t,e){var r,n;if(t>e){r=ot[t],n=Rt[t];for(var i=t;i>e;i--)ot[i]=ot[i-1],Rt[i]=Rt[i-1];ot[e]=r,Rt[e]=n,this.setPage(e)}else if(t<e){r=ot[t],n=Rt[t];for(var a=t;a<e;a++)ot[a]=ot[a+1],Rt[a]=Rt[a+1];ot[e]=r,Rt[e]=n,this.setPage(e)}return this},y.deletePage=function(){return Be.apply(this,arguments),this},y.__private__.text=y.text=function(e,r,n,i,a){var o,s,c,u,h,l,f,d,p,g=(i=i||{}).scope||this;if("number"==typeof e&&"number"==typeof r&&("string"==typeof n||Array.isArray(n))){var m=n;n=r,r=e,e=m}if(arguments[3]instanceof Vt==!1?(c=arguments[4],u=arguments[5],"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(f=arguments[3])&&null!==f||("string"==typeof c&&(u=c,c=null),"string"==typeof f&&(u=f,f=null),"number"==typeof f&&(c=f,f=null),i={flags:f,angle:c,align:u})):(q("The transform parameter of text() with a Matrix value"),p=a),isNaN(r)||isNaN(n)||null==e)throw new Error("Invalid arguments passed to jsPDF.text");if(0===e.length)return g;var v="",y=!1,w="number"==typeof i.lineHeightFactor?i.lineHeightFactor:lr,N=g.internal.scaleFactor;function L(t){return t=t.split("\t").join(Array(i.TabLen||9).join(" ")),Ce(t,f)}function A(t){for(var e,r=t.concat(),n=[],i=r.length;i--;)"string"==typeof(e=r.shift())?n.push(e):Array.isArray(t)&&(1===e.length||void 0===e[1]&&void 0===e[2])?n.push(e[0]):n.push([e[0],e[1],e[2]]);return n}function _(t,e){var r;if("string"==typeof t)r=e(t)[0];else if(Array.isArray(t)){for(var n,i,a=t.concat(),o=[],s=a.length;s--;)"string"==typeof(n=a.shift())?o.push(e(n)[0]):Array.isArray(n)&&"string"==typeof n[0]&&(i=e(n[0],n[1],n[2]),o.push([i[0],i[1],i[2]]));r=o}return r}var P=!1,k=!0;if("string"==typeof e)P=!0;else if(Array.isArray(e)){var I=e.concat();s=[];for(var F,C=I.length;C--;)("string"!=typeof(F=I.shift())||Array.isArray(F)&&"string"!=typeof F[0])&&(k=!1);P=k}if(!1===P)throw new Error('Type of text must be string or Array. "'+e+'" is not recognized.');"string"==typeof e&&(e=e.match(/[\r?\n]/)?e.split(/\r\n|\r|\n/g):[e]);var j=gt/g.internal.scaleFactor,B=j*(w-1);switch(i.baseline){case"bottom":n-=B;break;case"top":n+=j-B;break;case"hanging":n+=j-2*B;break;case"middle":n+=j/2-B}if((l=i.maxWidth||0)>0&&("string"==typeof e?e=g.splitTextToSize(e,l):"[object Array]"===Object.prototype.toString.call(e)&&(e=e.reduce((function(t,e){return t.concat(g.splitTextToSize(e,l))}),[]))),o={text:e,x:r,y:n,options:i,mutex:{pdfEscape:Ce,activeFontKey:St,fonts:Ft,activeFontSize:gt}},Tt.publish("preProcessText",o),e=o.text,c=(i=o.options).angle,p instanceof Vt==!1&&c&&"number"==typeof c){c*=Math.PI/180,0===i.rotationDirection&&(c=-c),S===x.ADVANCED&&(c=-c);var M=Math.cos(c),E=Math.sin(c);p=new Vt(M,E,-E,M,0,0)}else c&&c instanceof Vt&&(p=c);S!==x.ADVANCED||p||(p=Yt),void 0!==(h=i.charSpace||_r)&&(v+=O(U(h))+" Tc\n",this.setCharSpace(this.getCharSpace()||0)),void 0!==(d=i.horizontalScale)&&(v+=O(100*d)+" Tz\n");i.lang;var D=-1,R=void 0!==i.renderingMode?i.renderingMode:i.stroke,T=g.internal.getCurrentPageInfo().pageContext;switch(R){case 0:case!1:case"fill":D=0;break;case 1:case!0:case"stroke":D=1;break;case 2:case"fillThenStroke":D=2;break;case 3:case"invisible":D=3;break;case 4:case"fillAndAddForClipping":D=4;break;case 5:case"strokeAndAddPathForClipping":D=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":D=6;break;case 7:case"addToPathForClipping":D=7}var z=void 0!==T.usedRenderingMode?T.usedRenderingMode:-1;-1!==D?v+=D+" Tr\n":-1!==z&&(v+="0 Tr\n"),-1!==D&&(T.usedRenderingMode=D),u=i.align||"left";var H,W=gt*w,V=g.internal.pageSize.getWidth(),G=Ft[St];h=i.charSpace||_r,l=i.maxWidth||0,f=Object.assign({autoencode:!0,noBOM:!0},i.flags);var Y=[];if("[object Array]"===Object.prototype.toString.call(e)){var J;s=A(e),"left"!==u&&(H=s.map((function(t){return g.getStringUnitWidth(t,{font:G,charSpace:h,fontSize:gt,doKerning:!1})*gt/N})));var X,K=0;if("right"===u){r-=H[0],e=[],C=s.length;for(var Z=0;Z<C;Z++)0===Z?(X=br(r),J=yr(n)):(X=U(K-H[Z]),J=-W),e.push([s[Z],X,J]),K=H[Z]}else if("center"===u){r-=H[0]/2,e=[],C=s.length;for(var $=0;$<C;$++)0===$?(X=br(r),J=yr(n)):(X=U((K-H[$])/2),J=-W),e.push([s[$],X,J]),K=H[$]}else if("left"===u){e=[],C=s.length;for(var Q=0;Q<C;Q++)e.push(s[Q])}else{if("justify"!==u)throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');e=[],C=s.length,l=0!==l?l:V;for(var tt=0;tt<C;tt++)J=0===tt?yr(n):-W,X=0===tt?br(r):0,tt<C-1?Y.push(O(U((l-H[tt])/(s[tt].split(" ").length-1)))):Y.push(0),e.push([s[tt],X,J])}}var et="boolean"==typeof i.R2L?i.R2L:bt;!0===et&&(e=_(e,(function(t,e,r){return[t.split("").reverse().join(""),e,r]}))),o={text:e,x:r,y:n,options:i,mutex:{pdfEscape:Ce,activeFontKey:St,fonts:Ft,activeFontSize:gt}},Tt.publish("postProcessText",o),e=o.text,y=o.mutex.isHex||!1;var rt=Ft[St].encoding;"WinAnsiEncoding"!==rt&&"StandardEncoding"!==rt||(e=_(e,(function(t,e,r){return[L(t),e,r]}))),s=A(e),e=[];for(var nt,it,at,ot=0,st=1,ct=Array.isArray(s[0])?st:ot,ut="",ht=function(t,e,r){var n="";return r instanceof Vt?(r="number"==typeof i.angle?Gt(r,new Vt(1,0,0,1,t,e)):Gt(new Vt(1,0,0,1,t,e),r),S===x.ADVANCED&&(r=Gt(new Vt(1,0,0,-1,0,0),r)),n=r.join(" ")+" Tm\n"):n=O(t)+" "+O(e)+" Td\n",n},ft=0;ft<s.length;ft++){switch(ut="",ct){case st:at=(y?"<":"(")+s[ft][0]+(y?">":")"),nt=parseFloat(s[ft][1]),it=parseFloat(s[ft][2]);break;case ot:at=(y?"<":"(")+s[ft]+(y?">":")"),nt=br(r),it=yr(n)}void 0!==Y&&void 0!==Y[ft]&&(ut=Y[ft]+" Tw\n"),0===ft?e.push(ut+ht(nt,it,p)+at):ct===ot?e.push(ut+at):ct===st&&e.push(ut+ht(nt,it,p)+at)}e=ct===ot?e.join(" Tj\nT* "):e.join(" Tj\n"),e+=" Tj\n";var dt="BT\n/";return dt+=St+" "+gt+" Tf\n",dt+=O(gt*w)+" TL\n",dt+=xr+"\n",dt+=v,dt+=e,lt(dt+="ET"),b[St]=!0,g};var $e=y.__private__.clip=y.clip=function(t){return lt("evenodd"===t?"W*":"W"),this};y.clipEvenOdd=function(){return $e("evenodd")},y.__private__.discardPath=y.discardPath=function(){return lt("n"),this};var Qe=y.__private__.isValidStyle=function(t){var e=!1;return-1!==[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(t)&&(e=!0),e};y.__private__.setDefaultPathOperation=y.setDefaultPathOperation=function(t){return Qe(t)&&(g=t),this};var tr=y.__private__.getStyle=y.getStyle=function(t){var e=g;switch(t){case"D":case"S":e="S";break;case"F":e="f";break;case"FD":case"DF":e="B";break;case"f":case"f*":case"B":case"B*":e=t}return e},er=y.close=function(){return lt("h"),this};y.stroke=function(){return lt("S"),this},y.fill=function(t){return rr("f",t),this},y.fillEvenOdd=function(t){return rr("f*",t),this},y.fillStroke=function(t){return rr("B",t),this},y.fillStrokeEvenOdd=function(t){return rr("B*",t),this};var rr=function(e,r){"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(r)?ar(r,e):lt(e)},nr=function(t){null===t||S===x.ADVANCED&&void 0===t||(t=tr(t),lt(t))};function ir(t,e,r,n,i){var a=new M(e||this.boundingBox,r||this.xStep,n||this.yStep,this.gState,i||this.matrix);a.stream=this.stream;var o=t+"$$"+this.cloneIndex+++"$$";return Jt(o,a),a}var ar=function(t,e){var r=Bt[t.key],n=Ot[r];if(n instanceof B)lt("q"),lt(or(e)),n.gState&&y.setGState(n.gState),lt(t.matrix.toString()+" cm"),lt("/"+r+" sh"),lt("Q");else if(n instanceof M){var i=new Vt(1,0,0,-1,0,Rr());t.matrix&&(i=i.multiply(t.matrix||Yt),r=ir.call(n,t.key,t.boundingBox,t.xStep,t.yStep,i).id),lt("q"),lt("/Pattern cs"),lt("/"+r+" scn"),n.gState&&y.setGState(n.gState),lt(e),lt("Q")}},or=function(t){switch(t){case"f":case"F":return"W n";case"f*":return"W* n";case"B":return"W S";case"B*":return"W* S";case"S":return"W S";case"n":return"W n"}},sr=y.moveTo=function(t,e){return lt(O(U(t))+" "+O(H(e))+" m"),this},cr=y.lineTo=function(t,e){return lt(O(U(t))+" "+O(H(e))+" l"),this},ur=y.curveTo=function(t,e,r,n,i,a){return lt([O(U(t)),O(H(e)),O(U(r)),O(H(n)),O(U(i)),O(H(a)),"c"].join(" ")),this};y.__private__.line=y.line=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Qe(i))throw new Error("Invalid arguments passed to jsPDF.line");return S===x.COMPAT?this.lines([[r-t,n-e]],t,e,[1,1],i||"S"):this.lines([[r-t,n-e]],t,e,[1,1]).stroke()},y.__private__.lines=y.lines=function(t,e,r,n,i,a){var o,s,c,u,h,l,f,d,p,g,m,v;if("number"==typeof t&&(v=r,r=e,e=t,t=v),n=n||[1,1],a=a||!1,isNaN(e)||isNaN(r)||!Array.isArray(t)||!Array.isArray(n)||!Qe(i)||"boolean"!=typeof a)throw new Error("Invalid arguments passed to jsPDF.lines");for(sr(e,r),o=n[0],s=n[1],u=t.length,g=e,m=r,c=0;c<u;c++)2===(h=t[c]).length?(g=h[0]*o+g,m=h[1]*s+m,cr(g,m)):(l=h[0]*o+g,f=h[1]*s+m,d=h[2]*o+g,p=h[3]*s+m,g=h[4]*o+g,m=h[5]*s+m,ur(l,f,d,p,g,m));return a&&er(),nr(i),this},y.path=function(t){for(var e=0;e<t.length;e++){var r=t[e],n=r.c;switch(r.op){case"m":sr(n[0],n[1]);break;case"l":cr(n[0],n[1]);break;case"c":ur.apply(this,n);break;case"h":er()}}return this},y.__private__.rect=y.rect=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Qe(i))throw new Error("Invalid arguments passed to jsPDF.rect");return S===x.COMPAT&&(n=-n),lt([O(U(t)),O(H(e)),O(U(r)),O(U(n)),"re"].join(" ")),nr(i),this},y.__private__.triangle=y.triangle=function(t,e,r,n,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a)||!Qe(o))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[r-t,n-e],[i-r,a-n],[t-i,e-a]],t,e,[1,1],o,!0),this},y.__private__.roundedRect=y.roundedRect=function(t,e,r,n,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a)||!Qe(o))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var s=4/3*(Math.SQRT2-1);return i=Math.min(i,.5*r),a=Math.min(a,.5*n),this.lines([[r-2*i,0],[i*s,0,i,a-a*s,i,a],[0,n-2*a],[0,a*s,-i*s,a,-i,a],[2*i-r,0],[-i*s,0,-i,-a*s,-i,-a],[0,2*a-n],[0,-a*s,i*s,-a,i,-a]],t+i,e,[1,1],o,!0),this},y.__private__.ellipse=y.ellipse=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Qe(i))throw new Error("Invalid arguments passed to jsPDF.ellipse");var a=4/3*(Math.SQRT2-1)*r,o=4/3*(Math.SQRT2-1)*n;return sr(t+r,e),ur(t+r,e-o,t+a,e-n,t,e-n),ur(t-a,e-n,t-r,e-o,t-r,e),ur(t-r,e+o,t-a,e+n,t,e+n),ur(t+a,e+n,t+r,e+o,t+r,e),nr(i),this},y.__private__.circle=y.circle=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||!Qe(n))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(t,e,r,r,n)},y.setFont=function(t,e,r){return r&&(e=k(e,r)),St=qe(t,e,{disableWarning:!1}),this};var hr=y.__private__.getFont=y.getFont=function(){return Ft[qe.apply(y,arguments)]};y.__private__.getFontList=y.getFontList=function(){var t,e,r={};for(t in Ct)if(Ct.hasOwnProperty(t))for(e in r[t]=[],Ct[t])Ct[t].hasOwnProperty(e)&&r[t].push(e);return r},y.addFont=function(t,e,r,n,i){var a=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&-1!==a.indexOf(arguments[3])?i=arguments[3]:arguments[3]&&-1==a.indexOf(arguments[3])&&(r=k(r,n)),i=i||"Identity-H",Pe.call(this,t,e,r,i)};var lr,fr=e.lineWidth||.200025,dr=y.__private__.getLineWidth=y.getLineWidth=function(){return fr},pr=y.__private__.setLineWidth=y.setLineWidth=function(t){return fr=t,lt(O(U(t))+" w"),this};y.__private__.setLineDash=E.API.setLineDash=E.API.setLineDashPattern=function(t,e){if(t=t||[],e=e||0,isNaN(e)||!Array.isArray(t))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return t=t.map((function(t){return O(U(t))})).join(" "),e=O(U(e)),lt("["+t+"] "+e+" d"),this};var gr=y.__private__.getLineHeight=y.getLineHeight=function(){return gt*lr};y.__private__.getLineHeight=y.getLineHeight=function(){return gt*lr};var mr=y.__private__.setLineHeightFactor=y.setLineHeightFactor=function(t){return"number"==typeof(t=t||1.15)&&(lr=t),this},vr=y.__private__.getLineHeightFactor=y.getLineHeightFactor=function(){return lr};mr(e.lineHeight);var br=y.__private__.getHorizontalCoordinate=function(t){return U(t)},yr=y.__private__.getVerticalCoordinate=function(t){return S===x.ADVANCED?t:Rt[$].mediaBox.topRightY-Rt[$].mediaBox.bottomLeftY-U(t)},wr=y.__private__.getHorizontalCoordinateString=y.getHorizontalCoordinateString=function(t){return O(br(t))},Nr=y.__private__.getVerticalCoordinateString=y.getVerticalCoordinateString=function(t){return O(yr(t))},Lr=e.strokeColor||"0 G";y.__private__.getStrokeColor=y.getDrawColor=function(){return ee(Lr)},y.__private__.setStrokeColor=y.setDrawColor=function(t,e,r,n){return Lr=re({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"draw",precision:2}),lt(Lr),this};var Ar=e.fillColor||"0 g";y.__private__.getFillColor=y.getFillColor=function(){return ee(Ar)},y.__private__.setFillColor=y.setFillColor=function(t,e,r,n){return Ar=re({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"fill",precision:2}),lt(Ar),this};var xr=e.textColor||"0 g",Sr=y.__private__.getTextColor=y.getTextColor=function(){return ee(xr)};y.__private__.setTextColor=y.setTextColor=function(t,e,r,n){return xr=re({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"text",precision:3}),this};var _r=e.charSpace,Pr=y.__private__.getCharSpace=y.getCharSpace=function(){return parseFloat(_r||0)};y.__private__.setCharSpace=y.setCharSpace=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return _r=t,this};var kr=0;y.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},y.__private__.setLineCap=y.setLineCap=function(t){var e=y.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return kr=e,lt(e+" J"),this};var Ir=0;y.__private__.setLineJoin=y.setLineJoin=function(t){var e=y.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Ir=e,lt(e+" j"),this},y.__private__.setLineMiterLimit=y.__private__.setMiterLimit=y.setLineMiterLimit=y.setMiterLimit=function(t){if(t=t||0,isNaN(t))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return lt(O(U(t))+" M"),this},y.GState=j,y.setGState=function(t){(t="string"==typeof t?Mt[Et[t]]:Fr(null,t)).equals(qt)||(lt("/"+t.id+" gs"),qt=t)};var Fr=function(t,e){if(!t||!Et[t]){var r=!1;for(var n in Mt)if(Mt.hasOwnProperty(n)&&Mt[n].equals(e)){r=!0;break}if(r)e=Mt[n];else{var i="GS"+(Object.keys(Mt).length+1).toString(10);Mt[i]=e,e.id=i}return t&&(Et[t]=e.id),Tt.publish("addGState",e),e}};y.addGState=function(t,e){return Fr(t,e),this},y.saveGraphicsState=function(){return lt("q"),jt.push({key:St,size:gt,color:xr}),this},y.restoreGraphicsState=function(){lt("Q");var t=jt.pop();return St=t.key,gt=t.size,xr=t.color,qt=null,this},y.setCurrentTransformationMatrix=function(t){return lt(t.toString()+" cm"),this},y.comment=function(t){return lt("#"+t),this};var Cr=function(t,e){var r=t||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return r},set:function(t){isNaN(t)||(r=parseFloat(t))}});var n=e||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return n},set:function(t){isNaN(t)||(n=parseFloat(t))}});var i="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return i},set:function(t){i=t.toString()}}),this},jr=function(t,e,r,n){Cr.call(this,t,e),this.type="rect";var i=r||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return i},set:function(t){isNaN(t)||(i=parseFloat(t))}});var a=n||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return a},set:function(t){isNaN(t)||(a=parseFloat(t))}}),this},Or=function(){this.page=Dt,this.currentPage=$,this.pages=ot.slice(0),this.pagesContext=Rt.slice(0),this.x=Pt,this.y=kt,this.matrix=It,this.width=qr($),this.height=Rr($),this.outputDestination=ct,this.id="",this.objectNumber=-1};Or.prototype.restore=function(){Dt=this.page,$=this.currentPage,Rt=this.pagesContext,ot=this.pages,Pt=this.x,kt=this.y,It=this.matrix,Dr($,this.width),Tr($,this.height),ct=this.outputDestination};var Br=function(t,e,r,n,i){Wt.push(new Or),Dt=$=0,ot=[],Pt=t,kt=e,It=i,je([r,n])},Mr=function(t){if(Ht[t])Wt.pop().restore();else{var e=new Or,r="Xo"+(Object.keys(zt).length+1).toString(10);e.id=r,Ht[t]=r,zt[r]=e,Tt.publish("addFormObject",e),Wt.pop().restore()}};for(var Er in y.beginFormObject=function(t,e,r,n,i){return Br(t,e,r,n,i),this},y.endFormObject=function(t){return Mr(t),this},y.doFormObject=function(t,e){var r=zt[Ht[t]];return lt("q"),lt(e.toString()+" cm"),lt("/"+r.id+" Do"),lt("Q"),this},y.getFormObject=function(t){var e=zt[Ht[t]];return{x:e.x,y:e.y,width:e.width,height:e.height,matrix:e.matrix}},y.save=function(t,e){return t=t||"generated.pdf",(e=e||{}).returnPromise=e.returnPromise||!1,!1===e.returnPromise?(l(We(He()),t),"function"==typeof l.unload&&n.setTimeout&&setTimeout(l.unload,911),this):new Promise((function(e,r){try{var i=l(We(He()),t);"function"==typeof l.unload&&n.setTimeout&&setTimeout(l.unload,911),e(i)}catch(t){r(t.message)}}))},E.API)E.API.hasOwnProperty(Er)&&("events"===Er&&E.API.events.length?function(t,e){var r,n,i;for(i=e.length-1;-1!==i;i--)r=e[i][0],n=e[i][1],t.subscribe.apply(t,[r].concat("function"==typeof n?[n]:n))}(Tt,E.API.events):y[Er]=E.API[Er]);var qr=y.getPageWidth=function(t){return(Rt[t=t||$].mediaBox.topRightX-Rt[t].mediaBox.bottomLeftX)/_t},Dr=y.setPageWidth=function(t,e){Rt[t].mediaBox.topRightX=e*_t+Rt[t].mediaBox.bottomLeftX},Rr=y.getPageHeight=function(t){return(Rt[t=t||$].mediaBox.topRightY-Rt[t].mediaBox.bottomLeftY)/_t},Tr=y.setPageHeight=function(t,e){Rt[t].mediaBox.topRightY=e*_t+Rt[t].mediaBox.bottomLeftY};return y.internal={pdfEscape:Ce,getStyle:tr,getFont:hr,getFontSize:vt,getCharSpace:Pr,getTextColor:Sr,getLineHeight:gr,getLineHeightFactor:vr,getLineWidth:dr,write:ft,getHorizontalCoordinate:br,getVerticalCoordinate:yr,getCoordinateString:wr,getVerticalCoordinateString:Nr,collections:{},newObject:Xt,newAdditionalObject:$t,newObjectDeferred:Kt,newObjectDeferredBegin:Zt,getFilters:ne,putStream:ie,events:Tt,scaleFactor:_t,pageSize:{getWidth:function(){return qr($)},setWidth:function(t){Dr($,t)},getHeight:function(){return Rr($)},setHeight:function(t){Tr($,t)}},encryptionOptions:m,encryption:Ye,getEncryptor:Je,output:Ve,getNumberOfPages:Ee,pages:ot,out:lt,f2:R,f3:T,getPageInfo:Xe,getPageInfoByObjId:Ke,getCurrentPageInfo:Ze,getPDFVersion:N,Point:Cr,Rectangle:jr,Matrix:Vt,hasHotfix:Ge},Object.defineProperty(y.internal.pageSize,"width",{get:function(){return qr($)},set:function(t){Dr($,t)},enumerable:!0,configurable:!0}),Object.defineProperty(y.internal.pageSize,"height",{get:function(){return Rr($)},set:function(t){Tr($,t)},enumerable:!0,configurable:!0}),ke.call(y,pt),St="F1",Oe(s,i),Tt.publish("initialized"),y}I.prototype.lsbFirstWord=function(t){return String.fromCharCode(t>>0&255,t>>8&255,t>>16&255,t>>24&255)},I.prototype.toHexString=function(t){return t.split("").map((function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)})).join("")},I.prototype.hexToBytes=function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(String.fromCharCode(parseInt(t.substr(r,2),16)));return e.join("")},I.prototype.processOwnerPassword=function(t,e){return P(x(e).substr(0,5),t)},I.prototype.encryptor=function(t,e){var r=x(this.encryptionKey+String.fromCharCode(255&t,t>>8&255,t>>16&255,255&e,e>>8&255)).substr(0,10);return function(t){return P(r,t)}},j.prototype.equals=function(e){var r,n="id,objectNumber,equals";if(!e||_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)!==_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this))return!1;var i=0;for(r in this)if(!(n.indexOf(r)>=0)){if(this.hasOwnProperty(r)&&!e.hasOwnProperty(r))return!1;if(this[r]!==e[r])return!1;i++}for(r in e)e.hasOwnProperty(r)&&n.indexOf(r)<0&&i--;return 0===i},E.API={events:[]},E.version="2.5.1";var q=E.API,D=1,R=function(t){return t.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},T=function(t){return t.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},U=function(t){return t.toFixed(2)},z=function(t){return t.toFixed(5)};q.__acroform__={};var H=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},W=function(t){return t*D},V=function(t){var e=new ut,r=At.internal.getHeight(t)||0,n=At.internal.getWidth(t)||0;return e.BBox=[0,0,Number(U(n)),Number(U(r))],e},G=q.__acroform__.setBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return t|=1<<e},Y=q.__acroform__.clearBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return t&=~(1<<e)},J=q.__acroform__.getBit=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return 0==(t&1<<e)?0:1},X=q.__acroform__.getBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return J(t,e-1)},K=q.__acroform__.setBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return G(t,e-1)},Z=q.__acroform__.clearBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return Y(t,e-1)},$=q.__acroform__.calculateCoordinates=function(t,e){var r=e.internal.getHorizontalCoordinate,n=e.internal.getVerticalCoordinate,i=t[0],a=t[1],o=t[2],s=t[3],c={};return c.lowerLeft_X=r(i)||0,c.lowerLeft_Y=n(a+s)||0,c.upperRight_X=r(i+o)||0,c.upperRight_Y=n(a)||0,[Number(U(c.lowerLeft_X)),Number(U(c.lowerLeft_Y)),Number(U(c.upperRight_X)),Number(U(c.upperRight_Y))]},Q=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e=[],r=t._V||t.DV,n=tt(t,r),i=t.scope.internal.getFont(t.fontName,t.fontStyle).id;e.push("/Tx BMC"),e.push("q"),e.push("BT"),e.push(t.scope.__private__.encodeColorString(t.color)),e.push("/"+i+" "+U(n.fontSize)+" Tf"),e.push("1 0 0 1 0 0 Tm"),e.push(n.text),e.push("ET"),e.push("Q"),e.push("EMC");var a=V(t);return a.scope=t.scope,a.stream=e.join("\n"),a}},tt=function(t,e){var r=0===t.fontSize?t.maxFontSize:t.fontSize,n={text:"",fontSize:""},i=(e=")"==(e="("==e.substr(0,1)?e.substr(1):e).substr(e.length-1)?e.substr(0,e.length-1):e).split(" ");i=t.multiline?i.map((function(t){return t.split("\n")})):i.map((function(t){return[t]}));var a=r,o=At.internal.getHeight(t)||0;o=o<0?-o:o;var s=At.internal.getWidth(t)||0;s=s<0?-s:s;var c=function(e,r,n){if(e+1<i.length){var a=r+" "+i[e+1][0];return et(a,t,n).width<=s-4}return!1};a++;t:for(;a>0;){e="",a--;var u,h,l=et("3",t,a).height,f=t.multiline?o-a:(o-l)/2,d=f+=2,p=0,g=0,m=0;if(a<=0){e="(...) Tj\n",e+="% Width of Text: "+et(e,t,a=12).width+", FieldWidth:"+s+"\n";break}for(var v="",b=0,y=0;y<i.length;y++)if(i.hasOwnProperty(y)){var w=!1;if(1!==i[y].length&&m!==i[y].length-1){if((l+2)*(b+2)+2>o)continue t;v+=i[y][m],w=!0,g=y,y--}else{v=" "==(v+=i[y][m]+" ").substr(v.length-1)?v.substr(0,v.length-1):v;var N=parseInt(y),L=c(N,v,a),A=y>=i.length-1;if(L&&!A){v+=" ",m=0;continue}if(L||A){if(A)g=N;else if(t.multiline&&(l+2)*(b+2)+2>o)continue t}else{if(!t.multiline)continue t;if((l+2)*(b+2)+2>o)continue t;g=N}}for(var x="",S=p;S<=g;S++){var _=i[S];if(t.multiline){if(S===g){x+=_[m]+" ",m=(m+1)%_.length;continue}if(S===p){x+=_[_.length-1]+" ";continue}}x+=_[0]+" "}switch(x=" "==x.substr(x.length-1)?x.substr(0,x.length-1):x,h=et(x,t,a).width,t.textAlign){case"right":u=s-h-2;break;case"center":u=(s-h)/2;break;case"left":default:u=2}e+=U(u)+" "+U(d)+" Td\n",e+="("+R(x)+") Tj\n",e+=-U(u)+" 0 Td\n",d=-(a+2),h=0,p=w?g:g+1,b++,v=""}else;break}return n.text=e,n.fontSize=a,n},et=function(t,e,r){var n=e.scope.internal.getFont(e.fontName,e.fontStyle),i=e.scope.getStringUnitWidth(t,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:e.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:i}},rt={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},nt=function(t,e){var r={type:"reference",object:t};void 0===e.internal.getPageInfo(t.page).pageContext.annotations.find((function(t){return t.type===r.type&&t.object===r.object}))&&e.internal.getPageInfo(t.page).pageContext.annotations.push(r)},it=function(e,r){for(var n in e)if(e.hasOwnProperty(n)){var i=n,a=e[n];r.internal.newObjectDeferredBegin(a.objId,!0),"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a)&&"function"==typeof a.putStream&&a.putStream(),delete e[i]}},at=function(e,r){if(r.scope=e,void 0!==e.internal&&(void 0===e.internal.acroformPlugin||!1===e.internal.acroformPlugin.isInitialized)){if(lt.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(rt)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");D=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new ht,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",(function(){!function(t){t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID,t.internal.acroformPlugin.printedOut=!0}(e)})),e.internal.events.subscribe("buildDocument",(function(){!function(t){t.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var e=t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];n.objId=void 0,n.hasAnnotation&&nt(n,t)}}(e)})),e.internal.events.subscribe("putCatalog",(function(){!function(t){if(void 0===t.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("putCatalogCallback: Root missing.");t.internal.write("/AcroForm "+t.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")}(e)})),e.internal.events.subscribe("postPutPages",(function(r){!function(e,r){var n=!e;for(var i in e||(r.internal.newObjectDeferredBegin(r.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),r.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),e=e||r.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(e.hasOwnProperty(i)){var a=e[i],o=[],s=a.Rect;if(a.Rect&&(a.Rect=$(a.Rect,r)),r.internal.newObjectDeferredBegin(a.objId,!0),a.DA=At.createDefaultAppearanceStream(a),"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a)&&"function"==typeof a.getKeyValueListForStream&&(o=a.getKeyValueListForStream()),a.Rect=s,a.hasAppearanceStream&&!a.appearanceStreamContent){var c=Q(a);o.push({key:"AP",value:"<</N "+c+">>"}),r.internal.acroformPlugin.xForms.push(c)}if(a.appearanceStreamContent){var u="";for(var h in a.appearanceStreamContent)if(a.appearanceStreamContent.hasOwnProperty(h)){var l=a.appearanceStreamContent[h];if(u+="/"+h+" ",u+="<<",Object.keys(l).length>=1||Array.isArray(l)){for(var i in l)if(l.hasOwnProperty(i)){var f=l[i];"function"==typeof f&&(f=f.call(r,a)),u+="/"+i+" "+f+" ",r.internal.acroformPlugin.xForms.indexOf(f)>=0||r.internal.acroformPlugin.xForms.push(f)}}else"function"==typeof(f=l)&&(f=f.call(r,a)),u+="/"+i+" "+f,r.internal.acroformPlugin.xForms.indexOf(f)>=0||r.internal.acroformPlugin.xForms.push(f);u+=">>"}o.push({key:"AP",value:"<<\n"+u+">>"})}r.internal.putStream({additionalKeyValues:o,objectId:a.objId}),r.internal.out("endobj")}n&&it(r.internal.acroformPlugin.xForms,r)}(r,e)})),e.internal.acroformPlugin.isInitialized=!0}},ot=q.__acroform__.arrayToPdfArray=function(e,r,n){var i=function(t){return t};if(Array.isArray(e)){for(var a="[",o=0;o<e.length;o++)switch(0!==o&&(a+=" "),_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e[o])){case"boolean":case"number":case"object":a+=e[o].toString();break;case"string":"/"!==e[o].substr(0,1)?(void 0!==r&&n&&(i=n.internal.getEncryptor(r)),a+="("+R(i(e[o].toString()))+")"):a+=e[o].toString()}return a+="]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")};var st=function(t,e,r){var n=function(t){return t};return void 0!==e&&r&&(n=r.internal.getEncryptor(e)),(t=t||"").toString(),t="("+R(n(t))+")"},ct=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(void 0===this._objId){if(void 0===this.scope)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(t){this._objId=t}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};ct.prototype.toString=function(){return this.objId+" 0 R"},ct.prototype.putStream=function(){var t=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:t,objectId:this.objId}),this.scope.internal.out("endobj")},ct.prototype.getKeyValueListForStream=function(){var t=[],e=Object.getOwnPropertyNames(this).filter((function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"scope"!=t&&"objId"!=t&&"_"!=t.substring(0,1)}));for(var r in e)if(!1===Object.getOwnPropertyDescriptor(this,e[r]).configurable){var n=e[r],i=this[n];i&&(Array.isArray(i)?t.push({key:n,value:ot(i,this.objId,this.scope)}):i instanceof ct?(i.scope=this.scope,t.push({key:n,value:i.objId+" 0 R"})):"function"!=typeof i&&t.push({key:n,value:i}))}return t};var ut=function(){ct.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var t,e=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(e){t=e.trim()},get:function(){return t||null}})};H(ut,ct);var ht=function(){ct.call(this);var t,e=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return e.length>0?e:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return e}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(t){var e=function(t){return t};return this.scope&&(e=this.scope.internal.getEncryptor(this.objId)),"("+R(e(t))+")"}},set:function(e){t=e}})};H(ht,ct);var lt=function t(){ct.call(this);var e=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute F supplied.');e=t}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(e,3))},set:function(t){!0===Boolean(t)?this.F=K(e,3):this.F=Z(e,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute Ff supplied.');r=t}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(0!==n.length)return n},set:function(t){n=void 0!==t?t:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(t){n[0]=t}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(t){n[1]=t}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(t){n[2]=t}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(t){n[3]=t}});var i="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return i},set:function(t){switch(t){case"/Btn":case"/Tx":case"/Ch":case"/Sig":i=t;break;default:throw new Error('Invalid value "'+t+'" for attribute FT supplied.')}}});var a=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!a||a.length<1){if(this instanceof yt)return;a="FieldObject"+t.FieldNum++}var e=function(t){return t};return this.scope&&(e=this.scope.internal.getEncryptor(this.objId)),"("+R(e(a))+")"},set:function(t){a=t.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return a},set:function(t){a=t}});var o="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return o},set:function(t){o=t}});var s="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return s},set:function(t){s=t}});var c=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return c},set:function(t){c=t}});var u=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return void 0===u?50/D:u},set:function(t){u=t}});var h="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return h},set:function(t){h=t}});var l="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!l||this instanceof yt||this instanceof Nt))return st(l,this.objId,this.scope)},set:function(t){t=t.toString(),l=t}});var f=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(f)return this instanceof mt==!1?st(f,this.objId,this.scope):f},set:function(t){t=t.toString(),f=this instanceof mt==!1?"("===t.substr(0,1)?T(t.substr(1,t.length-2)):T(t):t}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof mt==!0?T(f.substr(1,f.length-1)):f},set:function(t){t=t.toString(),f=this instanceof mt==!0?"/"+t:t}});var d=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(d)return d},set:function(t){this.V=t}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(d)return this instanceof mt==!1?st(d,this.objId,this.scope):d},set:function(t){t=t.toString(),d=this instanceof mt==!1?"("===t.substr(0,1)?T(t.substr(1,t.length-2)):T(t):t}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof mt==!0?T(d.substr(1,d.length-1)):d},set:function(t){t=t.toString(),d=this instanceof mt==!0?"/"+t:t}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var p,g=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return g},set:function(t){t=Boolean(t),g=t}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(p)return p},set:function(t){p=t}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,1))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,1):this.Ff=Z(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,2))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,2):this.Ff=Z(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,3))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,3):this.Ff=Z(this.Ff,3)}});var m=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(null!==m)return m},set:function(t){if(-1===[0,1,2].indexOf(t))throw new Error('Invalid value "'+t+'" for attribute Q supplied.');m=t}}),Object.defineProperty(this,"textAlign",{get:function(){var t;switch(m){case 0:default:t="left";break;case 1:t="center";break;case 2:t="right"}return t},configurable:!0,enumerable:!0,set:function(t){switch(t){case"right":case 2:m=2;break;case"center":case 1:m=1;break;case"left":case 0:default:m=0}}})};H(lt,ct);var ft=function(){lt.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var t=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){t=e}});var e=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return ot(e,this.objId,this.scope)},set:function(t){var r,n;n=[],"string"==typeof(r=t)&&(n=function(t,e,r){r||(r=1);for(var n,i=[];n=e.exec(t);)i.push(n[r]);return i}(r,/\((.*?)\)/g)),e=n}}),this.getOptions=function(){return e},this.setOptions=function(t){e=t,this.sort&&e.sort()},this.addOption=function(t){t=(t=t||"").toString(),e.push(t),this.sort&&e.sort()},this.removeOption=function(t,r){for(r=r||!1,t=(t=t||"").toString();-1!==e.indexOf(t)&&(e.splice(e.indexOf(t),1),!1!==r););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,18))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,18):this.Ff=Z(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,19))},set:function(t){!0===this.combo&&(!0===Boolean(t)?this.Ff=K(this.Ff,19):this.Ff=Z(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,20))},set:function(t){!0===Boolean(t)?(this.Ff=K(this.Ff,20),e.sort()):this.Ff=Z(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,22))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,22):this.Ff=Z(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,23):this.Ff=Z(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,27))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,27):this.Ff=Z(this.Ff,27)}}),this.hasAppearanceStream=!1};H(ft,lt);var dt=function(){ft.call(this),this.fontName="helvetica",this.combo=!1};H(dt,ft);var pt=function(){dt.call(this),this.combo=!0};H(pt,dt);var gt=function(){pt.call(this),this.edit=!0};H(gt,pt);var mt=function(){lt.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,15))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,15):this.Ff=Z(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,16))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,16):this.Ff=Z(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,17))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,17):this.Ff=Z(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,26):this.Ff=Z(this.Ff,26)}});var e,r={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t=function(t){return t};if(this.scope&&(t=this.scope.internal.getEncryptor(this.objId)),0!==Object.keys(r).length){var e,n=[];for(e in n.push("<<"),r)n.push("/"+e+" ("+R(t(r[e]))+")");return n.push(">>"),n.join("\n")}},set:function(e){"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)&&(r=e)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return r.CA||""},set:function(t){"string"==typeof t&&(r.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(t){e="/"+t}})};H(mt,lt);var vt=function(){mt.call(this),this.pushButton=!0};H(vt,mt);var bt=function(){mt.call(this),this.radio=!0,this.pushButton=!1;var t=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=void 0!==e?e:[]}})};H(bt,mt);var yt=function(){var e,r;lt.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t}});var n,i={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t=function(t){return t};this.scope&&(t=this.scope.internal.getEncryptor(this.objId));var e,r=[];for(e in r.push("<<"),i)r.push("/"+e+" ("+R(t(i[e]))+")");return r.push(">>"),r.join("\n")},set:function(e){"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)&&(i=e)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return i.CA||""},set:function(t){"string"==typeof t&&(i.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return n},set:function(t){n=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return n.substr(1,n.length-1)},set:function(t){n="/"+t}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=At.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};H(yt,lt),bt.prototype.setAppearance=function(t){if(!("createAppearanceStream"in t)||!("getCA"in t))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var e in this.Kids)if(this.Kids.hasOwnProperty(e)){var r=this.Kids[e];r.appearanceStreamContent=t.createAppearanceStream(r.optionName),r.caption=t.getCA()}},bt.prototype.createOption=function(t){var e=new yt;return e.Parent=this,e.optionName=t,this.Kids.push(e),xt.call(this.scope,e),e};var wt=function(){mt.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=At.CheckBox.createAppearanceStream()};H(wt,mt);var Nt=function(){lt.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,13))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,13):this.Ff=Z(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,21))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,21):this.Ff=Z(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,23):this.Ff=Z(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,24))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,24):this.Ff=Z(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,25))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,25):this.Ff=Z(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,26):this.Ff=Z(this.Ff,26)}});var t=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){Number.isInteger(e)&&(t=e)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};H(Nt,lt);var Lt=function(){Nt.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return Boolean(X(this.Ff,14))},set:function(t){!0===Boolean(t)?this.Ff=K(this.Ff,14):this.Ff=Z(this.Ff,14)}}),this.password=!0};H(Lt,Nt);var At={CheckBox:{createAppearanceStream:function(){return{N:{On:At.CheckBox.YesNormal},D:{On:At.CheckBox.YesPushDown,Off:At.CheckBox.OffPushDown}}},YesPushDown:function(t){var e=V(t);e.scope=t.scope;var r=[],n=t.scope.internal.getFont(t.fontName,t.fontStyle).id,i=t.scope.__private__.encodeColorString(t.color),a=tt(t,t.caption);return r.push("0.749023 g"),r.push("0 0 "+U(At.internal.getWidth(t))+" "+U(At.internal.getHeight(t))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+U(a.fontSize)+" Tf "+i),r.push("BT"),r.push(a.text),r.push("ET"),r.push("Q"),r.push("EMC"),e.stream=r.join("\n"),e},YesNormal:function(t){var e=V(t);e.scope=t.scope;var r=t.scope.internal.getFont(t.fontName,t.fontStyle).id,n=t.scope.__private__.encodeColorString(t.color),i=[],a=At.internal.getHeight(t),o=At.internal.getWidth(t),s=tt(t,t.caption);return i.push("1 g"),i.push("0 0 "+U(o)+" "+U(a)+" re"),i.push("f"),i.push("q"),i.push("0 0 1 rg"),i.push("0 0 "+U(o-1)+" "+U(a-1)+" re"),i.push("W"),i.push("n"),i.push("0 g"),i.push("BT"),i.push("/"+r+" "+U(s.fontSize)+" Tf "+n),i.push(s.text),i.push("ET"),i.push("Q"),e.stream=i.join("\n"),e},OffPushDown:function(t){var e=V(t);e.scope=t.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+U(At.internal.getWidth(t))+" "+U(At.internal.getHeight(t))+" re"),r.push("f"),e.stream=r.join("\n"),e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:At.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=At.RadioButton.Circle.YesNormal,e.D[t]=At.RadioButton.Circle.YesPushDown,e},getCA:function(){return"l"},YesNormal:function(t){var e=V(t);e.scope=t.scope;var r=[],n=At.internal.getWidth(t)<=At.internal.getHeight(t)?At.internal.getWidth(t)/4:At.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=At.internal.Bezier_C,a=Number((n*i).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+z(At.internal.getWidth(t)/2)+" "+z(At.internal.getHeight(t)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+a+" "+a+" "+n+" 0 "+n+" c"),r.push("-"+a+" "+n+" -"+n+" "+a+" -"+n+" 0 c"),r.push("-"+n+" -"+a+" -"+a+" -"+n+" 0 -"+n+" c"),r.push(a+" -"+n+" "+n+" -"+a+" "+n+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e},YesPushDown:function(t){var e=V(t);e.scope=t.scope;var r=[],n=At.internal.getWidth(t)<=At.internal.getHeight(t)?At.internal.getWidth(t)/4:At.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=Number((2*n).toFixed(5)),a=Number((i*At.internal.Bezier_C).toFixed(5)),o=Number((n*At.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+z(At.internal.getWidth(t)/2)+" "+z(At.internal.getHeight(t)/2)+" cm"),r.push(i+" 0 m"),r.push(i+" "+a+" "+a+" "+i+" 0 "+i+" c"),r.push("-"+a+" "+i+" -"+i+" "+a+" -"+i+" 0 c"),r.push("-"+i+" -"+a+" -"+a+" -"+i+" 0 -"+i+" c"),r.push(a+" -"+i+" "+i+" -"+a+" "+i+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+z(At.internal.getWidth(t)/2)+" "+z(At.internal.getHeight(t)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+o+" "+o+" "+n+" 0 "+n+" c"),r.push("-"+o+" "+n+" -"+n+" "+o+" -"+n+" 0 c"),r.push("-"+n+" -"+o+" -"+o+" -"+n+" 0 -"+n+" c"),r.push(o+" -"+n+" "+n+" -"+o+" "+n+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e},OffPushDown:function(t){var e=V(t);e.scope=t.scope;var r=[],n=At.internal.getWidth(t)<=At.internal.getHeight(t)?At.internal.getWidth(t)/4:At.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=Number((2*n).toFixed(5)),a=Number((i*At.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+z(At.internal.getWidth(t)/2)+" "+z(At.internal.getHeight(t)/2)+" cm"),r.push(i+" 0 m"),r.push(i+" "+a+" "+a+" "+i+" 0 "+i+" c"),r.push("-"+a+" "+i+" -"+i+" "+a+" -"+i+" 0 c"),r.push("-"+i+" -"+a+" -"+a+" -"+i+" 0 -"+i+" c"),r.push(a+" -"+i+" "+i+" -"+a+" "+i+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:At.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=At.RadioButton.Cross.YesNormal,e.D[t]=At.RadioButton.Cross.YesPushDown,e},getCA:function(){return"8"},YesNormal:function(t){var e=V(t);e.scope=t.scope;var r=[],n=At.internal.calculateCross(t);return r.push("q"),r.push("1 1 "+U(At.internal.getWidth(t)-2)+" "+U(At.internal.getHeight(t)-2)+" re"),r.push("W"),r.push("n"),r.push(U(n.x1.x)+" "+U(n.x1.y)+" m"),r.push(U(n.x2.x)+" "+U(n.x2.y)+" l"),r.push(U(n.x4.x)+" "+U(n.x4.y)+" m"),r.push(U(n.x3.x)+" "+U(n.x3.y)+" l"),r.push("s"),r.push("Q"),e.stream=r.join("\n"),e},YesPushDown:function(t){var e=V(t);e.scope=t.scope;var r=At.internal.calculateCross(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+U(At.internal.getWidth(t))+" "+U(At.internal.getHeight(t))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+U(At.internal.getWidth(t)-2)+" "+U(At.internal.getHeight(t)-2)+" re"),n.push("W"),n.push("n"),n.push(U(r.x1.x)+" "+U(r.x1.y)+" m"),n.push(U(r.x2.x)+" "+U(r.x2.y)+" l"),n.push(U(r.x4.x)+" "+U(r.x4.y)+" m"),n.push(U(r.x3.x)+" "+U(r.x3.y)+" l"),n.push("s"),n.push("Q"),e.stream=n.join("\n"),e},OffPushDown:function(t){var e=V(t);e.scope=t.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+U(At.internal.getWidth(t))+" "+U(At.internal.getHeight(t))+" re"),r.push("f"),e.stream=r.join("\n"),e}}},createDefaultAppearanceStream:function(t){var e=t.scope.internal.getFont(t.fontName,t.fontStyle).id,r=t.scope.__private__.encodeColorString(t.color);return"/"+e+" "+t.fontSize+" Tf "+r}};At.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=At.internal.getWidth(t),r=At.internal.getHeight(t),n=Math.min(e,r);return{x1:{x:(e-n)/2,y:(r-n)/2+n},x2:{x:(e-n)/2+n,y:(r-n)/2},x3:{x:(e-n)/2,y:(r-n)/2},x4:{x:(e-n)/2+n,y:(r-n)/2+n}}}},At.internal.getWidth=function(e){var r=0;return"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)&&(r=W(e.Rect[2])),r},At.internal.getHeight=function(e){var r=0;return"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)&&(r=W(e.Rect[3])),r};var xt=q.addField=function(t){if(at(this,t),!(t instanceof lt))throw new Error("Invalid argument passed to jsPDF.addField.");var e;return(e=t).scope.internal.acroformPlugin.printedOut&&(e.scope.internal.acroformPlugin.printedOut=!1,e.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),t.page=t.scope.internal.getCurrentPageInfo().pageNumber,this};q.AcroFormChoiceField=ft,q.AcroFormListBox=dt,q.AcroFormComboBox=pt,q.AcroFormEditBox=gt,q.AcroFormButton=mt,q.AcroFormPushButton=vt,q.AcroFormRadioButton=bt,q.AcroFormCheckBox=wt,q.AcroFormTextField=Nt,q.AcroFormPasswordField=Lt,q.AcroFormAppearance=At,q.AcroForm={ChoiceField:ft,ListBox:dt,ComboBox:pt,EditBox:gt,Button:mt,PushButton:vt,RadioButton:bt,CheckBox:wt,TextField:Nt,PasswordField:Lt,Appearance:At},E.AcroForm={ChoiceField:ft,ListBox:dt,ComboBox:pt,EditBox:gt,Button:mt,PushButton:vt,RadioButton:bt,CheckBox:wt,TextField:Nt,PasswordField:Lt,Appearance:At};var St=E.AcroForm;function _t(t){return t.reduce((function(t,e,r){return t[e]=r,t}),{})}!function(e){e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},i=e.__addimage__.getImageFileTypeByImageData=function(t,e){var i,a,o,s,c,u=r;if("RGBA"===(e=e||r)||void 0!==t.data&&t.data instanceof Uint8ClampedArray&&"height"in t&&"width"in t)return"RGBA";if(x(t))for(c in n)for(o=n[c],i=0;i<o.length;i+=1){for(s=!0,a=0;a<o[i].length;a+=1)if(void 0!==o[i][a]&&o[i][a]!==t[a]){s=!1;break}if(!0===s){u=c;break}}else for(c in n)for(o=n[c],i=0;i<o.length;i+=1){for(s=!0,a=0;a<o[i].length;a+=1)if(void 0!==o[i][a]&&o[i][a]!==t.charCodeAt(a)){s=!1;break}if(!0===s){u=c;break}}return u===r&&e!==r&&(u=e),u},a=function t(e){for(var r=this.internal.write,n=this.internal.putStream,i=(0,this.internal.getFilters)();-1!==i.indexOf("FlateEncode");)i.splice(i.indexOf("FlateEncode"),1);e.objectId=this.internal.newObject();var a=[];if(a.push({key:"Type",value:"/XObject"}),a.push({key:"Subtype",value:"/Image"}),a.push({key:"Width",value:e.width}),a.push({key:"Height",value:e.height}),e.colorSpace===b.INDEXED?a.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(e.palette.length/3-1)+" "+("sMask"in e&&void 0!==e.sMask?e.objectId+2:e.objectId+1)+" 0 R]"}):(a.push({key:"ColorSpace",value:"/"+e.colorSpace}),e.colorSpace===b.DEVICE_CMYK&&a.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),a.push({key:"BitsPerComponent",value:e.bitsPerComponent}),"decodeParameters"in e&&void 0!==e.decodeParameters&&a.push({key:"DecodeParms",value:"<<"+e.decodeParameters+">>"}),"transparency"in e&&Array.isArray(e.transparency)){for(var o="",s=0,c=e.transparency.length;s<c;s++)o+=e.transparency[s]+" "+e.transparency[s]+" ";a.push({key:"Mask",value:"["+o+"]"})}void 0!==e.sMask&&a.push({key:"SMask",value:e.objectId+1+" 0 R"});var u=void 0!==e.filter?["/"+e.filter]:void 0;if(n({data:e.data,additionalKeyValues:a,alreadyAppliedFilters:u,objectId:e.objectId}),r("endobj"),"sMask"in e&&void 0!==e.sMask){var h="/Predictor "+e.predictor+" /Colors 1 /BitsPerComponent "+e.bitsPerComponent+" /Columns "+e.width,l={width:e.width,height:e.height,colorSpace:"DeviceGray",bitsPerComponent:e.bitsPerComponent,decodeParameters:h,data:e.sMask};"filter"in e&&(l.filter=e.filter),t.call(this,l)}if(e.colorSpace===b.INDEXED){var f=this.internal.newObject();n({data:_(new Uint8Array(e.palette)),objectId:f}),r("endobj")}},o=function(){var t=this.internal.collections.addImage_images;for(var e in t)a.call(this,t[e])},s=function(){var t,e=this.internal.collections.addImage_images,r=this.internal.write;for(var n in e)r("/I"+(t=e[n]).index,t.objectId,"0","R")},c=function(){this.internal.collections.addImage_images||(this.internal.collections.addImage_images={},this.internal.events.subscribe("putResources",o),this.internal.events.subscribe("putXobjectDict",s))},h=function(){var t=this.internal.collections.addImage_images;return c.call(this),t},l=function(){return Object.keys(this.internal.collections.addImage_images).length},f=function(t){return"function"==typeof e["process"+t.toUpperCase()]},d=function(e){return"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)&&1===e.nodeType},p=function(t,r){if("IMG"===t.nodeName&&t.hasAttribute("src")){var n=""+t.getAttribute("src");if(0===n.indexOf("data:image/"))return u(unescape(n).split("base64,").pop());var i=e.loadFile(n,!0);if(void 0!==i)return i}if("CANVAS"===t.nodeName){if(0===t.width||0===t.height)throw new Error("Given canvas must have data. Canvas width: "+t.width+", height: "+t.height);var a;switch(r){case"PNG":a="image/png";break;case"WEBP":a="image/webp";break;case"JPEG":case"JPG":default:a="image/jpeg"}return u(t.toDataURL(a,1).split("base64,").pop())}},g=function(t){var e=this.internal.collections.addImage_images;if(e)for(var r in e)if(t===e[r].alias)return e[r]},m=function(t,e,r){return t||e||(t=-96,e=-96),t<0&&(t=-1*r.width*72/t/this.internal.scaleFactor),e<0&&(e=-1*r.height*72/e/this.internal.scaleFactor),0===t&&(t=e*r.width/r.height),0===e&&(e=t*r.height/r.width),[t,e]},v=function(t,e,r,n,i,a){var o=m.call(this,r,n,i),s=this.internal.getCoordinateString,c=this.internal.getVerticalCoordinateString,u=h.call(this);if(r=o[0],n=o[1],u[i.index]=i,a){a*=Math.PI/180;var l=Math.cos(a),f=Math.sin(a),d=function(t){return t.toFixed(4)},p=[d(l),d(f),d(-1*f),d(l),0,0,"cm"]}this.internal.write("q"),a?(this.internal.write([1,"0","0",1,s(t),c(e+n),"cm"].join(" ")),this.internal.write(p.join(" ")),this.internal.write([s(r),"0","0",s(n),"0","0","cm"].join(" "))):this.internal.write([s(r),"0","0",s(n),s(t),c(e+n),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+i.index+" Do"),this.internal.write("Q")},b=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var y=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},w=e.__addimage__.sHashCode=function(t){var e,r,n=0;if("string"==typeof t)for(r=t.length,e=0;e<r;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;else if(x(t))for(r=t.byteLength/2,e=0;e<r;e++)n=(n<<5)-n+t[e],n|=0;return n},N=e.__addimage__.validateStringAsBase64=function(t){(t=t||"").toString().trim();var e=!0;return 0===t.length&&(e=!1),t.length%4!=0&&(e=!1),!1===/^[A-Za-z0-9+/]+$/.test(t.substr(0,t.length-2))&&(e=!1),!1===/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2))&&(e=!1),e},L=e.__addimage__.extractImageFromDataUrl=function(t){var e=(t=t||"").split("base64,"),r=null;if(2===e.length){var n=/^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(e[0]);Array.isArray(n)&&(r={mimeType:n[1],charset:n[2],data:e[1]})}return r},A=e.__addimage__.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array};e.__addimage__.isArrayBuffer=function(t){return A()&&t instanceof ArrayBuffer};var x=e.__addimage__.isArrayBufferView=function(t){return A()&&"undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)},S=e.__addimage__.binaryStringToUint8Array=function(t){for(var e=t.length,r=new Uint8Array(e),n=0;n<e;n++)r[n]=t.charCodeAt(n);return r},_=e.__addimage__.arrayBufferToBinaryString=function(t){for(var e="",r=x(t)?t:new Uint8Array(t),n=0;n<r.length;n+=8192)e+=String.fromCharCode.apply(null,r.subarray(n,n+8192));return e};e.addImage=function(){var e,n,i,a,o,s,u,h,l;if("number"==typeof arguments[1]?(n=r,i=arguments[1],a=arguments[2],o=arguments[3],s=arguments[4],u=arguments[5],h=arguments[6],l=arguments[7]):(n=arguments[1],i=arguments[2],a=arguments[3],o=arguments[4],s=arguments[5],u=arguments[6],h=arguments[7],l=arguments[8]),"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e=arguments[0])&&!d(e)&&"imageData"in e){var f=e;e=f.imageData,n=f.format||n||r,i=f.x||i||0,a=f.y||a||0,o=f.w||f.width||o,s=f.h||f.height||s,u=f.alias||u,h=f.compression||h,l=f.rotation||f.angle||l}var p=this.internal.getFilters();if(void 0===h&&-1!==p.indexOf("FlateEncode")&&(h="SLOW"),isNaN(i)||isNaN(a))throw new Error("Invalid coordinates passed to jsPDF.addImage");c.call(this);var g=P.call(this,e,n,u,h);return v.call(this,i,a,o,s,g,l),this};var P=function(t,n,a,o){var s,c,u;if("string"==typeof t&&i(t)===r){t=unescape(t);var h=k(t,!1);(""!==h||void 0!==(h=e.loadFile(t,!0)))&&(t=h)}if(d(t)&&(t=p(t,n)),n=i(t,n),!f(n))throw new Error("addImage does not support files of type '"+n+"', please ensure that a plugin for '"+n+"' support is added.");if((null==(u=a)||0===u.length)&&(a=function(t){return"string"==typeof t||x(t)?w(t):x(t.data)?w(t.data):null}(t)),(s=g.call(this,a))||(A()&&(t instanceof Uint8Array||"RGBA"===n||(c=t,t=S(t))),s=this["process"+n.toUpperCase()](t,l.call(this),a,function(t){return t&&"string"==typeof t&&(t=t.toUpperCase()),t in e.image_compression?t:y.NONE}(o),c)),!s)throw new Error("An unknown error occurred whilst processing the image.");return s},k=e.__addimage__.convertBase64ToBinaryString=function(t,e){var r;e="boolean"!=typeof e||e;var n,i="";if("string"==typeof t){n=null!==(r=L(t))?r.data:t;try{i=u(n)}catch(t){if(e)throw N(n)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+t.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return i};e.getImageProperties=function(t){var n,a,o="";if(d(t)&&(t=p(t)),"string"==typeof t&&i(t)===r&&(""===(o=k(t,!1))&&(o=e.loadFile(t)||""),t=o),a=i(t),!f(a))throw new Error("addImage does not support files of type '"+a+"', please ensure that a plugin for '"+a+"' support is added.");if(!A()||t instanceof Uint8Array||(t=S(t)),!(n=this["process"+a.toUpperCase()](t)))throw new Error("An unknown error occurred whilst processing the image");return n.fileType=a,n}}(E.API),
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(t){if(void 0!==t&&""!=t)return!0};E.API.events.push(["addPage",function(t){this.internal.getPageInfo(t.pageNumber).pageContext.annotations=[]}]),t.events.push(["putPage",function(t){for(var r,n,i,a=this.internal.getCoordinateString,o=this.internal.getVerticalCoordinateString,s=this.internal.getPageInfoByObjId(t.objId),c=t.pageContext.annotations,u=!1,h=0;h<c.length&&!u;h++)switch((r=c[h]).type){case"link":(e(r.options.url)||e(r.options.pageNumber))&&(u=!0);break;case"reference":case"text":case"freetext":u=!0}if(0!=u){this.internal.write("/Annots [");for(var l=0;l<c.length;l++){r=c[l];var f=this.internal.pdfEscape,d=this.internal.getEncryptor(t.objId);switch(r.type){case"reference":this.internal.write(" "+r.object.objId+" 0 R ");break;case"text":var p=this.internal.newAdditionalObject(),g=this.internal.newAdditionalObject(),m=this.internal.getEncryptor(p.objId),v=r.title||"Note";i="<</Type /Annot /Subtype /Text "+(n="/Rect ["+a(r.bounds.x)+" "+o(r.bounds.y+r.bounds.h)+" "+a(r.bounds.x+r.bounds.w)+" "+o(r.bounds.y)+"] ")+"/Contents ("+f(m(r.contents))+")",i+=" /Popup "+g.objId+" 0 R",i+=" /P "+s.objId+" 0 R",i+=" /T ("+f(m(v))+") >>",p.content=i;var b=p.objId+" 0 R";i="<</Type /Annot /Subtype /Popup "+(n="/Rect ["+a(r.bounds.x+30)+" "+o(r.bounds.y+r.bounds.h)+" "+a(r.bounds.x+r.bounds.w+30)+" "+o(r.bounds.y)+"] ")+" /Parent "+b,r.open&&(i+=" /Open true"),i+=" >>",g.content=i,this.internal.write(p.objId,"0 R",g.objId,"0 R");break;case"freetext":n="/Rect ["+a(r.bounds.x)+" "+o(r.bounds.y)+" "+a(r.bounds.x+r.bounds.w)+" "+o(r.bounds.y+r.bounds.h)+"] ";var y=r.color||"#000000";i="<</Type /Annot /Subtype /FreeText "+n+"/Contents ("+f(d(r.contents))+")",i+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+y+")",i+=" /Border [0 0 0]",i+=" >>",this.internal.write(i);break;case"link":if(r.options.name){var w=this.annotations._nameMap[r.options.name];r.options.pageNumber=w.page,r.options.top=w.y}else r.options.top||(r.options.top=0);if(n="/Rect ["+r.finalBounds.x+" "+r.finalBounds.y+" "+r.finalBounds.w+" "+r.finalBounds.h+"] ",i="",r.options.url)i="<</Type /Annot /Subtype /Link "+n+"/Border [0 0 0] /A <</S /URI /URI ("+f(d(r.options.url))+") >>";else if(r.options.pageNumber){switch(i="<</Type /Annot /Subtype /Link "+n+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(r.options.pageNumber).objId+" 0 R",r.options.magFactor=r.options.magFactor||"XYZ",r.options.magFactor){case"Fit":i+=" /Fit]";break;case"FitH":i+=" /FitH "+r.options.top+"]";break;case"FitV":r.options.left=r.options.left||0,i+=" /FitV "+r.options.left+"]";break;case"XYZ":default:var N=o(r.options.top);r.options.left=r.options.left||0,void 0===r.options.zoom&&(r.options.zoom=0),i+=" /XYZ "+r.options.left+" "+N+" "+r.options.zoom+"]"}}""!=i&&(i+=" >>",this.internal.write(i))}}this.internal.write("]")}}]),t.createAnnotation=function(t){var e=this.internal.getCurrentPageInfo();switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":e.pageContext.annotations.push(t)}},t.link=function(t,e,r,n,i){var a=this.internal.getCurrentPageInfo(),o=this.internal.getCoordinateString,s=this.internal.getVerticalCoordinateString;a.pageContext.annotations.push({finalBounds:{x:o(t),y:s(e),w:o(t+r),h:s(e+n)},options:i,type:"link"})},t.textWithLink=function(t,e,r,n){var i,a,o=this.getTextWidth(t),s=this.internal.getLineHeight()/this.internal.scaleFactor;if(void 0!==n.maxWidth){a=n.maxWidth;var c=this.splitTextToSize(t,a).length;i=Math.ceil(s*c)}else a=o,i=s;return this.text(t,e,r,n),r+=.2*s,"center"===n.align&&(e-=o/2),"right"===n.align&&(e-=o),this.link(e,r-s,a,i,n),o},t.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor}}(E.API),
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},i=[1570,1571,1573,1575];t.__arabicParser__={};var a=t.__arabicParser__.isInArabicSubstitutionA=function(t){return void 0!==e[t.charCodeAt(0)]},o=t.__arabicParser__.isArabicLetter=function(t){return"string"==typeof t&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)},s=t.__arabicParser__.isArabicEndLetter=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length<=2},c=t.__arabicParser__.isArabicAlfLetter=function(t){return o(t)&&i.indexOf(t.charCodeAt(0))>=0};t.__arabicParser__.arabicLetterHasIsolatedForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=1};var u=t.__arabicParser__.arabicLetterHasFinalForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=2};t.__arabicParser__.arabicLetterHasInitialForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=3};var h=t.__arabicParser__.arabicLetterHasMedialForm=function(t){return o(t)&&a(t)&&4==e[t.charCodeAt(0)].length},l=t.__arabicParser__.resolveLigatures=function(t){var e=0,n=r,i="",a=0;for(e=0;e<t.length;e+=1)void 0!==n[t.charCodeAt(e)]?(a++,"number"==typeof(n=n[t.charCodeAt(e)])&&(i+=String.fromCharCode(n),n=r,a=0),e===t.length-1&&(n=r,i+=t.charAt(e-(a-1)),e-=a-1,a=0)):(n=r,i+=t.charAt(e-a),e-=a,a=0);return i};t.__arabicParser__.isArabicDiacritic=function(t){return void 0!==t&&void 0!==n[t.charCodeAt(0)]};var f=t.__arabicParser__.getCorrectForm=function(t,e,r){return o(t)?!1===a(t)?-1:!u(t)||!o(e)&&!o(r)||!o(r)&&s(e)||s(t)&&!o(e)||s(t)&&c(e)||s(t)&&s(e)?0:h(t)&&o(e)&&!s(e)&&o(r)&&u(r)?3:s(t)||!o(r)?1:2:-1},d=function(t){var r=0,n=0,i=0,a="",s="",c="",u=(t=t||"").split("\\s+"),h=[];for(r=0;r<u.length;r+=1){for(h.push(""),n=0;n<u[r].length;n+=1)a=u[r][n],s=u[r][n-1],c=u[r][n+1],o(a)?(i=f(a,s,c),h[r]+=-1!==i?String.fromCharCode(e[a.charCodeAt(0)][i]):a):h[r]+=a;h[r]=l(h[r])}return h.join(" ")},p=t.__arabicParser__.processArabic=t.processArabic=function(){var t,e="string"==typeof arguments[0]?arguments[0]:arguments[0].text,r=[];if(Array.isArray(e)){var n=0;for(r=[],n=0;n<e.length;n+=1)Array.isArray(e[n])?r.push([d(e[n][0]),e[n][1],e[n][2]]):r.push([d(e[n])]);t=r}else t=d(e);return"string"==typeof arguments[0]?t:(arguments[0].text=t,arguments[0])};t.events.push(["preProcessText",p])}(E.API),E.API.autoPrint=function(t){var e;switch((t=t||{}).variant=t.variant||"non-conform",t.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",(function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){this.internal.out("/OpenAction "+e+" 0 R")}))}return this},
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(){var t=void 0;Object.defineProperty(this,"pdf",{get:function(){return t},set:function(e){t=e}});var e=150;Object.defineProperty(this,"width",{get:function(){return e},set:function(t){e=isNaN(t)||!1===Number.isInteger(t)||t<0?150:t,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=e+1)}});var r=300;Object.defineProperty(this,"height",{get:function(){return r},set:function(t){r=isNaN(t)||!1===Number.isInteger(t)||t<0?300:t,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=r+1)}});var n=[];Object.defineProperty(this,"childNodes",{get:function(){return n},set:function(t){n=t}});var i={};Object.defineProperty(this,"style",{get:function(){return i},set:function(t){i=t}}),Object.defineProperty(this,"parentNode",{})};e.prototype.getContext=function(t,e){var r;if("2d"!==(t=t||"2d"))return null;for(r in e)this.pdf.context2d.hasOwnProperty(r)&&(this.pdf.context2d[r]=e[r]);return this.pdf.context2d._canvas=this,this.pdf.context2d},e.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},t.events.push(["initialized",function(){this.canvas=new e,this.canvas.pdf=this}])}(E.API),function(e){var r={left:0,top:0,bottom:0,right:0},n=!1,i=function(){void 0===this.internal.__cell__&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},r),this.internal.__cell__.margins.width=this.getPageWidth(),a.call(this))},a=function(){this.internal.__cell__.lastCell=new o,this.internal.__cell__.pages=1},o=function(){var t=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return t},set:function(e){t=e}});var e=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return e},set:function(t){e=t}});var r=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return r},set:function(t){r=t}});var n=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return n},set:function(t){n=t}});var i=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return i},set:function(t){i=t}});var a=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return a},set:function(t){a=t}});var o=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return o},set:function(t){o=t}}),this};o.prototype.clone=function(){return new o(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},o.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(t){return i.call(this),this.internal.__cell__.headerFunction="function"==typeof t?t:void 0,this},e.getTextDimensions=function(t,e){i.call(this);var r=(e=e||{}).fontSize||this.getFontSize(),n=e.font||this.getFont(),a=e.scaleFactor||this.internal.scaleFactor,o=0,s=0,c=0,u=this;if(!Array.isArray(t)&&"string"!=typeof t){if("number"!=typeof t)throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");t=String(t)}var h=e.maxWidth;h>0?"string"==typeof t?t=this.splitTextToSize(t,h):"[object Array]"===Object.prototype.toString.call(t)&&(t=t.reduce((function(t,e){return t.concat(u.splitTextToSize(e,h))}),[])):t=Array.isArray(t)?t:[t];for(var l=0;l<t.length;l++)o<(c=this.getStringUnitWidth(t[l],{font:n})*r)&&(o=c);return 0!==o&&(s=t.length),{w:o/=a,h:Math.max((s*r*this.getLineHeightFactor()-r*(this.getLineHeightFactor()-1))/a,0)}},e.cellAddPage=function(){i.call(this),this.addPage();var t=this.internal.__cell__.margins||r;return this.internal.__cell__.lastCell=new o(t.left,t.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var s=e.cell=function(){var t;t=arguments[0]instanceof o?arguments[0]:new o(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),i.call(this);var e=this.internal.__cell__.lastCell,a=this.internal.__cell__.padding,s=this.internal.__cell__.margins||r,c=this.internal.__cell__.tableHeaderRow,u=this.internal.__cell__.printHeaders;return void 0!==e.lineNumber&&(e.lineNumber===t.lineNumber?(t.x=(e.x||0)+(e.width||0),t.y=e.y||0):e.y+e.height+t.height+s.bottom>this.getPageHeight()?(this.cellAddPage(),t.y=s.top,u&&c&&(this.printHeaderRow(t.lineNumber,!0),t.y+=c[0].height)):t.y=e.y+e.height||t.y),void 0!==t.text[0]&&(this.rect(t.x,t.y,t.width,t.height,!0===n?"FD":void 0),"right"===t.align?this.text(t.text,t.x+t.width-a,t.y+a,{align:"right",baseline:"top"}):"center"===t.align?this.text(t.text,t.x+t.width/2,t.y+a,{align:"center",baseline:"top",maxWidth:t.width-a-a}):this.text(t.text,t.x+a,t.y+a,{align:"left",baseline:"top",maxWidth:t.width-a-a})),this.internal.__cell__.lastCell=t,this};e.table=function(e,n,u,h,l){if(i.call(this),!u)throw new Error("No data for PDF table.");var f,d,p,g,m=[],v=[],b=[],y={},w={},N=[],L=[],A=(l=l||{}).autoSize||!1,x=!1!==l.printHeaders,S=l.css&&void 0!==l.css["font-size"]?16*l.css["font-size"]:l.fontSize||12,_=l.margins||Object.assign({width:this.getPageWidth()},r),P="number"==typeof l.padding?l.padding:3,k=l.headerBackgroundColor||"#c8c8c8",I=l.headerTextColor||"#000";if(a.call(this),this.internal.__cell__.printHeaders=x,this.internal.__cell__.margins=_,this.internal.__cell__.table_font_size=S,this.internal.__cell__.padding=P,this.internal.__cell__.headerBackgroundColor=k,this.internal.__cell__.headerTextColor=I,this.setFontSize(S),null==h)v=m=Object.keys(u[0]),b=m.map((function(){return"left"}));else if(Array.isArray(h)&&"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(h[0]))for(m=h.map((function(t){return t.name})),v=h.map((function(t){return t.prompt||t.name||""})),b=h.map((function(t){return t.align||"left"})),f=0;f<h.length;f+=1)w[h[f].name]=h[f].width*(19.049976/25.4);else Array.isArray(h)&&"string"==typeof h[0]&&(v=m=h,b=m.map((function(){return"left"})));if(A||Array.isArray(h)&&"string"==typeof h[0])for(f=0;f<m.length;f+=1){for(y[g=m[f]]=u.map((function(t){return t[g]})),this.setFont(void 0,"bold"),N.push(this.getTextDimensions(v[f],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),d=y[g],this.setFont(void 0,"normal"),p=0;p<d.length;p+=1)N.push(this.getTextDimensions(d[p],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);w[g]=Math.max.apply(null,N)+P+P,N=[]}if(x){var F={};for(f=0;f<m.length;f+=1)F[m[f]]={},F[m[f]].text=v[f],F[m[f]].align=b[f];var C=c.call(this,F,w);L=m.map((function(t){return new o(e,n,w[t],C,F[t].text,void 0,F[t].align)})),this.setTableHeaderRow(L),this.printHeaderRow(1,!1)}var j=h.reduce((function(t,e){return t[e.name]=e.align,t}),{});for(f=0;f<u.length;f+=1){"rowStart"in l&&l.rowStart instanceof Function&&l.rowStart({row:f,data:u[f]},this);var O=c.call(this,u[f],w);for(p=0;p<m.length;p+=1){var B=u[f][m[p]];"cellStart"in l&&l.cellStart instanceof Function&&l.cellStart({row:f,col:p,data:B},this),s.call(this,new o(e,n,w[m[p]],O,B,f+2,j[m[p]]))}}return this.internal.__cell__.table_x=e,this.internal.__cell__.table_y=n,this};var c=function(t,e){var r=this.internal.__cell__.padding,n=this.internal.__cell__.table_font_size,i=this.internal.scaleFactor;return Object.keys(t).map((function(n){var i=t[n];return this.splitTextToSize(i.hasOwnProperty("text")?i.text:i,e[n]-r-r)}),this).map((function(t){return this.getLineHeightFactor()*t.length*n/i+r+r}),this).reduce((function(t,e){return Math.max(t,e)}),0)};e.setTableHeaderRow=function(t){i.call(this),this.internal.__cell__.tableHeaderRow=t},e.printHeaderRow=function(t,e){if(i.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var r;if(n=!0,"function"==typeof this.internal.__cell__.headerFunction){var a=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new o(a[0],a[1],a[2],a[3],void 0,-1)}this.setFont(void 0,"bold");for(var c=[],u=0;u<this.internal.__cell__.tableHeaderRow.length;u+=1){r=this.internal.__cell__.tableHeaderRow[u].clone(),e&&(r.y=this.internal.__cell__.margins.top||0,c.push(r)),r.lineNumber=t;var h=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),s.call(this,r),this.setTextColor(h)}c.length>0&&this.setTableHeaderRow(c),this.setFont(void 0,"normal"),n=!1}}(E.API);var Pt={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},kt=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],It=_t(kt),Ft=[100,200,300,400,500,600,700,800,900],Ct=_t(Ft);function jt(t){var e=t.family.replace(/"|'/g,"").toLowerCase(),r=function(t){return Pt[t=t||"normal"]?t:"normal"}(t.style),n=function(t){if(!t)return 400;if("number"==typeof t)return t>=100&&t<=900&&t%100==0?t:400;if(/^\d00$/.test(t))return parseInt(t);switch(t){case"bold":return 700;case"normal":default:return 400}}(t.weight),i=function(t){return"number"==typeof It[t=t||"normal"]?t:"normal"}(t.stretch);return{family:e,style:r,weight:n,stretch:i,src:t.src||[],ref:t.ref||{name:e,style:[i,r,n].join(" ")}}}function Ot(t,e,r,n){var i;for(i=r;i>=0&&i<e.length;i+=n)if(t[e[i]])return t[e[i]];for(i=r;i>=0&&i<e.length;i-=n)if(t[e[i]])return t[e[i]]}var Bt={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Mt={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Et(t){return[t.stretch,t.style,t.weight,t.family].join(" ")}function qt(t,e,r){for(var n=(r=r||{}).defaultFontFamily||"times",i=Object.assign({},Bt,r.genericFontFamilies||{}),a=null,o=null,s=0;s<e.length;++s)if(i[(a=jt(e[s])).family]&&(a.family=i[a.family]),t.hasOwnProperty(a.family)){o=t[a.family];break}if(!(o=o||t[n]))throw new Error("Could not find a font-family for the rule '"+Et(a)+"' and default family '"+n+"'.");if(o=function(t,e){if(e[t])return e[t];var r=It[t],n=r<=It.normal?-1:1,i=Ot(e,kt,r,n);if(!i)throw new Error("Could not find a matching font-stretch value for "+t);return i}(a.stretch,o),o=function(t,e){if(e[t])return e[t];for(var r=Pt[t],n=0;n<r.length;++n)if(e[r[n]])return e[r[n]];throw new Error("Could not find a matching font-style for "+t)}(a.style,o),!(o=function(t,e){if(e[t])return e[t];if(400===t&&e[500])return e[500];if(500===t&&e[400])return e[400];var r=Ct[t],n=Ot(e,Ft,r,t<400?-1:1);if(!n)throw new Error("Could not find a matching font-weight for value "+t);return n}(a.weight,o)))throw new Error("Failed to resolve a font for the rule '"+Et(a)+"'.");return o}function Dt(t){return t.trimLeft()}function Rt(t,e){for(var r=0;r<t.length;){if(t.charAt(r)===e)return[t.substring(0,r),t.substring(r+1)];r+=1}return null}function Tt(t){var e=t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return null===e?null:[e[0],t.substring(e[0].length)]}var Ut,zt,Ht,Wt=["times"];!function(e){var r,n,i,o,s,c,u,h,l,d=function(t){return t=t||{},this.isStrokeTransparent=t.isStrokeTransparent||!1,this.strokeOpacity=t.strokeOpacity||1,this.strokeStyle=t.strokeStyle||"#000000",this.fillStyle=t.fillStyle||"#000000",this.isFillTransparent=t.isFillTransparent||!1,this.fillOpacity=t.fillOpacity||1,this.font=t.font||"10px sans-serif",this.textBaseline=t.textBaseline||"alphabetic",this.textAlign=t.textAlign||"left",this.lineWidth=t.lineWidth||1,this.lineJoin=t.lineJoin||"miter",this.lineCap=t.lineCap||"butt",this.path=t.path||[],this.transform=void 0!==t.transform?t.transform.clone():new h,this.globalCompositeOperation=t.globalCompositeOperation||"normal",this.globalAlpha=t.globalAlpha||1,this.clip_path=t.clip_path||[],this.currentPoint=t.currentPoint||new c,this.miterLimit=t.miterLimit||10,this.lastPoint=t.lastPoint||new c,this.lineDashOffset=t.lineDashOffset||0,this.lineDash=t.lineDash||[],this.margin=t.margin||[0,0,0,0],this.prevPageLastElemOffset=t.prevPageLastElemOffset||0,this.ignoreClearRect="boolean"!=typeof t.ignoreClearRect||t.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new p(this),r=this.internal.f2,n=this.internal.getCoordinateString,i=this.internal.getVerticalCoordinateString,o=this.internal.getHorizontalCoordinate,s=this.internal.getVerticalCoordinate,c=this.internal.Point,u=this.internal.Rectangle,h=this.internal.Matrix,l=new d}]);var p=function(t){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var e=t;Object.defineProperty(this,"pdf",{get:function(){return e}});var r=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return r},set:function(t){r=Boolean(t)}});var n=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return n},set:function(t){n=Boolean(t)}});var i=0;Object.defineProperty(this,"posX",{get:function(){return i},set:function(t){isNaN(t)||(i=t)}});var a=0;Object.defineProperty(this,"posY",{get:function(){return a},set:function(t){isNaN(t)||(a=t)}}),Object.defineProperty(this,"margin",{get:function(){return l.margin},set:function(t){var e;"number"==typeof t?e=[t,t,t,t]:((e=new Array(4))[0]=t[0],e[1]=t.length>=2?t[1]:e[0],e[2]=t.length>=3?t[2]:e[0],e[3]=t.length>=4?t[3]:e[1]),l.margin=e}});var o=!1;Object.defineProperty(this,"autoPaging",{get:function(){return o},set:function(t){o=t}});var s=0;Object.defineProperty(this,"lastBreak",{get:function(){return s},set:function(t){s=t}});var c=[];Object.defineProperty(this,"pageBreaks",{get:function(){return c},set:function(t){c=t}}),Object.defineProperty(this,"ctx",{get:function(){return l},set:function(t){t instanceof d&&(l=t)}}),Object.defineProperty(this,"path",{get:function(){return l.path},set:function(t){l.path=t}});var u=[];Object.defineProperty(this,"ctxStack",{get:function(){return u},set:function(t){u=t}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(t){var e;e=g(t),this.ctx.fillStyle=e.style,this.ctx.isFillTransparent=0===e.a,this.ctx.fillOpacity=e.a,this.pdf.setFillColor(e.r,e.g,e.b,{a:e.a}),this.pdf.setTextColor(e.r,e.g,e.b,{a:e.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(t){var e=g(t);this.ctx.strokeStyle=e.style,this.ctx.isStrokeTransparent=0===e.a,this.ctx.strokeOpacity=e.a,0===e.a?this.pdf.setDrawColor(255,255,255):(e.a,this.pdf.setDrawColor(e.r,e.g,e.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(t){-1!==["butt","round","square"].indexOf(t)&&(this.ctx.lineCap=t,this.pdf.setLineCap(t))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(t){isNaN(t)||(this.ctx.lineWidth=t,this.pdf.setLineWidth(t))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(t){-1!==["bevel","round","miter"].indexOf(t)&&(this.ctx.lineJoin=t,this.pdf.setLineJoin(t))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(t){isNaN(t)||(this.ctx.miterLimit=t,this.pdf.setMiterLimit(t))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(t){this.ctx.textBaseline=t}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(t){-1!==["right","end","center","left","start"].indexOf(t)&&(this.ctx.textAlign=t)}});var h=null;function f(t,e){if(null===h){var r=function(t){var e=[];return Object.keys(t).forEach((function(r){t[r].forEach((function(t){var n=null;switch(t){case"bold":n={family:r,weight:"bold"};break;case"italic":n={family:r,style:"italic"};break;case"bolditalic":n={family:r,weight:"bold",style:"italic"};break;case"":case"normal":n={family:r}}null!==n&&(n.ref={name:r,style:t},e.push(n))}))})),e}(t.getFontList());h=function(t){for(var e={},r=0;r<t.length;++r){var n=jt(t[r]),i=n.family,a=n.stretch,o=n.style,s=n.weight;e[i]=e[i]||{},e[i][a]=e[i][a]||{},e[i][a][o]=e[i][a][o]||{},e[i][a][o][s]=n}return e}(r.concat(e))}return h}var p=null;Object.defineProperty(this,"fontFaces",{get:function(){return p},set:function(t){h=null,p=t}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(t){var e;if(this.ctx.font=t,null!==(e=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))){var r=e[1],n=(e[2],e[3]),i=e[4],a=(e[5],e[6]),o=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];i="px"===o?Math.floor(parseFloat(i)*this.pdf.internal.scaleFactor):"em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(i)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(i);var s=function(t){var e,r,n=[],i=t.trim();if(""===i)return Wt;if(i in Mt)return[Mt[i]];for(;""!==i;){switch(r=null,e=(i=Dt(i)).charAt(0)){case'"':case"'":r=Rt(i.substring(1),e);break;default:r=Tt(i)}if(null===r)return Wt;if(n.push(r[0]),""!==(i=Dt(r[1]))&&","!==i.charAt(0))return Wt;i=i.replace(/^,/,"")}return n}(a);if(this.fontFaces){var c=qt(f(this.pdf,this.fontFaces),s.map((function(t){return{family:t,stretch:"normal",weight:n,style:r}})));this.pdf.setFont(c.ref.name,c.ref.style)}else{var u="";("bold"===n||parseInt(n,10)>=700||"bold"===r)&&(u="bold"),"italic"===r&&(u+="italic"),0===u.length&&(u="normal");for(var h="",l={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},d=0;d<s.length;d++){if(void 0!==this.pdf.internal.getFont(s[d],u,{noFallback:!0,disableWarning:!0})){h=s[d];break}if("bolditalic"===u&&void 0!==this.pdf.internal.getFont(s[d],"bold",{noFallback:!0,disableWarning:!0}))h=s[d],u="bold";else if(void 0!==this.pdf.internal.getFont(s[d],"normal",{noFallback:!0,disableWarning:!0})){h=s[d],u="normal";break}}if(""===h)for(var p=0;p<s.length;p++)if(l[s[p]]){h=l[s[p]];break}h=""===h?"Times":h,this.pdf.setFont(h,u)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(t){this.ctx.globalCompositeOperation=t}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(t){this.ctx.globalAlpha=t}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(t){this.ctx.lineDashOffset=t,T.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(t){this.ctx.lineDash=t,T.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(t){this.ctx.ignoreClearRect=Boolean(t)}})};p.prototype.setLineDash=function(t){this.lineDash=t},p.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},p.prototype.fill=function(){A.call(this,"fill",!1)},p.prototype.stroke=function(){A.call(this,"stroke",!1)},p.prototype.beginPath=function(){this.path=[{type:"begin"}]},p.prototype.moveTo=function(t,e){if(isNaN(t)||isNaN(e))throw a.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var r=this.ctx.transform.applyToPoint(new c(t,e));this.path.push({type:"mt",x:r.x,y:r.y}),this.ctx.lastPoint=new c(t,e)},p.prototype.closePath=function(){var e=new c(0,0),r=0;for(r=this.path.length-1;-1!==r;r--)if("begin"===this.path[r].type&&"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.path[r+1])&&"number"==typeof this.path[r+1].x){e=new c(this.path[r+1].x,this.path[r+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new c(e.x,e.y)},p.prototype.lineTo=function(t,e){if(isNaN(t)||isNaN(e))throw a.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var r=this.ctx.transform.applyToPoint(new c(t,e));this.path.push({type:"lt",x:r.x,y:r.y}),this.ctx.lastPoint=new c(r.x,r.y)},p.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),A.call(this,null,!0)},p.prototype.quadraticCurveTo=function(t,e,r,n){if(isNaN(r)||isNaN(n)||isNaN(t)||isNaN(e))throw a.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var i=this.ctx.transform.applyToPoint(new c(r,n)),o=this.ctx.transform.applyToPoint(new c(t,e));this.path.push({type:"qct",x1:o.x,y1:o.y,x:i.x,y:i.y}),this.ctx.lastPoint=new c(i.x,i.y)},p.prototype.bezierCurveTo=function(t,e,r,n,i,o){if(isNaN(i)||isNaN(o)||isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw a.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var s=this.ctx.transform.applyToPoint(new c(i,o)),u=this.ctx.transform.applyToPoint(new c(t,e)),h=this.ctx.transform.applyToPoint(new c(r,n));this.path.push({type:"bct",x1:u.x,y1:u.y,x2:h.x,y2:h.y,x:s.x,y:s.y}),this.ctx.lastPoint=new c(s.x,s.y)},p.prototype.arc=function(t,e,r,n,i,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(i))throw a.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(o=Boolean(o),!this.ctx.transform.isIdentity){var s=this.ctx.transform.applyToPoint(new c(t,e));t=s.x,e=s.y;var u=this.ctx.transform.applyToPoint(new c(0,r)),h=this.ctx.transform.applyToPoint(new c(0,0));r=Math.sqrt(Math.pow(u.x-h.x,2)+Math.pow(u.y-h.y,2))}Math.abs(i-n)>=2*Math.PI&&(n=0,i=2*Math.PI),this.path.push({type:"arc",x:t,y:e,radius:r,startAngle:n,endAngle:i,counterclockwise:o})},p.prototype.arcTo=function(t,e,r,n,i){throw new Error("arcTo not implemented.")},p.prototype.rect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw a.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(t,e),this.lineTo(t+r,e),this.lineTo(t+r,e+n),this.lineTo(t,e+n),this.lineTo(t,e),this.lineTo(t+r,e),this.lineTo(t,e)},p.prototype.fillRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw a.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!m.call(this)){var i={};"butt"!==this.lineCap&&(i.lineCap=this.lineCap,this.lineCap="butt"),"miter"!==this.lineJoin&&(i.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(t,e,r,n),this.fill(),i.hasOwnProperty("lineCap")&&(this.lineCap=i.lineCap),i.hasOwnProperty("lineJoin")&&(this.lineJoin=i.lineJoin)}},p.prototype.strokeRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw a.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");v.call(this)||(this.beginPath(),this.rect(t,e,r,n),this.stroke())},p.prototype.clearRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw a.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(t,e,r,n))},p.prototype.save=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,r=0;r<this.pdf.internal.getNumberOfPages();r++)this.pdf.setPage(r+1),this.pdf.internal.out("q");if(this.pdf.setPage(e),t){this.ctx.fontSize=this.pdf.internal.getFontSize();var n=new d(this.ctx);this.ctxStack.push(this.ctx),this.ctx=n}},p.prototype.restore=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,r=0;r<this.pdf.internal.getNumberOfPages();r++)this.pdf.setPage(r+1),this.pdf.internal.out("Q");this.pdf.setPage(e),t&&0!==this.ctxStack.length&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},p.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var g=function(t){var e,r,n,i;if(!0===t.isCanvasGradient&&(t=t.getColor()),!t)return{r:0,g:0,b:0,a:0,style:t};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t))e=0,r=0,n=0,i=0;else{var a=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);if(null!==a)e=parseInt(a[1]),r=parseInt(a[2]),n=parseInt(a[3]),i=1;else if(null!==(a=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t)))e=parseInt(a[1]),r=parseInt(a[2]),n=parseInt(a[3]),i=parseFloat(a[4]);else{if(i=1,"string"==typeof t&&"#"!==t.charAt(0)){var o=new f(t);t=o.ok?o.toHex():"#000000"}4===t.length?(e=t.substring(1,2),e+=e,r=t.substring(2,3),r+=r,n=t.substring(3,4),n+=n):(e=t.substring(1,3),r=t.substring(3,5),n=t.substring(5,7)),e=parseInt(e,16),r=parseInt(r,16),n=parseInt(n,16)}}return{r:e,g:r,b:n,a:i,style:t}},m=function(){return this.ctx.isFillTransparent||0==this.globalAlpha},v=function(){return Boolean(this.ctx.isStrokeTransparent||0==this.globalAlpha)};p.prototype.fillText=function(t,e,r,n){if(isNaN(e)||isNaN(r)||"string"!=typeof t)throw a.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(n=isNaN(n)?void 0:n,!m.call(this)){var i=q(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;C.call(this,{text:t,x:e,y:r,scale:o,angle:i,align:this.textAlign,maxWidth:n})}},p.prototype.strokeText=function(t,e,r,n){if(isNaN(e)||isNaN(r)||"string"!=typeof t)throw a.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!v.call(this)){n=isNaN(n)?void 0:n;var i=q(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;C.call(this,{text:t,x:e,y:r,scale:o,renderingMode:"stroke",angle:i,align:this.textAlign,maxWidth:n})}},p.prototype.measureText=function(t){if("string"!=typeof t)throw a.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var e=this.pdf,r=this.pdf.internal.scaleFactor,n=e.internal.getFontSize(),i=e.getStringUnitWidth(t)*n/e.internal.scaleFactor,o=function(t){var e=(t=t||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return e}}),this};return new o({width:i*=Math.round(96*r/72*1e4)/1e4})},p.prototype.scale=function(t,e){if(isNaN(t)||isNaN(e))throw a.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var r=new h(t,0,0,e,0,0);this.ctx.transform=this.ctx.transform.multiply(r)},p.prototype.rotate=function(t){if(isNaN(t))throw a.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var e=new h(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0);this.ctx.transform=this.ctx.transform.multiply(e)},p.prototype.translate=function(t,e){if(isNaN(t)||isNaN(e))throw a.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var r=new h(1,0,0,1,t,e);this.ctx.transform=this.ctx.transform.multiply(r)},p.prototype.transform=function(t,e,r,n,i,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(i)||isNaN(o))throw a.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var s=new h(t,e,r,n,i,o);this.ctx.transform=this.ctx.transform.multiply(s)},p.prototype.setTransform=function(t,e,r,n,i,a){t=isNaN(t)?1:t,e=isNaN(e)?0:e,r=isNaN(r)?0:r,n=isNaN(n)?1:n,i=isNaN(i)?0:i,a=isNaN(a)?0:a,this.ctx.transform=new h(t,e,r,n,i,a)};var b=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};p.prototype.drawImage=function(t,e,r,n,i,a,o,s,c){var l=this.pdf.getImageProperties(t),f=1,d=1,p=1,g=1;void 0!==n&&void 0!==s&&(p=s/n,g=c/i,f=l.width/n*s/n,d=l.height/i*c/i),void 0===a&&(a=e,o=r,e=0,r=0),void 0!==n&&void 0===s&&(s=n,c=i),void 0===n&&void 0===s&&(s=l.width,c=l.height);for(var m,v=this.ctx.transform.decompose(),w=q(v.rotate.shx),A=new h,S=(A=(A=(A=A.multiply(v.translate)).multiply(v.skew)).multiply(v.scale)).applyToRectangle(new u(a-e*p,o-r*g,n*f,i*d)),_=y.call(this,S),P=[],k=0;k<_.length;k+=1)-1===P.indexOf(_[k])&&P.push(_[k]);if(L(P),this.autoPaging)for(var I=P[0],F=P[P.length-1],C=I;C<F+1;C++){this.pdf.setPage(C);var j=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],O=1===C?this.posY+this.margin[0]:this.margin[0],B=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],M=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],E=1===C?0:B+(C-2)*M;if(0!==this.ctx.clip_path.length){var D=this.path;m=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=N(m,this.posX+this.margin[3],-E+O+this.ctx.prevPageLastElemOffset),x.call(this,"fill",!0),this.path=D}var R=JSON.parse(JSON.stringify(S));R=N([R],this.posX+this.margin[3],-E+O+this.ctx.prevPageLastElemOffset)[0];var T=(C>I||C<F)&&b.call(this);T&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],j,M,null).clip().discardPath()),this.pdf.addImage(t,"JPEG",R.x,R.y,R.w,R.h,null,null,w),T&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(t,"JPEG",S.x,S.y,S.w,S.h,null,null,w)};var y=function(t,e,r){var n=[];e=e||this.pdf.internal.pageSize.width,r=r||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var i=this.posY+this.ctx.prevPageLastElemOffset;switch(t.type){default:case"mt":case"lt":n.push(Math.floor((t.y+i)/r)+1);break;case"arc":n.push(Math.floor((t.y+i-t.radius)/r)+1),n.push(Math.floor((t.y+i+t.radius)/r)+1);break;case"qct":var a=D(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x,t.y);n.push(Math.floor((a.y+i)/r)+1),n.push(Math.floor((a.y+a.h+i)/r)+1);break;case"bct":var o=R(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x2,t.y2,t.x,t.y);n.push(Math.floor((o.y+i)/r)+1),n.push(Math.floor((o.y+o.h+i)/r)+1);break;case"rect":n.push(Math.floor((t.y+i)/r)+1),n.push(Math.floor((t.y+t.h+i)/r)+1)}for(var s=0;s<n.length;s+=1)for(;this.pdf.internal.getNumberOfPages()<n[s];)w.call(this);return n},w=function(){var t=this.fillStyle,e=this.strokeStyle,r=this.font,n=this.lineCap,i=this.lineWidth,a=this.lineJoin;this.pdf.addPage(),this.fillStyle=t,this.strokeStyle=e,this.font=r,this.lineCap=n,this.lineWidth=i,this.lineJoin=a},N=function(t,e,r){for(var n=0;n<t.length;n++)switch(t[n].type){case"bct":t[n].x2+=e,t[n].y2+=r;case"qct":t[n].x1+=e,t[n].y1+=r;case"mt":case"lt":case"arc":default:t[n].x+=e,t[n].y+=r}return t},L=function(t){return t.sort((function(t,e){return t-e}))},A=function(t,e){for(var r,n,i=this.fillStyle,a=this.strokeStyle,o=this.lineCap,s=this.lineWidth,c=Math.abs(s*this.ctx.transform.scaleX),u=this.lineJoin,h=JSON.parse(JSON.stringify(this.path)),l=JSON.parse(JSON.stringify(this.path)),f=[],d=0;d<l.length;d++)if(void 0!==l[d].x)for(var p=y.call(this,l[d]),g=0;g<p.length;g+=1)-1===f.indexOf(p[g])&&f.push(p[g]);for(var m=0;m<f.length;m++)for(;this.pdf.internal.getNumberOfPages()<f[m];)w.call(this);if(L(f),this.autoPaging)for(var v=f[0],A=f[f.length-1],S=v;S<A+1;S++){this.pdf.setPage(S),this.fillStyle=i,this.strokeStyle=a,this.lineCap=o,this.lineWidth=c,this.lineJoin=u;var _=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],P=1===S?this.posY+this.margin[0]:this.margin[0],k=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],I=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],F=1===S?0:k+(S-2)*I;if(0!==this.ctx.clip_path.length){var C=this.path;r=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=N(r,this.posX+this.margin[3],-F+P+this.ctx.prevPageLastElemOffset),x.call(this,t,!0),this.path=C}if(n=JSON.parse(JSON.stringify(h)),this.path=N(n,this.posX+this.margin[3],-F+P+this.ctx.prevPageLastElemOffset),!1===e||0===S){var j=(S>v||S<A)&&b.call(this);j&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],_,I,null).clip().discardPath()),x.call(this,t,e),j&&this.pdf.restoreGraphicsState()}this.lineWidth=s}else this.lineWidth=c,x.call(this,t,e),this.lineWidth=s;this.path=h},x=function(t,e){if(("stroke"!==t||e||!v.call(this))&&("stroke"===t||e||!m.call(this))){for(var r,n,i=[],a=this.path,o=0;o<a.length;o++){var s=a[o];switch(s.type){case"begin":i.push({begin:!0});break;case"close":i.push({close:!0});break;case"mt":i.push({start:s,deltas:[],abs:[]});break;case"lt":var c=i.length;if(a[o-1]&&!isNaN(a[o-1].x)&&(r=[s.x-a[o-1].x,s.y-a[o-1].y],c>0))for(;c>=0;c--)if(!0!==i[c-1].close&&!0!==i[c-1].begin){i[c-1].deltas.push(r),i[c-1].abs.push(s);break}break;case"bct":r=[s.x1-a[o-1].x,s.y1-a[o-1].y,s.x2-a[o-1].x,s.y2-a[o-1].y,s.x-a[o-1].x,s.y-a[o-1].y],i[i.length-1].deltas.push(r);break;case"qct":var u=a[o-1].x+2/3*(s.x1-a[o-1].x),h=a[o-1].y+2/3*(s.y1-a[o-1].y),l=s.x+2/3*(s.x1-s.x),f=s.y+2/3*(s.y1-s.y),d=s.x,p=s.y;r=[u-a[o-1].x,h-a[o-1].y,l-a[o-1].x,f-a[o-1].y,d-a[o-1].x,p-a[o-1].y],i[i.length-1].deltas.push(r);break;case"arc":i.push({deltas:[],abs:[],arc:!0}),Array.isArray(i[i.length-1].abs)&&i[i.length-1].abs.push(s)}}n=e?null:"stroke"===t?"stroke":"fill";for(var g=!1,b=0;b<i.length;b++)if(i[b].arc)for(var y=i[b].abs,w=0;w<y.length;w++){var N=y[w];"arc"===N.type?P.call(this,N.x,N.y,N.radius,N.startAngle,N.endAngle,N.counterclockwise,void 0,e,!g):j.call(this,N.x,N.y),g=!0}else if(!0===i[b].close)this.pdf.internal.out("h"),g=!1;else if(!0!==i[b].begin){var L=i[b].start.x,A=i[b].start.y;O.call(this,i[b].deltas,L,A),g=!0}n&&k.call(this,n),e&&I.call(this)}},S=function(t){var e=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,r=e*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return t-r;case"top":return t+e-r;case"hanging":return t+e-2*r;case"middle":return t+e/2-r;case"ideographic":return t;case"alphabetic":default:return t}},_=function(t){return t+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};p.prototype.createLinearGradient=function(){var t=function(){};return t.colorStops=[],t.addColorStop=function(t,e){this.colorStops.push([t,e])},t.getColor=function(){return 0===this.colorStops.length?"#000000":this.colorStops[0][1]},t.isCanvasGradient=!0,t},p.prototype.createPattern=function(){return this.createLinearGradient()},p.prototype.createRadialGradient=function(){return this.createLinearGradient()};var P=function(t,e,r,n,i,a,o,s,c){for(var u=M.call(this,r,n,i,a),h=0;h<u.length;h++){var l=u[h];0===h&&(c?F.call(this,l.x1+t,l.y1+e):j.call(this,l.x1+t,l.y1+e)),B.call(this,t,e,l.x2,l.y2,l.x3,l.y3,l.x4,l.y4)}s?I.call(this):k.call(this,o)},k=function(t){switch(t){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},I=function(){this.pdf.clip(),this.pdf.discardPath()},F=function(t,e){this.pdf.internal.out(n(t)+" "+i(e)+" m")},C=function(t){var e;switch(t.align){case"right":case"end":e="right";break;case"center":e="center";break;case"left":case"start":default:e="left"}var r=this.pdf.getTextDimensions(t.text),n=S.call(this,t.y),i=_.call(this,n)-r.h,a=this.ctx.transform.applyToPoint(new c(t.x,n)),o=this.ctx.transform.decompose(),s=new h;s=(s=(s=s.multiply(o.translate)).multiply(o.skew)).multiply(o.scale);for(var l,f,d,p=this.ctx.transform.applyToRectangle(new u(t.x,n,r.w,r.h)),g=s.applyToRectangle(new u(t.x,i,r.w,r.h)),m=y.call(this,g),v=[],w=0;w<m.length;w+=1)-1===v.indexOf(m[w])&&v.push(m[w]);if(L(v),this.autoPaging)for(var A=v[0],P=v[v.length-1],k=A;k<P+1;k++){this.pdf.setPage(k);var I=1===k?this.posY+this.margin[0]:this.margin[0],F=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],C=this.pdf.internal.pageSize.height-this.margin[2],j=C-this.margin[0],O=this.pdf.internal.pageSize.width-this.margin[1],B=O-this.margin[3],M=1===k?0:F+(k-2)*j;if(0!==this.ctx.clip_path.length){var E=this.path;l=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=N(l,this.posX+this.margin[3],-1*M+I),x.call(this,"fill",!0),this.path=E}var q=N([JSON.parse(JSON.stringify(g))],this.posX+this.margin[3],-M+I+this.ctx.prevPageLastElemOffset)[0];t.scale>=.01&&(f=this.pdf.internal.getFontSize(),this.pdf.setFontSize(f*t.scale),d=this.lineWidth,this.lineWidth=d*t.scale);var D="text"!==this.autoPaging;if(D||q.y+q.h<=C){if(D||q.y>=I&&q.x<=O){var R=D?t.text:this.pdf.splitTextToSize(t.text,t.maxWidth||O-q.x)[0],T=N([JSON.parse(JSON.stringify(p))],this.posX+this.margin[3],-M+I+this.ctx.prevPageLastElemOffset)[0],U=D&&(k>A||k<P)&&b.call(this);U&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],B,j,null).clip().discardPath()),this.pdf.text(R,T.x,T.y,{angle:t.angle,align:e,renderingMode:t.renderingMode}),U&&this.pdf.restoreGraphicsState()}}else q.y<C&&(this.ctx.prevPageLastElemOffset+=C-q.y);t.scale>=.01&&(this.pdf.setFontSize(f),this.lineWidth=d)}else t.scale>=.01&&(f=this.pdf.internal.getFontSize(),this.pdf.setFontSize(f*t.scale),d=this.lineWidth,this.lineWidth=d*t.scale),this.pdf.text(t.text,a.x+this.posX,a.y+this.posY,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),t.scale>=.01&&(this.pdf.setFontSize(f),this.lineWidth=d)},j=function(t,e,r,a){r=r||0,a=a||0,this.pdf.internal.out(n(t+r)+" "+i(e+a)+" l")},O=function(t,e,r){return this.pdf.lines(t,e,r,null,null)},B=function(t,e,n,i,a,c,u,h){this.pdf.internal.out([r(o(n+t)),r(s(i+e)),r(o(a+t)),r(s(c+e)),r(o(u+t)),r(s(h+e)),"c"].join(" "))},M=function(t,e,r,n){for(var i=2*Math.PI,a=Math.PI/2;e>r;)e-=i;var o=Math.abs(r-e);o<i&&n&&(o=i-o);for(var s=[],c=n?-1:1,u=e;o>1e-5;){var h=u+c*Math.min(o,a);s.push(E.call(this,t,u,h)),o-=Math.abs(h-u),u=h}return s},E=function(t,e,r){var n=(r-e)/2,i=t*Math.cos(n),a=t*Math.sin(n),o=i,s=-a,c=o*o+s*s,u=c+o*i+s*a,h=4/3*(Math.sqrt(2*c*u)-u)/(o*a-s*i),l=o-h*s,f=s+h*o,d=l,p=-f,g=n+e,m=Math.cos(g),v=Math.sin(g);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:l*m-f*v,y2:l*v+f*m,x3:d*m-p*v,y3:d*v+p*m,x4:t*Math.cos(r),y4:t*Math.sin(r)}},q=function(t){return 180*t/Math.PI},D=function(t,e,r,n,i,a){var o=t+.5*(r-t),s=e+.5*(n-e),c=i+.5*(r-i),h=a+.5*(n-a),l=Math.min(t,i,o,c),f=Math.max(t,i,o,c),d=Math.min(e,a,s,h),p=Math.max(e,a,s,h);return new u(l,d,f-l,p-d)},R=function(t,e,r,n,i,a,o,s){var c,h,l,f,d,p,g,m,v,b,y,w,N,L,A=r-t,x=n-e,S=i-r,_=a-n,P=o-i,k=s-a;for(h=0;h<41;h++)v=(g=(l=t+(c=h/40)*A)+c*((d=r+c*S)-l))+c*(d+c*(i+c*P-d)-g),b=(m=(f=e+c*x)+c*((p=n+c*_)-f))+c*(p+c*(a+c*k-p)-m),0==h?(y=v,w=b,N=v,L=b):(y=Math.min(y,v),w=Math.min(w,b),N=Math.max(N,v),L=Math.max(L,b));return new u(Math.round(y),Math.round(w),Math.round(N-y),Math.round(L-w))},T=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var t,e,r=(t=this.ctx.lineDash,e=this.ctx.lineDashOffset,JSON.stringify({lineDash:t,lineDashOffset:e}));this.prevLineDash!==r&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=r)}}}(E.API),
/**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var r=function(t){var e,r,n,i,a,o,s,c,u,h;for(/[^\x00-\xFF]/.test(t),r=[],n=0,i=(t+=e="\0\0\0\0".slice(t.length%4||4)).length;i>n;n+=4)0!==(a=(t.charCodeAt(n)<<24)+(t.charCodeAt(n+1)<<16)+(t.charCodeAt(n+2)<<8)+t.charCodeAt(n+3))?(o=(a=((a=((a=((a=(a-(h=a%85))/85)-(u=a%85))/85)-(c=a%85))/85)-(s=a%85))/85)%85,r.push(o+33,s+33,c+33,u+33,h+33)):r.push(122);return function(t,e){for(var r=e;r>0;r--)t.pop()}(r,e.length),String.fromCharCode.apply(String,r)+"~>"},n=function(t){var e,r,n,i,a,o=String,s="length",c=255,u="charCodeAt",h="slice",l="replace";for(t[h](-2),t=t[h](0,-2)[l](/\s/g,"")[l]("z","!!!!!"),n=[],i=0,a=(t+=e="uuuuu"[h](t[s]%5||5))[s];a>i;i+=5)r=52200625*(t[u](i)-33)+614125*(t[u](i+1)-33)+7225*(t[u](i+2)-33)+85*(t[u](i+3)-33)+(t[u](i+4)-33),n.push(c&r>>24,c&r>>16,c&r>>8,c&r);return function(t,e){for(var r=e;r>0;r--)t.pop()}(n,e[s]),o.fromCharCode.apply(o,n)},i=function(t){var e=new RegExp(/^([0-9A-Fa-f]{2})+$/);if(-1!==(t=t.replace(/\s/g,"")).indexOf(">")&&(t=t.substr(0,t.indexOf(">"))),t.length%2&&(t+="0"),!1===e.test(t))return"";for(var r="",n=0;n<t.length;n+=2)r+=String.fromCharCode("0x"+(t[n]+t[n+1]));return r},a=function(t){for(var r=new Uint8Array(t.length),n=t.length;n--;)r[n]=t.charCodeAt(n);return t=(r=Object(fflate__WEBPACK_IMPORTED_MODULE_1__[/* zlibSync */ "b"])(r)).reduce((function(t,e){return t+String.fromCharCode(e)}),"")};t.processDataByFilters=function(t,e){var o=0,s=t||"",c=[];for("string"==typeof(e=e||[])&&(e=[e]),o=0;o<e.length;o+=1)switch(e[o]){case"ASCII85Decode":case"/ASCII85Decode":s=n(s),c.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":s=r(s),c.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":s=i(s),c.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":s=s.split("").map((function(t){return("0"+t.charCodeAt().toString(16)).slice(-2)})).join("")+">",c.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":s=a(s),c.push("/FlateDecode");break;default:throw new Error('The filter: "'+e[o]+'" is not implemented')}return{data:s,reverseChain:c.reverse().join(" ")}}}(E.API),
/**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.loadFile=function(t,e,r){return function(t,e,r){e=!1!==e,r="function"==typeof r?r:function(){};var n=void 0;try{n=function(t,e,r){var n=new XMLHttpRequest,i=0,a=function(t){var e=t.length,r=[],n=String.fromCharCode;for(i=0;i<e;i+=1)r.push(n(255&t.charCodeAt(i)));return r.join("")};if(n.open("GET",t,!e),n.overrideMimeType("text/plain; charset=x-user-defined"),!1===e&&(n.onload=function(){200===n.status?r(a(this.responseText)):r(void 0)}),n.send(null),e&&200===n.status)return a(n.responseText)}(t,e,r)}catch(t){}return n}(t,e,r)},t.loadImageFile=t.loadFile}(E.API),function(e){function r(){return(n.html2canvas?Promise.resolve(n.html2canvas):__webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, "c444", 7))).catch((function(t){return Promise.reject(new Error("Could not load html2canvas: "+t))})).then((function(t){return t.default?t.default:t}))}function i(){return(n.DOMPurify?Promise.resolve(n.DOMPurify):__webpack_require__.e(/* import() */ 2).then(__webpack_require__.t.bind(null, "b163", 7))).catch((function(t){return Promise.reject(new Error("Could not load dompurify: "+t))})).then((function(t){return t.default?t.default:t}))}var a=function(e){var r=_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e);return"undefined"===r?"undefined":"string"===r||e instanceof String?"string":"number"===r||e instanceof Number?"number":"function"===r||e instanceof Function?"function":e&&e.constructor===Array?"array":e&&1===e.nodeType?"element":"object"===r?"object":"unknown"},o=function(t,e){var r=document.createElement(t);for(var n in e.className&&(r.className=e.className),e.innerHTML&&e.dompurify&&(r.innerHTML=e.dompurify.sanitize(e.innerHTML)),e.style)r.style[n]=e.style[n];return r},s=function t(e){var r=Object.assign(t.convert(Promise.resolve()),JSON.parse(JSON.stringify(t.template))),n=t.convert(Promise.resolve(),r);return n=(n=n.setProgress(1,t,1,[t])).set(e)};(s.prototype=Object.create(Promise.prototype)).constructor=s,s.convert=function(t,e){return t.__proto__=e||s.prototype,t},s.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},s.prototype.from=function(t,e){return this.then((function(){switch(e=e||function(t){switch(a(t)){case"string":return"string";case"element":return"canvas"===t.nodeName.toLowerCase()?"canvas":"element";default:return"unknown"}}(t)){case"string":return this.then(i).then((function(e){return this.set({src:o("div",{innerHTML:t,dompurify:e})})}));case"element":return this.set({src:t});case"canvas":return this.set({canvas:t});case"img":return this.set({img:t});default:return this.error("Unknown source type.")}}))},s.prototype.to=function(t){switch(t){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},s.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then((function(){var t={position:"relative",display:"inline-block",width:("number"!=typeof this.opt.width||isNaN(this.opt.width)||"number"!=typeof this.opt.windowWidth||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},e=function t(e,r){for(var n=3===e.nodeType?document.createTextNode(e.nodeValue):e.cloneNode(!1),i=e.firstChild;i;i=i.nextSibling)!0!==r&&1===i.nodeType&&"SCRIPT"===i.nodeName||n.appendChild(t(i,r));return 1===e.nodeType&&("CANVAS"===e.nodeName?(n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(e,0,0)):"TEXTAREA"!==e.nodeName&&"SELECT"!==e.nodeName||(n.value=e.value),n.addEventListener("load",(function(){n.scrollTop=e.scrollTop,n.scrollLeft=e.scrollLeft}),!0)),n}(this.prop.src,this.opt.html2canvas.javascriptEnabled);"BODY"===e.tagName&&(t.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=o("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=o("div",{className:"html2pdf__container",style:t}),this.prop.container.appendChild(e),this.prop.container.firstChild.appendChild(o("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"}))},s.prototype.toCanvas=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(r).then((function(t){var e=Object.assign({},this.opt.html2canvas);return delete e.onrendered,t(this.prop.container,e)})).then((function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)}))},s.prototype.toContext2d=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(r).then((function(t){var e=this.opt.jsPDF,r=this.opt.fontFaces,n="number"!=typeof this.opt.width||isNaN(this.opt.width)||"number"!=typeof this.opt.windowWidth||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,i=Object.assign({async:!0,allowTaint:!0,scale:n,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete i.onrendered,e.context2d.autoPaging=void 0===this.opt.autoPaging||this.opt.autoPaging,e.context2d.posX=this.opt.x,e.context2d.posY=this.opt.y,e.context2d.margin=this.opt.margin,e.context2d.fontFaces=r,r)for(var a=0;a<r.length;++a){var o=r[a],s=o.src.find((function(t){return"truetype"===t.format}));s&&e.addFont(s.url,o.ref.name,o.ref.style)}return i.windowHeight=i.windowHeight||0,i.windowHeight=0==i.windowHeight?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):i.windowHeight,e.context2d.save(!0),t(this.prop.container,i)})).then((function(t){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)}))},s.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then((function(){var t=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=t}))},s.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then((function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF}))},s.prototype.output=function(t,e,r){return"img"===(r=r||"pdf").toLowerCase()||"image"===r.toLowerCase()?this.outputImg(t,e):this.outputPdf(t,e)},s.prototype.outputPdf=function(t,e){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){return this.prop.pdf.output(t,e)}))},s.prototype.outputImg=function(t){return this.thenList([function(){return this.prop.img||this.toImg()}]).then((function(){switch(t){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+t+'" is not supported.'}}))},s.prototype.save=function(t){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(t?{filename:t}:null).then((function(){this.prop.pdf.save(this.opt.filename)}))},s.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){this.prop.callback(this.prop.pdf)}))},s.prototype.set=function(t){if("object"!==a(t))return this;var e=Object.keys(t||{}).map((function(e){if(e in s.template.prop)return function(){this.prop[e]=t[e]};switch(e){case"margin":return this.setMargin.bind(this,t.margin);case"jsPDF":return function(){return this.opt.jsPDF=t.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,t.pageSize);default:return function(){this.opt[e]=t[e]}}}),this);return this.then((function(){return this.thenList(e)}))},s.prototype.get=function(t,e){return this.then((function(){var r=t in s.template.prop?this.prop[t]:this.opt[t];return e?e(r):r}))},s.prototype.setMargin=function(t){return this.then((function(){switch(a(t)){case"number":t=[t,t,t,t];case"array":if(2===t.length&&(t=[t[0],t[1],t[0],t[1]]),4===t.length)break;default:return this.error("Invalid margin array.")}this.opt.margin=t})).then(this.setPageSize)},s.prototype.setPageSize=function(t){function e(t,e){return Math.floor(t*e/72*96)}return this.then((function(){(t=t||E.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(t.inner={width:t.width-this.opt.margin[1]-this.opt.margin[3],height:t.height-this.opt.margin[0]-this.opt.margin[2]},t.inner.px={width:e(t.inner.width,t.k),height:e(t.inner.height,t.k)},t.inner.ratio=t.inner.height/t.inner.width),this.prop.pageSize=t}))},s.prototype.setProgress=function(t,e,r,n){return null!=t&&(this.progress.val=t),null!=e&&(this.progress.state=e),null!=r&&(this.progress.n=r),null!=n&&(this.progress.stack=n),this.progress.ratio=this.progress.val/this.progress.state,this},s.prototype.updateProgress=function(t,e,r,n){return this.setProgress(t?this.progress.val+t:null,e||null,r?this.progress.n+r:null,n?this.progress.stack.concat(n):null)},s.prototype.then=function(t,e){var r=this;return this.thenCore(t,e,(function(t,e){return r.updateProgress(null,null,1,[t]),Promise.prototype.then.call(this,(function(e){return r.updateProgress(null,t),e})).then(t,e).then((function(t){return r.updateProgress(1),t}))}))},s.prototype.thenCore=function(t,e,r){r=r||Promise.prototype.then;t&&(t=t.bind(this)),e&&(e=e.bind(this));var n=-1!==Promise.toString().indexOf("[native code]")&&"Promise"===Promise.name?this:s.convert(Object.assign({},this),Promise.prototype),i=r.call(n,t,e);return s.convert(i,this.__proto__)},s.prototype.thenExternal=function(t,e){return Promise.prototype.then.call(this,t,e)},s.prototype.thenList=function(t){var e=this;return t.forEach((function(t){e=e.thenCore(t)})),e},s.prototype.catch=function(t){t&&(t=t.bind(this));var e=Promise.prototype.catch.call(this,t);return s.convert(e,this)},s.prototype.catchExternal=function(t){return Promise.prototype.catch.call(this,t)},s.prototype.error=function(t){return this.then((function(){throw new Error(t)}))},s.prototype.using=s.prototype.set,s.prototype.saveAs=s.prototype.save,s.prototype.export=s.prototype.output,s.prototype.run=s.prototype.then,E.getPageSize=function(e,r,n){if("object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)){var i=e;e=i.orientation,r=i.unit||r,n=i.format||n}r=r||"mm",n=n||"a4",e=(""+(e||"P")).toLowerCase();var a,o=(""+n).toLowerCase(),s={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(r){case"pt":a=1;break;case"mm":a=72/25.4;break;case"cm":a=72/2.54;break;case"in":a=72;break;case"px":a=.75;break;case"pc":case"em":a=12;break;case"ex":a=6;break;default:throw"Invalid unit: "+r}var c,u=0,h=0;if(s.hasOwnProperty(o))u=s[o][1]/a,h=s[o][0]/a;else try{u=n[1],h=n[0]}catch(t){throw new Error("Invalid format: "+n)}if("p"===e||"portrait"===e)e="p",h>u&&(c=h,h=u,u=c);else{if("l"!==e&&"landscape"!==e)throw"Invalid orientation: "+e;e="l",u>h&&(c=h,h=u,u=c)}return{width:h,height:u,unit:r,k:a,orientation:e}},e.html=function(t,e){(e=e||{}).callback=e.callback||function(){},e.html2canvas=e.html2canvas||{},e.html2canvas.canvas=e.html2canvas.canvas||this.canvas,e.jsPDF=e.jsPDF||this,e.fontFaces=e.fontFaces?e.fontFaces.map(jt):null;var r=new s(e);return e.worker?r:r.from(t).doCallback()}}(E.API),E.API.addJS=function(t){return Ht=t,this.internal.events.subscribe("postPutResources",(function(){Ut=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(Ut+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),zt=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+Ht+")"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){void 0!==Ut&&void 0!==zt&&this.internal.out("/Names <</JavaScript "+Ut+" 0 R>>")})),this},
/**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e;t.events.push(["postPutResources",function(){var t=this,r=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var n=t.outline.render().split(/\r\n/),i=0;i<n.length;i++){var a=n[i],o=r.exec(a);if(null!=o){var s=o[1];t.internal.newObjectDeferredBegin(s,!1)}t.internal.write(a)}if(this.outline.createNamedDestinations){var c=this.internal.pages.length,u=[];for(i=0;i<c;i++){var h=t.internal.newObject();u.push(h);var l=t.internal.getPageInfo(i+1);t.internal.write("<< /D["+l.objId+" 0 R /XYZ null null null]>> endobj")}var f=t.internal.newObject();t.internal.write("<< /Names [ ");for(i=0;i<u.length;i++)t.internal.write("(page_"+(i+1)+")"+u[i]+" 0 R");t.internal.write(" ] >>","endobj"),e=t.internal.newObject(),t.internal.write("<< /Dests "+f+" 0 R"),t.internal.write(">>","endobj")}}]),t.events.push(["putCatalog",function(){this.outline.root.children.length>0&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+e+" 0 R"))}]),t.events.push(["initialized",function(){var t=this;t.outline={createNamedDestinations:!1,root:{children:[]}},t.outline.add=function(t,e,r){var n={title:e,options:r,children:[]};return null==t&&(t=this.root),t.children.push(n),n},t.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=t,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},t.outline.genIds_r=function(e){e.id=t.internal.newObjectDeferred();for(var r=0;r<e.children.length;r++)this.genIds_r(e.children[r])},t.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),t.children.length>0&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},t.outline.renderItems=function(e){for(var r=this.ctx.pdf.internal.getVerticalCoordinateString,n=0;n<e.children.length;n++){var i=e.children[n];this.objStart(i),this.line("/Title "+this.makeString(i.title)),this.line("/Parent "+this.makeRef(e)),n>0&&this.line("/Prev "+this.makeRef(e.children[n-1])),n<e.children.length-1&&this.line("/Next "+this.makeRef(e.children[n+1])),i.children.length>0&&(this.line("/First "+this.makeRef(i.children[0])),this.line("/Last "+this.makeRef(i.children[i.children.length-1])));var a=this.count=this.count_r({count:0},i);if(a>0&&this.line("/Count "+a),i.options&&i.options.pageNumber){var o=t.internal.getPageInfo(i.options.pageNumber);this.line("/Dest ["+o.objId+" 0 R /XYZ 0 "+r(0)+" 0]")}this.objEnd()}for(var s=0;s<e.children.length;s++)this.renderItems(e.children[s])},t.outline.line=function(t){this.ctx.val+=t+"\r\n"},t.outline.makeRef=function(t){return t.id+" 0 R"},t.outline.makeString=function(e){return"("+t.internal.pdfEscape(e)+")"},t.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},t.outline.objEnd=function(){this.ctx.val+=">> \r\nendobj\r\n"},t.outline.count_r=function(t,e){for(var r=0;r<e.children.length;r++)t.count++,this.count_r(t,e.children[r]);return t.count}}])}(E.API),
/**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=[192,193,194,195,196,197,198,199];t.processJPEG=function(t,r,n,i,a,o){var s,c=this.decode.DCT_DECODE,u=null;if("string"==typeof t||this.__addimage__.isArrayBuffer(t)||this.__addimage__.isArrayBufferView(t)){switch(t=a||t,t=this.__addimage__.isArrayBuffer(t)?new Uint8Array(t):t,(s=function(t){for(var r,n=256*t.charCodeAt(4)+t.charCodeAt(5),i=t.length,a={width:0,height:0,numcomponents:1},o=4;o<i;o+=2){if(o+=n,-1!==e.indexOf(t.charCodeAt(o+1))){r=256*t.charCodeAt(o+5)+t.charCodeAt(o+6),a={width:256*t.charCodeAt(o+7)+t.charCodeAt(o+8),height:r,numcomponents:t.charCodeAt(o+9)};break}n=256*t.charCodeAt(o+2)+t.charCodeAt(o+3)}return a}(t=this.__addimage__.isArrayBufferView(t)?this.__addimage__.arrayBufferToBinaryString(t):t)).numcomponents){case 1:o=this.color_spaces.DEVICE_GRAY;break;case 4:o=this.color_spaces.DEVICE_CMYK;break;case 3:o=this.color_spaces.DEVICE_RGB}u={data:t,width:s.width,height:s.height,colorSpace:o,bitsPerComponent:8,filter:c,index:r,alias:n}}return u}}(E.API);var Vt,Gt,Yt,Jt,Xt,Kt=function(){var t,e,i;function a(t){var e,r,n,i,a,o,s,c,u,h,l,f,d,p;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},o=null;;){switch(e=this.readUInt32(),u=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":o&&this.animation.frames.push(o),this.pos+=4,o={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},a=this.readUInt16(),i=this.readUInt16()||100,o.delay=1e3*a/i,o.disposeOp=this.data[this.pos++],o.blendOp=this.data[this.pos++],o.data=[];break;case"IDAT":case"fdAT":for("fdAT"===u&&(this.pos+=4,e-=4),t=(null!=o?o.data:void 0)||this.imgData,f=0;0<=e?f<e:f>e;0<=e?++f:--f)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(n=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>n)throw new Error("More transparent colors than palette size");if((h=n-this.transparency.indexed.length)>0)for(d=0;0<=h?d<h:d>h;0<=h?++d:--d)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":s=(l=this.read(e)).indexOf(0),c=String.fromCharCode.apply(String,l.slice(0,s)),this.text[c]=String.fromCharCode.apply(String,l.slice(s+1));break;case"IEND":return o&&this.animation.frames.push(o),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(p=this.colorType)||6===p,r=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*r,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}a.prototype.read=function(t){var e,r;for(r=[],e=0;0<=t?e<t:e>t;0<=t?++e:--e)r.push(this.data[this.pos++]);return r},a.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},a.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},a.prototype.decodePixels=function(t){var e=this.pixelBitlength/8,n=new Uint8Array(this.width*this.height*e),i=0,a=this;if(null==t&&(t=this.imgData),0===t.length)return new Uint8Array(0);function o(r,o,s,c){var u,h,l,f,d,p,g,m,v,b,y,w,N,L,A,x,S,_,P,k,I,F=Math.ceil((a.width-r)/s),C=Math.ceil((a.height-o)/c),j=a.width==F&&a.height==C;for(L=e*F,w=j?n:new Uint8Array(L*C),p=t.length,N=0,h=0;N<C&&i<p;){switch(t[i++]){case 0:for(f=S=0;S<L;f=S+=1)w[h++]=t[i++];break;case 1:for(f=_=0;_<L;f=_+=1)u=t[i++],d=f<e?0:w[h-e],w[h++]=(u+d)%256;break;case 2:for(f=P=0;P<L;f=P+=1)u=t[i++],l=(f-f%e)/e,A=N&&w[(N-1)*L+l*e+f%e],w[h++]=(A+u)%256;break;case 3:for(f=k=0;k<L;f=k+=1)u=t[i++],l=(f-f%e)/e,d=f<e?0:w[h-e],A=N&&w[(N-1)*L+l*e+f%e],w[h++]=(u+Math.floor((d+A)/2))%256;break;case 4:for(f=I=0;I<L;f=I+=1)u=t[i++],l=(f-f%e)/e,d=f<e?0:w[h-e],0===N?A=x=0:(A=w[(N-1)*L+l*e+f%e],x=l&&w[(N-1)*L+(l-1)*e+f%e]),g=d+A-x,m=Math.abs(g-d),b=Math.abs(g-A),y=Math.abs(g-x),v=m<=b&&m<=y?d:b<=y?A:x,w[h++]=(u+v)%256;break;default:throw new Error("Invalid filter algorithm: "+t[i-1])}if(!j){var O=((o+N*c)*a.width+r)*e,B=N*L;for(f=0;f<F;f+=1){for(var M=0;M<e;M+=1)n[O++]=w[B++];O+=(s-1)*e}}N++}}return t=Object(fflate__WEBPACK_IMPORTED_MODULE_1__[/* unzlibSync */ "a"])(t),1==a.interlaceMethod?(o(0,0,8,8),o(4,0,8,8),o(0,4,4,8),o(2,0,4,4),o(0,2,2,4),o(1,0,2,2),o(0,1,1,2)):o(0,0,1,1),n},a.prototype.decodePalette=function(){var t,e,r,n,i,a,o,s,c;for(r=this.palette,a=this.transparency.indexed||[],i=new Uint8Array((a.length||0)+r.length),n=0,t=0,e=o=0,s=r.length;o<s;e=o+=3)i[n++]=r[e],i[n++]=r[e+1],i[n++]=r[e+2],i[n++]=null!=(c=a[t++])?c:255;return i},a.prototype.copyToImageData=function(t,e){var r,n,i,a,o,s,c,u,h,l,f;if(n=this.colors,h=null,r=this.hasAlphaChannel,this.palette.length&&(h=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),n=4,r=!0),u=(i=t.data||t).length,o=h||e,a=s=0,1===n)for(;a<u;)c=h?4*e[a/4]:s,l=o[c++],i[a++]=l,i[a++]=l,i[a++]=l,i[a++]=r?o[c++]:255,s=c;else for(;a<u;)c=h?4*e[a/4]:s,i[a++]=o[c++],i[a++]=o[c++],i[a++]=o[c++],i[a++]=r?o[c++]:255,s=c},a.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};var o=function(){if("[object Window]"===Object.prototype.toString.call(n)){try{e=n.document.createElement("canvas"),i=e.getContext("2d")}catch(t){return!1}return!0}return!1};return o(),t=function(t){var r;if(!0===o())return i.width=t.width,i.height=t.height,i.clearRect(0,0,t.width,t.height),i.putImageData(t,0,0),(r=new Image).src=e.toDataURL(),r;throw new Error("This method requires a Browser with Canvas-capability.")},a.prototype.decodeFrames=function(e){var r,n,i,a,o,s,c,u;if(this.animation){for(u=[],n=o=0,s=(c=this.animation.frames).length;o<s;n=++o)r=c[n],i=e.createImageData(r.width,r.height),a=this.decodePixels(new Uint8Array(r.data)),this.copyToImageData(i,a),r.imageData=i,u.push(r.image=t(i));return u}},a.prototype.renderFrame=function(t,e){var r,n,i;return r=(n=this.animation.frames)[e],i=n[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=i?i.disposeOp:void 0)?t.clearRect(i.xOffset,i.yOffset,i.width,i.height):2===(null!=i?i.disposeOp:void 0)&&t.putImageData(i.imageData,i.xOffset,i.yOffset),0===r.blendOp&&t.clearRect(r.xOffset,r.yOffset,r.width,r.height),t.drawImage(r.image,r.xOffset,r.yOffset)},a.prototype.animate=function(t){var e,r,n,i,a,o,s=this;return r=0,o=this.animation,i=o.numFrames,n=o.frames,a=o.numPlays,(e=function(){var o,c;if(o=r++%i,c=n[o],s.renderFrame(t,o),i>1&&r/i<a)return s.animation._timeout=setTimeout(e,c.delay)})()},a.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},a.prototype.render=function(t){var e,r;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(r=e.createImageData(this.width,this.height),this.copyToImageData(r,this.decodePixels()),e.putImageData(r,0,0))},a}();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
/**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */
function Zt(t){var e=0;if(71!==t[e++]||73!==t[e++]||70!==t[e++]||56!==t[e++]||56!=(t[e++]+1&253)||97!==t[e++])throw new Error("Invalid GIF 87a/89a header.");var r=t[e++]|t[e++]<<8,n=t[e++]|t[e++]<<8,i=t[e++],a=i>>7,o=1<<(7&i)+1;t[e++];t[e++];var s=null,c=null;a&&(s=e,c=o,e+=3*o);var u=!0,h=[],l=0,f=null,d=0,p=null;for(this.width=r,this.height=n;u&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(11!==t[e]||78==t[e+1]&&69==t[e+2]&&84==t[e+3]&&83==t[e+4]&&67==t[e+5]&&65==t[e+6]&&80==t[e+7]&&69==t[e+8]&&50==t[e+9]&&46==t[e+10]&&48==t[e+11]&&3==t[e+12]&&1==t[e+13]&&0==t[e+16])e+=14,p=t[e++]|t[e++]<<8,e++;else for(e+=12;;){if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}break;case 249:if(4!==t[e++]||0!==t[e+4])throw new Error("Invalid graphics extension block.");var g=t[e++];l=t[e++]|t[e++]<<8,f=t[e++],0==(1&g)&&(f=null),d=g>>2&7,e++;break;case 254:for(;;){if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var m=t[e++]|t[e++]<<8,v=t[e++]|t[e++]<<8,b=t[e++]|t[e++]<<8,y=t[e++]|t[e++]<<8,w=t[e++],N=w>>6&1,L=1<<(7&w)+1,A=s,x=c,S=!1;if(w>>7){S=!0;A=e,x=L,e+=3*L}var _=e;for(e++;;){var P;if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}h.push({x:m,y:v,width:b,height:y,has_local_palette:S,palette_offset:A,palette_size:x,data_offset:_,data_length:e-_,transparent_index:f,interlaced:!!N,delay:l,disposal:d});break;case 59:u=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return h.length},this.loopCount=function(){return p},this.frameInfo=function(t){if(t<0||t>=h.length)throw new Error("Frame index out of range.");return h[t]},this.decodeAndBlitFrameBGRA=function(e,n){var i=this.frameInfo(e),a=i.width*i.height,o=new Uint8Array(a);$t(t,i.data_offset,o,a);var s=i.palette_offset,c=i.transparent_index;null===c&&(c=256);var u=i.width,h=r-u,l=u,f=4*(i.y*r+i.x),d=4*((i.y+i.height)*r+i.x),p=f,g=4*h;!0===i.interlaced&&(g+=4*r*7);for(var m=8,v=0,b=o.length;v<b;++v){var y=o[v];if(0===l&&(l=u,(p+=g)>=d&&(g=4*h+4*r*(m-1),p=f+(u+h)*(m<<1),m>>=1)),y===c)p+=4;else{var w=t[s+3*y],N=t[s+3*y+1],L=t[s+3*y+2];n[p++]=L,n[p++]=N,n[p++]=w,n[p++]=255}--l}},this.decodeAndBlitFrameRGBA=function(e,n){var i=this.frameInfo(e),a=i.width*i.height,o=new Uint8Array(a);$t(t,i.data_offset,o,a);var s=i.palette_offset,c=i.transparent_index;null===c&&(c=256);var u=i.width,h=r-u,l=u,f=4*(i.y*r+i.x),d=4*((i.y+i.height)*r+i.x),p=f,g=4*h;!0===i.interlaced&&(g+=4*r*7);for(var m=8,v=0,b=o.length;v<b;++v){var y=o[v];if(0===l&&(l=u,(p+=g)>=d&&(g=4*h+4*r*(m-1),p=f+(u+h)*(m<<1),m>>=1)),y===c)p+=4;else{var w=t[s+3*y],N=t[s+3*y+1],L=t[s+3*y+2];n[p++]=w,n[p++]=N,n[p++]=L,n[p++]=255}--l}}}function $t(t,e,r,n){for(var i=t[e++],o=1<<i,s=o+1,c=s+1,u=i+1,h=(1<<u)-1,l=0,f=0,d=0,p=t[e++],g=new Int32Array(4096),m=null;;){for(;l<16&&0!==p;)f|=t[e++]<<l,l+=8,1===p?p=t[e++]:--p;if(l<u)break;var v=f&h;if(f>>=u,l-=u,v!==o){if(v===s)break;for(var b=v<c?v:m,y=0,w=b;w>o;)w=g[w]>>8,++y;var N=w;if(d+y+(b!==v?1:0)>n)return void a.log("Warning, gif stream longer than expected.");r[d++]=N;var L=d+=y;for(b!==v&&(r[d++]=N),w=b;y--;)w=g[w],r[--L]=255&w,w>>=8;null!==m&&c<4096&&(g[c++]=m<<8|N,c>=h+1&&u<12&&(++u,h=h<<1|1)),m=v}else c=s+1,h=(1<<(u=i+1))-1,m=null}return d!==n&&a.log("Warning, gif stream shorter than expected."),r}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function Qt(t){var e,r,n,i,a,o=Math.floor,s=new Array(64),c=new Array(64),u=new Array(64),h=new Array(64),l=new Array(65535),f=new Array(65535),d=new Array(64),p=new Array(64),g=[],m=0,v=7,b=new Array(64),y=new Array(64),w=new Array(64),N=new Array(256),L=new Array(2048),A=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],x=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],S=[0,1,2,3,4,5,6,7,8,9,10,11],_=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],P=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],k=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],I=[0,1,2,3,4,5,6,7,8,9,10,11],F=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],C=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function j(t,e){for(var r=0,n=0,i=new Array,a=1;a<=16;a++){for(var o=1;o<=t[a];o++)i[e[n]]=[],i[e[n]][0]=r,i[e[n]][1]=a,n++,r++;r*=2}return i}function O(t){for(var e=t[0],r=t[1]-1;r>=0;)e&1<<r&&(m|=1<<v),r--,--v<0&&(255==m?(B(255),B(0)):B(m),v=7,m=0)}function B(t){g.push(t)}function M(t){B(t>>8&255),B(255&t)}function E(t,e,r,n,i){for(var a,o=i[0],s=i[240],c=function(t,e){var r,n,i,a,o,s,c,u,h,l,f=0;for(h=0;h<8;++h){r=t[f],n=t[f+1],i=t[f+2],a=t[f+3],o=t[f+4],s=t[f+5],c=t[f+6];var p=r+(u=t[f+7]),g=r-u,m=n+c,v=n-c,b=i+s,y=i-s,w=a+o,N=a-o,L=p+w,A=p-w,x=m+b,S=m-b;t[f]=L+x,t[f+4]=L-x;var _=.707106781*(S+A);t[f+2]=A+_,t[f+6]=A-_;var P=.382683433*((L=N+y)-(S=v+g)),k=.5411961*L+P,I=1.306562965*S+P,F=.707106781*(x=y+v),C=g+F,j=g-F;t[f+5]=j+k,t[f+3]=j-k,t[f+1]=C+I,t[f+7]=C-I,f+=8}for(f=0,h=0;h<8;++h){r=t[f],n=t[f+8],i=t[f+16],a=t[f+24],o=t[f+32],s=t[f+40],c=t[f+48];var O=r+(u=t[f+56]),B=r-u,M=n+c,E=n-c,q=i+s,D=i-s,R=a+o,T=a-o,U=O+R,z=O-R,H=M+q,W=M-q;t[f]=U+H,t[f+32]=U-H;var V=.707106781*(W+z);t[f+16]=z+V,t[f+48]=z-V;var G=.382683433*((U=T+D)-(W=E+B)),Y=.5411961*U+G,J=1.306562965*W+G,X=.707106781*(H=D+E),K=B+X,Z=B-X;t[f+40]=Z+Y,t[f+24]=Z-Y,t[f+8]=K+J,t[f+56]=K-J,f++}for(h=0;h<64;++h)l=t[h]*e[h],d[h]=l>0?l+.5|0:l-.5|0;return d}(t,e),u=0;u<64;++u)p[A[u]]=c[u];var h=p[0]-r;r=p[0],0==h?O(n[0]):(O(n[f[a=32767+h]]),O(l[a]));for(var g=63;g>0&&0==p[g];)g--;if(0==g)return O(o),r;for(var m,v=1;v<=g;){for(var b=v;0==p[v]&&v<=g;)++v;var y=v-b;if(y>=16){m=y>>4;for(var w=1;w<=m;++w)O(s);y&=15}a=32767+p[v],O(i[(y<<4)+f[a]]),O(l[a]),v++}return 63!=g&&O(o),r}function q(t){(t=Math.min(Math.max(t,1),100),a!=t)&&(!function(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],r=0;r<64;r++){var n=o((e[r]*t+50)/100);n=Math.min(Math.max(n,1),255),s[A[r]]=n}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],a=0;a<64;a++){var l=o((i[a]*t+50)/100);l=Math.min(Math.max(l,1),255),c[A[a]]=l}for(var f=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],d=0,p=0;p<8;p++)for(var g=0;g<8;g++)u[d]=1/(s[A[d]]*f[p]*f[g]*8),h[d]=1/(c[A[d]]*f[p]*f[g]*8),d++}(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),a=t)}this.encode=function(t,a){a&&q(a),g=new Array,m=0,v=7,M(65496),M(65504),M(16),B(74),B(70),B(73),B(70),B(0),B(1),B(1),B(0),M(1),M(1),B(0),B(0),function(){M(65499),M(132),B(0);for(var t=0;t<64;t++)B(s[t]);B(1);for(var e=0;e<64;e++)B(c[e])}(),function(t,e){M(65472),M(17),B(8),M(e),M(t),B(3),B(1),B(17),B(0),B(2),B(17),B(1),B(3),B(17),B(1)}(t.width,t.height),function(){M(65476),M(418),B(0);for(var t=0;t<16;t++)B(x[t+1]);for(var e=0;e<=11;e++)B(S[e]);B(16);for(var r=0;r<16;r++)B(_[r+1]);for(var n=0;n<=161;n++)B(P[n]);B(1);for(var i=0;i<16;i++)B(k[i+1]);for(var a=0;a<=11;a++)B(I[a]);B(17);for(var o=0;o<16;o++)B(F[o+1]);for(var s=0;s<=161;s++)B(C[s])}(),M(65498),M(12),B(3),B(1),B(0),B(2),B(17),B(3),B(17),B(0),B(63),B(0);var o=0,l=0,f=0;m=0,v=7,this.encode.displayName="_encode_";for(var d,p,N,A,j,D,R,T,U,z=t.data,H=t.width,W=t.height,V=4*H,G=0;G<W;){for(d=0;d<V;){for(j=V*G+d,R=-1,T=0,U=0;U<64;U++)D=j+(T=U>>3)*V+(R=4*(7&U)),G+T>=W&&(D-=V*(G+1+T-W)),d+R>=V&&(D-=d+R-V+4),p=z[D++],N=z[D++],A=z[D++],b[U]=(L[p]+L[N+256>>0]+L[A+512>>0]>>16)-128,y[U]=(L[p+768>>0]+L[N+1024>>0]+L[A+1280>>0]>>16)-128,w[U]=(L[p+1280>>0]+L[N+1536>>0]+L[A+1792>>0]>>16)-128;o=E(b,u,o,e,n),l=E(y,h,l,r,i),f=E(w,h,f,r,i),d+=32}G+=8}if(v>=0){var Y=[];Y[1]=v+1,Y[0]=(1<<v+1)-1,O(Y)}return M(65497),new Uint8Array(g)},t=t||50,function(){for(var t=String.fromCharCode,e=0;e<256;e++)N[e]=t(e)}(),e=j(x,S),r=j(k,I),n=j(_,P),i=j(F,C),function(){for(var t=1,e=2,r=1;r<=15;r++){for(var n=t;n<e;n++)f[32767+n]=r,l[32767+n]=[],l[32767+n][1]=r,l[32767+n][0]=n;for(var i=-(e-1);i<=-t;i++)f[32767+i]=r,l[32767+i]=[],l[32767+i][1]=r,l[32767+i][0]=e-1+i;t<<=1,e<<=1}}(),function(){for(var t=0;t<256;t++)L[t]=19595*t,L[t+256>>0]=38470*t,L[t+512>>0]=7471*t+32768,L[t+768>>0]=-11059*t,L[t+1024>>0]=-21709*t,L[t+1280>>0]=32768*t+8421375,L[t+1536>>0]=-27439*t,L[t+1792>>0]=-5329*t}(),q(t)}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function te(t,e){if(this.pos=0,this.buffer=t,this.datav=new DataView(t.buffer),this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,-1===["BM","BA","CI","CP","IC","PT"].indexOf(this.flag))throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function ee(t){function e(t){if(!t)throw Error("assert :P")}function r(t,e,r){for(var n=0;4>n;n++)if(t[e+n]!=r.charCodeAt(n))return!0;return!1}function n(t,e,r,n,i){for(var a=0;a<i;a++)t[e+a]=r[n+a]}function i(t,e,r,n){for(var i=0;i<n;i++)t[e+i]=r}function a(t){return new Int32Array(t)}function o(t,e){for(var r=[],n=0;n<t;n++)r.push(new e);return r}function s(t,e){var r=[];return function t(r,n,i){for(var a=i[n],o=0;o<a&&(r.push(i.length>n+1?[]:new e),!(i.length<n+1));o++)t(r[o],n+1,i)}(r,0,t),r}var c=function(){var t=this;function c(t,e){for(var r=1<<e-1>>>0;t&r;)r>>>=1;return r?(t&r-1)+r:t}function u(t,r,n,i,a){e(!(i%n));do{t[r+(i-=n)]=a}while(0<i)}function h(t,r,n,i,o){if(e(2328>=o),512>=o)var s=a(512);else if(null==(s=a(o)))return 0;return function(t,r,n,i,o,s){var h,f,d=r,p=1<<n,g=a(16),m=a(16);for(e(0!=o),e(null!=i),e(null!=t),e(0<n),f=0;f<o;++f){if(15<i[f])return 0;++g[i[f]]}if(g[0]==o)return 0;for(m[1]=0,h=1;15>h;++h){if(g[h]>1<<h)return 0;m[h+1]=m[h]+g[h]}for(f=0;f<o;++f)h=i[f],0<i[f]&&(s[m[h]++]=f);if(1==m[15])return(i=new l).g=0,i.value=s[0],u(t,d,1,p,i),p;var v,b=-1,y=p-1,w=0,N=1,L=1,A=1<<n;for(f=0,h=1,o=2;h<=n;++h,o<<=1){if(N+=L<<=1,0>(L-=g[h]))return 0;for(;0<g[h];--g[h])(i=new l).g=h,i.value=s[f++],u(t,d+w,o,A,i),w=c(w,h)}for(h=n+1,o=2;15>=h;++h,o<<=1){if(N+=L<<=1,0>(L-=g[h]))return 0;for(;0<g[h];--g[h]){if(i=new l,(w&y)!=b){for(d+=A,v=1<<(b=h)-n;15>b&&!(0>=(v-=g[b]));)++b,v<<=1;p+=A=1<<(v=b-n),t[r+(b=w&y)].g=v+n,t[r+b].value=d-r-b}i.g=h-n,i.value=s[f++],u(t,d+(w>>n),o,A,i),w=c(w,h)}}return N!=2*m[15]-1?0:p}(t,r,n,i,o,s)}function l(){this.value=this.g=0}function f(){this.value=this.g=0}function d(){this.G=o(5,l),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=o(Dr,f)}function p(t,r,n,i){e(null!=t),e(null!=r),e(2147483648>i),t.Ca=254,t.I=0,t.b=-8,t.Ka=0,t.oa=r,t.pa=n,t.Jd=r,t.Yc=n+i,t.Zc=4<=i?n+i-4+1:n,_(t)}function g(t,e){for(var r=0;0<e--;)r|=k(t,128)<<e;return r}function m(t,e){var r=g(t,e);return P(t)?-r:r}function v(t,r,n,i){var a,o=0;for(e(null!=t),e(null!=r),e(4294967288>i),t.Sb=i,t.Ra=0,t.u=0,t.h=0,4<i&&(i=4),a=0;a<i;++a)o+=r[n+a]<<8*a;t.Ra=o,t.bb=i,t.oa=r,t.pa=n}function b(t){for(;8<=t.u&&t.bb<t.Sb;)t.Ra>>>=8,t.Ra+=t.oa[t.pa+t.bb]<<Ur-8>>>0,++t.bb,t.u-=8;A(t)&&(t.h=1,t.u=0)}function y(t,r){if(e(0<=r),!t.h&&r<=Tr){var n=L(t)&Rr[r];return t.u+=r,b(t),n}return t.h=1,t.u=0}function w(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function N(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function L(t){return t.Ra>>>(t.u&Ur-1)>>>0}function A(t){return e(t.bb<=t.Sb),t.h||t.bb==t.Sb&&t.u>Ur}function x(t,e){t.u=e,t.h=A(t)}function S(t){t.u>=zr&&(e(t.u>=zr),b(t))}function _(t){e(null!=t&&null!=t.oa),t.pa<t.Zc?(t.I=(t.oa[t.pa++]|t.I<<8)>>>0,t.b+=8):(e(null!=t&&null!=t.oa),t.pa<t.Yc?(t.b+=8,t.I=t.oa[t.pa++]|t.I<<8):t.Ka?t.b=0:(t.I<<=8,t.b+=8,t.Ka=1))}function P(t){return g(t,1)}function k(t,e){var r=t.Ca;0>t.b&&_(t);var n=t.b,i=r*e>>>8,a=(t.I>>>n>i)+0;for(a?(r-=i,t.I-=i+1<<n>>>0):r=i+1,n=r,i=0;256<=n;)i+=8,n>>=8;return n=7^i+Hr[n],t.b-=n,t.Ca=(r<<n)-1,a}function I(t,e,r){t[e+0]=r>>24&255,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=r>>0&255}function F(t,e){return t[e+0]<<0|t[e+1]<<8}function C(t,e){return F(t,e)|t[e+2]<<16}function j(t,e){return F(t,e)|F(t,e+2)<<16}function O(t,r){var n=1<<r;return e(null!=t),e(0<r),t.X=a(n),null==t.X?0:(t.Mb=32-r,t.Xa=r,1)}function B(t,r){e(null!=t),e(null!=r),e(t.Xa==r.Xa),n(r.X,0,t.X,0,1<<r.Xa)}function M(){this.X=[],this.Xa=this.Mb=0}function E(t,r,n,i){e(null!=n),e(null!=i);var a=n[0],o=i[0];return 0==a&&(a=(t*o+r/2)/r),0==o&&(o=(r*a+t/2)/t),0>=a||0>=o?0:(n[0]=a,i[0]=o,1)}function q(t,e){return t+(1<<e)-1>>>e}function D(t,e){return((4278255360&t)+(4278255360&e)>>>0&4278255360)+((16711935&t)+(16711935&e)>>>0&16711935)>>>0}function R(e,r){t[r]=function(r,n,i,a,o,s,c){var u;for(u=0;u<o;++u){var h=t[e](s[c+u-1],i,a+u);s[c+u]=D(r[n+u],h)}}}function T(){this.ud=this.hd=this.jd=0}function U(t,e){return((4278124286&(t^e))>>>1)+(t&e)>>>0}function z(t){return 0<=t&&256>t?t:0>t?0:255<t?255:void 0}function H(t,e){return z(t+(t-e+.5>>1))}function W(t,e,r){return Math.abs(e-r)-Math.abs(t-r)}function V(t,e,r,n,i,a,o){for(n=a[o-1],r=0;r<i;++r)a[o+r]=n=D(t[e+r],n)}function G(t,e,r,n,i){var a;for(a=0;a<r;++a){var o=t[e+a],s=o>>8&255,c=16711935&(c=(c=16711935&o)+((s<<16)+s));n[i+a]=(4278255360&o)+c>>>0}}function Y(t,e){e.jd=t>>0&255,e.hd=t>>8&255,e.ud=t>>16&255}function J(t,e,r,n,i,a){var o;for(o=0;o<n;++o){var s=e[r+o],c=s>>>8,u=s,h=255&(h=(h=s>>>16)+((t.jd<<24>>24)*(c<<24>>24)>>>5));u=255&(u=(u=u+((t.hd<<24>>24)*(c<<24>>24)>>>5))+((t.ud<<24>>24)*(h<<24>>24)>>>5));i[a+o]=(4278255360&s)+(h<<16)+u}}function X(e,r,n,i,a){t[r]=function(t,e,r,n,o,s,c,u,h){for(n=c;n<u;++n)for(c=0;c<h;++c)o[s++]=a(r[i(t[e++])])},t[e]=function(e,r,o,s,c,u,h){var l=8>>e.b,f=e.Ea,d=e.K[0],p=e.w;if(8>l)for(e=(1<<e.b)-1,p=(1<<l)-1;r<o;++r){var g,m=0;for(g=0;g<f;++g)g&e||(m=i(s[c++])),u[h++]=a(d[m&p]),m>>=l}else t["VP8LMapColor"+n](s,c,d,p,u,h,r,o,f)}}function K(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=a>>0&255}}function Z(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=a>>0&255,n[i++]=a>>24&255}}function $(t,e,r,n,i){for(r=e+r;e<r;){var a=(o=t[e++])>>16&240|o>>12&15,o=o>>0&240|o>>28&15;n[i++]=a,n[i++]=o}}function Q(t,e,r,n,i){for(r=e+r;e<r;){var a=(o=t[e++])>>16&248|o>>13&7,o=o>>5&224|o>>3&31;n[i++]=a,n[i++]=o}}function tt(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>0&255,n[i++]=a>>8&255,n[i++]=a>>16&255}}function et(t,e,r,i,a,o){if(0==o)for(r=e+r;e<r;)I(i,((o=t[e++])[0]>>24|o[1]>>8&65280|o[2]<<8&16711680|o[3]<<24)>>>0),a+=32;else n(i,a,t,e,r)}function rt(e,r){t[r][0]=t[e+"0"],t[r][1]=t[e+"1"],t[r][2]=t[e+"2"],t[r][3]=t[e+"3"],t[r][4]=t[e+"4"],t[r][5]=t[e+"5"],t[r][6]=t[e+"6"],t[r][7]=t[e+"7"],t[r][8]=t[e+"8"],t[r][9]=t[e+"9"],t[r][10]=t[e+"10"],t[r][11]=t[e+"11"],t[r][12]=t[e+"12"],t[r][13]=t[e+"13"],t[r][14]=t[e+"0"],t[r][15]=t[e+"0"]}function nt(t){return t==Hn||t==Wn||t==Vn||t==Gn}function it(){this.eb=[],this.size=this.A=this.fb=0}function at(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function ot(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new it,this.f.kb=new at,this.sd=null}function st(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function ct(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function ut(t){return alert("todo:WebPSamplerProcessPlane"),t.T}function ht(t,e){var r=t.T,i=e.ba.f.RGBA,a=i.eb,o=i.fb+t.ka*i.A,s=vi[e.ba.S],c=t.y,u=t.O,h=t.f,l=t.N,f=t.ea,d=t.W,p=e.cc,g=e.dc,m=e.Mc,v=e.Nc,b=t.ka,y=t.ka+t.T,w=t.U,N=w+1>>1;for(0==b?s(c,u,null,null,h,l,f,d,h,l,f,d,a,o,null,null,w):(s(e.ec,e.fc,c,u,p,g,m,v,h,l,f,d,a,o-i.A,a,o,w),++r);b+2<y;b+=2)p=h,g=l,m=f,v=d,l+=t.Rc,d+=t.Rc,o+=2*i.A,s(c,(u+=2*t.fa)-t.fa,c,u,p,g,m,v,h,l,f,d,a,o-i.A,a,o,w);return u+=t.fa,t.j+y<t.o?(n(e.ec,e.fc,c,u,w),n(e.cc,e.dc,h,l,N),n(e.Mc,e.Nc,f,d,N),r--):1&y||s(c,u,null,null,h,l,f,d,h,l,f,d,a,o+i.A,null,null,w),r}function lt(t,r,n){var i=t.F,a=[t.J];if(null!=i){var o=t.U,s=r.ba.S,c=s==Tn||s==Vn;r=r.ba.f.RGBA;var u=[0],h=t.ka;u[0]=t.T,t.Kb&&(0==h?--u[0]:(--h,a[0]-=t.width),t.j+t.ka+t.T==t.o&&(u[0]=t.o-t.j-h));var l=r.eb;h=r.fb+h*r.A;t=Sn(i,a[0],t.width,o,u,l,h+(c?0:3),r.A),e(n==u),t&&nt(s)&&An(l,h,c,o,u,r.A)}return 0}function ft(t){var e=t.ma,r=e.ba.S,n=11>r,i=r==qn||r==Rn||r==Tn||r==Un||12==r||nt(r);if(e.memory=null,e.Ib=null,e.Jb=null,e.Nd=null,!Mr(e.Oa,t,i?11:12))return 0;if(i&&nt(r)&&br(),t.da)alert("todo:use_scaling");else{if(n){if(e.Ib=ut,t.Kb){if(r=t.U+1>>1,e.memory=a(t.U+2*r),null==e.memory)return 0;e.ec=e.memory,e.fc=0,e.cc=e.ec,e.dc=e.fc+t.U,e.Mc=e.cc,e.Nc=e.dc+r,e.Ib=ht,br()}}else alert("todo:EmitYUV");i&&(e.Jb=lt,n&&mr())}if(n&&!Ci){for(t=0;256>t;++t)ji[t]=89858*(t-128)+_i>>Si,Mi[t]=-22014*(t-128)+_i,Bi[t]=-45773*(t-128),Oi[t]=113618*(t-128)+_i>>Si;for(t=Pi;t<ki;++t)e=76283*(t-16)+_i>>Si,Ei[t-Pi]=Vt(e,255),qi[t-Pi]=Vt(e+8>>4,15);Ci=1}return 1}function dt(t){var r=t.ma,n=t.U,i=t.T;return e(!(1&t.ka)),0>=n||0>=i?0:(n=r.Ib(t,r),null!=r.Jb&&r.Jb(t,r,n),r.Dc+=n,1)}function pt(t){t.ma.memory=null}function gt(t,e,r,n){return 47!=y(t,8)?0:(e[0]=y(t,14)+1,r[0]=y(t,14)+1,n[0]=y(t,1),0!=y(t,3)?0:!t.h)}function mt(t,e){if(4>t)return t+1;var r=t-2>>1;return(2+(1&t)<<r)+y(e,r)+1}function vt(t,e){return 120<e?e-120:1<=(r=((r=$n[e-1])>>4)*t+(8-(15&r)))?r:1;var r}function bt(t,e,r){var n=L(r),i=t[e+=255&n].g-8;return 0<i&&(x(r,r.u+8),n=L(r),e+=t[e].value,e+=n&(1<<i)-1),x(r,r.u+t[e].g),t[e].value}function yt(t,r,n){return n.g+=t.g,n.value+=t.value<<r>>>0,e(8>=n.g),t.g}function wt(t,r,n){var i=t.xc;return e((r=0==i?0:t.vc[t.md*(n>>i)+(r>>i)])<t.Wb),t.Ya[r]}function Nt(t,r,i,a){var o=t.ab,s=t.c*r,c=t.C;r=c+r;var u=i,h=a;for(a=t.Ta,i=t.Ua;0<o--;){var l=t.gc[o],f=c,d=r,p=u,g=h,m=(h=a,u=i,l.Ea);switch(e(f<d),e(d<=l.nc),l.hc){case 2:Gr(p,g,(d-f)*m,h,u);break;case 0:var v=f,b=d,y=h,w=u,N=(_=l).Ea;0==v&&(Wr(p,g,null,null,1,y,w),V(p,g+1,0,0,N-1,y,w+1),g+=N,w+=N,++v);for(var L=1<<_.b,A=L-1,x=q(N,_.b),S=_.K,_=_.w+(v>>_.b)*x;v<b;){var P=S,k=_,I=1;for(Vr(p,g,y,w-N,1,y,w);I<N;){var F=(I&~A)+L;F>N&&(F=N),(0,Zr[P[k++]>>8&15])(p,g+ +I,y,w+I-N,F-I,y,w+I),I=F}g+=N,w+=N,++v&A||(_+=x)}d!=l.nc&&n(h,u-m,h,u+(d-f-1)*m,m);break;case 1:for(m=p,b=g,N=(p=l.Ea)-(w=p&~(y=(g=1<<l.b)-1)),v=q(p,l.b),L=l.K,l=l.w+(f>>l.b)*v;f<d;){for(A=L,x=l,S=new T,_=b+w,P=b+p;b<_;)Y(A[x++],S),$r(S,m,b,g,h,u),b+=g,u+=g;b<P&&(Y(A[x++],S),$r(S,m,b,N,h,u),b+=N,u+=N),++f&y||(l+=v)}break;case 3:if(p==h&&g==u&&0<l.b){for(b=h,p=m=u+(d-f)*m-(w=(d-f)*q(l.Ea,l.b)),g=h,y=u,v=[],w=(N=w)-1;0<=w;--w)v[w]=g[y+w];for(w=N-1;0<=w;--w)b[p+w]=v[w];Yr(l,f,d,h,m,h,u)}else Yr(l,f,d,p,g,h,u)}u=a,h=i}h!=i&&n(a,i,u,h,s)}function Lt(t,r){var n=t.V,i=t.Ba+t.c*t.C,a=r-t.C;if(e(r<=t.l.o),e(16>=a),0<a){var o=t.l,s=t.Ta,c=t.Ua,u=o.width;if(Nt(t,a,n,i),a=c=[c],e((n=t.C)<(i=r)),e(o.v<o.va),i>o.o&&(i=o.o),n<o.j){var h=o.j-n;n=o.j;a[0]+=h*u}if(n>=i?n=0:(a[0]+=4*o.v,o.ka=n-o.j,o.U=o.va-o.v,o.T=i-n,n=1),n){if(c=c[0],11>(n=t.ca).S){var l=n.f.RGBA,f=(i=n.S,a=o.U,o=o.T,h=l.eb,l.A),d=o;for(l=l.fb+t.Ma*l.A;0<d--;){var p=s,g=c,m=a,v=h,b=l;switch(i){case En:Qr(p,g,m,v,b);break;case qn:tn(p,g,m,v,b);break;case Hn:tn(p,g,m,v,b),An(v,b,0,m,1,0);break;case Dn:nn(p,g,m,v,b);break;case Rn:et(p,g,m,v,b,1);break;case Wn:et(p,g,m,v,b,1),An(v,b,0,m,1,0);break;case Tn:et(p,g,m,v,b,0);break;case Vn:et(p,g,m,v,b,0),An(v,b,1,m,1,0);break;case Un:en(p,g,m,v,b);break;case Gn:en(p,g,m,v,b),xn(v,b,m,1,0);break;case zn:rn(p,g,m,v,b);break;default:e(0)}c+=u,l+=f}t.Ma+=o}else alert("todo:EmitRescaledRowsYUVA");e(t.Ma<=n.height)}}t.C=r,e(t.C<=t.i)}function At(t){var e;if(0<t.ua)return 0;for(e=0;e<t.Wb;++e){var r=t.Ya[e].G,n=t.Ya[e].H;if(0<r[1][n[1]+0].g||0<r[2][n[2]+0].g||0<r[3][n[3]+0].g)return 0}return 1}function xt(t,r,n,i,a,o){if(0!=t.Z){var s=t.qd,c=t.rd;for(e(null!=mi[t.Z]);r<n;++r)mi[t.Z](s,c,i,a,i,a,o),s=i,c=a,a+=o;t.qd=s,t.rd=c}}function St(t,r){var n=t.l.ma,i=0==n.Z||1==n.Z?t.l.j:t.C;i=t.C<i?i:t.C;if(e(r<=t.l.o),r>i){var a=t.l.width,o=n.ca,s=n.tb+a*i,c=t.V,u=t.Ba+t.c*i,h=t.gc;e(1==t.ab),e(3==h[0].hc),Xr(h[0],i,r,c,u,o,s),xt(n,i,r,o,s,a)}t.C=t.Ma=r}function _t(t,r,n,i,a,o,s){var c=t.$/i,u=t.$%i,h=t.m,l=t.s,f=n+t.$,d=f;a=n+i*a;var p=n+i*o,g=280+l.ua,m=t.Pb?c:16777216,v=0<l.ua?l.Wa:null,b=l.wc,y=f<p?wt(l,u,c):null;e(t.C<o),e(p<=a);var w=!1;t:for(;;){for(;w||f<p;){var N=0;if(c>=m){var _=f-n;e((m=t).Pb),m.wd=m.m,m.xd=_,0<m.s.ua&&B(m.s.Wa,m.s.vb),m=c+ti}if(u&b||(y=wt(l,u,c)),e(null!=y),y.Qb&&(r[f]=y.qb,w=!0),!w)if(S(h),y.jc){N=h,_=r;var P=f,k=y.pd[L(N)&Dr-1];e(y.jc),256>k.g?(x(N,N.u+k.g),_[P]=k.value,N=0):(x(N,N.u+k.g-256),e(256<=k.value),N=k.value),0==N&&(w=!0)}else N=bt(y.G[0],y.H[0],h);if(h.h)break;if(w||256>N){if(!w)if(y.nd)r[f]=(y.qb|N<<8)>>>0;else{if(S(h),w=bt(y.G[1],y.H[1],h),S(h),_=bt(y.G[2],y.H[2],h),P=bt(y.G[3],y.H[3],h),h.h)break;r[f]=(P<<24|w<<16|N<<8|_)>>>0}if(w=!1,++f,++u>=i&&(u=0,++c,null!=s&&c<=o&&!(c%16)&&s(t,c),null!=v))for(;d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N}else if(280>N){if(N=mt(N-256,h),_=bt(y.G[4],y.H[4],h),S(h),_=vt(i,_=mt(_,h)),h.h)break;if(f-n<_||a-f<N)break t;for(P=0;P<N;++P)r[f+P]=r[f+P-_];for(f+=N,u+=N;u>=i;)u-=i,++c,null!=s&&c<=o&&!(c%16)&&s(t,c);if(e(f<=a),u&b&&(y=wt(l,u,c)),null!=v)for(;d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N}else{if(!(N<g))break t;for(w=N-280,e(null!=v);d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N;N=f,e(!(w>>>(_=v).Xa)),r[N]=_.X[w],w=!0}w||e(h.h==A(h))}if(t.Pb&&h.h&&f<a)e(t.m.h),t.a=5,t.m=t.wd,t.$=t.xd,0<t.s.ua&&B(t.s.vb,t.s.Wa);else{if(h.h)break t;null!=s&&s(t,c>o?o:c),t.a=0,t.$=f-n}return 1}return t.a=3,0}function Pt(t){e(null!=t),t.vc=null,t.yc=null,t.Ya=null;var r=t.Wa;null!=r&&(r.X=null),t.vb=null,e(null!=t)}function kt(){var e=new or;return null==e?null:(e.a=0,e.xb=gi,rt("Predictor","VP8LPredictors"),rt("Predictor","VP8LPredictors_C"),rt("PredictorAdd","VP8LPredictorsAdd"),rt("PredictorAdd","VP8LPredictorsAdd_C"),Gr=G,$r=J,Qr=K,tn=Z,en=$,rn=Q,nn=tt,t.VP8LMapColor32b=Jr,t.VP8LMapColor8b=Kr,e)}function It(t,r,n,s,c){var u=1,f=[t],p=[r],g=s.m,m=s.s,v=null,b=0;t:for(;;){if(n)for(;u&&y(g,1);){var w=f,N=p,A=s,_=1,P=A.m,k=A.gc[A.ab],I=y(P,2);if(A.Oc&1<<I)u=0;else{switch(A.Oc|=1<<I,k.hc=I,k.Ea=w[0],k.nc=N[0],k.K=[null],++A.ab,e(4>=A.ab),I){case 0:case 1:k.b=y(P,3)+2,_=It(q(k.Ea,k.b),q(k.nc,k.b),0,A,k.K),k.K=k.K[0];break;case 3:var F,C=y(P,8)+1,j=16<C?0:4<C?1:2<C?2:3;if(w[0]=q(k.Ea,j),k.b=j,F=_=It(C,1,0,A,k.K)){var B,M=C,E=k,R=1<<(8>>E.b),T=a(R);if(null==T)F=0;else{var U=E.K[0],z=E.w;for(T[0]=E.K[0][0],B=1;B<1*M;++B)T[B]=D(U[z+B],T[B-1]);for(;B<4*R;++B)T[B]=0;E.K[0]=null,E.K[0]=T,F=1}}_=F;break;case 2:break;default:e(0)}u=_}}if(f=f[0],p=p[0],u&&y(g,1)&&!(u=1<=(b=y(g,4))&&11>=b)){s.a=3;break t}var H;if(H=u)e:{var W,V,G,Y=s,J=f,X=p,K=b,Z=n,$=Y.m,Q=Y.s,tt=[null],et=1,rt=0,nt=Qn[K];r:for(;;){if(Z&&y($,1)){var it=y($,3)+2,at=q(J,it),ot=q(X,it),st=at*ot;if(!It(at,ot,0,Y,tt))break r;for(tt=tt[0],Q.xc=it,W=0;W<st;++W){var ct=tt[W]>>8&65535;tt[W]=ct,ct>=et&&(et=ct+1)}}if($.h)break r;for(V=0;5>V;++V){var ut=Xn[V];!V&&0<K&&(ut+=1<<K),rt<ut&&(rt=ut)}var ht=o(et*nt,l),lt=et,ft=o(lt,d);if(null==ft)var dt=null;else e(65536>=lt),dt=ft;var pt=a(rt);if(null==dt||null==pt||null==ht){Y.a=1;break r}var gt=ht;for(W=G=0;W<et;++W){var mt=dt[W],vt=mt.G,bt=mt.H,wt=0,Nt=1,Lt=0;for(V=0;5>V;++V){ut=Xn[V],vt[V]=gt,bt[V]=G,!V&&0<K&&(ut+=1<<K);n:{var At,xt=ut,St=Y,kt=pt,Ft=gt,Ct=G,jt=0,Ot=St.m,Bt=y(Ot,1);if(i(kt,0,0,xt),Bt){var Mt=y(Ot,1)+1,Et=y(Ot,1),qt=y(Ot,0==Et?1:8);kt[qt]=1,2==Mt&&(kt[qt=y(Ot,8)]=1);var Dt=1}else{var Rt=a(19),Tt=y(Ot,4)+4;if(19<Tt){St.a=3;var Ut=0;break n}for(At=0;At<Tt;++At)Rt[Zn[At]]=y(Ot,3);var zt=void 0,Ht=void 0,Wt=St,Vt=Rt,Gt=xt,Yt=kt,Jt=0,Xt=Wt.m,Kt=8,Zt=o(128,l);i:for(;h(Zt,0,7,Vt,19);){if(y(Xt,1)){var $t=2+2*y(Xt,3);if((zt=2+y(Xt,$t))>Gt)break i}else zt=Gt;for(Ht=0;Ht<Gt&&zt--;){S(Xt);var Qt=Zt[0+(127&L(Xt))];x(Xt,Xt.u+Qt.g);var te=Qt.value;if(16>te)Yt[Ht++]=te,0!=te&&(Kt=te);else{var ee=16==te,re=te-16,ne=Jn[re],ie=y(Xt,Yn[re])+ne;if(Ht+ie>Gt)break i;for(var ae=ee?Kt:0;0<ie--;)Yt[Ht++]=ae}}Jt=1;break i}Jt||(Wt.a=3),Dt=Jt}(Dt=Dt&&!Ot.h)&&(jt=h(Ft,Ct,8,kt,xt)),Dt&&0!=jt?Ut=jt:(St.a=3,Ut=0)}if(0==Ut)break r;if(Nt&&1==Kn[V]&&(Nt=0==gt[G].g),wt+=gt[G].g,G+=Ut,3>=V){var oe,se=pt[0];for(oe=1;oe<ut;++oe)pt[oe]>se&&(se=pt[oe]);Lt+=se}}if(mt.nd=Nt,mt.Qb=0,Nt&&(mt.qb=(vt[3][bt[3]+0].value<<24|vt[1][bt[1]+0].value<<16|vt[2][bt[2]+0].value)>>>0,0==wt&&256>vt[0][bt[0]+0].value&&(mt.Qb=1,mt.qb+=vt[0][bt[0]+0].value<<8)),mt.jc=!mt.Qb&&6>Lt,mt.jc){var ce,ue=mt;for(ce=0;ce<Dr;++ce){var he=ce,le=ue.pd[he],fe=ue.G[0][ue.H[0]+he];256<=fe.value?(le.g=fe.g+256,le.value=fe.value):(le.g=0,le.value=0,he>>=yt(fe,8,le),he>>=yt(ue.G[1][ue.H[1]+he],16,le),he>>=yt(ue.G[2][ue.H[2]+he],0,le),yt(ue.G[3][ue.H[3]+he],24,le))}}}Q.vc=tt,Q.Wb=et,Q.Ya=dt,Q.yc=ht,H=1;break e}H=0}if(!(u=H)){s.a=3;break t}if(0<b){if(m.ua=1<<b,!O(m.Wa,b)){s.a=1,u=0;break t}}else m.ua=0;var de=s,pe=f,ge=p,me=de.s,ve=me.xc;if(de.c=pe,de.i=ge,me.md=q(pe,ve),me.wc=0==ve?-1:(1<<ve)-1,n){s.xb=pi;break t}if(null==(v=a(f*p))){s.a=1,u=0;break t}u=(u=_t(s,v,0,f,p,p,null))&&!g.h;break t}return u?(null!=c?c[0]=v:(e(null==v),e(n)),s.$=0,n||Pt(m)):Pt(m),u}function Ft(t,r){var n=t.c*t.i,i=n+r+16*r;return e(t.c<=r),t.V=a(i),null==t.V?(t.Ta=null,t.Ua=0,t.a=1,0):(t.Ta=t.V,t.Ua=t.Ba+n+r,1)}function Ct(t,r){var n=t.C,i=r-n,a=t.V,o=t.Ba+t.c*n;for(e(r<=t.l.o);0<i;){var s=16<i?16:i,c=t.l.ma,u=t.l.width,h=u*s,l=c.ca,f=c.tb+u*n,d=t.Ta,p=t.Ua;Nt(t,s,a,o),_n(d,p,l,f,h),xt(c,n,n+s,l,f,u),i-=s,a+=s*t.c,n+=s}e(n==r),t.C=t.Ma=r}function jt(){this.ub=this.yd=this.td=this.Rb=0}function Ot(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function Bt(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function Mt(){this.Yb=function(){var t=[];return function t(e,r,n){for(var i=n[r],a=0;a<i&&(e.push(n.length>r+1?[]:0),!(n.length<r+1));a++)t(e[a],r+1,n)}(t,0,[3,11]),t}()}function Et(){this.jb=a(3),this.Wc=s([4,8],Mt),this.Xc=s([4,17],Mt)}function qt(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function Dt(){this.ld=this.La=this.dd=this.tc=0}function Rt(){this.Na=this.la=0}function Tt(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Ut(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function zt(){this.uc=this.M=this.Nb=0,this.wa=Array(new Dt),this.Y=0,this.ya=Array(new Ut),this.aa=0,this.l=new Gt}function Ht(){this.y=a(16),this.f=a(8),this.ea=a(8)}function Wt(){this.cb=this.a=0,this.sc="",this.m=new w,this.Od=new jt,this.Kc=new Ot,this.ed=new qt,this.Qa=new Bt,this.Ic=this.$c=this.Aa=0,this.D=new zt,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=o(8,w),this.ia=0,this.pb=o(4,Tt),this.Pa=new Et,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Ht),this.Hd=0,this.rb=Array(new Rt),this.sb=0,this.wa=Array(new Dt),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Ut),this.L=this.aa=0,this.gd=s([4,2],Dt),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Vt(t,e){return 0>t?0:t>e?e:t}function Gt(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function Yt(){var t=new Wt;return null!=t&&(t.a=0,t.sc="OK",t.cb=0,t.Xb=0,ni||(ni=Zt)),t}function Jt(t,e,r){return 0==t.a&&(t.a=e,t.sc=r,t.cb=0),0}function Xt(t,e,r){return 3<=r&&157==t[e+0]&&1==t[e+1]&&42==t[e+2]}function Kt(t,r){if(null==t)return 0;if(t.a=0,t.sc="OK",null==r)return Jt(t,2,"null VP8Io passed to VP8GetHeaders()");var n=r.data,a=r.w,o=r.ha;if(4>o)return Jt(t,7,"Truncated header.");var s=n[a+0]|n[a+1]<<8|n[a+2]<<16,c=t.Od;if(c.Rb=!(1&s),c.td=s>>1&7,c.yd=s>>4&1,c.ub=s>>5,3<c.td)return Jt(t,3,"Incorrect keyframe parameters.");if(!c.yd)return Jt(t,4,"Frame not displayable.");a+=3,o-=3;var u=t.Kc;if(c.Rb){if(7>o)return Jt(t,7,"cannot parse picture header");if(!Xt(n,a,o))return Jt(t,3,"Bad code word");u.c=16383&(n[a+4]<<8|n[a+3]),u.Td=n[a+4]>>6,u.i=16383&(n[a+6]<<8|n[a+5]),u.Ud=n[a+6]>>6,a+=7,o-=7,t.za=u.c+15>>4,t.Ub=u.i+15>>4,r.width=u.c,r.height=u.i,r.Da=0,r.j=0,r.v=0,r.va=r.width,r.o=r.height,r.da=0,r.ib=r.width,r.hb=r.height,r.U=r.width,r.T=r.height,i((s=t.Pa).jb,0,255,s.jb.length),e(null!=(s=t.Qa)),s.Cb=0,s.Bb=0,s.Fb=1,i(s.Zb,0,0,s.Zb.length),i(s.Lb,0,0,s.Lb)}if(c.ub>o)return Jt(t,7,"bad partition length");p(s=t.m,n,a,c.ub),a+=c.ub,o-=c.ub,c.Rb&&(u.Ld=P(s),u.Kd=P(s)),u=t.Qa;var h,l=t.Pa;if(e(null!=s),e(null!=u),u.Cb=P(s),u.Cb){if(u.Bb=P(s),P(s)){for(u.Fb=P(s),h=0;4>h;++h)u.Zb[h]=P(s)?m(s,7):0;for(h=0;4>h;++h)u.Lb[h]=P(s)?m(s,6):0}if(u.Bb)for(h=0;3>h;++h)l.jb[h]=P(s)?g(s,8):255}else u.Bb=0;if(s.Ka)return Jt(t,3,"cannot parse segment header");if((u=t.ed).zd=P(s),u.Tb=g(s,6),u.wb=g(s,3),u.Pc=P(s),u.Pc&&P(s)){for(l=0;4>l;++l)P(s)&&(u.vd[l]=m(s,6));for(l=0;4>l;++l)P(s)&&(u.od[l]=m(s,6))}if(t.L=0==u.Tb?0:u.zd?1:2,s.Ka)return Jt(t,3,"cannot parse filter header");var f=o;if(o=h=a,a=h+f,u=f,t.Xb=(1<<g(t.m,2))-1,f<3*(l=t.Xb))n=7;else{for(h+=3*l,u-=3*l,f=0;f<l;++f){var d=n[o+0]|n[o+1]<<8|n[o+2]<<16;d>u&&(d=u),p(t.Jc[+f],n,h,d),h+=d,u-=d,o+=3}p(t.Jc[+l],n,h,u),n=h<a?0:5}if(0!=n)return Jt(t,n,"cannot parse partitions");for(n=g(h=t.m,7),o=P(h)?m(h,4):0,a=P(h)?m(h,4):0,u=P(h)?m(h,4):0,l=P(h)?m(h,4):0,h=P(h)?m(h,4):0,f=t.Qa,d=0;4>d;++d){if(f.Cb){var v=f.Zb[d];f.Fb||(v+=n)}else{if(0<d){t.pb[d]=t.pb[0];continue}v=n}var b=t.pb[d];b.Sc[0]=ei[Vt(v+o,127)],b.Sc[1]=ri[Vt(v+0,127)],b.Eb[0]=2*ei[Vt(v+a,127)],b.Eb[1]=101581*ri[Vt(v+u,127)]>>16,8>b.Eb[1]&&(b.Eb[1]=8),b.Qc[0]=ei[Vt(v+l,117)],b.Qc[1]=ri[Vt(v+h,127)],b.lc=v+h}if(!c.Rb)return Jt(t,4,"Not a key frame.");for(P(s),c=t.Pa,n=0;4>n;++n){for(o=0;8>o;++o)for(a=0;3>a;++a)for(u=0;11>u;++u)l=k(s,ui[n][o][a][u])?g(s,8):si[n][o][a][u],c.Wc[n][o].Yb[a][u]=l;for(o=0;17>o;++o)c.Xc[n][o]=c.Wc[n][hi[o]]}return t.kc=P(s),t.kc&&(t.Bd=g(s,8)),t.cb=1}function Zt(t,e,r,n,i,a,o){var s=e[i].Yb[r];for(r=0;16>i;++i){if(!k(t,s[r+0]))return i;for(;!k(t,s[r+1]);)if(s=e[++i].Yb[0],r=0,16==i)return 16;var c=e[i+1].Yb;if(k(t,s[r+2])){var u=t,h=0;if(k(u,(f=s)[(l=r)+3]))if(k(u,f[l+6])){for(s=0,l=2*(h=k(u,f[l+8]))+(f=k(u,f[l+9+h])),h=0,f=ii[l];f[s];++s)h+=h+k(u,f[s]);h+=3+(8<<l)}else k(u,f[l+7])?(h=7+2*k(u,165),h+=k(u,145)):h=5+k(u,159);else h=k(u,f[l+4])?3+k(u,f[l+5]):2;s=c[2]}else h=1,s=c[1];c=o+ai[i],0>(u=t).b&&_(u);var l,f=u.b,d=(l=u.Ca>>1)-(u.I>>f)>>31;--u.b,u.Ca+=d,u.Ca|=1,u.I-=(l+1&d)<<f,a[c]=((h^d)-d)*n[(0<i)+0]}return 16}function $t(t){var e=t.rb[t.sb-1];e.la=0,e.Na=0,i(t.zc,0,0,t.zc.length),t.ja=0}function Qt(t,r){if(null==t)return 0;if(null==r)return Jt(t,2,"NULL VP8Io parameter in VP8Decode().");if(!t.cb&&!Kt(t,r))return 0;if(e(t.cb),null==r.ac||r.ac(r)){r.ob&&(t.L=0);var s=Ri[t.L];if(2==t.L?(t.yb=0,t.zb=0):(t.yb=r.v-s>>4,t.zb=r.j-s>>4,0>t.yb&&(t.yb=0),0>t.zb&&(t.zb=0)),t.Va=r.o+15+s>>4,t.Hb=r.va+15+s>>4,t.Hb>t.za&&(t.Hb=t.za),t.Va>t.Ub&&(t.Va=t.Ub),0<t.L){var c=t.ed;for(s=0;4>s;++s){var u;if(t.Qa.Cb){var h=t.Qa.Lb[s];t.Qa.Fb||(h+=c.Tb)}else h=c.Tb;for(u=0;1>=u;++u){var l=t.gd[s][u],f=h;if(c.Pc&&(f+=c.vd[0],u&&(f+=c.od[0])),0<(f=0>f?0:63<f?63:f)){var d=f;0<c.wb&&((d=4<c.wb?d>>2:d>>1)>9-c.wb&&(d=9-c.wb)),1>d&&(d=1),l.dd=d,l.tc=2*f+d,l.ld=40<=f?2:15<=f?1:0}else l.tc=0;l.La=u}}}s=0}else Jt(t,6,"Frame setup failed"),s=t.a;if(s=0==s){if(s){t.$c=0,0<t.Aa||(t.Ic=Ui);t:{s=t.Ic;c=4*(d=t.za);var p=32*d,g=d+1,m=0<t.L?d*(0<t.Aa?2:1):0,v=(2==t.Aa?2:1)*d;if((l=c+832+(u=3*(16*s+Ri[t.L])/2*p)+(h=null!=t.Fa&&0<t.Fa.length?t.Kc.c*t.Kc.i:0))!=l)s=0;else{if(l>t.Vb){if(t.Vb=0,t.Ec=a(l),t.Fc=0,null==t.Ec){s=Jt(t,1,"no memory during frame initialization.");break t}t.Vb=l}l=t.Ec,f=t.Fc,t.Ac=l,t.Bc=f,f+=c,t.Gd=o(p,Ht),t.Hd=0,t.rb=o(g+1,Rt),t.sb=1,t.wa=m?o(m,Dt):null,t.Y=0,t.D.Nb=0,t.D.wa=t.wa,t.D.Y=t.Y,0<t.Aa&&(t.D.Y+=d),e(!0),t.oc=l,t.pc=f,f+=832,t.ya=o(v,Ut),t.aa=0,t.D.ya=t.ya,t.D.aa=t.aa,2==t.Aa&&(t.D.aa+=d),t.R=16*d,t.B=8*d,d=(p=Ri[t.L])*t.R,p=p/2*t.B,t.sa=l,t.ta=f+d,t.qa=t.sa,t.ra=t.ta+16*s*t.R+p,t.Ha=t.qa,t.Ia=t.ra+8*s*t.B+p,t.$c=0,f+=u,t.mb=h?l:null,t.nb=h?f:null,e(f+h<=t.Fc+t.Vb),$t(t),i(t.Ac,t.Bc,0,c),s=1}}if(s){if(r.ka=0,r.y=t.sa,r.O=t.ta,r.f=t.qa,r.N=t.ra,r.ea=t.Ha,r.Vd=t.Ia,r.fa=t.R,r.Rc=t.B,r.F=null,r.J=0,!Cn){for(s=-255;255>=s;++s)Pn[255+s]=0>s?-s:s;for(s=-1020;1020>=s;++s)kn[1020+s]=-128>s?-128:127<s?127:s;for(s=-112;112>=s;++s)In[112+s]=-16>s?-16:15<s?15:s;for(s=-255;510>=s;++s)Fn[255+s]=0>s?0:255<s?255:s;Cn=1}an=ue,on=ae,cn=oe,un=se,hn=ce,sn=ie,ln=Je,fn=Xe,dn=$e,pn=Qe,gn=Ke,mn=Ze,vn=tr,bn=er,yn=ze,wn=He,Nn=We,Ln=Ve,fi[0]=xe,fi[1]=le,fi[2]=Le,fi[3]=Ae,fi[4]=Se,fi[5]=Pe,fi[6]=_e,fi[7]=ke,fi[8]=Fe,fi[9]=Ie,li[0]=ve,li[1]=de,li[2]=pe,li[3]=ge,li[4]=be,li[5]=ye,li[6]=we,di[0]=Be,di[1]=fe,di[2]=Ce,di[3]=je,di[4]=Ee,di[5]=Me,di[6]=qe,s=1}else s=0}s&&(s=function(t,r){for(t.M=0;t.M<t.Va;++t.M){var o,s=t.Jc[t.M&t.Xb],c=t.m,u=t;for(o=0;o<u.za;++o){var h=c,l=u,f=l.Ac,d=l.Bc+4*o,p=l.zc,g=l.ya[l.aa+o];if(l.Qa.Bb?g.$b=k(h,l.Pa.jb[0])?2+k(h,l.Pa.jb[2]):k(h,l.Pa.jb[1]):g.$b=0,l.kc&&(g.Ad=k(h,l.Bd)),g.Za=!k(h,145)+0,g.Za){var m=g.Ob,v=0;for(l=0;4>l;++l){var b,y=p[0+l];for(b=0;4>b;++b){y=ci[f[d+b]][y];for(var w=oi[k(h,y[0])];0<w;)w=oi[2*w+k(h,y[w])];y=-w,f[d+b]=y}n(m,v,f,d,4),v+=4,p[0+l]=y}}else y=k(h,156)?k(h,128)?1:3:k(h,163)?2:0,g.Ob[0]=y,i(f,d,y,4),i(p,0,y,4);g.Dd=k(h,142)?k(h,114)?k(h,183)?1:3:2:0}if(u.m.Ka)return Jt(t,7,"Premature end-of-partition0 encountered.");for(;t.ja<t.za;++t.ja){if(u=s,h=(c=t).rb[c.sb-1],f=c.rb[c.sb+c.ja],o=c.ya[c.aa+c.ja],d=c.kc?o.Ad:0)h.la=f.la=0,o.Za||(h.Na=f.Na=0),o.Hc=0,o.Gc=0,o.ia=0;else{var N,L;h=f,f=u,d=c.Pa.Xc,p=c.ya[c.aa+c.ja],g=c.pb[p.$b];if(l=p.ad,m=0,v=c.rb[c.sb-1],y=b=0,i(l,m,0,384),p.Za)var A=0,x=d[3];else{w=a(16);var S=h.Na+v.Na;if(S=ni(f,d[1],S,g.Eb,0,w,0),h.Na=v.Na=(0<S)+0,1<S)an(w,0,l,m);else{var _=w[0]+3>>3;for(w=0;256>w;w+=16)l[m+w]=_}A=1,x=d[0]}var P=15&h.la,I=15&v.la;for(w=0;4>w;++w){var F=1&I;for(_=L=0;4>_;++_)P=P>>1|(F=(S=ni(f,x,S=F+(1&P),g.Sc,A,l,m))>A)<<7,L=L<<2|(3<S?3:1<S?2:0!=l[m+0]),m+=16;P>>=4,I=I>>1|F<<7,b=(b<<8|L)>>>0}for(x=P,A=I>>4,N=0;4>N;N+=2){for(L=0,P=h.la>>4+N,I=v.la>>4+N,w=0;2>w;++w){for(F=1&I,_=0;2>_;++_)S=F+(1&P),P=P>>1|(F=0<(S=ni(f,d[2],S,g.Qc,0,l,m)))<<3,L=L<<2|(3<S?3:1<S?2:0!=l[m+0]),m+=16;P>>=2,I=I>>1|F<<5}y|=L<<4*N,x|=P<<4<<N,A|=(240&I)<<N}h.la=x,v.la=A,p.Hc=b,p.Gc=y,p.ia=43690&y?0:g.ia,d=!(b|y)}if(0<c.L&&(c.wa[c.Y+c.ja]=c.gd[o.$b][o.Za],c.wa[c.Y+c.ja].La|=!d),u.Ka)return Jt(t,7,"Premature end-of-file encountered.")}if($t(t),c=r,u=1,o=(s=t).D,h=0<s.L&&s.M>=s.zb&&s.M<=s.Va,0==s.Aa)t:{if(o.M=s.M,o.uc=h,Or(s,o),u=1,o=(L=s.D).Nb,h=(y=Ri[s.L])*s.R,f=y/2*s.B,w=16*o*s.R,_=8*o*s.B,d=s.sa,p=s.ta-h+w,g=s.qa,l=s.ra-f+_,m=s.Ha,v=s.Ia-f+_,I=0==(P=L.M),b=P>=s.Va-1,2==s.Aa&&Or(s,L),L.uc)for(F=(S=s).D.M,e(S.D.uc),L=S.yb;L<S.Hb;++L){A=L,x=F;var C=(j=(U=S).D).Nb;N=U.R;var j=j.wa[j.Y+A],O=U.sa,B=U.ta+16*C*N+16*A,M=j.dd,E=j.tc;if(0!=E)if(e(3<=E),1==U.L)0<A&&wn(O,B,N,E+4),j.La&&Ln(O,B,N,E),0<x&&yn(O,B,N,E+4),j.La&&Nn(O,B,N,E);else{var q=U.B,D=U.qa,R=U.ra+8*C*q+8*A,T=U.Ha,U=U.Ia+8*C*q+8*A;C=j.ld;0<A&&(fn(O,B,N,E+4,M,C),pn(D,R,T,U,q,E+4,M,C)),j.La&&(mn(O,B,N,E,M,C),bn(D,R,T,U,q,E,M,C)),0<x&&(ln(O,B,N,E+4,M,C),dn(D,R,T,U,q,E+4,M,C)),j.La&&(gn(O,B,N,E,M,C),vn(D,R,T,U,q,E,M,C))}}if(s.ia&&alert("todo:DitherRow"),null!=c.put){if(L=16*P,P=16*(P+1),I?(c.y=s.sa,c.O=s.ta+w,c.f=s.qa,c.N=s.ra+_,c.ea=s.Ha,c.W=s.Ia+_):(L-=y,c.y=d,c.O=p,c.f=g,c.N=l,c.ea=m,c.W=v),b||(P-=y),P>c.o&&(P=c.o),c.F=null,c.J=null,null!=s.Fa&&0<s.Fa.length&&L<P&&(c.J=lr(s,c,L,P-L),c.F=s.mb,null==c.F&&0==c.F.length)){u=Jt(s,3,"Could not decode alpha data.");break t}L<c.j&&(y=c.j-L,L=c.j,e(!(1&y)),c.O+=s.R*y,c.N+=s.B*(y>>1),c.W+=s.B*(y>>1),null!=c.F&&(c.J+=c.width*y)),L<P&&(c.O+=c.v,c.N+=c.v>>1,c.W+=c.v>>1,null!=c.F&&(c.J+=c.v),c.ka=L-c.j,c.U=c.va-c.v,c.T=P-L,u=c.put(c))}o+1!=s.Ic||b||(n(s.sa,s.ta-h,d,p+16*s.R,h),n(s.qa,s.ra-f,g,l+8*s.B,f),n(s.Ha,s.Ia-f,m,v+8*s.B,f))}if(!u)return Jt(t,6,"Output aborted.")}return 1}(t,r)),null!=r.bc&&r.bc(r),s&=1}return s?(t.cb=0,s):0}function te(t,e,r,n,i){i=t[e+r+32*n]+(i>>3),t[e+r+32*n]=-256&i?0>i?0:255:i}function ee(t,e,r,n,i,a){te(t,e,0,r,n+i),te(t,e,1,r,n+a),te(t,e,2,r,n-a),te(t,e,3,r,n-i)}function re(t){return(20091*t>>16)+t}function ne(t,e,r,n){var i,o=0,s=a(16);for(i=0;4>i;++i){var c=t[e+0]+t[e+8],u=t[e+0]-t[e+8],h=(35468*t[e+4]>>16)-re(t[e+12]),l=re(t[e+4])+(35468*t[e+12]>>16);s[o+0]=c+l,s[o+1]=u+h,s[o+2]=u-h,s[o+3]=c-l,o+=4,e++}for(i=o=0;4>i;++i)c=(t=s[o+0]+4)+s[o+8],u=t-s[o+8],h=(35468*s[o+4]>>16)-re(s[o+12]),te(r,n,0,0,c+(l=re(s[o+4])+(35468*s[o+12]>>16))),te(r,n,1,0,u+h),te(r,n,2,0,u-h),te(r,n,3,0,c-l),o++,n+=32}function ie(t,e,r,n){var i=t[e+0]+4,a=35468*t[e+4]>>16,o=re(t[e+4]),s=35468*t[e+1]>>16;ee(r,n,0,i+o,t=re(t[e+1]),s),ee(r,n,1,i+a,t,s),ee(r,n,2,i-a,t,s),ee(r,n,3,i-o,t,s)}function ae(t,e,r,n,i){ne(t,e,r,n),i&&ne(t,e+16,r,n+4)}function oe(t,e,r,n){on(t,e+0,r,n,1),on(t,e+32,r,n+128,1)}function se(t,e,r,n){var i;for(t=t[e+0]+4,i=0;4>i;++i)for(e=0;4>e;++e)te(r,n,e,i,t)}function ce(t,e,r,n){t[e+0]&&un(t,e+0,r,n),t[e+16]&&un(t,e+16,r,n+4),t[e+32]&&un(t,e+32,r,n+128),t[e+48]&&un(t,e+48,r,n+128+4)}function ue(t,e,r,n){var i,o=a(16);for(i=0;4>i;++i){var s=t[e+0+i]+t[e+12+i],c=t[e+4+i]+t[e+8+i],u=t[e+4+i]-t[e+8+i],h=t[e+0+i]-t[e+12+i];o[0+i]=s+c,o[8+i]=s-c,o[4+i]=h+u,o[12+i]=h-u}for(i=0;4>i;++i)s=(t=o[0+4*i]+3)+o[3+4*i],c=o[1+4*i]+o[2+4*i],u=o[1+4*i]-o[2+4*i],h=t-o[3+4*i],r[n+0]=s+c>>3,r[n+16]=h+u>>3,r[n+32]=s-c>>3,r[n+48]=h-u>>3,n+=64}function he(t,e,r){var n,i=e-32,a=Bn,o=255-t[i-1];for(n=0;n<r;++n){var s,c=a,u=o+t[e-1];for(s=0;s<r;++s)t[e+s]=c[u+t[i+s]];e+=32}}function le(t,e){he(t,e,4)}function fe(t,e){he(t,e,8)}function de(t,e){he(t,e,16)}function pe(t,e){var r;for(r=0;16>r;++r)n(t,e+32*r,t,e-32,16)}function ge(t,e){var r;for(r=16;0<r;--r)i(t,e,t[e-1],16),e+=32}function me(t,e,r){var n;for(n=0;16>n;++n)i(e,r+32*n,t,16)}function ve(t,e){var r,n=16;for(r=0;16>r;++r)n+=t[e-1+32*r]+t[e+r-32];me(n>>5,t,e)}function be(t,e){var r,n=8;for(r=0;16>r;++r)n+=t[e-1+32*r];me(n>>4,t,e)}function ye(t,e){var r,n=8;for(r=0;16>r;++r)n+=t[e+r-32];me(n>>4,t,e)}function we(t,e){me(128,t,e)}function Ne(t,e,r){return t+2*e+r+2>>2}function Le(t,e){var r,i=e-32;i=new Uint8Array([Ne(t[i-1],t[i+0],t[i+1]),Ne(t[i+0],t[i+1],t[i+2]),Ne(t[i+1],t[i+2],t[i+3]),Ne(t[i+2],t[i+3],t[i+4])]);for(r=0;4>r;++r)n(t,e+32*r,i,0,i.length)}function Ae(t,e){var r=t[e-1],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96];I(t,e+0,16843009*Ne(t[e-1-32],r,n)),I(t,e+32,16843009*Ne(r,n,i)),I(t,e+64,16843009*Ne(n,i,a)),I(t,e+96,16843009*Ne(i,a,a))}function xe(t,e){var r,n=4;for(r=0;4>r;++r)n+=t[e+r-32]+t[e-1+32*r];for(n>>=3,r=0;4>r;++r)i(t,e+32*r,n,4)}function Se(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1-32],o=t[e+0-32],s=t[e+1-32],c=t[e+2-32],u=t[e+3-32];t[e+0+96]=Ne(n,i,t[e-1+96]),t[e+1+96]=t[e+0+64]=Ne(r,n,i),t[e+2+96]=t[e+1+64]=t[e+0+32]=Ne(a,r,n),t[e+3+96]=t[e+2+64]=t[e+1+32]=t[e+0+0]=Ne(o,a,r),t[e+3+64]=t[e+2+32]=t[e+1+0]=Ne(s,o,a),t[e+3+32]=t[e+2+0]=Ne(c,s,o),t[e+3+0]=Ne(u,c,s)}function _e(t,e){var r=t[e+1-32],n=t[e+2-32],i=t[e+3-32],a=t[e+4-32],o=t[e+5-32],s=t[e+6-32],c=t[e+7-32];t[e+0+0]=Ne(t[e+0-32],r,n),t[e+1+0]=t[e+0+32]=Ne(r,n,i),t[e+2+0]=t[e+1+32]=t[e+0+64]=Ne(n,i,a),t[e+3+0]=t[e+2+32]=t[e+1+64]=t[e+0+96]=Ne(i,a,o),t[e+3+32]=t[e+2+64]=t[e+1+96]=Ne(a,o,s),t[e+3+64]=t[e+2+96]=Ne(o,s,c),t[e+3+96]=Ne(s,c,c)}function Pe(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1-32],o=t[e+0-32],s=t[e+1-32],c=t[e+2-32],u=t[e+3-32];t[e+0+0]=t[e+1+64]=a+o+1>>1,t[e+1+0]=t[e+2+64]=o+s+1>>1,t[e+2+0]=t[e+3+64]=s+c+1>>1,t[e+3+0]=c+u+1>>1,t[e+0+96]=Ne(i,n,r),t[e+0+64]=Ne(n,r,a),t[e+0+32]=t[e+1+96]=Ne(r,a,o),t[e+1+32]=t[e+2+96]=Ne(a,o,s),t[e+2+32]=t[e+3+96]=Ne(o,s,c),t[e+3+32]=Ne(s,c,u)}function ke(t,e){var r=t[e+0-32],n=t[e+1-32],i=t[e+2-32],a=t[e+3-32],o=t[e+4-32],s=t[e+5-32],c=t[e+6-32],u=t[e+7-32];t[e+0+0]=r+n+1>>1,t[e+1+0]=t[e+0+64]=n+i+1>>1,t[e+2+0]=t[e+1+64]=i+a+1>>1,t[e+3+0]=t[e+2+64]=a+o+1>>1,t[e+0+32]=Ne(r,n,i),t[e+1+32]=t[e+0+96]=Ne(n,i,a),t[e+2+32]=t[e+1+96]=Ne(i,a,o),t[e+3+32]=t[e+2+96]=Ne(a,o,s),t[e+3+64]=Ne(o,s,c),t[e+3+96]=Ne(s,c,u)}function Ie(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96];t[e+0+0]=r+n+1>>1,t[e+2+0]=t[e+0+32]=n+i+1>>1,t[e+2+32]=t[e+0+64]=i+a+1>>1,t[e+1+0]=Ne(r,n,i),t[e+3+0]=t[e+1+32]=Ne(n,i,a),t[e+3+32]=t[e+1+64]=Ne(i,a,a),t[e+3+64]=t[e+2+64]=t[e+0+96]=t[e+1+96]=t[e+2+96]=t[e+3+96]=a}function Fe(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96],o=t[e-1-32],s=t[e+0-32],c=t[e+1-32],u=t[e+2-32];t[e+0+0]=t[e+2+32]=r+o+1>>1,t[e+0+32]=t[e+2+64]=n+r+1>>1,t[e+0+64]=t[e+2+96]=i+n+1>>1,t[e+0+96]=a+i+1>>1,t[e+3+0]=Ne(s,c,u),t[e+2+0]=Ne(o,s,c),t[e+1+0]=t[e+3+32]=Ne(r,o,s),t[e+1+32]=t[e+3+64]=Ne(n,r,o),t[e+1+64]=t[e+3+96]=Ne(i,n,r),t[e+1+96]=Ne(a,i,n)}function Ce(t,e){var r;for(r=0;8>r;++r)n(t,e+32*r,t,e-32,8)}function je(t,e){var r;for(r=0;8>r;++r)i(t,e,t[e-1],8),e+=32}function Oe(t,e,r){var n;for(n=0;8>n;++n)i(e,r+32*n,t,8)}function Be(t,e){var r,n=8;for(r=0;8>r;++r)n+=t[e+r-32]+t[e-1+32*r];Oe(n>>4,t,e)}function Me(t,e){var r,n=4;for(r=0;8>r;++r)n+=t[e+r-32];Oe(n>>3,t,e)}function Ee(t,e){var r,n=4;for(r=0;8>r;++r)n+=t[e-1+32*r];Oe(n>>3,t,e)}function qe(t,e){Oe(128,t,e)}function De(t,e,r){var n=t[e-r],i=t[e+0],a=3*(i-n)+jn[1020+t[e-2*r]-t[e+r]],o=On[112+(a+4>>3)];t[e-r]=Bn[255+n+On[112+(a+3>>3)]],t[e+0]=Bn[255+i-o]}function Re(t,e,r,n){var i=t[e+0],a=t[e+r];return Mn[255+t[e-2*r]-t[e-r]]>n||Mn[255+a-i]>n}function Te(t,e,r,n){return 4*Mn[255+t[e-r]-t[e+0]]+Mn[255+t[e-2*r]-t[e+r]]<=n}function Ue(t,e,r,n,i){var a=t[e-3*r],o=t[e-2*r],s=t[e-r],c=t[e+0],u=t[e+r],h=t[e+2*r],l=t[e+3*r];return 4*Mn[255+s-c]+Mn[255+o-u]>n?0:Mn[255+t[e-4*r]-a]<=i&&Mn[255+a-o]<=i&&Mn[255+o-s]<=i&&Mn[255+l-h]<=i&&Mn[255+h-u]<=i&&Mn[255+u-c]<=i}function ze(t,e,r,n){var i=2*n+1;for(n=0;16>n;++n)Te(t,e+n,r,i)&&De(t,e+n,r)}function He(t,e,r,n){var i=2*n+1;for(n=0;16>n;++n)Te(t,e+n*r,1,i)&&De(t,e+n*r,1)}function We(t,e,r,n){var i;for(i=3;0<i;--i)ze(t,e+=4*r,r,n)}function Ve(t,e,r,n){var i;for(i=3;0<i;--i)He(t,e+=4,r,n)}function Ge(t,e,r,n,i,a,o,s){for(a=2*a+1;0<i--;){if(Ue(t,e,r,a,o))if(Re(t,e,r,s))De(t,e,r);else{var c=t,u=e,h=r,l=c[u-2*h],f=c[u-h],d=c[u+0],p=c[u+h],g=c[u+2*h],m=27*(b=jn[1020+3*(d-f)+jn[1020+l-p]])+63>>7,v=18*b+63>>7,b=9*b+63>>7;c[u-3*h]=Bn[255+c[u-3*h]+b],c[u-2*h]=Bn[255+l+v],c[u-h]=Bn[255+f+m],c[u+0]=Bn[255+d-m],c[u+h]=Bn[255+p-v],c[u+2*h]=Bn[255+g-b]}e+=n}}function Ye(t,e,r,n,i,a,o,s){for(a=2*a+1;0<i--;){if(Ue(t,e,r,a,o))if(Re(t,e,r,s))De(t,e,r);else{var c=t,u=e,h=r,l=c[u-h],f=c[u+0],d=c[u+h],p=On[112+((g=3*(f-l))+4>>3)],g=On[112+(g+3>>3)],m=p+1>>1;c[u-2*h]=Bn[255+c[u-2*h]+m],c[u-h]=Bn[255+l+g],c[u+0]=Bn[255+f-p],c[u+h]=Bn[255+d-m]}e+=n}}function Je(t,e,r,n,i,a){Ge(t,e,r,1,16,n,i,a)}function Xe(t,e,r,n,i,a){Ge(t,e,1,r,16,n,i,a)}function Ke(t,e,r,n,i,a){var o;for(o=3;0<o;--o)Ye(t,e+=4*r,r,1,16,n,i,a)}function Ze(t,e,r,n,i,a){var o;for(o=3;0<o;--o)Ye(t,e+=4,1,r,16,n,i,a)}function $e(t,e,r,n,i,a,o,s){Ge(t,e,i,1,8,a,o,s),Ge(r,n,i,1,8,a,o,s)}function Qe(t,e,r,n,i,a,o,s){Ge(t,e,1,i,8,a,o,s),Ge(r,n,1,i,8,a,o,s)}function tr(t,e,r,n,i,a,o,s){Ye(t,e+4*i,i,1,8,a,o,s),Ye(r,n+4*i,i,1,8,a,o,s)}function er(t,e,r,n,i,a,o,s){Ye(t,e+4,1,i,8,a,o,s),Ye(r,n+4,1,i,8,a,o,s)}function rr(){this.ba=new ot,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new ct,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function nr(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function ir(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function ar(){this.ua=0,this.Wa=new M,this.vb=new M,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new d,this.yc=new l}function or(){this.xb=this.a=0,this.l=new Gt,this.ca=new ot,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new N,this.Pb=0,this.wd=new N,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new ar,this.ab=0,this.gc=o(4,ir),this.Oc=0}function sr(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Gt,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function cr(t,e,r,n,i,a,o){for(t=null==t?0:t[e+0],e=0;e<o;++e)i[a+e]=t+r[n+e]&255,t=i[a+e]}function ur(t,e,r,n,i,a,o){var s;if(null==t)cr(null,null,r,n,i,a,o);else for(s=0;s<o;++s)i[a+s]=t[e+s]+r[n+s]&255}function hr(t,e,r,n,i,a,o){if(null==t)cr(null,null,r,n,i,a,o);else{var s,c=t[e+0],u=c,h=c;for(s=0;s<o;++s)u=h+(c=t[e+s])-u,h=r[n+s]+(-256&u?0>u?0:255:u)&255,u=c,i[a+s]=h}}function lr(t,r,i,o){var s=r.width,c=r.o;if(e(null!=t&&null!=r),0>i||0>=o||i+o>c)return null;if(!t.Cc){if(null==t.ga){var u;if(t.ga=new sr,(u=null==t.ga)||(u=r.width*r.o,e(0==t.Gb.length),t.Gb=a(u),t.Uc=0,null==t.Gb?u=0:(t.mb=t.Gb,t.nb=t.Uc,t.rc=null,u=1),u=!u),!u){u=t.ga;var h=t.Fa,l=t.P,f=t.qc,d=t.mb,p=t.nb,g=l+1,m=f-1,b=u.l;if(e(null!=h&&null!=d&&null!=r),mi[0]=null,mi[1]=cr,mi[2]=ur,mi[3]=hr,u.ca=d,u.tb=p,u.c=r.width,u.i=r.height,e(0<u.c&&0<u.i),1>=f)r=0;else if(u.$a=h[l+0]>>0&3,u.Z=h[l+0]>>2&3,u.Lc=h[l+0]>>4&3,l=h[l+0]>>6&3,0>u.$a||1<u.$a||4<=u.Z||1<u.Lc||l)r=0;else if(b.put=dt,b.ac=ft,b.bc=pt,b.ma=u,b.width=r.width,b.height=r.height,b.Da=r.Da,b.v=r.v,b.va=r.va,b.j=r.j,b.o=r.o,u.$a)t:{e(1==u.$a),r=kt();e:for(;;){if(null==r){r=0;break t}if(e(null!=u),u.mc=r,r.c=u.c,r.i=u.i,r.l=u.l,r.l.ma=u,r.l.width=u.c,r.l.height=u.i,r.a=0,v(r.m,h,g,m),!It(u.c,u.i,1,r,null))break e;if(1==r.ab&&3==r.gc[0].hc&&At(r.s)?(u.ic=1,h=r.c*r.i,r.Ta=null,r.Ua=0,r.V=a(h),r.Ba=0,null==r.V?(r.a=1,r=0):r=1):(u.ic=0,r=Ft(r,u.c)),!r)break e;r=1;break t}u.mc=null,r=0}else r=m>=u.c*u.i;u=!r}if(u)return null;1!=t.ga.Lc?t.Ga=0:o=c-i}e(null!=t.ga),e(i+o<=c);t:{if(r=(h=t.ga).c,c=h.l.o,0==h.$a){if(g=t.rc,m=t.Vc,b=t.Fa,l=t.P+1+i*r,f=t.mb,d=t.nb+i*r,e(l<=t.P+t.qc),0!=h.Z)for(e(null!=mi[h.Z]),u=0;u<o;++u)mi[h.Z](g,m,b,l,f,d,r),g=f,m=d,d+=r,l+=r;else for(u=0;u<o;++u)n(f,d,b,l,r),g=f,m=d,d+=r,l+=r;t.rc=g,t.Vc=m}else{if(e(null!=h.mc),r=i+o,e(null!=(u=h.mc)),e(r<=u.i),u.C>=r)r=1;else if(h.ic||mr(),h.ic){h=u.V,g=u.Ba,m=u.c;var y=u.i,w=(b=1,l=u.$/m,f=u.$%m,d=u.m,p=u.s,u.$),N=m*y,L=m*r,x=p.wc,_=w<L?wt(p,f,l):null;e(w<=N),e(r<=y),e(At(p));e:for(;;){for(;!d.h&&w<L;){if(f&x||(_=wt(p,f,l)),e(null!=_),S(d),256>(y=bt(_.G[0],_.H[0],d)))h[g+w]=y,++w,++f>=m&&(f=0,++l<=r&&!(l%16)&&St(u,l));else{if(!(280>y)){b=0;break e}y=mt(y-256,d);var P,k=bt(_.G[4],_.H[4],d);if(S(d),!(w>=(k=vt(m,k=mt(k,d)))&&N-w>=y)){b=0;break e}for(P=0;P<y;++P)h[g+w+P]=h[g+w+P-k];for(w+=y,f+=y;f>=m;)f-=m,++l<=r&&!(l%16)&&St(u,l);w<L&&f&x&&(_=wt(p,f,l))}e(d.h==A(d))}St(u,l>r?r:l);break e}!b||d.h&&w<N?(b=0,u.a=d.h?5:3):u.$=w,r=b}else r=_t(u,u.V,u.Ba,u.c,u.i,r,Ct);if(!r){o=0;break t}}i+o>=c&&(t.Cc=1),o=1}if(!o)return null;if(t.Cc&&(null!=(o=t.ga)&&(o.mc=null),t.ga=null,0<t.Ga))return alert("todo:WebPDequantizeLevels"),null}return t.nb+i*s}function fr(t,e,r,n,i,a){for(;0<i--;){var o,s=t,c=e+(r?1:0),u=t,h=e+(r?0:3);for(o=0;o<n;++o){var l=u[h+4*o];255!=l&&(l*=32897,s[c+4*o+0]=s[c+4*o+0]*l>>23,s[c+4*o+1]=s[c+4*o+1]*l>>23,s[c+4*o+2]=s[c+4*o+2]*l>>23)}e+=a}}function dr(t,e,r,n,i){for(;0<n--;){var a;for(a=0;a<r;++a){var o=t[e+2*a+0],s=15&(u=t[e+2*a+1]),c=4369*s,u=(240&u|u>>4)*c>>16;t[e+2*a+0]=(240&o|o>>4)*c>>16&240|(15&o|o<<4)*c>>16>>4&15,t[e+2*a+1]=240&u|s}e+=i}}function pr(t,e,r,n,i,a,o,s){var c,u,h=255;for(u=0;u<i;++u){for(c=0;c<n;++c){var l=t[e+c];a[o+4*c]=l,h&=l}e+=r,o+=s}return 255!=h}function gr(t,e,r,n,i){var a;for(a=0;a<i;++a)r[n+a]=t[e+a]>>8}function mr(){An=fr,xn=dr,Sn=pr,_n=gr}function vr(r,n,i){t[r]=function(t,r,a,o,s,c,u,h,l,f,d,p,g,m,v,b,y){var w,N=y-1>>1,L=s[c+0]|u[h+0]<<16,A=l[f+0]|d[p+0]<<16;e(null!=t);var x=3*L+A+131074>>2;for(n(t[r+0],255&x,x>>16,g,m),null!=a&&(x=3*A+L+131074>>2,n(a[o+0],255&x,x>>16,v,b)),w=1;w<=N;++w){var S=s[c+w]|u[h+w]<<16,_=l[f+w]|d[p+w]<<16,P=L+S+A+_+524296,k=P+2*(S+A)>>3;x=k+L>>1,L=(P=P+2*(L+_)>>3)+S>>1,n(t[r+2*w-1],255&x,x>>16,g,m+(2*w-1)*i),n(t[r+2*w-0],255&L,L>>16,g,m+(2*w-0)*i),null!=a&&(x=P+A>>1,L=k+_>>1,n(a[o+2*w-1],255&x,x>>16,v,b+(2*w-1)*i),n(a[o+2*w+0],255&L,L>>16,v,b+(2*w+0)*i)),L=S,A=_}1&y||(x=3*L+A+131074>>2,n(t[r+y-1],255&x,x>>16,g,m+(y-1)*i),null!=a&&(x=3*A+L+131074>>2,n(a[o+y-1],255&x,x>>16,v,b+(y-1)*i)))}}function br(){vi[En]=bi,vi[qn]=wi,vi[Dn]=yi,vi[Rn]=Ni,vi[Tn]=Li,vi[Un]=Ai,vi[zn]=xi,vi[Hn]=wi,vi[Wn]=Ni,vi[Vn]=Li,vi[Gn]=Ai}function yr(t){return t&~Fi?0>t?0:255:t>>Ii}function wr(t,e){return yr((19077*t>>8)+(26149*e>>8)-14234)}function Nr(t,e,r){return yr((19077*t>>8)-(6419*e>>8)-(13320*r>>8)+8708)}function Lr(t,e){return yr((19077*t>>8)+(33050*e>>8)-17685)}function Ar(t,e,r,n,i){n[i+0]=wr(t,r),n[i+1]=Nr(t,e,r),n[i+2]=Lr(t,e)}function xr(t,e,r,n,i){n[i+0]=Lr(t,e),n[i+1]=Nr(t,e,r),n[i+2]=wr(t,r)}function Sr(t,e,r,n,i){var a=Nr(t,e,r);e=a<<3&224|Lr(t,e)>>3,n[i+0]=248&wr(t,r)|a>>5,n[i+1]=e}function _r(t,e,r,n,i){var a=240&Lr(t,e)|15;n[i+0]=240&wr(t,r)|Nr(t,e,r)>>4,n[i+1]=a}function Pr(t,e,r,n,i){n[i+0]=255,Ar(t,e,r,n,i+1)}function kr(t,e,r,n,i){xr(t,e,r,n,i),n[i+3]=255}function Ir(t,e,r,n,i){Ar(t,e,r,n,i),n[i+3]=255}function Vt(t,e){return 0>t?0:t>e?e:t}function Fr(e,r,n){t[e]=function(t,e,i,a,o,s,c,u,h){for(var l=u+(-2&h)*n;u!=l;)r(t[e+0],i[a+0],o[s+0],c,u),r(t[e+1],i[a+0],o[s+0],c,u+n),e+=2,++a,++s,u+=2*n;1&h&&r(t[e+0],i[a+0],o[s+0],c,u)}}function Cr(t,e,r){return 0==r?0==t?0==e?6:5:0==e?4:0:r}function jr(t,e,r,n,i){switch(t>>>30){case 3:on(e,r,n,i,0);break;case 2:sn(e,r,n,i);break;case 1:un(e,r,n,i)}}function Or(t,e){var r,a,o=e.M,s=e.Nb,c=t.oc,u=t.pc+40,h=t.oc,l=t.pc+584,f=t.oc,d=t.pc+600;for(r=0;16>r;++r)c[u+32*r-1]=129;for(r=0;8>r;++r)h[l+32*r-1]=129,f[d+32*r-1]=129;for(0<o?c[u-1-32]=h[l-1-32]=f[d-1-32]=129:(i(c,u-32-1,127,21),i(h,l-32-1,127,9),i(f,d-32-1,127,9)),a=0;a<t.za;++a){var p=e.ya[e.aa+a];if(0<a){for(r=-1;16>r;++r)n(c,u+32*r-4,c,u+32*r+12,4);for(r=-1;8>r;++r)n(h,l+32*r-4,h,l+32*r+4,4),n(f,d+32*r-4,f,d+32*r+4,4)}var g=t.Gd,m=t.Hd+a,v=p.ad,b=p.Hc;if(0<o&&(n(c,u-32,g[m].y,0,16),n(h,l-32,g[m].f,0,8),n(f,d-32,g[m].ea,0,8)),p.Za){var y=c,w=u-32+16;for(0<o&&(a>=t.za-1?i(y,w,g[m].y[15],4):n(y,w,g[m+1].y,0,4)),r=0;4>r;r++)y[w+128+r]=y[w+256+r]=y[w+384+r]=y[w+0+r];for(r=0;16>r;++r,b<<=2)y=c,w=u+Di[r],fi[p.Ob[r]](y,w),jr(b,v,16*+r,y,w)}else if(y=Cr(a,o,p.Ob[0]),li[y](c,u),0!=b)for(r=0;16>r;++r,b<<=2)jr(b,v,16*+r,c,u+Di[r]);for(r=p.Gc,y=Cr(a,o,p.Dd),di[y](h,l),di[y](f,d),b=v,y=h,w=l,255&(p=r>>0)&&(170&p?cn(b,256,y,w):hn(b,256,y,w)),p=f,b=d,255&(r>>=8)&&(170&r?cn(v,320,p,b):hn(v,320,p,b)),o<t.Ub-1&&(n(g[m].y,0,c,u+480,16),n(g[m].f,0,h,l+224,8),n(g[m].ea,0,f,d+224,8)),r=8*s*t.B,g=t.sa,m=t.ta+16*a+16*s*t.R,v=t.qa,p=t.ra+8*a+r,b=t.Ha,y=t.Ia+8*a+r,r=0;16>r;++r)n(g,m+r*t.R,c,u+32*r,16);for(r=0;8>r;++r)n(v,p+r*t.B,h,l+32*r,8),n(b,y+r*t.B,f,d+32*r,8)}}function Br(t,n,i,a,o,s,c,u,h){var l=[0],f=[0],d=0,p=null!=h?h.kd:0,g=null!=h?h:new nr;if(null==t||12>i)return 7;g.data=t,g.w=n,g.ha=i,n=[n],i=[i],g.gb=[g.gb];t:{var m=n,b=i,y=g.gb;if(e(null!=t),e(null!=b),e(null!=y),y[0]=0,12<=b[0]&&!r(t,m[0],"RIFF")){if(r(t,m[0]+8,"WEBP")){y=3;break t}var w=j(t,m[0]+4);if(12>w||4294967286<w){y=3;break t}if(p&&w>b[0]-8){y=7;break t}y[0]=w,m[0]+=12,b[0]-=12}y=0}if(0!=y)return y;for(w=0<g.gb[0],i=i[0];;){t:{var L=t;b=n,y=i;var A=l,x=f,S=m=[0];if((k=d=[d])[0]=0,8>y[0])y=7;else{if(!r(L,b[0],"VP8X")){if(10!=j(L,b[0]+4)){y=3;break t}if(18>y[0]){y=7;break t}var _=j(L,b[0]+8),P=1+C(L,b[0]+12);if(2147483648<=P*(L=1+C(L,b[0]+15))){y=3;break t}null!=S&&(S[0]=_),null!=A&&(A[0]=P),null!=x&&(x[0]=L),b[0]+=18,y[0]-=18,k[0]=1}y=0}}if(d=d[0],m=m[0],0!=y)return y;if(b=!!(2&m),!w&&d)return 3;if(null!=s&&(s[0]=!!(16&m)),null!=c&&(c[0]=b),null!=u&&(u[0]=0),c=l[0],m=f[0],d&&b&&null==h){y=0;break}if(4>i){y=7;break}if(w&&d||!w&&!d&&!r(t,n[0],"ALPH")){i=[i],g.na=[g.na],g.P=[g.P],g.Sa=[g.Sa];t:{_=t,y=n,w=i;var k=g.gb;A=g.na,x=g.P,S=g.Sa;P=22,e(null!=_),e(null!=w),L=y[0];var I=w[0];for(e(null!=A),e(null!=S),A[0]=null,x[0]=null,S[0]=0;;){if(y[0]=L,w[0]=I,8>I){y=7;break t}var F=j(_,L+4);if(4294967286<F){y=3;break t}var O=8+F+1&-2;if(P+=O,0<k&&P>k){y=3;break t}if(!r(_,L,"VP8 ")||!r(_,L,"VP8L")){y=0;break t}if(I[0]<O){y=7;break t}r(_,L,"ALPH")||(A[0]=_,x[0]=L+8,S[0]=F),L+=O,I-=O}}if(i=i[0],g.na=g.na[0],g.P=g.P[0],g.Sa=g.Sa[0],0!=y)break}i=[i],g.Ja=[g.Ja],g.xa=[g.xa];t:if(k=t,y=n,w=i,A=g.gb[0],x=g.Ja,S=g.xa,_=y[0],L=!r(k,_,"VP8 "),P=!r(k,_,"VP8L"),e(null!=k),e(null!=w),e(null!=x),e(null!=S),8>w[0])y=7;else{if(L||P){if(k=j(k,_+4),12<=A&&k>A-12){y=3;break t}if(p&&k>w[0]-8){y=7;break t}x[0]=k,y[0]+=8,w[0]-=8,S[0]=P}else S[0]=5<=w[0]&&47==k[_+0]&&!(k[_+4]>>5),x[0]=w[0];y=0}if(i=i[0],g.Ja=g.Ja[0],g.xa=g.xa[0],n=n[0],0!=y)break;if(4294967286<g.Ja)return 3;if(null==u||b||(u[0]=g.xa?2:1),c=[c],m=[m],g.xa){if(5>i){y=7;break}u=c,p=m,b=s,null==t||5>i?t=0:5<=i&&47==t[n+0]&&!(t[n+4]>>5)?(w=[0],k=[0],A=[0],v(x=new N,t,n,i),gt(x,w,k,A)?(null!=u&&(u[0]=w[0]),null!=p&&(p[0]=k[0]),null!=b&&(b[0]=A[0]),t=1):t=0):t=0}else{if(10>i){y=7;break}u=m,null==t||10>i||!Xt(t,n+3,i-3)?t=0:(p=t[n+0]|t[n+1]<<8|t[n+2]<<16,b=16383&(t[n+7]<<8|t[n+6]),t=16383&(t[n+9]<<8|t[n+8]),1&p||3<(p>>1&7)||!(p>>4&1)||p>>5>=g.Ja||!b||!t?t=0:(c&&(c[0]=b),u&&(u[0]=t),t=1))}if(!t)return 3;if(c=c[0],m=m[0],d&&(l[0]!=c||f[0]!=m))return 3;null!=h&&(h[0]=g,h.offset=n-h.w,e(4294967286>n-h.w),e(h.offset==h.ha-i));break}return 0==y||7==y&&d&&null==h?(null!=s&&(s[0]|=null!=g.na&&0<g.na.length),null!=a&&(a[0]=c),null!=o&&(o[0]=m),0):y}function Mr(t,e,r){var n=e.width,i=e.height,a=0,o=0,s=n,c=i;if(e.Da=null!=t&&0<t.Da,e.Da&&(s=t.cd,c=t.bd,a=t.v,o=t.j,11>r||(a&=-2,o&=-2),0>a||0>o||0>=s||0>=c||a+s>n||o+c>i))return 0;if(e.v=a,e.j=o,e.va=a+s,e.o=o+c,e.U=s,e.T=c,e.da=null!=t&&0<t.da,e.da){if(!E(s,c,r=[t.ib],a=[t.hb]))return 0;e.ib=r[0],e.hb=a[0]}return e.ob=null!=t&&t.ob,e.Kb=null==t||!t.Sd,e.da&&(e.ob=e.ib<3*n/4&&e.hb<3*i/4,e.Kb=0),1}function Er(t){if(null==t)return 2;if(11>t.S){var e=t.f.RGBA;e.fb+=(t.height-1)*e.A,e.A=-e.A}else e=t.f.kb,t=t.height,e.O+=(t-1)*e.fa,e.fa=-e.fa,e.N+=(t-1>>1)*e.Ab,e.Ab=-e.Ab,e.W+=(t-1>>1)*e.Db,e.Db=-e.Db,null!=e.F&&(e.J+=(t-1)*e.lb,e.lb=-e.lb);return 0}function qr(t,e,r,n){if(null==n||0>=t||0>=e)return 2;if(null!=r){if(r.Da){var i=r.cd,o=r.bd,s=-2&r.v,c=-2&r.j;if(0>s||0>c||0>=i||0>=o||s+i>t||c+o>e)return 2;t=i,e=o}if(r.da){if(!E(t,e,i=[r.ib],o=[r.hb]))return 2;t=i[0],e=o[0]}}n.width=t,n.height=e;t:{var u=n.width,h=n.height;if(t=n.S,0>=u||0>=h||!(t>=En&&13>t))t=2;else{if(0>=n.Rd&&null==n.sd){s=o=i=e=0;var l=(c=u*zi[t])*h;if(11>t||(o=(h+1)/2*(e=(u+1)/2),12==t&&(s=(i=u)*h)),null==(h=a(l+2*o+s))){t=1;break t}n.sd=h,11>t?((u=n.f.RGBA).eb=h,u.fb=0,u.A=c,u.size=l):((u=n.f.kb).y=h,u.O=0,u.fa=c,u.Fd=l,u.f=h,u.N=0+l,u.Ab=e,u.Cd=o,u.ea=h,u.W=0+l+o,u.Db=e,u.Ed=o,12==t&&(u.F=h,u.J=0+l+2*o),u.Tc=s,u.lb=i)}if(e=1,i=n.S,o=n.width,s=n.height,i>=En&&13>i)if(11>i)t=n.f.RGBA,e&=(c=Math.abs(t.A))*(s-1)+o<=t.size,e&=c>=o*zi[i],e&=null!=t.eb;else{t=n.f.kb,c=(o+1)/2,l=(s+1)/2,u=Math.abs(t.fa);h=Math.abs(t.Ab);var f=Math.abs(t.Db),d=Math.abs(t.lb),p=d*(s-1)+o;e&=u*(s-1)+o<=t.Fd,e&=h*(l-1)+c<=t.Cd,e=(e&=f*(l-1)+c<=t.Ed)&u>=o&h>=c&f>=c,e&=null!=t.y,e&=null!=t.f,e&=null!=t.ea,12==i&&(e&=d>=o,e&=p<=t.Tc,e&=null!=t.F)}else e=0;t=e?0:2}}return 0!=t||null!=r&&r.fd&&(t=Er(n)),t}var Dr=64,Rr=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Tr=24,Ur=32,zr=8,Hr=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];R("Predictor0","PredictorAdd0"),t.Predictor0=function(){return 4278190080},t.Predictor1=function(t){return t},t.Predictor2=function(t,e,r){return e[r+0]},t.Predictor3=function(t,e,r){return e[r+1]},t.Predictor4=function(t,e,r){return e[r-1]},t.Predictor5=function(t,e,r){return U(U(t,e[r+1]),e[r+0])},t.Predictor6=function(t,e,r){return U(t,e[r-1])},t.Predictor7=function(t,e,r){return U(t,e[r+0])},t.Predictor8=function(t,e,r){return U(e[r-1],e[r+0])},t.Predictor9=function(t,e,r){return U(e[r+0],e[r+1])},t.Predictor10=function(t,e,r){return U(U(t,e[r-1]),U(e[r+0],e[r+1]))},t.Predictor11=function(t,e,r){var n=e[r+0];return 0>=W(n>>24&255,t>>24&255,(e=e[r-1])>>24&255)+W(n>>16&255,t>>16&255,e>>16&255)+W(n>>8&255,t>>8&255,e>>8&255)+W(255&n,255&t,255&e)?n:t},t.Predictor12=function(t,e,r){var n=e[r+0];return(z((t>>24&255)+(n>>24&255)-((e=e[r-1])>>24&255))<<24|z((t>>16&255)+(n>>16&255)-(e>>16&255))<<16|z((t>>8&255)+(n>>8&255)-(e>>8&255))<<8|z((255&t)+(255&n)-(255&e)))>>>0},t.Predictor13=function(t,e,r){var n=e[r-1];return(H((t=U(t,e[r+0]))>>24&255,n>>24&255)<<24|H(t>>16&255,n>>16&255)<<16|H(t>>8&255,n>>8&255)<<8|H(t>>0&255,n>>0&255))>>>0};var Wr=t.PredictorAdd0;t.PredictorAdd1=V,R("Predictor2","PredictorAdd2"),R("Predictor3","PredictorAdd3"),R("Predictor4","PredictorAdd4"),R("Predictor5","PredictorAdd5"),R("Predictor6","PredictorAdd6"),R("Predictor7","PredictorAdd7"),R("Predictor8","PredictorAdd8"),R("Predictor9","PredictorAdd9"),R("Predictor10","PredictorAdd10"),R("Predictor11","PredictorAdd11"),R("Predictor12","PredictorAdd12"),R("Predictor13","PredictorAdd13");var Vr=t.PredictorAdd2;X("ColorIndexInverseTransform","MapARGB","32b",(function(t){return t>>8&255}),(function(t){return t})),X("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",(function(t){return t}),(function(t){return t>>8&255}));var Gr,Yr=t.ColorIndexInverseTransform,Jr=t.MapARGB,Xr=t.VP8LColorIndexInverseTransformAlpha,Kr=t.MapAlpha,Zr=t.VP8LPredictorsAdd=[];Zr.length=16,(t.VP8LPredictors=[]).length=16,(t.VP8LPredictorsAdd_C=[]).length=16,(t.VP8LPredictors_C=[]).length=16;var $r,Qr,tn,en,rn,nn,an,on,sn,cn,un,hn,ln,fn,dn,pn,gn,mn,vn,bn,yn,wn,Nn,Ln,An,xn,Sn,_n,Pn=a(511),kn=a(2041),In=a(225),Fn=a(767),Cn=0,jn=kn,On=In,Bn=Fn,Mn=Pn,En=0,qn=1,Dn=2,Rn=3,Tn=4,Un=5,zn=6,Hn=7,Wn=8,Vn=9,Gn=10,Yn=[2,3,7],Jn=[3,3,11],Xn=[280,256,256,256,40],Kn=[0,1,1,1,0],Zn=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],$n=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],Qn=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],ti=8,ei=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],ri=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],ni=null,ii=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],ai=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],oi=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],si=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],ci=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],ui=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],hi=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],li=[],fi=[],di=[],pi=1,gi=2,mi=[],vi=[];vr("UpsampleRgbLinePair",Ar,3),vr("UpsampleBgrLinePair",xr,3),vr("UpsampleRgbaLinePair",Ir,4),vr("UpsampleBgraLinePair",kr,4),vr("UpsampleArgbLinePair",Pr,4),vr("UpsampleRgba4444LinePair",_r,2),vr("UpsampleRgb565LinePair",Sr,2);var bi=t.UpsampleRgbLinePair,yi=t.UpsampleBgrLinePair,wi=t.UpsampleRgbaLinePair,Ni=t.UpsampleBgraLinePair,Li=t.UpsampleArgbLinePair,Ai=t.UpsampleRgba4444LinePair,xi=t.UpsampleRgb565LinePair,Si=16,_i=1<<Si-1,Pi=-227,ki=482,Ii=6,Fi=(256<<Ii)-1,Ci=0,ji=a(256),Oi=a(256),Bi=a(256),Mi=a(256),Ei=a(ki-Pi),qi=a(ki-Pi);Fr("YuvToRgbRow",Ar,3),Fr("YuvToBgrRow",xr,3),Fr("YuvToRgbaRow",Ir,4),Fr("YuvToBgraRow",kr,4),Fr("YuvToArgbRow",Pr,4),Fr("YuvToRgba4444Row",_r,2),Fr("YuvToRgb565Row",Sr,2);var Di=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Ri=[0,2,8],Ti=[8,7,6,4,4,2,2,2,1,1,1,1],Ui=1;this.WebPDecodeRGBA=function(t,r,n,i,a){var o=qn,s=new rr,c=new ot;s.ba=c,c.S=o,c.width=[c.width],c.height=[c.height];var u=c.width,h=c.height,l=new st;if(null==l||null==t)var f=2;else e(null!=l),f=Br(t,r,n,l.width,l.height,l.Pd,l.Qd,l.format,null);if(0!=f?u=0:(null!=u&&(u[0]=l.width[0]),null!=h&&(h[0]=l.height[0]),u=1),u){c.width=c.width[0],c.height=c.height[0],null!=i&&(i[0]=c.width),null!=a&&(a[0]=c.height);t:{if(i=new Gt,(a=new nr).data=t,a.w=r,a.ha=n,a.kd=1,r=[0],e(null!=a),(0==(t=Br(a.data,a.w,a.ha,null,null,null,r,null,a))||7==t)&&r[0]&&(t=4),0==(r=t)){if(e(null!=s),i.data=a.data,i.w=a.w+a.offset,i.ha=a.ha-a.offset,i.put=dt,i.ac=ft,i.bc=pt,i.ma=s,a.xa){if(null==(t=kt())){s=1;break t}if(function(t,r){var n=[0],i=[0],a=[0];e:for(;;){if(null==t)return 0;if(null==r)return t.a=2,0;if(t.l=r,t.a=0,v(t.m,r.data,r.w,r.ha),!gt(t.m,n,i,a)){t.a=3;break e}if(t.xb=gi,r.width=n[0],r.height=i[0],!It(n[0],i[0],1,t,null))break e;return 1}return e(0!=t.a),0}(t,i)){if(i=0==(r=qr(i.width,i.height,s.Oa,s.ba))){e:{i=t;r:for(;;){if(null==i){i=0;break e}if(e(null!=i.s.yc),e(null!=i.s.Ya),e(0<i.s.Wb),e(null!=(n=i.l)),e(null!=(a=n.ma)),0!=i.xb){if(i.ca=a.ba,i.tb=a.tb,e(null!=i.ca),!Mr(a.Oa,n,Rn)){i.a=2;break r}if(!Ft(i,n.width))break r;if(n.da)break r;if((n.da||nt(i.ca.S))&&mr(),11>i.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),null!=i.ca.f.kb.F&&mr()),i.Pb&&0<i.s.ua&&null==i.s.vb.X&&!O(i.s.vb,i.s.Wa.Xa)){i.a=1;break r}i.xb=0}if(!_t(i,i.V,i.Ba,i.c,i.i,n.o,Lt))break r;a.Dc=i.Ma,i=1;break e}e(0!=i.a),i=0}i=!i}i&&(r=t.a)}else r=t.a}else{if(null==(t=new Yt)){s=1;break t}if(t.Fa=a.na,t.P=a.P,t.qc=a.Sa,Kt(t,i)){if(0==(r=qr(i.width,i.height,s.Oa,s.ba))){if(t.Aa=0,n=s.Oa,e(null!=(a=t)),null!=n){if(0<(u=0>(u=n.Md)?0:100<u?255:255*u/100)){for(h=l=0;4>h;++h)12>(f=a.pb[h]).lc&&(f.ia=u*Ti[0>f.lc?0:f.lc]>>3),l|=f.ia;l&&(alert("todo:VP8InitRandom"),a.ia=1)}a.Ga=n.Id,100<a.Ga?a.Ga=100:0>a.Ga&&(a.Ga=0)}Qt(t,i)||(r=t.a)}}else r=t.a}0==r&&null!=s.Oa&&s.Oa.fd&&(r=Er(s.ba))}s=r}o=0!=s?null:11>o?c.f.RGBA.eb:c.f.kb.y}else o=null;return o};var zi=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function u(t,e){for(var r="",n=0;n<4;n++)r+=String.fromCharCode(t[e++]);return r}function h(t,e){return(t[e+0]<<0|t[e+1]<<8|t[e+2]<<16)>>>0}function l(t,e){return(t[e+0]<<0|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0}new c;var f=[0],d=[0],p=[],g=new c,m=t,v=function(t,e){var r={},n=0,i=!1,a=0,o=0;if(r.frames=[],!
/** @license
   * Copyright (c) 2017 Dominik Homberger
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  https://webpjs.appspot.com
  WebPRiffParser dominikhlbg@gmail.com
  */
function(t,e,r,n){for(var i=0;i<n;i++)if(t[e+i]!=r.charCodeAt(i))return!0;return!1}(t,e,"RIFF",4)){var s,c;l(t,e+=4);for(e+=8;e<t.length;){var f=u(t,e),d=l(t,e+=4);e+=4;var p=d+(1&d);switch(f){case"VP8 ":case"VP8L":void 0===r.frames[n]&&(r.frames[n]={});(v=r.frames[n]).src_off=i?o:e-8,v.src_size=a+d+8,n++,i&&(i=!1,a=0,o=0);break;case"VP8X":(v=r.header={}).feature_flags=t[e];var g=e+4;v.canvas_width=1+h(t,g);g+=3;v.canvas_height=1+h(t,g);g+=3;break;case"ALPH":i=!0,a=p+8,o=e-8;break;case"ANIM":(v=r.header).bgcolor=l(t,e);g=e+4;v.loop_count=(s=t)[(c=g)+0]<<0|s[c+1]<<8;g+=2;break;case"ANMF":var m,v;(v=r.frames[n]={}).offset_x=2*h(t,e),e+=3,v.offset_y=2*h(t,e),e+=3,v.width=1+h(t,e),e+=3,v.height=1+h(t,e),e+=3,v.duration=h(t,e),e+=3,m=t[e++],v.dispose=1&m,v.blend=m>>1&1}"ANMF"!=f&&(e+=p)}return r}}(m,0);v.response=m,v.rgbaoutput=!0,v.dataurl=!1;var b=v.header?v.header:null,y=v.frames?v.frames:null;if(b){b.loop_counter=b.loop_count,f=[b.canvas_height],d=[b.canvas_width];for(var w=0;w<y.length&&0!=y[w].blend;w++);}var N=y[0],L=g.WebPDecodeRGBA(m,N.src_off,N.src_size,d,f);N.rgba=L,N.imgwidth=d[0],N.imgheight=f[0];for(var A=0;A<d[0]*f[0]*4;A++)p[A]=L[A];return this.width=d,this.height=f,this.data=p,this}!function(t){var r=function(){return"function"==typeof fflate__WEBPACK_IMPORTED_MODULE_1__[/* zlibSync */ "b"]},n=function(r,n,a,h){var l=4,f=s;switch(h){case t.image_compression.FAST:l=1,f=o;break;case t.image_compression.MEDIUM:l=6,f=c;break;case t.image_compression.SLOW:l=9,f=u}r=i(r,n,a,f);var d=Object(fflate__WEBPACK_IMPORTED_MODULE_1__[/* zlibSync */ "b"])(r,{level:l});return t.__addimage__.arrayBufferToBinaryString(d)},i=function(t,e,r,n){for(var i,a,o,s=t.length/e,c=new Uint8Array(t.length+s),u=l(),h=0;h<s;h+=1){if(o=h*e,i=t.subarray(o,o+e),n)c.set(n(i,r,a),o+h);else{for(var d,p=u.length,g=[];d<p;d+=1)g[d]=u[d](i,r,a);var m=f(g.concat());c.set(g[m],o+h)}a=i}return c},a=function(t){var e=Array.apply([],t);return e.unshift(0),e},o=function(t,e){var r,n=[],i=t.length;n[0]=1;for(var a=0;a<i;a+=1)r=t[a-e]||0,n[a+1]=t[a]-r+256&255;return n},s=function(t,e,r){var n,i=[],a=t.length;i[0]=2;for(var o=0;o<a;o+=1)n=r&&r[o]||0,i[o+1]=t[o]-n+256&255;return i},c=function(t,e,r){var n,i,a=[],o=t.length;a[0]=3;for(var s=0;s<o;s+=1)n=t[s-e]||0,i=r&&r[s]||0,a[s+1]=t[s]+256-(n+i>>>1)&255;return a},u=function(t,e,r){var n,i,a,o,s=[],c=t.length;s[0]=4;for(var u=0;u<c;u+=1)n=t[u-e]||0,i=r&&r[u]||0,a=r&&r[u-e]||0,o=h(n,i,a),s[u+1]=t[u]-o+256&255;return s},h=function(t,e,r){if(t===e&&e===r)return t;var n=Math.abs(e-r),i=Math.abs(t-r),a=Math.abs(t+e-r-r);return n<=i&&n<=a?t:i<=a?e:r},l=function(){return[a,o,s,c,u]},f=function(t){var e=t.map((function(t){return t.reduce((function(t,e){return t+Math.abs(e)}),0)}));return e.indexOf(Math.min.apply(null,e))};t.processPNG=function(e,i,a,o){var s,c,u,h,l,f,d,p,g,m,v,b,y,w,N,L=this.decode.FLATE_DECODE,A="";if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){if(e=(u=new Kt(e)).imgData,c=u.bits,s=u.colorSpace,l=u.colors,-1!==[4,6].indexOf(u.colorType)){if(8===u.bits){g=(p=32==u.pixelBitlength?new Uint32Array(u.decodePixels().buffer):16==u.pixelBitlength?new Uint16Array(u.decodePixels().buffer):new Uint8Array(u.decodePixels().buffer)).length,v=new Uint8Array(g*u.colors),m=new Uint8Array(g);var x,S=u.pixelBitlength-u.bits;for(w=0,N=0;w<g;w++){for(y=p[w],x=0;x<S;)v[N++]=y>>>x&255,x+=u.bits;m[w]=y>>>x&255}}if(16===u.bits){g=(p=new Uint32Array(u.decodePixels().buffer)).length,v=new Uint8Array(g*(32/u.pixelBitlength)*u.colors),m=new Uint8Array(g*(32/u.pixelBitlength)),b=u.colors>1,w=0,N=0;for(var _=0;w<g;)y=p[w++],v[N++]=y>>>0&255,b&&(v[N++]=y>>>16&255,y=p[w++],v[N++]=y>>>0&255),m[_++]=y>>>16&255;c=8}o!==t.image_compression.NONE&&r()?(e=n(v,u.width*u.colors,u.colors,o),d=n(m,u.width,1,o)):(e=v,d=m,L=void 0)}if(3===u.colorType&&(s=this.color_spaces.INDEXED,f=u.palette,u.transparency.indexed)){var P=u.transparency.indexed,k=0;for(w=0,g=P.length;w<g;++w)k+=P[w];if((k/=255)===g-1&&-1!==P.indexOf(0))h=[P.indexOf(0)];else if(k!==g){for(p=u.decodePixels(),m=new Uint8Array(p.length),w=0,g=p.length;w<g;w++)m[w]=P[p[w]];d=n(m,u.width,1)}}var I=function(e){var r;switch(e){case t.image_compression.FAST:r=11;break;case t.image_compression.MEDIUM:r=13;break;case t.image_compression.SLOW:r=14;break;default:r=12}return r}(o);return L===this.decode.FLATE_DECODE&&(A="/Predictor "+I+" "),A+="/Colors "+l+" /BitsPerComponent "+c+" /Columns "+u.width,(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(d&&this.__addimage__.isArrayBuffer(d)||this.__addimage__.isArrayBufferView(d))&&(d=this.__addimage__.arrayBufferToBinaryString(d)),{alias:a,data:e,index:i,filter:L,decodeParameters:A,transparency:h,palette:f,sMask:d,predictor:I,width:u.width,height:u.height,bitsPerComponent:c,colorSpace:s}}}}(E.API),function(t){t.processGIF89A=function(e,r,n,i){var a=new Zt(e),o=a.width,s=a.height,c=[];a.decodeAndBlitFrameRGBA(0,c);var u={data:c,width:o,height:s},h=new Qt(100).encode(u,100);return t.processJPEG.call(this,h,r,n,i)},t.processGIF87A=t.processGIF89A}(E.API),te.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[e]={red:i,green:n,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},te.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new Uint8Array(e),this[t]()}catch(t){a.log("bit decode error:"+t)}},te.prototype.bit1=function(){var t,e=Math.ceil(this.width/8),r=e%4;for(t=this.height-1;t>=0;t--){for(var n=this.bottom_up?t:this.height-1-t,i=0;i<e;i++)for(var a=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+8*i*4,s=0;s<8&&8*i+s<this.width;s++){var c=this.palette[a>>7-s&1];this.data[o+4*s]=c.blue,this.data[o+4*s+1]=c.green,this.data[o+4*s+2]=c.red,this.data[o+4*s+3]=255}0!==r&&(this.pos+=4-r)}},te.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),e=t%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,i=0;i<t;i++){var a=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+2*i*4,s=a>>4,c=15&a,u=this.palette[s];if(this.data[o]=u.blue,this.data[o+1]=u.green,this.data[o+2]=u.red,this.data[o+3]=255,2*i+1>=this.width)break;u=this.palette[c],this.data[o+4]=u.blue,this.data[o+4+1]=u.green,this.data[o+4+2]=u.red,this.data[o+4+3]=255}0!==e&&(this.pos+=4-e)}},te.prototype.bit8=function(){for(var t=this.width%4,e=this.height-1;e>=0;e--){for(var r=this.bottom_up?e:this.height-1-e,n=0;n<this.width;n++){var i=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+4*n;if(i<this.palette.length){var o=this.palette[i];this.data[a]=o.red,this.data[a+1]=o.green,this.data[a+2]=o.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}0!==t&&(this.pos+=4-t)}},te.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,i=0;i<this.width;i++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var o=(a&e)/e*255|0,s=(a>>5&e)/e*255|0,c=(a>>10&e)/e*255|0,u=a>>15?255:0,h=n*this.width*4+4*i;this.data[h]=c,this.data[h+1]=s,this.data[h+2]=o,this.data[h+3]=u}this.pos+=t}},te.prototype.bit16=function(){for(var t=this.width%3,e=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var i=this.bottom_up?n:this.height-1-n,a=0;a<this.width;a++){var o=this.datav.getUint16(this.pos,!0);this.pos+=2;var s=(o&e)/e*255|0,c=(o>>5&r)/r*255|0,u=(o>>11)/e*255|0,h=i*this.width*4+4*a;this.data[h]=u,this.data[h+1]=c,this.data[h+2]=s,this.data[h+3]=255}this.pos+=t}},te.prototype.bit24=function(){for(var t=this.height-1;t>=0;t--){for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),o=e*this.width*4+4*r;this.data[o]=a,this.data[o+1]=i,this.data[o+2]=n,this.data[o+3]=255}this.pos+=this.width%4}},te.prototype.bit32=function(){for(var t=this.height-1;t>=0;t--)for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),s=e*this.width*4+4*r;this.data[s]=a,this.data[s+1]=i,this.data[s+2]=n,this.data[s+3]=o}},te.prototype.getData=function(){return this.data},
/**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.processBMP=function(e,r,n,i){var a=new te(e,!1),o=a.width,s=a.height,c={data:a.getData(),width:o,height:s},u=new Qt(100).encode(c,100);return t.processJPEG.call(this,u,r,n,i)}}(E.API),ee.prototype.getData=function(){return this.data},
/**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){t.processWEBP=function(e,r,n,i){var a=new ee(e,!1),o=a.width,s=a.height,c={data:a.getData(),width:o,height:s},u=new Qt(100).encode(c,100);return t.processJPEG.call(this,u,r,n,i)}}(E.API),E.API.processRGBA=function(t,e,r){for(var n=t.data,i=n.length,a=new Uint8Array(i/4*3),o=new Uint8Array(i/4),s=0,c=0,u=0;u<i;u+=4){var h=n[u],l=n[u+1],f=n[u+2],d=n[u+3];a[s++]=h,a[s++]=l,a[s++]=f,o[c++]=d}var p=this.__addimage__.arrayBufferToBinaryString(a);return{alpha:this.__addimage__.arrayBufferToBinaryString(o),data:p,index:e,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:t.width,height:t.height}},E.API.setLanguage=function(t){return void 0===this.internal.languageSettings&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),void 0!=={af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[t]&&(this.internal.languageSettings.languageCode=t,!1===this.internal.languageSettings.isSubscribed&&(this.internal.events.subscribe("putCatalog",(function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")})),this.internal.languageSettings.isSubscribed=!0)),this},Vt=E.API,Gt=Vt.getCharWidthsArray=function(e,r){var n,i,a=(r=r||{}).font||this.internal.getFont(),o=r.fontSize||this.internal.getFontSize(),s=r.charSpace||this.internal.getCharSpace(),c=r.widths?r.widths:a.metadata.Unicode.widths,u=c.fof?c.fof:1,h=r.kerning?r.kerning:a.metadata.Unicode.kerning,l=h.fof?h.fof:1,f=!1!==r.doKerning,d=0,p=e.length,g=0,m=c[0]||u,v=[];for(n=0;n<p;n++)i=e.charCodeAt(n),"function"==typeof a.metadata.widthOfString?v.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(i))+s*(1e3/o)||0)/1e3):(d=f&&"object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(h[i])&&!isNaN(parseInt(h[i][g],10))?h[i][g]/l:0,v.push((c[i]||m)/u+d)),g=i;return v},Yt=Vt.getStringUnitWidth=function(t,e){var r=(e=e||{}).fontSize||this.internal.getFontSize(),n=e.font||this.internal.getFont(),i=e.charSpace||this.internal.getCharSpace();return Vt.processArabic&&(t=Vt.processArabic(t)),"function"==typeof n.metadata.widthOfString?n.metadata.widthOfString(t,r,i)/r:Gt.apply(this,arguments).reduce((function(t,e){return t+e}),0)},Jt=function(t,e,r,n){for(var i=[],a=0,o=t.length,s=0;a!==o&&s+e[a]<r;)s+=e[a],a++;i.push(t.slice(0,a));var c=a;for(s=0;a!==o;)s+e[a]>n&&(i.push(t.slice(c,a)),s=0,c=a),s+=e[a],a++;return c!==a&&i.push(t.slice(c,a)),i},Xt=function(t,e,r){r||(r={});var n,i,a,o,s,c,u,h=[],l=[h],f=r.textIndent||0,d=0,p=0,g=t.split(" "),m=Gt.apply(this,[" ",r])[0];if(c=-1===r.lineIndent?g[0].length+2:r.lineIndent||0){var v=Array(c).join(" "),b=[];g.map((function(t){(t=t.split(/\s*\n/)).length>1?b=b.concat(t.map((function(t,e){return(e&&t.length?"\n":"")+t}))):b.push(t[0])})),g=b,c=Yt.apply(this,[v,r])}for(a=0,o=g.length;a<o;a++){var y=0;if(n=g[a],c&&"\n"==n[0]&&(n=n.substr(1),y=1),f+d+(p=(i=Gt.apply(this,[n,r])).reduce((function(t,e){return t+e}),0))>e||y){if(p>e){for(s=Jt.apply(this,[n,i,e-(f+d),e]),h.push(s.shift()),h=[s.pop()];s.length;)l.push([s.shift()]);p=i.slice(n.length-(h[0]?h[0].length:0)).reduce((function(t,e){return t+e}),0)}else h=[n];l.push(h),f=p+c,d=m}else h.push(n),f+=d+p,d=m}return u=c?function(t,e){return(e?v:"")+t.join(" ")}:function(t){return t.join(" ")},l.map(u)},Vt.splitTextToSize=function(t,e,r){var n,i=(r=r||{}).fontSize||this.internal.getFontSize(),a=function(t){if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var e=this.internal.getFont(t.fontName,t.fontStyle);return e.metadata.Unicode?{widths:e.metadata.Unicode.widths||{0:1},kerning:e.metadata.Unicode.kerning||{}}:{font:e.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}.call(this,r);n=Array.isArray(t)?t:String(t).split(/\r?\n/);var o=1*this.internal.scaleFactor*e/i;a.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/i:0,a.lineIndent=r.lineIndent;var s,c,u=[];for(s=0,c=n.length;s<c;s++)u=u.concat(Xt.apply(this,[n[s],o,a]));return u},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var r="klmnopqrstuvwxyz",n={},i={},a=0;a<r.length;a++)n[r[a]]="0123456789abcdef"[a],i["0123456789abcdef"[a]]=r[a];var o=function(t){return"0x"+parseInt(t,10).toString(16)},s=e.__fontmetrics__.compress=function(e){var r,n,a,c,u=["{"];for(var h in e){if(r=e[h],isNaN(parseInt(h,10))?n="'"+h+"'":(h=parseInt(h,10),n=(n=o(h).slice(2)).slice(0,-1)+i[n.slice(-1)]),"number"==typeof r)r<0?(a=o(r).slice(3),c="-"):(a=o(r).slice(2),c=""),a=c+a.slice(0,-1)+i[a.slice(-1)];else{if("object"!==_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(r))throw new Error("Don't know what to do with value type "+_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(r)+".");a=s(r)}u.push(n+a)}return u.push("}"),u.join("")},c=e.__fontmetrics__.uncompress=function(t){if("string"!=typeof t)throw new Error("Invalid argument passed to uncompress.");for(var e,r,i,a,o={},s=1,c=o,u=[],h="",l="",f=t.length-1,d=1;d<f;d+=1)"'"==(a=t[d])?e?(i=e.join(""),e=void 0):e=[]:e?e.push(a):"{"==a?(u.push([c,i]),c={},i=void 0):"}"==a?((r=u.pop())[0][r[1]]=c,i=void 0,c=r[0]):"-"==a?s=-1:void 0===i?n.hasOwnProperty(a)?(h+=n[a],i=parseInt(h,16)*s,s=1,h=""):h+=a:n.hasOwnProperty(a)?(l+=n[a],c[i]=parseInt(l,16)*s,s=1,i=void 0,l=""):l+=a;return o},u={codePages:["WinAnsiEncoding"],WinAnsiEncoding:c("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},h={Unicode:{Courier:u,"Courier-Bold":u,"Courier-BoldOblique":u,"Courier-Oblique":u,Helvetica:u,"Helvetica-Bold":u,"Helvetica-BoldOblique":u,"Helvetica-Oblique":u,"Times-Roman":u,"Times-Bold":u,"Times-BoldItalic":u,"Times-Italic":u}},l={Unicode:{"Courier-Oblique":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":c("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":c("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:c("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:c("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":c("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":c("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(t){var e=t.font,r=l.Unicode[e.postScriptName];r&&(e.metadata.Unicode={},e.metadata.Unicode.widths=r.widths,e.metadata.Unicode.kerning=r.kerning);var n=h.Unicode[e.postScriptName];n&&(e.metadata.Unicode.encoding=n,e.encoding=n.codePages[0])}])}(E.API),
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(t){for(var e=t.length,r=new Uint8Array(e),n=0;n<e;n++)r[n]=t.charCodeAt(n);return r};t.API.events.push(["addFont",function(r){var n=void 0,i=r.font,a=r.instance;if(!i.isStandardFont){if(void 0===a)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");if("string"!=typeof(n=!1===a.existsFileInVFS(i.postScriptName)?a.loadFile(i.postScriptName):a.getFileFromVFS(i.postScriptName)))throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");!function(r,n){n=/^\x00\x01\x00\x00/.test(n)?e(n):e(u(n)),r.metadata=t.API.TTFFont.open(n),r.metadata.Unicode=r.metadata.Unicode||{encoding:{},kerning:{},widths:[]},r.metadata.glyIdsUsed=[0]}(i,n)}}])}(E),
/** @license
 * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){function e(){return(n.canvg?Promise.resolve(n.canvg):__webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "38a9"))).catch((function(t){return Promise.reject(new Error("Could not load canvg: "+t))})).then((function(t){return t.default?t.default:t}))}E.API.addSvgAsImage=function(t,r,n,i,o,s,c,u){if(isNaN(r)||isNaN(n))throw a.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(i)||isNaN(o))throw a.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var h=document.createElement("canvas");h.width=i,h.height=o;var l=h.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,h.width,h.height);var f={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},d=this;return e().then((function(e){return e.fromString(l,t,f)}),(function(){return Promise.reject(new Error("Could not load canvg."))})).then((function(t){return t.render(f)})).then((function(){d.addImage(h.toDataURL("image/jpeg",1),r,n,i,o,c,u)}))}}(),E.API.putTotalPages=function(t){var e,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(e=new RegExp(t,"g"),r=this.internal.getNumberOfPages()):(e=new RegExp(this.pdfEscape16(t,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var i=0;i<this.internal.pages[n].length;i++)this.internal.pages[n][i]=this.internal.pages[n][i].replace(e,r);return this},E.API.viewerPreferences=function(e,r){var n;e=e||{},r=r||!1;var i,a,o,s={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},c=Object.keys(s),u=[],h=0,l=0,f=0;function d(t,e){var r,n=!1;for(r=0;r<t.length;r+=1)t[r]===e&&(n=!0);return n}if(void 0===this.internal.viewerpreferences&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(s)),this.internal.viewerpreferences.isSubscribed=!1),n=this.internal.viewerpreferences.configuration,"reset"===e||!0===r){var p=c.length;for(f=0;f<p;f+=1)n[c[f]].value=n[c[f]].defaultValue,n[c[f]].explicitSet=!1}if("object"===_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e))for(a in e)if(o=e[a],d(c,a)&&void 0!==o){if("boolean"===n[a].type&&"boolean"==typeof o)n[a].value=o;else if("name"===n[a].type&&d(n[a].valueSet,o))n[a].value=o;else if("integer"===n[a].type&&Number.isInteger(o))n[a].value=o;else if("array"===n[a].type){for(h=0;h<o.length;h+=1)if(i=!0,1===o[h].length&&"number"==typeof o[h][0])u.push(String(o[h]-1));else if(o[h].length>1){for(l=0;l<o[h].length;l+=1)"number"!=typeof o[h][l]&&(i=!1);!0===i&&u.push([o[h][0]-1,o[h][1]-1].join(" "))}n[a].value="["+u.join(" ")+"]"}else n[a].value=n[a].defaultValue;n[a].explicitSet=!0}return!1===this.internal.viewerpreferences.isSubscribed&&(this.internal.events.subscribe("putCatalog",(function(){var t,e=[];for(t in n)!0===n[t].explicitSet&&("name"===n[t].type?e.push("/"+t+" /"+n[t].value):e.push("/"+t+" "+n[t].value));0!==e.length&&this.internal.write("/ViewerPreferences\n<<\n"+e.join("\n")+"\n>>")})),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=n,this},
/** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(t){var e=function(){var t='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',e=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),r=unescape(encodeURIComponent(t)),n=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),i=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),a=unescape(encodeURIComponent("</x:xmpmeta>")),o=r.length+n.length+i.length+e.length+a.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+o+" >>"),this.internal.write("stream"),this.internal.write(e+r+n+i+a),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};t.addMetadata=function(t,n){return void 0===this.internal.__metadata__&&(this.internal.__metadata__={metadata:t,namespaceuri:n||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",e)),this}}(E.API),function(t){var e=t.API,r=e.pdfEscape16=function(t,e){for(var r,n=e.metadata.Unicode.widths,i=["","0","00","000","0000"],a=[""],o=0,s=t.length;o<s;++o){if(r=e.metadata.characterToGlyph(t.charCodeAt(o)),e.metadata.glyIdsUsed.push(r),e.metadata.toUnicode[r]=t.charCodeAt(o),-1==n.indexOf(r)&&(n.push(r),n.push([parseInt(e.metadata.widthOfGlyph(r),10)])),"0"==r)return a.join("");r=r.toString(16),a.push(i[4-r.length],r)}return a.join("")},n=function(t){var e,r,n,i,a,o,s;for(a="/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",n=[],o=0,s=(r=Object.keys(t).sort((function(t,e){return t-e}))).length;o<s;o++)e=r[o],n.length>=100&&(a+="\n"+n.length+" beginbfchar\n"+n.join("\n")+"\nendbfchar",n=[]),void 0!==t[e]&&null!==t[e]&&"function"==typeof t[e].toString&&(i=("0000"+t[e].toString(16)).slice(-4),e=("0000"+(+e).toString(16)).slice(-4),n.push("<"+e+"><"+i+">"));return n.length&&(a+="\n"+n.length+" beginbfchar\n"+n.join("\n")+"\nendbfchar\n"),a+="endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"};e.events.push(["putFont",function(e){!function(e){var r=e.font,i=e.out,a=e.newObject,o=e.putStream;if(r.metadata instanceof t.API.TTFFont&&"Identity-H"===r.encoding){for(var s=r.metadata.Unicode.widths,c=r.metadata.subset.encode(r.metadata.glyIdsUsed,1),u="",h=0;h<c.length;h++)u+=String.fromCharCode(c[h]);var l=a();o({data:u,addLength1:!0,objectId:l}),i("endobj");var f=a();o({data:n(r.metadata.toUnicode),addLength1:!0,objectId:f}),i("endobj");var d=a();i("<<"),i("/Type /FontDescriptor"),i("/FontName /"+F(r.fontName)),i("/FontFile2 "+l+" 0 R"),i("/FontBBox "+t.API.PDFObject.convert(r.metadata.bbox)),i("/Flags "+r.metadata.flags),i("/StemV "+r.metadata.stemV),i("/ItalicAngle "+r.metadata.italicAngle),i("/Ascent "+r.metadata.ascender),i("/Descent "+r.metadata.decender),i("/CapHeight "+r.metadata.capHeight),i(">>"),i("endobj");var p=a();i("<<"),i("/Type /Font"),i("/BaseFont /"+F(r.fontName)),i("/FontDescriptor "+d+" 0 R"),i("/W "+t.API.PDFObject.convert(s)),i("/CIDToGIDMap /Identity"),i("/DW 1000"),i("/Subtype /CIDFontType2"),i("/CIDSystemInfo"),i("<<"),i("/Supplement 0"),i("/Registry (Adobe)"),i("/Ordering ("+r.encoding+")"),i(">>"),i(">>"),i("endobj"),r.objectNumber=a(),i("<<"),i("/Type /Font"),i("/Subtype /Type0"),i("/ToUnicode "+f+" 0 R"),i("/BaseFont /"+F(r.fontName)),i("/Encoding /"+r.encoding),i("/DescendantFonts ["+p+" 0 R]"),i(">>"),i("endobj"),r.isAlreadyPutted=!0}}(e)}]);e.events.push(["putFont",function(e){!function(e){var r=e.font,i=e.out,a=e.newObject,o=e.putStream;if(r.metadata instanceof t.API.TTFFont&&"WinAnsiEncoding"===r.encoding){for(var s=r.metadata.rawData,c="",u=0;u<s.length;u++)c+=String.fromCharCode(s[u]);var h=a();o({data:c,addLength1:!0,objectId:h}),i("endobj");var l=a();o({data:n(r.metadata.toUnicode),addLength1:!0,objectId:l}),i("endobj");var f=a();i("<<"),i("/Descent "+r.metadata.decender),i("/CapHeight "+r.metadata.capHeight),i("/StemV "+r.metadata.stemV),i("/Type /FontDescriptor"),i("/FontFile2 "+h+" 0 R"),i("/Flags 96"),i("/FontBBox "+t.API.PDFObject.convert(r.metadata.bbox)),i("/FontName /"+F(r.fontName)),i("/ItalicAngle "+r.metadata.italicAngle),i("/Ascent "+r.metadata.ascender),i(">>"),i("endobj"),r.objectNumber=a();for(var d=0;d<r.metadata.hmtx.widths.length;d++)r.metadata.hmtx.widths[d]=parseInt(r.metadata.hmtx.widths[d]*(1e3/r.metadata.head.unitsPerEm));i("<</Subtype/TrueType/Type/Font/ToUnicode "+l+" 0 R/BaseFont/"+F(r.fontName)+"/FontDescriptor "+f+" 0 R/Encoding/"+r.encoding+" /FirstChar 29 /LastChar 255 /Widths "+t.API.PDFObject.convert(r.metadata.hmtx.widths)+">>"),i("endobj"),r.isAlreadyPutted=!0}}(e)}]);var i=function(t){var e,n=t.text||"",i=t.x,a=t.y,o=t.options||{},s=t.mutex||{},c=s.pdfEscape,u=s.activeFontKey,h=s.fonts,l=u,f="",d=0,p="",g=h[l].encoding;if("Identity-H"!==h[l].encoding)return{text:n,x:i,y:a,options:o,mutex:s};for(p=n,l=u,Array.isArray(n)&&(p=n[0]),d=0;d<p.length;d+=1)h[l].metadata.hasOwnProperty("cmap")&&(e=h[l].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]),e||p[d].charCodeAt(0)<256&&h[l].metadata.hasOwnProperty("Unicode")?f+=p[d]:f+="";var m="";return parseInt(l.slice(1))<14||"WinAnsiEncoding"===g?m=c(f,l).split("").map((function(t){return t.charCodeAt(0).toString(16)})).join(""):"Identity-H"===g&&(m=r(f,h[l])),s.isHex=!0,{text:m,x:i,y:a,options:o,mutex:s}};e.events.push(["postProcessText",function(t){var e=t.text||"",r=[],n={text:e,x:t.x,y:t.y,options:t.options,mutex:t.mutex};if(Array.isArray(e)){var a=0;for(a=0;a<e.length;a+=1)Array.isArray(e[a])&&3===e[a].length?r.push([i(Object.assign({},n,{text:e[a][0]})).text,e[a][1],e[a][2]]):r.push(i(Object.assign({},n,{text:e[a]})).text);t.text=r}else t.text=i(Object.assign({},n,{text:e})).text}])}(E),
/**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(t){var e=function(){return void 0===this.internal.vFS&&(this.internal.vFS={}),!0};t.existsFileInVFS=function(t){return e.call(this),void 0!==this.internal.vFS[t]},t.addFileToVFS=function(t,r){return e.call(this),this.internal.vFS[t]=r,this},t.getFileFromVFS=function(t){return e.call(this),void 0!==this.internal.vFS[t]?this.internal.vFS[t]:null}}(E.API),
/**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(t){t.__bidiEngine__=t.prototype.__bidiEngine__=function(t){var r,n,i,a,o,s,c,u=e,h=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],l=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],f={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},d={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},p=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],g=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),m=!1,v=0;this.__bidiEngine__={};var b=function(t){var e=t.charCodeAt(),r=e>>8,n=d[r];return void 0!==n?u[256*n+(255&e)]:252===r||253===r?"AL":g.test(r)?"L":8===r?"R":"N"},y=function(t){for(var e,r=0;r<t.length;r++){if("L"===(e=b(t.charAt(r))))return!1;if("R"===e)return!0}return!1},w=function(t,e,o,s){var c,u,h,l,f=e[s];switch(f){case"L":case"R":m=!1;break;case"N":case"AN":break;case"EN":m&&(f="AN");break;case"AL":m=!0,f="R";break;case"WS":f="N";break;case"CS":s<1||s+1>=e.length||"EN"!==(c=o[s-1])&&"AN"!==c||"EN"!==(u=e[s+1])&&"AN"!==u?f="N":m&&(u="AN"),f=u===c?u:"N";break;case"ES":f="EN"===(c=s>0?o[s-1]:"B")&&s+1<e.length&&"EN"===e[s+1]?"EN":"N";break;case"ET":if(s>0&&"EN"===o[s-1]){f="EN";break}if(m){f="N";break}for(h=s+1,l=e.length;h<l&&"ET"===e[h];)h++;f=h<l&&"EN"===e[h]?"EN":"N";break;case"NSM":if(i&&!a){for(l=e.length,h=s+1;h<l&&"NSM"===e[h];)h++;if(h<l){var d=t[s],p=d>=1425&&d<=2303||64286===d;if(c=e[h],p&&("R"===c||"AL"===c)){f="R";break}}}f=s<1||"B"===(c=e[s-1])?"N":o[s-1];break;case"B":m=!1,r=!0,f=v;break;case"S":n=!0,f="N";break;case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":m=!1;break;case"BN":f="N"}return f},N=function(t,e,r){var n=t.split("");return r&&L(n,r,{hiLevel:v}),n.reverse(),e&&e.reverse(),n.join("")},L=function(t,e,i){var a,o,s,c,u,d=-1,p=t.length,g=0,y=[],N=v?l:h,L=[];for(m=!1,r=!1,n=!1,o=0;o<p;o++)L[o]=b(t[o]);for(s=0;s<p;s++){if(u=g,y[s]=w(t,L,y,s),a=240&(g=N[u][f[y[s]]]),g&=15,e[s]=c=N[g][5],a>0)if(16===a){for(o=d;o<s;o++)e[o]=1;d=-1}else d=-1;if(N[g][6])-1===d&&(d=s);else if(d>-1){for(o=d;o<s;o++)e[o]=c;d=-1}"B"===L[s]&&(e[s]=0),i.hiLevel|=c}n&&function(t,e,r){for(var n=0;n<r;n++)if("S"===t[n]){e[n]=v;for(var i=n-1;i>=0&&"WS"===t[i];i--)e[i]=v}}(L,e,p)},A=function(t,e,n,i,a){if(!(a.hiLevel<t)){if(1===t&&1===v&&!r)return e.reverse(),void(n&&n.reverse());for(var o,s,c,u,h=e.length,l=0;l<h;){if(i[l]>=t){for(c=l+1;c<h&&i[c]>=t;)c++;for(u=l,s=c-1;u<s;u++,s--)o=e[u],e[u]=e[s],e[s]=o,n&&(o=n[u],n[u]=n[s],n[s]=o);l=c}l++}}},x=function(t,e,r){var n=t.split(""),i={hiLevel:v};return r||(r=[]),L(n,r,i),function(t,e,r){if(0!==r.hiLevel&&c)for(var n,i=0;i<t.length;i++)1===e[i]&&(n=p.indexOf(t[i]))>=0&&(t[i]=p[n+1])}(n,r,i),A(2,n,e,r,i),A(1,n,e,r,i),n.join("")};return this.__bidiEngine__.doBidiReorder=function(t,e,r){if(function(t,e){if(e)for(var r=0;r<t.length;r++)e[r]=r;void 0===a&&(a=y(t)),void 0===s&&(s=y(t))}(t,e),i||!o||s)if(i&&o&&a^s)v=a?1:0,t=N(t,e,r);else if(!i&&o&&s)v=a?1:0,t=x(t,e,r),t=N(t,e);else if(!i||a||o||s){if(i&&!o&&a^s)t=N(t,e),a?(v=0,t=x(t,e,r)):(v=1,t=x(t,e,r),t=N(t,e));else if(i&&a&&!o&&s)v=1,t=x(t,e,r),t=N(t,e);else if(!i&&!o&&a^s){var n=c;a?(v=1,t=x(t,e,r),v=0,c=!1,t=x(t,e,r),c=n):(v=0,t=x(t,e,r),t=N(t,e),v=1,c=!1,t=x(t,e,r),c=n,t=N(t,e))}}else v=0,t=x(t,e,r);else v=a?1:0,t=x(t,e,r);return t},this.__bidiEngine__.setOptions=function(t){t&&(i=t.isInputVisual,o=t.isOutputVisual,a=t.isInputRtl,s=t.isOutputRtl,c=t.isSymmetricSwapping)},this.__bidiEngine__.setOptions(t),this.__bidiEngine__};var e=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new t.__bidiEngine__({isInputVisual:!0});t.API.events.push(["postProcessText",function(t){var e=t.text,n=(t.x,t.y,t.options||{}),i=(t.mutex,n.lang,[]);if(n.isInputVisual="boolean"!=typeof n.isInputVisual||n.isInputVisual,r.setOptions(n),"[object Array]"===Object.prototype.toString.call(e)){var a=0;for(i=[],a=0;a<e.length;a+=1)"[object Array]"===Object.prototype.toString.call(e[a])?i.push([r.doBidiReorder(e[a][0]),e[a][1],e[a][2]]):i.push([r.doBidiReorder(e[a])]);t.text=i}else t.text=r.doBidiReorder(e);r.setOptions({isInputVisual:!0})}])}(E),E.API.TTFFont=function(){function t(t){var e;if(this.rawData=t,e=this.contents=new ne(t),this.contents.pos=4,"ttcf"===e.readString(4))throw new Error("TTCF not supported.");e.pos=0,this.parse(),this.subset=new Le(this),this.registerTTF()}return t.open=function(e){return new t(e)},t.prototype.parse=function(){return this.directory=new ie(this.contents),this.head=new se(this),this.name=new pe(this),this.cmap=new ue(this),this.toUnicode={},this.hhea=new he(this),this.maxp=new ge(this),this.hmtx=new me(this),this.post=new fe(this),this.os2=new le(this),this.loca=new Ne(this),this.glyf=new be(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},t.prototype.registerTTF=function(){var t,e,r,n,i;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=function(){var e,r,n,i;for(i=[],e=0,r=(n=this.bbox).length;e<r;e++)t=n[e],i.push(Math.round(t*this.scaleFactor));return i}.call(this),this.stemV=0,this.post.exists?(r=255&(n=this.post.italic_angle),0!=(32768&(e=n>>16))&&(e=-(1+(65535^e))),this.italicAngle=+(e+"."+r)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=1===(i=this.familyClass)||2===i||3===i||4===i||5===i||7===i,this.isScript=10===this.familyClass,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),0!==this.italicAngle&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},t.prototype.characterToGlyph=function(t){var e;return(null!=(e=this.cmap.unicode)?e.codeMap[t]:void 0)||0},t.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},t.prototype.widthOfString=function(t,e,r){var n,i,a,o;for(a=0,i=0,o=(t=""+t).length;0<=o?i<o:i>o;i=0<=o?++i:--i)n=t.charCodeAt(i),a+=this.widthOfGlyph(this.characterToGlyph(n))+r*(1e3/e)||0;return a*(e/1e3)},t.prototype.lineHeight=function(t,e){var r;return null==e&&(e=!1),r=e?this.lineGap:0,(this.ascender+r-this.decender)/1e3*t},t}();var re,ne=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},t.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},t.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,r;for(r=[],e=0;0<=t?e<t:e>t;e=0<=t?++e:--e)r[e]=String.fromCharCode(this.readByte());return r.join("")},t.prototype.writeString=function(t){var e,r,n;for(n=[],e=0,r=t.length;0<=r?e<r:e>r;e=0<=r?++e:--e)n.push(this.writeByte(t.charCodeAt(e)));return n},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,r,n,i,a,o,s;return t=this.readByte(),e=this.readByte(),r=this.readByte(),n=this.readByte(),i=this.readByte(),a=this.readByte(),o=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^r)+4294967296*(255^n)+16777216*(255^i)+65536*(255^a)+256*(255^o)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*r+4294967296*n+16777216*i+65536*a+256*o+s},t.prototype.writeLongLong=function(t){var e,r;return e=Math.floor(t/4294967296),r=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.read=function(t){var e,r;for(e=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)e.push(this.readByte());return e},t.prototype.write=function(t){var e,r,n,i;for(i=[],r=0,n=t.length;r<n;r++)e=t[r],i.push(this.writeByte(e));return i},t}(),ie=function(){var t;function e(t){var e,r,n;for(this.scalarType=t.readInt(),this.tableCount=t.readShort(),this.searchRange=t.readShort(),this.entrySelector=t.readShort(),this.rangeShift=t.readShort(),this.tables={},r=0,n=this.tableCount;0<=n?r<n:r>n;r=0<=n?++r:--r)e={tag:t.readString(4),checksum:t.readInt(),offset:t.readInt(),length:t.readInt()},this.tables[e.tag]=e}return e.prototype.encode=function(e){var r,n,i,a,o,s,c,u,h,l,f,d,p;for(p in f=Object.keys(e).length,s=Math.log(2),h=16*Math.floor(Math.log(f)/s),a=Math.floor(h/s),u=16*f-h,(n=new ne).writeInt(this.scalarType),n.writeShort(f),n.writeShort(h),n.writeShort(a),n.writeShort(u),i=16*f,c=n.pos+i,o=null,d=[],e)for(l=e[p],n.writeString(p),n.writeInt(t(l)),n.writeInt(c),n.writeInt(l.length),d=d.concat(l),"head"===p&&(o=c),c+=l.length;c%4;)d.push(0),c++;return n.write(d),r=2981146554-t(n.data),n.pos=o+8,n.writeUInt32(r),n.data},t=function(t){var e,r,n,i;for(t=ve.call(t);t.length%4;)t.push(0);for(n=new ne(t),r=0,e=0,i=t.length;e<i;e=e+=4)r+=n.readUInt32();return 4294967295&r},e}(),ae={}.hasOwnProperty,oe=function(t,e){for(var r in e)ae.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};re=function(){function t(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}();var se=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var e;return(e=new ne).writeInt(this.version),e.writeInt(this.revision),e.writeInt(this.checkSumAdjustment),e.writeInt(this.magicNumber),e.writeShort(this.flags),e.writeShort(this.unitsPerEm),e.writeLongLong(this.created),e.writeLongLong(this.modified),e.writeShort(this.xMin),e.writeShort(this.yMin),e.writeShort(this.xMax),e.writeShort(this.yMax),e.writeShort(this.macStyle),e.writeShort(this.lowestRecPPEM),e.writeShort(this.fontDirectionHint),e.writeShort(t),e.writeShort(this.glyphDataFormat),e.data},e}(),ce=function(){function t(t,e){var r,n,i,a,o,s,c,u,h,l,f,d,p,g,m,v,b;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=e+t.readInt(),h=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=3===this.platformID&&1===this.encodingID&&4===this.format||0===this.platformID&&4===this.format,this.codeMap={},this.format){case 0:for(s=0;s<256;++s)this.codeMap[s]=t.readByte();break;case 4:for(f=t.readUInt16(),l=f/2,t.pos+=6,i=function(){var e,r;for(r=[],s=e=0;0<=l?e<l:e>l;s=0<=l?++e:--e)r.push(t.readUInt16());return r}(),t.pos+=2,p=function(){var e,r;for(r=[],s=e=0;0<=l?e<l:e>l;s=0<=l?++e:--e)r.push(t.readUInt16());return r}(),c=function(){var e,r;for(r=[],s=e=0;0<=l?e<l:e>l;s=0<=l?++e:--e)r.push(t.readUInt16());return r}(),u=function(){var e,r;for(r=[],s=e=0;0<=l?e<l:e>l;s=0<=l?++e:--e)r.push(t.readUInt16());return r}(),n=(this.length-t.pos+this.offset)/2,o=function(){var e,r;for(r=[],s=e=0;0<=n?e<n:e>n;s=0<=n?++e:--e)r.push(t.readUInt16());return r}(),s=m=0,b=i.length;m<b;s=++m)for(g=i[s],r=v=d=p[s];d<=g?v<=g:v>=g;r=d<=g?++v:--v)0===u[s]?a=r+c[s]:0!==(a=o[u[s]/2+(r-d)-(l-s)]||0)&&(a+=c[s]),this.codeMap[r]=65535&a}t.pos=h}return t.encode=function(t,e){var r,n,i,a,o,s,c,u,h,l,f,d,p,g,m,v,b,y,w,N,L,A,x,S,_,P,k,I,F,C,j,O,B,M,E,q,D,R,T,U,z,H,W,V,G,Y;switch(I=new ne,a=Object.keys(t).sort((function(t,e){return t-e})),e){case"macroman":for(p=0,g=function(){var t=[];for(d=0;d<256;++d)t.push(0);return t}(),v={0:0},i={},F=0,B=a.length;F<B;F++)null==v[W=t[n=a[F]]]&&(v[W]=++p),i[n]={old:t[n],new:v[t[n]]},g[n]=v[t[n]];return I.writeUInt16(1),I.writeUInt16(0),I.writeUInt32(12),I.writeUInt16(0),I.writeUInt16(262),I.writeUInt16(0),I.write(g),{charMap:i,subtable:I.data,maxGlyphID:p+1};case"unicode":for(P=[],h=[],b=0,v={},r={},m=c=null,C=0,M=a.length;C<M;C++)null==v[w=t[n=a[C]]]&&(v[w]=++b),r[n]={old:w,new:v[w]},o=v[w]-n,null!=m&&o===c||(m&&h.push(m),P.push(n),c=o),m=n;for(m&&h.push(m),h.push(65535),P.push(65535),S=2*(x=P.length),A=2*Math.pow(Math.log(x)/Math.LN2,2),l=Math.log(A/2)/Math.LN2,L=2*x-A,s=[],N=[],f=[],d=j=0,E=P.length;j<E;d=++j){if(_=P[d],u=h[d],65535===_){s.push(0),N.push(0);break}if(_-(k=r[_].new)>=32768)for(s.push(0),N.push(2*(f.length+x-d)),n=O=_;_<=u?O<=u:O>=u;n=_<=u?++O:--O)f.push(r[n].new);else s.push(k-_),N.push(0)}for(I.writeUInt16(3),I.writeUInt16(1),I.writeUInt32(12),I.writeUInt16(4),I.writeUInt16(16+8*x+2*f.length),I.writeUInt16(0),I.writeUInt16(S),I.writeUInt16(A),I.writeUInt16(l),I.writeUInt16(L),z=0,q=h.length;z<q;z++)n=h[z],I.writeUInt16(n);for(I.writeUInt16(0),H=0,D=P.length;H<D;H++)n=P[H],I.writeUInt16(n);for(V=0,R=s.length;V<R;V++)o=s[V],I.writeUInt16(o);for(G=0,T=N.length;G<T;G++)y=N[G],I.writeUInt16(y);for(Y=0,U=f.length;Y<U;Y++)p=f[Y],I.writeUInt16(p);return{charMap:r,subtable:I.data,maxGlyphID:b+1}}},t}(),ue=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="cmap",e.prototype.parse=function(t){var e,r,n;for(t.pos=this.offset,this.version=t.readUInt16(),n=t.readUInt16(),this.tables=[],this.unicode=null,r=0;0<=n?r<n:r>n;r=0<=n?++r:--r)e=new ce(t,this.offset),this.tables.push(e),e.isUnicode&&null==this.unicode&&(this.unicode=e);return!0},e.encode=function(t,e){var r,n;return null==e&&(e="macroman"),r=ce.encode(t,e),(n=new ne).writeUInt16(0),n.writeUInt16(1),r.table=n.data.concat(r.subtable),r},e}(),he=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),le=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var e,r;for(r=[],e=0;e<10;++e)r.push(t.readByte());return r}(),this.charRange=function(){var e,r;for(r=[],e=0;e<4;++e)r.push(t.readInt());return r}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var e,r;for(r=[],e=0;e<2;e=++e)r.push(t.readInt());return r}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),fe=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="post",e.prototype.parse=function(t){var e,r,n;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:break;case 131072:var i;for(r=t.readUInt16(),this.glyphNameIndex=[],i=0;0<=r?i<r:i>r;i=0<=r?++i:--i)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],n=[];t.pos<this.offset+this.length;)e=t.readByte(),n.push(this.names.push(t.readString(e)));return n;case 151552:return r=t.readUInt16(),this.offsets=t.read(r);case 196608:break;case 262144:return this.map=function(){var e,r,n;for(n=[],i=e=0,r=this.file.maxp.numGlyphs;0<=r?e<r:e>r;i=0<=r?++e:--e)n.push(t.readUInt32());return n}.call(this)}},e}(),de=function(t,e){this.raw=t,this.length=t.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID},pe=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="name",e.prototype.parse=function(t){var e,r,n,i,a,o,s,c,u,h,l;for(t.pos=this.offset,t.readShort(),e=t.readShort(),o=t.readShort(),r=[],i=0;0<=e?i<e:i>e;i=0<=e?++i:--i)r.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+o+t.readShort()});for(s={},i=u=0,h=r.length;u<h;i=++u)n=r[i],t.pos=n.offset,c=t.readString(n.length),a=new de(c,n),null==s[l=n.nameID]&&(s[l]=[]),s[n.nameID].push(a);this.strings=s,this.copyright=s[0],this.fontFamily=s[1],this.fontSubfamily=s[2],this.uniqueSubfamily=s[3],this.fontName=s[4],this.version=s[5];try{this.postscriptName=s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch(t){this.postscriptName=s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=s[7],this.manufacturer=s[8],this.designer=s[9],this.description=s[10],this.vendorUrl=s[11],this.designerUrl=s[12],this.license=s[13],this.licenseUrl=s[14],this.preferredFamily=s[15],this.preferredSubfamily=s[17],this.compatibleFull=s[18],this.sampleText=s[19]},e}(),ge=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),me=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="hmtx",e.prototype.parse=function(t){var e,r,n,i,a,o,s;for(t.pos=this.offset,this.metrics=[],e=0,o=this.file.hhea.numberOfMetrics;0<=o?e<o:e>o;e=0<=o?++e:--e)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(n=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var r,i;for(i=[],e=r=0;0<=n?r<n:r>n;e=0<=n?++r:--r)i.push(t.readInt16());return i}(),this.widths=function(){var t,e,r,n;for(n=[],t=0,e=(r=this.metrics).length;t<e;t++)i=r[t],n.push(i.advance);return n}.call(this),r=this.widths[this.widths.length-1],s=[],e=a=0;0<=n?a<n:a>n;e=0<=n?++a:--a)s.push(this.widths.push(r));return s},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),ve=[].slice,be=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var e,r,n,i,a,o,s,c,u,h;return t in this.cache?this.cache[t]:(i=this.file.loca,e=this.file.contents,r=i.indexOf(t),0===(n=i.lengthOf(t))?this.cache[t]=null:(e.pos=this.offset+r,a=(o=new ne(e.read(n))).readShort(),c=o.readShort(),h=o.readShort(),s=o.readShort(),u=o.readShort(),this.cache[t]=-1===a?new we(o,c,h,s,u):new ye(o,a,c,h,s,u),this.cache[t]))},e.prototype.encode=function(t,e,r){var n,i,a,o,s;for(a=[],i=[],o=0,s=e.length;o<s;o++)n=t[e[o]],i.push(a.length),n&&(a=a.concat(n.encode(r)));return i.push(a.length),{table:a,offsets:i}},e}(),ye=function(){function t(t,e,r,n,i,a){this.raw=t,this.numberOfContours=e,this.xMin=r,this.yMin=n,this.xMax=i,this.yMax=a,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),we=function(){function t(t,e,r,n,i){var a,o;for(this.raw=t,this.xMin=e,this.yMin=r,this.xMax=n,this.yMax=i,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],a=this.raw;o=a.readShort(),this.glyphOffsets.push(a.pos),this.glyphIDs.push(a.readUInt16()),32&o;)a.pos+=1&o?4:2,128&o?a.pos+=8:64&o?a.pos+=4:8&o&&(a.pos+=2)}return 1,8,32,64,128,t.prototype.encode=function(){var t,e,r;for(e=new ne(ve.call(this.raw.data)),t=0,r=this.glyphIDs.length;t<r;++t)e.pos=this.glyphOffsets[t];return e.data},t}(),Ne=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return oe(e,re),e.prototype.tag="loca",e.prototype.parse=function(t){var e,r;return t.pos=this.offset,e=this.file.head.indexToLocFormat,this.offsets=0===e?function(){var e,n;for(n=[],r=0,e=this.length;r<e;r+=2)n.push(2*t.readUInt16());return n}.call(this):function(){var e,n;for(n=[],r=0,e=this.length;r<e;r+=4)n.push(t.readUInt32());return n}.call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,e){for(var r=new Uint32Array(this.offsets.length),n=0,i=0,a=0;a<r.length;++a)if(r[a]=n,i<e.length&&e[i]==a){++i,r[a]=n;var o=this.offsets[a],s=this.offsets[a+1]-o;s>0&&(n+=s)}for(var c=new Array(4*r.length),u=0;u<r.length;++u)c[4*u+3]=255&r[u],c[4*u+2]=(65280&r[u])>>8,c[4*u+1]=(16711680&r[u])>>16,c[4*u]=(4278190080&r[u])>>24;return c},e}(),Le=function(){function t(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return t.prototype.generateCmap=function(){var t,e,r,n,i;for(e in n=this.font.cmap.tables[0].codeMap,t={},i=this.subset)r=i[e],t[e]=n[r];return t},t.prototype.glyphsFor=function(t){var e,r,n,i,a,o,s;for(n={},a=0,o=t.length;a<o;a++)n[i=t[a]]=this.font.glyf.glyphFor(i);for(i in e=[],n)(null!=(r=n[i])?r.compound:void 0)&&e.push.apply(e,r.glyphIDs);if(e.length>0)for(i in s=this.glyphsFor(e))r=s[i],n[i]=r;return n},t.prototype.encode=function(t,e){var r,n,i,a,o,s,c,u,h,l,f,d,p,g,m;for(n in r=ue.encode(this.generateCmap(),"unicode"),a=this.glyphsFor(t),f={0:0},m=r.charMap)f[(s=m[n]).old]=s.new;for(d in l=r.maxGlyphID,a)d in f||(f[d]=l++);return u=function(t){var e,r;for(e in r={},t)r[t[e]]=e;return r}(f),h=Object.keys(u).sort((function(t,e){return t-e})),p=function(){var t,e,r;for(r=[],t=0,e=h.length;t<e;t++)o=h[t],r.push(u[o]);return r}(),i=this.font.glyf.encode(a,p,f),c=this.font.loca.encode(i.offsets,p),g={cmap:this.font.cmap.raw(),glyf:i.table,loca:c,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(e)},this.font.os2.exists&&(g["OS/2"]=this.font.os2.raw()),this.font.directory.encode(g)},t}();E.API.PDFObject=function(){var t;function e(){}return t=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},e.convert=function(r){var n,i,a,o;if(Array.isArray(r))return"["+function(){var t,i,a;for(a=[],t=0,i=r.length;t<i;t++)n=r[t],a.push(e.convert(n));return a}().join(" ")+"]";if("string"==typeof r)return"/"+r;if(null!=r?r.isString:void 0)return"("+r+")";if(r instanceof Date)return"(D:"+t(r.getUTCFullYear(),4)+t(r.getUTCMonth(),2)+t(r.getUTCDate(),2)+t(r.getUTCHours(),2)+t(r.getUTCMinutes(),2)+t(r.getUTCSeconds(),2)+"Z)";if("[object Object]"==={}.toString.call(r)){for(i in a=["<<"],r)o=r[i],a.push("/"+i+" "+e.convert(o));return a.push(">>"),a.join("\n")}return""+r},e}();/* harmony default export */ __webpack_exports__["a"] = (E);
//# sourceMappingURL=jspdf.es.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7dda":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/freshGreen.0e344e3e.jpg";

/***/ }),

/***/ "7e07":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8af8");
var createPropertyDescriptor = __webpack_require__("0259");

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "7f82":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/skyGreen.4cfa829a.jpg";

/***/ }),

/***/ "8109":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("46ab");
var fails = __webpack_require__("8af8");
var classof = __webpack_require__("424c");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "8300":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("601e");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "8515":
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "8617":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/classic.733f273c.jpg";

/***/ }),

/***/ "899a":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("b2d1");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "8af8":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "8d5c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8af8");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "91d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "933e":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("ed00");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "9431":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b257");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "9440":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("933e");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "9910":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mindMap.223b38aa.jpg";

/***/ }),

/***/ "9eda":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("6632");
var isCallable = __webpack_require__("5e8c");
var isObject = __webpack_require__("feb8");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "a3a6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/classic2.cdfe2a8d.jpg";

/***/ }),

/***/ "ac18":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/catalogOrganization.380bb277.jpg";

/***/ }),

/***/ "ac5f":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("cc50");
var toObject = __webpack_require__("8300");
var IndexedObject = __webpack_require__("8109");
var lengthOfArrayLike = __webpack_require__("9440");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "acc5":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("8d5c");
var fails = __webpack_require__("8af8");
var createElement = __webpack_require__("b957");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "afc0":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("8af8");
var isCallable = __webpack_require__("5e8c");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "b257":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1a89");
var isCallable = __webpack_require__("5e8c");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "b2d1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("e2cd");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "b2e8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pinkGrape.32c2587b.jpg";

/***/ }),

/***/ "b533":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blueSky.3c7f8ccb.jpg";

/***/ }),

/***/ "b671":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "b895":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("46ab");
var hasOwn = __webpack_require__("4d80");
var toIndexedObject = __webpack_require__("44c7");
var indexOf = __webpack_require__("0965").indexOf;
var hiddenKeys = __webpack_require__("6797");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "b957":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1a89");
var isObject = __webpack_require__("feb8");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "bac8":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b257");
var uncurryThis = __webpack_require__("46ab");
var getOwnPropertyNamesModule = __webpack_require__("51a6");
var getOwnPropertySymbolsModule = __webpack_require__("8515");
var anObject = __webpack_require__("cf4b");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "bbea":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__("46ab");
var anObject = __webpack_require__("cf4b");
var aPossiblePrototype = __webpack_require__("77be");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "c0d2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/classic3.19d6c347.jpg";

/***/ }),

/***/ "c612":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/romanticPurple.7607e58a.jpg";

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca62":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/freshRed.1c5bde77.jpg";

/***/ }),

/***/ "cc50":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("5e8c");
var tryToString = __webpack_require__("cda9");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "cda9":
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "ce2e":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("5e8c");
var isObject = __webpack_require__("feb8");
var setPrototypeOf = __webpack_require__("bbea");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "cf4b":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("feb8");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "d0dc":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "d665":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("8d5c");
var hasOwn = __webpack_require__("4d80");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "d898":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("feb8");
var createNonEnumerableProperty = __webpack_require__("f770");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "dacf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("8d5c");
var call = __webpack_require__("6632");
var propertyIsEnumerableModule = __webpack_require__("b671");
var createPropertyDescriptor = __webpack_require__("0259");
var toIndexedObject = __webpack_require__("44c7");
var toPropertyKey = __webpack_require__("4f65");
var hasOwn = __webpack_require__("4d80");
var IE8_DOM_DEFINE = __webpack_require__("acc5");

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "db73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mint.7933f60a.jpg";

/***/ }),

/***/ "dcfb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Deflate */
/* unused harmony export AsyncDeflate */
/* unused harmony export deflate */
/* unused harmony export deflateSync */
/* unused harmony export Inflate */
/* unused harmony export AsyncInflate */
/* unused harmony export inflate */
/* unused harmony export inflateSync */
/* unused harmony export Gzip */
/* unused harmony export AsyncGzip */
/* unused harmony export gzip */
/* unused harmony export gzipSync */
/* unused harmony export Gunzip */
/* unused harmony export AsyncGunzip */
/* unused harmony export gunzip */
/* unused harmony export gunzipSync */
/* unused harmony export Zlib */
/* unused harmony export AsyncZlib */
/* unused harmony export zlib */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return zlibSync; });
/* unused harmony export Unzlib */
/* unused harmony export AsyncUnzlib */
/* unused harmony export unzlib */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unzlibSync; });
/* unused harmony export compress */
/* unused harmony export AsyncCompress */
/* unused harmony export compressSync */
/* unused harmony export Compress */
/* unused harmony export Decompress */
/* unused harmony export AsyncDecompress */
/* unused harmony export decompress */
/* unused harmony export decompressSync */
/* unused harmony export strToU8 */
/* unused harmony export strFromU8 */
/* unused harmony export zip */
/* unused harmony export zipSync */
/* unused harmony export unzip */
/* unused harmony export unzipSync */
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// https://tools.ietf.org/html/rfc1951
// You may also wish to take a look at the guide I made about this program:
// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
// Much of the following code is similar to that of UZIP.js:
// https://github.com/photopea/UZIP.js
// Many optimizations have been made, so the bundle size is ultimately smaller but performance is similar.
// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
// is better for memory in most engines (I *think*).
var ch2 = {};
var wk = (function (c, id, msg, transfer, cb) {
    var u = ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([c], { type: 'text/javascript' })));
    var w = new Worker(u);
    w.onerror = function (e) { return cb(e.error, null); };
    w.onmessage = function (e) { return cb(null, e.data); };
    w.postMessage(msg, transfer);
    return w;
});

// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
// code length index map
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
// get base, reverse index map from extra bits
var freb = function (eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
        b[i] = start += 1 << eb[i - 1];
    }
    // numbers here are at max 18 bits
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
        for (var j = b[i]; j < b[i + 1]; ++j) {
            r[j] = ((j - b[i]) << 5) | i;
        }
    }
    return [b, r];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
    // reverse table algorithm from SO
    var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
    x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
    x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
    rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = (function (cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for (; i < s; ++i)
        ++l[cd[i] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for (i = 0; i < mb; ++i) {
        le[i] = (le[i - 1] + l[i - 1]) << 1;
    }
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for (i = 0; i < s; ++i) {
            // ignore 0 lengths
            if (cd[i]) {
                // num encoding both symbol and bits read
                var sv = (i << 4) | cd[i];
                // free bits
                var r_1 = mb - cd[i];
                // start value
                var v = le[cd[i] - 1]++ << r_1;
                // m is end value
                for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                    // every 16 bit value starting with the code yields the same result
                    co[rev[v] >>> rvb] = sv;
                }
            }
        }
    }
    else {
        co = new u16(s);
        for (i = 0; i < s; ++i)
            co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
    }
    return co;
});
// fixed length tree
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
    flt[i] = 8;
for (var i = 144; i < 256; ++i)
    flt[i] = 9;
for (var i = 256; i < 280; ++i)
    flt[i] = 7;
for (var i = 280; i < 288; ++i)
    flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
// find max of array
var max = function (a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
        if (a[i] > m)
            m = a[i];
    }
    return m;
};
// read d, starting at bit p and mask with m
var bits = function (d, p, m) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8)) >>> (p & 7)) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function (d, p) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >>> (p & 7));
};
// get end of byte
var shft = function (p) { return ((p / 8) >> 0) + (p & 7 && 1); };
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function (v, s, e) {
    if (s == null || s < 0)
        s = 0;
    if (e == null || e > v.length)
        e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var inflt = function (dat, buf, st) {
    // source length
    var sl = dat.length;
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st)
        st = {};
    // Assumes roughly 33% compression ratio average
    if (!buf)
        buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function (l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
                if (t > sl) {
                    if (noSt)
                        throw 'unexpected EOF';
                    break;
                }
                // ensure size
                if (noBuf)
                    cbuf(bt + l);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l, st.p = pos = t * 8;
                continue;
            }
            else if (type == 1)
                lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for (var i = 0; i < hcLen; ++i) {
                    // use index map to get real code
                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
                }
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                if (!noSt && pos + tl * (clb + 7) > tbts)
                    break;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for (var i = 0; i < tl;) {
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) {
                        ldt[i++] = s;
                    }
                    else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16)
                            n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17)
                            n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18)
                            n = 11 + bits(dat, pos, 127), pos += 7;
                        while (n--)
                            ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            }
            else
                throw 'invalid block type';
            if (pos > tbts)
                throw 'unexpected EOF';
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf)
            cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var mxa = lbt + dbt + 18;
        while (noSt || pos + mxa < tbts) {
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts)
                throw 'unexpected EOF';
            if (!c)
                throw 'invalid length/literal';
            if (sym < 256)
                buf[bt++] = sym;
            else if (sym == 256) {
                lm = null;
                break;
            }
            else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = fleb[i];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d)
                    throw 'invalid distance';
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
                }
                if (pos > tbts)
                    throw 'unexpected EOF';
                if (noBuf)
                    cbuf(bt + 131072);
                var end = bt + add;
                for (; bt < end; bt += 4) {
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = pos, st.b = bt;
        if (lm)
            final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function (d, mb) {
    // Need extra info to make a tree
    var t = [];
    for (var i = 0; i < d.length; ++i) {
        if (d[i])
            t.push({ s: i, f: d[i] });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s)
        return [new u8(0), 0];
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [v, 1];
    }
    t.sort(function (a, b) { return a.f - b.f; });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({ s: -1, f: 25001 });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while (i1 != s - 1) {
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
    }
    var maxSym = t2[0].s;
    for (var i = 1; i < s; ++i) {
        if (t2[i].s > maxSym)
            maxSym = t2[i].s;
    }
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
        for (; i < s; ++i) {
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << (mbt - tr[i2_1]));
                tr[i2_1] = mb;
            }
            else
                break;
        }
        dt >>>= lft;
        while (dt > 0) {
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb)
                dt -= 1 << (mb - tr[i2_2]++ - 1);
            else
                ++i;
        }
        for (; i >= 0 && dt; --i) {
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [new u8(tr), mbt];
};
// get the max length and assign length codes
var ln = function (n, l, d) {
    return n.s == -1
        ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
        : (l[n.s] = d);
};
// length codes generation
var lc = function (c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while (s && !c[--s])
        ;
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function (v) { cl[cli++] = v; };
    for (var i = 1; i <= s; ++i) {
        if (c[i] == cln && i != s)
            ++cls;
        else {
            if (!cln && cls > 2) {
                for (; cls > 138; cls -= 138)
                    w(32754);
                if (cls > 2) {
                    w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                    cls = 0;
                }
            }
            else if (cls > 3) {
                w(cln), --cls;
                for (; cls > 6; cls -= 6)
                    w(8304);
                if (cls > 2)
                    w(((cls - 3) << 5) | 8208), cls = 0;
            }
            while (cls--)
                w(cln);
            cls = 1;
            cln = c[i];
        }
    }
    return [cl.subarray(0, cli), s];
};
// calculate the length of output from tree, code lengths
var clen = function (cf, cl) {
    var l = 0;
    for (var i = 0; i < cl.length; ++i)
        l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function (out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i = 0; i < s; ++i)
        out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
    var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for (var i = 0; i < lclt.length; ++i)
        lcfreq[lclt[i] & 31]++;
    for (var i = 0; i < lcdt.length; ++i)
        lcfreq[lcdt[i] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
    var flen = (bl + 5) << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen)
        return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for (var i = 0; i < nlcc; ++i)
            wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
            var clct = lcts[it];
            for (var i = 0; i < clct.length; ++i) {
                var len = clct[i] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15)
                    wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
            }
        }
    }
    else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i = 0; i < li; ++i) {
        if (syms[i] > 255) {
            var len = (syms[i] >>> 18) & 31;
            wbits16(out, p, lm[len + 257]), p += ll[len + 257];
            if (len > 7)
                wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];
            var dst = syms[i] & 31;
            wbits16(out, p, dm[dst]), p += dl[dst];
            if (dst > 3)
                wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];
        }
        else {
            wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
        }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
// empty
var et = /*#__PURE__*/ new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function (dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) {
        for (var i = 0; i <= s; i += 65535) {
            // end
            var e = i + 65535;
            if (e < s) {
                // write full block
                pos = wfblk(w, pos, dat.subarray(i, e));
            }
            else {
                // write final block
                w[i] = lst;
                pos = wfblk(w, pos, dat.subarray(i, s));
            }
        }
    }
    else {
        var opt = deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new u16(32768), head = new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new u32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
        for (; i < s; ++i) {
            // hash value
            var hv = hsh(i);
            // index mod 32768
            var imod = i & 32767;
            // previous index with this value
            var pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for (var j = 0; j < 286; ++j)
                        lf[j] = 0;
                    for (var j = 0; j < 30; ++j)
                        df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while (dif <= maxd && --ch_1 && imod != pimod) {
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                ;
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn)
                                    break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for (var j = 0; j < mmd; ++j) {
                                    var ti = (i - dif + j + 32768) & 32767;
                                    var pti = prev[ti];
                                    var cd = (ti - pti + 32768) & 32767;
                                    if (cd > md)
                                        md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += (imod - pimod + 32768) & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                }
                else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst)
            pos = wfblk(w, pos, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// CRC32 table
var crct = /*#__PURE__*/ (function () {
    var t = new u32(256);
    for (var i = 0; i < 256; ++i) {
        var c = i, k = 9;
        while (--k)
            c = ((c & 1) && 0xEDB88320) ^ (c >>> 1);
        t[i] = c;
    }
    return t;
})();
// CRC32
var crc = function () {
    var c = 0xFFFFFFFF;
    return {
        p: function (d) {
            // closures have awful performance
            var cr = c;
            for (var i = 0; i < d.length; ++i)
                cr = crct[(cr & 255) ^ d[i]] ^ (cr >>> 8);
            c = cr;
        },
        d: function () { return c ^ 0xFFFFFFFF; }
    };
};
// Alder32
var adler = function () {
    var a = 1, b = 0;
    return {
        p: function (d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for (var i = 0; i != l;) {
                var e = Math.min(i + 5552, l);
                for (; i < e; ++i)
                    n += d[i], m += n;
                n %= 65521, m %= 65521;
            }
            a = n, b = m;
        },
        d: function () { return ((a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8)) + ((a & 255) << 23) * 2; }
    };
};
;
// deflate with opts
var dopt = function (dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
};
// Walmart object spread
var mrg = function (a, b) {
    var o = {};
    for (var k in a)
        o[k] = a[k];
    for (var k in b)
        o[k] = b[k];
    return o;
};
// worker clone
// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
// This took me three weeks to figure out how to do.
var wcln = function (fn, fnStr, td) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/ /g, '').split(',');
    for (var i = 0; i < dt.length; ++i) {
        var v = dt[i], k = ks[i];
        if (typeof v == 'function') {
            fnStr += ';' + k + '=';
            var st_1 = v.toString();
            if (v.prototype) {
                // for global objects
                if (st_1.indexOf('[native code]') != -1) {
                    var spInd = st_1.indexOf(' ', 8) + 1;
                    fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
                }
                else {
                    fnStr += st_1;
                    for (var t in v.prototype)
                        fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
                }
            }
            else
                fnStr += st_1;
        }
        else
            td[k] = v;
    }
    return [fnStr, td];
};
var ch = [];
// clone bufs
var cbfs = function (v) {
    var tl = [];
    for (var k in v) {
        if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32)
            tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    }
    return tl;
};
// use a worker to execute code
var wrkr = function (fns, init, id, cb) {
    var _a;
    if (!ch[id]) {
        var fnStr = '', td_1 = {}, m = fns.length - 1;
        for (var i = 0; i < m; ++i)
            _a = wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];
        ch[id] = wcln(fns[m], fnStr, td_1);
    }
    var td = mrg({}, ch[id][1]);
    return wk(ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
};
// base async inflate fn
var bInflt = function () { return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, hMap, max, bits, bits16, shft, slc, inflt, inflateSync, pbf, gu8]; };
var bDflt = function () { return [u8, u16, u32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf]; };
// gzip extra
var gze = function () { return [gzh, gzhl, wbytes, crc, crct]; };
// gunzip extra
var guze = function () { return [gzs, gzl]; };
// zlib extra
var zle = function () { return [zlh, wbytes, adler]; };
// unzlib extra
var zule = function () { return [zlv]; };
// post buf
var pbf = function (msg) { return postMessage(msg, [msg.buffer]); };
// get u8
var gu8 = function (o) { return o && o.size && new u8(o.size); };
// async helper
var cbify = function (dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function (err, dat) {
        w.terminate();
        cb(err, dat);
    });
    if (!opts.consume)
        dat = new u8(dat);
    w.postMessage([dat, opts], [dat.buffer]);
    return function () { w.terminate(); };
};
// auto stream
var astrm = function (strm) {
    strm.ondata = function (dat, final) { return postMessage([dat, final], [dat.buffer]); };
    return function (ev) { return strm.push(ev.data[0], ev.data[1]); };
};
// async stream attach
var astrmify = function (fns, strm, opts, init, id) {
    var t;
    var w = wrkr(fns, init, id, function (err, dat) {
        if (err)
            w.terminate(), strm.ondata.call(strm, err);
        else {
            if (dat[1])
                w.terminate();
            strm.ondata.call(strm, err, dat[0], dat[1]);
        }
    });
    w.postMessage(opts);
    strm.push = function (d, f) {
        if (t)
            throw 'stream finished';
        if (!strm.ondata)
            throw 'no stream handler';
        w.postMessage([d, t = f], [d.buffer]);
    };
    strm.terminate = function () { w.terminate(); };
};
// read 2 bytes
var b2 = function (d, b) { return d[b] | (d[b + 1] << 8); };
// read 4 bytes
var b4 = function (d, b) { return (d[b] | (d[b + 1] << 8) | (d[b + 2] << 16)) + (d[b + 3] << 23) * 2; };
// write bytes
var wbytes = function (d, b, v) {
    for (; v; ++b)
        d[b] = v, v >>>= 8;
};
// gzip header
var gzh = function (c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
    if (o.mtime != 0)
        wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
    if (fn) {
        c[3] = 8;
        for (var i = 0; i <= fn.length; ++i)
            c[i + 10] = fn.charCodeAt(i);
    }
};
// gzip footer: -8 to -4 = CRC, -4 to -0 is length
// gzip start
var gzs = function (d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8)
        throw 'invalid gzip data';
    var flg = d[3];
    var st = 10;
    if (flg & 4)
        st += d[10] | (d[11] << 8) + 2;
    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
        ;
    return st + (flg & 2);
};
// gzip length
var gzl = function (d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16) + (2 * (d[l - 1] << 23));
};
// gzip header length
var gzhl = function (o) { return 10 + ((o.filename && (o.filename.length + 1)) || 0); };
// zlib header
var zlh = function (c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);
};
// zlib valid
var zlv = function (d) {
    if ((d[0] & 15) != 8 || (d[0] >>> 4) > 7 || ((d[0] << 8 | d[1]) % 31))
        throw 'invalid zlib data';
    if (d[1] & 32)
        throw 'invalid zlib data: preset dictionaries not supported';
};
function AsyncCmpStrm(opts, cb) {
    if (!cb && typeof opts == 'function')
        cb = opts, opts = {};
    this.ondata = cb;
    return opts;
}
// zlib footer: -4 to -0 is Adler32
/**
 * Streaming DEFLATE compression
 */
var Deflate = /*#__PURE__*/ (function () {
    function Deflate(opts, cb) {
        if (!cb && typeof opts == 'function')
            cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
    }
    Deflate.prototype.p = function (c, f) {
        this.ondata(dopt(c, this.o, 0, 0, !f), f);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Deflate.prototype.push = function (chunk, final) {
        if (this.d)
            throw 'stream finished';
        if (!this.ondata)
            throw 'no stream handler';
        this.d = final;
        this.p(chunk, final || false);
    };
    return Deflate;
}());

/**
 * Asynchronous streaming DEFLATE compression
 */
var AsyncDeflate = /*#__PURE__*/ (function () {
    function AsyncDeflate(opts, cb) {
        astrmify([
            bDflt,
            function () { return [astrm, Deflate]; }
        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
            var strm = new Deflate(ev.data);
            onmessage = astrm(strm);
        }, 6);
    }
    return AsyncDeflate;
}());

function deflate(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bDflt,
    ], function (ev) { return pbf(deflateSync(ev.data[0], ev.data[1])); }, 0, cb);
}
/**
 * Compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param opts The compression options
 * @returns The deflated version of the data
 */
function deflateSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    return dopt(data, opts, 0, 0);
}
/**
 * Streaming DEFLATE decompression
 */
var Inflate = /*#__PURE__*/ (function () {
    /**
     * Creates an inflation stream
     * @param cb The callback to call whenever data is inflated
     */
    function Inflate(cb) {
        this.s = {};
        this.p = new u8(0);
        this.ondata = cb;
    }
    Inflate.prototype.e = function (c) {
        if (this.d)
            throw 'stream finished';
        if (!this.ondata)
            throw 'no stream handler';
        var l = this.p.length;
        var n = new u8(l + c.length);
        n.set(this.p), n.set(c, l), this.p = n;
    };
    Inflate.prototype.c = function (final) {
        this.d = this.s.i = final || false;
        var bts = this.s.b;
        var dt = inflt(this.p, this.o, this.s);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, (this.s.p / 8) >> 0), this.s.p &= 7;
    };
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the final chunk
     */
    Inflate.prototype.push = function (chunk, final) {
        this.e(chunk), this.c(final);
    };
    return Inflate;
}());

/**
 * Asynchronous streaming DEFLATE decompression
 */
var AsyncInflate = /*#__PURE__*/ (function () {
    /**
     * Creates an asynchronous inflation stream
     * @param cb The callback to call whenever data is deflated
     */
    function AsyncInflate(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            function () { return [astrm, Inflate]; }
        ], this, 0, function () {
            var strm = new Inflate();
            onmessage = astrm(strm);
        }, 7);
    }
    return AsyncInflate;
}());

function inflate(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bInflt
    ], function (ev) { return pbf(inflateSync(ev.data[0], gu8(ev.data[1]))); }, 1, cb);
}
/**
 * Expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function inflateSync(data, out) {
    return inflt(data, out);
}
// before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.
/**
 * Streaming GZIP compression
 */
var Gzip = /*#__PURE__*/ (function () {
    function Gzip(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Gzip.prototype.push = function (chunk, final) {
        Deflate.prototype.push.call(this, chunk, final);
    };
    Gzip.prototype.p = function (c, f) {
        this.c.p(c);
        this.l += c.length;
        var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);
        if (this.v)
            gzh(raw, this.o), this.v = 0;
        if (f)
            wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f);
    };
    return Gzip;
}());

/**
 * Asynchronous streaming GZIP compression
 */
var AsyncGzip = /*#__PURE__*/ (function () {
    function AsyncGzip(opts, cb) {
        astrmify([
            bDflt,
            gze,
            function () { return [astrm, Deflate, Gzip]; }
        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
            var strm = new Gzip(ev.data);
            onmessage = astrm(strm);
        }, 8);
    }
    return AsyncGzip;
}());

function gzip(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bDflt,
        gze,
        function () { return [gzipSync]; }
    ], function (ev) { return pbf(gzipSync(ev.data[0], ev.data[1])); }, 2, cb);
}
/**
 * Compresses data with GZIP
 * @param data The data to compress
 * @param opts The compression options
 * @returns The gzipped version of the data
 */
function gzipSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var c = crc(), l = data.length;
    c.p(data);
    var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
}
/**
 * Streaming GZIP decompression
 */
var Gunzip = /*#__PURE__*/ (function () {
    /**
     * Creates a GUNZIP stream
     * @param cb The callback to call whenever data is inflated
     */
    function Gunzip(cb) {
        this.v = 1;
        Inflate.call(this, cb);
    }
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Gunzip.prototype.push = function (chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            var s = gzs(this.p);
            if (s >= this.p.length && !final)
                return;
            this.p = this.p.subarray(s), this.v = 0;
        }
        if (final) {
            if (this.p.length < 8)
                throw 'invalid gzip stream';
            this.p = this.p.subarray(0, -8);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Gunzip;
}());

/**
 * Asynchronous streaming GZIP decompression
 */
var AsyncGunzip = /*#__PURE__*/ (function () {
    /**
     * Creates an asynchronous GUNZIP stream
     * @param cb The callback to call whenever data is deflated
     */
    function AsyncGunzip(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            guze,
            function () { return [astrm, Inflate, Gunzip]; }
        ], this, 0, function () {
            var strm = new Gunzip();
            onmessage = astrm(strm);
        }, 9);
    }
    return AsyncGunzip;
}());

function gunzip(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bInflt,
        guze,
        function () { return [gunzipSync]; }
    ], function (ev) { return pbf(gunzipSync(ev.data[0])); }, 3, cb);
}
/**
 * Expands GZIP data
 * @param data The data to decompress
 * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.
 * @returns The decompressed version of the data
 */
function gunzipSync(data, out) {
    return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
}
/**
 * Streaming Zlib compression
 */
var Zlib = /*#__PURE__*/ (function () {
    function Zlib(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be zlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Zlib.prototype.push = function (chunk, final) {
        Deflate.prototype.push.call(this, chunk, final);
    };
    Zlib.prototype.p = function (c, f) {
        this.c.p(c);
        var raw = dopt(c, this.o, this.v && 2, f && 4, !f);
        if (this.v)
            zlh(raw, this.o), this.v = 0;
        if (f)
            wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f);
    };
    return Zlib;
}());

/**
 * Asynchronous streaming Zlib compression
 */
var AsyncZlib = /*#__PURE__*/ (function () {
    function AsyncZlib(opts, cb) {
        astrmify([
            bDflt,
            zle,
            function () { return [astrm, Deflate, Zlib]; }
        ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
            var strm = new Zlib(ev.data);
            onmessage = astrm(strm);
        }, 10);
    }
    return AsyncZlib;
}());

function zlib(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bDflt,
        zle,
        function () { return [zlibSync]; }
    ], function (ev) { return pbf(zlibSync(ev.data[0], ev.data[1])); }, 4, cb);
}
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */
function zlibSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Streaming Zlib decompression
 */
var Unzlib = /*#__PURE__*/ (function () {
    /**
     * Creates a Zlib decompression stream
     * @param cb The callback to call whenever data is inflated
     */
    function Unzlib(cb) {
        this.v = 1;
        Inflate.call(this, cb);
    }
    /**
     * Pushes a chunk to be unzlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Unzlib.prototype.push = function (chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            if (this.p.length < 2 && !final)
                return;
            this.p = this.p.subarray(2), this.v = 0;
        }
        if (final) {
            if (this.p.length < 4)
                throw 'invalid zlib stream';
            this.p = this.p.subarray(0, -4);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Unzlib;
}());

/**
 * Asynchronous streaming Zlib decompression
 */
var AsyncUnzlib = /*#__PURE__*/ (function () {
    /**
     * Creates an asynchronous Zlib decompression stream
     * @param cb The callback to call whenever data is deflated
     */
    function AsyncUnzlib(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            zule,
            function () { return [astrm, Inflate, Unzlib]; }
        ], this, 0, function () {
            var strm = new Unzlib();
            onmessage = astrm(strm);
        }, 11);
    }
    return AsyncUnzlib;
}());

function unzlib(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return cbify(data, opts, [
        bInflt,
        zule,
        function () { return [unzlibSync]; }
    ], function (ev) { return pbf(unzlibSync(ev.data[0], gu8(ev.data[1]))); }, 5, cb);
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
}
// Default algorithm for compression (used because having a known output size allows faster decompression)

// Default algorithm for compression (used because having a known output size allows faster decompression)

/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */
var Decompress = /*#__PURE__*/ (function () {
    /**
     * Creates a decompression stream
     * @param cb The callback to call whenever data is decompressed
     */
    function Decompress(cb) {
        this.G = Gunzip;
        this.I = Inflate;
        this.Z = Unzlib;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    Decompress.prototype.push = function (chunk, final) {
        if (!this.ondata)
            throw 'no stream handler';
        if (!this.s) {
            if (this.p && this.p.length) {
                var n = new u8(this.p.length + chunk.length);
                n.set(this.p), n.set(chunk, this.p.length);
            }
            else
                this.p = chunk;
            if (this.p.length > 2) {
                var _this_1 = this;
                var cb = function () { _this_1.ondata.apply(_this_1, arguments); };
                this.s = (this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8)
                    ? new this.G(cb)
                    : ((this.p[0] & 15) != 8 || (this.p[0] >> 4) > 7 || ((this.p[0] << 8 | this.p[1]) % 31))
                        ? new this.I(cb)
                        : new this.Z(cb);
                this.s.push(this.p, final);
                this.p = null;
            }
        }
        else
            this.s.push(chunk, final);
    };
    return Decompress;
}());

/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */
var AsyncDecompress = /*#__PURE__*/ (function () {
    /**
   * Creates an asynchronous decompression stream
   * @param cb The callback to call whenever data is decompressed
   */
    function AsyncDecompress(cb) {
        this.G = AsyncGunzip;
        this.I = AsyncInflate;
        this.Z = AsyncUnzlib;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */
    AsyncDecompress.prototype.push = function (chunk, final) {
        Decompress.prototype.push.call(this, chunk, final);
    };
    return AsyncDecompress;
}());

function decompress(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    return (data[0] == 31 && data[1] == 139 && data[2] == 8)
        ? gunzip(data, opts, cb)
        : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))
            ? inflate(data, opts, cb)
            : unzlib(data, opts, cb);
}
/**
 * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function decompressSync(data, out) {
    return (data[0] == 31 && data[1] == 139 && data[2] == 8)
        ? gunzipSync(data, out)
        : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))
            ? inflateSync(data, out)
            : unzlibSync(data, out);
}
// flatten a directory structure
var fltn = function (d, p, t, o) {
    for (var k in d) {
        var val = d[k], n = p + k;
        if (val instanceof u8)
            t[n] = [val, o];
        else if (Array.isArray(val))
            t[n] = [val[0], mrg(o, val[1])];
        else
            fltn(val, n + '/', t, o);
    }
};
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
function strToU8(str, latin1) {
    var l = str.length;
    if (!latin1 && typeof TextEncoder != 'undefined')
        return new TextEncoder().encode(str);
    var ar = new u8(str.length + (str.length >>> 1));
    var ai = 0;
    var w = function (v) { ar[ai++] = v; };
    for (var i = 0; i < l; ++i) {
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + ((l - i) << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1)
            w(c);
        else if (c < 2048)
            w(192 | (c >>> 6)), w(128 | (c & 63));
        else if (c > 55295 && c < 57344)
            c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                w(240 | (c >>> 18)), w(128 | ((c >>> 12) & 63)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
        else
            w(224 | (c >>> 12)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
    }
    return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */
function strFromU8(dat, latin1) {
    var r = '';
    if (!latin1 && typeof TextDecoder != 'undefined')
        return new TextDecoder().decode(dat);
    for (var i = 0; i < dat.length;) {
        var c = dat[i++];
        if (c < 128 || latin1)
            r += String.fromCharCode(c);
        else if (c < 224)
            r += String.fromCharCode((c & 31) << 6 | (dat[i++] & 63));
        else if (c < 240)
            r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63));
        else
            c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63)) - 65536,
                r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
    }
    return r;
}
;
// skip local zip header
var slzh = function (d, b) { return b + 30 + b2(d, b + 26) + b2(d, b + 28); };
// read zip header
var zh = function (d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
    var _a = z ? z64e(d, es) : [b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)], sc = _a[0], su = _a[1], off = _a[2];
    return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
};
// read zip64 extra field
var z64e = function (d, b) {
    for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
        ;
    return [b4(d, b + 12), b4(d, b + 4), b4(d, b + 20)];
};
// write zip header
var wzh = function (d, b, c, cmp, su, fn, u, o, ce, t) {
    var fl = fn.length, l = cmp.length;
    wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;
    if (ce != null)
        d[b] = 20, b += 2;
    d[b] = 20, b += 2; // spec compliance? what's that?
    d[b++] = (t == 8 && (o.level == 1 ? 6 : o.level < 6 ? 4 : o.level == 9 ? 2 : 0)), d[b++] = u && 8;
    d[b] = t, b += 2;
    var dt = new Date(o.mtime || Date.now()), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119)
        throw 'date not in range 1980-2099';
    wbytes(d, b, ((y << 24) * 2) | ((dt.getMonth() + 1) << 21) | (dt.getDate() << 16) | (dt.getHours() << 11) | (dt.getMinutes() << 5) | (dt.getSeconds() >>> 1));
    b += 4;
    wbytes(d, b, c);
    wbytes(d, b + 4, l);
    wbytes(d, b + 8, su);
    wbytes(d, b + 12, fl), b += 16; // skip extra field, comment
    if (ce != null)
        wbytes(d, b += 10, ce), b += 4;
    d.set(fn, b);
    b += fl;
    if (ce == null)
        d.set(cmp, b);
};
// write zip footer (end of central directory)
var wzf = function (o, b, c, d, e) {
    wbytes(o, b, 0x6054B50); // skip disk
    wbytes(o, b + 8, c);
    wbytes(o, b + 10, c);
    wbytes(o, b + 12, d);
    wbytes(o, b + 16, e);
};
function zip(data, opts, cb) {
    if (!cb)
        cb = opts, opts = {};
    if (typeof cb != 'function')
        throw 'no callback';
    var r = {};
    fltn(data, '', r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function () {
        for (var i = 0; i < term.length; ++i)
            term[i]();
    };
    var cbf = function () {
        var out = new u8(tot + 22), oe = o, cdl = tot - o;
        tot = 0;
        for (var i = 0; i < slft; ++i) {
            var f = files[i];
            try {
                wzh(out, tot, f.c, f.d, f.m, f.n, f.u, f.p, null, f.t);
                wzh(out, o, f.c, f.d, f.m, f.n, f.u, f.p, tot, f.t), o += 46 + f.n.length, tot += 30 + f.n.length + f.d.length;
            }
            catch (e) {
                return cb(e, null);
            }
        }
        wzf(out, o, files.length, cdl, oe);
        cb(null, out);
    };
    if (!lft)
        cbf();
    var _loop_1 = function (i) {
        var fn = k[i];
        var _a = r[fn], file = _a[0], p = _a[1];
        var c = crc(), m = file.length;
        c.p(file);
        var n = strToU8(fn), s = n.length;
        var t = p.level == 0 ? 0 : 8;
        var cbl = function (e, d) {
            if (e) {
                tAll();
                cb(e, null);
            }
            else {
                var l = d.length;
                files[i] = {
                    t: t,
                    d: d,
                    m: m,
                    c: c.d(),
                    u: fn.length != l,
                    n: n,
                    p: p
                };
                o += 30 + s + l;
                tot += 76 + 2 * s + l;
                if (!--lft)
                    cbf();
            }
        };
        if (n.length > 65535)
            cbl('filename too long', null);
        if (!t)
            cbl(null, file);
        else if (m < 160000) {
            try {
                cbl(null, deflateSync(file, p));
            }
            catch (e) {
                cbl(e, null);
            }
        }
        else
            term.push(deflate(file, p, cbl));
    };
    // Cannot use lft because it can decrease
    for (var i = 0; i < slft; ++i) {
        _loop_1(i);
    }
    return tAll;
}
/**
 * Synchronously creates a ZIP file. Prefer using `zip` for better performance
 * with more than one file.
 * @param data The directory structure for the ZIP archive
 * @param opts The main options, merged with per-file options
 * @returns The generated ZIP archive
 */
function zipSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var r = {};
    var files = [];
    fltn(data, '', r, opts);
    var o = 0;
    var tot = 0;
    for (var fn in r) {
        var _a = r[fn], file = _a[0], p = _a[1];
        var t = p.level == 0 ? 0 : 8;
        var n = strToU8(fn), s = n.length;
        if (n.length > 65535)
            throw 'filename too long';
        var d = t ? deflateSync(file, p) : file, l = d.length;
        var c = crc();
        c.p(file);
        files.push({
            t: t,
            d: d,
            m: file.length,
            c: c.d(),
            u: fn.length != s,
            n: n,
            o: o,
            p: p
        });
        o += 30 + s + l;
        tot += 76 + 2 * s + l;
    }
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    for (var i = 0; i < files.length; ++i) {
        var f = files[i];
        wzh(out, f.o, f.c, f.d, f.m, f.n, f.u, f.p, null, f.t);
        wzh(out, o, f.c, f.d, f.m, f.n, f.u, f.p, f.o, f.t), o += 46 + f.n.length;
    }
    wzf(out, o, files.length, cdl, oe);
    return out;
}
/**
 * Asynchronously decompresses a ZIP archive
 * @param data The raw compressed ZIP file
 * @param cb The callback to call with the decompressed files
 * @returns A function that can be used to immediately terminate the unzipping
 */
function unzip(data, cb) {
    if (typeof cb != 'function')
        throw 'no callback';
    var term = [];
    var tAll = function () {
        for (var i = 0; i < term.length; ++i)
            term[i]();
    };
    var files = {};
    var e = data.length - 22;
    for (; b4(data, e) != 0x6054B50; --e) {
        if (!e || data.length - e > 65558) {
            cb('invalid zip file', null);
            return;
        }
    }
    ;
    var lft = b2(data, e + 8);
    if (!lft)
        cb(null, {});
    var c = lft;
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 0x6064B50)
            throw 'invalid zip file';
        c = lft = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    var _loop_2 = function (i) {
        var _a = zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        var cbl = function (e, d) {
            if (e) {
                tAll();
                cb(e, null);
            }
            else {
                files[fn] = d;
                if (!--lft)
                    cb(null, files);
            }
        };
        if (!c_1)
            cbl(null, slc(data, b, b + sc));
        else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (sc < 320000) {
                try {
                    cbl(null, inflateSync(infl, new u8(su)));
                }
                catch (e) {
                    cbl(e, null);
                }
            }
            else
                term.push(inflate(infl, { size: su }, cbl));
        }
        else
            cbl('unknown compression type ' + c_1, null);
    };
    for (var i = 0; i < c; ++i) {
        _loop_2(i);
    }
    return tAll;
}
/**
 * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
 * performance with more than one file.
 * @param data The raw compressed ZIP file
 * @returns The decompressed files
 */
function unzipSync(data) {
    var files = {};
    var e = data.length - 22;
    for (; b4(data, e) != 0x6054B50; --e) {
        if (!e || data.length - e > 65558)
            throw 'invalid zip file';
    }
    ;
    var c = b2(data, e + 8);
    if (!c)
        return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 0x6064B50)
            throw 'invalid zip file';
        c = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    for (var i = 0; i < c; ++i) {
        var _a = zh(data, o, z), c_2 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        if (!c_2)
            files[fn] = slc(data, b, b + sc);
        else if (c_2 == 8)
            files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));
        else
            throw 'unknown compression type ' + c_2;
    }
    return files;
}


/***/ }),

/***/ "e219":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("6053");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "e2cd":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("e219");
var isCallable = __webpack_require__("5e8c");
var classofRaw = __webpack_require__("424c");
var wellKnownSymbol = __webpack_require__("6053");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "e3ca":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("6632");
var isObject = __webpack_require__("feb8");
var isSymbol = __webpack_require__("fd50");
var getMethod = __webpack_require__("4eb4");
var ordinaryToPrimitive = __webpack_require__("9eda");
var wellKnownSymbol = __webpack_require__("6053");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "e911":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/classic4.087902fc.jpg";

/***/ }),

/***/ "ec82":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "ed00":
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__("14cc");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "ef7a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("6e16").f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "f1a2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1a89");
var isCallable = __webpack_require__("5e8c");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "f260":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/minions.c2a93f9e.jpg";

/***/ }),

/***/ "f2fc":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("1a89");

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "f770":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("8d5c");
var definePropertyModule = __webpack_require__("6e16");
var createPropertyDescriptor = __webpack_require__("0259");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "f8ac":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("3475");
var global = __webpack_require__("1a89");
var apply = __webpack_require__("6ba1");
var wrapErrorConstructorWithCause = __webpack_require__("361f");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ../simple-mind-map/src/View.js
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-07 14:45:24 
 * @Desc: 视图操作类 
 */
class View {
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 14:45:40 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    this.opt = opt;
    this.mindMap = this.opt.mindMap;
    this.scale = 1;
    this.sx = 0;
    this.sy = 0;
    this.x = 0;
    this.y = 0;
    this.firstDrag = true;
    this.setTransformData(this.mindMap.opt.viewData);
    this.bind();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 15:38:51 
   * @Desc: 绑定 
   */


  bind() {
    // 快捷键
    this.mindMap.keyCommand.addShortcut('Control+=', () => {
      this.enlarge();
    });
    this.mindMap.keyCommand.addShortcut('Control+-', () => {
      this.narrow();
    });
    this.mindMap.keyCommand.addShortcut('Control+Enter', () => {
      this.reset();
    });
    this.mindMap.svg.on('dblclick', () => {
      this.reset();
    }); // 拖动视图

    this.mindMap.event.on('mousedown', () => {
      this.sx = this.x;
      this.sy = this.y;
    });
    this.mindMap.event.on('drag', (e, event) => {
      if (e.ctrlKey) {
        // 按住ctrl键拖动为多选
        return;
      }

      if (this.firstDrag) {
        this.firstDrag = false; // 清除激活节点

        this.mindMap.execCommand('CLEAR_ACTIVE_NODE');
      }

      this.x = this.sx + event.mousemoveOffset.x;
      this.y = this.sy + event.mousemoveOffset.y;
      this.transform();
    });
    this.mindMap.event.on('mouseup', () => {
      this.firstDrag = true;
    }); // 放大缩小视图

    this.mindMap.event.on('mousewheel', (e, dir) => {
      // // 放大
      if (dir === 'down') {
        this.enlarge();
      } else {
        // 缩小
        this.narrow();
      }
    });
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-22 18:30:24 
   * @Desc: 获取当前变换状态数据 
   */


  getTransformData() {
    return {
      transform: this.mindMap.draw.transform(),
      state: {
        scale: this.scale,
        x: this.x,
        y: this.y,
        sx: this.sx,
        sy: this.sy
      }
    };
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-22 19:54:17 
   * @Desc: 动态设置变换状态数据 
   */


  setTransformData(viewData) {
    if (viewData) {
      Object.keys(viewData.state).forEach(prop => {
        this[prop] = viewData.state[prop];
      });
      this.mindMap.draw.transform({ ...viewData.transform
      });
      this.mindMap.emit('view_data_change', this.getTransformData());
      this.mindMap.emit('scale', this.scale);
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-13 15:49:06 
   * @Desc: 平移x方向 
   */


  translateX(step) {
    this.x += step;
    this.transform();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-13 15:48:52 
   * @Desc: 平移y方向 
   */


  translateY(step) {
    this.y += step;
    this.transform();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 17:13:14 
   * @Desc:  应用变换
   */


  transform() {
    this.mindMap.draw.transform({
      scale: this.scale,
      // origin: 'center center',
      translate: [this.x, this.y]
    });
    this.mindMap.emit('view_data_change', this.getTransformData());
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 17:41:35 
   * @Desc: 恢复
   */


  reset() {
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.transform();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 17:10:34 
   * @Desc: 缩小 
   */


  narrow() {
    if (this.scale - this.mindMap.opt.scaleRatio > 0.1) {
      this.scale -= this.mindMap.opt.scaleRatio;
    } else {
      this.scale = 0.1;
    }

    this.transform();
    this.mindMap.emit('scale', this.scale);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 17:10:41 
   * @Desc: 放大 
   */


  enlarge() {
    this.scale += this.mindMap.opt.scaleRatio;
    this.transform();
    this.mindMap.emit('scale', this.scale);
  }

}

/* harmony default export */ var src_View = (View);
// EXTERNAL MODULE: ../simple-mind-map/node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__("91d2");
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);

// CONCATENATED MODULE: ../simple-mind-map/src/Event.js

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-07 14:53:09 
 * @Desc: 事件类 
 */

class Event_Event extends eventemitter3_default.a {
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 14:53:25 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    super();
    this.opt = opt;
    this.mindMap = opt.mindMap;
    this.isLeftMousedown = false;
    this.mousedownPos = {
      x: 0,
      y: 0
    };
    this.mousemovePos = {
      x: 0,
      y: 0
    };
    this.mousemoveOffset = {
      x: 0,
      y: 0
    };
    this.bindFn();
    this.bind();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 15:52:24 
   * @Desc: 绑定函数上下文 
   */


  bindFn() {
    this.onDrawClick = this.onDrawClick.bind(this);
    this.onMousedown = this.onMousedown.bind(this);
    this.onMousemove = this.onMousemove.bind(this);
    this.onMouseup = this.onMouseup.bind(this);
    this.onMousewheel = this.onMousewheel.bind(this);
    this.onContextmenu = this.onContextmenu.bind(this);
    this.onSvgMousedown = this.onSvgMousedown.bind(this);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 14:53:43 
   * @Desc: 绑定事件 
   */


  bind() {
    this.mindMap.svg.on('click', this.onDrawClick);
    this.mindMap.el.addEventListener('mousedown', this.onMousedown);
    this.mindMap.svg.on('mousedown', this.onSvgMousedown);
    window.addEventListener('mousemove', this.onMousemove);
    window.addEventListener('mouseup', this.onMouseup); // 兼容火狐浏览器

    if (window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
      this.mindMap.el.addEventListener('DOMMouseScroll', this.onMousewheel);
    } else {
      this.mindMap.el.addEventListener('mousewheel', this.onMousewheel);
    }

    this.mindMap.svg.on('contextmenu', this.onContextmenu);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 15:40:51 
   * @Desc: 解绑事件 
   */


  unbind() {
    this.mindMap.svg.off('click', this.onDrawClick);
    this.mindMap.el.removeEventListener('mousedown', this.onMousedown);
    window.removeEventListener('mousemove', this.onMousemove);
    window.removeEventListener('mouseup', this.onMouseup);
    this.mindMap.el.removeEventListener('mousewheel', this.onMousewheel);
    this.mindMap.svg.off('contextmenu', this.onContextmenu);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 13:19:39 
   * @Desc:  画布的单击事件
   */


  onDrawClick(e) {
    this.emit('draw_click', e);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-16 13:37:30 
   * @Desc:  svg画布的鼠标按下事件
   */


  onSvgMousedown(e) {
    this.emit('svg_mousedown', e);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 15:17:35 
   * @Desc: 鼠标按下事件 
   */


  onMousedown(e) {
    // e.preventDefault()
    // 鼠标左键
    if (e.which === 1) {
      this.isLeftMousedown = true;
    }

    this.mousedownPos.x = e.clientX;
    this.mousedownPos.y = e.clientY;
    this.emit('mousedown', e, this);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 15:18:32 
   * @Desc: 鼠标移动事件 
   */


  onMousemove(e) {
    // e.preventDefault()
    this.mousemovePos.x = e.clientX;
    this.mousemovePos.y = e.clientY;
    this.mousemoveOffset.x = e.clientX - this.mousedownPos.x;
    this.mousemoveOffset.y = e.clientY - this.mousedownPos.y;
    this.emit('mousemove', e, this);

    if (this.isLeftMousedown) {
      this.emit('drag', e, this);
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 15:18:57 
   * @Desc: 鼠标松开事件 
   */


  onMouseup(e) {
    this.isLeftMousedown = false;
    this.emit('mouseup', e, this);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 15:46:27 
   * @Desc: 鼠标滚动 
   */


  onMousewheel(e) {
    e.stopPropagation();
    e.preventDefault();
    let dir;

    if ((e.wheelDeltaY || e.detail) > 0) {
      dir = 'up';
    } else {
      dir = 'down';
    }

    this.emit('mousewheel', e, dir, this);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 22:34:13 
   * @Desc: 鼠标右键菜单事件 
   */


  onContextmenu(e) {
    e.preventDefault();
    this.emit('contextmenu', e);
  }

}

/* harmony default export */ var src_Event = (Event_Event);
// EXTERNAL MODULE: ../simple-mind-map/node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__("682c");
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ../simple-mind-map/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("293c");

// EXTERNAL MODULE: ../simple-mind-map/node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("f8ac");

// CONCATENATED MODULE: ../simple-mind-map/src/utils/constant.js
/** 
 * @Author: 王林 
 * @Date: 2021-06-24 21:42:07 
 * @Desc: 标签颜色列表 
 */
const tagColorList = [{
  color: 'rgb(77, 65, 0)',
  background: 'rgb(255, 244, 179)'
}, {
  color: 'rgb(0, 50, 77)',
  background: 'rgb(179, 229, 255)'
}, {
  color: 'rgb(77, 0, 73)',
  background: 'rgb(255, 179, 251)'
}, {
  color: 'rgb(57, 77, 0)',
  background: 'rgb(236, 255, 179)'
}, {
  color: 'rgb(0, 77, 47)',
  background: 'rgb(179, 255, 226)'
}];
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-07-13 15:56:28 
 * @Desc: 布局结构列表 
 */

const layoutList = [{
  name: '逻辑结构图',
  value: 'logicalStructure',
  img: __webpack_require__("0930")
}, {
  name: '思维导图',
  value: 'mindMap',
  img: __webpack_require__("9910")
}, {
  name: '组织结构图',
  value: 'organizationStructure',
  img: __webpack_require__("6967")
}, {
  name: '目录组织图',
  value: 'catalogOrganization',
  img: __webpack_require__("ac18")
}];
const layoutValueList = ['logicalStructure', 'mindMap', 'catalogOrganization', 'organizationStructure'];
/** 
 * @Author: 王林 
 * @Date: 2021-06-24 22:58:42 
 * @Desc: 主题列表 
 */

const themeList = [{
  name: '默认',
  value: 'default',
  img: __webpack_require__("3556")
}, {
  name: '脑图经典',
  value: 'classic',
  img: __webpack_require__("8617")
}, {
  name: '小黄人',
  value: 'minions',
  img: __webpack_require__("f260")
}, {
  name: '粉红葡萄',
  value: 'pinkGrape',
  img: __webpack_require__("b2e8")
}, {
  name: '薄荷',
  value: 'mint',
  img: __webpack_require__("db73")
}, {
  name: '金色vip',
  value: 'gold',
  img: __webpack_require__("6ef5")
}, {
  name: '活力橙',
  value: 'vitalityOrange',
  img: __webpack_require__("08be")
}, {
  name: '绿叶',
  value: 'greenLeaf',
  img: __webpack_require__("72ed")
}, {
  name: '暗色2',
  value: 'dark2',
  img: __webpack_require__("42c9")
}, {
  name: '天清绿',
  value: 'skyGreen',
  img: __webpack_require__("7f82")
}, {
  name: '脑图经典2',
  value: 'classic2',
  img: __webpack_require__("a3a6")
}, {
  name: '脑图经典3',
  value: 'classic3',
  img: __webpack_require__("c0d2")
}, {
  name: '脑图经典4',
  value: 'classic4',
  img: __webpack_require__("e911")
}, {
  name: '经典绿',
  value: 'classicGreen',
  img: __webpack_require__("43f9")
}, {
  name: '经典蓝',
  value: 'classicBlue',
  img: __webpack_require__("0d2c")
}, {
  name: '天空蓝',
  value: 'blueSky',
  img: __webpack_require__("b533")
}, {
  name: '脑残粉',
  value: 'brainImpairedPink',
  img: __webpack_require__("074d")
}, {
  name: '暗色',
  value: 'dark',
  img: __webpack_require__("181c")
}, {
  name: '泥土黄',
  value: 'earthYellow',
  img: __webpack_require__("1a34")
}, {
  name: '清新绿',
  value: 'freshGreen',
  img: __webpack_require__("7dda")
}, {
  name: '清新红',
  value: 'freshRed',
  img: __webpack_require__("ca62")
}, {
  name: '浪漫紫',
  value: 'romanticPurple',
  img: __webpack_require__("c612")
}];
// CONCATENATED MODULE: ../simple-mind-map/src/Style.js

const rootProp = ['paddingX', 'paddingY'];
/** 
 * @Author: 王林 
 * @Date: 2021-04-11 10:09:08 
 * @Desc: 样式类 
 */

class Style_Style {
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 16:01:53 
   * @Desc:  设置背景样式
   */
  static setBackgroundStyle(el, themeConfig) {
    let {
      backgroundColor,
      backgroundImage,
      backgroundRepeat
    } = themeConfig;
    el.style.backgroundColor = backgroundColor;

    if (backgroundImage) {
      el.style.backgroundImage = `url(${backgroundImage})`;
      el.style.backgroundRepeat = backgroundRepeat;
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 10:10:11 
   * @Desc: 构造函数 
   */


  constructor(ctx, themeConfig) {
    this.ctx = ctx;
    this.themeConfig = themeConfig;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-12 07:40:14 
   * @Desc: 更新主题配置 
   */


  updateThemeConfig(themeConfig) {
    this.themeConfig = themeConfig;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 12:02:55 
   * @Desc: 合并样式 
   */


  merge(prop, root, isActive) {
    // 三级及以下节点
    let defaultConfig = this.themeConfig.node;

    if (root || rootProp.includes(prop)) {
      // 直接使用最外层样式
      defaultConfig = this.themeConfig;
    } else if (this.ctx.isGeneralization) {
      // 概要节点
      defaultConfig = this.themeConfig.generalization;
    } else if (this.ctx.layerIndex === 0) {
      // 根节点
      defaultConfig = this.themeConfig.root;
    } else if (this.ctx.layerIndex === 1) {
      // 二级节点
      defaultConfig = this.themeConfig.second;
    } // 激活状态


    if (isActive !== undefined ? isActive : this.ctx.nodeData.data.isActive) {
      if (this.ctx.nodeData.data.activeStyle && this.ctx.nodeData.data.activeStyle[prop] !== undefined) {
        return this.ctx.nodeData.data.activeStyle[prop];
      } else if (defaultConfig.active && defaultConfig.active[prop]) {
        return defaultConfig.active[prop];
      }
    } // 优先使用节点本身的样式


    return this.getSelfStyle(prop) !== undefined ? this.getSelfStyle(prop) : defaultConfig[prop];
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 21:55:57 
   * @Desc: 获取某个样式值 
   */


  getStyle(prop, root, isActive) {
    return this.merge(prop, root, isActive);
  }
  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2022-09-17 12:09:39 
   * @Desc: 获取自身自定义样式 
   */


  getSelfStyle(prop) {
    return this.ctx.nodeData.data[prop];
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 10:12:56 
   * @Desc: 矩形 
   */


  rect(node) {
    this.shape(node);
    node.radius(this.merge('borderRadius'));
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 15:04:28 
   * @Desc:  矩形外的其他形状 
   */


  shape(node) {
    node.fill({
      color: this.merge('fillColor')
    }).stroke({
      color: this.merge('borderColor'),
      width: this.merge('borderWidth'),
      dasharray: this.merge('borderDasharray')
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 12:07:59 
   * @Desc: 文字 
   */


  text(node) {
    node.fill({
      color: this.merge('color')
    }).css({
      'font-family': this.merge('fontFamily'),
      'font-size': this.merge('fontSize'),
      'font-weight': this.merge('fontWeight'),
      'font-style': this.merge('fontStyle'),
      'text-decoration': this.merge('textDecoration')
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-13 08:14:34 
   * @Desc: html文字节点 
   */


  domText(node, fontSizeScale = 1) {
    node.style.fontFamily = this.merge('fontFamily');
    node.style.fontSize = this.merge('fontSize') * fontSizeScale + 'px';
    node.style.fontWeight = this.merge('fontWeight') || 'normal';
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-20 20:02:18 
   * @Desc: 标签文字 
   */


  tagText(node, index) {
    node.fill({
      color: tagColorList[index].color
    }).css({
      'font-size': '12px'
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-20 21:04:11 
   * @Desc: 标签矩形 
   */


  tagRect(node, index) {
    node.fill({
      color: tagColorList[index].background
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-03 22:37:19 
   * @Desc: 内置图标 
   */


  iconNode(node) {
    node.attr({
      fill: this.merge('color')
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 14:50:49 
   * @Desc: 连线 
   */


  line(node, {
    width,
    color,
    dasharray
  } = {}) {
    node.stroke({
      width,
      color,
      dasharray
    }).fill({
      color: 'none'
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 16:19:03 
   * @Desc: 概要连线 
   */


  generalizationLine(node) {
    node.stroke({
      width: this.merge('generalizationLineWidth', true),
      color: this.merge('generalizationLineColor', true)
    }).fill({
      color: 'none'
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 20:03:59 
   * @Desc: 按钮 
   */


  iconBtn(node, fillNode) {
    node.fill({
      color: '#808080'
    });
    fillNode.fill({
      color: '#fff'
    });
  }

}

/* harmony default export */ var src_Style = (Style_Style);
// CONCATENATED MODULE: ../simple-mind-map/src/Shape.js
/** 
 * @Author: 王林 
 * @Date: 2022-08-22 21:32:50 
 * @Desc: 节点形状类 
 */
class Shape {
  constructor(node) {
    this.node = node;
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-08-17 22:32:32 
   * @Desc: 形状需要的padding 
   */


  getShapePadding(width, height, paddingX, paddingY) {
    const shape = this.node.getShape();
    const defaultPaddingX = 15;
    const defaultPaddingY = 5;
    const actWidth = width + paddingX * 2;
    const actHeight = height + paddingY * 2;
    const actOffset = Math.abs(actWidth - actHeight);

    switch (shape) {
      case 'roundedRectangle':
        return {
          paddingX: height > width ? (height - width) / 2 : 0,
          paddingY: 0
        };

      case 'diamond':
        return {
          paddingX: width / 2,
          paddingY: height / 2
        };

      case 'parallelogram':
        return {
          paddingX: paddingX <= 0 ? defaultPaddingX : 0,
          paddingY: 0
        };

      case 'outerTriangularRectangle':
        return {
          paddingX: paddingX <= 0 ? defaultPaddingX : 0,
          paddingY: 0
        };

      case 'innerTriangularRectangle':
        return {
          paddingX: paddingX <= 0 ? defaultPaddingX : 0,
          paddingY: 0
        };

      case 'ellipse':
        return {
          paddingX: paddingX <= 0 ? defaultPaddingX : 0,
          paddingY: paddingY <= 0 ? defaultPaddingY : 0
        };

      case 'circle':
        return {
          paddingX: actHeight > actWidth ? actOffset / 2 : 0,
          paddingY: actHeight < actWidth ? actOffset / 2 : 0
        };

      default:
        return {
          paddingX: 0,
          paddingY: 0
        };
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-08-17 22:22:53 
   * @Desc: 创建形状节点 
   */


  createShape() {
    const shape = this.node.getShape();
    let {
      width,
      height
    } = this.node;
    let node = null; // 矩形

    if (shape === 'rectangle') {
      node = this.node.group.rect(width, height);
    } else if (shape === 'diamond') {
      // 菱形
      node = this.createDiamond();
    } else if (shape === 'parallelogram') {
      // 平行四边形
      node = this.createParallelogram();
    } else if (shape === 'roundedRectangle') {
      // 圆角矩形
      node = this.createRoundedRectangle();
    } else if (shape === 'octagonalRectangle') {
      // 八角矩形
      node = this.createOctagonalRectangle();
    } else if (shape === 'outerTriangularRectangle') {
      // 外三角矩形
      node = this.createOuterTriangularRectangle();
    } else if (shape === 'innerTriangularRectangle') {
      // 内三角矩形
      node = this.createInnerTriangularRectangle();
    } else if (shape === 'ellipse') {
      // 椭圆
      node = this.createEllipse();
    } else if (shape === 'circle') {
      // 圆
      node = this.createCircle();
    }

    return node;
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-09-04 09:08:54 
   * @Desc: 创建菱形 
   */


  createDiamond() {
    let {
      width,
      height
    } = this.node;
    let halfWidth = width / 2;
    let halfHeight = height / 2;
    let topX = halfWidth;
    let topY = 0;
    let rightX = width;
    let rightY = halfHeight;
    let bottomX = halfWidth;
    let bottomY = height;
    let leftX = 0;
    let leftY = halfHeight;
    return this.node.group.polygon(`
            ${topX}, ${topY}
            ${rightX}, ${rightY}
            ${bottomX}, ${bottomY}
            ${leftX}, ${leftY}
        `);
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-09-03 16:14:12 
   * @Desc: 创建平行四边形 
   */


  createParallelogram() {
    let {
      paddingX
    } = this.node.getPaddingVale();
    paddingX = paddingX || this.node.shapePadding.paddingX;
    let {
      width,
      height
    } = this.node;
    return this.node.group.polygon(`
            ${paddingX}, ${0}
            ${width}, ${0}
            ${width - paddingX}, ${height}
            ${0}, ${height}
        `);
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-09-03 16:50:23 
   * @Desc: 创建圆角矩形 
   */


  createRoundedRectangle() {
    let {
      width,
      height
    } = this.node;
    let halfHeight = height / 2;
    return this.node.group.path(`
            M${halfHeight},0
            L${width - halfHeight},0
            A${height / 2},${height / 2} 0 0,1 ${width - halfHeight},${height} 
            L${halfHeight},${height}
            A${height / 2},${height / 2} 0 0,1 ${halfHeight},${0}
        `);
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 16:14:08 
   * @Desc: 创建八角矩形 
   */


  createOctagonalRectangle() {
    let w = 5;
    let {
      width,
      height
    } = this.node;
    return this.node.group.polygon(`
            ${0}, ${w}
            ${w}, ${0}
            ${width - w}, ${0}
            ${width}, ${w}
            ${width}, ${height - w}
            ${width - w}, ${height}
            ${w}, ${height}
            ${0}, ${height - w}
        `);
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 20:55:50 
   * @Desc: 创建外三角矩形 
   */


  createOuterTriangularRectangle() {
    let {
      paddingX
    } = this.node.getPaddingVale();
    paddingX = paddingX || this.node.shapePadding.paddingX;
    let {
      width,
      height
    } = this.node;
    return this.node.group.polygon(`
            ${paddingX}, ${0}
            ${width - paddingX}, ${0}
            ${width}, ${height / 2}
            ${width - paddingX}, ${height}
            ${paddingX}, ${height}
            ${0}, ${height / 2}
        `);
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 20:59:37 
   * @Desc: 创建内三角矩形 
   */


  createInnerTriangularRectangle() {
    let {
      paddingX
    } = this.node.getPaddingVale();
    paddingX = paddingX || this.node.shapePadding.paddingX;
    let {
      width,
      height
    } = this.node;
    return this.node.group.polygon(`
            ${0}, ${0}
            ${width}, ${0}
            ${width - paddingX / 2}, ${height / 2}
            ${width}, ${height}
            ${0}, ${height}
            ${paddingX / 2}, ${height / 2}
        `);
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 21:06:31 
   * @Desc: 创建椭圆 
   */


  createEllipse() {
    let {
      width,
      height
    } = this.node;
    let halfWidth = width / 2;
    let halfHeight = height / 2;
    return this.node.group.path(`
            M${halfWidth},0
            A${halfWidth},${halfHeight} 0 0,1 ${halfWidth},${height} 
            M${halfWidth},${height} 
            A${halfWidth},${halfHeight} 0 0,1 ${halfWidth},${0} 
        `);
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 21:14:04 
   * @Desc: 创建圆 
   */


  createCircle() {
    let {
      width,
      height
    } = this.node;
    let halfWidth = width / 2;
    let halfHeight = height / 2;
    return this.node.group.path(`
            M${halfWidth},0
            A${halfWidth},${halfHeight} 0 0,1 ${halfWidth},${height} 
            M${halfWidth},${height} 
            A${halfWidth},${halfHeight} 0 0,1 ${halfWidth},${0} 
        `);
  }

} // 形状列表

const shapeList = ['rectangle', 'diamond', 'parallelogram', 'roundedRectangle', 'octagonalRectangle', 'outerTriangularRectangle', 'innerTriangularRectangle', 'ellipse', 'circle'];
// CONCATENATED MODULE: ../simple-mind-map/src/utils/index.js
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-06 14:13:17 
 * @Desc: 深度优先遍历树 
 */
const walk = (root, parent, beforeCallback, afterCallback, isRoot, layerIndex = 0, index = 0) => {
  let stop = false;

  if (beforeCallback) {
    stop = beforeCallback(root, parent, isRoot, layerIndex, index);
  }

  if (!stop && root.children && root.children.length > 0) {
    let _layerIndex = layerIndex + 1;

    root.children.forEach((node, nodeIndex) => {
      walk(node, root, beforeCallback, afterCallback, false, _layerIndex, nodeIndex);
    });
  }

  afterCallback && afterCallback(root, parent, isRoot, layerIndex, index);
};
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-07 18:47:20 
 * @Desc: 广度优先遍历树 
 */

const bfsWalk = (root, callback) => {
  callback(root);
  let stack = [root];
  let isStop = false;

  while (stack.length) {
    if (isStop) {
      break;
    }

    let cur = stack.shift();

    if (cur.children && cur.children.length) {
      cur.children.forEach(item => {
        stack.push(item);

        if (callback(item) === 'stop') {
          isStop = true;
        }
      });
    }
  }
};
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-09 10:44:54 
 * @Desc: 缩放图片尺寸 
 */

const resizeImgSize = (width, height, maxWidth, maxHeight) => {
  let nRatio = width / height;
  let arr = [];

  if (maxWidth && maxHeight) {
    if (width <= maxWidth && height <= maxHeight) {
      arr = [width, height];
    } else {
      let mRatio = maxWidth / maxHeight;

      if (nRatio > mRatio) {
        // 固定高度
        arr = [nRatio * maxHeight, maxHeight];
      } else {
        // 固定宽度
        arr = [maxWidth, maxWidth / nRatio];
      }
    }
  } else if (maxWidth) {
    if (width <= maxWidth) {
      arr = [width, height];
    } else {
      arr = [maxWidth, maxWidth / nRatio];
    }
  } else if (maxHeight) {
    if (height <= maxHeight) {
      arr = [width, height];
    } else {
      arr = [nRatio * maxHeight, maxHeight];
    }
  }

  return arr;
};
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-09 10:18:42 
 * @Desc: 缩放图片 
 */

const resizeImg = (imgUrl, maxWidth, maxHeight) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = imgUrl;

    img.onload = () => {
      let arr = resizeImgSize(img.naturalWidth, img.naturalHeight, maxWidth, maxHeight);
      resolve(arr);
    };

    img.onerror = e => {
      reject(e);
    };
  });
};
/** 
 * @Author: 王林 
 * @Date: 2021-05-04 12:26:56 
 * @Desc: 从头html结构字符串里获取带换行符的字符串 
 */

const getStrWithBrFromHtml = str => {
  str = str.replace(/<br>/img, '\n');
  let el = document.createElement('div');
  el.innerHTML = str;
  str = el.textContent;
  return str;
};
/** 
 * @Author: 王林 
 * @Date: 2021-05-04 14:45:39 
 * @Desc: 极简的深拷贝 
 */

const simpleDeepClone = data => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return null;
  }
};
/** 
 * @Author: 王林 
 * @Date: 2021-05-04 14:40:11 
 * @Desc: 复制渲染树数据 
 */

const copyRenderTree = (tree, root) => {
  tree.data = simpleDeepClone(root.data);
  tree.children = [];

  if (root.children && root.children.length > 0) {
    root.children.forEach((item, index) => {
      tree.children[index] = copyRenderTree({}, item);
    });
  }

  return tree;
};
/** 
 * @Author: 王林 
 * @Date: 2021-05-04 14:40:11 
 * @Desc: 复制节点树数据 
 */

const copyNodeTree = (tree, root) => {
  tree.data = simpleDeepClone(root.nodeData.data); // tree.data.isActive = false

  tree.children = [];

  if (root.children && root.children.length > 0) {
    root.children.forEach((item, index) => {
      tree.children[index] = copyNodeTree({}, item);
    });
  }

  return tree;
};
/** 
 * @Author: 王林 
 * @Date: 2021-07-04 09:08:43 
 * @Desc: 图片转成dataURL 
 */

const imgToDataUrl = src => {
  return new Promise((resolve, reject) => {
    const img = new Image(); // 跨域图片需要添加这个属性，否则画布被污染了无法导出图片

    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = () => {
      try {
        let canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext('2d'); // 图片绘制到canvas里

        ctx.drawImage(img, 0, 0, img.width, img.height);
        resolve(canvas.toDataURL());
      } catch (e) {
        reject(e);
      }
    };

    img.onerror = e => {
      reject(e);
    };

    img.src = src;
  });
};
/** 
 * @Author: 王林 
 * @Date: 2021-07-04 16:20:06 
 * @Desc: 下载文件 
 */

const downloadFile = (file, fileName) => {
  let a = document.createElement('a');
  a.href = file;
  a.download = fileName;
  a.click();
};
/** 
 * @Author: 王林 
 * @Date: 2021-07-11 10:36:47 
 * @Desc: 节流函数 
 */

const throttle = (fn, time = 300, ctx) => {
  let timer = null;
  return () => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn.call(ctx);
      timer = null;
    }, 300);
  };
};
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-07-12 10:27:36 
 * @Desc: 异步执行任务队列 
 */

const asyncRun = (taskList, callback = () => {}) => {
  let index = 0;
  let len = taskList.length;

  if (len <= 0) {
    return callback();
  }

  let loop = () => {
    if (index >= len) {
      callback();
      return;
    }

    taskList[index]();
    setTimeout(() => {
      index++;
      loop();
    }, 0);
  };

  loop();
};
// CONCATENATED MODULE: ../simple-mind-map/node_modules/@svgdotjs/svg.js/dist/svg.esm.js
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.1.2
* https://svgjs.dev/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Wed Jan 26 2022 23:19:07 GMT+0100 (Mitteleuropäische Normalzeit)
*/;
const methods$1 = {};
const names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    for (const _name of name) {
      registerMethods(_name, m);
    }

    return;
  }

  if (typeof name === 'object') {
    for (const _name in name) {
      registerMethods(_name, name[_name]);
    }

    return;
  }

  addMethodNames(Object.getOwnPropertyNames(m));
  methods$1[name] = Object.assign(methods$1[name] || {}, m);
}
function getMethodsFor(name) {
  return methods$1[name] || {};
}
function getMethodNames() {
  return [...new Set(names)];
}
function addMethodNames(_names) {
  names.push(..._names);
}

// Map function
function map(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }

  return result;
} // Filter function

function filter(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
} // Degrees to radians

function radians(d) {
  return d % 360 * Math.PI / 180;
} // Radians to degrees

function degrees(r) {
  return r * 180 / Math.PI % 360;
} // Convert dash-separated-string to camelCase

function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
} // Convert camel cased string to dash separated

function unCamelCase(s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase();
  });
} // Capitalize first letter of a string

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
} // Calculate proportional width and height values when necessary

function proportionalSize(element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox();

    if (width == null) {
      width = box.width / box.height * height;
    } else if (height == null) {
      height = box.height / box.width * width;
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/

function getOrigin(o, element) {
  const origin = o.origin; // First check if origin is in ox or originX

  let ox = o.ox != null ? o.ox : o.originX != null ? o.originX : 'center';
  let oy = o.oy != null ? o.oy : o.originY != null ? o.originY : 'center'; // Then check if origin was used and overwrite in that case

  if (origin != null) {
    [ox, oy] = Array.isArray(origin) ? origin : typeof origin === 'object' ? [origin.x, origin.y] : [origin, origin];
  } // Make sure to only call bbox when actually needed


  const condX = typeof ox === 'string';
  const condY = typeof oy === 'string';

  if (condX || condY) {
    const {
      height,
      width,
      x,
      y
    } = element.bbox(); // And only overwrite if string was passed for this specific axis

    if (condX) {
      ox = ox.includes('left') ? x : ox.includes('right') ? x + width : x + width / 2;
    }

    if (condY) {
      oy = oy.includes('top') ? y : oy.includes('bottom') ? y + height : y + height / 2;
    }
  } // Return the origin as it is if it wasn't a string


  return [ox, oy];
}

var utils = {
  __proto__: null,
  map: map,
  filter: filter,
  radians: radians,
  degrees: degrees,
  camelCase: camelCase,
  unCamelCase: unCamelCase,
  capitalize: capitalize,
  proportionalSize: proportionalSize,
  getOrigin: getOrigin
};

// Default namespaces
const svg_esm_svg = 'http://www.w3.org/2000/svg';
const html = 'http://www.w3.org/1999/xhtml';
const xmlns = 'http://www.w3.org/2000/xmlns/';
const xlink = 'http://www.w3.org/1999/xlink';
const svgjs = 'http://svgjs.dev/svgjs';

var namespaces = {
  __proto__: null,
  svg: svg_esm_svg,
  html: html,
  xmlns: xmlns,
  xlink: xlink,
  svgjs: svgjs
};

const globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};
function registerWindow(win = null, doc = null) {
  globals.window = win;
  globals.document = doc;
}
const save = {};
function saveWindow() {
  save.window = globals.window;
  save.document = globals.document;
}
function restoreWindow() {
  globals.window = save.window;
  globals.document = save.document;
}
function withWindow(win, fn) {
  saveWindow();
  registerWindow(win, win.document);
  fn(win, win.document);
  restoreWindow();
}
function getWindow() {
  return globals.window;
}

class svg_esm_Base {// constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
}

const svg_esm_elements = {};
const root = '___SYMBOL___ROOT___'; // Method for element creation

function create(name, ns = svg_esm_svg) {
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element, isHTML = false) {
  if (element instanceof svg_esm_Base) return element;

  if (typeof element === 'object') {
    return adopter(element);
  }

  if (element == null) {
    return new svg_esm_elements[root]();
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  } // Make sure, that HTML elements are created with the correct namespace


  const wrapper = isHTML ? globals.document.createElement('div') : create('svg');
  wrapper.innerHTML = element; // We can use firstChild here because we know,
  // that the first char is < and thus an element

  element = adopter(wrapper.firstChild); // make sure, that element doesnt have its wrapper attached

  wrapper.removeChild(wrapper.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node && node.ownerDocument && node instanceof node.ownerDocument.defaultView.Node ? node : create(name);
} // Adopt existing svg elements

function adopt(node) {
  // check for presence of node
  if (!node) return null; // make sure a node isn't already adopted

  if (node.instance instanceof svg_esm_Base) return node.instance;

  if (node.nodeName === '#document-fragment') {
    return new svg_esm_elements.Fragment(node);
  } // initialize variables


  let className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'; // Fallback to Dom if element is not known
  } else if (!svg_esm_elements[className]) {
    className = 'Dom';
  }

  return new svg_esm_elements[className](node);
}
let adopter = adopt;
function mockAdopt(mock = adopt) {
  adopter = mock;
}
function register(element, name = element.name, asRoot = false) {
  svg_esm_elements[name] = element;
  if (asRoot) svg_esm_elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return svg_esm_elements[name];
} // Element id sequence

let did = 1000; // Get next named element id

function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
} // Deep new id assignment

function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (let i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }

  if (node.id) {
    node.id = eid(node.nodeName);
    return node;
  }

  return node;
} // Method for extending objects

function extend(modules, methods) {
  let key, i;
  modules = Array.isArray(modules) ? modules : [modules];

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      modules[i].prototype[key] = methods[key];
    }
  }
}
function wrapWithAttrCheck(fn) {
  return function (...args) {
    const o = args[args.length - 1];

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}

function siblings() {
  return this.parent().children();
} // Get the current position siblings

function position() {
  return this.parent().index(this);
} // Get the next element (will return null if there is none)

function next() {
  return this.siblings()[this.position() + 1];
} // Get the next element (will return null if there is none)

function prev() {
  return this.siblings()[this.position() - 1];
} // Send given element one step forward

function forward() {
  const i = this.position();
  const p = this.parent(); // move node one step forward

  p.add(this.remove(), i + 1);
  return this;
} // Send given element one step backward

function backward() {
  const i = this.position();
  const p = this.parent();
  p.add(this.remove(), i ? i - 1 : 0);
  return this;
} // Send given element all the way to the front

function front() {
  const p = this.parent(); // Move node forward

  p.add(this.remove());
  return this;
} // Send given element all the way to the back

function back() {
  const p = this.parent(); // Move node back

  p.add(this.remove(), 0);
  return this;
} // Inserts a given element before the targeted element

function before(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i);
  return this;
} // Inserts a given element after the targeted element

function after(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i + 1);
  return this;
}
function insertBefore(element) {
  element = makeInstance(element);
  element.before(this);
  return this;
}
function insertAfter(element) {
  element = makeInstance(element);
  element.after(this);
  return this;
}
registerMethods('Dom', {
  siblings,
  position,
  next,
  prev,
  forward,
  backward,
  front,
  back,
  before,
  after,
  insertBefore,
  insertAfter
});

// Parse unit value
const numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

const rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

const reference = /(#[a-z_][a-z0-9\-_]*)/i; // splits a transformation chain

const transforms = /\)\s*,?\s*/; // Whitespace

const whitespace = /\s/g; // Test hex value

const isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i; // Test rgb value

const isRgb = /^rgb\(/; // Test for blank string

const isBlank = /^(\s+)?$/; // Test for numeric string

const isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for image url

const isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

const delimiter = /[\s,]+/; // Test for path letter

const isPathLetter = /[MLHVCSQTAZ]/i;

var regex = {
  __proto__: null,
  numberAndUnit: numberAndUnit,
  hex: hex,
  rgb: rgb,
  reference: reference,
  transforms: transforms,
  whitespace: whitespace,
  isHex: isHex,
  isRgb: isRgb,
  isBlank: isBlank,
  isNumber: isNumber,
  isImage: isImage,
  delimiter: delimiter,
  isPathLetter: isPathLetter
};

function classes() {
  const attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise

function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
} // Add class to the node

function addClass(name) {
  if (!this.hasClass(name)) {
    const array = this.classes();
    array.push(name);
    this.attr('class', array.join(' '));
  }

  return this;
} // Remove class from the node

function removeClass(name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name;
    }).join(' '));
  }

  return this;
} // Toggle the presence of a class on the node

function toggleClass(name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods('Dom', {
  classes,
  hasClass,
  addClass,
  removeClass,
  toggleClass
});

function css(style, val) {
  const ret = {};

  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      const t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }

  if (arguments.length < 2) {
    // get style properties as array
    if (Array.isArray(style)) {
      for (const name of style) {
        const cased = camelCase(name);
        ret[name] = this.node.style[cased];
      }

      return ret;
    } // get style for property


    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    } // set styles in object


    if (typeof style === 'object') {
      for (const name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(name)] = style[name] == null || isBlank.test(style[name]) ? '' : style[name];
      }
    }
  } // set style for property


  if (arguments.length === 2) {
    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
  }

  return this;
} // Show element

function show() {
  return this.css('display', '');
} // Hide element

function hide() {
  return this.css('display', 'none');
} // Is element visible?

function visible() {
  return this.css('display') !== 'none';
}
registerMethods('Dom', {
  css,
  show,
  hide,
  visible
});

function svg_esm_data(a, v, r) {
  if (a == null) {
    // get an object of attributes
    return this.data(map(filter(this.node.attributes, el => el.nodeName.indexOf('data-') === 0), el => el.nodeName.slice(5)));
  } else if (a instanceof Array) {
    const data = {};

    for (const key of a) {
      data[key] = this.data(key);
    }

    return data;
  } else if (typeof a === 'object') {
    for (v in a) {
      this.data(v, a[v]);
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a));
    } catch (e) {
      return this.attr('data-' + a);
    }
  } else {
    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
  }

  return this;
}
registerMethods('Dom', {
  data: svg_esm_data
});

function remember(k, v) {
  // remember every item in an object individually
  if (typeof arguments[0] === 'object') {
    for (const key in k) {
      this.remember(key, k[key]);
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k];
  } else {
    // store memory
    this.memory()[k] = v;
  }

  return this;
} // Erase a given memory

function forget() {
  if (arguments.length === 0) {
    this._memory = {};
  } else {
    for (let i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }
  }

  return this;
} // This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object

function memory() {
  return this._memory = this._memory || {};
}
registerMethods('Dom', {
  remember,
  forget,
  memory
});

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

function componentHex(component) {
  const integer = Math.round(component);
  const bounded = Math.max(0, Math.min(255, integer));
  const hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function is(object, space) {
  for (let i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }

  return true;
}

function getParameters(a, b) {
  const params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
    _d: 0,
    space: 'rgb'
  } : is(a, 'xyz') ? {
    _a: a.x,
    _b: a.y,
    _c: a.z,
    _d: 0,
    space: 'xyz'
  } : is(a, 'hsl') ? {
    _a: a.h,
    _b: a.s,
    _c: a.l,
    _d: 0,
    space: 'hsl'
  } : is(a, 'lab') ? {
    _a: a.l,
    _b: a.a,
    _c: a.b,
    _d: 0,
    space: 'lab'
  } : is(a, 'lch') ? {
    _a: a.l,
    _b: a.c,
    _c: a.h,
    _d: 0,
    space: 'lch'
  } : is(a, 'cmyk') ? {
    _a: a.c,
    _b: a.m,
    _c: a.y,
    _d: a.k,
    space: 'cmyk'
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: 'rgb'
  };
  params.space = b || params.space;
  return params;
}

function cieSpace(space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true;
  } else {
    return false;
  }
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

class Color {
  constructor(...inputs) {
    this.init(...inputs);
  } // Test if given value is a color


  static isColor(color) {
    return color && (color instanceof Color || this.isRgb(color) || this.test(color));
  } // Test if given value is an rgb object


  static isRgb(color) {
    return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
  }
  /*
  Generating random colors
  */


  static random(mode = 'vibrant', t, u) {
    // Get the math modules
    const {
      random,
      round,
      sin,
      PI: pi
    } = Math; // Run the correct generator

    if (mode === 'vibrant') {
      const l = (81 - 57) * random() + 57;
      const c = (83 - 45) * random() + 45;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'sine') {
      t = t == null ? random() : t;
      const r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
      const g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
      const b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'pastel') {
      const l = (94 - 86) * random() + 86;
      const c = (26 - 9) * random() + 9;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'dark') {
      const l = 10 + 10 * random();
      const c = (125 - 75) * random() + 86;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'rgb') {
      const r = 255 * random();
      const g = 255 * random();
      const b = 255 * random();
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'lab') {
      const l = 100 * random();
      const a = 256 * random() - 128;
      const b = 256 * random() - 128;
      const color = new Color(l, a, b, 'lab');
      return color;
    } else if (mode === 'grey') {
      const grey = 255 * random();
      const color = new Color(grey, grey, grey);
      return color;
    } else {
      throw new Error('Unsupported random color mode');
    }
  } // Test if given value is a color string


  static test(color) {
    return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
  }

  cmyk() {
    // Get the rgb values for the current color
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Get the cmyk values in an unbounded format

    const k = Math.min(1 - r, 1 - g, 1 - b);

    if (k === 1) {
      // Catch the black case
      return new Color(0, 0, 0, 1, 'cmyk');
    }

    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k); // Construct the new color

    const color = new Color(c, m, y, k, 'cmyk');
    return color;
  }

  hsl() {
    // Get the rgb values
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Find the maximum and minimum values to get the lightness

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2; // If the r, g, v values are identical then we are grey

    const isGrey = max === min; // Calculate the hue and saturation

    const delta = max - min;
    const s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    const h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

    const color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
    return color;
  }

  init(a = 0, b = 0, c = 0, d = 0, space = 'rgb') {
    // This catches the case when a falsy value is passed like ''
    a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

    if (this.space) {
      for (const component in this.space) {
        delete this[this.space[component]];
      }
    }

    if (typeof a === 'number') {
      // Allow for the case that we don't need d...
      space = typeof d === 'string' ? d : space;
      d = typeof d === 'string' ? 0 : d; // Assign the values straight to the color

      Object.assign(this, {
        _a: a,
        _b: b,
        _c: c,
        _d: d,
        space
      }); // If the user gave us an array, make the color from it
    } else if (a instanceof Array) {
      this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
      Object.assign(this, {
        _a: a[0],
        _b: a[1],
        _c: a[2],
        _d: a[3] || 0
      });
    } else if (a instanceof Object) {
      // Set the object up and assign its values directly
      const values = getParameters(a, b);
      Object.assign(this, values);
    } else if (typeof a === 'string') {
      if (isRgb.test(a)) {
        const noWhitespace = a.replace(whitespace, '');
        const [_a, _b, _c] = rgb.exec(noWhitespace).slice(1, 4).map(v => parseInt(v));
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else if (isHex.test(a)) {
        const hexParse = v => parseInt(v, 16);

        const [, _a, _b, _c] = hex.exec(sixDigitHex(a)).map(hexParse);
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else throw Error('Unsupported string format, can\'t construct Color');
    } // Now add the components as a convenience


    const {
      _a,
      _b,
      _c,
      _d
    } = this;
    const components = this.space === 'rgb' ? {
      r: _a,
      g: _b,
      b: _c
    } : this.space === 'xyz' ? {
      x: _a,
      y: _b,
      z: _c
    } : this.space === 'hsl' ? {
      h: _a,
      s: _b,
      l: _c
    } : this.space === 'lab' ? {
      l: _a,
      a: _b,
      b: _c
    } : this.space === 'lch' ? {
      l: _a,
      c: _b,
      h: _c
    } : this.space === 'cmyk' ? {
      c: _a,
      m: _b,
      y: _c,
      k: _d
    } : {};
    Object.assign(this, components);
  }

  lab() {
    // Get the xyz color
    const {
      x,
      y,
      z
    } = this.xyz(); // Get the lab components

    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z); // Construct and return a new color

    const color = new Color(l, a, b, 'lab');
    return color;
  }

  lch() {
    // Get the lab color directly
    const {
      l,
      a,
      b
    } = this.lab(); // Get the chromaticity and the hue using polar coordinates

    const c = Math.sqrt(a ** 2 + b ** 2);
    let h = 180 * Math.atan2(b, a) / Math.PI;

    if (h < 0) {
      h *= -1;
      h = 360 - h;
    } // Make a new color and return it


    const color = new Color(l, c, h, 'lch');
    return color;
  }
  /*
  Conversion Methods
  */


  rgb() {
    if (this.space === 'rgb') {
      return this;
    } else if (cieSpace(this.space)) {
      // Convert to the xyz color space
      let {
        x,
        y,
        z
      } = this;

      if (this.space === 'lab' || this.space === 'lch') {
        // Get the values in the lab space
        let {
          l,
          a,
          b
        } = this;

        if (this.space === 'lch') {
          const {
            c,
            h
          } = this;
          const dToR = Math.PI / 180;
          a = c * Math.cos(dToR * h);
          b = c * Math.sin(dToR * h);
        } // Undo the nonlinear function


        const yL = (l + 16) / 116;
        const xL = a / 500 + yL;
        const zL = yL - b / 200; // Get the xyz values

        const ct = 16 / 116;
        const mx = 0.008856;
        const nm = 7.787;
        x = 0.95047 * (xL ** 3 > mx ? xL ** 3 : (xL - ct) / nm);
        y = 1.00000 * (yL ** 3 > mx ? yL ** 3 : (yL - ct) / nm);
        z = 1.08883 * (zL ** 3 > mx ? zL ** 3 : (zL - ct) / nm);
      } // Convert xyz to unbounded rgb values


      const rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
      const gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
      const bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

      const pow = Math.pow;
      const bd = 0.0031308;
      const r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
      const g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
      const b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

      const color = new Color(255 * r, 255 * g, 255 * b);
      return color;
    } else if (this.space === 'hsl') {
      // https://bgrins.github.io/TinyColor/docs/tinycolor.html
      // Get the current hsl values
      let {
        h,
        s,
        l
      } = this;
      h /= 360;
      s /= 100;
      l /= 100; // If we are grey, then just make the color directly

      if (s === 0) {
        l *= 255;
        const color = new Color(l, l, l);
        return color;
      } // TODO I have no idea what this does :D If you figure it out, tell me!


      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q; // Get the rgb values

      const r = 255 * hueToRgb(p, q, h + 1 / 3);
      const g = 255 * hueToRgb(p, q, h);
      const b = 255 * hueToRgb(p, q, h - 1 / 3); // Make a new color

      const color = new Color(r, g, b);
      return color;
    } else if (this.space === 'cmyk') {
      // https://gist.github.com/felipesabino/5066336
      // Get the normalised cmyk values
      const {
        c,
        m,
        y,
        k
      } = this; // Get the rgb values

      const r = 255 * (1 - Math.min(1, c * (1 - k) + k));
      const g = 255 * (1 - Math.min(1, m * (1 - k) + k));
      const b = 255 * (1 - Math.min(1, y * (1 - k) + k)); // Form the color and return it

      const color = new Color(r, g, b);
      return color;
    } else {
      return this;
    }
  }

  toArray() {
    const {
      _a,
      _b,
      _c,
      _d,
      space
    } = this;
    return [_a, _b, _c, _d, space];
  }

  toHex() {
    const [r, g, b] = this._clamped().map(componentHex);

    return `#${r}${g}${b}`;
  }

  toRgb() {
    const [rV, gV, bV] = this._clamped();

    const string = `rgb(${rV},${gV},${bV})`;
    return string;
  }

  toString() {
    return this.toHex();
  }

  xyz() {
    // Normalise the red, green and blue values
    const {
      _a: r255,
      _b: g255,
      _c: b255
    } = this.rgb();
    const [r, g, b] = [r255, g255, b255].map(v => v / 255); // Convert to the lab rgb space

    const rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    const gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    const bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

    const xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
    const yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
    const zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

    const x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
    const y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
    const z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

    const color = new Color(x, y, z, 'xyz');
    return color;
  }
  /*
  Input and Output methods
  */


  _clamped() {
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const {
      max,
      min,
      round
    } = Math;

    const format = v => max(0, min(round(v), 255));

    return [_a, _b, _c].map(format);
  }
  /*
  Constructing colors
  */


}

class Point {
  // Initialize
  constructor(...args) {
    this.init(...args);
  } // Clone point


  clone() {
    return new Point(this);
  }

  init(x, y) {
    const base = {
      x: 0,
      y: 0
    }; // ensure source as object

    const source = Array.isArray(x) ? {
      x: x[0],
      y: x[1]
    } : typeof x === 'object' ? {
      x: x.x,
      y: x.y
    } : {
      x: x,
      y: y
    }; // merge source

    this.x = source.x == null ? base.x : source.x;
    this.y = source.y == null ? base.y : source.y;
    return this;
  }

  toArray() {
    return [this.x, this.y];
  }

  transform(m) {
    return this.clone().transformO(m);
  } // Transform point with matrix


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    const {
      x,
      y
    } = this; // Perform the matrix multiplication

    this.x = m.a * x + m.c * y + m.e;
    this.y = m.b * x + m.d * y + m.f;
    return this;
  }

}
function point(x, y) {
  return new Point(x, y).transform(this.screenCTM().inverse());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6);
}

class Matrix {
  constructor(...args) {
    this.init(...args);
  }

  static formatTransforms(o) {
    // Get all of the parameters required to form the matrix
    const flipBoth = o.flip === 'both' || o.flip === true;
    const flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
    const flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
    const skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
    const skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
    const scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
    const scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
    const shear = o.shear || 0;
    const theta = o.rotate || o.theta || 0;
    const origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
    const ox = origin.x;
    const oy = origin.y; // We need Point to be invalid if nothing was passed because we cannot default to 0 here. Thats why NaN

    const position = new Point(o.position || o.px || o.positionX || NaN, o.py || o.positionY || NaN);
    const px = position.x;
    const py = position.y;
    const translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
    const tx = translate.x;
    const ty = translate.y;
    const relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
    const rx = relative.x;
    const ry = relative.y; // Populate all of the values

    return {
      scaleX,
      scaleY,
      skewX,
      skewY,
      shear,
      theta,
      rx,
      ry,
      tx,
      ty,
      ox,
      oy,
      px,
      py
    };
  }

  static fromArray(a) {
    return {
      a: a[0],
      b: a[1],
      c: a[2],
      d: a[3],
      e: a[4],
      f: a[5]
    };
  }

  static isMatrixLike(o) {
    return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
  } // left matrix, right matrix, target matrix which is overwritten


  static matrixMultiply(l, r, o) {
    // Work out the product directly
    const a = l.a * r.a + l.c * r.b;
    const b = l.b * r.a + l.d * r.b;
    const c = l.a * r.c + l.c * r.d;
    const d = l.b * r.c + l.d * r.d;
    const e = l.e + l.a * r.e + l.c * r.f;
    const f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

    o.a = a;
    o.b = b;
    o.c = c;
    o.d = d;
    o.e = e;
    o.f = f;
    return o;
  }

  around(cx, cy, matrix) {
    return this.clone().aroundO(cx, cy, matrix);
  } // Transform around a center point


  aroundO(cx, cy, matrix) {
    const dx = cx || 0;
    const dy = cy || 0;
    return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
  } // Clones this matrix


  clone() {
    return new Matrix(this);
  } // Decomposes this matrix into its affine parameters


  decompose(cx = 0, cy = 0) {
    // Get the parameters from the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

    const determinant = a * d - b * c;
    const ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
    // and the rotation of the resulting matrix

    const sx = ccw * Math.sqrt(a * a + b * b);
    const thetaRad = Math.atan2(ccw * b, ccw * a);
    const theta = 180 / Math.PI * thetaRad;
    const ct = Math.cos(thetaRad);
    const st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
    // two affine parameters directly from these parameters

    const lam = (a * c + b * d) / determinant;
    const sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

    const tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
    const ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

    return {
      // Return the affine parameters
      scaleX: sx,
      scaleY: sy,
      shear: lam,
      rotate: theta,
      translateX: tx,
      translateY: ty,
      originX: cx,
      originY: cy,
      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  } // Check if two matrices are equal


  equals(other) {
    if (other === this) return true;
    const comp = new Matrix(other);
    return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
  } // Flip matrix on x or y, at a given offset


  flip(axis, around) {
    return this.clone().flipO(axis, around);
  }

  flipO(axis, around) {
    return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
  } // Initialize


  init(source) {
    const base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

    source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : typeof source === 'object' && Matrix.isMatrixLike(source) ? source : typeof source === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

    this.a = source.a != null ? source.a : base.a;
    this.b = source.b != null ? source.b : base.b;
    this.c = source.c != null ? source.c : base.c;
    this.d = source.d != null ? source.d : base.d;
    this.e = source.e != null ? source.e : base.e;
    this.f = source.f != null ? source.f : base.f;
    return this;
  }

  inverse() {
    return this.clone().inverseO();
  } // Inverses matrix


  inverseO() {
    // Get the current parameters out of the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Invert the 2x2 matrix in the top left

    const det = a * d - b * c;
    if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

    const na = d / det;
    const nb = -b / det;
    const nc = -c / det;
    const nd = a / det; // Apply the inverted matrix to the top right

    const ne = -(na * e + nc * f);
    const nf = -(nb * e + nd * f); // Construct the inverted matrix

    this.a = na;
    this.b = nb;
    this.c = nc;
    this.d = nd;
    this.e = ne;
    this.f = nf;
    return this;
  }

  lmultiply(matrix) {
    return this.clone().lmultiplyO(matrix);
  }

  lmultiplyO(matrix) {
    const r = this;
    const l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Left multiplies by the given matrix


  multiply(matrix) {
    return this.clone().multiplyO(matrix);
  }

  multiplyO(matrix) {
    // Get the matrices
    const l = this;
    const r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Rotate matrix


  rotate(r, cx, cy) {
    return this.clone().rotateO(r, cx, cy);
  }

  rotateO(r, cx = 0, cy = 0) {
    // Convert degrees to radians
    r = radians(r);
    const cos = Math.cos(r);
    const sin = Math.sin(r);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * cos - b * sin;
    this.b = b * cos + a * sin;
    this.c = c * cos - d * sin;
    this.d = d * cos + c * sin;
    this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
    this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
    return this;
  } // Scale matrix


  scale(x, y, cx, cy) {
    return this.clone().scaleO(...arguments);
  }

  scaleO(x, y = x, cx = 0, cy = 0) {
    // Support uniform scaling
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    }

    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * x;
    this.b = b * y;
    this.c = c * x;
    this.d = d * y;
    this.e = e * x - cx * x + cx;
    this.f = f * y - cy * y + cy;
    return this;
  } // Shear matrix


  shear(a, cx, cy) {
    return this.clone().shearO(a, cx, cy);
  }

  shearO(lx, cx = 0, cy = 0) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.c = c + d * lx;
    this.e = e + f * lx - cy * lx;
    return this;
  } // Skew Matrix


  skew(x, y, cx, cy) {
    return this.clone().skewO(...arguments);
  }

  skewO(x, y = x, cx = 0, cy = 0) {
    // support uniformal skew
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    } // Convert degrees to radians


    x = radians(x);
    y = radians(y);
    const lx = Math.tan(x);
    const ly = Math.tan(y);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.b = b + a * ly;
    this.c = c + d * lx;
    this.d = d + c * ly;
    this.e = e + f * lx - cy * lx;
    this.f = f + e * ly - cx * ly;
    return this;
  } // SkewX


  skewX(x, cx, cy) {
    return this.skew(x, 0, cx, cy);
  } // SkewY


  skewY(y, cx, cy) {
    return this.skew(0, y, cx, cy);
  }

  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  } // Convert matrix to string


  toString() {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
  } // Transform a matrix into another matrix by manipulating the space


  transform(o) {
    // Check if o is a matrix and then left multiply it directly
    if (Matrix.isMatrixLike(o)) {
      const matrix = new Matrix(o);
      return matrix.multiplyO(this);
    } // Get the proposed transformations and the current transformations


    const t = Matrix.formatTransforms(o);
    const current = this;
    const {
      x: ox,
      y: oy
    } = new Point(t.ox, t.oy).transform(current); // Construct the resulting matrix

    const transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

    if (isFinite(t.px) || isFinite(t.py)) {
      const origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)
      // Doesnt work because t.px is also 0 if it wasnt passed

      const dx = isFinite(t.px) ? t.px - origin.x : 0;
      const dy = isFinite(t.py) ? t.py - origin.y : 0;
      transformer.translateO(dx, dy);
    } // Translate now after positioning


    transformer.translateO(t.tx, t.ty);
    return transformer;
  } // Translate matrix


  translate(x, y) {
    return this.clone().translateO(x, y);
  }

  translateO(x, y) {
    this.e += x || 0;
    this.f += y || 0;
    return this;
  }

  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }

}
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    const rect = this.rect(1, 1);
    const m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }

  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    const svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    const path = svg.path().node;
    parser.nodes = {
      svg,
      path
    };
  }

  if (!parser.nodes.svg.node.parentNode) {
    const b = globals.document.body || globals.document.documentElement;
    parser.nodes.svg.addTo(b);
  }

  return parser.nodes;
}

function isNulledBox(box) {
  return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node) {
  return node === globals.document || (globals.document.documentElement.contains || function (node) {
    // This is IE - it does not support contains() for top-level SVGs
    while (node.parentNode) {
      node = node.parentNode;
    }

    return node === globals.document;
  }).call(globals.document.documentElement, node);
}
class Box {
  constructor(...args) {
    this.init(...args);
  }

  addOffset() {
    // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
    this.x += globals.window.pageXOffset;
    this.y += globals.window.pageYOffset;
    return new Box(this);
  }

  init(source) {
    const base = [0, 0, 0, 0];
    source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : typeof source === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
    this.x = source[0] || 0;
    this.y = source[1] || 0;
    this.width = this.w = source[2] || 0;
    this.height = this.h = source[3] || 0; // Add more bounding box properties

    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
    this.cx = this.x + this.w / 2;
    this.cy = this.y + this.h / 2;
    return this;
  }

  isNulled() {
    return isNulledBox(this);
  } // Merge rect box with another, return a new instance


  merge(box) {
    const x = Math.min(this.x, box.x);
    const y = Math.min(this.y, box.y);
    const width = Math.max(this.x + this.width, box.x + box.width) - x;
    const height = Math.max(this.y + this.height, box.y + box.height) - y;
    return new Box(x, y, width, height);
  }

  toArray() {
    return [this.x, this.y, this.width, this.height];
  }

  toString() {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
  }

  transform(m) {
    if (!(m instanceof Matrix)) {
      m = new Matrix(m);
    }

    let xMin = Infinity;
    let xMax = -Infinity;
    let yMin = Infinity;
    let yMax = -Infinity;
    const pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
    pts.forEach(function (p) {
      p = p.transform(m);
      xMin = Math.min(xMin, p.x);
      xMax = Math.max(xMax, p.x);
      yMin = Math.min(yMin, p.y);
      yMax = Math.max(yMax, p.y);
    });
    return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
  }

}

function getBox(el, getBBoxFn, retry) {
  let box;

  try {
    // Try to get the box with the provided function
    box = getBBoxFn(el.node); // If the box is worthless and not even in the dom, retry
    // by throwing an error here...

    if (isNulledBox(box) && !domContains(el.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    // ... and calling the retry handler here
    box = retry(el);
  }

  return box;
}

function bbox() {
  // Function to get bbox is getBBox()
  const getBBox = node => node.getBBox(); // Take all measures so that a stupid browser renders the element
  // so we can get the bbox from it when we try again


  const retry = el => {
    try {
      const clone = el.clone().addTo(parser().svg).show();
      const box = clone.node.getBBox();
      clone.remove();
      return box;
    } catch (e) {
      // We give up...
      throw new Error(`Getting bbox of element "${el.node.nodeName}" is not possible: ${e.toString()}`);
    }
  };

  const box = getBox(this, getBBox, retry);
  const bbox = new Box(box);
  return bbox;
}
function rbox(el) {
  const getRBox = node => node.getBoundingClientRect();

  const retry = el => {
    // There is no point in trying tricks here because if we insert the element into the dom ourselves
    // it obviously will be at the wrong position
    throw new Error(`Getting rbox of element "${el.node.nodeName}" is not possible`);
  };

  const box = getBox(this, getRBox, retry);
  const rbox = new Box(box); // If an element was passed, we want the bbox in the coordinate system of that element

  if (el) {
    return rbox.transform(el.screenCTM().inverseO());
  } // Else we want it in absolute screen coordinates
  // Therefore we need to add the scrollOffset


  return rbox.addOffset();
} // Checks whether the given point is inside the bounding box

function inside(x, y) {
  const box = this.bbox();
  return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
}
registerMethods({
  viewbox: {
    viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox')); // act as setter

      return this.attr('viewBox', new Box(x, y, width, height));
    },

    zoom(level, point) {
      // Its best to rely on the attributes here and here is why:
      // clientXYZ: Doesn't work on non-root svgs because they dont have a CSSBox (silly!)
      // getBoundingClientRect: Doesn't work because Chrome just ignores width and height of nested svgs completely
      //                        that means, their clientRect is always as big as the content.
      //                        Furthermore this size is incorrect if the element is further transformed by its parents
      // computedStyle: Only returns meaningful values if css was used with px. We dont go this route here!
      // getBBox: returns the bounding box of its content - that doesnt help!
      let {
        width,
        height
      } = this.attr(['width', 'height']); // Width and height is a string when a number with a unit is present which we can't use
      // So we try clientXYZ

      if (!width && !height || typeof width === 'string' || typeof height === 'string') {
        width = this.node.clientWidth;
        height = this.node.clientHeight;
      } // Giving up...


      if (!width || !height) {
        throw new Error('Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element');
      }

      const v = this.viewbox();
      const zoomX = width / v.width;
      const zoomY = height / v.height;
      const zoom = Math.min(zoomX, zoomY);

      if (level == null) {
        return zoom;
      }

      let zoomAmount = zoom / level; // Set the zoomAmount to the highest value which is safe to process and recover from
      // The * 100 is a bit of wiggle room for the matrix transformation

      if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      const box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }

  }
});
register(Box, 'Box');

class List extends Array {
  constructor(arr = [], ...args) {
    super(arr, ...args);
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...arr);
  }

}
extend([List], {
  each(fnOrMethodName, ...args) {
    if (typeof fnOrMethodName === 'function') {
      return this.map((el, i, arr) => {
        return fnOrMethodName.call(el, el, i, arr);
      });
    } else {
      return this.map(el => {
        return el[fnOrMethodName](...args);
      });
    }
  },

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

});
const reserved = ['toArray', 'constructor', 'each'];

List.extend = function (methods) {
  methods = methods.reduce((obj, name) => {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj; // Don't add private methods

    if (name[0] === '_') return obj; // Relay every call to each()

    obj[name] = function (...attrs) {
      return this.each(name, ...attrs);
    };

    return obj;
  }, {});
  extend([List], methods);
};

function baseFind(query, parent) {
  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node);
  }));
} // Scoped find method

function find(query) {
  return baseFind(query, this.node);
}
function findOne(query) {
  return adopt(this.node.querySelector(query));
}

let listenerId = 0;
const windowEvents = {};
function getEvents(instance) {
  let n = instance.getEventHolder(); // We dont want to save events in global space

  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}
function getEventTarget(instance) {
  return instance.getEventTarget();
}
function clearEvents(instance) {
  let n = instance.getEventHolder();
  if (n === globals.window) n = windowEvents;
  if (n.events) n.events = {};
} // Add event binder in the SVG namespace

function on(node, events, listener, binding, options) {
  const l = listener.bind(binding || node);
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // events can be an array of events or a string of events

  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }

  events.forEach(function (event) {
    const ev = event.split('.')[0];
    const ns = event.split('.')[1] || '*'; // ensure valid object

    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

    n.addEventListener(ev, l, options || false);
  });
} // Add event unbinder in the SVG namespace

function off(node, events, listener, options) {
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // listener can be a function or a number

  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  } // events can be an array of events or a string or undefined


  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    const ev = event && event.split('.')[0];
    const ns = event && event.split('.')[1];
    let namespace, l;

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
        delete bag[ev][ns || '*'][listener];
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ev, ns].join('.'), l);
        }

        delete bag[ev][ns];
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [event, ns].join('.'));
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ev, namespace].join('.'));
        }

        delete bag[ev];
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event);
      }

      clearEvents(instance);
    }
  });
}
function dispatch(node, event, data, options) {
  const n = getEventTarget(node); // Dispatch event

  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, {
      detail: data,
      cancelable: true,
      ...options
    });
    n.dispatchEvent(event);
  }

  return event;
}

class EventTarget extends svg_esm_Base {
  addEventListener() {}

  dispatch(event, data, options) {
    return dispatch(this, event, data, options);
  }

  dispatchEvent(event) {
    const bag = this.getEventHolder().events;
    if (!bag) return true;
    const events = bag[event.type];

    for (const i in events) {
      for (const j in events[i]) {
        events[i][j](event);
      }
    }

    return !event.defaultPrevented;
  } // Fire given event


  fire(event, data, options) {
    this.dispatch(event, data, options);
    return this;
  }

  getEventHolder() {
    return this;
  }

  getEventTarget() {
    return this;
  } // Unbind event from listener


  off(event, listener, options) {
    off(this, event, listener, options);
    return this;
  } // Bind given event to listener


  on(event, listener, binding, options) {
    on(this, event, listener, binding, options);
    return this;
  }

  removeEventListener() {}

}
register(EventTarget, 'EventTarget');

function noop() {} // Default animation values

const timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}; // Default attribute values

const attrs = {
  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',
  // text
  'text-anchor': 'start'
};

var defaults = {
  __proto__: null,
  noop: noop,
  timeline: timeline,
  attrs: attrs
};

class SVGArray extends Array {
  constructor(...args) {
    super(...args);
    this.init(...args);
  }

  clone() {
    return new this.constructor(this);
  }

  init(arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...this.parse(arr));
    return this;
  } // Parse whitespace separated string


  parse(array = []) {
    // If already is an array, no need to parse it
    if (array instanceof Array) return array;
    return array.trim().split(delimiter).map(parseFloat);
  }

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

  toSet() {
    return new Set(this);
  }

  toString() {
    return this.join(' ');
  } // Flattens the array if needed


  valueOf() {
    const ret = [];
    ret.push(...this);
    return ret;
  }

}

class SVGNumber {
  // Initialize
  constructor(...args) {
    this.init(...args);
  }

  convert(unit) {
    return new SVGNumber(this.value, unit);
  } // Divide number


  divide(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this / number, this.unit || number.unit);
  }

  init(value, unit) {
    unit = Array.isArray(value) ? value[1] : unit;
    value = Array.isArray(value) ? value[0] : value; // initialize defaults

    this.value = 0;
    this.unit = unit || ''; // parse value

    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
    } else if (typeof value === 'string') {
      unit = value.match(numberAndUnit);

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1]); // normalize

        if (unit[5] === '%') {
          this.value /= 100;
        } else if (unit[5] === 's') {
          this.value *= 1000;
        } // store unit


        this.unit = unit[5];
      }
    } else {
      if (value instanceof SVGNumber) {
        this.value = value.valueOf();
        this.unit = value.unit;
      }
    }

    return this;
  } // Subtract number


  minus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this - number, this.unit || number.unit);
  } // Add number


  plus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this + number, this.unit || number.unit);
  } // Multiply number


  times(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this * number, this.unit || number.unit);
  }

  toArray() {
    return [this.value, this.unit];
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
  }

  valueOf() {
    return this.value;
  }

}

const hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
} // Set svg element attribute

function attr(attr, val, ns) {
  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;

    for (const node of val) {
      attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
    }

    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce((last, curr) => {
      last[curr] = this.attr(curr);
      return last;
    }, {});
  } else if (typeof attr === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) this.attr(val, attr[val]);
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce((_val, hook) => {
      return hook(attr, _val, this);
    }, val); // ensure correct numeric values (also accepts NaN and Infinity)

    if (typeof val === 'number') {
      val = new SVGNumber(val);
    } else if (Color.isColor(val)) {
      // ensure full hex color
      val = new Color(val);
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new SVGArray(val);
    } // if the passed attribute is leading...


    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val);
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
    } // rebuild if required


    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild();
    }
  }

  return this;
}

class Dom extends EventTarget {
  constructor(node, attrs) {
    super();
    this.node = node;
    this.type = node.nodeName;

    if (attrs && node !== attrs) {
      this.attr(attrs);
    }
  } // Add given element at a position


  add(element, i) {
    element = makeInstance(element); // If non-root svg nodes are added we have to remove their namespaces

    if (element.removeNamespace && this.node instanceof globals.window.SVGElement) {
      element.removeNamespace();
    }

    if (i == null) {
      this.node.appendChild(element.node);
    } else if (element.node !== this.node.childNodes[i]) {
      this.node.insertBefore(element.node, this.node.childNodes[i]);
    }

    return this;
  } // Add element to given container and return self


  addTo(parent, i) {
    return makeInstance(parent).put(this, i);
  } // Returns all child elements


  children() {
    return new List(map(this.node.children, function (node) {
      return adopt(node);
    }));
  } // Remove all elements in this container


  clear() {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild);
    }

    return this;
  } // Clone element


  clone(deep = true) {
    // write dom data to the dom so the clone can pickup the data
    this.writeDataToDom(); // clone element and assign new id

    return new this.constructor(assignNewId(this.node.cloneNode(deep)));
  } // Iterates over all children and invokes a given block


  each(block, deep) {
    const children = this.children();
    let i, il;

    for (i = 0, il = children.length; i < il; i++) {
      block.apply(children[i], [i, children]);

      if (deep) {
        children[i].each(block, deep);
      }
    }

    return this;
  }

  element(nodeName, attrs) {
    return this.put(new Dom(create(nodeName), attrs));
  } // Get first child


  first() {
    return adopt(this.node.firstChild);
  } // Get a element at the given index


  get(i) {
    return adopt(this.node.childNodes[i]);
  }

  getEventHolder() {
    return this.node;
  }

  getEventTarget() {
    return this.node;
  } // Checks if the given element is a child


  has(element) {
    return this.index(element) >= 0;
  }

  html(htmlOrFn, outerHTML) {
    return this.xml(htmlOrFn, outerHTML, html);
  } // Get / set id


  id(id) {
    // generate new id if no id set
    if (typeof id === 'undefined' && !this.node.id) {
      this.node.id = eid(this.type);
    } // don't set directly with this.node.id to make `null` work correctly


    return this.attr('id', id);
  } // Gets index of given element


  index(element) {
    return [].slice.call(this.node.childNodes).indexOf(element.node);
  } // Get the last child


  last() {
    return adopt(this.node.lastChild);
  } // matches the element vs a css selector


  matches(selector) {
    const el = this.node;
    const matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
    return matcher && matcher.call(el, selector);
  } // Returns the parent element instance


  parent(type) {
    let parent = this; // check for parent

    if (!parent.node.parentNode) return null; // get parent element

    parent = adopt(parent.node.parentNode);
    if (!type) return parent; // loop trough ancestors if type is given

    do {
      if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
    } while (parent = adopt(parent.node.parentNode));

    return parent;
  } // Basically does the same as `add()` but returns the added element instead


  put(element, i) {
    element = makeInstance(element);
    this.add(element, i);
    return element;
  } // Add element to given container and return container


  putIn(parent, i) {
    return makeInstance(parent).add(this, i);
  } // Remove element


  remove() {
    if (this.parent()) {
      this.parent().removeElement(this);
    }

    return this;
  } // Remove a given child


  removeElement(element) {
    this.node.removeChild(element.node);
    return this;
  } // Replace this with element


  replace(element) {
    element = makeInstance(element);

    if (this.node.parentNode) {
      this.node.parentNode.replaceChild(element.node, this.node);
    }

    return element;
  }

  round(precision = 2, map = null) {
    const factor = 10 ** precision;
    const attrs = this.attr(map);

    for (const i in attrs) {
      if (typeof attrs[i] === 'number') {
        attrs[i] = Math.round(attrs[i] * factor) / factor;
      }
    }

    this.attr(attrs);
    return this;
  } // Import / Export raw svg


  svg(svgOrFn, outerSVG) {
    return this.xml(svgOrFn, outerSVG, svg_esm_svg);
  } // Return id on string conversion


  toString() {
    return this.id();
  }

  words(text) {
    // This is faster than removing all children and adding a new one
    this.node.textContent = text;
    return this;
  }

  wrap(node) {
    const parent = this.parent();

    if (!parent) {
      return this.addTo(node);
    }

    const position = parent.index(this);
    return parent.put(node, position).put(this);
  } // write svgjs data to the dom


  writeDataToDom() {
    // dump variables recursively
    this.each(function () {
      this.writeDataToDom();
    });
    return this;
  } // Import / Export raw svg


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // act as getter if no svg string is given


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      // The default for exports is, that the outerNode is included
      outerXML = outerXML == null ? true : outerXML; // write svgjs data to the dom

      this.writeDataToDom();
      let current = this; // An export modifier was passed

      if (xmlOrFn != null) {
        current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

        if (outerXML) {
          const result = xmlOrFn(current);
          current = result || current; // The user does not want this node? Well, then he gets nothing

          if (result === false) return '';
        } // Deep loop through all children and apply modifier


        current.each(function () {
          const result = xmlOrFn(this);

          const _this = result || this; // If modifier returns false, discard node


          if (result === false) {
            this.remove(); // If modifier returns new node, use it
          } else if (result && this !== _this) {
            this.replace(_this);
          }
        }, true);
      } // Return outer or inner content


      return outerXML ? current.node.outerHTML : current.node.innerHTML;
    } // Act as setter if we got a string
    // The default for import is, that the current node is not replaced


    outerXML = outerXML == null ? false : outerXML; // Create temporary holder

    const well = create('wrapper', ns);
    const fragment = globals.document.createDocumentFragment(); // Dump raw svg

    well.innerHTML = xmlOrFn; // Transplant nodes into the fragment

    for (let len = well.children.length; len--;) {
      fragment.appendChild(well.firstElementChild);
    }

    const parent = this.parent(); // Add the whole fragment at once

    return outerXML ? this.replace(fragment) && parent : this.add(fragment);
  }

}
extend(Dom, {
  attr,
  find,
  findOne
});
register(Dom, 'Dom');

class Element extends Dom {
  constructor(node, attrs) {
    super(node, attrs); // initialize data object

    this.dom = {}; // create circular reference

    this.node.instance = this;

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }
  } // Move element by its center


  center(x, y) {
    return this.cx(x).cy(y);
  } // Move by center over x-axis


  cx(x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
  } // Move by center over y-axis


  cy(y) {
    return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
  } // Get defs


  defs() {
    const root = this.root();
    return root && root.defs();
  } // Relative move over x and y axes


  dmove(x, y) {
    return this.dx(x).dy(y);
  } // Relative move over x axis


  dx(x = 0) {
    return this.x(new SVGNumber(x).plus(this.x()));
  } // Relative move over y axis


  dy(y = 0) {
    return this.y(new SVGNumber(y).plus(this.y()));
  }

  getEventHolder() {
    return this;
  } // Set height of element


  height(height) {
    return this.attr('height', height);
  } // Move element to given x and y values


  move(x, y) {
    return this.x(x).y(y);
  } // return array of all ancestors of given type up to the root svg


  parents(until = this.root()) {
    const isSelector = typeof until === 'string';

    if (!isSelector) {
      until = makeInstance(until);
    }

    const parents = new List();
    let parent = this;

    while ((parent = parent.parent()) && parent.node !== globals.document && parent.nodeName !== '#document-fragment') {
      parents.push(parent);

      if (!isSelector && parent.node === until.node) {
        break;
      }

      if (isSelector && parent.matches(until)) {
        break;
      }

      if (parent.node === this.root().node) {
        // We worked our way to the root and didn't match `until`
        return null;
      }
    }

    return parents;
  } // Get referenced element form attribute value


  reference(attr) {
    attr = this.attr(attr);
    if (!attr) return null;
    const m = (attr + '').match(reference);
    return m ? makeInstance(m[1]) : null;
  } // Get parent document


  root() {
    const p = this.parent(getClass(root));
    return p && p.root();
  } // set given data to the elements data property


  setData(o) {
    this.dom = o;
    return this;
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
  } // Set width of element


  width(width) {
    return this.attr('width', width);
  } // write svgjs data to the dom


  writeDataToDom() {
    // remove previously set data
    this.node.removeAttribute('svgjs:data');

    if (Object.keys(this.dom).length) {
      this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
    }

    return super.writeDataToDom();
  } // Move over x-axis


  x(x) {
    return this.attr('x', x);
  } // Move over y-axis


  y(y) {
    return this.attr('y', y);
  }

}
extend(Element, {
  bbox,
  rbox,
  inside,
  point,
  ctm,
  screenCTM
});
register(Element, 'Element');

const sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function (t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
} // Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  const extension = {};
  let i;

  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m);
    }

    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
      this.attr(m, o);
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
        }
      }
    }

    return this;
  };

  registerMethods(['Element', 'Runner'], extension);
});
registerMethods(['Element', 'Runner'], {
  // Let the user set the matrix directly
  matrix: function (mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    } // Act as a setter, the user can pass a matrix or a set of numbers


    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function (angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      skew: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  shear: function (lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      scale: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  // Map translate to transform
  translate: function (x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function (x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function (direction = 'both', origin = 'center') {
    if ('xybothtrue'.indexOf(direction) === -1) {
      origin = direction;
      direction = 'both';
    }

    return this.transform({
      flip: direction,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function (value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function (x, y = x) {
    const type = (this._element || this).type;
    return type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function () {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function (length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function (a, v) {
    if (typeof a === 'object') {
      for (v in a) this.font(v, a[v]);

      return this;
    }

    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
}); // Add events to elements

const methods = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  const fn = function (f) {
    if (f === null) {
      this.off(event);
    } else {
      this.on(event, f);
    }

    return this;
  };

  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods);

function untransform() {
  return this.attr('transform', null);
} // merge the whole transformation chain into one matrix and returns it

function matrixify() {
  const matrix = (this.attr('transform') || '' // split transformations
  ).split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    const kv = str.trim().split('(');
    return [kv[0], kv[1].split(delimiter).map(function (str) {
      return parseFloat(str);
    })];
  }).reverse() // merge every transformation into one matrix
  .reduce(function (matrix, transform) {
    if (transform[0] === 'matrix') {
      return matrix.lmultiply(Matrix.fromArray(transform[1]));
    }

    return matrix[transform[0]].apply(matrix, transform[1]);
  }, new Matrix());
  return matrix;
} // add an element to another parent without changing the visual representation on the screen

function toParent(parent, i) {
  if (this === parent) return this;
  const ctm = this.screenCTM();
  const pCtm = parent.screenCTM().inverse();
  this.addTo(parent, i).untransform().transform(pCtm.multiply(ctm));
  return this;
} // same as above with parent equals root-svg

function toRoot(i) {
  return this.toParent(this.root(), i);
} // Add transformations

function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    const decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }

  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = { ...o,
      origin: getOrigin(o, this)
    };
  } // The user can pass a boolean, an Element or an Matrix or nothing


  const cleanRelative = relative === true ? this : relative || false;
  const result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform,
  matrixify,
  toParent,
  toRoot,
  transform
});

class Container extends Element {
  flatten(parent = this, index) {
    this.each(function () {
      if (this instanceof Container) {
        return this.flatten().ungroup();
      }
    });
    return this;
  }

  ungroup(parent = this.parent(), index = parent.index(this)) {
    // when parent != this, we want append all elements to the end
    index = index === -1 ? parent.children().length : index;
    this.each(function (i, children) {
      // reverse each
      return children[children.length - i - 1].toParent(parent, index);
    });
    return this.remove();
  }

}
register(Container, 'Container');

class Defs extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('defs', node), attrs);
  }

  flatten() {
    return this;
  }

  ungroup() {
    return this;
  }

}
register(Defs, 'Defs');

class svg_esm_Shape extends Element {}
register(svg_esm_Shape, 'Shape');

function rx(rx) {
  return this.attr('rx', rx);
} // Radius y value

function ry(ry) {
  return this.attr('ry', ry);
} // Move over x-axis

function x$3(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
} // Move over y-axis

function y$3(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
} // Move by center over x-axis

function cx$1(x) {
  return this.attr('cx', x);
} // Move by center over y-axis

function cy$1(y) {
  return this.attr('cy', y);
} // Set width of element

function width$2(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
} // Set height of element

function height$2(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = {
  __proto__: null,
  rx: rx,
  ry: ry,
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
};

class Ellipse extends svg_esm_Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('ellipse', node), attrs);
  }

  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
  }

}
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function (width = 0, height = width) {
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

class Fragment extends Dom {
  constructor(node = globals.document.createDocumentFragment()) {
    super(node);
  } // Import / Export raw xml


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // because this is a fragment we have to put all elements into a wrapper first
    // before we can get the innerXML from it


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      const wrapper = new Dom(create('wrapper', ns));
      wrapper.add(this.node.cloneNode(true));
      return wrapper.xml(false, ns);
    } // Act as setter if we got a string


    return super.xml(xmlOrFn, false, ns);
  }

}

register(Fragment, 'Fragment');

function from(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    fx: new SVGNumber(x),
    fy: new SVGNumber(y)
  }) : this.attr({
    x1: new SVGNumber(x),
    y1: new SVGNumber(y)
  });
}
function to(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    cx: new SVGNumber(x),
    cy: new SVGNumber(y)
  }) : this.attr({
    x2: new SVGNumber(x),
    y2: new SVGNumber(y)
  });
}

var gradiented = {
  __proto__: null,
  from: from,
  to: to
};

class Gradient extends Container {
  constructor(type, attrs) {
    super(nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'gradientTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update gradient


  update(block) {
    // remove all stops
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient(...args) {
      return this.defs().gradient(...args);
    }

  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

class Pattern extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('pattern', node), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'patternTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update pattern by rebuilding


  update(block) {
    // remove content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern(...args) {
      return this.defs().pattern(...args);
    }

  },
  Defs: {
    pattern: wrapWithAttrCheck(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      });
    })
  }
});
register(Pattern, 'Pattern');

class svg_esm_Image extends svg_esm_Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('image', node), attrs);
  } // (re)load image


  load(url, callback) {
    if (!url) return this;
    const img = new globals.window.Image();
    on(img, 'load', function (e) {
      const p = this.parent(Pattern); // ensure image size

      if (this.width() === 0 && this.height() === 0) {
        this.size(img.width, img.height);
      }

      if (p instanceof Pattern) {
        // ensure pattern size if not set
        if (p.width() === 0 && p.height() === 0) {
          p.size(this.width(), this.height());
        }
      }

      if (typeof callback === 'function') {
        callback.call(this, e);
      }
    }, this);
    on(img, 'load error', function () {
      // dont forget to unbind memory leaking events
      off(img);
    });
    return this.attr('href', img.src = url, xlink);
  }

}
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }

  if (val instanceof svg_esm_Image) {
    val = _this.root().defs().pattern(0, 0, pattern => {
      pattern.add(val);
    });
  }

  return val;
});
registerMethods({
  Container: {
    // create image element, load image and set its size
    image: wrapWithAttrCheck(function (source, callback) {
      return this.put(new svg_esm_Image()).size(0, 0).load(source, callback);
    })
  }
});
register(svg_esm_Image, 'Image');

class PointArray extends SVGArray {
  // Get bounding box of points
  bbox() {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX);
      maxY = Math.max(el[1], maxY);
      minX = Math.min(el[0], minX);
      minY = Math.min(el[1], minY);
    });
    return new Box(minX, minY, maxX - minX, maxY - minY);
  } // Move point string


  move(x, y) {
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y; // move every point

    if (!isNaN(x) && !isNaN(y)) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i] = [this[i][0] + x, this[i][1] + y];
      }
    }

    return this;
  } // Parse point string and flat array


  parse(array = [0, 0]) {
    const points = []; // if it is an array, we flatten it and therefore clone it to 1 depths

    if (array instanceof Array) {
      array = Array.prototype.concat.apply([], array);
    } else {
      // Else, it is considered as a string
      // parse points
      array = array.trim().split(delimiter).map(parseFloat);
    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

    for (let i = 0, len = array.length; i < len; i = i + 2) {
      points.push([array[i], array[i + 1]]);
    }

    return points;
  } // Resize poly string


  size(width, height) {
    let i;
    const box = this.bbox(); // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  } // Convert array to line object


  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  } // Convert array to string


  toString() {
    const array = []; // convert to a poly point string

    for (let i = 0, il = this.length; i < il; i++) {
      array.push(this[i].join(','));
    }

    return array.join(' ');
  }

  transform(m) {
    return this.clone().transformO(m);
  } // transform points with matrix (similar to Point.transform)


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    for (let i = this.length; i--;) {
      // Perform the matrix multiplication
      const [x, y] = this[i];
      this[i][0] = m.a * x + m.c * y + m.e;
      this[i][1] = m.b * x + m.d * y + m.f;
    }

    return this;
  }

}

const MorphArray = PointArray; // Move by left top corner over x-axis

function x$2(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
} // Move by left top corner over y-axis

function y$2(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
} // Set width of element

function width$1(width) {
  const b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
} // Set height of element

function height$1(height) {
  const b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = {
  __proto__: null,
  MorphArray: MorphArray,
  x: x$2,
  y: y$2,
  width: width$1,
  height: height$1
};

class Line extends svg_esm_Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('line', node), attrs);
  } // Get array


  array() {
    return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
  } // Move by left top corner


  move(x, y) {
    return this.attr(this.array().move(x, y).toLine());
  } // Overwrite native plot() method


  plot(x1, y1, x2, y2) {
    if (x1 == null) {
      return this.array();
    } else if (typeof y1 !== 'undefined') {
      x1 = {
        x1,
        y1,
        x2,
        y2
      };
    } else {
      x1 = new PointArray(x1).toLine();
    }

    return this.attr(x1);
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr(this.array().size(p.width, p.height).toLine());
  }

}
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function (...args) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

class Marker extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('marker', node), attrs);
  } // Set height of element


  height(height) {
    return this.attr('markerHeight', height);
  }

  orient(orient) {
    return this.attr('orient', orient);
  } // Set marker refX and refY


  ref(x, y) {
    return this.attr('refX', x).attr('refY', y);
  } // Return the fill id


  toString() {
    return 'url(#' + this.id() + ')';
  } // Update marker


  update(block) {
    // remove all content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Set width of element


  width(width) {
    return this.attr('markerWidth', width);
  }

}
registerMethods({
  Container: {
    marker(...args) {
      // Create marker element in defs
      return this.defs().marker(...args);
    }

  },
  Defs: {
    // Create marker
    marker: wrapWithAttrCheck(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
    })
  },
  marker: {
    // Create and attach markers
    marker(marker, width, height, block) {
      let attr = ['marker']; // Build attribute name

      if (marker !== 'all') attr.push(marker);
      attr = attr.join('-'); // Set marker attribute

      marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, marker);
    }

  }
});
register(Marker, 'Marker');

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[k];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}

const easing = {
  '-': function (pos) {
    return pos;
  },
  '<>': function (pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function (pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function (pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function (x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t;
        } else if (x2 > 0) {
          return y2 / x2 * t;
        } else {
          return 0;
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
        } else {
          return 1;
        }
      } else {
        return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3;
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function (steps, stepPosition = 'end') {
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    let jumps = steps;

    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    } // The beforeFlag is essentially useless


    return (t, beforeFlag = false) => {
      // Step is called currentStep in referenced url
      let step = Math.floor(t * steps);
      const jumping = t * step % 1 === 0;

      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step;
      }

      if (beforeFlag && jumping) {
        --step;
      }

      if (t >= 0 && step < 0) {
        step = 0;
      }

      if (t <= 1 && step > jumps) {
        step = jumps;
      }

      return step / jumps;
    };
  }
};
class Stepper {
  done() {
    return false;
  }

}
/***
Easing Functions
================
***/

class Ease extends Stepper {
  constructor(fn = timeline.ease) {
    super();
    this.ease = easing[fn] || fn;
  }

  step(from, to, pos) {
    if (typeof from !== 'number') {
      return pos < 1 ? from : to;
    }

    return from + (to - from) * this.ease(pos);
  }

}
/***
Controller Types
================
***/

class Controller extends Stepper {
  constructor(fn) {
    super();
    this.stepper = fn;
  }

  done(c) {
    return c.done;
  }

  step(current, target, dt, c) {
    return this.stepper(current, target, dt, c);
  }

}

function recalculate() {
  // Apply the default parameters
  const duration = (this._duration || 500) / 1000;
  const overshoot = this._overshoot || 0; // Calculate the PID natural response

  const eps = 1e-10;
  const pi = Math.PI;
  const os = Math.log(overshoot / 100 + eps);
  const zeta = -os / Math.sqrt(pi * pi + os * os);
  const wn = 3.9 / (zeta * duration); // Calculate the Spring values

  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}

class Spring extends Controller {
  constructor(duration = 500, overshoot = 0) {
    super();
    this.duration(duration).overshoot(overshoot);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    if (dt > 100) dt = 16;
    dt /= 1000; // Get the previous velocity

    const velocity = c.velocity || 0; // Apply the control to get the new position and store it

    const acceleration = -this.d * velocity - this.k * (current - target);
    const newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

    c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

    c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
    return c.done ? target : newPosition;
  }

}
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
class PID extends Controller {
  constructor(p = 0.1, i = 0.01, d = 0, windup = 1000) {
    super();
    this.p(p).i(i).d(d).windup(windup);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    const p = target - current;
    let i = (c.integral || 0) + p * dt;
    const d = (p - (c.error || 0)) / dt;
    const windup = this._windup; // antiwindup

    if (windup !== false) {
      i = Math.max(-windup, Math.min(i, windup));
    }

    c.error = p;
    c.integral = i;
    c.done = Math.abs(p) < 0.001;
    return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
  }

}
extend(PID, {
  windup: makeSetterGetter('_windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

const segmentParameters = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
const pathHandlers = {
  M: function (c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function (c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function (c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function (c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function (c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function (c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
const mlhvqtcsaz = 'mlhvqtcsaz'.split('');

for (let i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (let j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i].toUpperCase());
}

function makeAbsolut(parser) {
  const command = parser.segment[0];
  return pathHandlers[command](parser.segment.slice(1), parser.p, parser.p0);
}

function segmentComplete(parser) {
  return parser.segment.length && parser.segment.length - 1 === segmentParameters[parser.segment[0].toUpperCase()];
}

function startNewSegment(parser, token) {
  parser.inNumber && finalizeNumber(parser, false);
  const pathLetter = isPathLetter.test(token);

  if (pathLetter) {
    parser.segment = [token];
  } else {
    const lastCommand = parser.lastCommand;
    const small = lastCommand.toLowerCase();
    const isSmall = lastCommand === small;
    parser.segment = [small === 'm' ? isSmall ? 'l' : 'L' : lastCommand];
  }

  parser.inSegment = true;
  parser.lastCommand = parser.segment[0];
  return pathLetter;
}

function finalizeNumber(parser, inNumber) {
  if (!parser.inNumber) throw new Error('Parser Error');
  parser.number && parser.segment.push(parseFloat(parser.number));
  parser.inNumber = inNumber;
  parser.number = '';
  parser.pointSeen = false;
  parser.hasExponent = false;

  if (segmentComplete(parser)) {
    finalizeSegment(parser);
  }
}

function finalizeSegment(parser) {
  parser.inSegment = false;

  if (parser.absolute) {
    parser.segment = makeAbsolut(parser);
  }

  parser.segments.push(parser.segment);
}

function isArcFlag(parser) {
  if (!parser.segment.length) return false;
  const isArc = parser.segment[0].toUpperCase() === 'A';
  const length = parser.segment.length;
  return isArc && (length === 4 || length === 5);
}

function isExponential(parser) {
  return parser.lastToken.toUpperCase() === 'E';
}

function pathParser(d, toAbsolute = true) {
  let index = 0;
  let token = '';
  const parser = {
    segment: [],
    inNumber: false,
    number: '',
    lastToken: '',
    inSegment: false,
    segments: [],
    pointSeen: false,
    hasExponent: false,
    absolute: toAbsolute,
    p0: new Point(),
    p: new Point()
  };

  while (parser.lastToken = token, token = d.charAt(index++)) {
    if (!parser.inSegment) {
      if (startNewSegment(parser, token)) {
        continue;
      }
    }

    if (token === '.') {
      if (parser.pointSeen || parser.hasExponent) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.inNumber = true;
      parser.pointSeen = true;
      parser.number += token;
      continue;
    }

    if (!isNaN(parseInt(token))) {
      if (parser.number === '0' || isArcFlag(parser)) {
        parser.inNumber = true;
        parser.number = token;
        finalizeNumber(parser, true);
        continue;
      }

      parser.inNumber = true;
      parser.number += token;
      continue;
    }

    if (token === ' ' || token === ',') {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      }

      continue;
    }

    if (token === '-') {
      if (parser.inNumber && !isExponential(parser)) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.number += token;
      parser.inNumber = true;
      continue;
    }

    if (token.toUpperCase() === 'E') {
      parser.number += token;
      parser.hasExponent = true;
      continue;
    }

    if (isPathLetter.test(token)) {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      } else if (!segmentComplete(parser)) {
        throw new Error('parser Error');
      } else {
        finalizeSegment(parser);
      }

      --index;
    }
  }

  if (parser.inNumber) {
    finalizeNumber(parser, false);
  }

  if (parser.inSegment && segmentComplete(parser)) {
    finalizeSegment(parser);
  }

  return parser.segments;
}

function arrayToString(a) {
  let s = '';

  for (let i = 0, il = a.length; i < il; i++) {
    s += a[i][0];

    if (a[i][1] != null) {
      s += a[i][1];

      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];

        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];

          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];

            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }

  return s + ' ';
}

class PathArray extends SVGArray {
  // Get bounding box of path
  bbox() {
    parser().path.setAttribute('d', this.toString());
    return new Box(parser.nodes.path.getBBox());
  } // Move path string


  move(x, y) {
    // get bounding box of current situation
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (let l, i = this.length - 1; i >= 0; i--) {
        l = this[i][0];

        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] += x;
          this[i][2] += y;
        } else if (l === 'H') {
          this[i][1] += x;
        } else if (l === 'V') {
          this[i][1] += y;
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] += x;
          this[i][2] += y;
          this[i][3] += x;
          this[i][4] += y;

          if (l === 'C') {
            this[i][5] += x;
            this[i][6] += y;
          }
        } else if (l === 'A') {
          this[i][6] += x;
          this[i][7] += y;
        }
      }
    }

    return this;
  } // Absolutize and parse path to array


  parse(d = 'M0 0') {
    if (Array.isArray(d)) {
      d = Array.prototype.concat.apply([], d).toString();
    }

    return pathParser(d);
  } // Resize path string


  size(width, height) {
    // get bounding box of current situation
    const box = this.bbox();
    let i, l; // If the box width or height is 0 then we ignore
    // transformations on the respective axis

    box.width = box.width === 0 ? 1 : box.width;
    box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      l = this[i][0];

      if (l === 'M' || l === 'L' || l === 'T') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
      } else if (l === 'H') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
      } else if (l === 'V') {
        this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
      } else if (l === 'C' || l === 'S' || l === 'Q') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
        this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
        this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;

        if (l === 'C') {
          this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
          this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
        }
      } else if (l === 'A') {
        // resize radii
        this[i][1] = this[i][1] * width / box.width;
        this[i][2] = this[i][2] * height / box.height; // move position values

        this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
        this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
      }
    }

    return this;
  } // Convert array to string


  toString() {
    return arrayToString(this);
  }

}

const getClassForType = value => {
  const type = typeof value;

  if (type === 'number') {
    return SVGNumber;
  } else if (type === 'string') {
    if (Color.isColor(value)) {
      return Color;
    } else if (delimiter.test(value)) {
      return isPathLetter.test(value) ? PathArray : SVGArray;
    } else if (numberAndUnit.test(value)) {
      return SVGNumber;
    } else {
      return NonMorphable;
    }
  } else if (morphableTypes.indexOf(value.constructor) > -1) {
    return value.constructor;
  } else if (Array.isArray(value)) {
    return SVGArray;
  } else if (type === 'object') {
    return ObjectBag;
  } else {
    return NonMorphable;
  }
};

class Morphable {
  constructor(stepper) {
    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }

  at(pos) {
    return this._morphObj.morph(this._from, this._to, pos, this._stepper, this._context);
  }

  done() {
    const complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
      return last && curr;
    }, true);

    return complete;
  }

  from(val) {
    if (val == null) {
      return this._from;
    }

    this._from = this._set(val);
    return this;
  }

  stepper(stepper) {
    if (stepper == null) return this._stepper;
    this._stepper = stepper;
    return this;
  }

  to(val) {
    if (val == null) {
      return this._to;
    }

    this._to = this._set(val);
    return this;
  }

  type(type) {
    // getter
    if (type == null) {
      return this._type;
    } // setter


    this._type = type;
    return this;
  }

  _set(value) {
    if (!this._type) {
      this.type(getClassForType(value));
    }

    let result = new this._type(value);

    if (this._type === Color) {
      result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
    }

    if (this._type === ObjectBag) {
      result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
    }

    result = result.toConsumable();
    this._morphObj = this._morphObj || new this._type();
    this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
      o.done = true;
      return o;
    });
    return result;
  }

}
class NonMorphable {
  constructor(...args) {
    this.init(...args);
  }

  init(val) {
    val = Array.isArray(val) ? val[0] : val;
    this.value = val;
    return this;
  }

  toArray() {
    return [this.value];
  }

  valueOf() {
    return this.value;
  }

}
class TransformBag {
  constructor(...args) {
    this.init(...args);
  }

  init(obj) {
    if (Array.isArray(obj)) {
      obj = {
        scaleX: obj[0],
        scaleY: obj[1],
        shear: obj[2],
        rotate: obj[3],
        translateX: obj[4],
        translateY: obj[5],
        originX: obj[6],
        originY: obj[7]
      };
    }

    Object.assign(this, TransformBag.defaults, obj);
    return this;
  }

  toArray() {
    const v = this;
    return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
  }

}
TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};

const sortByKey = (a, b) => {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};

class ObjectBag {
  constructor(...args) {
    this.init(...args);
  }

  align(other) {
    const values = this.values;

    for (let i = 0, il = values.length; i < il; ++i) {
      // If the type is the same we only need to check if the color is in the correct format
      if (values[i + 1] === other[i + 1]) {
        if (values[i + 1] === Color && other[i + 7] !== values[i + 7]) {
          const space = other[i + 7];
          const color = new Color(this.values.splice(i + 3, 5))[space]().toArray();
          this.values.splice(i + 3, 0, ...color);
        }

        i += values[i + 2] + 2;
        continue;
      }

      if (!other[i + 1]) {
        return this;
      } // The types differ, so we overwrite the new type with the old one
      // And initialize it with the types default (e.g. black for color or 0 for number)


      const defaultObject = new other[i + 1]().toArray(); // Than we fix the values array

      const toDelete = values[i + 2] + 3;
      values.splice(i, toDelete, other[i], other[i + 1], other[i + 2], ...defaultObject);
      i += values[i + 2] + 2;
    }

    return this;
  }

  init(objOrArr) {
    this.values = [];

    if (Array.isArray(objOrArr)) {
      this.values = objOrArr.slice();
      return;
    }

    objOrArr = objOrArr || {};
    const entries = [];

    for (const i in objOrArr) {
      const Type = getClassForType(objOrArr[i]);
      const val = new Type(objOrArr[i]).toArray();
      entries.push([i, Type, val.length, ...val]);
    }

    entries.sort(sortByKey);
    this.values = entries.reduce((last, curr) => last.concat(curr), []);
    return this;
  }

  toArray() {
    return this.values;
  }

  valueOf() {
    const obj = {};
    const arr = this.values; // for (var i = 0, len = arr.length; i < len; i += 2) {

    while (arr.length) {
      const key = arr.shift();
      const Type = arr.shift();
      const num = arr.shift();
      const values = arr.splice(0, num);
      obj[key] = new Type(values); // .valueOf()
    }

    return obj;
  }

}
const morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType(type = []) {
  morphableTypes.push(...[].concat(type));
}
function makeMorphable() {
  extend(morphableTypes, {
    to(val) {
      return new Morphable().type(this.constructor).from(this.toArray()) // this.valueOf())
      .to(val);
    },

    fromArray(arr) {
      this.init(arr);
      return this;
    },

    toConsumable() {
      return this.toArray();
    },

    morph(from, to, pos, stepper, context) {
      const mapper = function (i, index) {
        return stepper.step(i, to[index], pos, context[index], context);
      };

      return this.fromArray(from.map(mapper));
    }

  });
}

class Path extends svg_esm_Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('path', node), attrs);
  } // Get array


  array() {
    return this._array || (this._array = new PathArray(this.attr('d')));
  } // Clear array cache


  clear() {
    delete this._array;
    return this;
  } // Set height of element


  height(height) {
    return height == null ? this.bbox().height : this.size(this.bbox().width, height);
  } // Move by left top corner


  move(x, y) {
    return this.attr('d', this.array().move(x, y));
  } // Plot new path


  plot(d) {
    return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr('d', this.array().size(p.width, p.height));
  } // Set width of element


  width(width) {
    return width == null ? this.bbox().width : this.size(width, this.bbox().height);
  } // Move by left top corner over x-axis


  x(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y);
  } // Move by left top corner over y-axis


  y(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y);
  }

} // Define morphable array

Path.prototype.MorphArray = PathArray; // Add parent method

registerMethods({
  Container: {
    // Create a wrapped path element
    path: wrapWithAttrCheck(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new PathArray());
    })
  }
});
register(Path, 'Path');

function array() {
  return this._array || (this._array = new PointArray(this.attr('points')));
} // Clear array cache

function clear() {
  delete this._array;
  return this;
} // Move by left top corner

function move$2(x, y) {
  return this.attr('points', this.array().move(x, y));
} // Plot new path

function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
} // Set element size to given width and height

function size$1(width, height) {
  const p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = {
  __proto__: null,
  array: array,
  clear: clear,
  move: move$2,
  plot: plot,
  size: size$1
};

class Polygon extends svg_esm_Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polygon', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polygon: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new PointArray());
    })
  }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, 'Polygon');

class Polyline extends svg_esm_Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polyline', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray());
    })
  }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, 'Polyline');

class Rect extends svg_esm_Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('rect', node), attrs);
  }

}
extend(Rect, {
  rx,
  ry
});
registerMethods({
  Container: {
    // Create a rect element
    rect: wrapWithAttrCheck(function (width, height) {
      return this.put(new Rect()).size(width, height);
    })
  }
});
register(Rect, 'Rect');

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  } // Shows us the first item in the list


  first() {
    return this._first && this._first.value;
  } // Shows us the last item in the list


  last() {
    return this._last && this._last.value;
  }

  push(value) {
    // An item stores an id and the provided value
    const item = typeof value.next !== 'undefined' ? value : {
      value: value,
      next: null,
      prev: null
    }; // Deal with the queue being empty or populated

    if (this._last) {
      item.prev = this._last;
      this._last.next = item;
      this._last = item;
    } else {
      this._last = item;
      this._first = item;
    } // Return the current item


    return item;
  } // Removes the item that was returned from the push


  remove(item) {
    // Relink the previous item
    if (item.prev) item.prev.next = item.next;
    if (item.next) item.next.prev = item.prev;
    if (item === this._last) this._last = item.prev;
    if (item === this._first) this._first = item.next; // Invalidate item

    item.prev = null;
    item.next = null;
  }

  shift() {
    // Check if we have a value
    const remove = this._first;
    if (!remove) return null; // If we do, remove it and relink things

    this._first = remove.next;
    if (this._first) this._first.prev = null;
    this._last = this._first ? this._last : null;
    return remove.value;
  }

}

const Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: () => globals.window.performance || globals.window.Date,
  transforms: [],

  frame(fn) {
    // Store the node
    const node = Animator.frames.push({
      run: fn
    }); // Request an animation frame if we don't have one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    } // Return the node so we can remove it easily


    return node;
  },

  timeout(fn, delay) {
    delay = delay || 0; // Work out when the event should fire

    const time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

    const node = Animator.timeouts.push({
      run: fn,
      time: time
    }); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  immediate(fn) {
    // Add the immediate fn to the end of the queue
    const node = Animator.immediates.push(fn); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },

  clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },

  cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },

  _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    let nextTimeout = null;
    const lastTimeout = Animator.timeouts.last();

    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      } // If we hit the last item, we should stop shifting out more items


      if (nextTimeout === lastTimeout) break;
    } // Run all of the animation frames


    let nextFrame = null;
    const lastFrame = Animator.frames.last();

    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }

    let nextImmediate = null;

    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    } // If we have remaining timeouts or frames, draw until we don't anymore


    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }

};

const makeSchedule = function (runnerInfo) {
  const start = runnerInfo.start;
  const duration = runnerInfo.runner.duration();
  const end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};

const defaultSource = function () {
  const w = globals.window;
  return (w.performance || w.Date).now();
};

class Timeline extends EventTarget {
  // Construct a new timeline on the given element
  constructor(timeSource = defaultSource) {
    super();
    this._timeSource = timeSource; // Store the timing variables

    this._startTime = 0;
    this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

    this._persist = 0; // Keep track of the running animations and their starting parameters

    this._nextFrame = null;
    this._paused = true;
    this._runners = [];
    this._runnerIds = [];
    this._lastRunnerId = -1;
    this._time = 0;
    this._lastSourceTime = 0;
    this._lastStepTime = 0; // Make sure that step is always called in class context

    this._step = this._stepFn.bind(this, false);
    this._stepImmediate = this._stepFn.bind(this, true);
  }

  active() {
    return !!this._nextFrame;
  }

  finish() {
    // Go to end and pause
    this.time(this.getEndTimeOfTimeline() + 1);
    return this.pause();
  } // Calculates the end of the timeline


  getEndTime() {
    const lastRunnerInfo = this.getLastRunnerInfo();
    const lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
    const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
    return lastStartTime + lastDuration;
  }

  getEndTimeOfTimeline() {
    const endTimes = this._runners.map(i => i.start + i.runner.duration());

    return Math.max(0, ...endTimes);
  }

  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }

  getRunnerInfoById(id) {
    return this._runners[this._runnerIds.indexOf(id)] || null;
  }

  pause() {
    this._paused = true;
    return this._continue();
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  play() {
    // Now make sure we are not paused and continue the animation
    this._paused = false;
    return this.updateTime()._continue();
  }

  reverse(yes) {
    const currentSpeed = this.speed();
    if (yes == null) return this.speed(-currentSpeed);
    const positive = Math.abs(currentSpeed);
    return this.speed(yes ? -positive : positive);
  } // schedules a runner on the timeline


  schedule(runner, delay, when) {
    if (runner == null) {
      return this._runners.map(makeSchedule);
    } // The start time for the next animation can either be given explicitly,
    // derived from the current timeline time or it can be relative to the
    // last start time to chain animations directly


    let absoluteStartTime = 0;
    const endTime = this.getEndTime();
    delay = delay || 0; // Work out when to start the animation

    if (when == null || when === 'last' || when === 'after') {
      // Take the last time and increment
      absoluteStartTime = endTime;
    } else if (when === 'absolute' || when === 'start') {
      absoluteStartTime = delay;
      delay = 0;
    } else if (when === 'now') {
      absoluteStartTime = this._time;
    } else if (when === 'relative') {
      const runnerInfo = this.getRunnerInfoById(runner.id);

      if (runnerInfo) {
        absoluteStartTime = runnerInfo.start + delay;
        delay = 0;
      }
    } else if (when === 'with-last') {
      const lastRunnerInfo = this.getLastRunnerInfo();
      const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
      absoluteStartTime = lastStartTime;
    } else {
      throw new Error('Invalid value for the "when" parameter');
    } // Manage runner


    runner.unschedule();
    runner.timeline(this);
    const persist = runner.persist();
    const runnerInfo = {
      persist: persist === null ? this._persist : persist,
      start: absoluteStartTime + delay,
      runner
    };
    this._lastRunnerId = runner.id;

    this._runners.push(runnerInfo);

    this._runners.sort((a, b) => a.start - b.start);

    this._runnerIds = this._runners.map(info => info.runner.id);

    this.updateTime()._continue();

    return this;
  }

  seek(dt) {
    return this.time(this._time + dt);
  }

  source(fn) {
    if (fn == null) return this._timeSource;
    this._timeSource = fn;
    return this;
  }

  speed(speed) {
    if (speed == null) return this._speed;
    this._speed = speed;
    return this;
  }

  stop() {
    // Go to start and pause
    this.time(0);
    return this.pause();
  }

  time(time) {
    if (time == null) return this._time;
    this._time = time;
    return this._continue(true);
  } // Remove the runner from this timeline


  unschedule(runner) {
    const index = this._runnerIds.indexOf(runner.id);

    if (index < 0) return this;

    this._runners.splice(index, 1);

    this._runnerIds.splice(index, 1);

    runner.timeline(null);
    return this;
  } // Makes sure, that after pausing the time doesn't jump


  updateTime() {
    if (!this.active()) {
      this._lastSourceTime = this._timeSource();
    }

    return this;
  } // Checks if we are running and continues the animation


  _continue(immediateStep = false) {
    Animator.cancelFrame(this._nextFrame);
    this._nextFrame = null;
    if (immediateStep) return this._stepImmediate();
    if (this._paused) return this;
    this._nextFrame = Animator.frame(this._step);
    return this;
  }

  _stepFn(immediateStep = false) {
    // Get the time delta from the last time and update the time
    const time = this._timeSource();

    let dtSource = time - this._lastSourceTime;
    if (immediateStep) dtSource = 0;
    const dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
    this._lastSourceTime = time; // Only update the time if we use the timeSource.
    // Otherwise use the current time

    if (!immediateStep) {
      // Update the time
      this._time += dtTime;
      this._time = this._time < 0 ? 0 : this._time;
    }

    this._lastStepTime = this._time;
    this.fire('time', this._time); // This is for the case that the timeline was seeked so that the time
    // is now before the startTime of the runner. Thats why we need to set
    // the runner to position 0
    // FIXME:
    // However, reseting in insertion order leads to bugs. Considering the case,
    // where 2 runners change the same attribute but in different times,
    // reseting both of them will lead to the case where the later defined
    // runner always wins the reset even if the other runner started earlier
    // and therefore should win the attribute battle
    // this can be solved by reseting them backwards

    for (let k = this._runners.length; k--;) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[k];
      const runner = runnerInfo.runner; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
      // and try to reset it

      if (dtToStart <= 0) {
        runner.reset();
      }
    } // Run all of the runners directly


    let runnersLeft = false;

    for (let i = 0, len = this._runners.length; i < len; i++) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[i];
      const runner = runnerInfo.runner;
      let dt = dtTime; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet

      if (dtToStart <= 0) {
        runnersLeft = true;
        continue;
      } else if (dtToStart < dt) {
        // Adjust dt to make sure that animation is on point
        dt = dtToStart;
      }

      if (!runner.active()) continue; // If this runner is still going, signal that we need another animation
      // frame, otherwise, remove the completed runner

      const finished = runner.step(dt).done;

      if (!finished) {
        runnersLeft = true; // continue
      } else if (runnerInfo.persist !== true) {
        // runner is finished. And runner might get removed
        const endTime = runner.duration() - runner.time() + this._time;

        if (endTime + runnerInfo.persist < this._time) {
          // Delete runner and correct index
          runner.unschedule();
          --i;
          --len;
        }
      }
    } // Basically: we continue when there are runners right from us in time
    // when -->, and when runners are left from us when <--


    if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
      this._continue();
    } else {
      this.pause();
      this.fire('finished');
    }

    return this;
  }

}
registerMethods({
  Element: {
    timeline: function (timeline) {
      if (timeline == null) {
        this._timeline = this._timeline || new Timeline();
        return this._timeline;
      } else {
        this._timeline = timeline;
        return this;
      }
    }
  }
});

class Runner extends EventTarget {
  constructor(options) {
    super(); // Store a unique id on the runner, so that we can identify it later

    this.id = Runner.id++; // Ensure a default value

    options = options == null ? timeline.duration : options; // Ensure that we get a controller

    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

    this._element = null;
    this._timeline = null;
    this.done = false;
    this._queue = []; // Work out the stepper and the duration

    this._duration = typeof options === 'number' && options;
    this._isDeclarative = options instanceof Controller;
    this._stepper = this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

    this._history = {}; // Store the state of the runner

    this.enabled = true;
    this._time = 0;
    this._lastTime = 0; // At creation, the runner is in reseted state

    this._reseted = true; // Save transforms applied to this runner

    this.transforms = new Matrix();
    this.transformId = 1; // Looping variables

    this._haveReversed = false;
    this._reverse = false;
    this._loopsDone = 0;
    this._swing = false;
    this._wait = 0;
    this._times = 1;
    this._frameId = null; // Stores how long a runner is stored after beeing done

    this._persist = this._isDeclarative ? true : null;
  }

  static sanitise(duration, delay, when) {
    // Initialise the default parameters
    let times = 1;
    let swing = false;
    let wait = 0;
    duration = duration || timeline.duration;
    delay = delay || timeline.delay;
    when = when || 'last'; // If we have an object, unpack the values

    if (typeof duration === 'object' && !(duration instanceof Stepper)) {
      delay = duration.delay || delay;
      when = duration.when || when;
      swing = duration.swing || swing;
      times = duration.times || times;
      wait = duration.wait || wait;
      duration = duration.duration || timeline.duration;
    }

    return {
      duration: duration,
      delay: delay,
      swing: swing,
      times: times,
      wait: wait,
      when: when
    };
  }

  active(enabled) {
    if (enabled == null) return this.enabled;
    this.enabled = enabled;
    return this;
  }
  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */


  addTransform(transform, index) {
    this.transforms.lmultiplyO(transform);
    return this;
  }

  after(fn) {
    return this.on('finished', fn);
  }

  animate(duration, delay, when) {
    const o = Runner.sanitise(duration, delay, when);
    const runner = new Runner(o.duration);
    if (this._timeline) runner.timeline(this._timeline);
    if (this._element) runner.element(this._element);
    return runner.loop(o).schedule(o.delay, o.when);
  }

  clearTransform() {
    this.transforms = new Matrix();
    return this;
  } // TODO: Keep track of all transformations so that deletion is faster


  clearTransformsFromQueue() {
    if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
      this._queue = this._queue.filter(item => {
        return !item.isTransform;
      });
    }
  }

  delay(delay) {
    return this.animate(0, delay);
  }

  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }

  during(fn) {
    return this.queue(null, fn);
  }

  ease(fn) {
    this._stepper = new Ease(fn);
    return this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */


  element(element) {
    if (element == null) return this._element;
    this._element = element;

    element._prepareRunner();

    return this;
  }

  finish() {
    return this.step(Infinity);
  }

  loop(times, swing, wait) {
    // Deal with the user passing in an object
    if (typeof times === 'object') {
      swing = times.swing;
      wait = times.wait;
      times = times.times;
    } // Sanitise the values and store them


    this._times = times || Infinity;
    this._swing = swing || false;
    this._wait = wait || 0; // Allow true to be passed

    if (this._times === true) {
      this._times = Infinity;
    }

    return this;
  }

  loops(p) {
    const loopDuration = this._duration + this._wait;

    if (p == null) {
      const loopsDone = Math.floor(this._time / loopDuration);
      const relativeTime = this._time - loopsDone * loopDuration;
      const position = relativeTime / this._duration;
      return Math.min(loopsDone + position, this._times);
    }

    const whole = Math.floor(p);
    const partial = p % 1;
    const time = loopDuration * whole + this._duration * partial;
    return this.time(time);
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  position(p) {
    // Get all of the variables we need
    const x = this._time;
    const d = this._duration;
    const w = this._wait;
    const t = this._times;
    const s = this._swing;
    const r = this._reverse;
    let position;

    if (p == null) {
      /*
      This function converts a time to a position in the range [0, 1]
      The full explanation can be found in this desmos demonstration
        https://www.desmos.com/calculator/u4fbavgche
      The logic is slightly simplified here because we can use booleans
      */
      // Figure out the value without thinking about the start or end time
      const f = function (x) {
        const swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
        const backwards = swinging && !r || !swinging && r;
        const uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
        const clipped = Math.max(Math.min(uncliped, 1), 0);
        return clipped;
      }; // Figure out the value by incorporating the start time


      const endTime = t * (w + d) - w;
      position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
      return position;
    } // Work out the loops done and add the position to the loops done


    const loopsDone = Math.floor(this.loops());
    const swingForward = s && loopsDone % 2 === 0;
    const forwards = swingForward && !r || r && swingForward;
    position = loopsDone + (forwards ? p : 1 - p);
    return this.loops(position);
  }

  progress(p) {
    if (p == null) {
      return Math.min(1, this._time / this.duration());
    }

    return this.time(p * this.duration());
  }
  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */


  queue(initFn, runFn, retargetFn, isTransform) {
    this._queue.push({
      initialiser: initFn || noop,
      runner: runFn || noop,
      retarget: retargetFn,
      isTransform: isTransform,
      initialised: false,
      finished: false
    });

    const timeline = this.timeline();
    timeline && this.timeline()._continue();
    return this;
  }

  reset() {
    if (this._reseted) return this;
    this.time(0);
    this._reseted = true;
    return this;
  }

  reverse(reverse) {
    this._reverse = reverse == null ? !this._reverse : reverse;
    return this;
  }

  schedule(timeline, delay, when) {
    // The user doesn't need to pass a timeline if we already have one
    if (!(timeline instanceof Timeline)) {
      when = delay;
      delay = timeline;
      timeline = this.timeline();
    } // If there is no timeline, yell at the user...


    if (!timeline) {
      throw Error('Runner cannot be scheduled without timeline');
    } // Schedule the runner on the timeline provided


    timeline.schedule(this, delay, when);
    return this;
  }

  step(dt) {
    // If we are inactive, this stepper just gets skipped
    if (!this.enabled) return this; // Update the time and get the new position

    dt = dt == null ? 16 : dt;
    this._time += dt;
    const position = this.position(); // Figure out if we need to run the stepper in this frame

    const running = this._lastPosition !== position && this._time >= 0;
    this._lastPosition = position; // Figure out if we just started

    const duration = this.duration();
    const justStarted = this._lastTime <= 0 && this._time > 0;
    const justFinished = this._lastTime < duration && this._time >= duration;
    this._lastTime = this._time;

    if (justStarted) {
      this.fire('start', this);
    } // Work out if the runner is finished set the done flag here so animations
    // know, that they are running in the last step (this is good for
    // transformations which can be merged)


    const declarative = this._isDeclarative;
    this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore

    this._reseted = false;
    let converged = false; // Call initialise and the run function

    if (running || declarative) {
      this._initialise(running); // clear the transforms on this runner so they dont get added again and again


      this.transforms = new Matrix();
      converged = this._run(declarative ? dt : position);
      this.fire('step', this);
    } // correct the done flag here
    // declaritive animations itself know when they converged


    this.done = this.done || converged && declarative;

    if (justFinished) {
      this.fire('finished', this);
    }

    return this;
  }
  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */


  time(time) {
    if (time == null) {
      return this._time;
    }

    const dt = time - this._time;
    this.step(dt);
    return this;
  }

  timeline(timeline) {
    // check explicitly for undefined so we can set the timeline to null
    if (typeof timeline === 'undefined') return this._timeline;
    this._timeline = timeline;
    return this;
  }

  unschedule() {
    const timeline = this.timeline();
    timeline && timeline.unschedule(this);
    return this;
  } // Run each initialise function in the runner if required


  _initialise(running) {
    // If we aren't running, we shouldn't initialise when not declarative
    if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current initialiser
      const current = this._queue[i]; // Determine whether we need to initialise

      const needsIt = this._isDeclarative || !current.initialised && running;
      running = !current.finished; // Call the initialiser if we need to

      if (needsIt && running) {
        current.initialiser.call(this);
        current.initialised = true;
      }
    }
  } // Save a morpher to the morpher list so that we can retarget it later


  _rememberMorpher(method, morpher) {
    this._history[method] = {
      morpher: morpher,
      caller: this._queue[this._queue.length - 1]
    }; // We have to resume the timeline in case a controller
    // is already done without being ever run
    // This can happen when e.g. this is done:
    //    anim = el.animate(new SVG.Spring)
    // and later
    //    anim.move(...)

    if (this._isDeclarative) {
      const timeline = this.timeline();
      timeline && timeline.play();
    }
  } // Try to set the target for a morpher if the morpher exists, otherwise
  // Run each run function for the position or dt given


  _run(positionOrDt) {
    // Run all of the _queue directly
    let allfinished = true;

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current function to run
      const current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
      // flag for the sake of declarative _queue

      const converged = current.runner.call(this, positionOrDt);
      current.finished = current.finished || converged === true;
      allfinished = allfinished && current.finished;
    } // We report when all of the constructors are finished


    return allfinished;
  } // do nothing and return false


  _tryRetarget(method, target, extra) {
    if (this._history[method]) {
      // if the last method wasnt even initialised, throw it away
      if (!this._history[method].caller.initialised) {
        const index = this._queue.indexOf(this._history[method].caller);

        this._queue.splice(index, 1);

        return false;
      } // for the case of transformations, we use the special retarget function
      // which has access to the outer scope


      if (this._history[method].caller.retarget) {
        this._history[method].caller.retarget.call(this, target, extra); // for everything else a simple morpher change is sufficient

      } else {
        this._history[method].morpher.to(target);
      }

      this._history[method].caller.finished = false;
      const timeline = this.timeline();
      timeline && timeline.play();
      return true;
    }

    return false;
  }

}
Runner.id = 0;
class FakeRunner {
  constructor(transforms = new Matrix(), id = -1, done = true) {
    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }

  clearTransformsFromQueue() {}

}
extend([Runner, FakeRunner], {
  mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }

}); // FakeRunner.emptyRunner = new FakeRunner()

const lmultiply = (last, curr) => last.lmultiplyO(curr);

const getRunnerTransform = runner => runner.transforms;

function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  const runners = this._transformationRunners.runners;
  const netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);

  this._transformationRunners.merge();

  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}

class RunnerArray {
  constructor() {
    this.runners = [];
    this.ids = [];
  }

  add(runner) {
    if (this.runners.includes(runner)) return;
    const id = runner.id + 1;
    this.runners.push(runner);
    this.ids.push(id);
    return this;
  }

  clearBefore(id) {
    const deleteCnt = this.ids.indexOf(id + 1) || 1;
    this.ids.splice(0, deleteCnt, 0);
    this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(r => r.clearTransformsFromQueue());
    return this;
  }

  edit(id, newRunner) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1, id + 1);
    this.runners.splice(index, 1, newRunner);
    return this;
  }

  getByID(id) {
    return this.runners[this.ids.indexOf(id + 1)];
  }

  length() {
    return this.ids.length;
  }

  merge() {
    let lastRunner = null;

    for (let i = 0; i < this.runners.length; ++i) {
      const runner = this.runners[i];
      const condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
      && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

      if (condition) {
        // the +1 happens in the function
        this.remove(runner.id);
        const newRunner = runner.mergeWith(lastRunner);
        this.edit(lastRunner.id, newRunner);
        lastRunner = newRunner;
        --i;
      } else {
        lastRunner = runner;
      }
    }

    return this;
  }

  remove(id) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1);
    this.runners.splice(index, 1);
    return this;
  }

}
registerMethods({
  Element: {
    animate(duration, delay, when) {
      const o = Runner.sanitise(duration, delay, when);
      const timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },

    delay(by, when) {
      return this.animate(0, by, when);
    },

    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwfrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },

    _currentTransform(current) {
      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(runner => runner.id <= current.id).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },

    _addRunner(runner) {
      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
      // all Animator functions. Thats why we use immediate here to execute
      // the merge right after all frames are run


      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },

    _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }

  }
}); // Will output the elements from array A that are not in the array B

const difference = (a, b) => a.filter(x => !b.includes(x));

extend(Runner, {
  attr(a, v) {
    return this.styleAttr('attr', a, v);
  },

  // Add animatable styles
  css(s, v) {
    return this.styleAttr('css', s, v);
  },

  styleAttr(type, nameOrAttrs, val) {
    if (typeof nameOrAttrs === 'string') {
      return this.styleAttr(type, {
        [nameOrAttrs]: val
      });
    }

    let attrs = nameOrAttrs;
    if (this._tryRetarget(type, attrs)) return this;
    let morpher = new Morphable(this._stepper).to(attrs);
    let keys = Object.keys(attrs);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](keys));
    }, function (pos) {
      this.element()[type](morpher.at(pos).valueOf());
      return morpher.done();
    }, function (newToAttrs) {
      // Check if any new keys were added
      const newKeys = Object.keys(newToAttrs);
      const differences = difference(newKeys, keys); // If their are new keys, initialize them and add them to morpher

      if (differences.length) {
        // Get the values
        const addedFromAttrs = this.element()[type](differences); // Get the already initialized values

        const oldFromAttrs = new ObjectBag(morpher.from()).valueOf(); // Merge old and new

        Object.assign(oldFromAttrs, addedFromAttrs);
        morpher.from(oldFromAttrs);
      } // Get the object from the morpher


      const oldToAttrs = new ObjectBag(morpher.to()).valueOf(); // Merge in new attributes

      Object.assign(oldToAttrs, newToAttrs); // Change morpher target

      morpher.to(oldToAttrs); // Make sure that we save the work we did so we don't need it to do again

      keys = newKeys;
      attrs = newToAttrs;
    });

    this._rememberMorpher(type, morpher);

    return this;
  },

  zoom(level, point) {
    if (this._tryRetarget('zoom', level, point)) return this;
    let morpher = new Morphable(this._stepper).to(new SVGNumber(level));
    this.queue(function () {
      morpher = morpher.from(this.element().zoom());
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point);
      return morpher.done();
    }, function (newLevel, newPoint) {
      point = newPoint;
      morpher.to(newLevel);
    });

    this._rememberMorpher('zoom', morpher);

    return this;
  },

  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;

    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    } // Parse the parameters


    const isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type

    const morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    let origin;
    let element;
    let current;
    let currentAngle;
    let startTransform;

    function setup() {
      // make sure element and origin is defined
      element = element || this.element();
      origin = origin || getOrigin(transforms, element);
      startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations

      element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute


      if (!relative) {
        element._clearTransformRunnersBefore(this);
      }
    }

    function run(pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform();
      const {
        x,
        y
      } = new Point(origin).transform(element._currentTransform(this));
      let target = new Matrix({ ...transforms,
        origin: [x, y]
      });
      let start = this._isDeclarative && current ? current : startTransform;

      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y); // Get the current and target angle as it was set

        const rTarget = target.rotate;
        const rCurrent = start.rotate; // Figure out the shortest path to rotate directly

        const possibilities = [rTarget - 360, rTarget, rTarget + 360];
        const distances = possibilities.map(a => Math.abs(a - rCurrent));
        const shortest = Math.min(...distances);
        const index = distances.indexOf(shortest);
        target.rotate = possibilities[index];
      }

      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0;
        }

        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle;
        }
      }

      morpher.from(start);
      morpher.to(target);
      const affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);

      element._addRunner(this);

      return morpher.done();
    }

    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(newTransforms, element);
      } // overwrite the old transformations with the new ones


      transforms = { ...newTransforms,
        origin
      };
    }

    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },

  // Animatable x-axis
  x(x, relative) {
    return this._queueNumber('x', x);
  },

  // Animatable y-axis
  y(y) {
    return this._queueNumber('y', y);
  },

  dx(x = 0) {
    return this._queueNumberDelta('x', x);
  },

  dy(y = 0) {
    return this._queueNumberDelta('y', y);
  },

  dmove(x, y) {
    return this.dx(x).dy(y);
  },

  _queueNumberDelta(method, to) {
    to = new SVGNumber(to); // Try to change the target if we have this method already registerd

    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    let from = null;
    this.queue(function () {
      from = this.element()[method]();
      morpher.from(from);
      morpher.to(from + to);
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }, function (newTo) {
      morpher.to(from + new SVGNumber(newTo));
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueObject(method, to) {
    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },

  // Animatable center x-axis
  cx(x) {
    return this._queueNumber('cx', x);
  },

  // Animatable center y-axis
  cy(y) {
    return this._queueNumber('cy', y);
  },

  // Add animatable move
  move(x, y) {
    return this.x(x).y(y);
  },

  // Add animatable center
  center(x, y) {
    return this.cx(x).cy(y);
  },

  // Add animatable size
  size(width, height) {
    // animate bbox based size for all other elements
    let box;

    if (!width || !height) {
      box = this._element.bbox();
    }

    if (!width) {
      width = box.width / box.height * height;
    }

    if (!height) {
      height = box.height / box.width * width;
    }

    return this.width(width).height(height);
  },

  // Add animatable width
  width(width) {
    return this._queueNumber('width', width);
  },

  // Add animatable height
  height(height) {
    return this._queueNumber('height', height);
  },

  // Add animatable plot
  plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }

    if (this._tryRetarget('plot', a)) return this;
    const morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
    this.queue(function () {
      morpher.from(this._element.array());
    }, function (pos) {
      this._element.plot(morpher.at(pos));

      return morpher.done();
    });

    this._rememberMorpher('plot', morpher);

    return this;
  },

  // Add leading method
  leading(value) {
    return this._queueNumber('leading', value);
  },

  // Add animatable viewbox
  viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },

  update(o) {
    if (typeof o !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      });
    }

    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', o.offset);
    return this;
  }

});
extend(Runner, {
  rx,
  ry,
  from,
  to
});
register(Runner, 'Runner');

class Svg extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('svg', node), attrs);
    this.namespace();
  } // Creates and returns defs element


  defs() {
    if (!this.isRoot()) return this.root().defs();
    return adopt(this.node.querySelector('defs')) || this.put(new Defs());
  }

  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== '#document-fragment';
  } // Add namespaces


  namespace() {
    if (!this.isRoot()) return this.root().namespace();
    return this.attr({
      xmlns: svg_esm_svg,
      version: '1.1'
    }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
  }

  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr('xmlns:xlink', null, xmlns).attr('xmlns:svgjs', null, xmlns);
  } // Check if this is a root svg
  // If not, call root() from this element


  root() {
    if (this.isRoot()) return this;
    return super.root();
  }

}
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

class Symbol extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('symbol', node), attrs);
  }

}
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new Symbol());
    })
  }
});
register(Symbol, 'Symbol');

function plain(text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear();
  } // create text node


  this.node.appendChild(globals.document.createTextNode(text));
  return this;
} // Get length of text element

function svg_esm_length() {
  return this.node.getComputedTextLength();
} // Move over x-axis
// Text is moved by its bounding box
// text-anchor does NOT matter

function x$1(x, box = this.bbox()) {
  if (x == null) {
    return box.x;
  }

  return this.attr('x', this.attr('x') + x - box.x);
} // Move over y-axis

function y$1(y, box = this.bbox()) {
  if (y == null) {
    return box.y;
  }

  return this.attr('y', this.attr('y') + y - box.y);
}
function move$1(x, y, box = this.bbox()) {
  return this.x(x, box).y(y, box);
} // Move center over x-axis

function cx(x, box = this.bbox()) {
  if (x == null) {
    return box.cx;
  }

  return this.attr('x', this.attr('x') + x - box.cx);
} // Move center over y-axis

function cy(y, box = this.bbox()) {
  if (y == null) {
    return box.cy;
  }

  return this.attr('y', this.attr('y') + y - box.cy);
}
function center(x, y, box = this.bbox()) {
  return this.cx(x, box).cy(y, box);
}
function ax(x) {
  return this.attr('x', x);
}
function ay(y) {
  return this.attr('y', y);
}
function amove(x, y) {
  return this.ax(x).ay(y);
} // Enable / disable build mode

function build(build) {
  this._build = !!build;
  return this;
}

var textable = {
  __proto__: null,
  plain: plain,
  length: svg_esm_length,
  x: x$1,
  y: y$1,
  move: move$1,
  cx: cx,
  cy: cy,
  center: center,
  ax: ax,
  ay: ay,
  amove: amove,
  build: build
};

class Text extends svg_esm_Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('text', node), attrs);
    this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

    this._rebuild = true; // enable automatic updating of dy values

    this._build = false; // disable build mode for adding multiple lines
  } // Set / get leading


  leading(value) {
    // act as getter
    if (value == null) {
      return this.dom.leading;
    } // act as setter


    this.dom.leading = new SVGNumber(value);
    return this.rebuild();
  } // Rebuild appearance type


  rebuild(rebuild) {
    // store new rebuild flag if given
    if (typeof rebuild === 'boolean') {
      this._rebuild = rebuild;
    } // define position of all lines


    if (this._rebuild) {
      const self = this;
      let blankLineOffset = 0;
      const leading = this.dom.leading;
      this.each(function (i) {
        const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
        const dy = leading * new SVGNumber(fontSize);

        if (this.dom.newLined) {
          this.attr('x', self.attr('x'));

          if (this.text() === '\n') {
            blankLineOffset += dy;
          } else {
            this.attr('dy', i ? dy + blankLineOffset : 0);
            blankLineOffset = 0;
          }
        }
      });
      this.fire('rebuild');
    }

    return this;
  } // overwrite method from parent to set data properly


  setData(o) {
    this.dom = o;
    this.dom.leading = new SVGNumber(o.leading || 1.3);
    return this;
  } // Set the text content


  text(text) {
    // act as getter
    if (text === undefined) {
      const children = this.node.childNodes;
      let firstLine = 0;
      text = '';

      for (let i = 0, len = children.length; i < len; ++i) {
        // skip textPaths - they are no lines
        if (children[i].nodeName === 'textPath') {
          if (i === 0) firstLine = 1;
          continue;
        } // add newline if its not the first child and newLined is set to true


        if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
          text += '\n';
        } // add content of this node


        text += children[i].textContent;
      }

      return text;
    } // remove existing content


    this.clear().build(true);

    if (typeof text === 'function') {
      // call block
      text.call(this, this);
    } else {
      // store text and make sure text is not blank
      text = (text + '').split('\n'); // build new lines

      for (let j = 0, jl = text.length; j < jl; j++) {
        this.newLine(text[j]);
      }
    } // disable build mode and rebuild lines


    return this.build(false).rebuild();
  }

}
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

class Tspan extends svg_esm_Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('tspan', node), attrs);
    this._build = false; // disable build mode for adding multiple lines
  } // Shortcut dx


  dx(dx) {
    return this.attr('dx', dx);
  } // Shortcut dy


  dy(dy) {
    return this.attr('dy', dy);
  } // Create new line


  newLine() {
    // mark new line
    this.dom.newLined = true; // fetch parent

    const text = this.parent(); // early return in case we are not in a text element

    if (!(text instanceof Text)) {
      return this;
    }

    const i = text.index(this);
    const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
    const dy = text.dom.leading * new SVGNumber(fontSize); // apply new position

    return this.dy(i ? dy : 0).attr('x', text.x());
  } // Set text content


  text(text) {
    if (text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');

    if (typeof text === 'function') {
      this.clear().build(true);
      text.call(this, this);
      this.build(false);
    } else {
      this.plain(text);
    }

    return this;
  }

}
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function (text = '') {
      const tspan = new Tspan(); // clear if build mode is disabled

      if (!this._build) {
        this.clear();
      } // add new tspan


      return this.put(tspan).text(text);
    })
  },
  Text: {
    newLine: function (text = '') {
      return this.tspan(text).newLine();
    }
  }
});
register(Tspan, 'Tspan');

class Circle extends svg_esm_Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('circle', node), attrs);
  }

  radius(r) {
    return this.attr('r', r);
  } // Radius x value


  rx(rx) {
    return this.attr('r', rx);
  } // Alias radius x value


  ry(ry) {
    return this.rx(ry);
  }

  size(size) {
    return this.radius(new SVGNumber(size).divide(2));
  }

}
extend(Circle, {
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function (size = 0) {
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

class ClipPath extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('clipPath', node), attrs);
  } // Unclip all clipped elements and remove itself


  remove() {
    // unclip all targets
    this.targets().forEach(function (el) {
      el.unclip();
    }); // remove clipPath from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [clip-path*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper() {
      return this.reference('clip-path');
    },

    clipWith(element) {
      // use given clip or create a new one
      const clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

      return this.attr('clip-path', 'url("#' + clipper.id() + '")');
    },

    // Unclip element
    unclip() {
      return this.attr('clip-path', null);
    }

  }
});
register(ClipPath, 'ClipPath');

class ForeignObject extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('foreignObject', node), attrs);
  }

}
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

function dmove(dx, dy) {
  this.children().forEach((child, i) => {
    let bbox; // We have to wrap this for elements that dont have a bbox
    // e.g. title and other descriptive elements

    try {
      // Get the childs bbox
      bbox = child.bbox();
    } catch (e) {
      return;
    } // Get childs matrix


    const m = new Matrix(child); // Translate childs matrix by amount and
    // transform it back into parents space

    const matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

    const p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

    child.move(p.x, p.y);
  });
  return this;
}
function dx(dx) {
  return this.dmove(dx, 0);
}
function dy(dy) {
  return this.dmove(0, dy);
}
function svg_esm_height(height, box = this.bbox()) {
  if (height == null) return box.height;
  return this.size(box.width, height, box);
}
function move(x = 0, y = 0, box = this.bbox()) {
  const dx = x - box.x;
  const dy = y - box.y;
  return this.dmove(dx, dy);
}
function size(width, height, box = this.bbox()) {
  const p = proportionalSize(this, width, height, box);
  const scaleX = p.width / box.width;
  const scaleY = p.height / box.height;
  this.children().forEach((child, i) => {
    const o = new Point(box).transform(new Matrix(child).inverse());
    child.scale(scaleX, scaleY, o.x, o.y);
  });
  return this;
}
function svg_esm_width(width, box = this.bbox()) {
  if (width == null) return box.width;
  return this.size(width, box.height, box);
}
function x(x, box = this.bbox()) {
  if (x == null) return box.x;
  return this.move(x, box.y, box);
}
function y(y, box = this.bbox()) {
  if (y == null) return box.y;
  return this.move(box.x, y, box);
}

var containerGeometry = {
  __proto__: null,
  dmove: dmove,
  dx: dx,
  dy: dy,
  height: svg_esm_height,
  move: move,
  size: size,
  width: svg_esm_width,
  x: x,
  y: y
};

class G extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('g', node), attrs);
  }

}
extend(G, containerGeometry);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

class A extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('a', node), attrs);
  } // Link target attribute


  target(target) {
    return this.attr('target', target);
  } // Link url


  to(url) {
    return this.attr('href', url, xlink);
  }

}
extend(A, containerGeometry);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    unlink() {
      const link = this.linker();
      if (!link) return this;
      const parent = link.parent();

      if (!parent) {
        return this.remove();
      }

      const index = parent.index(link);
      parent.add(this, index);
      link.remove();
      return this;
    },

    linkTo(url) {
      // reuse old link if possible
      let link = this.linker();

      if (!link) {
        link = new A();
        this.wrap(link);
      }

      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }

      return this;
    },

    linker() {
      const link = this.parent();

      if (link && link.node.nodeName.toLowerCase() === 'a') {
        return link;
      }

      return null;
    }

  }
});
register(A, 'A');

class Mask extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('mask', node), attrs);
  } // Unmask all masked elements and remove itself


  remove() {
    // unmask all targets
    this.targets().forEach(function (el) {
      el.unmask();
    }); // remove mask from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [mask*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker() {
      return this.reference('mask');
    },

    maskWith(element) {
      // use given mask or create a new one
      const masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

      return this.attr('mask', 'url("#' + masker.id() + '")');
    },

    // Unmask element
    unmask() {
      return this.attr('mask', null);
    }

  }
});
register(Mask, 'Mask');

class Stop extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('stop', node), attrs);
  } // add color stops


  update(o) {
    if (typeof o === 'number' || o instanceof SVGNumber) {
      o = {
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      };
    } // set attributes


    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
    return this;
  }

}
registerMethods({
  Gradient: {
    // Add a color stop
    stop: function (offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    }
  }
});
register(Stop, 'Stop');

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  let ret = selector + '{';

  for (const i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }

  ret += '}';
  return ret;
}

class svg_esm_Style extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('style', node), attrs);
  }

  addText(w = '') {
    this.node.textContent += w;
    return this;
  }

  font(name, src, params = {}) {
    return this.rule('@font-face', {
      fontFamily: name,
      src: src,
      ...params
    });
  }

  rule(selector, obj) {
    return this.addText(cssRule(selector, obj));
  }

}
registerMethods('Dom', {
  style(selector, obj) {
    return this.put(new svg_esm_Style()).rule(selector, obj);
  },

  fontface(name, src, params) {
    return this.put(new svg_esm_Style()).font(name, src, params);
  }

});
register(svg_esm_Style, 'Style');

class TextPath extends Text {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('textPath', node), attrs);
  } // return the array of the path track element


  array() {
    const track = this.track();
    return track ? track.array() : null;
  } // Plot path if any


  plot(d) {
    const track = this.track();
    let pathArray = null;

    if (track) {
      pathArray = track.plot(d);
    }

    return d == null ? pathArray : this;
  } // Get the path element


  track() {
    return this.reference('href');
  }

}
registerMethods({
  Container: {
    textPath: wrapWithAttrCheck(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = this.text(text);
      }

      return text.path(path);
    })
  },
  Text: {
    // Create path for text to run on
    path: wrapWithAttrCheck(function (track, importNodes = true) {
      const textPath = new TextPath(); // if track is a path, reuse it

      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      } // link textPath to path and add content


      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

      let node;

      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      } // add textPath element as child node and return textPath


      return this.put(textPath);
    }),

    // Get the textPath children
    textPath() {
      return this.findOne('textPath');
    }

  },
  Path: {
    // creates a textPath from this path
    text: wrapWithAttrCheck(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = new Text().addTo(this.parent()).text(text);
      } // Create textPath from text and path and return


      return text.path(this);
    }),

    targets() {
      return baseFind('svg textPath').filter(node => {
        return (node.attr('href') || '').includes(this.id());
      }); // Does not work in IE11. Use when IE support is dropped
      // return baseFind('svg textPath[*|href*="' + this.id() + '"]')
    }

  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

class Use extends svg_esm_Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('use', node), attrs);
  } // Use element as a reference


  use(element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + element, xlink);
  }

}
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).use(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
const SVG = makeInstance;
extend([Svg, Symbol, svg_esm_Image, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Gradient, Runner], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(svg_esm_Shape, getMethodsFor('Shape'));
extend([Container, Fragment], getMethodsFor('Container'));
extend(Gradient, getMethodsFor('Gradient'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray, Point]);
makeMorphable();


//# sourceMappingURL=svg.esm.js.map

// CONCATENATED MODULE: ../simple-mind-map/src/svg/btns.js
/** 
 * @Author: 王林 
 * @Date: 2021-04-11 19:46:10 
 * @Desc: 展开按钮 
 */
const btns_open = `<svg t="1618141562310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13476" width="200" height="200"><path d="M475.136 327.168v147.968h-147.968v74.24h147.968v147.968h74.24v-147.968h147.968v-74.24h-147.968v-147.968h-74.24z m36.864-222.208c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13477"></path></svg>`;
/** 
 * @Author: 王林 
 * @Date: 2021-04-11 19:46:23 
 * @Desc: 收缩按钮 
 */

const btns_close = `<svg t="1618141589243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13611" width="200" height="200"><path d="M512 105.472c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13612"></path><path d="M252.928 474.624h518.144v74.24h-518.144z" p-id="13613"></path></svg>`;
/* harmony default export */ var btns = ({
  open: btns_open,
  close: btns_close
});
// CONCATENATED MODULE: ../simple-mind-map/src/svg/icons.js
// 超链接图标
const icons_hyperlink = '<svg t="1624174958075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7982" ><path d="M435.484444 251.733333v68.892445L295.822222 320.682667a168.504889 168.504889 0 0 0-2.844444 336.952889h142.506666v68.892444H295.822222a237.397333 237.397333 0 0 1 0-474.794667h139.662222z m248.945778 0a237.397333 237.397333 0 0 1 0 474.851556H544.654222v-69.006222l139.776 0.056889a168.504889 168.504889 0 0 0 2.844445-336.952889H544.597333V251.676444h139.776z m-25.827555 203.946667a34.474667 34.474667 0 0 1 0 68.892444H321.649778a34.474667 34.474667 0 0 1 0-68.892444h336.952889z" p-id="7983"></path></svg>'; // 备注图标

const note = '<svg t="1624195132675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8792" ><path d="M152.768 985.984 152.768 49.856l434.56 0 66.816 0 234.048 267.392 0 66.816 0 601.92L152.768 985.984 152.768 985.984zM654.144 193.088l0 124.16 108.736 0L654.144 193.088 654.144 193.088zM821.312 384.064l-167.168 0L587.328 384.064 587.328 317.312 587.328 116.736 219.584 116.736 219.584 919.04l601.728 0L821.312 384.064 821.312 384.064zM386.688 517.888 319.808 517.888 319.808 450.944l66.816 0L386.624 517.888 386.688 517.888zM386.688 651.584 319.808 651.584 319.808 584.704l66.816 0L386.624 651.584 386.688 651.584zM386.688 785.344 319.808 785.344l0-66.88 66.816 0L386.624 785.344 386.688 785.344zM721.024 517.888 453.632 517.888 453.632 450.944l267.392 0L721.024 517.888 721.024 517.888zM654.144 651.584 453.632 651.584 453.632 584.704l200.512 0L654.144 651.584 654.144 651.584zM620.672 785.344l-167.04 0 0-66.88 167.04 0L620.672 785.344 620.672 785.344z" p-id="8793"></path></svg>'; // 节点icon

const nodeIconList = [{
  name: '优先级图标',
  type: 'priority',
  list: [{
    name: '1',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#E93B30"></path><path d="M580.309333 256h-75.52c-10.666667 29.824-30.165333 55.765333-58.709333 78.165333-28.416 22.314667-54.869333 37.418667-79.146667 45.397334v84.608a320 320 0 0 0 120.234667-70.698667v352.085333H580.266667V256z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '2',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M511.957333 1024C229.248 1024 0 794.752 0 512S229.248 0 511.957333 0C794.752 0 1024 229.248 1024 512s-229.248 512-512.042667 512z" fill="#FA8D2E"></path><path d="M667.946667 658.602667h-185.301334c4.864-8.533333 11.178667-17.066667 19.072-25.984 7.808-8.874667 26.453333-26.837333 55.936-53.888 29.525333-27.008 49.877333-47.786667 61.226667-62.165334 16.981333-21.717333 29.44-42.453333 37.290667-62.293333 7.808-19.84 11.776-40.746667 11.776-62.677333 0-38.570667-13.738667-70.741333-41.088-96.725334C599.466667 268.928 561.706667 256 513.834667 256c-43.690667 0-80.128 11.136-109.354667 33.578667-29.098667 22.4-46.506667 59.306667-52.010667 110.805333l93.184 9.301333c1.792-27.349333 8.405333-46.890667 19.754667-58.624 11.434667-11.776 26.837333-17.664 46.165333-17.664 19.541333 0 34.858667 5.589333 45.909334 16.768 11.136 11.264 16.682667 27.221333 16.682666 48.042667 0 18.858667-6.4 37.930667-19.242666 57.258667-9.472 14.037333-35.157333 40.533333-77.098667 79.872-52.096 48.554667-87.04 87.509333-104.704 116.821333A226.688 226.688 0 0 0 341.333333 745.429333h326.613334v-86.826666z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '3',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#2E66FA"></path><path d="M627.754667 731.733333c-29.354667 25.088-66.901333 37.632-112.725334 37.632-44.928 0-81.792-11.52-110.592-34.773333-33.066667-26.538667-49.877333-64.469333-50.304-114.133333h92.16c0.426667 21.76 7.552 38.314667 21.333334 49.664 12.288 10.88 28.117333 16.341333 47.402666 16.341333 20.309333 0 36.778667-6.101333 49.322667-18.432 12.544-12.330667 18.773333-29.568 18.773333-51.797333 0-21.290667-6.229333-38.186667-18.773333-50.773334-12.544-12.501333-29.866667-18.773333-52.138667-18.773333h-13.525333v-80.042667H512c42.112 0 63.274667-21.034667 63.274667-63.146666 0-20.309333-5.888-36.096-17.706667-47.445334a60.757333 60.757333 0 0 0-43.818667-17.066666c-17.493333 0-32 5.504-43.434666 16.298666-11.562667 10.88-17.792 25.728-18.773334 44.714667H359.68c0.981333-43.946667 16.042667-78.976 45.397333-104.96 29.354667-25.941333 65.706667-39.04 109.226667-39.04 44.928 0 81.792 13.525333 110.592 40.490667 28.8 26.922667 43.306667 61.610667 43.306667 104.149333 0 48.213333-19.413333 82.688-58.154667 103.552 43.52 23.125333 65.28 61.44 65.28 114.858667 0 48.128-15.957333 85.76-47.573333 112.682666z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '4',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M600.96 256v309.802667h60.117333v81.536h-60.16v98.218666h-90.154666v-98.218666H311.466667v-81.237334L522.666667 256h78.293333zM510.72 399.104l-112.042667 166.698667h112.042667V399.104z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '5',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M470.912 343.552h175.786667V256H400.256l-47.786667 253.952 75.434667 10.837333c21.205333-23.552 45.269333-35.413333 72.021333-35.413333 21.546667 0 38.997333 7.509333 52.437334 22.4 13.312 15.018667 20.053333 37.418667 20.053333 67.328 0 31.872-6.741333 55.765333-20.181333 71.552-13.397333 15.872-29.866667 23.765333-49.237334 23.765333-17.066667 0-32.085333-6.186667-45.013333-18.432-13.013333-12.373333-20.821333-29.013333-23.466667-50.133333L341.333333 611.498667c5.546667 40.874667 22.485333 73.429333 50.730667 97.621333 28.330667 24.32 64.938667 36.437333 109.866667 36.437333 56.149333 0 100.053333-21.546667 131.754666-64.554666a176.64 176.64 0 0 0 34.816-107.52c0-48.042667-14.378667-87.210667-43.221333-117.333334-28.8-30.208-63.957333-45.312-105.514667-45.312-21.674667 0-42.922667 5.248-63.829333 15.616l14.976-82.901333z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '6',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512 0c282.88 0 512 229.205333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M519.210667 256c36.992 0 67.626667 10.368 91.776 31.189333 24.192 20.821333 39.68 51.029333 46.293333 90.709334l-90.197333 9.984c-2.176-18.56-7.978667-32.298667-17.28-41.173334-9.258667-8.874667-21.418667-13.226667-36.224-13.226666-19.754667 0-36.437333 8.789333-50.048 26.453333-13.696 17.664-22.314667 54.613333-25.856 110.549333 23.296-27.52 52.138667-41.258667 86.656-41.258666 38.997333 0 72.362667 14.805333 100.181333 44.544 27.733333 29.696 41.685333 68.010667 41.685333 114.858666 0 49.877333-14.634667 89.856-43.818666 119.936-29.226667 30.208-66.730667 45.226667-112.554667 45.226667-49.066667 0-89.429333-19.072-121.130667-57.344C357.12 658.218667 341.333333 595.541333 341.333333 508.416c0-89.344 16.469333-153.813333 49.493334-193.194667C423.722667 275.754667 466.56 256 519.168 256z m-9.472 241.834667c-17.962667 0-33.066667 6.997333-45.525334 21.12-12.330667 14.037333-18.56 34.858667-18.56 62.293333 0 30.421333 6.912 53.76 20.906667 70.4 13.952 16.469333 29.866667 24.746667 47.786667 24.746667 17.28 0 31.701333-6.826667 43.178666-20.309334 11.52-13.525333 17.237333-35.669333 17.237334-66.56 0-31.658667-6.186667-54.869333-18.517334-69.546666a58.197333 58.197333 0 0 0-46.506666-22.144z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '7',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.752 0 512S229.248 0 512.042667 0C794.752 0 1024 229.248 1024 512s-229.248 512-511.957333 512z" fill="#6D768D"></path><path d="M673.024 273.066667H354.133333v86.869333h212.224a691.2 691.2 0 0 0-104.746666 187.989333c-26.026667 70.101333-39.978667 138.88-41.429334 206.293334h89.6c-0.298667-42.922667 6.698667-91.776 21.034667-146.474667a654.72 654.72 0 0 1 62.08-154.965333c27.136-48.554667 53.888-85.76 80.128-111.701334V273.066667z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '8',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z" fill="#6D768D"></path><path d="M512.426667 256c46.208 0 82.048 11.861333 107.605333 35.541333 25.6 23.68 38.314667 53.674667 38.314667 89.898667 0 22.613333-5.802667 42.666667-17.578667 60.330667a111.445333 111.445333 0 0 1-49.450667 40.277333c26.965333 10.837333 47.36 26.752 61.312 47.658667 13.994667 20.906667 21.034667 45.013333 21.034667 72.362666 0 45.098667-14.336 81.834667-42.965333 109.952-28.586667 28.245333-66.602667 42.368-114.090667 42.368-44.245333 0-81.066667-11.648-110.464-34.986666-34.645333-27.52-52.010667-65.28-52.010667-113.365334 0-26.368 6.528-50.645333 19.626667-72.746666 13.056-22.144 33.578667-39.210667 61.696-51.242667-24.064-10.154667-41.557333-24.192-52.48-41.941333a109.824 109.824 0 0 1-16.512-58.666667c0-36.224 12.757333-66.218667 37.973333-89.898667 25.386667-23.68 61.354667-35.541333 108.032-35.541333z m1.28 265.429333c-22.784 0-39.722667 7.978667-50.901334 23.893334-11.136 15.786667-16.64 33.066667-16.64 51.498666 0 25.984 6.485333 46.208 19.712 60.714667 13.098667 14.506667 29.525333 21.802667 49.152 21.802667 19.242667 0 35.157333-6.997333 47.786667-20.992 12.629333-13.909333 18.858667-34.048 18.858667-60.416 0-23.082667-6.314667-41.557333-19.2-55.466667a63.274667 63.274667 0 0 0-48.725334-21.034667z m-0.341334-191.488c-17.792 0-32 5.333333-42.581333 16-10.538667 10.666667-15.872 24.746667-15.872 42.325334 0 18.645333 5.248 33.152 15.701333 43.648 10.453333 10.453333 24.362667 15.658667 41.770667 15.658666 17.664 0 31.658667-5.290667 42.24-15.872 10.538667-10.581333 15.872-25.173333 15.872-43.818666 0-17.493333-5.248-31.573333-15.701333-42.154667s-24.277333-15.786667-41.429334-15.786667z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '9',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.333333 229.248 0 512 0c282.88 0 512 229.333333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M497.28 256c49.365333 0 89.856 19.157333 121.429333 57.429333 31.701333 38.229333 47.488 101.205333 47.488 188.842667 0 89.173333-16.384 153.386667-49.365333 192.853333-32.853333 39.594667-75.605333 59.264-128.426667 59.264-37.888 0-68.608-10.154667-91.989333-30.506666s-38.4-50.816-45.013333-91.306667l90.112-9.984c2.261333 18.474667 8.021333 32.085333 17.28 41.088 9.173333 8.874667 21.418667 13.312 36.608 13.312 19.2 0 35.541333-8.874667 48.981333-26.752 13.44-17.749333 22.016-54.613333 25.770667-110.549333-23.466667 27.264-52.821333 40.874667-88.064 40.874666-38.314667 0-71.253333-14.72-99.114667-44.330666C355.242667 506.709333 341.333333 468.224 341.333333 420.864c0-49.493333 14.592-89.258667 43.946667-119.466667C414.549333 271.104 451.925333 256 497.237333 256z m-4.352 77.482667c-17.237333 0-31.658667 6.826667-43.008 20.437333-11.477333 13.653333-17.194667 35.84-17.194667 66.816 0 31.402667 6.229333 54.485333 18.645334 69.205333 12.458667 14.72 27.946667 22.101333 46.592 22.101334 18.005333 0 33.066667-7.082667 45.44-21.205334 12.330667-14.208 18.432-35.029333 18.432-62.506666 0-29.994667-6.912-53.376-20.821334-69.973334-13.824-16.597333-29.866667-24.874667-48.085333-24.874666z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '10',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M619.946667 273.066667c46.976 0 83.754667 16.042667 110.250666 48.042666 31.573333 37.973333 47.36 100.864 47.36 188.672 0 87.722667-15.829333 150.698667-47.658666 189.056-26.325333 31.616-62.976 47.36-109.952 47.36-47.274667 0-85.418667-17.237333-114.346667-51.968-28.885333-34.602667-43.392-96.426667-43.392-185.386666 0-87.168 15.872-150.016 47.701333-188.416 26.282667-31.488 62.933333-47.36 110.037334-47.36z m-207.488 12.8v452.266666H325.504V411.690667A299.904 299.904 0 0 1 213.333333 476.373333V398.933333c22.656-7.296 47.36-21.12 73.856-41.514666 26.624-20.522667 44.842667-44.288 54.784-71.552h70.485334z m207.488 60.842666c-11.306667 0-21.461333 3.413333-30.336 10.24-8.874667 6.826667-15.786667 19.157333-20.693334 36.864-6.4 22.997333-9.642667 61.653333-9.642666 115.968 0 54.442667 2.944 91.733333 8.661333 112.128 5.802667 20.352 13.098667 33.877333 21.845333 40.618667 8.789333 6.741333 18.858667 10.154667 30.165334 10.154667 11.349333 0 21.376-3.498667 30.250666-10.325334 8.874667-6.826667 15.786667-19.157333 20.693334-36.778666 6.4-22.826667 9.642667-61.354667 9.642666-115.797334 0-54.314667-2.858667-91.648-8.661333-112.042666-5.802667-20.352-13.013333-33.962667-21.76-40.789334a47.616 47.616 0 0 0-30.165333-10.24z" fill="#FFFFFF"></path></svg>`
  }]
}, {
  name: '进度图标',
  type: 'progress',
  list: [{
    name: '1',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144-294.144A414.72 414.72 0 0 1 928 512c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '2',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512h416c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '3',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144 294.144A414.72 414.72 0 0 1 512 928z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '4',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96v832z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '5',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512l-294.144 294.144A414.72 414.72 0 0 1 96 512c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '6',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512H96c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '7',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512L217.856 217.856A414.72 414.72 0 0 1 512 96V512z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '8',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#12BB37"></path><path d="M716.629333 341.333333h-51.328a35.072 35.072 0 0 0-28.330666 14.293334l-171.989334 233.984-77.909333-106.026667a35.2 35.2 0 0 0-28.330667-14.293333H307.413333c-7.082667 0-11.264 7.936-7.082666 13.653333l136.32 185.472a35.2 35.2 0 0 0 56.533333 0l230.4-313.429333a8.533333 8.533333 0 0 0-6.954667-13.653334z" fill="#FFFFFF"></path></svg>`
  }]
}, {
  name: '表情图标',
  type: 'expression',
  list: [{
    name: '1',
    icon: `<svg t="1624457751393" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12255"><path d="M1.097856 1.097642h1021.804717v1021.804716H1.097856z" fill="#F09495" p-id="12256"></path><path d="M1024.000214 1024H0.000214V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.195498v1019.609432z" fill="#FFFFFF" p-id="12257"></path><path d="M234.695985 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" p-id="12258"></path><path d="M234.695985 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115s28.339115 12.772559 28.339115 28.339115c0.099786 15.666342-12.672773 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617-11.774703-26.243617-26.243617-26.243617z" fill="#FFFFFF" p-id="12259"></path><path d="M776.232528 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" p-id="12260"></path><path d="M776.232528 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115 15.666342 0 28.339115 12.772559 28.339115 28.339115 0 15.666342-12.772559 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617c-0.099786-14.468914-11.874488-26.243617-26.243617-26.243617z" fill="#FFFFFF" p-id="12261"></path><path d="M512.000214 671.656987c-52.58702 0-105.872539-17.961411-105.872539-52.387449S459.413194 566.882089 512.000214 566.882089s105.872539 17.961411 105.87254 52.387449S564.587234 671.656987 512.000214 671.656987z m0-74.240499c-21.952836 0-43.207172 3.592282-58.2748 9.77899-13.870201 5.68778-17.06334 11.275775-17.06334 12.07406s3.19314 6.386279 17.06334 12.07406c15.067628 6.186708 36.321965 9.77899 58.2748 9.77899s43.207172-3.592282 58.274801-9.77899c13.870201-5.68778 17.06334-11.275775 17.06334-12.07406s-3.19314-6.386279-17.06334-12.07406c-15.067628-6.286494-36.321965-9.77899-58.274801-9.77899z" fill="#040000" p-id="12262"></path></svg>`
  }, {
    name: '2',
    icon: `<svg t="1624457767572" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1048"><path d="M0 0h1024v1024H0z" fill="#E6A6C9" p-id="1049"></path><path d="M315.1 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM738.7 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM293.5 698.8l-14.5-1.3c0.1-0.6 1.5-14.6 15.1-27.9 17.2-16.7 45-24.8 82.7-24 4.9-0.1 10.9-10.5 16.1-19.6 8.4-14.7 19-33.1 37.9-34.3 19.4-1.2 42.2 16.4 71.5 55.4 9.9 5.2 16.5 11.2 21.8 16.1 8.4 7.7 13.1 11.9 25.1 10.8 14.9-1.4 38.9-11.1 77.5-31.4 26.8-28.4 56.4-41.4 83.5-36.6 27.9 4.9 50.6 27.6 67.5 67.5l-13.4 5.7c-14.7-34.5-34.3-54.9-56.7-58.8-22.3-3.9-47.6 7.8-71.2 33.1l-0.8 0.9-1.1 0.6c-85.6 45.1-99.4 38-120.2 19.1-5.5-5-11.2-10.2-20.1-14.7l-1.5-0.8-1-1.4c-32.2-43.2-50.4-51.6-60-51-11.1 0.7-18.8 14-26.2 27-7.6 13.2-15.4 26.9-28.8 26.9h-0.2c-78.4-1.6-83 38.3-83 38.7z" fill="#040000" p-id="1050"></path></svg>`
  }, {
    name: '3',
    icon: `<svg t="1624457776082" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1204" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#F7E983" p-id="1205"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1206"></path><path d="M329.174412 344.491728a38.118106 10.277919 57.6 1 0 17.355867-11.014369 38.118106 10.277919 57.6 1 0-17.355867 11.014369Z" fill="#040000" p-id="1207"></path><path d="M644.769475 355.956059a11.175989 36.321965 30 1 0 36.321965-62.911488 11.175989 36.321965 30 1 0-36.321965 62.911488Z" fill="#040000" p-id="1208"></path><path d="M569.678445 671.158059c-26.343403 0-51.190021-5.288638-70.049503-14.967843-20.755408-10.577275-32.230754-25.445332-32.230755-41.710388 0-16.265056 11.475346-31.133112 32.230755-41.710387 18.859482-9.579419 43.805886-14.967843 70.049503-14.967843s51.190021 5.288638 70.049503 14.967843c20.755408 10.577275 32.230754 25.445332 32.230754 41.710387 0 16.265056-11.475346 31.133112-32.230754 41.710388-18.859482 9.679205-43.805886 14.967843-70.049503 14.967843z m0-95.095693c-49.693237 0-84.318846 20.356266-84.318846 38.517248s34.625609 38.517248 84.318846 38.517248 84.318846-20.356266 84.318846-38.517248-34.725395-38.517248-84.318846-38.517248z" fill="#040000" p-id="1209"></path></svg>`
  }, {
    name: '4',
    icon: `<svg t="1624457781889" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1363" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#A6D9E2" p-id="1364"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1365"></path><path d="M376.194134 348.950302m-23.44962 0a23.44962 23.44962 0 1 0 46.89924 0 23.44962 23.44962 0 1 0-46.89924 0Z" fill="#040000" p-id="1366"></path><path d="M629.150672 348.950302m-24.647047 0a24.647047 24.647047 0 1 0 49.294095 0 24.647047 24.647047 0 1 0-49.294095 0Z" fill="#040000" p-id="1367"></path><path d="M397.847613 603.503411c13.471058 8.282206 28.738258 14.468914 43.7061 19.458195 29.835899 9.978562 62.266225 14.169558 93.299551 7.483921 21.054765-4.490353 40.213604-14.369129 56.778016-28.039758 6.785422-5.587995-2.893783-15.167414-9.579419-9.579419-46.999026 38.916391-112.258819 31.033327-163.847983 6.086922-4.590138-2.195284-9.080491-4.490353-13.371272-7.184564-7.583707-4.590138-14.468914 7.184564-6.984993 11.774703z" fill="#040000" p-id="1368"></path><path d="M627.753674 534.052621c-31.033327 24.048334-58.474371 68.253362-37.419607 106.970182 10.577275 19.35841 29.835899 32.629897 48.795167 42.708244 7.982849 4.190996 15.067628-7.883064 7.084779-12.07406-25.245761-13.271487-53.485091-35.324108-49.094524-66.557006 2.793997-20.156695 15.766127-37.319821 29.736114-51.190022 3.392711-3.392711 6.984993-6.785422 10.776847-9.77899 2.993569-2.295069 2.394855-7.483921 0-9.878776-2.893783-3.19314-6.885208-2.49464-9.878776-0.199572z" fill="#040000" p-id="1369"></path></svg>`
  }, {
    name: '5',
    icon: `<svg t="1624457787809" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1523" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#AD6F59" p-id="1524"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1525"></path><path d="M411.829832 330.730879a38.118106 10.277919 57.6 1 0 17.355867-11.014368 38.118106 10.277919 57.6 1 0-17.355867 11.014368Z" fill="#040000" p-id="1526"></path><path d="M480.669675 609.989476c11.774703-25.844475 27.740401-51.788735 44.60417-73.342429 13.770415-17.462483 29.237186-33.92711 47.897096-44.803742 17.262912-10.078347 35.324108-13.67063 54.283376-6.58585 11.974274 4.390567 23.948548 14.468914 33.128825 24.547261 14.369129 15.865913 25.145975 34.625609 34.725394 53.684662 4.290782 8.581563 17.262912 0.997856 12.972131-7.583707-15.167414-30.334828-35.224323-63.763009-66.157864-80.327421-21.054765-11.37556-44.504385-11.475346-66.157864-1.895927-21.054765 9.280062-38.617034 25.644904-53.485091 42.907815-14.468914 16.863769-27.041902 35.324108-38.217891 54.582733-5.887351 10.178133-11.674917 20.555837-16.464627 31.232898-1.696355 3.692068-0.997856 7.982849 2.694212 10.277918 3.19314 1.895927 8.581563 0.898071 10.178133-2.694211z" fill="#040000" p-id="1527"></path><path d="M663.863649 338.091735a14.468914 33.727538 30 1 0 33.727538-58.417811 14.468914 33.727538 30 1 0-33.727538 58.417811Z" fill="#040000" p-id="1528"></path></svg>`
  }, {
    name: '6',
    icon: `<svg t="1624457794933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1680" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#83CEE3" p-id="1681"></path><path d="M369 375.8m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="1682"></path><path d="M369 411.7c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z m0-69.1c-18.3 0-33.2 14.9-33.2 33.2S350.7 409 369 409s33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="1683"></path><path d="M672.2 333.6c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.3-7.6-13zM578.2 720.9c-12.5-96.7-33.3-154.7-55.6-155.6-8.8 3.9-22.3 17.5-37.7 60.1-10.8 29.8-18.4 62.2-23 81.6-1.2 5.1-2.1 9.1-2.9 11.8l-9.3-2.4c0.7-2.6 1.6-6.6 2.8-11.6 14.9-63 36-136.8 67.5-148.8l0.8-0.3h0.8c18.2-0.4 33.2 19.5 45.8 60.8 10.2 33.3 16.7 74.6 20.5 103.3l-9.7 1.1z" fill="#040000" p-id="1684"></path></svg>`
  }, {
    name: '7',
    icon: `<svg t="1624457802025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1838" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#8CC66D" p-id="1839"></path><path d="M375.778679 404.47473a14.5 33.8 30 1 0 33.8-58.543317 14.5 33.8 30 1 0-33.8 58.543317Z" fill="#040000" p-id="1840"></path><path d="M627.220263 374.211388a43.1 11.6 57.6 1 0 19.588408-12.431182 43.1 11.6 57.6 1 0-19.588408 12.431182Z" fill="#040000" p-id="1841"></path><path d="M451.1 548.5c17.6-9.3 63.9-30 105.3-16.2 17 20.3 32.7 98.8 28.8 138.1-27.5 10.2-82.5 10.2-106.1 5.8-8.3-10.5-32.7-81.8-35.3-114.6-0.4-5.5 2.5-10.6 7.3-13.1z" fill="#040000" p-id="1842"></path></svg>`
  }, {
    name: '8',
    icon: `<svg t="1624457816632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1996" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#5A74B8" p-id="1997"></path><path d="M357.7 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="1998"></path><path d="M357.7 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2 33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="1999"></path><path d="M676 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="2000"></path><path d="M676 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2c18.3 0 33.2-14.9 33.2-33.2s-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="2001"></path><path d="M347.6 684.1c0.3-0.9 0.6-1.7 0.9-2.6 0.2-0.5 1.4-3.2 0.3-0.8 0.6-1.4 1.3-2.9 2-4.3 3.2-6.3 6-10.7 10.9-15.3 4.3-4 10.8-7.5 17.1-6.1 3.9 0.9 7.9 4.9 11.1 7.2 3.1 2.2 6.3 4.5 9.7 6.2 7.5 3.8 15.3 4.4 23.4 1.9 4.7-1.5 9.2-3.6 13.6-5.9 5-2.6 10.7-5 14.2-9.5 4.5-5.7 6.1-8.5 11.4-14.1 1-1 2-2 3.1-3 0.2-0.2 2.2-1.7 0.6-0.5 0.6-0.4 1.2-0.9 1.8-1.3 1-0.6 2.1-1.3 3.2-1.7-2 0.8 0.2 0 0.6-0.1 2.3-0.7-0.3-0.2 1.2-0.3 2.8-0.1 3.6 0 5.5 1 3.8 1.9 6.6 4.7 9.5 7.8 4.5 5 7.5 11.1 11.7 16.2 1.8 2.2 3.7 4.3 5.4 6.5 8.1 10.3 17.7 22.2 32.2 22 8.8-0.1 16.6-5.2 22.6-11.2 4.2-4.1 7.7-8.9 11-13.7 2.9-4.2 4.6-9.9 6.2-13.5 3.2-7.1 7.2-13.1 13-18.1 4.8-4.2 11.1-6.5 16.7-5.3 10.5 2.4 17.2 12.1 23.1 20.2 4.7 6.5 9.8 13 16 18.2 7.8 6.4 17.1 11.4 27.5 11.1 14.1-0.4 25.5-9.5 34.2-19.9 3-3.6 3.6-8.8 0-12.4-3.1-3.1-9.4-3.7-12.4 0-6.3 7.6-14.7 15.9-24.9 14.7-2.2-0.3-5.3-1.5-7.9-3.1-3.5-2.1-6.1-4.4-9.1-7.5-4.9-5.1-6.8-8.1-10.9-13.8-7.3-10.1-16.1-19.6-28.2-23.7-18.5-6.3-35.7 5.6-46 20.1-2.4 3.3-4.4 6.9-6.1 10.6-1.8 3.9-2.7 8.5-5.2 11.9-3.1 4.4-6.2 8.8-10.2 12.5-3 2.8-5.7 4.4-8.6 5.1-0.4 0.1-1.7 0.1 0.1 0h-2.2c2.1 0.1 0 0-0.5-0.1-0.7-0.2-1.4-0.4-2-0.6 1.8 0.7-1.8-1.1-2.4-1.5l-1.2-0.9c1.5 1.2-0.9-0.9-1.2-1.1-4.7-4.3-8.4-9.5-12.3-14.4-10.9-13.6-20.9-34-41-34.9-14.2-0.6-24.5 10.6-32.4 20.8-1.2 1.6-2.5 3.2-3.7 4.8-1.5 1.9 1.1-1.4-0.4 0.5-0.4 0.5-0.8 1.2-1.3 1.6-1.7 1.4-4.6 2.6-6.6 3.6-2.9 1.6-5.9 3.2-9 4.5-1.6 0.7-3.4 1.2-5.1 1.7-2.2 0.6-0.7 0.5-2.8 0.4-2.8 0-3.9-0.4-6.6-1.9-3.9-2.2-7.5-4.9-11.1-7.5-5.6-4-10-6.9-17-7.5-10.5-0.9-20.3 3.2-28.2 9.9-9.4 8.1-16.4 20.2-20.1 32-3.6 11.2 13.3 15.8 16.8 5.1z" fill="#040000" p-id="2002"></path></svg>`
  }, {
    name: '9',
    icon: `<svg t="1624457826949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2156" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F0884F" p-id="2157"></path><path d="M287.2 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM598 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM505.9 527.1c3.4 0.7 6.8 1.7 10.2 2.8 6.7 2.2 10.4 3.5 16.6 7.7 1.6 1.1-0.5-0.5 0.6 0.5 0.6 0.5 1.1 1.1 1.7 1.6 1.5 1.4-0.1-0.4 0.5 0.6 0.4 0.6 0.7 1.2 1 1.8-1-2 0.1 0 0 0.5 0.1-2-0.1 0-0.1 0-0.1 0.8 0 0.7 0.1-0.5-0.1 0.4-0.1 0.7-0.3 1.1-0.6 1 0.7-0.9-0.4 1-1.6 2.5-4.6 5.4-8.1 7.8-6.8 4.6-14.4 8.2-22 11.4-7 3-7.4 11.9 0 14.8 7.4 2.8 15 5.3 22.4 8.1 3.1 1.1 4.2 1.5 6.9 2.9 1.1 0.6 2.1 1.2 3.2 1.8 1.2 0.8-0.7-0.5 0.1 0 0.4 0.3 0.8 0.7 1.1 1.1 0.6 0.8-1.1-1.2-0.2-0.2 0.8 0.9-0.3-1.4-0.1-0.2 0.1 0.9 0.2-1.9 0-0.9-0.1 0.5-0.8 1.8 0 0.2-0.2 0.5-0.5 1-0.8 1.4-0.3 0.3-0.9 1.3-0.3 0.5-0.5 0.7-1.1 1.3-1.7 1.9-6.9 7.3-15.9 12.8-24.4 18.1-8.3 5.3-0.6 18.5 7.7 13.2 9.9-6.3 20.9-12.8 28.6-21.8 4.8-5.5 8.1-12.9 4.2-19.9-3.4-6-10.5-8.9-16.6-11.4-8.6-3.5-17.5-6.2-26.2-9.5v14.8c14.4-6.1 47.2-18.8 41.2-40.3-3.5-12.9-19.4-18.9-30.8-22.6-3.4-1.1-6.9-2.1-10.5-2.9-9.1-2.2-13.3 12.5-3.6 14.6z" fill="#040000" p-id="2158"></path></svg>`
  }, {
    name: '10',
    icon: `<svg t="1624457835383" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2312" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F6F180" p-id="2313"></path><path d="M342.9 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" p-id="2314"></path><path d="M342.9 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.7 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.6-28.3-28.3-28.3z" fill="#FFFFFF" p-id="2315"></path><path d="M702 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" p-id="2316"></path><path d="M702 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.8 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.7-28.3-28.3-28.3z" fill="#FFFFFF" p-id="2317"></path><path d="M358.7 519.9c20 22 45.5 40.4 71.3 54.8 51.2 28.5 111.7 39.9 168 19.5 44.3-16.1 80.7-47.8 110.2-83.9 3-3.7 3.6-8.9 0-12.5-3.1-3.1-9.5-3.7-12.5 0-25.5 31.4-56.2 59.7-93.7 76-27.1 11.7-56.6 15.7-85.8 12.2-24.7-2.9-49.5-11.8-71.5-23.4-18.7-9.8-36.6-22.2-51.1-34.3-7.8-6.5-15.5-13.3-22.4-20.9-7.7-8.5-20.1 4.1-12.5 12.5z" p-id="2318"></path></svg>`
  }, {
    name: '11',
    icon: `<svg t="1624457841751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2472" ><path d="M48.2 844.9c-68.5-210.6 186-782.1 409.1-795.4 6.3-0.4 12.5 0.2 18.6 1.6C665.1 94.6 985.4 515 987.1 821.3c0.1 20-12.9 37.9-22.4 43.1-162.7 89.8-605.8 179.7-884.4 30.9-15-7.9-24.2-26.1-32.1-50.4z" fill="#F0884F" p-id="2473"></path><path d="M401 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" p-id="2474"></path><path d="M408.7 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" p-id="2475"></path><path d="M527.5 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" p-id="2476"></path><path d="M527.5 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" p-id="2477"></path><path d="M450.7 517c1.1-8.2 3.2-16.4 6.1-24.1 0.1-0.3 1-2.5 0.5-1.4s0.3-0.7 0.5-1c0.7-1.4 1.4-2.8 2.2-4.1 0.4-0.8 2.8-3.9 1.3-2.1 0.8-1 1.7-1.9 2.6-2.8 1-1-1.5 1 0.1 0 0.5-0.3 1-0.6 1.5-0.8-1.3 0.7-1.2 0.3 0 0.1 1.9-0.3-1.8 0.3 0.1 0 1.2-0.2 1.5 0.3 0-0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.3 0.1-1.3-0.7 0.2 0.1 0.8 0.5 1.6 0.9 2.4 1.4 1.4 1 0-0.1 1.4 1.1 0.9 0.8 1.8 1.7 2.6 2.6 1.8 1.9 3.5 3.9 5 6.1 5.1 7.1 9.3 14.8 13.2 22.6 3.5 6.9 13.7 4.7 15.8-2.1 2.6-8.7 4.8-17.4 7.4-26.1 0.9-3.2 1.9-6.4 3.2-9.4-0.7 1.6 0.8-1.6 1.2-2.2l0.9-1.5c0.7-1.2-1.4 0.7 0.1-0.1 1.7-0.9-1.2 0.3-0.3 0.1 0.8-0.2 1-1.2 0.3-0.3-0.6 0.8 0.6 0-0.5 0.2-2 0.3 2.4 0.5-1.1 0 0.5 0.1 1.2 0.2 1.6 0.4-1.1-0.8-0.8-0.4 0.2 0.2 0.7 0.4 3.4 2.3 2.7 1.8 8.9 7.1 15.9 16.9 22.5 26 2.8 3.8 7.5 5.6 11.8 3.1 3.7-2.2 5.9-8 3.1-11.8-8.2-11.1-16.6-23-27.7-31.4-6.3-4.7-14.5-7.6-21.7-3-6.7 4.2-9.6 12.5-11.9 19.6-3.2 9.9-5.5 20-8.6 29.9 5.3-0.7 10.5-1.4 15.8-2.1-7.8-15.5-24.8-50.1-48-41.7-14.1 5.1-19.7 23-22.9 36.2-0.9 3.8-1.8 7.7-2.3 11.6-0.6 4.6 1.1 9.3 6 10.6 4.2 1 10.2-1.5 10.8-6.1z" fill="#040000" p-id="2478"></path></svg>`
  }, {
    name: '12',
    icon: `<svg t="1624457847424" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2632" ><path d="M485.538528 993.072489a362.00362 481.804818 3.149 1 0 52.933731-962.15464 362.00362 481.804818 3.149 1 0-52.933731 962.15464Z" fill="#AADCF0" p-id="2633"></path><path d="M688.2 334.1c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.4-7.6-13zM375.8 347c13.4 6.8 26.7 14 39.5 21.9 1.8 1.2 3.7 2.3 5.5 3.5 0.9 0.6 1.7 1.2 2.6 1.8 0.9 0.6 1.9 1.4 1.6 1.1 1.1 0.9 2.1 1.9 3.1 2.8 1.2 1 0-0.3 0.1 0 0-0.2-0.8-2.4-0.3-4.1 1.5-5.5 2.3-2.7 0.8-2-0.4 0.2-0.9 0.8-1.3 1.1 1.7-1.4-1.6 1.1-2.3 1.6-3.4 2.3-6.9 4.4-10.4 6.4-14.9 8.6-30.3 16.4-45.6 24.3-8.6 4.4-1 17.4 7.6 13 15-7.7 30.1-15.4 44.8-23.8 6.2-3.6 13.8-7.3 18.7-12.7 7.6-8.3-3.8-16.6-9.9-20.9-8.7-6.1-18-11.3-27.3-16.4-6.5-3.6-13-7.1-19.6-10.4-8.6-4.5-16.3 8.5-7.6 12.8zM412.8 570.9c13.5 7.7 28.5 13.3 43.3 17.9 29.8 9.2 61.7 13.1 92.6 7.3 20.6-3.9 40-12.5 56.6-25.2 2.8-2.2 4.3-5.6 2.3-9-1.6-2.8-6.2-4.5-9-2.3-48.3 36.9-113.3 30-165.6 6.7-4.6-2.1-9.2-4.2-13.7-6.7-7.3-4.2-13.9 7.2-6.5 11.3z" fill="#040000" p-id="2634"></path><path d="M644.6 505.2c-30.1 21.5-60.6 62.5-39.1 99.8 10.7 18.6 30.3 30.9 49.1 40.1 7.8 3.8 14.6-7.9 6.8-11.7-23.6-11.5-53.7-31.4-49.4-60.9 2.8-18.9 15.8-34.6 29.5-47.2 2.5-2.3 5.1-4.6 7.8-6.7 0.5-0.4 0.9-0.7 1.4-1.1-0.4 0.3-1.2 0.9-0.1 0.1l0.9-0.6c6.9-5.1 0.2-16.8-6.9-11.8z" fill="#040000" p-id="2635"></path></svg>`
  }, {
    name: '13',
    icon: `<svg t="1624457855182" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2789" ><path d="M235.1 76.9c75.6-26.5 297.3-90.1 514.2-16.6 16.3 5.5 29.8 17.4 37.1 33 57.5 122.4 127.1 602.1 62.1 785.6a62.58 62.58 0 0 1-32.5 35.8c-109.5 51.8-428.1 136.7-609.3 37.2-14.4-7.9-25-21.3-29.7-37.1-41.9-140.6-37-627.7 19.1-798 6.1-18.7 20.5-33.4 39-39.9z" fill="#F9DABD" p-id="2790"></path><path d="M392.2 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" p-id="2791"></path><path d="M618.6 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" p-id="2792"></path><path d="M512 562.6c-36 0-65.3-29.3-65.3-65.3S476 432 512 432s65.3 29.3 65.3 65.3-29.3 65.3-65.3 65.3z m0-122.9c-31.7 0-57.6 25.8-57.6 57.6s25.8 57.6 57.6 57.6c31.7 0 57.6-25.8 57.6-57.6s-25.9-57.6-57.6-57.6z" fill="#040000" p-id="2793"></path></svg>`
  }, {
    name: '14',
    icon: `<svg t="1624457863444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2947" ><path d="M178.1 971.5c38.1 15.9 98.7 26.6 171.3-12.3 3.7-2 8.4-1.6 11.6 1.1 43.3 35.9 123.3 80.8 236 10.9 3.8-2.4 8.7-2.4 12.6-0.2 41.8 23.9 191.6 58.2 246.6 14.2 4.4-3.5 9.1-6.6 14.5-8.5C1065 909.5 678.2-652 194.3 351c-37.5 77.8-38.4 94.1-71.9 211.3-27.6 96.3-29.1 231.3 1.4 348.1 7.2 27.3 27.3 49.9 54.3 61.1z" fill="#ABAAAA" p-id="2948"></path><path d="M468.9 349H418c-6.1 0-11.1-5-11.1-11.1V336c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.1-5 11.1-11.1 11.1zM643 471.9H390c-6.6 0-12-5.4-12-12s5.4-12 12-12h253c6.6 0 12 5.4 12 12s-5.4 12-12 12zM609 349h-61.2c-6 0-11-4.9-11-11v-2.1c0-6 4.9-11 11-11H609c6 0 11 4.9 11 11v2.1c0 6.1-4.9 11-11 11z" fill="#040000" p-id="2949"></path></svg>`
  }, {
    name: '15',
    icon: `<svg t="1624457870536" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3103" ><path d="M673.1 318.7c3.7-17.5 5.6-35.7 5.6-54.4 0-137.9-105.5-249.7-235.6-249.7S207.4 126.4 207.4 264.3c0 55.4 17.1 106.7 45.9 148.1-55.2 63.3-88.6 145.9-88.6 236.3 0 199.2 162.1 360.6 362.1 360.6 200 0 362.1-161.5 362.1-360.6 0.1-147.3-88.7-274-215.8-330z" fill="#4F8A54" p-id="3104"></path><path d="M392 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" p-id="3105"></path><path d="M386 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" p-id="3106"></path><path d="M505.6 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" p-id="3107"></path><path d="M501.4 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" p-id="3108"></path><path d="M474.3 364.8h-50.9c-6.1 0-11.1-5-11.1-11.1v-1.9c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.2-5 11.1-11.1 11.1z" fill="#040000" p-id="3109"></path></svg>`
  }, {
    name: '16',
    icon: `<svg t="1624457876371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3263" ><path d="M246.4 227.6c-166.9 101.1-461.9 344 87 564.1 1.5 0.6 2.9 1.1 4.4 1.6 80.7 27.7 392.8 165.4 641-198.1 40-58.6 38.5-136.2-3.7-193.3C892 289.5 727 201.1 429.1 182.7c-64.1-4-127.8 11.6-182.7 44.9z" fill="#CF92BE" p-id="3264"></path><path d="M617.1 393.4c-17.4 8.8-34.9 18.1-51.2 28.9-6.9 4.6-20.3 12.3-17.4 22.6 1.2 4.3 5.6 7 9 9.5 3.7 2.7 7.6 5 11.5 7.3 18.2 10.8 37.1 20.3 55.9 30 10 5.1 18.9-10 8.8-15.1-16.4-8.4-32.9-16.9-49-26-4.5-2.6-9.1-5.2-13.5-8l-4.5-3c-0.7-0.5-1.3-1-2-1.5 1.6 1.2 0.7 0.4-0.2-0.2-1.3-0.9-0.3-0.9-0.5-0.3 0.2 0.2 0.4 0.5 0.6 0.7 1 1.9 1.3 3.7 0.8 5.7 0.1-0.6 0.7-1.4-0.6 1.3 0.7-1.5-0.1 0-0.2 0.1 0.6-0.6 1.2-1.3 1.9-1.9l1.8-1.5c1.8-1.6-0.6 0.3 1.2-0.9 2-1.5 4.1-2.9 6.2-4.3 10-6.5 20.4-12.4 30.9-18 6.5-3.5 13.1-7 19.7-10.4 9.6-5 0.8-20.1-9.2-15zM323.1 408.5c15.9 8.1 31.7 16.5 46.8 26 2.2 1.4 4.3 2.8 6.5 4.2 1 0.7 1.9 1.3 2.8 2 0.5 0.3 1 0.7 1.4 1.1-1.1-0.9-0.3-0.3 0.3 0.3 1.1 1 2.2 2.2 3.3 3.1 1.4 1.1-1-1.7-0.1-0.1-0.6-1.1-0.9-4.1 0.3-6.7 2.2-4.8 0.7 0.1 0-0.5 0 0-1.1 0.9-1.3 1 2.3-1.9 0 0-0.5 0.4-0.8 0.5-1.5 1.1-2.3 1.6-4 2.7-8.1 5.1-12.3 7.5-17.3 10-35.1 19.1-52.8 28.2-10 5.1-1.2 20.2 8.8 15.1 17.5-9 35-17.9 52-27.7 7.3-4.2 15.9-8.6 21.8-14.7 9.3-9.7-4.3-19.7-11.5-24.7-10.1-7.1-20.9-13.1-31.7-19-7.6-4.2-15.2-8.2-22.9-12.1-9.7-5.2-18.6 9.9-8.6 15zM513 592.1c-12.2 0-24.6-1.4-36.3-4.3-8-2-13.9-8.2-15.4-16.2s1.7-15.8 8.4-20.5c23.2-16.3 60.5-31.9 106.2-13 6.4 2.6 11 8.3 12.3 15.1 1.3 6.7-0.8 13.6-5.7 18.3-13.5 13.1-40.9 20.6-69.5 20.6z m-37.4-32.5c-3.4 2.4-4.9 6.2-4.2 10.2 0.8 4.1 3.6 7.1 7.7 8.1 39.1 9.7 81.2 0.7 96.1-13.7 2.4-2.3 3.4-5.6 2.7-8.9-0.7-3.4-2.9-6.2-6.1-7.5-41.2-17.2-75.1-3.1-96.2 11.8z" fill="#040000" p-id="3265"></path></svg>`
  }, {
    name: '17',
    icon: `<svg t="1624457881793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3419" ><path d="M1008.6 465.7c0-124.9-95.5-226.2-213.4-226.2-12 0-23.8 1.1-35.2 3.1v-3.1c0-124.9-95.5-226.2-213.4-226.2S333.4 114.6 333.4 239.5c0 2.4 0 4.8 0.1 7.2-17.1-4.7-35-7.2-53.4-7.2-117.8 0-213.4 101.3-213.4 226.2 0 92.1 51.9 171.3 126.3 206.6-13.7 29.9-21.4 63.4-21.4 98.8 0 124.9 95.5 226.2 213.4 226.2 68.8 0 130-34.5 169-88.1 39 53.6 100.2 88.1 169 88.1 117.8 0 213.4-101.3 213.4-226.2 0-41.2-10.4-79.9-28.6-113.1 60.5-39.9 100.8-111.1 100.8-192.3z" fill="#8CC66D" p-id="3420"></path><path d="M437.8 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3421"></path><path d="M649.7 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3422"></path><path d="M527.3 625.9c6.3-14.2 13.1-28.3 17.9-43 6.2-19 8.3-38.6 10.5-58.3l2.1-19.2c0.7-6.2-9-6.1-9.7 0-1.7 16.3-2.8 32.8-5.7 48.9-4.2 23.7-13.8 45-23.5 66.7-2.5 5.6 5.9 10.5 8.4 4.9z" fill="#252525" p-id="3423"></path><path d="M447.7 522.3c20.3-0.1 40.6-0.2 61-0.4l96.6-0.6c7.5 0 14.9-0.1 22.4-0.1 16.6-0.1 16.7-25.9 0-25.8-20.3 0.1-40.6 0.2-61 0.4l-96.6 0.6c-7.5 0-14.9 0.1-22.4 0.1-16.6 0.1-16.7 25.9 0 25.8z" fill="#040000" p-id="3424"></path><path d="M495.4 508.2c-10.3 3.8-9.2 20.9-9.2 29.5 0.1 16 2.1 32.3 6.1 47.8 3.5 13.7 8.7 29.9 20.6 38.7 12.9 9.5 27.6 2.1 37.6-7.9 10.2-10.3 17.8-23 24.7-35.6 11.6-21.3 20.9-43.8 29.7-66.4 3-7.8-9.5-11.1-12.5-3.4-7.4 19.1-15.3 38.1-24.7 56.4-5.9 11.5-12.2 23-20.3 33.1-2.8 3.5-5.8 6.9-9.2 9.8-1.9 1.7-1.4 1.3-3.3 2.5-1.3 0.8-2.6 1.6-3.9 2.2-0.7 0.3 1-0.2-0.8 0.3-0.6 0.2-1.2 0.3-1.8 0.5-1.1 0.3-1.2 0.2-0.5 0.1-0.6 0-1.3 0-1.9 0.1-2.2 0.1 0.6 0.5-1.8-0.2l-1.8-0.6c1.5 0.5 0.2 0.1-0.5-0.3-0.8-0.5-2.9-2.1-1.7-1.1-1-0.9-2-1.7-2.8-2.7-0.4-0.5-0.9-1-1.3-1.5 0.4 0.5 0.1 0.2-0.5-0.7-0.8-1.3-1.7-2.5-2.4-3.9-0.7-1.3-1.4-2.5-2-3.8-0.4-0.8-0.8-1.6-1.1-2.4-0.1-0.2-0.5-1.1 0 0l-0.6-1.5a86.8 86.8 0 0 1-3.3-9.8c-4.4-14.9-6.2-27.9-6.8-42.8-0.3-6.6-0.3-13.1 0.4-19.7 0.2-1.5-0.3 1.5 0.1-0.5l0.3-1.8c0.2-0.9 0.5-1.8 0.7-2.8 0.4-1.9-0.7 1.1 0.3-0.7 0.5-1-1.3 1.2-0.3 0.5-0.3 0.3-1.1 0.8-2 1.1 7.7-2.9 4.3-15.4-3.5-12.5z" fill="#040000" p-id="3425"></path></svg>`
  }, {
    name: '18',
    icon: `<svg t="1624457899440" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3579" ><path d="M75.4 739.8c-78.7-134.4-194-455.7 401.4-579.6 9.8-2 19.2-6.2 29.2-7.5C656.8 133 947.3 205 1000.1 578.4c42.6 223.8 29.7 392.1-822 233.6-43.1-8-80.6-34.4-102.7-72.2z" fill="#F09495" p-id="3580"></path><path d="M704.6 875.4c-129 0-301.8-20.5-526.6-62.3-43.5-8.1-81.2-34.6-103.5-72.7-19.3-32.9-44.8-84.3-57.1-142.5-13.9-65.1-8.8-125.3 15.1-179.2 54.3-122.3 203.7-209.6 444-259.6 4.1-0.9 8.3-2.1 12.3-3.4 5.5-1.7 11.1-3.4 16.9-4.2 29-3.8 75.7-5.9 133.8 5.7 54.5 10.9 105.3 31 150.8 59.9C843.7 251 888.2 296 922.7 351c39.7 63.1 66.1 139.6 78.5 227.3 8.1 42.4 15.2 87.3 12.5 127.9-2.8 42.6-16.4 75.5-41.5 100.7-42.5 42.7-120.3 65-237.8 68.1-9.6 0.2-19.6 0.4-29.8 0.4zM76.3 739.3c22 37.6 59.2 63.7 102.1 71.7 242.5 45.1 424.4 65.3 556.1 61.9 116.9-3.1 194.1-25.2 236.3-67.5 55.4-55.6 44.4-142.5 28.3-226.7C976 415.8 903.4 291.5 789.2 219c-124-78.7-248.1-69.9-283.2-65.3-5.6 0.7-11.2 2.4-16.6 4.1-4.1 1.2-8.3 2.5-12.5 3.4C237.3 211.1 88.5 298 34.5 419.6c-54.6 122.8 2.8 253 41.8 319.7z" fill="#FFFFFF" p-id="3581"></path><path d="M424.1 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3582"></path><path d="M635.9 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3583"></path><path d="M426.2 543.3c17.1 7.9 36.6 26 25.5 46.1-6.9 12.5-19.8 21.2-31.7 28.4-4.5 2.7-0.4 9.8 4.1 7.1 17.4-10.5 41.6-27.6 39-51.1-1.6-14-12.4-24.8-23.5-32.3-3-2-6.1-3.9-9.3-5.4-4.8-2.1-8.9 5-4.1 7.2zM629.5 535.4c-21.8 11.7-40.6 37-25.7 61.3 8.2 13.4 22.2 22.7 35.7 30.3 4.7 2.7 8.9-4.6 4.2-7.2-15.5-8.7-39.9-23.9-36.9-45.2 1.6-11.4 10.7-20.7 19.6-27.2 2.4-1.7 4.8-3.4 7.4-4.8 4.7-2.5 0.4-9.8-4.3-7.2z" fill="#040000" p-id="3584"></path><path d="M457.2 584.6c25.6 25.6 66.7 41 101.8 28.3 18.2-6.6 33.2-19.1 45.5-33.8 4.2-5.1-3-12.4-7.3-7.3-18.5 22-43.3 38.1-73 35-18.6-1.9-36.2-10.8-50.9-22-2.9-2.2-6.1-4.8-8.8-7.5-4.7-4.7-12 2.6-7.3 7.3z" fill="#040000" p-id="3585"></path></svg>`
  }, {
    name: '19',
    icon: `<svg t="1624457904464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3739" ><path d="M915.9 510.5c8.4-19 13.1-39.8 13.1-61.7 0-90-78.9-162.9-176.2-162.9-3.2 0-6.3 0.1-9.5 0.2v-0.2c0-94.8-116.2-171.6-259.6-171.6S224 191.2 224 286v2c-96.2 0-174.1 72-174.1 160.9 0 38 14.3 73 38.2 100.5-41.8 29.4-68.8 75.9-68.8 128.2 0 88.9 78 160.9 174.1 160.9 17.1 0 33.6-2.3 49.3-6.5 28.9 46.1 88.7 77.7 157.6 77.7 49.4 0 94-16.2 126-42.3 32 26.1 76.6 42.3 126 42.3 77.3 0 143-39.7 166.7-95 3.1 0.2 6.3 0.2 9.5 0.2 97.3 0 176.2-72.9 176.2-162.9 0-60.6-35.7-113.4-88.8-141.5z" fill="#5A74B8" p-id="3740"></path><path d="M357.6 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" p-id="3741"></path><path d="M357.5 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" p-id="3742"></path><path d="M531.3 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" p-id="3743"></path><path d="M531.2 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" p-id="3744"></path><path d="M426.7 574.6c20.9 29.9 59.7 52.2 96.2 38.6 19.2-7.2 34.7-21.2 47.6-36.9 2.8-3.5 3.4-8.3 0-11.7-2.9-2.9-8.9-3.5-11.7 0-16.5 20.2-40.9 40.9-68.1 35.5-17.3-3.4-31-13.2-42.9-25.9-2-2.2-3.9-4.4-5.8-6.7-1.6-1.9 1.1 1.5-0.4-0.6-0.2-0.2-0.3-0.5-0.5-0.7-6.2-8.7-20.6-0.4-14.4 8.4z" fill="#040000" p-id="3745"></path></svg>`
  }, {
    name: '20',
    icon: `<svg t="1624457910321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3899" ><path d="M792.8 301.4c-8.2 0-16.2 0.4-24.2 1.3-12.3-81.8-129.2-145.9-271.8-145.9-137.1 0-250.5 59.3-269.9 136.6C105.3 295.5 7.4 391.2 7.4 508.9c0 119.1 100.2 215.6 223.7 215.6 5.3 0 10.6-0.2 15.8-0.5 14.4 80.5 130.4 143.2 271.3 143.2 135.9 0 248.6-58.3 269.4-134.6 1.7 0 3.4 0.1 5.1 0.1 123.6 0 223.7-96.5 223.7-215.6s-100-215.7-223.6-215.7z" fill="#F6CD50" p-id="3900"></path><path d="M435.9 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" p-id="3901"></path><path d="M588.1 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" p-id="3902"></path><path d="M435.9 431.5m-27.8 0a27.8 27.8 0 1 0 55.6 0 27.8 27.8 0 1 0-55.6 0Z" fill="#040000" p-id="3903"></path><path d="M601.9 407.4c-5.7 2.9-11.3 5.9-16.9 9-6.8 3.8-15.3 7.8-20.5 13.8-5.6 6.5 1.6 11.1 6.7 14.4 11.2 7.1 23.3 13 35.1 19 5.7 2.9 10.8-5.7 5.1-8.6-10.9-5.6-21.9-11.1-32.4-17.4-2.4-1.4-4.6-3.1-7-4.6 1 0.6-0.4-0.4-0.4-0.4-1.9-0.3-0.5 4.2 0.5 4.1-0.1 0-0.6 0.3 0.3-0.3 0.5-0.3 1-0.9 1.5-1.3 9.7-7.9 21.9-13.5 33.1-19.2 5.7-2.7 0.6-11.4-5.1-8.5zM406.6 547.6c11.5 14.4 27 26.7 42.7 36.3 32.2 19.8 71.2 27.2 107.6 15.4 29.5-9.6 54.6-29.1 75.5-51.6 10.8-11.6-6.6-29.1-17.5-17.5-9.4 10.1-19.5 19.7-30.8 27.7-4.6 3.2-9.3 6.2-14.2 8.9-5 2.8-9.9 5.1-14.1 6.7-4.6 1.7-9.3 3.2-14.1 4.4-2.2 0.5-4.4 1-6.6 1.4-1 0.2-2 0.3-2.9 0.5 2.6-0.4-2.1 0.2-2.5 0.3-4.1 0.4-8.3 0.5-12.5 0.4-2.2-0.1-4.4-0.2-6.6-0.4-1.1-0.1-2.2-0.2-3.2-0.3-1.5-0.2-1.4-0.2 0.1 0l-2.1-0.3c-7.8-1.3-15.4-3.4-22.8-6.2-0.9-0.4-1.8-0.7-2.8-1.1-3.1-1.2 2.3 1.1-0.7-0.3-1.5-0.7-2.9-1.3-4.4-2-3.7-1.8-7.2-3.7-10.8-5.8-5.7-3.4-11.1-7.1-16.4-11.1 3 2.3-1.1-0.9-1.8-1.5-1.1-0.9-2.1-1.7-3.1-2.6-2.1-1.8-4.2-3.7-6.3-5.6-4.4-4.1-8.7-8.4-12.4-13.1-4.2-5.2-13.1-4.3-17.5 0-5 5.1-4 12.2 0.2 17.4z" fill="#040000" p-id="3904"></path></svg>`
  }]
}, {
  name: '标记图标',
  type: 'sign',
  list: [{
    name: '1',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M809.728 429.696a18.901333 18.901333 0 0 0-15.274667-12.885333l-183.466666-26.624-81.92-166.272a18.901333 18.901333 0 0 0-34.005334 0l-81.92 166.272-183.594666 26.624a19.029333 19.029333 0 0 0-10.496 32.298666l132.693333 129.536-31.274667 182.741334a18.816 18.816 0 0 0 27.477334 19.84l164.138666-86.186667 164.096 86.058667a18.773333 18.773333 0 1 0 27.434667-19.84l-31.36-182.741334 132.693333-129.408a18.901333 18.901333 0 0 0 4.778667-19.413333z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '2',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M644.565333 306.901333c32.128 0 65.834667-5.76 101.077334-17.237333a17.066667 17.066667 0 0 1 22.357333 16.213333v328.32c-1.109333 0.768 10.325333 27.093333-99.370667 19.84-109.653333-7.210667-181.76-45.098667-246.869333-45.098666-65.152 0-49.322667 2.688-74.154667 8.405333v168.064a24.746667 24.746667 0 0 1-24.490666 25.258667 22.528 22.528 0 0 1-17.28-7.253334 24.149333 24.149333 0 0 1-7.168-18.005333V281.258667C299.776 280.490667 328.106667 256 421.76 256s164.437333 50.901333 222.805333 50.901333z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '3',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M524.074667 225.408l274.517333 274.517333a17.066667 17.066667 0 0 1 0 24.149334l-274.517333 274.517333a17.066667 17.066667 0 0 1-24.149334 0l-274.517333-274.517333a17.066667 17.066667 0 0 1 0-24.149334l274.517333-274.517333a17.066667 17.066667 0 0 1 24.149334 0z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '4',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M317.866667 300.8h388.266666c9.386667 0 17.066667 7.68 17.066667 17.066667v388.266666a17.066667 17.066667 0 0 1-17.066667 17.066667h-388.266666a17.066667 17.066667 0 0 1-17.066667-17.066667v-388.266666c0-9.386667 7.68-17.066667 17.066667-17.066667z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '5',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M498.346667 279.082667L248.789333 701.44a15.829333 15.829333 0 0 0 13.653334 23.893333h499.114666a15.829333 15.829333 0 0 0 13.653334-23.893333l-249.6-422.357333a15.829333 15.829333 0 0 0-27.264 0z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '6',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path><path d="M634.538667 487.808L555.050667 426.24 507.306667 256a201.002667 201.002667 0 0 0-23.594667 20.394667l-0.256-0.256L525.653333 426.666667l-133.290666 59.946666a14.08 14.08 0 0 0-8.021334 15.957334l28.757334 126.378666a14.208 14.208 0 0 0 27.733333-6.229333l-26.24-115.114667 126.037333-56.704 76.416 59.136a14.250667 14.250667 0 0 0 19.968-2.474666 14.08 14.08 0 0 0-2.474666-19.797334z" fill="#6D768D"></path></svg>`
  }, {
    name: '7',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '8',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M374.656 273.194667c5.973333 4.48 12.117333 9.6 18.346667 15.36 6.272 5.717333 11.904 12.373333 16.896 19.84 2.517333 4.010667 5.504 8.490667 9.002666 13.482666a529.493333 529.493333 0 0 1 20.266667 32.213334h155.221333a169.813333 169.813333 0 0 0 9.770667-15.744c2.474667-4.48 5.248-8.96 8.234667-13.482667a460.842667 460.842667 0 0 1 23.253333-31.829333c4.992-6.229333 12.245333-12.373333 21.76-18.346667a34.261333 34.261333 0 0 0 10.112-9.728 31.274667 31.274667 0 0 0 5.248-11.989333 18.56 18.56 0 0 0-1.536-11.605334 17.664 17.664 0 0 0-10.112-8.618666c-4.48-1.493333-8.362667-2.005333-11.605333-1.493334a46.933333 46.933333 0 0 0-9.770667 2.602667c-3.242667 1.28-6.613333 2.645333-10.112 4.138667a32.426667 32.426667 0 0 1-12.757333 2.261333 26.026667 26.026667 0 0 1-12.373334-2.645333 45.653333 45.653333 0 0 1-8.96-6.357334l-8.661333-7.850666a30.336 30.336 0 0 0-11.989333-6.4c-9.984-3.968-18.005333-4.693333-24.021334-2.218667-5.973333 2.474667-11.946667 6.485333-17.962666 11.946667a88.618667 88.618667 0 0 1-11.989334 10.496 7.338667 7.338667 0 0 1-3.754666 1.493333 46.165333 46.165333 0 0 1-8.277334-5.205333 71.808 71.808 0 0 1-7.125333-4.906667 37.973333 37.973333 0 0 1-6.4-6.357333c-3.968-3.968-9.941333-6.613333-17.92-7.850667a31.061333 31.061333 0 0 0-21.76 4.138667c-8.533333 5.461333-14.506667 10.069333-18.048 13.824a29.354667 29.354667 0 0 1-15.744 7.893333 23.978667 23.978667 0 0 1-13.098667-0.768 987.733333 987.733333 0 0 0-14.634666-4.48 80.725333 80.725333 0 0 0-14.250667-2.986667 16.768 16.768 0 0 0-11.989333 2.986667c-6.997333 5.461333-9.258667 12.074667-6.741334 19.84a34.56 34.56 0 0 0 13.482667 18.346667z" fill="#FFFFFF"></path><path d="M780.757333 545.152a219.306667 219.306667 0 0 0-19.882666-65.536 224.981333 224.981333 0 0 0-33.365334-49.792 430.336 430.336 0 0 0-37.12-37.12c-14.506667-11.946667-27.264-23.296-38.272-34.048a544.512 544.512 0 0 1-27.733333-28.842667 305.28 305.28 0 0 1-22.485333-26.197333h-168.746667c-6.485333 8.490667-13.994667 17.493333-22.485333 26.965333a360.96 360.96 0 0 1-26.24 28.074667c-10.538667 10.24-22.272 21.12-35.285334 32.597333a305.493333 305.493333 0 0 0-41.6 44.16 250.026667 250.026667 0 0 0-49.493333 117.589334 216.106667 216.106667 0 0 0 1.877333 70.4 220.586667 220.586667 0 0 0 75.349334 126.549333c21.248 18.005333 47.146667 32.597333 77.653333 43.818667 30.464 11.264 65.493333 16.853333 104.96 16.853333 38.528 0 72.874667-4.864 103.125333-14.592a265.045333 265.045333 0 0 0 78.378667-39.338667c21.973333-16.469333 39.594667-35.797333 52.864-58.026666 13.226667-22.186667 22.101333-45.824 26.624-70.784 4.992-30.421333 5.632-58.026667 1.877333-82.773334z" fill="#FFFFFF"></path><path d="M593.322667 647.509333a20.48 20.48 0 0 1-11.861334 3.2h-50.133333v14.165334c0 4.266667-1.792 8.362667-5.376 12.373333a15.914667 15.914667 0 0 1-13.952 5.333333 24.917333 24.917333 0 0 1-14.336-3.882666c-3.84-2.602667-5.973333-7.210667-6.4-13.824v-14.165334h-48.725333a17.792 17.792 0 0 1-11.818667-3.882666 10.24 10.24 0 0 1-3.968-9.6c0-4.266667 1.578667-7.68 4.693333-10.24a16.768 16.768 0 0 1 11.093334-3.925334h48.682666v-24.789333h-48.682666a15.573333 15.573333 0 0 1-11.52-4.266667 13.525333 13.525333 0 0 1-4.266667-9.941333 15.36 15.36 0 0 1 4.693333-10.624 14.72 14.72 0 0 1 11.093334-4.949333h48.682666l0.725334-14.890667a1053.568 1053.568 0 0 1-40.832-42.538667l-10.752-9.898666a41.216 41.216 0 0 1-6.442667-11.690667c-1.92-4.992-0.938667-10.069333 2.858667-15.274667a13.653333 13.653333 0 0 1 15.786666-3.84c6.186667 2.090667 11.221333 4.821333 15.018667 8.106667 1.92 2.389333 5.248 5.888 10.026667 10.666667l15.061333 14.848 19.328 19.157333 22.186667-20.565333a987.605333 987.605333 0 0 1 29.397333-25.514667 21.162667 21.162667 0 0 1 14.293333-5.674667c5.290667 0 9.557333 2.133333 12.928 6.4 6.186667 7.082667 3.84 15.36-7.168 24.789334a179.072 179.072 0 0 0-12.885333 12.373333c-5.76 5.973333-11.52 11.733333-17.194667 17.408-6.698667 7.082667-14.08 14.378667-22.186666 21.973333v13.44h46.506666c6.698667 0 11.605333 1.536 14.72 4.608a14.165333 14.165333 0 0 1 4.650667 10.282667c0 4.266667-1.450667 7.936-4.309333 11.008-2.858667 3.029333-7.637333 4.352-14.336 3.84l-46.506667 0.768-0.768 24.064h45.866667c13.354667 0 20.053333 4.992 20.053333 14.933333 0.469333 4.693333-0.853333 8.106667-3.925333 10.24z" fill="#6D768D"></path></svg>`
  }, {
    name: '9',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M512 213.333333l234.666667 341.333334h-128v213.333333h-213.333334v-213.333333h-128L512 213.333333z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '10',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M533.333333 810.666667L298.666667 469.333333h128V256h213.333333v213.333333h128l-234.666667 341.333334z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '11',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M213.333333 533.333333L554.666667 298.666667v128h213.333333v213.333333h-213.333333v128l-341.333334-234.666667z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '12',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M810.666667 533.333333L469.333333 768v-128H256v-213.333333h213.333333V298.666667l341.333334 234.666666z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '13',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#6D768D"></path><path d="M571.349333 508.586667l162.389334-162.346667a44.330667 44.330667 0 1 0-62.72-62.72l-162.389334 162.389333-162.517333-162.389333a44.330667 44.330667 0 1 0-62.72 62.72l162.389333 162.389333-162.389333 162.474667a44.330667 44.330667 0 1 0 62.72 62.72l162.389333-162.346667 162.389334 162.389334a44.330667 44.330667 0 1 0 62.72-62.72l-162.261334-162.56z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '14',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C233.386667 0 0 225.877333 0 512s225.877333 512 512 512 512-225.877333 512-512S790.613333 0 512 0z" fill="#6D768D"></path><path d="M726.144 311.210667l-277.333333 305.066666-124.8-124.8c-13.866667-13.866667-41.6-13.866667-55.466667 0-13.866667 13.866667-13.866667 41.6 0 55.466667l159.445333 152.533333c13.866667 13.866667 41.6 13.866667 55.466667 0l305.066667-332.8c13.866667-13.866667 13.866667-41.6 0-55.466666-20.778667-13.866667-48.512-13.866667-62.378667 0z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '15',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M541.952 755.626667a40.618667 40.618667 0 0 1-29.824 12.373333 41.344 41.344 0 0 1-30.122667-12.373333 40.106667 40.106667 0 0 1-12.672-30.122667c0-11.605333 4.096-21.845333 12.672-30.122667a40.405333 40.405333 0 0 1 30.122667-12.714666c11.605333 0 21.546667 4.138667 29.824 12.714666a40.32 40.32 0 0 1 12.714667 30.122667c0 11.861333-4.096 21.76-12.714667 30.122667zM450.986667 241.28A77.866667 77.866667 0 0 1 512.256 213.333333c24.874667 0 45.354667 8.917333 61.354667 27.946667 15.488 18.432 23.722667 41.685333 23.722666 69.674667 0 23.765333-33.152 200.533333-44.672 329.045333h-80.128C463.146667 511.402667 426.666667 334.677333 426.666667 310.954667c0-27.392 8.277333-50.645333 24.32-69.674667z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '16',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.794667 0 512 0z" fill="#6D768D"></path><path d="M490.666667 682.666667a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m13.994666-490.752c61.397333 0 112.341333 14.634667 153.002667 43.946666 40.533333 29.269333 60.885333 72.618667 60.885333 130.133334 0 35.242667-12.373333 64.938667-29.952 89.045333-10.282667 14.677333-33.664 33.408-62.890666 56.192l-32.426667 22.357333c-15.701333 12.202667-29.696 26.453333-34.858667 42.666667-1.706667 5.546667-3.072 14.677333-3.968 24.533333-0.426667 4.949333-4.864 15.018667-15.232 15.018667h-83.328c-13.568 0-15.957333-10.581333-15.744-15.786667 1.493333-34.005333 4.608-64.213333 18.474667-80.469333 28.074667-32.896 91.904-73.813333 91.904-73.813333a104.106667 104.106667 0 0 0 23.552-24.021334c10.837333-14.933333 19.797333-31.317333 19.797333-49.237333 0-20.565333-6.016-39.338667-18.090666-56.32-12.032-16.938667-34.090667-25.386667-66.005334-25.386667-31.445333 0-53.76 10.410667-66.901333 31.274667-9.685333 15.445333-15.786667 29.610667-18.346667 45.013333-0.853333 5.461333-4.394667 16.981333-16.042666 16.981334H327.210667c-17.322667 0-21.12-11.221333-20.650667-16.64 6.272-68.138667 32.896-114.688 80-144.597334 32-20.565333 71.381333-30.890667 118.101333-30.890666z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '17',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M336.256 410.026667H253.312a40.021333 40.021333 0 0 0-39.850667 43.264l23.296 278.101333c1.706667 20.693333 19.072 36.608 39.850667 36.608h59.648c11.050667 0 20.010667-8.96 20.010667-19.968v-318.037333a19.968 19.968 0 0 0-20.010667-19.968z m434.432 0h-178.944C653.312 182.314667 548.949333 170.666667 548.949333 170.666667c-44.288 0-35.114667 34.986667-38.442666 40.832 0 84.48-68.010667 155.093333-101.034667 184.362666a39.552 39.552 0 0 0-13.226667 29.653334v322.56c0 11.008 8.96 19.925333 20.010667 19.925333h233.728c30.378667 0 58.154667-17.152 71.68-44.373333 18.176-36.736 40.448-90.112 54.656-133.973334 13.781333-42.410667 26.24-94.976 33.578667-131.968a39.850667 39.850667 0 0 0-39.253334-47.658666z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '18',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M796.16 413.909333c-31.146667-0.298667-115.626667-0.085333-146.858667-0.085333h-158.464c8.533333-7.68 15.914667-14.506667 23.594667-20.906667 29.781333-24.874667 25.813333-71.082667-14.208-88.874666-22.954667-10.24-44.970667-5.632-64 11.52-34.944 31.274667-69.632 62.677333-104.277333 93.994666a15.488 15.488 0 0 1-11.178667 4.437334c-11.221333-0.085333-26.88-0.128-46.933333-0.170667a17.066667 17.066667 0 0 0-17.109334 17.066667L256 719.701333a17.066667 17.066667 0 0 0 17.066667 17.152l49.578666-0.085333c3.968 0 7.466667 0.768 10.88 2.602667 15.829333 8.832 31.701333 17.493333 47.616 26.24a18.133333 18.133333 0 0 0 9.301334 2.346666h168.405333c6.186667 0 11.946667-0.981333 17.834667-2.56 29.44-7.253333 40.021333-30.293333 38.528-52.565333-0.768-9.728-4.266667-18.346667-9.984-26.24 19.626667-5.76 35.114667-16.213333 42.112-36.096 7.125333-20.394667 1.621333-38.4-12.672-53.333333 28.16-19.754667 34.858667-44.672 18.645333-75.648h140.458667c6.570667 0 13.013333-0.597333 19.370666-2.645334 31.957333-9.813333 48.810667-42.88 35.626667-71.552-10.154667-22.186667-28.629333-33.152-52.608-33.450666z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '19',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M270.506667 413.909333c31.146667-0.298667 115.626667-0.085333 146.858666-0.085333h158.464c-8.533333-7.68-15.914667-14.506667-23.594666-20.906667-29.781333-24.874667-25.813333-71.082667 14.208-88.874666 22.954667-10.24 44.970667-5.632 64 11.52 34.944 31.274667 69.632 62.677333 104.277333 93.994666 3.413333 2.986667 6.528 4.437333 11.178667 4.437334 11.221333-0.085333 26.88-0.128 46.933333-0.170667a17.066667 17.066667 0 0 1 17.109333 17.066667l0.682667 288.853333a17.066667 17.066667 0 0 1-17.066667 17.152l-49.578666-0.085333a22.101333 22.101333 0 0 0-10.88 2.602666c-15.829333 8.832-31.701333 17.493333-47.616 26.24a18.133333 18.133333 0 0 1-9.301334 2.346667h-168.405333a68.693333 68.693333 0 0 1-17.834667-2.56c-29.44-7.253333-40.021333-30.293333-38.528-52.565333 0.768-9.728 4.266667-18.346667 9.984-26.24-19.626667-5.76-35.114667-16.213333-42.112-36.096-7.125333-20.394667-1.621333-38.4 12.672-53.333334-28.16-19.754667-34.858667-44.672-18.645333-75.648H272.853333c-6.570667 0-13.013333-0.597333-19.370666-2.645333-31.957333-9.813333-48.810667-42.88-35.626667-71.552 10.154667-22.186667 28.629333-33.152 52.608-33.450667z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '20',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M667.733333 480.128H400v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 213.333333a155.605333 155.605333 0 0 0-155.392 155.434667v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 509.013333v292.010667a28.885333 28.885333 0 0 0 28.885333 28.885333h340.138667a28.885333 28.885333 0 0 0 28.928-28.885333V509.013333a28.885333 28.885333 0 0 0-28.928-28.885333z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '21',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M400.042667 437.461333v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 170.666667a155.605333 155.605333 0 0 0-155.392 155.434666v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 466.346667v292.010666a28.885333 28.885333 0 0 0 28.885333 28.885334h340.138667a28.885333 28.885333 0 0 0 28.928-28.885334V466.346667a28.885333 28.885333 0 0 0-28.928-28.885334H400.042667z" fill="#FFFFFF"></path><path d="M595.242667 437.461333v-111.36a97.706667 97.706667 0 0 0-97.621334-97.621333 97.706667 97.706667 0 0 0-97.578666 97.621333 28.885333 28.885333 0 0 1-57.813334 0A155.605333 155.605333 0 0 1 497.621333 170.666667a155.605333 155.605333 0 0 1 155.434667 155.434666v111.36h14.634667c16 0 28.928 12.928 28.928 28.885334v292.010666a28.885333 28.885333 0 0 1-28.928 28.885334H327.552A28.885333 28.885333 0 0 1 298.666667 758.357333V466.346667c0-15.957333 12.928-28.885333 28.885333-28.885334h267.690667z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '22',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M511.999787 512.000213m-511.999787 0a511.999787 511.999787 0 1 0 1023.999573 0 511.999787 511.999787 0 1 0-1023.999573 0Z" fill="#6D768D"></path><path d="M381.354508 364.586941c0 54.015977 29.013321 103.935957 75.946635 130.986613a152.53327 152.53327 0 0 0 151.935936 0 151.12527 151.12527 0 0 0 75.946636-130.986613A151.594604 151.594604 0 0 0 533.333111 213.333671a151.594604 151.594604 0 0 0-151.89327 151.25327zM660.479725 498.901552a185.258589 185.258589 0 0 1-127.146614 50.346646c-49.066646 0-93.866628-19.199992-127.06128-50.346646C317.141201 544.853533 255.999893 637.440161 255.999893 744.106783c0 13.183995 10.709329 23.850657 23.978657 23.850657h506.709122a23.893323 23.893323 0 0 0 23.978657-23.893323c0-106.538622-61.098641-199.25325-150.186604-245.205232z" fill="#FFFFFF"></path></svg>`
  }, {
    name: '23',
    icon: `<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M445.610667 401.578667a129.322667 129.322667 0 1 0 258.645333 0 129.322667 129.322667 0 0 0-258.645333 0z m237.568 114.901333a157.354667 157.354667 0 0 1-216.362667 0 236.373333 236.373333 0 0 0-127.957333 209.706667c0 11.264 9.130667 20.394667 20.394666 20.394666h431.402667a20.394667 20.394667 0 0 0 20.394667-20.394666 236.373333 236.373333 0 0 0-127.872-209.706667zM409.813333 401.578667c0-40.362667 14.592-77.397333 38.698667-106.112a112.725333 112.725333 0 0 0-29.013333-3.925334 112.64 112.64 0 0 0-112.426667 112.469334 112.64 112.64 0 0 0 144.853333 107.648 164.693333 164.693333 0 0 1-42.112-110.08z m-18.602666 136.704a136.533333 136.533333 0 0 1-65.706667-34.474667 205.44 205.44 0 0 0-111.232 182.4c0 9.813333 7.936 17.706667 17.706667 17.706667H303.36a273.621333 273.621333 0 0 1 87.893333-165.632z" fill="#FFFFFF"></path></svg>`
  }]
}];
/** 
 * @Author: 王林 
 * @Date: 2021-06-23 22:36:56 
 * @Desc: 获取nodeIconList icon内容 
 */

const getNodeIconListIcon = name => {
  let arr = name.split('_');
  let typeData = nodeIconList.find(item => {
    return item.type === arr[0];
  });
  return typeData.list.find(item => {
    return item.name === arr[1];
  }).icon;
};

/* harmony default export */ var icons = ({
  hyperlink: icons_hyperlink,
  note,
  nodeIconList,
  getNodeIconListIcon
});
// CONCATENATED MODULE: ../simple-mind-map/src/Node.js







/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-06 11:26:00 
 * @Desc: 节点类
 */

class Node_Node {
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 11:26:17 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    // 节点数据
    this.nodeData = this.handleData(opt.data || {}); // id

    this.uid = opt.uid; // 控制实例

    this.mindMap = opt.mindMap; // 渲染实例

    this.renderer = opt.renderer; // 渲染器

    this.draw = opt.draw || null; // 主题配置

    this.themeConfig = this.mindMap.themeConfig; // 样式实例

    this.style = new src_Style(this, this.themeConfig); // 形状实例

    this.shapeInstance = new Shape(this);
    this.shapePadding = {
      paddingX: 0,
      paddingY: 0
    }; // 是否是根节点

    this.isRoot = opt.isRoot === undefined ? false : opt.isRoot; // 是否是概要节点

    this.isGeneralization = opt.isGeneralization === undefined ? false : opt.isGeneralization;
    this.generalizationBelongNode = null; // 节点层级

    this.layerIndex = opt.layerIndex === undefined ? 0 : opt.layerIndex; // 节点宽

    this.width = opt.width || 0; // 节点高

    this.height = opt.height || 0; // left

    this._left = opt.left || 0; // top

    this._top = opt.top || 0; // 自定义位置

    this.customLeft = opt.data.data.customLeft || undefined;
    this.customTop = opt.data.data.customTop || undefined; // 是否正在拖拽中

    this.isDrag = false; // 父节点

    this.parent = opt.parent || null; // 子节点

    this.children = opt.children || []; // 节点内容的容器

    this.group = null; // 节点内容对象

    this._imgData = null;
    this._iconData = null;
    this._textData = null;
    this._hyperlinkData = null;
    this._tagData = null;
    this._noteData = null;
    this.noteEl = null;
    this._expandBtn = null;
    this._lines = [];
    this._generalizationLine = null;
    this._generalizationNode = null; // 尺寸信息

    this._rectInfo = {
      imgContentWidth: 0,
      imgContentHeight: 0,
      textContentWidth: 0,
      textContentHeight: 0
    }; // 概要节点的宽高

    this._generalizationNodeWidth = 0;
    this._generalizationNodeHeight = 0; // 各种文字信息的间距

    this.textContentItemMargin = this.mindMap.opt.textContentMargin; // 图片和文字节点的间距

    this.blockContentMargin = this.mindMap.opt.imgTextMargin; // 展开收缩按钮尺寸

    this.expandBtnSize = this.mindMap.opt.expandBtnSize; // 初始渲染

    this.initRender = true; // 初始化
    // this.createNodeData()

    this.getSize();
  } // 支持自定义位置


  get left() {
    return this.customLeft || this._left;
  }

  set left(val) {
    this._left = val;
  }

  get top() {
    return this.customTop || this._top;
  }

  set top(val) {
    this._top = val;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-12 07:40:47 
   * @Desc: 更新主题配置 
   */


  updateThemeConfig() {
    // 主题配置
    this.themeConfig = this.mindMap.themeConfig; // 样式实例

    this.style.updateThemeConfig(this.themeConfig);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-05 23:11:39 
   * @Desc: 复位部分布局时会重新设置的数据 
   */


  reset() {
    this.children = [];
    this.parent = null;
    this.isRoot = false;
    this.layerIndex = 0;
    this.left = 0;
    this.top = 0;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-20 10:12:31 
   * @Desc: 处理数据 
   */


  handleData(data) {
    data.data.expand = data.data.expand === false ? false : true;
    data.data.isActive = data.data.isActive === true ? true : false;
    data.children = data.children || [];
    return data;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-02 19:53:40 
   * @Desc: 检查节点是否存在自定义数据 
   */


  hasCustomPosition() {
    return this.customLeft !== undefined && this.customTop !== undefined;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-04 09:06:56 
   * @Desc: 检查节点是否存在自定义位置的祖先节点 
   */


  ancestorHasCustomPosition() {
    let node = this;

    while (node) {
      if (node.hasCustomPosition()) {
        return true;
      }

      node = node.parent;
    }

    return false;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 15:55:04 
   * @Desc: 添加子节点 
   */


  addChildren(node) {
    this.children.push(node);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-06 22:08:09 
   * @Desc: 创建节点的各个内容对象数据
   */


  createNodeData() {
    this._imgData = this.createImgNode();
    this._iconData = this.createIconNode();
    this._textData = this.createTextNode();
    this._hyperlinkData = this.createHyperlinkNode();
    this._tagData = this.createTagNode();
    this._noteData = this.createNoteNode();
    this.createGeneralizationNode();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 09:20:02 
   * @Desc: 解绑所有事件 
   */


  removeAllEvent() {
    if (this._noteData) {
      this._noteData.node.off(['mouseover', 'mouseout']);
    }

    if (this._expandBtn) {
      this._expandBtn.off(['mouseover', 'mouseout', 'click']);
    }

    if (this.group) {
      this.group.off(['click', 'dblclick', 'contextmenu', 'mousedown', 'mouseup']);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-07 21:27:24 
   * @Desc: 移除节点内容
   */


  removeAllNode() {
    // 节点内的内容
    ;
    [this._imgData, this._iconData, this._textData, this._hyperlinkData, this._tagData, this._noteData].forEach(item => {
      if (item && item.node) item.node.remove();
    });
    this._imgData = null;
    this._iconData = null;
    this._textData = null;
    this._hyperlinkData = null;
    this._tagData = null;
    this._noteData = null; // 展开收缩按钮

    if (this._expandBtn) {
      this._expandBtn.remove();

      this._expandBtn = null;
    } // 组


    if (this.group) {
      this.group.clear();
      this.group.remove();
      this.group = null;
    } // 概要


    this.removeGeneralization();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-09 09:46:23 
   * @Desc: 计算节点的宽高 
   */


  getSize() {
    this.removeAllNode();
    this.createNodeData();
    let {
      width,
      height
    } = this.getNodeRect(); // 判断节点尺寸是否有变化

    let changed = this.width !== width || this.height !== height;
    this.width = width;
    this.height = height;
    return changed;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 14:52:17 
   * @Desc: 计算节点尺寸信息 
   */


  getNodeRect() {
    // 宽高
    let imgContentWidth = 0;
    let imgContentHeight = 0;
    let textContentWidth = 0;
    let textContentHeight = 0; // 存在图片

    if (this._imgData) {
      this._rectInfo.imgContentWidth = imgContentWidth = this._imgData.width;
      this._rectInfo.imgContentHeight = imgContentHeight = this._imgData.height;
    } // 图标


    if (this._iconData.length > 0) {
      textContentWidth += this._iconData.reduce((sum, cur) => {
        textContentHeight = Math.max(textContentHeight, cur.height);
        return sum += cur.width + this.textContentItemMargin;
      }, 0);
    } // 文字


    if (this._textData) {
      textContentWidth += this._textData.width;
      textContentHeight = Math.max(textContentHeight, this._textData.height);
    } // 超链接


    if (this._hyperlinkData) {
      textContentWidth += this._hyperlinkData.width;
      textContentHeight = Math.max(textContentHeight, this._hyperlinkData.height);
    } // 标签


    if (this._tagData.length > 0) {
      textContentWidth += this._tagData.reduce((sum, cur) => {
        textContentHeight = Math.max(textContentHeight, cur.height);
        return sum += cur.width + this.textContentItemMargin;
      }, 0);
    } // 备注


    if (this._noteData) {
      textContentWidth += this._noteData.width;
      textContentHeight = Math.max(textContentHeight, this._noteData.height);
    } // 文字内容部分的尺寸


    this._rectInfo.textContentWidth = textContentWidth;
    this._rectInfo.textContentHeight = textContentHeight; // 间距

    let margin = imgContentHeight > 0 && textContentHeight > 0 ? this.blockContentMargin : 0;
    let {
      paddingX,
      paddingY
    } = this.getPaddingVale(); // 纯内容宽高

    let _width = Math.max(imgContentWidth, textContentWidth);

    let _height = imgContentHeight + textContentHeight; // 计算节点形状需要的附加内边距


    let {
      paddingX: shapePaddingX,
      paddingY: shapePaddingY
    } = this.shapeInstance.getShapePadding(_width, _height, paddingX, paddingY);
    this.shapePadding.paddingX = shapePaddingX;
    this.shapePadding.paddingY = shapePaddingY;
    return {
      width: _width + paddingX * 2 + shapePaddingX * 2,
      height: _height + paddingY * 2 + margin + shapePaddingY * 2
    };
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-09 14:06:17 
   * @Desc: 创建图片节点 
   */


  createImgNode() {
    let img = this.nodeData.data.image;

    if (!img) {
      return;
    }

    let imgSize = this.getImgShowSize();
    let node = new svg_esm_Image().load(img).size(...imgSize);

    if (this.nodeData.data.imageTitle) {
      node.attr('title', this.nodeData.data.imageTitle);
    }

    return {
      node,
      width: imgSize[0],
      height: imgSize[1]
    };
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-09 10:12:51 
   * @Desc: 获取图片显示宽高 
   */


  getImgShowSize() {
    return resizeImgSize(this.nodeData.data.imageSize.width, this.nodeData.data.imageSize.height, this.themeConfig.imgMaxWidth, this.themeConfig.imgMaxHeight);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-09 14:10:48 
   * @Desc: 创建icon节点 
   */


  createIconNode() {
    let _data = this.nodeData.data;

    if (!_data.icon || _data.icon.length <= 0) {
      return [];
    }

    let iconSize = this.themeConfig.iconSize;
    return _data.icon.map(item => {
      return {
        node: SVG(icons.getNodeIconListIcon(item)).size(iconSize, iconSize),
        width: iconSize,
        height: iconSize
      };
    });
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-09 14:08:56 
   * @Desc: 创建文本节点 
   */


  createTextNode() {
    let g = new G();
    let fontSize = this.getStyle('fontSize', this.isRoot, this.nodeData.data.isActive);
    let lineHeight = this.getStyle('lineHeight', this.isRoot, this.nodeData.data.isActive);
    this.nodeData.data.text.split(/\n/img).forEach((item, index) => {
      let node = new Text().text(item);
      this.style.text(node);
      node.y(fontSize * lineHeight * index);
      g.add(node);
    });
    let {
      width,
      height
    } = g.bbox();
    return {
      node: g,
      width,
      height
    };
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-20 15:28:54 
   * @Desc: 创建超链接节点 
   */


  createHyperlinkNode() {
    let {
      hyperlink,
      hyperlinkTitle
    } = this.nodeData.data;

    if (!hyperlink) {
      return;
    }

    let iconSize = this.themeConfig.iconSize;
    let node = new SVG(); // 超链接节点

    let a = new A().to(hyperlink).target('_blank');
    a.node.addEventListener('click', e => {
      e.stopPropagation();
    });

    if (hyperlinkTitle) {
      a.attr('title', hyperlinkTitle);
    } // 添加一个透明的层，作为鼠标区域


    a.rect(iconSize, iconSize).fill({
      color: 'transparent'
    }); // 超链接图标

    let iconNode = SVG(icons.hyperlink).size(iconSize, iconSize);
    this.style.iconNode(iconNode);
    a.add(iconNode);
    node.add(a);
    return {
      node,
      width: iconSize,
      height: iconSize
    };
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-20 19:49:15 
   * @Desc: 创建标签节点 
   */


  createTagNode() {
    let tagData = this.nodeData.data.tag;

    if (!tagData || tagData.length <= 0) {
      return [];
    }

    let nodes = [];
    tagData.slice(0, this.mindMap.opt.maxTag).forEach((item, index) => {
      let tag = new G(); // 标签文本

      let text = new Text().text(item).x(8).cy(10);
      this.style.tagText(text, index);
      let {
        width,
        height
      } = text.bbox(); // 标签矩形

      let rect = new Rect().size(width + 16, 20);
      this.style.tagRect(rect, index);
      tag.add(rect).add(text);
      nodes.push({
        node: tag,
        width: width + 16,
        height: 20
      });
    });
    return nodes;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-20 21:19:36 
   * @Desc: 创建备注节点 
   */


  createNoteNode() {
    if (!this.nodeData.data.note) {
      return null;
    }

    let iconSize = this.themeConfig.iconSize;
    let node = new SVG().attr('cursor', 'pointer'); // 透明的层，用来作为鼠标区域

    node.add(new Rect().size(iconSize, iconSize).fill({
      color: 'transparent'
    })); // 备注图标

    let iconNode = SVG(icons.note).size(iconSize, iconSize);
    this.style.iconNode(iconNode);
    node.add(iconNode); // 备注tooltip

    if (!this.mindMap.opt.customNoteContentShow) {
      if (!this.noteEl) {
        this.noteEl = document.createElement('div');
        this.noteEl.style.cssText = `
                    position: absolute;
                    padding: 10px;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
                    display: none;
                    background-color: #fff;
                `;
        document.body.appendChild(this.noteEl);
      }

      this.noteEl.innerText = this.nodeData.data.note;
    }

    node.on('mouseover', () => {
      let {
        left,
        top
      } = node.node.getBoundingClientRect();

      if (!this.mindMap.opt.customNoteContentShow) {
        this.noteEl.style.left = left + 'px';
        this.noteEl.style.top = top + iconSize + 'px';
        this.noteEl.style.display = 'block';
      } else {
        this.mindMap.opt.customNoteContentShow.show(this.nodeData.data.note, left, top + iconSize);
      }
    });
    node.on('mouseout', () => {
      if (!this.mindMap.opt.customNoteContentShow) {
        this.noteEl.style.display = 'none';
      } else {
        this.mindMap.opt.customNoteContentShow.hide();
      }
    });
    return {
      node,
      width: iconSize,
      height: iconSize
    };
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 22:02:07 
   * @Desc: 获取节点形状 
   */


  getShape() {
    return this.style.getStyle('shape', false, false);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-09 11:10:11 
   * @Desc: 定位节点内容
   */


  layout() {
    let {
      width,
      height,
      textContentItemMargin
    } = this;
    let {
      paddingY
    } = this.getPaddingVale();
    paddingY += this.shapePadding.paddingY; // 创建组

    this.group = new G(); // 概要节点添加一个带所属节点id的类名

    if (this.isGeneralization && this.generalizationBelongNode) {
      this.group.addClass('generalization_' + this.generalizationBelongNode.uid);
    }

    this.draw.add(this.group);
    this.update(true); // 节点形状

    const shape = this.getShape();
    this.style[shape === 'rectangle' ? 'rect' : 'shape'](this.shapeInstance.createShape()); // 图片节点

    let imgHeight = 0;

    if (this._imgData) {
      imgHeight = this._imgData.height;
      this.group.add(this._imgData.node);

      this._imgData.node.cx(width / 2).y(paddingY);
    } // 内容节点


    let textContentNested = new G();
    let textContentOffsetX = 0; // icon

    let iconNested = new G();

    if (this._iconData && this._iconData.length > 0) {
      let iconLeft = 0;

      this._iconData.forEach(item => {
        item.node.x(textContentOffsetX + iconLeft).y((this._rectInfo.textContentHeight - item.height) / 2);
        iconNested.add(item.node);
        iconLeft += item.width + textContentItemMargin;
      });

      textContentNested.add(iconNested);
      textContentOffsetX += iconLeft;
    } // 文字


    if (this._textData) {
      this._textData.node.x(textContentOffsetX).y(0);

      textContentNested.add(this._textData.node);
      textContentOffsetX += this._textData.width + textContentItemMargin;
    } // 超链接


    if (this._hyperlinkData) {
      this._hyperlinkData.node.x(textContentOffsetX).y((this._rectInfo.textContentHeight - this._hyperlinkData.height) / 2);

      textContentNested.add(this._hyperlinkData.node);
      textContentOffsetX += this._hyperlinkData.width + textContentItemMargin;
    } // 标签


    let tagNested = new G();

    if (this._tagData && this._tagData.length > 0) {
      let tagLeft = 0;

      this._tagData.forEach(item => {
        item.node.x(textContentOffsetX + tagLeft).y((this._rectInfo.textContentHeight - item.height) / 2);
        tagNested.add(item.node);
        tagLeft += item.width + textContentItemMargin;
      });

      textContentNested.add(tagNested);
      textContentOffsetX += tagLeft;
    } // 备注


    if (this._noteData) {
      this._noteData.node.x(textContentOffsetX).y((this._rectInfo.textContentHeight - this._noteData.height) / 2);

      textContentNested.add(this._noteData.node);
      textContentOffsetX += this._noteData.width;
    } // 文字内容整体


    textContentNested.translate(width / 2 - textContentNested.bbox().width / 2, imgHeight + paddingY + (imgHeight > 0 && this._rectInfo.textContentHeight > 0 ? this.blockContentMargin : 0));
    this.group.add(textContentNested); // 单击事件，选中节点

    this.group.on('click', e => {
      this.mindMap.emit('node_click', this, e);
      this.active(e);
    });
    this.group.on('mousedown', e => {
      e.stopPropagation();
      this.mindMap.emit('node_mousedown', this, e);
    });
    this.group.on('mouseup', e => {
      e.stopPropagation();
      this.mindMap.emit('node_mouseup', this, e);
    }); // 双击事件

    this.group.on('dblclick', e => {
      if (this.mindMap.opt.readonly) {
        return;
      }

      e.stopPropagation();
      this.mindMap.emit('node_dblclick', this, e);
    }); // 右键菜单事件

    this.group.on('contextmenu', e => {
      if (this.mindMap.opt.readonly || this.isGeneralization) {
        return;
      }

      e.stopPropagation();
      e.preventDefault();

      if (this.nodeData.data.isActive) {
        this.renderer.clearActive();
      }

      this.active(e);
      this.mindMap.emit('node_contextmenu', e, this);
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 16:44:22 
   * @Desc: 激活节点 
   */


  active(e) {
    if (this.mindMap.opt.readonly) {
      return;
    }

    e.stopPropagation();

    if (this.nodeData.data.isActive) {
      return;
    }

    this.mindMap.emit('before_node_active', this, this.renderer.activeNodeList);
    this.renderer.clearActive();
    this.mindMap.execCommand('SET_NODE_ACTIVE', this, true);
    this.renderer.addActiveNode(this);
    this.mindMap.emit('node_active', this, this.renderer.activeNodeList);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 20:20:09 
   * @Desc: 渲染节点到画布，会移除旧的，创建新的
   */


  renderNode() {
    // 连线
    this.renderLine();
    this.removeAllEvent();
    this.removeAllNode();
    this.createNodeData();
    this.layout();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 22:47:01 
   * @Desc: 更新节点
   */


  update(layout = false) {
    if (!this.group) {
      return;
    } // 需要移除展开收缩按钮


    if (this._expandBtn && this.nodeData.children.length <= 0) {
      this.removeExpandBtn();
    } else if (!this._expandBtn && this.nodeData.children.length > 0) {
      // 需要添加展开收缩按钮
      this.renderExpandBtn();
    } else {
      this.updateExpandBtnPos();
    }

    this.renderGeneralization();
    let t = this.group.transform();

    if (!layout) {
      this.group.animate(300).translate(this.left - t.translateX, this.top - t.translateY);
    } else {
      this.group.translate(this.left - t.translateX, this.top - t.translateY);
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 13:55:58 
   * @Desc: 递归渲染 
   */


  render() {
    // 节点
    if (this.initRender) {
      this.initRender = false;
      this.renderNode();
    } else {
      // 连线
      this.renderLine();
      this.update();
    } // 子节点


    if (this.children && this.children.length && this.nodeData.data.expand !== false) {
      asyncRun(this.children.map(item => {
        return () => {
          item.render();
        };
      }));
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 09:24:55 
   * @Desc: 递归删除 
   */


  remove() {
    this.initRender = true;
    this.removeAllEvent();
    this.removeAllNode();
    this.removeLine(); // 子节点

    if (this.children && this.children.length) {
      asyncRun(this.children.map(item => {
        return () => {
          item.remove();
        };
      }));
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-23 18:39:14 
   * @Desc: 隐藏节点 
   */


  hide() {
    this.group.hide();
    this.hideGeneralization();

    if (this.parent) {
      let index = this.parent.children.indexOf(this);

      this.parent._lines[index].hide();
    } // 子节点


    if (this.children && this.children.length) {
      asyncRun(this.children.map(item => {
        return () => {
          item.hide();
        };
      }));
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-23 18:39:14 
   * @Desc: 显示节点 
   */


  show() {
    if (!this.group) {
      return;
    }

    this.group.show();
    this.showGeneralization();

    if (this.parent) {
      let index = this.parent.children.indexOf(this);

      this.parent._lines[index].show();
    } // 子节点


    if (this.children && this.children.length) {
      asyncRun(this.children.map(item => {
        return () => {
          item.show();
        };
      }));
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-10 22:01:53 
   * @Desc: 连线 
   */


  renderLine() {
    if (this.nodeData.data.expand === false) {
      return;
    }

    let childrenLen = this.nodeData.children.length;

    if (childrenLen > this._lines.length) {
      // 创建缺少的线
      new Array(childrenLen - this._lines.length).fill(0).forEach(() => {
        this._lines.push(this.draw.path());
      });
    } else if (childrenLen < this._lines.length) {
      // 删除多余的线
      this._lines.slice(childrenLen).forEach(line => {
        line.remove();
      });

      this._lines = this._lines.slice(0, childrenLen);
    } // 画线


    this.renderer.layout.renderLine(this, this._lines, (line, node) => {
      // 添加样式
      this.styleLine(line, node);
    }); // 和父级的连线也需要更新

    if (this.parent) {
      this.parent.renderLine();
    }
  }
  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2022-09-17 12:41:29 
   * @Desc: 设置连线样式 
   */


  styleLine(line, node) {
    let width = node.getSelfInhertStyle('lineWidth') || node.getStyle('lineWidth', true);
    let color = node.getSelfInhertStyle('lineColor') || node.getStyle('lineColor', true);
    let dasharray = node.getSelfInhertStyle('lineDasharray') || node.getStyle('lineDasharray', true);
    this.style.line(line, {
      width,
      color,
      dasharray
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 16:40:21 
   * @Desc: 移除连线 
   */


  removeLine() {
    this._lines.forEach(line => {
      line.remove();
    });

    this._lines = [];
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-01 09:27:30 
   * @Desc: 检查是否存在概要 
   */


  checkHasGeneralization() {
    return !!this.nodeData.data.generalization;
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-31 09:41:28 
   * @Desc: 创建概要节点 
   */


  createGeneralizationNode() {
    if (this.isGeneralization || !this.checkHasGeneralization()) {
      return;
    }

    if (!this._generalizationLine) {
      this._generalizationLine = this.draw.path();
    }

    if (!this._generalizationNode) {
      this._generalizationNode = new Node_Node({
        data: {
          data: this.nodeData.data.generalization
        },
        uid: this.mindMap.uid++,
        renderer: this.renderer,
        mindMap: this.mindMap,
        draw: this.draw,
        isGeneralization: true
      });
      this._generalizationNodeWidth = this._generalizationNode.width;
      this._generalizationNodeHeight = this._generalizationNode.height;
      this._generalizationNode.generalizationBelongNode = this;

      if (this.nodeData.data.generalization.isActive) {
        this.renderer.addActiveNode(this._generalizationNode);
      }
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-01 15:38:52 
   * @Desc: 更新概要节点 
   */


  updateGeneralization() {
    this.removeGeneralization();
    this.createGeneralizationNode();
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 08:35:51 
   * @Desc: 渲染概要节点 
   */


  renderGeneralization() {
    if (this.isGeneralization) {
      return;
    }

    if (!this.checkHasGeneralization()) {
      this.removeGeneralization();
      this._generalizationNodeWidth = 0;
      this._generalizationNodeHeight = 0;
      return;
    }

    if (this.nodeData.data.expand === false) {
      this.removeGeneralization();
      return;
    }

    this.createGeneralizationNode();
    this.renderer.layout.renderGeneralization(this, this._generalizationLine, this._generalizationNode);
    this.style.generalizationLine(this._generalizationLine);

    this._generalizationNode.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 13:11:27 
   * @Desc: 删除概要节点 
   */


  removeGeneralization() {
    if (this._generalizationLine) {
      this._generalizationLine.remove();

      this._generalizationLine = null;
    }

    if (this._generalizationNode) {
      // 删除概要节点时要同步从激活节点里删除
      this.renderer.removeActiveNode(this._generalizationNode);

      this._generalizationNode.remove();

      this._generalizationNode = null;
    } // hack修复当激活一个节点时创建概要，然后立即激活创建的概要节点后会重复创建概要节点并且无法删除的问题


    if (this.generalizationBelongNode) {
      this.draw.find('.generalization_' + this.generalizationBelongNode.uid).remove();
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-01 09:56:46 
   * @Desc: 隐藏概要节点 
   */


  hideGeneralization() {
    if (this._generalizationLine) {
      this._generalizationLine.hide();
    }

    if (this._generalizationNode) {
      this._generalizationNode.hide();
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-01 09:57:42 
   * @Desc: 显示概要节点 
   */


  showGeneralization() {
    if (this._generalizationLine) {
      this._generalizationLine.show();
    }

    if (this._generalizationNode) {
      this._generalizationNode.show();
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 17:59:14 
   * @Desc: 创建或更新展开收缩按钮内容 
   */


  updateExpandBtnNode() {
    if (this._expandBtn) {
      this._expandBtn.clear();
    }

    let iconSvg;

    if (this.nodeData.data.expand === false) {
      iconSvg = btns.open;
    } else {
      iconSvg = btns.close;
    }

    let node = SVG(iconSvg).size(this.expandBtnSize, this.expandBtnSize);
    let fillNode = new Circle().size(this.expandBtnSize);
    node.x(0).y(-this.expandBtnSize / 2);
    fillNode.x(0).y(-this.expandBtnSize / 2);
    this.style.iconBtn(node, fillNode);
    if (this._expandBtn) this._expandBtn.add(fillNode).add(node);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-12 18:18:13 
   * @Desc: 更新展开收缩按钮位置 
   */


  updateExpandBtnPos() {
    if (!this._expandBtn) {
      return;
    }

    this.renderer.layout.renderExpandBtn(this, this._expandBtn);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 19:47:01 
   * @Desc: 展开收缩按钮 
   */


  renderExpandBtn() {
    if (!this.nodeData.children || this.nodeData.children.length <= 0 || this.isRoot) {
      return;
    }

    this._expandBtn = new G();
    this.updateExpandBtnNode();

    this._expandBtn.on('mouseover', e => {
      e.stopPropagation();

      this._expandBtn.css({
        cursor: 'pointer'
      });
    });

    this._expandBtn.on('mouseout', e => {
      e.stopPropagation();

      this._expandBtn.css({
        cursor: 'auto'
      });
    });

    this._expandBtn.on('click', e => {
      e.stopPropagation(); // 展开收缩

      this.mindMap.execCommand('SET_NODE_EXPAND', this, !this.nodeData.data.expand);
      this.mindMap.emit('expand_btn_click', this);
    });

    this.group.add(this._expandBtn);
    this.updateExpandBtnPos();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 13:26:00 
   * @Desc: 移除展开收缩按钮 
   */


  removeExpandBtn() {
    if (this._expandBtn) {
      this._expandBtn.off(['mouseover', 'mouseout', 'click']);

      this._expandBtn.clear();

      this._expandBtn.remove();

      this._expandBtn = null;
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-25 09:51:37 
   * @Desc: 检测当前节点是否是某个节点的祖先节点
   */


  isParent(node) {
    if (this === node) {
      return false;
    }

    let parent = node.parent;

    while (parent) {
      if (this === parent) {
        return true;
      }

      parent = parent.parent;
    }

    return false;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-25 10:32:34 
   * @Desc: 检测当前节点是否是某个节点的兄弟节点
   */


  isBrother(node) {
    if (!this.parent || this === node) {
      return false;
    }

    return this.parent.children.find(item => {
      return item === node;
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-20 22:51:57 
   * @Desc: 获取padding值 
   */


  getPaddingVale() {
    return {
      paddingX: this.getStyle('paddingX', true, this.nodeData.data.isActive),
      paddingY: this.getStyle('paddingY', true, this.nodeData.data.isActive)
    };
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 21:48:49 
   * @Desc: 获取某个样式 
   */


  getStyle(prop, root, isActive) {
    let v = this.style.merge(prop, root, isActive);
    return v === undefined ? '' : v;
  }
  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2022-09-17 11:21:15 
   * @Desc: 获取自定义样式 
   */


  getSelfStyle(prop) {
    return this.style.getSelfStyle(prop);
  }
  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2022-09-17 11:21:26 
   * @Desc:  获取最近一个存在自身自定义样式的祖先节点的自定义样式
   */


  getParentSelfStyle(prop) {
    if (this.parent) {
      return this.parent.getSelfStyle(prop) || this.parent.getParentSelfStyle(prop);
    }

    return null;
  }
  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2022-09-17 12:15:30 
   * @Desc: 获取自身可继承的自定义样式 
   */


  getSelfInhertStyle(prop) {
    return this.getSelfStyle(prop) // 自身
    || this.getParentSelfStyle(prop); // 父级
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 22:18:07 
   * @Desc: 修改某个样式 
   */


  setStyle(prop, value, isActive) {
    this.mindMap.execCommand('SET_NODE_STYLE', this, prop, value, isActive);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-22 22:04:02 
   * @Desc: 获取数据 
   */


  getData(key) {
    return key ? this.nodeData.data[key] || '' : this.nodeData.data;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-22 22:12:01 
   * @Desc: 设置数据 
   */


  setData(data = {}) {
    this.mindMap.execCommand('SET_NODE_DATA', this, data);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:41:28 
   * @Desc: 设置文本 
   */


  setText(text) {
    this.mindMap.execCommand('SET_NODE_TEXT', this, text);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:42:19 
   * @Desc: 设置图片 
   */


  setImage(imgData) {
    this.mindMap.execCommand('SET_NODE_IMAGE', this, imgData);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:47:29 
   * @Desc: 设置图标 
   */


  setIcon(icons) {
    this.mindMap.execCommand('SET_NODE_ICON', this, icons);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:50:41 
   * @Desc: 设置超链接 
   */


  setHyperlink(link, title) {
    this.mindMap.execCommand('SET_NODE_HYPERLINK', this, link, title);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:53:24 
   * @Desc: 设置备注 
   */


  setNote(note) {
    this.mindMap.execCommand('SET_NODE_NOTE', this, note);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:55:08 
   * @Desc: 设置标签 
   */


  setTag(tag) {
    this.mindMap.execCommand('SET_NODE_TAG', this, tag);
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 21:47:45 
   * @Desc: 设置形状 
   */


  setShape(shape) {
    this.mindMap.execCommand('SET_NODE_SHAPE', this, shape);
  }

}

/* harmony default export */ var src_Node = (Node_Node);
// CONCATENATED MODULE: ../simple-mind-map/src/layouts/Base.js



/** 
 * @Author: 王林 
 * @Date: 2021-04-12 22:24:30 
 * @Desc: 布局基类 
 */

class Base_Base {
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:25:16 
   * @Desc: 构造函数 
   */
  constructor(renderer) {
    // 渲染实例
    this.renderer = renderer; // 控制实例

    this.mindMap = renderer.mindMap; // 绘图对象

    this.draw = this.mindMap.draw; // 根节点

    this.root = null;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:39:50 
   * @Desc: 计算节点位置 
   */


  doLayout() {
    throw new Error('【computed】方法为必要方法，需要子类进行重写！');
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:41:04 
   * @Desc: 连线 
   */


  renderLine() {
    throw new Error('【renderLine】方法为必要方法，需要子类进行重写！');
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:42:08 
   * @Desc: 定位展开收缩按钮 
   */


  renderExpandBtn() {
    throw new Error('【renderExpandBtn】方法为必要方法，需要子类进行重写！');
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 22:49:28 
   * @Desc: 概要节点 
   */


  renderGeneralization() {}
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 21:30:54 
   * @Desc: 创建节点实例 
   */


  createNode(data, parent, isRoot, layerIndex) {
    // 创建节点
    let newNode = null; // 复用节点

    if (data && data._node && !this.renderer.reRender) {
      newNode = data._node;
      newNode.reset();
      newNode.layerIndex = layerIndex;
    } else {
      // 创建新节点
      newNode = new src_Node({
        data,
        uid: this.mindMap.uid++,
        renderer: this.renderer,
        mindMap: this.mindMap,
        draw: this.draw,
        layerIndex
      });
      newNode.getSize(); // 数据关联实际节点

      data._node = newNode;

      if (data.data.isActive) {
        this.renderer.addActiveNode(newNode);
      }
    } // 根节点


    if (isRoot) {
      newNode.isRoot = true;
      this.root = newNode;
    } else {
      // 互相收集
      newNode.parent = parent._node;

      parent._node.addChildren(newNode);
    }

    return newNode;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-16 13:48:43 
   * @Desc: 定位节点到画布中间 
   */


  setNodeCenter(node) {
    node.left = (this.mindMap.width - node.width) / 2;
    node.top = (this.mindMap.height - node.height) / 2;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 11:25:52 
   * @Desc: 更新子节点属性 
   */


  updateChildren(children, prop, offset) {
    children.forEach(item => {
      item[prop] += offset;

      if (item.children && item.children.length && !item.hasCustomPosition()) {
        // 适配自定义位置
        this.updateChildren(item.children, prop, offset);
      }
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 15:05:01 
   * @Desc: 二次贝塞尔曲线 
   */


  quadraticCurvePath(x1, y1, x2, y2) {
    let cx = x1 + (x2 - x1) * 0.2;
    let cy = y1 + (y2 - y1) * 0.8;
    return `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 15:05:18 
   * @Desc: 三次贝塞尔曲线 
   */


  cubicBezierPath(x1, y1, x2, y2) {
    let cx1 = x1 + (x2 - x1) / 2;
    let cy1 = y1;
    let cx2 = cx1;
    let cy2 = y2;
    return `M ${x1},${y1} C ${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-27 19:00:07 
   * @Desc:  获取节点的marginX
   */


  getMarginX(layerIndex) {
    return layerIndex === 1 ? this.mindMap.themeConfig.second.marginX : this.mindMap.themeConfig.node.marginX;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 15:34:20 
   * @Desc: 获取节点的marginY
   */


  getMarginY(layerIndex) {
    return layerIndex === 1 ? this.mindMap.themeConfig.second.marginY : this.mindMap.themeConfig.node.marginY;
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-31 20:53:12 
   * @Desc: 获取节点包括概要在内的宽度 
   */


  getNodeWidthWithGeneralization(node) {
    return Math.max(node.width, node.checkHasGeneralization() ? node._generalizationNodeWidth : 0);
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-31 20:53:12 
   * @Desc: 获取节点包括概要在内的高度 
   */


  getNodeHeightWithGeneralization(node) {
    return Math.max(node.height, node.checkHasGeneralization() ? node._generalizationNodeHeight : 0);
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-31 09:14:03 
   * @Desc: 获取节点的边界值 
   * dir：生长方向，h（水平）、v（垂直）
   * isLeft：是否向左生长
   */


  getNodeBoundaries(node, dir, isLeft) {
    let {
      generalizationLineMargin,
      generalizationNodeMargin
    } = this.mindMap.themeConfig;

    let walk = root => {
      let _left = Infinity;

      let _right = -Infinity;

      let _top = Infinity;

      let _bottom = -Infinity;

      if (root.children && root.children.length > 0) {
        root.children.forEach(child => {
          let {
            left,
            right,
            top,
            bottom
          } = walk(child); // 概要内容的宽度

          let generalizationWidth = child.checkHasGeneralization() && child.nodeData.data.expand ? child._generalizationNodeWidth + generalizationNodeMargin : 0; // 概要内容的高度

          let generalizationHeight = child.checkHasGeneralization() && child.nodeData.data.expand ? child._generalizationNodeHeight + generalizationNodeMargin : 0;

          if (left - (dir === 'h' ? generalizationWidth : 0) < _left) {
            _left = left - (dir === 'h' ? generalizationWidth : 0);
          }

          if (right + (dir === 'h' ? generalizationWidth : 0) > _right) {
            _right = right + (dir === 'h' ? generalizationWidth : 0);
          }

          if (top < _top) {
            _top = top;
          }

          if (bottom + (dir === 'v' ? generalizationHeight : 0) > _bottom) {
            _bottom = bottom + (dir === 'v' ? generalizationHeight : 0);
          }
        });
      }

      let cur = {
        left: root.left,
        right: root.left + root.width,
        top: root.top,
        bottom: root.top + root.height
      };
      return {
        left: cur.left < _left ? cur.left : _left,
        right: cur.right > _right ? cur.right : _right,
        top: cur.top < _top ? cur.top : _top,
        bottom: cur.bottom > _bottom ? cur.bottom : _bottom
      };
    };

    let {
      left,
      right,
      top,
      bottom
    } = walk(node);
    return {
      left,
      right,
      top,
      bottom,
      generalizationLineMargin,
      generalizationNodeMargin
    };
  }

}

/* harmony default export */ var layouts_Base = (Base_Base);
// CONCATENATED MODULE: ../simple-mind-map/src/layouts/LogicalStructure.js



/** 
 * @Author: 王林 
 * @Date: 2021-04-12 22:25:58 
 * @Desc: 逻辑结构图 
 */

class LogicalStructure_LogicalStructure extends layouts_Base {
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:26:31 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    super(opt);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 14:04:20 
   * @Desc: 布局
   */


  doLayout(callback) {
    let task = [() => {
      this.computedBaseValue();
    }, () => {
      this.computedTopValue();
    }, () => {
      this.adjustTopValue();
    }, () => {
      callback(this.root);
    }];
    asyncRun(task);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 09:49:32 
   * @Desc: 遍历数据计算节点的left、width、height
   */


  computedBaseValue() {
    walk(this.renderer.renderTree, null, (cur, parent, isRoot, layerIndex) => {
      let newNode = this.createNode(cur, parent, isRoot, layerIndex); // 根节点定位在画布中心位置

      if (isRoot) {
        this.setNodeCenter(newNode);
      } else {
        // 非根节点
        // 定位到父节点右侧
        newNode.left = parent._node.left + parent._node.width + this.getMarginX(layerIndex);
      }

      if (!cur.data.expand) {
        return true;
      }
    }, (cur, parent, isRoot, layerIndex) => {
      // 返回时计算节点的areaHeight，也就是子节点所占的高度之和，包括外边距
      let len = cur.data.expand === false ? 0 : cur._node.children.length;
      cur._node.childrenAreaHeight = len ? cur._node.children.reduce((h, item) => {
        return h + item.height;
      }, 0) + (len + 1) * this.getMarginY(layerIndex + 1) : 0;
    }, true, 0);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 09:59:25 
   * @Desc: 遍历节点树计算节点的top 
   */


  computedTopValue() {
    walk(this.root, null, (node, parent, isRoot, layerIndex) => {
      if (node.nodeData.data.expand && node.children && node.children.length) {
        let marginY = this.getMarginY(layerIndex + 1); // 第一个子节点的top值 = 该节点中心的top值 - 子节点的高度之和的一半

        let top = node.top + node.height / 2 - node.childrenAreaHeight / 2;
        let totalTop = top + marginY;
        node.children.forEach(cur => {
          cur.top = totalTop;
          totalTop += cur.height + marginY;
        });
      }
    }, null, true);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 10:04:05 
   * @Desc: 调整节点top 
   */


  adjustTopValue() {
    walk(this.root, null, (node, parent, isRoot, layerIndex) => {
      if (!node.nodeData.data.expand) {
        return;
      } // 判断子节点所占的高度之和是否大于该节点自身，大于则需要调整位置


      let difference = node.childrenAreaHeight - this.getMarginY(layerIndex + 1) * 2 - node.height;

      if (difference > 0) {
        this.updateBrothers(node, difference / 2);
      }
    }, null, true);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 14:26:03 
   * @Desc: 更新兄弟节点的top
   */


  updateBrothers(node, addHeight) {
    if (node.parent) {
      let childrenList = node.parent.children;
      let index = childrenList.findIndex(item => {
        return item === node;
      });
      childrenList.forEach((item, _index) => {
        if (item === node || item.hasCustomPosition()) {
          // 适配自定义位置
          return;
        }

        let _offset = 0; // 上面的节点往上移

        if (_index < index) {
          _offset = -addHeight;
        } else if (_index > index) {
          // 下面的节点往下移
          _offset = addHeight;
        }

        item.top += _offset; // 同步更新子节点的位置

        if (item.children && item.children.length) {
          this.updateChildren(item.children, 'top', _offset);
        }
      }); // 更新父节点的位置

      this.updateBrothers(node.parent, addHeight);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 14:42:48 
   * @Desc: 绘制连线，连接该节点到其子节点
   */


  renderLine(node, lines, style) {
    if (node.children.length <= 0) {
      return [];
    }

    let {
      left,
      top,
      width,
      height,
      expandBtnSize
    } = node;
    node.children.forEach((item, index) => {
      let x1 = node.layerIndex === 0 ? left + width / 2 : left + width + expandBtnSize;
      let y1 = top + height / 2;
      let x2 = item.left;
      let y2 = item.top + item.height / 2;
      let path = '';

      if (node.isRoot) {
        path = this.quadraticCurvePath(x1, y1, x2, y2);
      } else {
        path = this.cubicBezierPath(x1, y1, x2, y2);
      }

      lines[index].plot(path);
      style && style(lines[index], item);
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 19:54:26 
   * @Desc: 渲染按钮 
   */


  renderExpandBtn(node, btn) {
    let {
      width,
      height
    } = node;
    let {
      translateX,
      translateY
    } = btn.transform();
    btn.translate(width - translateX, height / 2 - translateY);
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 08:30:35 
   * @Desc: 创建概要节点 
   */


  renderGeneralization(node, gLine, gNode) {
    let {
      top,
      bottom,
      right,
      generalizationLineMargin,
      generalizationNodeMargin
    } = this.getNodeBoundaries(node, 'h');
    let x1 = right + generalizationLineMargin;
    let y1 = top;
    let x2 = right + generalizationLineMargin;
    let y2 = bottom;
    let cx = x1 + 20;
    let cy = y1 + (y2 - y1) / 2;
    let path = `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;
    gLine.plot(path);
    gNode.left = right + generalizationNodeMargin;
    gNode.top = top + (bottom - top - gNode.height) / 2;
  }

}

/* harmony default export */ var layouts_LogicalStructure = (LogicalStructure_LogicalStructure);
// CONCATENATED MODULE: ../simple-mind-map/src/layouts/MindMap.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-12 22:25:58 
 * @Desc: 思维导图 
 * 在逻辑结构图的基础上增加一个变量来记录生长方向，向左还是向右，同时在计算left的时候根据方向来计算、调整top时只考虑同方向的节点即可
 */

class MindMap_MindMap extends layouts_Base {
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:26:31 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    super(opt);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 14:04:20 
   * @Desc: 布局
   */


  doLayout(callback) {
    let task = [() => {
      this.computedBaseValue();
    }, () => {
      this.computedTopValue();
    }, () => {
      this.adjustTopValue();
    }, () => {
      callback(this.root);
    }];
    asyncRun(task);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 09:49:32 
   * @Desc: 遍历数据计算节点的left、width、height
   */


  computedBaseValue() {
    walk(this.renderer.renderTree, null, (cur, parent, isRoot, layerIndex, index) => {
      let newNode = this.createNode(cur, parent, isRoot, layerIndex); // 根节点定位在画布中心位置

      if (isRoot) {
        this.setNodeCenter(newNode);
      } else {
        // 非根节点
        // 三级及以下节点以上级为准
        if (parent._node.dir) {
          newNode.dir = parent._node.dir;
        } else {
          // 节点生长方向
          newNode.dir = index % 2 === 0 ? 'right' : 'left';
        } // 根据生长方向定位到父节点的左侧或右侧


        newNode.left = newNode.dir === 'right' ? parent._node.left + parent._node.width + this.getMarginX(layerIndex) : parent._node.left - this.getMarginX(layerIndex) - newNode.width;
      }

      if (!cur.data.expand) {
        return true;
      }
    }, (cur, parent, isRoot, layerIndex) => {
      // 返回时计算节点的leftChildrenAreaHeight和rightChildrenAreaHeight，也就是左侧和右侧子节点所占的高度之和，包括外边距
      if (!cur.data.expand) {
        cur._node.leftChildrenAreaHeight = 0;
        cur._node.rightChildrenAreaHeight = 0;
        return;
      } // 理论上只有根节点是存在两个方向的子节点的，其他节点的子节点一定全都是同方向，但是为了逻辑统一，就不按特殊处理的方式来写了


      let leftLen = 0;
      let rightLen = 0;
      let leftChildrenAreaHeight = 0;
      let rightChildrenAreaHeight = 0;

      cur._node.children.forEach(item => {
        if (item.dir === 'left') {
          leftLen++;
          leftChildrenAreaHeight += item.height;
        } else {
          rightLen++;
          rightChildrenAreaHeight += item.height;
        }
      });

      cur._node.leftChildrenAreaHeight = leftChildrenAreaHeight + (leftLen + 1) * this.getMarginY(layerIndex + 1);
      cur._node.rightChildrenAreaHeight = rightChildrenAreaHeight + (rightLen + 1) * this.getMarginY(layerIndex + 1);
    }, true, 0);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 09:59:25 
   * @Desc: 遍历节点树计算节点的top 
   */


  computedTopValue() {
    walk(this.root, null, (node, parent, isRoot, layerIndex) => {
      if (node.nodeData.data.expand && node.children && node.children.length) {
        let marginY = this.getMarginY(layerIndex + 1);
        let baseTop = node.top + node.height / 2 + marginY; // 第一个子节点的top值 = 该节点中心的top值 - 子节点的高度之和的一半

        let leftTotalTop = baseTop - node.leftChildrenAreaHeight / 2;
        let rightTotalTop = baseTop - node.rightChildrenAreaHeight / 2;
        node.children.forEach(cur => {
          if (cur.dir === 'left') {
            cur.top = leftTotalTop;
            leftTotalTop += cur.height + marginY;
          } else {
            cur.top = rightTotalTop;
            rightTotalTop += cur.height + marginY;
          }
        });
      }
    }, null, true);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 10:04:05 
   * @Desc: 调整节点top 
   */


  adjustTopValue() {
    walk(this.root, null, (node, parent, isRoot, layerIndex) => {
      if (!node.nodeData.data.expand) {
        return;
      } // 判断子节点所占的高度之和是否大于该节点自身，大于则需要调整位置


      let base = this.getMarginY(layerIndex + 1) * 2 + node.height;
      let leftDifference = node.leftChildrenAreaHeight - base;
      let rightDifference = node.rightChildrenAreaHeight - base;

      if (leftDifference > 0 || rightDifference > 0) {
        this.updateBrothers(node, leftDifference / 2, rightDifference / 2);
      }
    }, null, true);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 14:26:03 
   * @Desc: 更新兄弟节点的top
   */


  updateBrothers(node, leftAddHeight, rightAddHeight) {
    if (node.parent) {
      // 过滤出和自己同方向的节点
      let childrenList = node.parent.children.filter(item => {
        return item.dir === node.dir;
      });
      let index = childrenList.findIndex(item => {
        return item === node;
      });
      childrenList.forEach((item, _index) => {
        if (item.hasCustomPosition()) {
          // 适配自定义位置
          return;
        }

        let _offset = 0;
        let addHeight = item.dir === 'left' ? leftAddHeight : rightAddHeight; // 上面的节点往上移

        if (_index < index) {
          _offset = -addHeight;
        } else if (_index > index) {
          // 下面的节点往下移
          _offset = addHeight;
        }

        item.top += _offset; // 同步更新子节点的位置

        if (item.children && item.children.length) {
          this.updateChildren(item.children, 'top', _offset);
        }
      }); // 更新父节点的位置

      this.updateBrothers(node.parent, leftAddHeight, rightAddHeight);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 14:42:48 
   * @Desc: 绘制连线，连接该节点到其子节点
   */


  renderLine(node, lines, style) {
    if (node.children.length <= 0) {
      return [];
    }

    let {
      left,
      top,
      width,
      height,
      expandBtnSize
    } = node;
    node.children.forEach((item, index) => {
      let x1 = node.layerIndex === 0 ? left + width / 2 : item.dir === 'left' ? left - expandBtnSize : left + width + 20;
      let y1 = top + height / 2;
      let x2 = item.dir === 'left' ? item.left + item.width : item.left;
      let y2 = item.top + item.height / 2;
      let path = '';

      if (node.isRoot) {
        path = this.quadraticCurvePath(x1, y1, x2, y2);
      } else {
        path = this.cubicBezierPath(x1, y1, x2, y2);
      }

      lines[index].plot(path);
      style && style(lines[index], item);
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 19:54:26 
   * @Desc: 渲染按钮 
   */


  renderExpandBtn(node, btn) {
    let {
      width,
      height,
      expandBtnSize
    } = node;
    let {
      translateX,
      translateY
    } = btn.transform();
    let x = (node.dir === 'left' ? 0 - expandBtnSize : width) - translateX;
    let y = height / 2 - translateY;
    btn.translate(x, y);
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 08:30:35 
   * @Desc: 创建概要节点 
   */


  renderGeneralization(node, gLine, gNode) {
    let isLeft = node.dir === 'left';
    let {
      top,
      bottom,
      left,
      right,
      generalizationLineMargin,
      generalizationNodeMargin
    } = this.getNodeBoundaries(node, 'h', isLeft);
    let x = isLeft ? left - generalizationLineMargin : right + generalizationLineMargin;
    let x1 = x;
    let y1 = top;
    let x2 = x;
    let y2 = bottom;
    let cx = x1 + (isLeft ? -20 : 20);
    let cy = y1 + (y2 - y1) / 2;
    let path = `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;
    gLine.plot(path);
    gNode.left = x + (isLeft ? -generalizationNodeMargin : generalizationNodeMargin) - (isLeft ? gNode.width : 0);
    gNode.top = top + (bottom - top - gNode.height) / 2;
  }

}

/* harmony default export */ var layouts_MindMap = (MindMap_MindMap);
// CONCATENATED MODULE: ../simple-mind-map/src/layouts/CatalogOrganization.js



/** 
 * @Author: 王林 
 * @Date: 2021-04-12 22:25:58 
 * @Desc: 目录组织图 
 */

class CatalogOrganization_CatalogOrganization extends layouts_Base {
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:26:31 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    super(opt);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 14:04:20 
   * @Desc: 布局
   */


  doLayout(callback) {
    let task = [() => {
      this.computedBaseValue();
    }, () => {
      this.computedLeftTopValue();
    }, () => {
      this.adjustLeftTopValue();
    }, () => {
      callback(this.root);
    }];
    asyncRun(task);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 09:49:32 
   * @Desc: 遍历数据计算节点的left、width、height
   */


  computedBaseValue() {
    walk(this.renderer.renderTree, null, (cur, parent, isRoot, layerIndex) => {
      let newNode = this.createNode(cur, parent, isRoot, layerIndex); // 根节点定位在画布中心位置

      if (isRoot) {
        this.setNodeCenter(newNode);
      } else {
        // 非根节点
        if (parent._node.isRoot) {
          newNode.top = parent._node.top + parent._node.height + this.getMarginX(layerIndex);
        }
      }

      if (!cur.data.expand) {
        return true;
      }
    }, (cur, parent, isRoot, layerIndex) => {
      if (isRoot) {
        let len = cur.data.expand === false ? 0 : cur._node.children.length;
        cur._node.childrenAreaWidth = len ? cur._node.children.reduce((h, item) => {
          return h + item.width;
        }, 0) + (len + 1) * this.getMarginX(layerIndex + 1) : 0;
      }
    }, true, 0);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 09:59:25 
   * @Desc: 遍历节点树计算节点的left、top
   */


  computedLeftTopValue() {
    walk(this.root, null, (node, parent, isRoot, layerIndex) => {
      if (node.nodeData.data.expand && node.children && node.children.length) {
        let marginX = this.getMarginX(layerIndex + 1);
        let marginY = this.getMarginY(layerIndex + 1);

        if (isRoot) {
          let left = node.left + node.width / 2 - node.childrenAreaWidth / 2;
          let totalLeft = left + marginX;
          node.children.forEach(cur => {
            cur.left = totalLeft;
            totalLeft += cur.width + marginX;
          });
        } else {
          let totalTop = node.top + node.height + marginY + node.expandBtnSize;
          node.children.forEach(cur => {
            cur.left = node.left + node.width * 0.5;
            cur.top = totalTop;
            totalTop += cur.height + marginY + node.expandBtnSize;
          });
        }
      }
    }, null, true);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 10:04:05 
   * @Desc: 调整节点left、top
   */


  adjustLeftTopValue() {
    walk(this.root, null, (node, parent, isRoot, layerIndex) => {
      if (!node.nodeData.data.expand) {
        return;
      } // 调整left


      if (parent && parent.isRoot) {
        let areaWidth = this.getNodeAreaWidth(node);
        let difference = areaWidth - node.width;

        if (difference > 0) {
          this.updateBrothersLeft(node, difference / 2);
        }
      } // 调整top


      let len = node.children.length;

      if (parent && !parent.isRoot && len > 0) {
        let marginY = this.getMarginY(layerIndex + 1);
        let totalHeight = node.children.reduce((h, item) => {
          return h + item.height;
        }, 0) + (len + 1) * marginY + len * node.expandBtnSize;
        this.updateBrothersTop(node, totalHeight);
      }
    }, null, true);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-12 18:55:03 
   * @Desc: 递归计算节点的宽度
   */


  getNodeAreaWidth(node) {
    let widthArr = [];

    let loop = (node, width) => {
      if (node.children.length) {
        width += node.width / 2;
        node.children.forEach(item => {
          loop(item, width);
        });
      } else {
        width += node.width;
        widthArr.push(width);
      }
    };

    loop(node, 0);
    return Math.max(...widthArr);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-13 11:12:51 
   * @Desc: 调整兄弟节点的left 
   */


  updateBrothersLeft(node, addWidth) {
    if (node.parent) {
      let childrenList = node.parent.children;
      let index = childrenList.findIndex(item => {
        return item === node;
      }); // 存在大于一个节点时，第一个或最后一个节点自身也需要移动，否则两边不对称

      if ((index === 0 || index === childrenList.length - 1) && childrenList.length > 1) {
        let _offset = index === 0 ? -addWidth : addWidth;

        node.left += _offset;

        if (node.children && node.children.length && !node.hasCustomPosition()) {
          this.updateChildren(node.children, 'left', _offset);
        }
      }

      childrenList.forEach((item, _index) => {
        if (item.hasCustomPosition()) {
          // 适配自定义位置
          return;
        }

        let _offset = 0;

        if (_index < index) {
          // 左边的节点往左移
          _offset = -addWidth;
        } else if (_index > index) {
          // 右边的节点往右移
          _offset = addWidth;
        }

        item.left += _offset; // 同步更新子节点的位置

        if (item.children && item.children.length) {
          this.updateChildren(item.children, 'left', _offset);
        }
      }); // 更新父节点的位置

      this.updateBrothersLeft(node.parent, addWidth);
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 14:26:03 
   * @Desc: 调整兄弟节点的top
   */


  updateBrothersTop(node, addHeight) {
    if (node.parent && !node.parent.isRoot) {
      let childrenList = node.parent.children;
      let index = childrenList.findIndex(item => {
        return item === node;
      });
      childrenList.forEach((item, _index) => {
        if (item.hasCustomPosition()) {
          // 适配自定义位置
          return;
        }

        let _offset = 0; // 下面的节点往下移

        if (_index > index) {
          _offset = addHeight;
        }

        item.top += _offset; // 同步更新子节点的位置

        if (item.children && item.children.length) {
          this.updateChildren(item.children, 'top', _offset);
        }
      }); // 更新父节点的位置

      this.updateBrothersTop(node.parent, addHeight);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 14:42:48 
   * @Desc: 绘制连线，连接该节点到其子节点
   */


  renderLine(node, lines, style) {
    if (node.children.length <= 0) {
      return [];
    }

    let {
      left,
      top,
      width,
      height,
      expandBtnSize
    } = node;
    let len = node.children.length;
    let marginX = this.getMarginX(node.layerIndex + 1);

    if (node.isRoot) {
      // 根节点
      let x1 = left + width / 2;
      let y1 = top + height;
      let s1 = marginX * 0.7;
      let minx = Infinity;
      let maxx = -Infinity;
      node.children.forEach((item, index) => {
        let x2 = item.left + item.width / 2;
        let y2 = item.top;

        if (x2 < minx) {
          minx = x2;
        }

        if (x2 > maxx) {
          maxx = x2;
        }

        let path = `M ${x2},${y1 + s1} L ${x2},${y1 + s1 > y2 ? y2 + item.height : y2}`; // 竖线

        lines[index].plot(path);
        style && style(lines[index], item);
      });
      minx = Math.min(minx, x1);
      maxx = Math.max(maxx, x1); // 父节点的竖线

      let line1 = this.draw.path();
      node.style.line(line1);
      line1.plot(`M ${x1},${y1} L ${x1},${y1 + s1}`);

      node._lines.push(line1);

      style && style(line1, node); // 水平线

      if (len > 0) {
        let lin2 = this.draw.path();
        node.style.line(lin2);
        lin2.plot(`M ${minx},${y1 + s1} L ${maxx},${y1 + s1}`);

        node._lines.push(lin2);

        style && style(lin2, node);
      }
    } else {
      // 非根节点
      let y1 = top + height;
      let maxy = -Infinity;
      let x2 = node.left + node.width * 0.3;
      node.children.forEach((item, index) => {
        // 为了适配自定义位置，下面做了各种位置的兼容
        let y2 = item.top + item.height / 2;

        if (y2 > maxy) {
          maxy = y2;
        } // 水平线


        let path = '';
        let _left = item.left;

        let _isLeft = item.left + item.width < x2;

        let _isXCenter = false;

        if (_isLeft) {
          // 水平位置在父节点左边
          _left = item.left + item.width;
        } else if (item.left < x2 && item.left + item.width > x2) {
          // 水平位置在父节点之间
          _isXCenter = true;
          y2 = item.top;
          maxy = y2;
        }

        if (y2 > top && y2 < y1) {
          // 自定义位置的情况：垂直位置节点在父节点之间
          path = `M ${_isLeft ? node.left : node.left + node.width},${y2} L ${_left},${y2}`;
        } else if (y2 < y1) {
          // 自定义位置的情况：垂直位置节点在父节点上面
          if (_isXCenter) {
            y2 = item.top + item.height;
            _left = x2;
          }

          path = `M ${x2},${top} L ${x2},${y2} L ${_left},${y2}`;
        } else {
          if (_isXCenter) {
            _left = x2;
          }

          path = `M ${x2},${y2} L ${_left},${y2}`;
        }

        lines[index].plot(path);
        style && style(lines[index], item);
      }); // 竖线

      if (len > 0) {
        let lin2 = this.draw.path();
        expandBtnSize = len > 0 ? expandBtnSize : 0;
        node.style.line(lin2);

        if (maxy < y1 + expandBtnSize) {
          lin2.hide();
        } else {
          lin2.plot(`M ${x2},${y1 + expandBtnSize} L ${x2},${maxy}`);
          lin2.show();
        }

        node._lines.push(lin2);

        style && style(lin2, node);
      }
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 19:54:26 
   * @Desc: 渲染按钮 
   */


  renderExpandBtn(node, btn) {
    let {
      width,
      height,
      expandBtnSize,
      isRoot
    } = node;

    if (!isRoot) {
      let {
        translateX,
        translateY
      } = btn.transform();
      btn.translate(width * 0.3 - expandBtnSize / 2 - translateX, height + expandBtnSize / 2 - translateY);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 08:30:35 
   * @Desc: 创建概要节点 
   */


  renderGeneralization(node, gLine, gNode) {
    let {
      top,
      bottom,
      right,
      generalizationLineMargin,
      generalizationNodeMargin
    } = this.getNodeBoundaries(node, 'h');
    let x1 = right + generalizationLineMargin;
    let y1 = top;
    let x2 = right + generalizationLineMargin;
    let y2 = bottom;
    let cx = x1 + 20;
    let cy = y1 + (y2 - y1) / 2;
    let path = `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;
    gLine.plot(path);
    gNode.left = right + generalizationNodeMargin;
    gNode.top = top + (bottom - top - gNode.height) / 2;
  }

}

/* harmony default export */ var layouts_CatalogOrganization = (CatalogOrganization_CatalogOrganization);
// CONCATENATED MODULE: ../simple-mind-map/src/layouts/OrganizationStructure.js



/** 
 * @Author: 王林 
 * @Date: 2021-04-12 22:25:58 
 * @Desc: 组织结构图
 * 和逻辑结构图基本一样，只是方向变成向下生长，所以先计算节点的top，后计算节点的left、最后调整节点的left即可
 */

class OrganizationStructure_OrganizationStructure extends layouts_Base {
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:26:31 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    super(opt);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 14:04:20 
   * @Desc: 布局
   */


  doLayout(callback) {
    let task = [() => {
      this.computedBaseValue();
    }, () => {
      this.computedLeftValue();
    }, () => {
      this.adjustLeftValue();
    }, () => {
      callback(this.root);
    }];
    asyncRun(task);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 09:49:32 
   * @Desc: 遍历数据计算节点的left、width、height
   */


  computedBaseValue() {
    walk(this.renderer.renderTree, null, (cur, parent, isRoot, layerIndex) => {
      let newNode = this.createNode(cur, parent, isRoot, layerIndex); // 根节点定位在画布中心位置

      if (isRoot) {
        this.setNodeCenter(newNode);
      } else {
        // 非根节点
        // 定位到父节点下方
        newNode.top = parent._node.top + parent._node.height + this.getMarginX(layerIndex);
      }

      if (!cur.data.expand) {
        return true;
      }
    }, (cur, parent, isRoot, layerIndex) => {
      // 返回时计算节点的areaWidth，也就是子节点所占的宽度之和，包括外边距
      let len = cur.data.expand === false ? 0 : cur._node.children.length;
      cur._node.childrenAreaWidth = len ? cur._node.children.reduce((h, item) => {
        return h + item.width;
      }, 0) + (len + 1) * this.getMarginY(layerIndex + 1) : 0;
    }, true, 0);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 09:59:25 
   * @Desc: 遍历节点树计算节点的left
   */


  computedLeftValue() {
    walk(this.root, null, (node, parent, isRoot, layerIndex) => {
      if (node.nodeData.data.expand && node.children && node.children.length) {
        let marginX = this.getMarginY(layerIndex + 1); // 第一个子节点的left值 = 该节点中心的left值 - 子节点的宽度之和的一半

        let left = node.left + node.width / 2 - node.childrenAreaWidth / 2;
        let totalLeft = left + marginX;
        node.children.forEach(cur => {
          cur.left = totalLeft;
          totalLeft += cur.width + marginX;
        });
      }
    }, null, true);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 10:04:05 
   * @Desc: 调整节点left
   */


  adjustLeftValue() {
    walk(this.root, null, (node, parent, isRoot, layerIndex) => {
      if (!node.nodeData.data.expand) {
        return;
      } // 判断子节点所占的宽度之和是否大于该节点自身，大于则需要调整位置


      let difference = node.childrenAreaWidth - this.getMarginY(layerIndex + 1) * 2 - node.width;

      if (difference > 0) {
        this.updateBrothers(node, difference / 2);
      }
    }, null, true);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-07 14:26:03 
   * @Desc: 更新兄弟节点的left
   */


  updateBrothers(node, addWidth) {
    if (node.parent) {
      let childrenList = node.parent.children;
      let index = childrenList.findIndex(item => {
        return item === node;
      });
      childrenList.forEach((item, _index) => {
        if (item.hasCustomPosition()) {
          // 适配自定义位置
          return;
        }

        let _offset = 0; // 上面的节点往上移

        if (_index < index) {
          _offset = -addWidth;
        } else if (_index > index) {
          // 下面的节点往下移
          _offset = addWidth;
        }

        item.left += _offset; // 同步更新子节点的位置

        if (item.children && item.children.length) {
          this.updateChildren(item.children, 'left', _offset);
        }
      }); // 更新父节点的位置

      this.updateBrothers(node.parent, addWidth);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 14:42:48 
   * @Desc: 绘制连线，连接该节点到其子节点
   */


  renderLine(node, lines, style) {
    if (node.children.length <= 0) {
      return [];
    }

    let {
      left,
      top,
      width,
      height,
      expandBtnSize,
      isRoot
    } = node;
    let x1 = left + width / 2;
    let y1 = top + height;
    let marginX = this.getMarginX(node.layerIndex + 1);
    let s1 = marginX * 0.7;
    let minx = Infinity;
    let maxx = -Infinity;
    let len = node.children.length;
    node.children.forEach((item, index) => {
      let x2 = item.left + item.width / 2;
      let y2 = y1 + s1 > item.top ? item.top + item.height : item.top;

      if (x2 < minx) {
        minx = x2;
      }

      if (x2 > maxx) {
        maxx = x2;
      }

      let path = `M ${x2},${y1 + s1} L ${x2},${y2}`;
      lines[index].plot(path);
      style && style(lines[index], item);
    });
    minx = Math.min(x1, minx);
    maxx = Math.max(x1, maxx); // 父节点的竖线

    let line1 = this.draw.path();
    node.style.line(line1);
    expandBtnSize = len > 0 && !isRoot ? expandBtnSize : 0;
    line1.plot(`M ${x1},${y1 + expandBtnSize} L ${x1},${y1 + s1}`);

    node._lines.push(line1);

    style && style(line1, node); // 水平线

    if (len > 0) {
      let lin2 = this.draw.path();
      node.style.line(lin2);
      lin2.plot(`M ${minx},${y1 + s1} L ${maxx},${y1 + s1}`);

      node._lines.push(lin2);

      style && style(lin2, node);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-11 19:54:26 
   * @Desc: 渲染按钮 
   */


  renderExpandBtn(node, btn) {
    let {
      width,
      height,
      expandBtnSize
    } = node;
    let {
      translateX,
      translateY
    } = btn.transform();
    btn.translate(width / 2 - expandBtnSize / 2 - translateX, height + expandBtnSize / 2 - translateY);
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 08:30:35 
   * @Desc: 创建概要节点 
   */


  renderGeneralization(node, gLine, gNode) {
    let {
      bottom,
      left,
      right,
      generalizationLineMargin,
      generalizationNodeMargin
    } = this.getNodeBoundaries(node, 'v');
    let x1 = left;
    let y1 = bottom + generalizationLineMargin;
    let x2 = right;
    let y2 = bottom + generalizationLineMargin;
    let cx = x1 + (x2 - x1) / 2;
    let cy = y1 + 20;
    let path = `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;
    gLine.plot(path);
    gNode.top = bottom + generalizationNodeMargin;
    gNode.left = left + (right - left - gNode.width) / 2;
  }

}

/* harmony default export */ var layouts_OrganizationStructure = (OrganizationStructure_OrganizationStructure);
// CONCATENATED MODULE: ../simple-mind-map/src/TextEdit.js

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-06-19 11:11:28 
 * @Desc: 节点文字编辑类 
 */

class TextEdit_TextEdit {
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-06-19 11:22:57 
   * @Desc: 构造函数 
   */
  constructor(renderer) {
    this.renderer = renderer;
    this.mindMap = renderer.mindMap; // 文本编辑框

    this.textEditNode = null; // 文本编辑框是否显示

    this.showTextEdit = false;
    this.bindEvent();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 13:27:04 
   * @Desc: 事件 
   */


  bindEvent() {
    this.show = this.show.bind(this); // 节点双击事件

    this.mindMap.on('node_dblclick', this.show); // 点击事件

    this.mindMap.on('draw_click', () => {
      // 隐藏文本编辑框
      this.hideEditTextBox();
    }); // 展开收缩按钮点击事件

    this.mindMap.on('expand_btn_click', () => {
      this.hideEditTextBox();
    }); // 节点激活前事件

    this.mindMap.on('before_node_active', () => {
      this.hideEditTextBox();
    }); // 注册编辑快捷键

    this.mindMap.keyCommand.addShortcut('F2', () => {
      if (this.renderer.activeNodeList.length <= 0) {
        return;
      }

      this.show(this.renderer.activeNodeList[0]);
    });
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-16 16:27:02 
   * @Desc: 注册临时快捷键 
   */


  registerTmpShortcut() {
    // 注册回车快捷键
    this.mindMap.keyCommand.addShortcut('Enter', () => {
      this.hideEditTextBox();
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-13 22:15:56 
   * @Desc: 显示文本编辑框 
   */


  show(node) {
    this.showEditTextBox(node, node._textData.node.node.getBoundingClientRect());
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-13 22:13:02 
   * @Desc: 显示文本编辑框 
   */


  showEditTextBox(node, rect) {
    this.mindMap.emit('before_show_text_edit');
    this.registerTmpShortcut();

    if (!this.textEditNode) {
      this.textEditNode = document.createElement('div');
      this.textEditNode.style.cssText = `position:fixed;box-sizing: border-box;background-color:#fff;box-shadow: 0 0 20px rgba(0,0,0,.5);padding: 3px 5px;margin-left: -5px;margin-top: -3px;outline: none;`;
      this.textEditNode.setAttribute('contenteditable', true);
      document.body.appendChild(this.textEditNode);
    }

    node.style.domText(this.textEditNode, this.mindMap.view.scale);
    this.textEditNode.innerHTML = node.nodeData.data.text.split(/\n/img).join('<br>');
    this.textEditNode.style.minWidth = rect.width + 10 + 'px';
    this.textEditNode.style.minHeight = rect.height + 6 + 'px';
    this.textEditNode.style.left = rect.left + 'px';
    this.textEditNode.style.top = rect.top + 'px';
    this.textEditNode.style.display = 'block';
    this.showTextEdit = true; // 选中文本

    this.selectNodeText();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-02 23:13:50 
   * @Desc: 选中文本 
   */


  selectNodeText() {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(this.textEditNode);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 13:48:16 
   * @Desc: 隐藏文本编辑框 
   */


  hideEditTextBox() {
    if (!this.showTextEdit) {
      return;
    }

    this.renderer.activeNodeList.forEach(node => {
      let str = getStrWithBrFromHtml(this.textEditNode.innerHTML);
      this.mindMap.execCommand('SET_NODE_TEXT', node, str);

      if (node.isGeneralization) {
        // 概要节点
        node.generalizationBelongNode.updateGeneralization();
      }

      this.mindMap.render();
    });
    this.mindMap.emit('hide_text_edit', this.textEditNode, this.renderer.activeNodeList);
    this.textEditNode.style.display = 'none';
    this.textEditNode.innerHTML = '';
    this.textEditNode.style.fontFamily = 'inherit';
    this.textEditNode.style.fontSize = 'inherit';
    this.textEditNode.style.fontWeight = 'normal';
    this.showTextEdit = false;
  }

}
// CONCATENATED MODULE: ../simple-mind-map/src/Render.js







 // 布局列表

const layouts = {
  // 逻辑结构图
  logicalStructure: layouts_LogicalStructure,
  // 思维导图
  mindMap: layouts_MindMap,
  // 目录组织图
  catalogOrganization: layouts_CatalogOrganization,
  // 组织结构图
  organizationStructure: layouts_OrganizationStructure
};
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-08 16:25:07 
 * @Desc: 渲染
 */

class Render_Render {
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 16:25:32 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    this.opt = opt;
    this.mindMap = opt.mindMap;
    this.themeConfig = this.mindMap.themeConfig;
    this.draw = this.mindMap.draw; // 渲染树，操作过程中修改的都是这里的数据

    this.renderTree = cjs_default()({}, this.mindMap.opt.data || {}); // 是否重新渲染

    this.reRender = false; // 当前激活的节点列表

    this.activeNodeList = []; // 根节点

    this.root = null; // 文本编辑框，需要再bindEvent之前实例化，否则单击事件只能触发隐藏文本编辑框，而无法保存文本修改

    this.textEdit = new TextEdit_TextEdit(this); // 布局

    this.setLayout(); // 绑定事件

    this.bindEvent(); // 注册命令

    this.registerCommands(); // 注册快捷键

    this.registerShortcutKeys();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-13 16:20:07 
   * @Desc: 设置布局结构 
   */


  setLayout() {
    this.layout = new (layouts[this.mindMap.opt.layout] ? layouts[this.mindMap.opt.layout] : layouts.logicalStructure)(this);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-20 10:34:06 
   * @Desc:  绑定事件
   */


  bindEvent() {
    // 点击事件
    this.mindMap.on('draw_click', () => {
      // 清除激活状态
      if (this.activeNodeList.length > 0) {
        this.mindMap.execCommand('CLEAR_ACTIVE_NODE');
      }
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:19:06 
   * @Desc: 注册命令 
   */


  registerCommands() {
    // 全选
    this.selectAll = this.selectAll.bind(this);
    this.mindMap.command.add('SELECT_ALL', this.selectAll); // 回退

    this.back = this.back.bind(this);
    this.mindMap.command.add('BACK', this.back); // 前进

    this.forward = this.forward.bind(this);
    this.mindMap.command.add('FORWARD', this.forward); // 插入同级节点

    this.insertNode = this.insertNode.bind(this);
    this.mindMap.command.add('INSERT_NODE', this.insertNode); // 插入子节点

    this.insertChildNode = this.insertChildNode.bind(this);
    this.mindMap.command.add('INSERT_CHILD_NODE', this.insertChildNode); // 上移节点

    this.upNode = this.upNode.bind(this);
    this.mindMap.command.add('UP_NODE', this.upNode); // 下移节点

    this.downNode = this.downNode.bind(this);
    this.mindMap.command.add('DOWN_NODE', this.downNode); // 移动节点

    this.insertAfter = this.insertAfter.bind(this);
    this.mindMap.command.add('INSERT_AFTER', this.insertAfter);
    this.insertBefore = this.insertBefore.bind(this);
    this.mindMap.command.add('INSERT_BEFORE', this.insertBefore);
    this.moveNodeTo = this.moveNodeTo.bind(this);
    this.mindMap.command.add('MOVE_NODE_TO', this.moveNodeTo); // 删除节点

    this.removeNode = this.removeNode.bind(this);
    this.mindMap.command.add('REMOVE_NODE', this.removeNode); // 粘贴节点

    this.pasteNode = this.pasteNode.bind(this);
    this.mindMap.command.add('PASTE_NODE', this.pasteNode); // 剪切节点

    this.cutNode = this.cutNode.bind(this);
    this.mindMap.command.add('CUT_NODE', this.cutNode); // 修改节点样式

    this.setNodeStyle = this.setNodeStyle.bind(this);
    this.mindMap.command.add('SET_NODE_STYLE', this.setNodeStyle); // 切换节点是否激活

    this.setNodeActive = this.setNodeActive.bind(this);
    this.mindMap.command.add('SET_NODE_ACTIVE', this.setNodeActive); // 清除所有激活节点

    this.clearAllActive = this.clearAllActive.bind(this);
    this.mindMap.command.add('CLEAR_ACTIVE_NODE', this.clearAllActive); // 切换节点是否展开

    this.setNodeExpand = this.setNodeExpand.bind(this);
    this.mindMap.command.add('SET_NODE_EXPAND', this.setNodeExpand); // 展开所有节点

    this.expandAllNode = this.expandAllNode.bind(this);
    this.mindMap.command.add('EXPAND_ALL', this.expandAllNode); // 收起所有节点

    this.unexpandAllNode = this.unexpandAllNode.bind(this);
    this.mindMap.command.add('UNEXPAND_ALL', this.unexpandAllNode); // 设置节点数据

    this.setNodeData = this.setNodeData.bind(this);
    this.mindMap.command.add('SET_NODE_DATA', this.setNodeData); // 设置节点文本

    this.setNodeText = this.setNodeText.bind(this);
    this.mindMap.command.add('SET_NODE_TEXT', this.setNodeText); // 设置节点图片

    this.setNodeImage = this.setNodeImage.bind(this);
    this.mindMap.command.add('SET_NODE_IMAGE', this.setNodeImage); // 设置节点图标

    this.setNodeIcon = this.setNodeIcon.bind(this);
    this.mindMap.command.add('SET_NODE_ICON', this.setNodeIcon); // 设置节点超链接

    this.setNodeHyperlink = this.setNodeHyperlink.bind(this);
    this.mindMap.command.add('SET_NODE_HYPERLINK', this.setNodeHyperlink); // 设置节点备注

    this.setNodeNote = this.setNodeNote.bind(this);
    this.mindMap.command.add('SET_NODE_NOTE', this.setNodeNote); // 设置节点标签

    this.setNodeTag = this.setNodeTag.bind(this);
    this.mindMap.command.add('SET_NODE_TAG', this.setNodeTag); // 添加节点概要

    this.addGeneralization = this.addGeneralization.bind(this);
    this.mindMap.command.add('ADD_GENERALIZATION', this.addGeneralization); // 删除节点概要

    this.removeGeneralization = this.removeGeneralization.bind(this);
    this.mindMap.command.add('REMOVE_GENERALIZATION', this.removeGeneralization); // 设置节点自定义位置

    this.setNodeCustomPosition = this.setNodeCustomPosition.bind(this);
    this.mindMap.command.add('SET_NODE_CUSTOM_POSITION', this.setNodeCustomPosition); // 一键整理布局

    this.resetLayout = this.resetLayout.bind(this);
    this.mindMap.command.add('RESET_LAYOUT', this.resetLayout); // 设置节点形状

    this.setNodeShape = this.setNodeShape.bind(this);
    this.mindMap.command.add('SET_NODE_SHAPE', this.setNodeShape);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 16:55:44 
   * @Desc: 注册快捷键 
   */


  registerShortcutKeys() {
    // 插入下级节点
    this.mindMap.keyCommand.addShortcut('Tab', () => {
      this.mindMap.execCommand('INSERT_CHILD_NODE');
    }); // 插入同级节点

    this.insertNodeWrap = () => {
      if (this.textEdit.showTextEdit) {
        return;
      }

      this.mindMap.execCommand('INSERT_NODE');
    };

    this.mindMap.keyCommand.addShortcut('Enter', this.insertNodeWrap); // 插入概要

    this.mindMap.keyCommand.addShortcut('Control+s', this.addGeneralization); // 展开/收起节点

    this.toggleActiveExpand = this.toggleActiveExpand.bind(this);
    this.mindMap.keyCommand.addShortcut('/', this.toggleActiveExpand); // 删除节点

    this.removeNodeWrap = () => {
      this.mindMap.execCommand('REMOVE_NODE');
    };

    this.mindMap.keyCommand.addShortcut('Del|Backspace', this.removeNodeWrap); // 节点编辑时某些快捷键会存在冲突，需要暂时去除

    this.mindMap.on('before_show_text_edit', () => {
      this.startTextEdit();
    });
    this.mindMap.on('hide_text_edit', () => {
      this.endTextEdit();
    }); // 全选

    this.mindMap.keyCommand.addShortcut('Control+a', () => {
      this.mindMap.execCommand('SELECT_ALL');
    }); // 一键整理布局

    this.mindMap.keyCommand.addShortcut('Control+l', this.resetLayout); // 上移节点

    this.mindMap.keyCommand.addShortcut('Control+Up', this.upNode); // 下移节点

    this.mindMap.keyCommand.addShortcut('Control+Down', this.downNode); // 复制节点、剪切节点、粘贴节点的快捷键需开发者自行注册实现，可参考demo
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-05-09 10:43:52 
   * @Desc: 开启文字编辑，会禁用回车键和删除键相关快捷键防止冲突 
   */


  startTextEdit() {
    this.mindMap.keyCommand.save(); // this.mindMap.keyCommand.removeShortcut('Del|Backspace')
    // this.mindMap.keyCommand.removeShortcut('/')
    // this.mindMap.keyCommand.removeShortcut('Enter', this.insertNodeWrap)
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-05-09 10:45:11 
   * @Desc: 结束文字编辑，会恢复回车键和删除键相关快捷键
   */


  endTextEdit() {
    this.mindMap.keyCommand.restore(); // this.mindMap.keyCommand.addShortcut('Del|Backspace', this.removeNodeWrap)
    // this.mindMap.keyCommand.addShortcut('/', this.toggleActiveExpand)
    // this.mindMap.keyCommand.addShortcut('Enter', this.insertNodeWrap)
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-08 16:27:55 
   * @Desc:  渲染
   */


  render() {
    if (this.reRender) {
      this.clearActive();
    }

    this.layout.doLayout(root => {
      this.root = root;
      this.root.render();
    });
    this.mindMap.emit('node_active', null, this.activeNodeList);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-12 22:45:01 
   * @Desc: 清除当前激活的节点 
   */


  clearActive() {
    this.activeNodeList.forEach(item => {
      this.setNodeActive(item, false);
    });
    this.activeNodeList = [];
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-03 23:14:34 
   * @Desc: 清除当前所有激活节点，并会触发事件 
   */


  clearAllActive() {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    this.clearActive();
    this.mindMap.emit('node_active', null, []);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 10:54:00 
   * @Desc:  添加节点到激活列表里
   */


  addActiveNode(node) {
    let index = this.findActiveNodeIndex(node);

    if (index === -1) {
      this.activeNodeList.push(node);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 10:04:04 
   * @Desc: 在激活列表里移除某个节点 
   */


  removeActiveNode(node) {
    let index = this.findActiveNodeIndex(node);

    if (index === -1) {
      return;
    }

    this.activeNodeList.splice(index, 1);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 10:55:23 
   * @Desc: 检索某个节点在激活列表里的索引 
   */


  findActiveNodeIndex(node) {
    return this.activeNodeList.findIndex(item => {
      return item === node;
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:46:08 
   * @Desc: 获取节点在同级里的索引位置 
   */


  getNodeIndex(node) {
    return node.parent ? node.parent.children.findIndex(item => {
      return item === node;
    }) : 0;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-04 23:54:52 
   * @Desc: 全选 
   */


  selectAll() {
    walk(this.root, null, node => {
      if (!node.nodeData.data.isActive) {
        node.nodeData.data.isActive = true;
        this.addActiveNode(node);
        setTimeout(() => {
          node.renderNode();
        }, 0);
      }
    }, null, true, 0, 0);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 22:34:12 
   * @Desc: 回退 
   */


  back(step) {
    this.clearAllActive();
    let data = this.mindMap.command.back(step);

    if (data) {
      this.renderTree = data;
      this.mindMap.reRender();
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-12 10:44:51 
   * @Desc: 前进 
   */


  forward(step) {
    this.clearAllActive();
    let data = this.mindMap.command.forward(step);

    if (data) {
      this.renderTree = data;
      this.mindMap.reRender();
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:19:54 
   * @Desc: 插入同级节点，多个节点只会操作第一个节点
   */


  insertNode() {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    let first = this.activeNodeList[0];

    if (first.isRoot) {
      this.insertChildNode();
    } else {
      let text = first.layerIndex === 1 ? '二级节点' : '分支主题';

      if (first.layerIndex === 1) {
        first.parent.initRender = true;
      }

      let index = this.getNodeIndex(first);
      first.parent.nodeData.children.splice(index + 1, 0, {
        "data": {
          "text": text,
          "expand": true
        },
        "children": []
      });
      this.mindMap.render();
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:31:02 
   * @Desc: 插入子节点 
   */


  insertChildNode() {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    this.activeNodeList.forEach((node, index) => {
      if (!node.nodeData.children) {
        node.nodeData.children = [];
      }

      let text = node.isRoot ? '二级节点' : '分支主题';
      node.nodeData.children.push({
        "data": {
          "text": text,
          "expand": true
        },
        "children": []
      });

      if (node.isRoot) {
        node.initRender = true; // this.mindMap.batchExecution.push('renderNode' + index, () => {
        //     node.renderNode()
        // })
      }
    });
    this.mindMap.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-14 23:34:14 
   * @Desc: 上移节点，多个节点只会操作第一个节点
   */


  upNode() {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    let node = this.activeNodeList[0];

    if (node.isRoot) {
      return;
    }

    let parent = node.parent;
    let childList = parent.children;
    let index = childList.findIndex(item => {
      return item === node;
    });

    if (index === -1 || index === 0) {
      return;
    }

    let insertIndex = index - 1; // 节点实例

    childList.splice(index, 1);
    childList.splice(insertIndex, 0, node); // 节点数据

    parent.nodeData.children.splice(index, 1);
    parent.nodeData.children.splice(insertIndex, 0, node.nodeData);
    this.mindMap.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-14 23:34:18 
   * @Desc: 下移节点，多个节点只会操作第一个节点 
   */


  downNode() {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    let node = this.activeNodeList[0];

    if (node.isRoot) {
      return;
    }

    let parent = node.parent;
    let childList = parent.children;
    let index = childList.findIndex(item => {
      return item === node;
    });

    if (index === -1 || index === childList.length - 1) {
      return;
    }

    let insertIndex = index + 1; // 节点实例

    childList.splice(index, 1);
    childList.splice(insertIndex, 0, node); // 节点数据

    parent.nodeData.children.splice(index, 1);
    parent.nodeData.children.splice(insertIndex, 0, node.nodeData);
    this.mindMap.render();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-25 10:51:34 
   * @Desc: 将节点移动到另一个节点的前面
   */


  insertBefore(node, exist) {
    if (node.isRoot) {
      return;
    }

    let parent = node.parent;
    let childList = parent.children; // 要移动节点的索引

    let index = childList.findIndex(item => {
      return item === node;
    });

    if (index === -1) {
      return;
    } // 目标节点的索引


    let existIndex = childList.findIndex(item => {
      return item === exist;
    });

    if (existIndex === -1) {
      return;
    } // 当前节点在目标节点前面


    if (index < existIndex) {
      existIndex = existIndex - 1;
    } else {
      existIndex = existIndex;
    } // 节点实例


    childList.splice(index, 1);
    childList.splice(existIndex, 0, node); // 节点数据

    parent.nodeData.children.splice(index, 1);
    parent.nodeData.children.splice(existIndex, 0, node.nodeData);
    this.mindMap.render();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-25 10:51:34 
   * @Desc: 将节点移动到另一个节点的后面
   */


  insertAfter(node, exist) {
    if (node.isRoot) {
      return;
    }

    let parent = node.parent;
    let childList = parent.children; // 要移动节点的索引

    let index = childList.findIndex(item => {
      return item === node;
    });

    if (index === -1) {
      return;
    } // 目标节点的索引


    let existIndex = childList.findIndex(item => {
      return item === exist;
    });

    if (existIndex === -1) {
      return;
    } // 当前节点在目标节点前面


    if (index < existIndex) {
      existIndex = existIndex;
    } else {
      existIndex = existIndex + 1;
    } // 节点实例


    childList.splice(index, 1);
    childList.splice(existIndex, 0, node); // 节点数据

    parent.nodeData.children.splice(index, 1);
    parent.nodeData.children.splice(existIndex, 0, node.nodeData);
    this.mindMap.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:40:39 
   * @Desc: 移除节点 
   */


  removeNode() {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    for (let i = 0; i < this.activeNodeList.length; i++) {
      let node = this.activeNodeList[i];

      if (node.isGeneralization) {
        // 删除概要节点
        this.setNodeData(node.generalizationBelongNode, {
          generalization: null
        });
        node.generalizationBelongNode.update();
        this.removeActiveNode(node);
        i--;
      } else if (node.isRoot) {
        node.children.forEach(child => {
          child.remove();
        });
        node.children = [];
        node.nodeData.children = [];
        break;
      } else {
        this.removeActiveNode(node);
        this.removeOneNode(node);
        i--;
      }
    }

    this.mindMap.emit('node_active', null, []);
    this.mindMap.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-15 22:46:27 
   * @Desc: 移除某个指定节点 
   */


  removeOneNode(node) {
    let index = this.getNodeIndex(node);
    node.remove();
    node.parent.children.splice(index, 1);
    node.parent.nodeData.children.splice(index, 1);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-15 09:53:23 
   * @Desc: 复制节点，多个节点只会操作第一个节点 
   */


  copyNode() {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    return copyNodeTree({}, this.activeNodeList[0]);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-15 22:36:45 
   * @Desc: 剪切节点，多个节点只会操作第一个节点
   */


  cutNode(callback) {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    let node = this.activeNodeList[0];

    if (node.isRoot) {
      return null;
    }

    let copyData = copyNodeTree({}, node);
    this.removeActiveNode(node);
    this.removeOneNode(node);
    this.mindMap.emit('node_active', null, this.activeNodeList);
    this.mindMap.render();

    if (callback && typeof callback === 'function') {
      callback(copyData);
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-24 16:54:01 
   * @Desc: 移动一个节点作为另一个节点的子节点 
   */


  moveNodeTo(node, toNode) {
    if (node.isRoot) {
      return;
    }

    let copyData = copyNodeTree({}, node);
    this.removeActiveNode(node);
    this.removeOneNode(node);
    this.mindMap.emit('node_active', null, this.activeNodeList);
    toNode.nodeData.children.push(copyData);
    this.mindMap.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-15 20:09:39 
   * @Desc:  粘贴节点到节点
   */


  pasteNode(data) {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    this.activeNodeList.forEach(item => {
      item.nodeData.children.push(simpleDeepClone(data));
    });
    this.mindMap.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-08 21:54:30 
   * @Desc: 设置节点样式 
   */


  setNodeStyle(node, prop, value, isActive) {
    let data = {};

    if (isActive) {
      data = {
        activeStyle: { ...(node.nodeData.data.activeStyle || {}),
          [prop]: value
        }
      };
    } else {
      data = {
        [prop]: value
      };
    }

    this.setNodeDataRender(node, data);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-08 22:13:03 
   * @Desc: 设置节点是否激活 
   */


  setNodeActive(node, active) {
    this.setNodeData(node, {
      isActive: active
    });
    node.renderNode();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 16:52:41 
   * @Desc: 设置节点是否展开 
   */


  setNodeExpand(node, expand) {
    this.setNodeData(node, {
      expand
    });

    if (expand) {
      // 展开
      node.children.forEach(item => {
        item.render();
      });
      node.renderLine();
      node.updateExpandBtnNode();
    } else {
      // 收缩
      node.children.forEach(item => {
        item.remove();
      });
      node.removeLine();
      node.updateExpandBtnNode();
    }

    this.mindMap.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-15 23:23:37 
   * @Desc: 展开所有 
   */


  expandAllNode() {
    walk(this.renderTree, null, node => {
      if (!node.data.expand) {
        node.data.expand = true;
      }
    }, null, true, 0, 0);
    this.mindMap.render();
    this.root.children.forEach(item => {
      item.updateExpandBtnNode();
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-15 23:27:14 
   * @Desc: 收起所有 
   */


  unexpandAllNode() {
    this.root.children.forEach(item => {
      this.setNodeExpand(item, false);
    });
    walk(this.renderTree, null, (node, parent, isRoot) => {
      if (!isRoot) {
        node.data.expand = false;
      }
    }, null, true, 0, 0);
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-08-14 09:18:40 
   * @Desc: 切换激活节点的展开状态 
   */


  toggleActiveExpand() {
    this.activeNodeList.forEach(node => {
      if (node.nodeData.children.length <= 0) {
        return;
      }

      this.toggleNodeExpand(node);
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 17:15:33 
   * @Desc: 切换节点展开状态 
   */


  toggleNodeExpand(node) {
    this.mindMap.execCommand('SET_NODE_EXPAND', node, !node.nodeData.data.expand);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-09 22:04:19 
   * @Desc: 设置节点文本 
   */


  setNodeText(node, text) {
    this.setNodeDataRender(node, {
      text
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:37:40 
   * @Desc: 设置节点图片 
   */


  setNodeImage(node, {
    url,
    title,
    width,
    height
  }) {
    this.setNodeDataRender(node, {
      image: url,
      imageTitle: title || '',
      imageSize: {
        width,
        height
      }
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:44:06 
   * @Desc: 设置节点图标 
   */


  setNodeIcon(node, icons) {
    this.setNodeDataRender(node, {
      icon: icons
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:49:33 
   * @Desc: 设置节点超链接 
   */


  setNodeHyperlink(node, link, title = '') {
    this.setNodeDataRender(node, {
      hyperlink: link,
      hyperlinkTitle: title
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:52:59 
   * @Desc: 设置节点备注 
   */


  setNodeNote(node, note) {
    this.setNodeDataRender(node, {
      note
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:54:53 
   * @Desc: 设置节点标签 
   */


  setNodeTag(node, tag) {
    this.setNodeDataRender(node, {
      tag
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 20:52:42 
   * @Desc: 添加节点概要
   */


  addGeneralization(data) {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    this.activeNodeList.forEach(node => {
      if (node.nodeData.data.generalization || node.isRoot) {
        return;
      }

      this.setNodeData(node, {
        generalization: data || {
          text: '概要'
        }
      });
      node.update();
    });
    this.mindMap.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-07-30 21:16:33 
   * @Desc: 删除节点概要
   */


  removeGeneralization() {
    if (this.activeNodeList.length <= 0) {
      return;
    }

    this.activeNodeList.forEach(node => {
      if (!node.nodeData.data.generalization) {
        return;
      }

      this.setNodeData(node, {
        generalization: null
      });
      node.update();
    });
    this.mindMap.render();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-02 19:04:24 
   * @Desc: 设置节点自定义位置 
   */


  setNodeCustomPosition(node, left = undefined, top = undefined) {
    let nodeList = [node] || false;
    nodeList.forEach(item => {
      this.setNodeData(item, {
        customLeft: left,
        customTop: top
      });
    });
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-02 20:02:50 
   * @Desc: 一键整理布局，即去除自定义位置 
   */


  resetLayout() {
    walk(this.root, null, node => {
      node.customLeft = undefined;
      node.customTop = undefined;
      this.setNodeData(node, {
        customLeft: undefined,
        customTop: undefined
      });
      this.mindMap.render();
    }, null, true, 0, 0);
  }
  /** 
   * javascript comment 
   * @Author: 王林 
   * @Date: 2022-09-12 21:44:01 
   * @Desc: 设置节点形状 
   */


  setNodeShape(node, shape) {
    if (!shape || !shapeList.includes(shape)) {
      return;
    }

    let nodeList = [node] || false;
    nodeList.forEach(item => {
      this.setNodeStyle(item, 'shape', shape);
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 14:19:48 
   * @Desc: 更新节点数据 
   */


  setNodeData(node, data) {
    Object.keys(data).forEach(key => {
      node.nodeData.data[key] = data[key];
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 08:45:48 
   * @Desc: 设置节点数据，并判断是否渲染 
   */


  setNodeDataRender(node, data) {
    this.setNodeData(node, data);
    let changed = node.getSize();
    node.renderNode();

    if (changed) {
      if (node.isGeneralization) {
        // 概要节点
        node.generalizationBelongNode.updateGeneralization();
      }

      this.mindMap.render();
    }
  }

}

/* harmony default export */ var src_Render = (Render_Render);
// CONCATENATED MODULE: ../simple-mind-map/src/themes/default.js
/** 
 * @Author: 王林 
 * @Date: 2021-04-11 10:19:55 
 * @Desc: 默认主题 
 */
/* harmony default export */ var themes_default = ({
  // 节点内边距
  paddingX: 15,
  paddingY: 5,
  // 图片显示的最大宽度
  imgMaxWidth: 100,
  // 图片显示的最大高度
  imgMaxHeight: 100,
  // icon的大小
  iconSize: 20,
  // 连线的粗细
  lineWidth: 1,
  // 连线的颜色
  lineColor: '#549688',
  // 连线样式
  lineDasharray: 'none',
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#549688',
  // 概要曲线距节点的距离
  generalizationLineMargin: 0,
  // 概要节点距节点的距离
  generalizationNodeMargin: 20,
  // 背景颜色
  backgroundColor: '#fafafa',
  // 背景图片
  backgroundImage: 'none',
  // 背景重复
  backgroundRepeat: 'no-repeat',
  // 根节点样式
  root: {
    shape: 'rectangle',
    fillColor: '#549688',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 1.5,
    borderColor: 'transparent',
    borderWidth: 0,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  },
  // 二级节点样式
  second: {
    shape: 'rectangle',
    marginX: 100,
    marginY: 40,
    fillColor: '#fff',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#565656',
    fontSize: 16,
    fontWeight: 'noraml',
    fontStyle: 'normal',
    lineHeight: 1.5,
    borderColor: '#549688',
    borderWidth: 1,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  },
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    marginX: 50,
    marginY: 0,
    fillColor: 'transparent',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#6a6d6c',
    fontSize: 14,
    fontWeight: 'noraml',
    fontStyle: 'normal',
    lineHeight: 1.5,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    borderDasharray: 'none',
    textDecoration: 'none',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  },
  // 概要节点样式
  generalization: {
    shape: 'rectangle',
    marginX: 100,
    marginY: 40,
    fillColor: '#fff',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#565656',
    fontSize: 16,
    fontWeight: 'noraml',
    fontStyle: 'normal',
    lineHeight: 1.5,
    borderColor: '#549688',
    borderWidth: 1,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  }
}); // 支持激活样式的属性
// 简单来说，会改变节点大小的都不支持在激活时设置，为了性能考虑，节点切换激活态时不会重新计算节点大小

const supportActiveStyle = ['fillColor', 'color', 'fontWeight', 'fontStyle', 'borderColor', 'borderWidth', 'borderDasharray', 'borderRadius', 'textDecoration'];
// CONCATENATED MODULE: ../simple-mind-map/src/themes/freshGreen.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 清新绿 
 */

/* harmony default export */ var freshGreen = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: '#333',
  // 背景颜色
  backgroundColor: '#d1f6ec',
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#333',
  // 根节点样式
  root: {
    fillColor: '#1fb27d'
  },
  // 二级节点样式
  second: {
    fillColor: '#fff',
    color: '#565656',
    borderColor: 'transparent',
    borderWidth: 0
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: '#333',
    color: '#333',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/blueSky.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 天空蓝
 */

/* harmony default export */ var blueSky = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(115, 161, 191)',
  // 背景颜色
  backgroundColor: 'rgb(251, 251, 251)',
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#333',
  // 根节点样式
  root: {
    fillColor: 'rgb(115, 161, 191)',
    active: {
      borderColor: 'rgb(57, 80, 96)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(238, 243, 246)',
    color: '#333',
    borderColor: 'rgb(115, 161, 191)',
    borderWidth: 1,
    fontSize: 14,
    active: {
      borderColor: 'rgb(57, 80, 96)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#333',
    active: {
      borderColor: 'rgb(57, 80, 96)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: '#333',
    color: '#333',
    active: {
      borderColor: 'rgb(57, 80, 96)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/brainImpairedPink.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 脑残粉
 */

/* harmony default export */ var brainImpairedPink = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(191, 115, 148)',
  // 背景颜色
  backgroundColor: 'rgb(251, 251, 251)',
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#333',
  // 根节点样式
  root: {
    fillColor: 'rgb(191, 115, 148)',
    active: {
      borderColor: 'rgb(96, 57, 74)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(246, 238, 242)',
    color: '#333',
    borderColor: 'rgb(191, 115, 148)',
    borderWidth: 1,
    fontSize: 14,
    active: {
      borderColor: 'rgb(96, 57, 74)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#333',
    active: {
      borderColor: 'rgb(96, 57, 74)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: '#333',
    color: '#333',
    active: {
      borderColor: 'rgb(96, 57, 74)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/romanticPurple.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 浪漫紫
 */

/* harmony default export */ var romanticPurple = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(123, 115, 191)',
  // 背景颜色
  backgroundColor: 'rgb(251, 251, 251)',
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#333',
  // 根节点样式
  root: {
    fillColor: 'rgb(123, 115, 191)',
    active: {
      borderColor: 'rgb(61, 57, 96)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(239, 238, 246)',
    color: '#333',
    borderColor: 'rgb(123, 115, 191)',
    borderWidth: 1,
    fontSize: 14,
    active: {
      borderColor: 'rgb(61, 57, 96)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#333',
    active: {
      borderColor: 'rgb(61, 57, 96)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: '#333',
    color: '#333',
    active: {
      borderColor: 'rgb(61, 57, 96)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/freshRed.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 清新红
 */

/* harmony default export */ var freshRed = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(191, 115, 115)',
  // 背景颜色
  backgroundColor: 'rgb(251, 251, 251)',
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#333',
  // 根节点样式
  root: {
    fillColor: 'rgb(191, 115, 115)',
    active: {
      borderColor: 'rgb(96, 57, 57)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(246, 238, 238)',
    color: '#333',
    borderColor: 'rgb(191, 115, 115)',
    borderWidth: 1,
    fontSize: 14,
    active: {
      borderColor: 'rgb(96, 57, 57)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#333',
    active: {
      borderColor: 'rgb(96, 57, 57)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: '#333',
    color: '#333',
    active: {
      borderColor: 'rgb(96, 57, 57)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/earthYellow.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 泥土黄
 */

/* harmony default export */ var earthYellow = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(191, 147, 115)',
  // 背景颜色
  backgroundColor: 'rgb(251, 251, 251)',
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#333',
  // 根节点样式
  root: {
    fillColor: 'rgb(191, 147, 115)',
    active: {
      borderColor: 'rgb(96, 73, 57)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(246, 242, 238)',
    color: '#333',
    borderColor: 'rgb(191, 147, 115)',
    borderWidth: 1,
    fontSize: 14,
    active: {
      borderColor: 'rgb(96, 73, 57)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#333',
    active: {
      borderColor: 'rgb(96, 73, 57)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: '#333',
    color: '#333',
    active: {
      borderColor: 'rgb(96, 73, 57)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/classic.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 脑图经典
 */

/* harmony default export */ var classic = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: '#fff',
  // 连线的粗细
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: '#fff',
  // 背景颜色
  backgroundColor: 'rgb(58, 65, 68)',
  // 背景图片
  backgroundImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=',
  // 背景重复
  backgroundRepeat: 'repeat',
  // 根节点样式
  root: {
    fillColor: 'rgb(233, 223, 152)',
    color: '#333',
    fontSize: 24,
    borderRadius: 21,
    active: {
      fillColor: 'rgb(254, 219, 0)',
      borderColor: 'transparent'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(164, 197, 192)',
    borderColor: 'transparent',
    color: '#333',
    fontSize: 16,
    borderRadius: 10,
    active: {
      fillColor: 'rgb(254, 219, 0)',
      borderColor: 'transparent'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    active: {
      fillColor: 'rgb(254, 219, 0)',
      borderColor: 'transparent'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: 'transparent',
    color: '#333',
    active: {
      fillColor: 'rgb(254, 219, 0)',
      borderColor: 'transparent'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/classic2.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 经典2
 */

/* harmony default export */ var classic2 = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(51, 51, 51)',
  // 连线的粗细
  lineWidth: 2,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(51, 51, 51)',
  // 背景颜色
  backgroundColor: '#fff',
  // 根节点样式
  root: {
    fillColor: 'rgb(18, 187, 55)',
    color: '#fff',
    fontSize: 24,
    borderRadius: 10,
    active: {
      borderColor: 'rgb(51, 51, 51)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(241, 242, 241)',
    borderColor: 'transparent',
    color: '#1a1a1a',
    fontSize: 18,
    borderRadius: 10,
    active: {
      borderColor: 'rgb(51, 51, 51)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 14,
    color: '#1a1a1a',
    active: {
      borderColor: 'rgb(51, 51, 51)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: 'rgb(51, 51, 51)',
    borderWidth: 2,
    color: '#1a1a1a',
    active: {
      borderColor: 'rgb(18, 187, 55)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/classic3.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 经典3
 */

/* harmony default export */ var classic3 = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(94, 202, 110)',
  // 连线的粗细
  lineWidth: 2,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: '#1a1a1a',
  // 背景颜色
  backgroundColor: 'rgb(241, 241, 241)',
  // 根节点样式
  root: {
    fillColor: 'rgb(255, 245, 214)',
    color: '#1a1a1a',
    fontSize: 24,
    borderRadius: 10,
    borderColor: 'rgb(249, 199, 84)',
    borderWidth: 1,
    active: {
      borderColor: 'rgb(94, 202, 110)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(255, 245, 214)',
    borderColor: 'rgb(249, 199, 84)',
    borderWidth: 1,
    color: '#1a1a1a',
    fontSize: 18,
    borderRadius: 10,
    active: {
      borderColor: 'rgb(94, 202, 110)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 14,
    color: '#1a1a1a',
    active: {
      borderColor: 'rgb(94, 202, 110)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: '#1a1a1a',
    color: '#1a1a1a',
    borderWidth: 2,
    active: {
      borderColor: 'rgb(94, 202, 110)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/classic4.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 经典4
 */

/* harmony default export */ var classic4 = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(30, 53, 86)',
  // 连线的粗细
  lineWidth: 2,
  // 概要连线的粗细
  generalizationLineWidth: 2,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(56, 123, 233)',
  // 背景颜色
  backgroundColor: 'rgb(241, 241, 241)',
  // 根节点样式
  root: {
    fillColor: 'rgb(30, 53, 86)',
    color: '#fff',
    fontSize: 24,
    borderRadius: 10,
    borderColor: 'rgb(189, 197, 201)',
    borderWidth: 2,
    active: {
      borderColor: 'rgb(169, 218, 218)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(169, 218, 218)',
    borderColor: 'rgb(30, 53, 86)',
    borderWidth: 2,
    color: '#fff',
    fontSize: 18,
    borderRadius: 10,
    active: {
      borderColor: 'rgb(56, 123, 233)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 14,
    color: 'rgb(30, 53, 86)',
    borderColor: 'rgb(30, 53, 86)',
    borderWidth: 1,
    marginY: 20,
    active: {
      borderColor: 'rgb(169, 218, 218)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: 'rgb(56, 123, 233)',
    borderColor: 'rgb(56, 123, 233)',
    color: '#fff',
    borderWidth: 0,
    active: {
      borderColor: 'rgb(169, 218, 218)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/dark.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 暗色
 */

/* harmony default export */ var dark = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(17, 68, 23)',
  // 连线的粗细
  lineWidth: 2,
  // 概要连线的粗细
  generalizationLineWidth: 2,
  // 概要连线的颜色
  generalizationLineColor: '#fff',
  // 背景颜色
  backgroundColor: 'rgb(15, 16, 17)',
  // 根节点样式
  root: {
    fillColor: 'rgb(28, 178, 43)',
    color: '#fff',
    fontSize: 24,
    borderRadius: 10,
    active: {
      borderColor: 'rgb(17, 68, 23)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(55, 56, 58)',
    color: 'rgb(147,148,149)',
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 0,
    active: {
      borderColor: 'rgb(17, 68, 23)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 14,
    color: 'rgb(147, 148, 149)',
    active: {
      borderColor: 'rgb(17, 68, 23)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: 'transparent',
    color: '#333',
    active: {
      borderColor: 'rgb(17, 68, 23)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/classicGreen.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 经典绿
 */

/* harmony default export */ var classicGreen = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(123, 199, 120)',
  // 背景颜色
  backgroundColor: 'rgb(236, 245, 231)',
  // 概要连线的粗细
  generalizationLineWidth: 2,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(123, 199, 120)',
  // 根节点样式
  root: {
    fillColor: 'rgb(253, 244, 217)',
    color: '#222',
    active: {
      borderColor: 'rgb(94, 199, 248)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(253, 244, 217)',
    color: '#222',
    borderColor: 'rgb(242, 200, 104)',
    borderWidth: 1,
    fontSize: 14,
    active: {
      borderColor: 'rgb(94, 199, 248)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#333',
    active: {
      borderColor: 'rgb(94, 199, 248)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: 'rgb(123, 199, 120)',
    borderColor: 'transparent',
    borderWidth: 2,
    color: '#fff',
    active: {
      borderColor: 'rgb(94, 199, 248)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/classicBlue.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 经典蓝
 */

/* harmony default export */ var classicBlue = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(51, 51, 51)',
  // 连线的粗细
  lineWidth: 2,
  // 概要连线的粗细
  generalizationLineWidth: 2,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(51, 51, 51)',
  // 背景颜色
  backgroundColor: 'rgb(239, 248, 250)',
  // 根节点样式
  root: {
    fillColor: 'rgb(255, 255, 255)',
    color: '#222',
    active: {
      borderColor: 'rgb(94, 199, 248)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(255, 255, 255)',
    color: '#222',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 1,
    fontSize: 14,
    active: {
      borderColor: 'rgb(94, 199, 248)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#333',
    active: {
      borderColor: 'rgb(94, 199, 248)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: 'rgb(51, 51, 51)',
    color: '#333',
    active: {
      borderColor: 'rgb(94, 199, 248)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/minions.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 小黄人
 */

/* harmony default export */ var minions = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(51, 51, 51)',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: '#222',
  // 背景颜色
  backgroundColor: 'rgb(248, 215, 49)',
  // 根节点样式
  root: {
    fillColor: 'rgb(55, 165, 255)',
    borderColor: 'rgb(51, 51, 51)',
    borderWidth: 3,
    active: {
      borderColor: 'rgb(255, 160, 36)'
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(255, 160, 36)',
    color: '#222',
    borderColor: 'rgb(51, 51, 51)',
    borderWidth: 3,
    fontSize: 14,
    active: {
      borderColor: 'rgb(55, 165, 255)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#222',
    active: {
      borderColor: 'rgb(55, 165, 255)'
    }
  },
  // 概要节点样式
  generalization: {
    borderColor: '#222',
    borderWidth: 3,
    color: '#222',
    active: {
      borderColor: 'rgb(55, 165, 255)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/pinkGrape.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 粉红葡萄
 */

/* harmony default export */ var pinkGrape = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(166, 101, 106)',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: '#fff',
  // 背景颜色
  backgroundColor: 'rgb(255, 208, 211)',
  // 根节点样式
  root: {
    fillColor: 'rgb(139, 109, 225)',
    borderColor: '',
    borderWidth: 0,
    active: {
      borderColor: 'rgb(243, 104, 138)',
      borderWidth: 2
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(243, 104, 138)',
    color: '#fff',
    borderColor: '',
    borderWidth: 0,
    fontSize: 14,
    active: {
      borderColor: 'rgb(139, 109, 225)',
      borderWidth: 2
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#222',
    active: {
      borderColor: 'rgb(139, 109, 225)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: 'transparent',
    color: '#222',
    active: {
      borderColor: 'rgb(139, 109, 225)',
      borderWidth: 2
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/mint.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 薄荷
 */

/* harmony default export */ var mint = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(104, 204, 202)',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(90, 206, 241)',
  // 背景颜色
  backgroundColor: 'rgb(239, 255, 255)',
  // 根节点样式
  root: {
    fillColor: 'rgb(0, 192, 184)',
    borderColor: '',
    borderWidth: 0,
    active: {
      borderColor: 'rgb(255, 160, 36)',
      borderWidth: 3
    }
  },
  // 二级节点样式
  second: {
    fillColor: '#fff',
    color: '#222',
    borderColor: 'rgb(184, 235, 233)',
    borderWidth: 2,
    fontSize: 14,
    active: {
      borderColor: 'rgb(0, 192, 184)'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#222',
    active: {
      borderColor: 'rgb(0, 192, 184)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: 'rgb(90, 206, 241)',
    borderColor: 'transparent',
    color: '#fff',
    active: {
      borderColor: 'rgb(0, 192, 184)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/gold.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 金色vip
 */

/* harmony default export */ var gold = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(51, 56, 62)',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(127, 93, 64)',
  // 背景颜色
  backgroundColor: '#fff',
  // 根节点样式
  root: {
    fillColor: 'rgb(51, 56, 62)',
    color: 'rgb(247, 208, 160)',
    borderColor: '',
    borderWidth: 0,
    active: {
      borderColor: 'rgb(247, 208, 160)',
      borderWidth: 3
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(239, 209, 176)',
    color: 'rgb(81, 58, 42)',
    borderColor: '',
    borderWidth: 0,
    fontSize: 14,
    active: {
      borderColor: 'rgb(51, 56, 62)',
      borderWidth: 2
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#222',
    active: {
      borderColor: 'rgb(0, 192, 184)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: 'rgb(127, 93, 64)',
    borderColor: 'transparent',
    color: 'rgb(255, 214, 175)',
    active: {
      borderColor: 'rgb(51, 56, 62)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/vitalityOrange.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 活力橙
 */

/* harmony default export */ var vitalityOrange = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(254, 146, 0)',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(255, 222, 69)',
  // 背景颜色
  backgroundColor: 'rgb(255, 246, 243)',
  // 根节点样式
  root: {
    fillColor: 'rgb(255, 112, 52)',
    color: '#fff',
    borderColor: '',
    borderWidth: 0,
    active: {
      borderColor: 'rgb(51, 51, 51)',
      borderWidth: 3
    }
  },
  // 二级节点样式
  second: {
    fillColor: '#fff',
    color: 'rgb(51, 51, 51)',
    borderColor: '',
    borderWidth: 0,
    fontSize: 14,
    active: {
      borderColor: 'rgb(255, 112, 52)',
      borderWidth: 2
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#222',
    active: {
      borderColor: 'rgb(255, 112, 52)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: 'rgb(255, 222, 69)',
    borderColor: 'transparent',
    color: 'rgb(51, 51, 51)',
    active: {
      borderColor: 'rgb(255, 112, 52)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/greenLeaf.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 绿叶
 */

/* harmony default export */ var greenLeaf = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(40, 193, 84)',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(251, 158, 0)',
  // 背景颜色
  backgroundColor: 'rgb(238, 255, 243)',
  // 根节点样式
  root: {
    fillColor: 'rgb(25, 193, 73)',
    color: '#fff',
    borderColor: '',
    borderWidth: 0,
    active: {
      borderColor: '#222',
      borderWidth: 3
    }
  },
  // 二级节点样式
  second: {
    fillColor: '#fff',
    color: 'rgb(69, 149, 96)',
    borderColor: '',
    borderWidth: 0,
    fontSize: 14,
    active: {
      borderColor: 'rgb(25, 193, 73)',
      borderWidth: 2
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: '#222',
    active: {
      borderColor: 'rgb(25, 193, 73)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: 'rgb(251, 158, 0)',
    borderWidth: 2,
    color: 'rgb(51, 51, 51)',
    active: {
      borderColor: 'rgb(25, 193, 73)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/dark2.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 暗色2
 */

/* harmony default export */ var dark2 = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: 'rgb(75, 81, 78)',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: 'rgb(255, 119, 34)',
  // 背景颜色
  backgroundColor: 'rgb(27, 31, 34)',
  // 根节点样式
  root: {
    fillColor: 'rgb(36, 179, 96)',
    color: '#fff',
    borderColor: '',
    borderWidth: 0,
    active: {
      borderColor: 'rgb(254, 199, 13)',
      borderWidth: 3
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(254, 199, 13)',
    color: 'rgb(0, 0, 0)',
    borderColor: '',
    borderWidth: 0,
    fontSize: 14,
    active: {
      borderColor: 'rgb(36, 179, 96)',
      borderWidth: 2
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: 'rgb(204, 204, 204)',
    active: {
      borderColor: 'rgb(254, 199, 13)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: 'transparent',
    borderColor: 'rgb(255, 119, 34)',
    borderWidth: 2,
    color: 'rgb(204, 204, 204)',
    active: {
      borderColor: 'rgb(254, 199, 13)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/skyGreen.js


/** 
 * @Author: 王林 
 * @Date: 2021-04-11 15:22:18 
 * @Desc: 天清绿
 */

/* harmony default export */ var skyGreen = (cjs_default()(themes_default, {
  // 连线的颜色
  lineColor: '#fff',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: '#fff',
  // 背景颜色
  backgroundColor: 'rgb(80, 156, 170)',
  // 根节点样式
  root: {
    fillColor: '#fff',
    borderColor: '',
    borderWidth: 0,
    color: 'rgb(65, 89, 158)',
    active: {
      borderColor: 'rgb(251, 227, 188)',
      borderWidth: 3
    }
  },
  // 二级节点样式
  second: {
    fillColor: 'rgb(251, 227, 188)',
    color: 'rgb(65, 89, 158)',
    borderColor: '',
    borderWidth: 0,
    fontSize: 14,
    active: {
      borderColor: '#fff',
      borderWidth: 2
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 12,
    color: 'rgb(65, 89, 158)',
    active: {
      borderColor: 'rgb(251, 227, 188)'
    }
  },
  // 概要节点样式
  generalization: {
    fillColor: '#fff',
    borderColor: 'transparent',
    color: 'rgb(65, 89, 158)',
    active: {
      borderColor: 'rgb(251, 227, 188)'
    }
  }
}));
// CONCATENATED MODULE: ../simple-mind-map/src/themes/index.js






















/* harmony default export */ var themes = ({
  default: themes_default,
  freshGreen: freshGreen,
  blueSky: blueSky,
  brainImpairedPink: brainImpairedPink,
  romanticPurple: romanticPurple,
  freshRed: freshRed,
  earthYellow: earthYellow,
  classic: classic,
  classic2: classic2,
  classic3: classic3,
  classic4: classic4,
  dark: dark,
  classicGreen: classicGreen,
  classicBlue: classicBlue,
  minions: minions,
  pinkGrape: pinkGrape,
  mint: mint,
  gold: gold,
  vitalityOrange: vitalityOrange,
  greenLeaf: greenLeaf,
  dark2: dark2,
  skyGreen: skyGreen
});
// CONCATENATED MODULE: ../simple-mind-map/src/utils/keyMap.js
const keyMap_map = {
  'Backspace': 8,
  'Tab': 9,
  'Enter': 13,
  'Shift': 16,
  'Control': 17,
  'Alt': 18,
  'CapsLock': 20,
  'Esc': 27,
  'Spacebar': 32,
  'PageUp': 33,
  'PageDown': 34,
  'End': 35,
  'Home': 36,
  'Insert': 45,
  'Left': 37,
  'Up': 38,
  'Right': 39,
  'Down': 40,
  'Del': 46,
  'NumLock': 144,
  'Cmd': 91,
  'CmdFF': 224,
  'F1': 112,
  'F2': 113,
  'F3': 114,
  'F4': 115,
  'F5': 116,
  'F6': 117,
  'F7': 118,
  'F8': 119,
  'F9': 120,
  'F10': 121,
  'F11': 122,
  'F12': 123,
  '`': 192,
  '=': 187,
  '-': 189,
  '/': 191,
  '.': 190
}; // 数字

for (let i = 0; i <= 9; i++) {
  keyMap_map[i] = i + 48;
} // 字母


'abcdefghijklmnopqrstuvwxyz'.split('').forEach((n, index) => {
  keyMap_map[n] = index + 65;
});
const keyMap = keyMap_map;
const isKey = (e, key) => {
  let code = typeof e === 'object' ? e.keyCode : e;
  return keyMap_map[key] === code;
};
// CONCATENATED MODULE: ../simple-mind-map/src/KeyCommand.js

/** 
 * @Author: 王林 
 * @Date: 2021-04-24 15:20:46 
 * @Desc: 快捷按键、命令处理类 
 */

class KeyCommand_KeyCommand {
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 15:21:32 
   * @Desc: 构造函数 
   */
  constructor(opt) {
    this.opt = opt;
    this.mindMap = opt.mindMap;
    this.shortcutMap = {//Enter: [fn]
    };
    this.shortcutMapCache = {};
    this.isPause = false;
    this.bindEvent();
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-08-14 08:57:55 
   * @Desc: 暂停快捷键响应 
   */


  pause() {
    this.isPause = true;
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-08-14 08:58:43 
   * @Desc: 恢复快捷键响应 
   */


  recovery() {
    this.isPause = false;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-16 16:29:01 
   * @Desc: 保存当前注册的快捷键数据，然后清空快捷键数据
   */


  save() {
    this.shortcutMapCache = this.shortcutMap;
    this.shortcutMap = {};
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-16 16:29:38 
   * @Desc: 恢复保存的快捷键数据，然后清空缓存数据 
   */


  restore() {
    this.shortcutMap = this.shortcutMapCache;
    this.shortcutMapCache = {};
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 15:23:22 
   * @Desc: 绑定事件 
   */


  bindEvent() {
    window.addEventListener('keydown', e => {
      if (this.isPause) {
        return;
      }

      Object.keys(this.shortcutMap).forEach(key => {
        if (this.checkKey(e, key)) {
          e.stopPropagation();
          e.preventDefault();
          this.shortcutMap[key].forEach(fn => {
            fn();
          });
        }
      });
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 19:24:53 
   * @Desc: 检查键值是否符合 
   */


  checkKey(e, key) {
    let o = this.getOriginEventCodeArr(e);
    let k = this.getKeyCodeArr(key);

    if (o.length !== k.length) {
      return false;
    }

    for (let i = 0; i < o.length; i++) {
      let index = k.findIndex(item => {
        return item === o[i];
      });

      if (index === -1) {
        return false;
      } else {
        k.splice(index, 1);
      }
    }

    return true;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 19:15:19 
   * @Desc: 获取事件对象里的键值数组 
   */


  getOriginEventCodeArr(e) {
    let arr = [];

    if (e.ctrlKey || e.metaKey) {
      arr.push(keyMap['Control']);
    }

    if (e.altKey) {
      arr.push(keyMap['Alt']);
    }

    if (e.shiftKey) {
      arr.push(keyMap['Shift']);
    }

    if (!arr.includes(e.keyCode)) {
      arr.push(e.keyCode);
    }

    return arr;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 19:40:11 
   * @Desc: 获取快捷键对应的键值数组 
   */


  getKeyCodeArr(key) {
    let keyArr = key.split(/\s*\+\s*/);
    let arr = [];
    keyArr.forEach(item => {
      arr.push(keyMap[item]);
    });
    return arr;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 15:23:00 
   * @Desc: 添加快捷键命令 
   * Enter
   * Tab | Insert
   * Shift + a
   */


  addShortcut(key, fn) {
    key.split(/\s*\|\s*/).forEach(item => {
      if (this.shortcutMap[item]) {
        this.shortcutMap[item].push(fn);
      } else {
        this.shortcutMap[item] = [fn];
      }
    });
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-27 14:06:16 
   * @Desc: 移除快捷键命令 
   */


  removeShortcut(key, fn) {
    key.split(/\s*\|\s*/).forEach(item => {
      if (this.shortcutMap[item]) {
        if (fn) {
          let index = this.shortcutMap[item].findIndex(f => {
            return f === fn;
          });

          if (index !== -1) {
            this.shortcutMap[item].splice(index, 1);
          }
        } else {
          this.shortcutMap[item] = [];
          delete this.shortcutMap[item];
        }
      }
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2022-08-14 08:49:58 
   * @Desc: 获取指定快捷键的处理函数 
   */


  getShortcutFn(key) {
    let res = [];
    key.split(/\s*\|\s*/).forEach(item => {
      res = this.shortcutMap[item] || [];
    });
    return res;
  }

}
// CONCATENATED MODULE: ../simple-mind-map/src/Command.js

/** 
 * @Author: 王林 
 * @Date: 2021-05-04 13:10:06 
 * @Desc: 命令类 
 */

class Command_Command {
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:10:24 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    this.opt = opt;
    this.mindMap = opt.mindMap;
    this.commands = {};
    this.history = [];
    this.activeHistoryIndex = 0; // 注册快捷键

    this.registerShortcutKeys();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-03 23:06:55 
   * @Desc: 清空历史数据 
   */


  clearHistory() {
    this.history = [];
    this.activeHistoryIndex = 0;
    this.mindMap.emit('back_forward', 0, 0);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-02 23:23:19 
   * @Desc: 注册快捷键 
   */


  registerShortcutKeys() {
    this.mindMap.keyCommand.addShortcut('Control+z', () => {
      this.mindMap.execCommand('BACK');
    });
    this.mindMap.keyCommand.addShortcut('Control+y', () => {
      this.mindMap.execCommand('FORWARD');
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:12:30 
   * @Desc: 执行命令 
   */


  exec(name, ...args) {
    if (this.commands[name]) {
      this.commands[name].forEach(fn => {
        fn(...args);
      });

      if (name === 'BACK' || name === 'FORWARD') {
        return;
      }

      this.addHistory();
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:13:01 
   * @Desc: 添加命令 
   */


  add(name, fn) {
    if (this.commands[name]) {
      this.commands[name].push(fn);
    } else {
      this.commands[name] = [fn];
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-15 23:02:41 
   * @Desc: 移除命令 
   */


  remove(name, fn) {
    if (!this.commands[name]) {
      return;
    }

    if (!fn) {
      this.commands[name] = [];
      delete this.commands[name];
    } else {
      let index = this.commands[name].find(item => {
        return item === fn;
      });

      if (index !== -1) {
        this.commands[name].splice(index, 1);
      }
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 14:35:43 
   * @Desc: 添加回退数据 
   */


  addHistory() {
    let data = this.getCopyData();
    this.history.push(simpleDeepClone(data));
    this.activeHistoryIndex = this.history.length - 1;
    this.mindMap.emit('data_change', data);
    this.mindMap.emit('back_forward', this.activeHistoryIndex, this.history.length);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 22:34:53 
   * @Desc: 回退 
   */


  back(step = 1) {
    if (this.activeHistoryIndex - step >= 0) {
      this.activeHistoryIndex -= step;
      this.mindMap.emit('back_forward', this.activeHistoryIndex, this.history.length);
      return simpleDeepClone(this.history[this.activeHistoryIndex]);
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-12 10:45:31 
   * @Desc: 前进 
   */


  forward(step = 1) {
    let len = this.history.length;

    if (this.activeHistoryIndex + step <= len - 1) {
      this.activeHistoryIndex += step;
      this.mindMap.emit('back_forward', this.activeHistoryIndex);
      return simpleDeepClone(this.history[this.activeHistoryIndex]);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 15:02:58 
   * @Desc: 获取渲染树数据副本 
   */


  getCopyData() {
    return copyRenderTree({}, this.mindMap.renderer.renderTree);
  }

}

/* harmony default export */ var src_Command = (Command_Command);
// CONCATENATED MODULE: ../simple-mind-map/src/BatchExecution.js
/** 
 * @Author: 王林 
 * @Date: 2021-06-27 13:16:23 
 * @Desc: 在下一个事件循环里执行任务 
 */
const nextTick = function (fn, ctx) {
  let pending = false;
  let timerFunc = null;

  let handle = () => {
    pending = false;
    ctx ? fn.call(ctx) : fn();
  }; // 支持MutationObserver接口的话使用MutationObserver


  if (typeof MutationObserver !== 'undefined') {
    let counter = 1;
    let observer = new MutationObserver(handle);
    let textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true // 设为 true 表示监视指定目标节点或子节点树中节点所包含的字符数据的变化

    });

    timerFunc = function () {
      counter = (counter + 1) % 2; // counter会在0和1两者循环变化

      textNode.data = counter; // 节点变化会触发回调handle，
    };
  } else {
    // 否则使用定时器
    timerFunc = setTimeout;
  }

  return function (cb, ctx) {
    if (pending) return;
    pending = true;
    timerFunc(handle, 0);
  };
};
/** 
 * @Author: 王林 
 * @Date: 2021-06-26 22:40:52 
 * @Desc: 批量执行 
 */


class BatchExecution {
  /** 
   * @Author: 王林 
   * @Date: 2021-06-26 22:41:41 
   * @Desc: 构造函数 
   */
  constructor() {
    this.has = {};
    this.queue = [];
    this.nextTick = nextTick(this.flush, this);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-27 12:54:04 
   * @Desc: 添加任务 
   */


  push(name, fn) {
    if (this.has[name]) {
      return;
    }

    this.has[name] = true;
    this.queue.push({
      name,
      fn
    });
    this.nextTick();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-27 13:09:24 
   * @Desc:  执行队列
   */


  flush() {
    let fns = this.queue.slice(0);
    this.queue = [];
    fns.forEach(({
      name,
      fn
    }) => {
      this.has[name] = false;
      fn();
    });
  }

}

/* harmony default export */ var src_BatchExecution = (BatchExecution);
// EXTERNAL MODULE: ../simple-mind-map/node_modules/jspdf/dist/jspdf.es.min.js
var jspdf_es_min = __webpack_require__("77ee");

// CONCATENATED MODULE: ../simple-mind-map/src/Export.js


const URL = window.URL || window.webkitURL || window;
/** 
 * @Author: 王林 
 * @Date: 2021-07-01 22:05:16 
 * @Desc: 导出类 
 */

class Export_Export {
  /** 
   * @Author: 王林 
   * @Date: 2021-07-01 22:05:42 
   * @Desc: 构造函数 
   */
  constructor(opt) {
    this.mindMap = opt.mindMap;
    this.exportPadding = this.mindMap.opt.exportPadding;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-02 07:44:06 
   * @Desc: 导出 
   */


  async export(type, isDownload = true, name = '思维导图') {
    if (this[type]) {
      let result = await this[type](name);

      if (isDownload && type !== 'pdf') {
        downloadFile(result, name + '.' + type);
      }

      return result;
    } else {
      return null;
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 14:57:40 
   * @Desc: 获取svg数据 
   */


  async getSvgData() {
    const svg = this.mindMap.svg;
    const draw = this.mindMap.draw; // 保存原始信息

    const origWidth = svg.width();
    const origHeight = svg.height();
    const origTransform = draw.transform();
    const elRect = this.mindMap.el.getBoundingClientRect(); // 去除放大缩小的变换效果

    draw.scale(1 / origTransform.scaleX, 1 / origTransform.scaleY); // 获取变换后的位置尺寸信息，其实是getBoundingClientRect方法的包装方法

    const rect = draw.rbox(); // 将svg设置为实际内容的宽高

    svg.size(rect.width, rect.height); // 把实际内容变换

    draw.translate(-rect.x + elRect.left, -rect.y + elRect.top); // 克隆一份数据

    const clone = svg.clone(); // 恢复原先的大小和变换信息

    svg.size(origWidth, origHeight);
    draw.transform(origTransform); // 把图片的url转换成data:url类型，否则导出会丢失图片

    let imageList = clone.find('image');
    let task = imageList.map(async item => {
      let imgUlr = item.attr('href') || item.attr('xlink:href');
      let imgData = await imgToDataUrl(imgUlr);
      item.attr('href', imgData);
    });
    await Promise.all(task);
    return {
      node: clone,
      str: clone.svg()
    };
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 15:25:19 
   * @Desc:  svg转png
   */


  svgToPng(svgSrc) {
    return new Promise((resolve, reject) => {
      const img = new Image(); // 跨域图片需要添加这个属性，否则画布被污染了无法导出图片

      img.setAttribute('crossOrigin', 'anonymous');

      img.onload = async () => {
        try {
          let canvas = document.createElement('canvas');
          canvas.width = img.width + this.exportPadding * 2;
          canvas.height = img.height + this.exportPadding * 2;
          let ctx = canvas.getContext('2d'); // 绘制背景

          await this.drawBackgroundToCanvas(ctx, canvas.width, canvas.height); // 图片绘制到canvas里

          ctx.drawImage(img, 0, 0, img.width, img.height, this.exportPadding, this.exportPadding, img.width, img.height);
          resolve(canvas.toDataURL());
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = e => {
        reject(e);
      };

      img.src = svgSrc;
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 15:32:07 
   * @Desc: 在canvas上绘制思维导图背景
   */


  drawBackgroundToCanvas(ctx, width, height) {
    return new Promise((resolve, rejct) => {
      let {
        backgroundColor = '#fff',
        backgroundImage,
        backgroundRepeat = "repeat"
      } = this.mindMap.themeConfig; // 背景颜色

      ctx.save();
      ctx.rect(0, 0, width, height);
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore(); // 背景图片

      if (backgroundImage && backgroundImage !== 'none') {
        ctx.save();
        let img = new Image();
        img.src = backgroundImage;

        img.onload = () => {
          let pat = ctx.createPattern(img, backgroundRepeat);
          ctx.rect(0, 0, width, height);
          ctx.fillStyle = pat;
          ctx.fill();
          ctx.restore();
          resolve();
        };

        img.onerror = e => {
          rejct(e);
        };
      } else {
        resolve();
      }
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-01 22:09:51 
   * @Desc: 导出为png 
   * 方法1.把svg的图片都转化成data:url格式，再转换
   * 方法2.把svg的图片提取出来再挨个绘制到canvas里，最后一起转换
   */


  async png() {
    let {
      str
    } = await this.getSvgData(); // 转换成blob数据

    let blob = new Blob([str], {
      type: 'image/svg+xml'
    }); // 转换成data:url数据

    let svgUrl = URL.createObjectURL(blob); // 绘制到canvas上

    let imgDataUrl = await this.svgToPng(svgUrl);
    URL.revokeObjectURL(svgUrl);
    return imgDataUrl;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-08-08 19:23:08 
   * @Desc: 导出为pdf 
   */


  async pdf(name) {
    let img = await this.png();
    let pdf = new jspdf_es_min["a" /* default */]('', 'pt', 'a4');
    let a4Width = 595;
    let a4Height = 841;
    let a4Ratio = a4Width / a4Height;
    let image = new Image();

    image.onload = () => {
      let imageWidth = image.width;
      let imageHeight = image.height;
      let imageRatio = imageWidth / imageHeight;
      let w, h;

      if (imageWidth <= a4Width && imageHeight <= a4Height) {
        // 使用图片原始宽高
        w = imageWidth;
        h = imageHeight;
      } else if (a4Ratio > imageRatio) {
        // 以a4Height为高度，缩放图片宽度
        w = imageRatio * a4Height;
        h = a4Height;
      } else {
        // 以a4Width为宽度，缩放图片高度
        w = a4Width;
        h = a4Width / imageRatio;
      }

      pdf.addImage(img, 'PNG', (a4Width - w) / 2, (a4Height - h) / 2, w, h);
      pdf.save(name);
    };

    image.src = img;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 15:32:07 
   * @Desc: 在svg上绘制思维导图背景
   */


  drawBackgroundToSvg(svg) {
    return new Promise(async (resolve, rejct) => {
      let {
        backgroundColor = '#fff',
        backgroundImage,
        backgroundRepeat = "repeat"
      } = this.mindMap.themeConfig; // 背景颜色

      svg.css('background-color', backgroundColor); // 背景图片

      if (backgroundImage && backgroundImage !== 'none') {
        let imgDataUrl = await imgToDataUrl(backgroundImage);
        svg.css('background-image', `url(${imgDataUrl})`);
        svg.css('background-repeat', backgroundRepeat);
        resolve();
      } else {
        resolve();
      }
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-04 14:54:07 
   * @Desc: 导出为svg 
   */


  async svg() {
    let {
      node
    } = await this.getSvgData();
    await this.drawBackgroundToSvg(node);
    let str = node.svg(); // 转换成blob数据

    let blob = new Blob([str], {
      type: 'image/svg+xml'
    });
    return URL.createObjectURL(blob);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-03 22:19:17 
   * @Desc: 导出为json 
   */


  json() {
    let data = this.mindMap.command.getCopyData();
    let str = JSON.stringify(data);
    let blob = new Blob([str]);
    return URL.createObjectURL(blob);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-03 22:24:24 
   * @Desc: 专有文件，其实就是json文件 
   */


  smm() {
    return this.json();
  }

}

/* harmony default export */ var src_Export = (Export_Export);
// CONCATENATED MODULE: ../simple-mind-map/src/Select.js

/** 
 * @Author: 王林 
 * @Date: 2021-07-10 22:34:51 
 * @Desc: 选择节点类 
 */

class Select_Select {
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 22:35:16 
   * @Desc: 构造函数 
   */
  constructor({
    mindMap
  }) {
    this.mindMap = mindMap;
    this.rect = null;
    this.isMousedown = false;
    this.mouseDownX = 0;
    this.mouseDownY = 0;
    this.mouseMoveX = 0;
    this.mouseMoveY = 0;
    this.bindEvent();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 22:36:36 
   * @Desc: 绑定事件 
   */


  bindEvent() {
    this.checkInNodes = throttle(this.checkInNodes, 500, this);
    this.mindMap.on('mousedown', e => {
      if (this.mindMap.opt.readonly) {
        return;
      }

      if (!e.ctrlKey && e.which !== 3) {
        return;
      }

      this.isMousedown = true;
      let {
        x,
        y
      } = this.mindMap.toPos(e.clientX, e.clientY);
      this.mouseDownX = x;
      this.mouseDownY = y;
      this.createRect(x, y);
    });
    this.mindMap.on('mousemove', e => {
      if (this.mindMap.opt.readonly) {
        return;
      }

      if (!this.isMousedown) {
        return;
      }

      let {
        x,
        y
      } = this.mindMap.toPos(e.clientX, e.clientY);
      this.mouseMoveX = x;
      this.mouseMoveY = y;

      if (Math.abs(x - this.mouseDownX) <= 10 && Math.abs(y - this.mouseDownY) <= 10) {
        return;
      }

      clearTimeout(this.autoMoveTimer);
      this.onMove(x, y);
    });
    this.mindMap.on('mouseup', e => {
      if (this.mindMap.opt.readonly) {
        return;
      }

      if (!this.isMousedown) {
        return;
      }

      this.mindMap.emit('node_active', null, this.mindMap.renderer.activeNodeList);
      clearTimeout(this.autoMoveTimer);
      this.isMousedown = false;
      if (this.rect) this.rect.remove();
      this.rect = null;
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-13 07:55:49 
   * @Desc: 鼠标移动事件
   */


  onMove(x, y) {
    // 绘制矩形
    this.rect.plot([[this.mouseDownX, this.mouseDownY], [this.mouseMoveX, this.mouseDownY], [this.mouseMoveX, this.mouseMoveY], [this.mouseDownX, this.mouseMoveY]]);
    this.checkInNodes(); // 检测边缘移动

    let step = this.mindMap.opt.selectTranslateStep;
    let limit = this.mindMap.opt.selectTranslateLimit;
    let count = 0; // 左边缘

    if (x <= this.mindMap.elRect.left + limit) {
      this.mouseDownX += step;
      this.mindMap.view.translateX(step);
      count++;
    } // 右边缘


    if (x >= this.mindMap.elRect.right - limit) {
      this.mouseDownX -= step;
      this.mindMap.view.translateX(-step);
      count++;
    } // 上边缘


    if (y <= this.mindMap.elRect.top + limit) {
      this.mouseDownY += step;
      this.mindMap.view.translateY(step);
      count++;
    } // 下边缘


    if (y >= this.mindMap.elRect.bottom - limit) {
      this.mouseDownY -= step;
      this.mindMap.view.translateY(-step);
      count++;
    }

    if (count > 0) {
      this.startAutoMove(x, y);
    }
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-22 08:02:23 
   * @Desc: 开启自动移动 
   */


  startAutoMove(x, y) {
    this.autoMoveTimer = setTimeout(() => {
      this.onMove(x, y);
    }, 20);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 10:19:37 
   * @Desc: 创建矩形 
   */


  createRect(x, y) {
    this.rect = this.mindMap.svg.polygon().stroke({
      color: '#0984e3'
    }).fill({
      color: 'rgba(9,132,227,0.3)'
    }).plot([[x, y]]);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 10:20:43 
   * @Desc: 检测在选区里的节点 
   */


  checkInNodes() {
    let {
      scaleX,
      scaleY,
      translateX,
      translateY
    } = this.mindMap.draw.transform();
    let minx = Math.min(this.mouseDownX, this.mouseMoveX);
    let miny = Math.min(this.mouseDownY, this.mouseMoveY);
    let maxx = Math.max(this.mouseDownX, this.mouseMoveX);
    let maxy = Math.max(this.mouseDownY, this.mouseMoveY);
    bfsWalk(this.mindMap.renderer.root, node => {
      let {
        left,
        top,
        width,
        height
      } = node;
      let right = (left + width) * scaleX + translateX;
      let bottom = (top + height) * scaleY + translateY;
      left = left * scaleX + translateX;
      top = top * scaleY + translateY;

      if (left >= minx && right <= maxx && top >= miny && bottom <= maxy) {
        this.mindMap.batchExecution.push('activeNode' + node.uid, () => {
          if (node.nodeData.data.isActive) {
            return;
          }

          this.mindMap.renderer.setNodeActive(node, true);
          this.mindMap.renderer.addActiveNode(node);
        });
      } else if (node.nodeData.data.isActive) {
        this.mindMap.batchExecution.push('activeNode' + node.uid, () => {
          if (!node.nodeData.data.isActive) {
            return;
          }

          this.mindMap.renderer.setNodeActive(node, false);
          this.mindMap.renderer.removeActiveNode(node);
        });
      }
    });
  }

}

/* harmony default export */ var src_Select = (Select_Select);
// CONCATENATED MODULE: ../simple-mind-map/src/Drag.js


/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-11-23 17:38:55 
 * @Desc: 节点拖动类 
 */

class Drag_Drag extends layouts_Base {
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 22:35:16 
   * @Desc: 构造函数 
   */
  constructor({
    mindMap
  }) {
    super(mindMap.renderer);
    this.mindMap = mindMap;
    this.reset();
    this.bindEvent();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-23 19:33:56 
   * @Desc: 复位 
   */


  reset() {
    // 当前拖拽节点
    this.node = null; // 当前重叠节点

    this.overlapNode = null; // 当前上一个同级节点

    this.prevNode = null; // 当前下一个同级节点

    this.nextNode = null; // 画布的变换数据

    this.drawTransform = null; // 克隆节点

    this.clone = null; // 连接线

    this.line = null; // 同级位置占位符

    this.placeholder = null; // 鼠标按下位置和节点左上角的偏移量

    this.offsetX = 0;
    this.offsetY = 0; // 克隆节点左上角的坐标

    this.cloneNodeLeft = 0;
    this.cloneNodeTop = 0; // 当前鼠标是否按下

    this.isMousedown = false; // 拖拽的鼠标位置变量

    this.mouseDownX = 0;
    this.mouseDownY = 0;
    this.mouseMoveX = 0;
    this.mouseMoveY = 0;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-10 22:36:36 
   * @Desc: 绑定事件 
   */


  bindEvent() {
    this.checkOverlapNode = throttle(this.checkOverlapNode, 300, this);
    this.mindMap.on('node_mousedown', (node, e) => {
      if (this.mindMap.opt.readonly || node.isGeneralization) {
        return;
      }

      if (e.which !== 1 || node.isRoot) {
        return;
      }

      e.preventDefault(); // 计算鼠标按下的位置距离节点左上角的距离

      this.drawTransform = this.mindMap.draw.transform();
      let {
        scaleX,
        scaleY,
        translateX,
        translateY
      } = this.drawTransform;
      this.offsetX = e.clientX - (node.left * scaleX + translateX);
      this.offsetY = e.clientY - (node.top * scaleY + translateY); // 

      this.node = node;
      this.isMousedown = true;
      let {
        x,
        y
      } = this.mindMap.toPos(e.clientX, e.clientY);
      this.mouseDownX = x;
      this.mouseDownY = y;
    });
    this.mindMap.on('mousemove', e => {
      if (this.mindMap.opt.readonly) {
        return;
      }

      if (!this.isMousedown) {
        return;
      }

      e.preventDefault();
      let {
        x,
        y
      } = this.mindMap.toPos(e.clientX, e.clientY);
      this.mouseMoveX = x;
      this.mouseMoveY = y;

      if (Math.abs(x - this.mouseDownX) <= 10 && Math.abs(y - this.mouseDownY) <= 10 && !this.node.isDrag) {
        return;
      }

      this.mindMap.renderer.clearAllActive();
      this.onMove(x, y);
    });
    this.onMouseup = this.onMouseup.bind(this);
    this.mindMap.on('node_mouseup', this.onMouseup);
    this.mindMap.on('mouseup', this.onMouseup);
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-23 19:38:02 
   * @Desc: 鼠标松开事件 
   */


  onMouseup(e) {
    if (!this.isMousedown) {
      return;
    }

    this.isMousedown = false;
    let _nodeIsDrag = this.node.isDrag;
    this.node.isDrag = false;
    this.node.show();
    this.removeCloneNode(); // 存在重叠子节点，则移动作为其子节点

    if (this.overlapNode) {
      this.mindMap.renderer.setNodeActive(this.overlapNode, false);
      this.mindMap.execCommand('MOVE_NODE_TO', this.node, this.overlapNode);
    } else if (this.prevNode) {
      // 存在前一个相邻节点，作为其下一个兄弟节点
      this.mindMap.renderer.setNodeActive(this.prevNode, false);
      this.mindMap.execCommand('INSERT_AFTER', this.node, this.prevNode);
    } else if (this.nextNode) {
      // 存在下一个相邻节点，作为其前一个兄弟节点
      this.mindMap.renderer.setNodeActive(this.nextNode, false);
      this.mindMap.execCommand('INSERT_BEFORE', this.node, this.nextNode);
    } else if (_nodeIsDrag) {
      // 自定义位置
      let {
        x,
        y
      } = this.mindMap.toPos(e.clientX - this.offsetX, e.clientY - this.offsetY);
      let {
        scaleX,
        scaleY,
        translateX,
        translateY
      } = this.drawTransform;
      x = (x - translateX) / scaleX;
      y = (y - translateY) / scaleY;
      this.node.left = x;
      this.node.top = y;
      this.node.customLeft = x;
      this.node.customTop = y;
      this.mindMap.execCommand('SET_NODE_CUSTOM_POSITION', this.node, x, y);
      this.mindMap.render();
    }

    this.reset();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-23 19:34:53 
   * @Desc: 创建克隆节点 
   */


  createCloneNode() {
    if (!this.clone) {
      // 节点
      this.clone = this.node.group.clone();
      this.clone.opacity(0.5);
      this.clone.css('z-index', 99999);
      this.node.isDrag = true;
      this.node.hide(); // 连接线

      this.line = this.draw.path();
      this.line.opacity(0.5);
      this.node.styleLine(this.line, this.node); // 同级位置占位符

      this.placeholder = this.draw.rect().fill({
        color: this.node.style.merge('lineColor', true)
      });
      this.mindMap.draw.add(this.clone);
    }
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-23 19:35:16 
   * @Desc: 移除克隆节点 
   */


  removeCloneNode() {
    if (!this.clone) {
      return;
    }

    this.clone.remove();
    this.line.remove();
    this.placeholder.remove();
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-11-23 18:53:47 
   * @Desc: 拖动中 
   */


  onMove(x, y) {
    if (!this.isMousedown) {
      return;
    }

    this.createCloneNode();
    let {
      scaleX,
      scaleY,
      translateX,
      translateY
    } = this.drawTransform;
    this.cloneNodeLeft = x - this.offsetX;
    this.cloneNodeTop = y - this.offsetY;
    x = (this.cloneNodeLeft - translateX) / scaleX;
    y = (this.cloneNodeTop - translateY) / scaleY;
    let t = this.clone.transform();
    this.clone.translate(x - t.translateX, y - t.translateY); // 连接线

    let parent = this.node.parent;
    this.line.plot(this.quadraticCurvePath(parent.left + parent.width / 2, parent.top + parent.height / 2, x + this.node.width / 2, y + this.node.height / 2));
    this.checkOverlapNode();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 10:20:43 
   * @Desc: 检测重叠节点 
   */


  checkOverlapNode() {
    if (!this.drawTransform) {
      return;
    }

    let {
      scaleX,
      scaleY,
      translateX,
      translateY
    } = this.drawTransform;
    let checkRight = this.cloneNodeLeft + this.node.width * scaleX;
    let checkBottom = this.cloneNodeTop + this.node.height * scaleX;
    this.overlapNode = null;
    this.prevNode = null;
    this.nextNode = null;
    this.placeholder.size(0, 0);
    bfsWalk(this.mindMap.renderer.root, node => {
      if (node.nodeData.data.isActive) {
        this.mindMap.renderer.setNodeActive(node, false);
      }

      if (node === this.node || this.node.isParent(node)) {
        return;
      }

      if (this.overlapNode || this.prevNode && this.nextNode) {
        return;
      }

      let {
        left,
        top,
        width,
        height
      } = node;
      let _left = left;
      let _top = top;

      let _bottom = top + height;

      let right = (left + width) * scaleX + translateX;
      let bottom = (top + height) * scaleY + translateY;
      left = left * scaleX + translateX;
      top = top * scaleY + translateY; // 检测是否重叠

      if (!this.overlapNode) {
        if (left <= checkRight && right >= this.cloneNodeLeft && top <= checkBottom && bottom >= this.cloneNodeTop) {
          this.overlapNode = node;
        }
      } // 检测兄弟节点位置


      if (!this.prevNode && !this.nextNode && this.node.isBrother(node)) {
        if (left <= checkRight && right >= this.cloneNodeLeft) {
          if (this.cloneNodeTop > bottom && this.cloneNodeTop <= bottom + 10) {
            this.prevNode = node;
            this.placeholder.size(node.width, 10).move(_left, _bottom);
          } else if (checkBottom < top && checkBottom >= top - 10) {
            this.nextNode = node;
            this.placeholder.size(node.width, 10).move(_left, _top - 10);
          }
        }
      }
    });

    if (this.overlapNode) {
      this.mindMap.renderer.setNodeActive(this.overlapNode, true);
    }
  }

}

/* harmony default export */ var src_Drag = (Drag_Drag);
// CONCATENATED MODULE: ../simple-mind-map/index.js













 // 默认选项配置

const defaultOpt = {
  // 是否只读
  readonly: false,
  // 布局
  layout: 'logicalStructure',
  // 主题
  theme: 'default',
  // 内置主题：default（默认主题）
  // 主题配置，会和所选择的主题进行合并
  themeConfig: {},
  // 放大缩小的增量比例
  scaleRatio: 0.1,
  // 最多显示几个标签
  maxTag: 5,
  // 导出图片时的内边距
  exportPadding: 20,
  // 展开收缩按钮尺寸
  expandBtnSize: 20,
  // 节点里图片和文字的间距
  imgTextMargin: 5,
  // 节点里各种文字信息的间距，如图标和文字的间距
  textContentMargin: 2,
  // 多选节点时鼠标移动到边缘时的画布移动偏移量
  selectTranslateStep: 3,
  // 多选节点时鼠标移动距边缘多少距离时开始偏移
  selectTranslateLimit: 20,
  // 自定义节点备注内容显示
  customNoteContentShow: null
  /*
      {
          show(){},
          hide(){}
      }
  */

};
/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-04-06 11:18:47 
 * @Desc: 思维导图 
 */

class simple_mind_map_MindMap {
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 11:19:01 
   * @Desc: 构造函数 
   */
  constructor(opt = {}) {
    // 合并选项
    this.opt = this.handleOpt(cjs_default()(defaultOpt, opt)); // 容器元素

    this.el = this.opt.el;
    this.elRect = this.el.getBoundingClientRect(); // 画布宽高

    this.width = this.elRect.width;
    this.height = this.elRect.height; // 画布

    this.svg = SVG().addTo(this.el).size(this.width, this.height);
    this.draw = this.svg.group(); // 节点id

    this.uid = 0; // 初始化主题

    this.initTheme(); // 事件类

    this.event = new src_Event({
      mindMap: this
    }); // 按键类

    this.keyCommand = new KeyCommand_KeyCommand({
      mindMap: this
    }); // 命令类

    this.command = new src_Command({
      mindMap: this
    }); // 渲染类

    this.renderer = new src_Render({
      mindMap: this
    }); // 视图操作类

    this.view = new src_View({
      mindMap: this,
      draw: this.draw
    }); // 导出类

    this.doExport = new src_Export({
      mindMap: this
    }); // 选择类

    this.select = new src_Select({
      mindMap: this
    }); // 拖动类

    this.drag = new src_Drag({
      mindMap: this
    }); // 批量执行类

    this.batchExecution = new src_BatchExecution(); // 初始渲染

    this.reRender();
    setTimeout(() => {
      this.command.addHistory();
    }, 0);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-01 22:15:22 
   * @Desc: 配置参数处理 
   */


  handleOpt(opt) {
    // 检查布局配置
    if (!layoutValueList.includes(opt.layout)) {
      opt.layout = 'logicalStructure';
    } // 检查主题配置


    opt.theme = opt.theme && themes[opt.theme] ? opt.theme : 'default';
    return opt;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-04-06 18:47:29 
   * @Desc: 渲染，部分渲染
   */


  render() {
    this.batchExecution.push('render', () => {
      this.initTheme();
      this.renderer.reRender = false;
      this.renderer.render();
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-08 22:05:11 
   * @Desc: 重新渲染 
   */


  reRender() {
    this.batchExecution.push('render', () => {
      this.draw.clear();
      this.initTheme();
      this.renderer.reRender = true;
      this.renderer.render();
    });
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 21:16:52 
   * @Desc: 容器尺寸变化，调整尺寸 
   */


  resize() {
    this.elRect = this.el.getBoundingClientRect();
    this.width = this.elRect.width;
    this.height = this.elRect.height;
    this.svg.size(this.width, this.height);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 13:25:50 
   * @Desc: 监听事件 
   */


  on(event, fn) {
    this.event.on(event, fn);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 13:51:35 
   * @Desc: 触发事件 
   */


  emit(event, ...args) {
    this.event.emit(event, ...args);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-04-24 13:53:54 
   * @Desc: 解绑事件 
   */


  off(event, fn) {
    this.event.off(event, fn);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-05 13:32:43 
   * @Desc: 设置主题
   */


  initTheme() {
    // 合并主题配置
    this.themeConfig = cjs_default()(themes[this.opt.theme], this.opt.themeConfig); // 设置背景样式

    src_Style.setBackgroundStyle(this.el, this.themeConfig);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-05 13:52:08 
   * @Desc: 设置主题 
   */


  setTheme(theme) {
    this.renderer.clearAllActive();
    this.opt.theme = theme;
    this.reRender();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-06-25 23:52:37 
   * @Desc: 获取当前主题 
   */


  getTheme() {
    return this.opt.theme;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-05 13:50:17 
   * @Desc: 设置主题配置 
   */


  setThemeConfig(config) {
    this.opt.themeConfig = config;
    this.reRender();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-01 10:38:34 
   * @Desc: 获取自定义主题配置 
   */


  getCustomThemeConfig() {
    return this.opt.themeConfig;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-05 14:01:29 
   * @Desc: 获取某个主题配置值 
   */


  getThemeConfig(prop) {
    return prop === undefined ? this.themeConfig : this.themeConfig[prop];
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-13 16:17:06 
   * @Desc: 获取当前布局结构 
   */


  getLayout() {
    return this.opt.layout;
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2021-07-13 16:17:33 
   * @Desc: 设置布局结构 
   */


  setLayout(layout) {
    // 检查布局配置
    if (!layoutValueList.includes(layout)) {
      layout = 'logicalStructure';
    }

    this.opt.layout = layout;
    this.renderer.setLayout();
    this.render();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-05-04 13:01:00 
   * @Desc: 执行命令 
   */


  execCommand(...args) {
    this.command.exec(...args);
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-08-03 22:58:12 
   * @Desc: 动态设置思维导图数据 
   */


  setData(data) {
    this.execCommand('CLEAR_ACTIVE_NODE');
    this.command.clearHistory();
    this.renderer.renderTree = data;
    this.reRender();
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-01 22:06:38 
   * @Desc: 导出 
   */


  async export(...args) {
    let result = await this.doExport.export(...args);
    return result;
  }
  /** 
   * @Author: 王林 
   * @Date: 2021-07-11 09:20:03 
   * @Desc: 转换位置 
   */


  toPos(x, y) {
    return {
      x: x - this.elRect.left,
      y: y - this.elRect.top
    };
  }
  /** 
   * javascript comment 
   * @Author: 王林25 
   * @Date: 2022-06-08 14:12:38 
   * @Desc: 设置只读模式、编辑模式 
   */


  setMode(mode) {
    if (!['readonly', 'edit'].includes(mode)) {
      return;
    }

    this.opt.readonly = mode === 'readonly';

    if (this.opt.readonly) {
      // 取消当前激活的元素
      this.renderer.clearAllActive();
    }

    this.emit('mode_change', mode);
  }

}

/* harmony default export */ var simple_mind_map = (simple_mind_map_MindMap);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (simple_mind_map);



/***/ }),

/***/ "fd50":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b257");
var isCallable = __webpack_require__("5e8c");
var isPrototypeOf = __webpack_require__("1a33");
var USE_SYMBOL_AS_UID = __webpack_require__("2347");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "fe11":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("ec82");
var store = __webpack_require__("660c");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "feb8":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("5e8c");

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var SPECIAL_DOCUMENT_ALL = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = SPECIAL_DOCUMENT_ALL ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ })

/******/ });