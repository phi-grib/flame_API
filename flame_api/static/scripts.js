/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

;/*!
   Copyright 2008-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.10.20
 ©2008-2019 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(f,z,y){f instanceof String&&(f=String(f));for(var p=f.length,H=0;H<p;H++){var L=f[H];if(z.call(y,L,H,f))return{i:H,v:L}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(f,z,y){f!=Array.prototype&&f!=Object.prototype&&(f[z]=y.value)};$jscomp.getGlobal=function(f){return"undefined"!=typeof window&&window===f?f:"undefined"!=typeof global&&null!=global?global:f};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(f,z,y,p){if(z){y=$jscomp.global;f=f.split(".");for(p=0;p<f.length-1;p++){var H=f[p];H in y||(y[H]={});y=y[H]}f=f[f.length-1];p=y[f];z=z(p);z!=p&&null!=z&&$jscomp.defineProperty(y,f,{configurable:!0,writable:!0,value:z})}};$jscomp.polyfill("Array.prototype.find",function(f){return f?f:function(f,y){return $jscomp.findInternal(this,f,y).v}},"es6","es3");
(function(f){"function"===typeof define&&define.amd?define(["jquery"],function(z){return f(z,window,document)}):"object"===typeof exports?module.exports=function(z,y){z||(z=window);y||(y="undefined"!==typeof window?require("jquery"):require("jquery")(z));return f(y,z,z.document)}:f(jQuery,window,document)})(function(f,z,y,p){function H(a){var b,c,d={};f.each(a,function(e,h){(b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" ")&&(c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&H(a[e]))});a._hungarianMap=d}function L(a,b,c){a._hungarianMap||H(a);var d;f.each(b,function(e,h){d=a._hungarianMap[e];d===p||!c&&b[d]!==p||("o"===d.charAt(0)?(b[d]||(b[d]={}),f.extend(!0,b[d],b[e]),L(a[d],b[d],c)):b[d]=b[e])})}function Ga(a){var b=q.defaults.oLanguage,c=b.sDecimal;c&&Ha(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&d&&"No data available in table"===b.sEmptyTable&&M(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&d&&"Loading..."===b.sLoadingRecords&&M(a,a,
"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Ha(a)}}function jb(a){F(a,"ordering","bSort");F(a,"orderMulti","bSortMulti");F(a,"orderClasses","bSortClasses");F(a,"orderCellsTop","bSortCellsTop");F(a,"order","aaSorting");F(a,"orderFixed","aaSortingFixed");F(a,"paging","bPaginate");F(a,"pagingType","sPaginationType");F(a,"pageLength","iDisplayLength");F(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&L(q.models.oSearch,a[b])}function kb(a){F(a,"orderable","bSortable");F(a,"orderData","aDataSort");F(a,"orderSequence","asSorting");F(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"!==typeof b||f.isArray(b)||(a.aDataSort=[b])}function lb(a){if(!q.__browser){var b={};q.__browser=b;var c=f("<div/>").css({position:"fixed",top:0,left:-1*f(z).scrollLeft(),height:1,width:1,
overflow:"hidden"}).append(f("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(f("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}f.extend(a.oBrowser,q.__browser);a.oScroll.iBarWidth=q.__browser.barWidth}
function mb(a,b,c,d,e,h){var g=!1;if(c!==p){var k=c;g=!0}for(;d!==e;)a.hasOwnProperty(d)&&(k=g?b(k,a[d],d,a):a[d],g=!0,d+=h);return k}function Ia(a,b){var c=q.defaults.column,d=a.aoColumns.length;c=f.extend({},q.models.oColumn,c,{nTh:b?b:y.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=f.extend({},q.models.oSearch,c[d]);ma(a,d,f(b).data())}function ma(a,b,c){b=a.aoColumns[b];
var d=a.oClasses,e=f(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var h=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);h&&(b.sWidthOrig=h[1])}c!==p&&null!==c&&(kb(c),L(q.defaults.column,c,!0),c.mDataProp===p||c.mData||(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),f.extend(b,c),M(b,c,"sWidth","sWidthOrig"),c.iDataSort!==p&&(b.aDataSort=[c.iDataSort]),M(b,c,"aDataSort"));var g=b.mData,k=U(g),
l=b.mRender?U(b.mRender):null;c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=f.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=k(a,b,p,c);return l&&b?l(d,b,a,c):d};b.fnSetData=function(a,b,c){return Q(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==f.inArray("asc",b.asSorting);c=-1!==f.inArray("desc",b.asSorting);b.bSortable&&(a||c)?a&&!c?(b.sSortingClass=
d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI):(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI="")}function aa(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ja(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;""===b.sY&&""===b.sX||na(a);A(a,null,"column-sizing",[a])}function ba(a,b){a=oa(a,"bVisible");return"number"===
typeof a[b]?a[b]:null}function ca(a,b){a=oa(a,"bVisible");b=f.inArray(b,a);return-1!==b?b:null}function W(a){var b=0;f.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==f(d.nTh).css("display")&&b++});return b}function oa(a,b){var c=[];f.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ka(a){var b=a.aoColumns,c=a.aoData,d=q.ext.type.detect,e,h,g;var k=0;for(e=b.length;k<e;k++){var f=b[k];var n=[];if(!f.sType&&f._sManualType)f.sType=f._sManualType;else if(!f.sType){var m=0;for(h=
d.length;m<h;m++){var w=0;for(g=c.length;w<g;w++){n[w]===p&&(n[w]=I(a,w,k,"type"));var u=d[m](n[w],a);if(!u&&m!==d.length-1)break;if("html"===u)break}if(u){f.sType=u;break}}f.sType||(f.sType="string")}}}function nb(a,b,c,d){var e,h,g,k=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){var l=b[e];var n=l.targets!==p?l.targets:l.aTargets;f.isArray(n)||(n=[n]);var m=0;for(h=n.length;m<h;m++)if("number"===typeof n[m]&&0<=n[m]){for(;k.length<=n[m];)Ia(a);d(n[m],l)}else if("number"===typeof n[m]&&0>n[m])d(k.length+
n[m],l);else if("string"===typeof n[m]){var w=0;for(g=k.length;w<g;w++)("_all"==n[m]||f(k[w].nTh).hasClass(n[m]))&&d(w,l)}}if(c)for(e=0,a=c.length;e<a;e++)d(e,c[e])}function R(a,b,c,d){var e=a.aoData.length,h=f.extend(!0,{},q.models.oRow,{src:c?"dom":"data",idx:e});h._aData=b;a.aoData.push(h);for(var g=a.aoColumns,k=0,l=g.length;k<l;k++)g[k].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==p&&(a.aIds[b]=h);!c&&a.oFeatures.bDeferRender||La(a,e,c,d);return e}function pa(a,b){var c;b instanceof
f||(b=f(b));return b.map(function(b,e){c=Ma(a,e);return R(a,c.data,e,c.cells)})}function I(a,b,c,d){var e=a.iDraw,h=a.aoColumns[c],g=a.aoData[b]._aData,k=h.sDefaultContent,f=h.fnGetData(g,d,{settings:a,row:b,col:c});if(f===p)return a.iDrawError!=e&&null===k&&(O(a,0,"Requested unknown parameter "+("function"==typeof h.mData?"{function}":"'"+h.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),k;if((f===g||null===f)&&null!==k&&d!==p)f=k;else if("function"===typeof f)return f.call(g);return null===
f&&"display"==d?"":f}function ob(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function Na(a){return f.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function U(a){if(f.isPlainObject(a)){var b={};f.each(a,function(a,c){c&&(b[a]=U(c))});return function(a,c,h,g){var d=b[c]||b._;return d!==p?d(a,c,h,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,h,g){return a(b,c,h,g)};if("string"!==typeof a||
-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(b,c){return b[a]};var c=function(a,b,h){if(""!==h){var d=Na(h);for(var e=0,l=d.length;e<l;e++){h=d[e].match(da);var n=d[e].match(X);if(h){d[e]=d[e].replace(da,"");""!==d[e]&&(a=a[d[e]]);n=[];d.splice(0,e+1);d=d.join(".");if(f.isArray(a))for(e=0,l=a.length;e<l;e++)n.push(c(a[e],b,d));a=h[0].substring(1,h[0].length-1);a=""===a?n:n.join(a);break}else if(n){d[e]=d[e].replace(X,"");a=a[d[e]]();continue}if(null===a||a[d[e]]===
p)return p;a=a[d[e]]}}return a};return function(b,e){return c(b,e,a)}}function Q(a){if(f.isPlainObject(a))return Q(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(b,d){b[a]=d};var b=function(a,d,e){e=Na(e);var c=e[e.length-1];for(var g,k,l=0,n=e.length-1;l<n;l++){g=e[l].match(da);k=e[l].match(X);if(g){e[l]=e[l].replace(da,"");a[e[l]]=[];c=e.slice();
c.splice(0,l+1);g=c.join(".");if(f.isArray(d))for(k=0,n=d.length;k<n;k++)c={},b(c,d[k],g),a[e[l]].push(c);else a[e[l]]=d;return}k&&(e[l]=e[l].replace(X,""),a=a[e[l]](d));if(null===a[e[l]]||a[e[l]]===p)a[e[l]]={};a=a[e[l]]}if(c.match(X))a[c.replace(X,"")](d);else a[c.replace(da,"")]=d};return function(c,d){return b(c,d,a)}}function Oa(a){return J(a.aoData,"_aData")}function qa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function ra(a,b,c){for(var d=-1,e=0,h=a.length;e<
h;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===p&&a.splice(d,1)}function ea(a,b,c,d){var e=a.aoData[b],h,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=I(a,b,d,"display")};if("dom"!==c&&(c&&"auto"!==c||"dom"!==e.src)){var k=e.anCells;if(k)if(d!==p)g(k[d],d);else for(c=0,h=k.length;c<h;c++)g(k[c],c)}else e._aData=Ma(a,e,d,d===p?p:e._aData).data;e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==p)g[d].sType=null;else{c=0;for(h=g.length;c<h;c++)g[c].sType=null;
Pa(a,e)}}function Ma(a,b,c,d){var e=[],h=b.firstChild,g,k=0,l,n=a.aoColumns,m=a._rowReadObject;d=d!==p?d:m?{}:[];var w=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),Q(a)(d,b.getAttribute(c)))}},u=function(a){if(c===p||c===k)g=n[k],l=f.trim(a.innerHTML),g&&g._bAttrSrc?(Q(g.mData._)(d,l),w(g.mData.sort,a),w(g.mData.type,a),w(g.mData.filter,a)):m?(g._setter||(g._setter=Q(g.mData)),g._setter(d,l)):d[k]=l;k++};if(h)for(;h;){var q=h.nodeName.toUpperCase();if("TD"==
q||"TH"==q)u(h),e.push(h);h=h.nextSibling}else for(e=b.anCells,h=0,q=e.length;h<q;h++)u(e[h]);(b=b.firstChild?b:b.nTr)&&(b=b.getAttribute("id"))&&Q(a.rowId)(d,b);return{data:d,cells:e}}function La(a,b,c,d){var e=a.aoData[b],h=e._aData,g=[],k,l;if(null===e.nTr){var n=c||y.createElement("tr");e.nTr=n;e.anCells=g;n._DT_RowIndex=b;Pa(a,e);var m=0;for(k=a.aoColumns.length;m<k;m++){var w=a.aoColumns[m];var p=(l=c?!1:!0)?y.createElement(w.sCellType):d[m];p._DT_CellIndex={row:b,column:m};g.push(p);if(l||
!(c&&!w.mRender&&w.mData===m||f.isPlainObject(w.mData)&&w.mData._===m+".display"))p.innerHTML=I(a,b,m,"display");w.sClass&&(p.className+=" "+w.sClass);w.bVisible&&!c?n.appendChild(p):!w.bVisible&&c&&p.parentNode.removeChild(p);w.fnCreatedCell&&w.fnCreatedCell.call(a.oInstance,p,I(a,b,m),h,b,m)}A(a,"aoRowCreatedCallback",null,[n,h,b,g])}e.nTr.setAttribute("role","row")}function Pa(a,b){var c=b.nTr,d=b._aData;if(c){if(a=a.rowIdFn(d))c.id=a;d.DT_RowClass&&(a=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?
ta(b.__rowc.concat(a)):a,f(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&f(c).attr(d.DT_RowAttr);d.DT_RowData&&f(c).data(d.DT_RowData)}}function pb(a){var b,c,d=a.nTHead,e=a.nTFoot,h=0===f("th, td",d).length,g=a.oClasses,k=a.aoColumns;h&&(c=f("<tr/>").appendTo(d));var l=0;for(b=k.length;l<b;l++){var n=k[l];var m=f(n.nTh).addClass(n.sClass);h&&m.appendTo(c);a.oFeatures.bSort&&(m.addClass(n.sSortingClass),!1!==n.bSortable&&(m.attr("tabindex",a.iTabIndex).attr("aria-controls",
a.sTableId),Qa(a,n.nTh,l)));n.sTitle!=m[0].innerHTML&&m.html(n.sTitle);Ra(a,"header")(a,m,n,g)}h&&fa(a.aoHeader,d);f(d).find(">tr").attr("role","row");f(d).find(">tr>th, >tr>td").addClass(g.sHeaderTH);f(e).find(">tr>th, >tr>td").addClass(g.sFooterTH);if(null!==e)for(a=a.aoFooter[0],l=0,b=a.length;l<b;l++)n=k[l],n.nTf=a[l].cell,n.sClass&&f(n.nTf).addClass(n.sClass)}function ha(a,b,c){var d,e,h=[],g=[],k=a.aoColumns.length;if(b){c===p&&(c=!1);var l=0;for(d=b.length;l<d;l++){h[l]=b[l].slice();h[l].nTr=
b[l].nTr;for(e=k-1;0<=e;e--)a.aoColumns[e].bVisible||c||h[l].splice(e,1);g.push([])}l=0;for(d=h.length;l<d;l++){if(a=h[l].nTr)for(;e=a.firstChild;)a.removeChild(e);e=0;for(b=h[l].length;e<b;e++){var n=k=1;if(g[l][e]===p){a.appendChild(h[l][e].cell);for(g[l][e]=1;h[l+k]!==p&&h[l][e].cell==h[l+k][e].cell;)g[l+k][e]=1,k++;for(;h[l][e+n]!==p&&h[l][e].cell==h[l][e+n].cell;){for(c=0;c<k;c++)g[l+c][e+n]=1;n++}f(h[l][e].cell).attr("rowspan",k).attr("colspan",n)}}}}}function S(a){var b=A(a,"aoPreDrawCallback",
"preDraw",[a]);if(-1!==f.inArray(!1,b))K(a,!1);else{b=[];var c=0,d=a.asStripeClasses,e=d.length,h=a.oLanguage,g=a.iInitDisplayStart,k="ssp"==D(a),l=a.aiDisplay;a.bDrawing=!0;g!==p&&-1!==g&&(a._iDisplayStart=k?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);g=a._iDisplayStart;var n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,K(a,!1);else if(!k)a.iDraw++;else if(!a.bDestroying&&!qb(a))return;if(0!==l.length)for(h=k?a.aoData.length:n,k=k?0:g;k<h;k++){var m=l[k],w=a.aoData[m];
null===w.nTr&&La(a,m);var u=w.nTr;if(0!==e){var q=d[c%e];w._sRowStripe!=q&&(f(u).removeClass(w._sRowStripe).addClass(q),w._sRowStripe=q)}A(a,"aoRowCallback",null,[u,w._aData,c,k,m]);b.push(u);c++}else c=h.sZeroRecords,1==a.iDraw&&"ajax"==D(a)?c=h.sLoadingRecords:h.sEmptyTable&&0===a.fnRecordsTotal()&&(c=h.sEmptyTable),b[0]=f("<tr/>",{"class":e?d[0]:""}).append(f("<td />",{valign:"top",colSpan:W(a),"class":a.oClasses.sRowEmpty}).html(c))[0];A(a,"aoHeaderCallback","header",[f(a.nTHead).children("tr")[0],
Oa(a),g,n,l]);A(a,"aoFooterCallback","footer",[f(a.nTFoot).children("tr")[0],Oa(a),g,n,l]);d=f(a.nTBody);d.children().detach();d.append(f(b));A(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function V(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&rb(a);d?ia(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;S(a);a._drawHold=!1}function sb(a){var b=a.oClasses,c=f(a.nTable);c=f("<div/>").insertBefore(c);var d=a.oFeatures,e=
f("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var h=a.sDom.split(""),g,k,l,n,m,p,u=0;u<h.length;u++){g=null;k=h[u];if("<"==k){l=f("<div/>")[0];n=h[u+1];if("'"==n||'"'==n){m="";for(p=2;h[u+p]!=n;)m+=h[u+p],p++;"H"==m?m=b.sJUIHeader:"F"==m&&(m=b.sJUIFooter);-1!=m.indexOf(".")?(n=m.split("."),l.id=n[0].substr(1,n[0].length-1),l.className=n[1]):"#"==m.charAt(0)?l.id=m.substr(1,
m.length-1):l.className=m;u+=p}e.append(l);e=f(l)}else if(">"==k)e=e.parent();else if("l"==k&&d.bPaginate&&d.bLengthChange)g=tb(a);else if("f"==k&&d.bFilter)g=ub(a);else if("r"==k&&d.bProcessing)g=vb(a);else if("t"==k)g=wb(a);else if("i"==k&&d.bInfo)g=xb(a);else if("p"==k&&d.bPaginate)g=yb(a);else if(0!==q.ext.feature.length)for(l=q.ext.feature,p=0,n=l.length;p<n;p++)if(k==l[p].cFeature){g=l[p].fnInit(a);break}g&&(l=a.aanFeatures,l[k]||(l[k]=[]),l[k].push(g),e.append(g))}c.replaceWith(e);a.nHolding=
null}function fa(a,b){b=f(b).children("tr");var c,d,e;a.splice(0,a.length);var h=0;for(e=b.length;h<e;h++)a.push([]);h=0;for(e=b.length;h<e;h++){var g=b[h];for(c=g.firstChild;c;){if("TD"==c.nodeName.toUpperCase()||"TH"==c.nodeName.toUpperCase()){var k=1*c.getAttribute("colspan");var l=1*c.getAttribute("rowspan");k=k&&0!==k&&1!==k?k:1;l=l&&0!==l&&1!==l?l:1;var n=0;for(d=a[h];d[n];)n++;var m=n;var p=1===k?!0:!1;for(d=0;d<k;d++)for(n=0;n<l;n++)a[h+n][m+d]={cell:c,unique:p},a[h+n].nTr=g}c=c.nextSibling}}}
function ua(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],fa(c,b)));b=0;for(var e=c.length;b<e;b++)for(var h=0,g=c[b].length;h<g;h++)!c[b][h].unique||d[h]&&a.bSortCellsTop||(d[h]=c[b][h].cell);return d}function va(a,b,c){A(a,"aoServerParams","serverParams",[b]);if(b&&f.isArray(b)){var d={},e=/(.*?)\[\]$/;f.each(b,function(a,b){(a=b.name.match(e))?(a=a[0],d[a]||(d[a]=[]),d[a].push(b.value)):d[b.name]=b.value});b=d}var h=a.ajax,g=a.oInstance,k=function(b){A(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(f.isPlainObject(h)&&
h.data){var l=h.data;var n="function"===typeof l?l(b,a):l;b="function"===typeof l&&n?n:f.extend(!0,b,n);delete h.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&O(a,0,c);a.json=b;k(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c,d){d=A(a,null,"xhr",[a,null,a.jqXHR]);-1===f.inArray(!0,d)&&("parsererror"==c?O(a,0,"Invalid JSON response",1):4===b.readyState&&O(a,0,"Ajax error",7));K(a,!1)}};a.oAjaxData=b;A(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(g,
a.sAjaxSource,f.map(b,function(a,b){return{name:b,value:a}}),k,a):a.sAjaxSource||"string"===typeof h?a.jqXHR=f.ajax(f.extend(n,{url:h||a.sAjaxSource})):"function"===typeof h?a.jqXHR=h.call(g,b,k,a):(a.jqXHR=f.ajax(f.extend(n,h)),h.data=l)}function qb(a){return a.bAjaxDataGet?(a.iDraw++,K(a,!0),va(a,zb(a),function(b){Ab(a,b)}),!1):!0}function zb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,h=a.aoPreSearchCols,g=[],k=Y(a);var l=a._iDisplayStart;var n=!1!==d.bPaginate?a._iDisplayLength:
-1;var m=function(a,b){g.push({name:a,value:b})};m("sEcho",a.iDraw);m("iColumns",c);m("sColumns",J(b,"sName").join(","));m("iDisplayStart",l);m("iDisplayLength",n);var p={draw:a.iDraw,columns:[],order:[],start:l,length:n,search:{value:e.sSearch,regex:e.bRegex}};for(l=0;l<c;l++){var u=b[l];var sa=h[l];n="function"==typeof u.mData?"function":u.mData;p.columns.push({data:n,name:u.sName,searchable:u.bSearchable,orderable:u.bSortable,search:{value:sa.sSearch,regex:sa.bRegex}});m("mDataProp_"+l,n);d.bFilter&&
(m("sSearch_"+l,sa.sSearch),m("bRegex_"+l,sa.bRegex),m("bSearchable_"+l,u.bSearchable));d.bSort&&m("bSortable_"+l,u.bSortable)}d.bFilter&&(m("sSearch",e.sSearch),m("bRegex",e.bRegex));d.bSort&&(f.each(k,function(a,b){p.order.push({column:b.col,dir:b.dir});m("iSortCol_"+a,b.col);m("sSortDir_"+a,b.dir)}),m("iSortingCols",k.length));b=q.ext.legacy.ajax;return null===b?a.sAjaxSource?g:p:b?g:p}function Ab(a,b){var c=function(a,c){return b[a]!==p?b[a]:b[c]},d=wa(a,b),e=c("sEcho","draw"),h=c("iTotalRecords",
"recordsTotal");c=c("iTotalDisplayRecords","recordsFiltered");if(e){if(1*e<a.iDraw)return;a.iDraw=1*e}qa(a);a._iRecordsTotal=parseInt(h,10);a._iRecordsDisplay=parseInt(c,10);e=0;for(h=d.length;e<h;e++)R(a,d[e]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;S(a);a._bInitComplete||xa(a,b);a.bAjaxDataGet=!0;K(a,!1)}function wa(a,b){a=f.isPlainObject(a.ajax)&&a.ajax.dataSrc!==p?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===a?b.aaData||b[a]:""!==a?U(a)(b):b}function ub(a){var b=a.oClasses,c=
a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,h=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',k=d.sSearch;k=k.match(/_INPUT_/)?k.replace("_INPUT_",g):k+g;b=f("<div/>",{id:h.f?null:c+"_filter","class":b.sFilter}).append(f("<label/>").append(k));h=function(){var b=this.value?this.value:"";b!=e.sSearch&&(ia(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,S(a))};g=null!==a.searchDelay?a.searchDelay:"ssp"===D(a)?400:0;var l=f("input",
b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Sa(h,g):h).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);f(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{l[0]!==y.activeElement&&l.val(e.sSearch)}catch(w){}});return b[0]}function ia(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,h=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive},g=function(a){return a.bEscapeRegex!==
p?!a.bEscapeRegex:a.bRegex};Ka(a);if("ssp"!=D(a)){Bb(a,b.sSearch,c,g(b),b.bSmart,b.bCaseInsensitive);h(b);for(b=0;b<e.length;b++)Cb(a,e[b].sSearch,b,g(e[b]),e[b].bSmart,e[b].bCaseInsensitive);Db(a)}else h(b);a.bFiltered=!0;A(a,null,"search",[a])}function Db(a){for(var b=q.ext.search,c=a.aiDisplay,d,e,h=0,g=b.length;h<g;h++){for(var k=[],l=0,n=c.length;l<n;l++)e=c[l],d=a.aoData[e],b[h](a,d._aFilterData,e,d._aData,l)&&k.push(e);c.length=0;f.merge(c,k)}}function Cb(a,b,c,d,e,h){if(""!==b){var g=[],k=
a.aiDisplay;d=Ta(b,d,e,h);for(e=0;e<k.length;e++)b=a.aoData[k[e]]._aFilterData[c],d.test(b)&&g.push(k[e]);a.aiDisplay=g}}function Bb(a,b,c,d,e,h){e=Ta(b,d,e,h);var g=a.oPreviousSearch.sSearch,k=a.aiDisplayMaster;h=[];0!==q.ext.search.length&&(c=!0);var f=Eb(a);if(0>=b.length)a.aiDisplay=k.slice();else{if(f||c||d||g.length>b.length||0!==b.indexOf(g)||a.bSorted)a.aiDisplay=k.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)e.test(a.aoData[b[c]]._sFilterRow)&&h.push(b[c]);a.aiDisplay=h}}function Ta(a,b,
c,d){a=b?a:Ua(a);c&&(a="^(?=.*?"+f.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0)){var b=a.match(/^"(.*)"$/);a=b?b[1]:a}return a.replace('"',"")}).join(")(?=.*?")+").*$");return new RegExp(a,d?"i":"")}function Eb(a){var b=a.aoColumns,c,d,e=q.ext.type.search;var h=!1;var g=0;for(c=a.aoData.length;g<c;g++){var k=a.aoData[g];if(!k._aFilterData){var f=[];var n=0;for(d=b.length;n<d;n++){h=b[n];if(h.bSearchable){var m=I(a,g,n,"filter");e[h.sType]&&(m=e[h.sType](m));null===m&&(m="");
"string"!==typeof m&&m.toString&&(m=m.toString())}else m="";m.indexOf&&-1!==m.indexOf("&")&&(ya.innerHTML=m,m=$b?ya.textContent:ya.innerText);m.replace&&(m=m.replace(/[\r\n\u2028]/g,""));f.push(m)}k._aFilterData=f;k._sFilterRow=f.join("  ");h=!0}}return h}function Fb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Gb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function xb(a){var b=a.sTableId,c=a.aanFeatures.i,
d=f("<div/>",{"class":a.oClasses.sInfo,id:c?null:b+"_info"});c||(a.aoDrawCallback.push({fn:Hb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),f(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Hb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),h=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),k=g?c.sInfo:c.sInfoEmpty;g!==h&&(k+=" "+c.sInfoFiltered);k+=c.sInfoPostFix;k=Ib(a,k);c=c.fnInfoCallback;null!==c&&(k=c.call(a.oInstance,
a,d,e,h,g,k));f(b).html(k)}}function Ib(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,h=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,h)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(h/e)))}function ja(a){var b=a.iInitDisplayStart,c=a.aoColumns;var d=a.oFeatures;var e=a.bDeferLoading;if(a.bInitialised){sb(a);
pb(a);ha(a,a.aoHeader);ha(a,a.aoFooter);K(a,!0);d.bAutoWidth&&Ja(a);var h=0;for(d=c.length;h<d;h++){var g=c[h];g.sWidth&&(g.nTh.style.width=B(g.sWidth))}A(a,null,"preInit",[a]);V(a);c=D(a);if("ssp"!=c||e)"ajax"==c?va(a,[],function(c){var d=wa(a,c);for(h=0;h<d.length;h++)R(a,d[h]);a.iInitDisplayStart=b;V(a);K(a,!1);xa(a,c)},a):(K(a,!1),xa(a))}else setTimeout(function(){ja(a)},200)}function xa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&aa(a);A(a,null,"plugin-init",[a,b]);A(a,"aoInitComplete","init",
[a,b])}function Va(a,b){b=parseInt(b,10);a._iDisplayLength=b;Wa(a);A(a,null,"length",[a,b])}function tb(a){var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=f.isArray(d[0]),h=e?d[0]:d;d=e?d[1]:d;e=f("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect});for(var g=0,k=h.length;g<k;g++)e[0][g]=new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],h[g]);var l=f("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(l[0].id=c+"_length");l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",
e[0].outerHTML));f("select",l).val(a._iDisplayLength).on("change.DT",function(b){Va(a,f(this).val());S(a)});f(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&f("select",l).val(d)});return l[0]}function yb(a){var b=a.sPaginationType,c=q.ext.pager[b],d="function"===typeof c,e=function(a){S(a)};b=f("<div/>").addClass(a.oClasses.sPaging+b)[0];var h=a.aanFeatures;d||c.fnInit(a,b,e);h.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,g=a._iDisplayLength,
f=a.fnRecordsDisplay(),m=-1===g;b=m?0:Math.ceil(b/g);g=m?1:Math.ceil(f/g);f=c(b,g);var p;m=0;for(p=h.p.length;m<p;m++)Ra(a,"pageButton")(a,h.p[m],m,f,b,g)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Xa(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,h=a.fnRecordsDisplay();0===h||-1===e?d=0:"number"===typeof b?(d=b*e,d>h&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<h&&(d+=e):"last"==b?d=Math.floor((h-1)/e)*e:O(a,0,"Unknown paging action: "+b,5);b=
a._iDisplayStart!==d;a._iDisplayStart=d;b&&(A(a,null,"page",[a]),c&&S(a));return b}function vb(a){return f("<div/>",{id:a.aanFeatures.r?null:a.sTableId+"_processing","class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function K(a,b){a.oFeatures.bProcessing&&f(a.aanFeatures.r).css("display",b?"block":"none");A(a,null,"processing",[a,b])}function wb(a){var b=f(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,
h=a.oClasses,g=b.children("caption"),k=g.length?g[0]._captionSide:null,l=f(b[0].cloneNode(!1)),n=f(b[0].cloneNode(!1)),m=b.children("tfoot");m.length||(m=null);l=f("<div/>",{"class":h.sScrollWrapper}).append(f("<div/>",{"class":h.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?d?B(d):null:"100%"}).append(f("<div/>",{"class":h.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(l.removeAttr("id").css("margin-left",0).append("top"===k?g:null).append(b.children("thead"))))).append(f("<div/>",
{"class":h.sScrollBody}).css({position:"relative",overflow:"auto",width:d?B(d):null}).append(b));m&&l.append(f("<div/>",{"class":h.sScrollFoot}).css({overflow:"hidden",border:0,width:d?d?B(d):null:"100%"}).append(f("<div/>",{"class":h.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",0).append("bottom"===k?g:null).append(b.children("tfoot")))));b=l.children();var p=b[0];h=b[1];var u=m?b[2]:null;if(d)f(h).on("scroll.DT",function(a){a=this.scrollLeft;p.scrollLeft=a;m&&(u.scrollLeft=a)});
f(h).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=p;a.nScrollBody=h;a.nScrollFoot=u;a.aoDrawCallback.push({fn:na,sName:"scrolling"});return l[0]}function na(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY;b=b.iBarWidth;var h=f(a.nScrollHead),g=h[0].style,k=h.children("div"),l=k[0].style,n=k.children("table");k=a.nScrollBody;var m=f(k),w=k.style,u=f(a.nScrollFoot).children("div"),q=u.children("table"),t=f(a.nTHead),r=f(a.nTable),v=r[0],za=v.style,T=a.nTFoot?f(a.nTFoot):null,A=a.oBrowser,
x=A.bScrollOversize,ac=J(a.aoColumns,"nTh"),Ya=[],y=[],z=[],C=[],G,H=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};var D=k.scrollHeight>k.clientHeight;if(a.scrollBarVis!==D&&a.scrollBarVis!==p)a.scrollBarVis=D,aa(a);else{a.scrollBarVis=D;r.children("thead, tfoot").remove();if(T){var E=T.clone().prependTo(r);var F=T.find("tr");E=E.find("tr")}var I=t.clone().prependTo(r);t=t.find("tr");D=I.find("tr");I.find("th, td").removeAttr("tabindex");
c||(w.width="100%",h[0].style.width="100%");f.each(ua(a,I),function(b,c){G=ba(a,b);c.style.width=a.aoColumns[G].sWidth});T&&N(function(a){a.style.width=""},E);h=r.outerWidth();""===c?(za.width="100%",x&&(r.find("tbody").height()>k.offsetHeight||"scroll"==m.css("overflow-y"))&&(za.width=B(r.outerWidth()-b)),h=r.outerWidth()):""!==d&&(za.width=B(d),h=r.outerWidth());N(H,D);N(function(a){z.push(a.innerHTML);Ya.push(B(f(a).css("width")))},D);N(function(a,b){-1!==f.inArray(a,ac)&&(a.style.width=Ya[b])},
t);f(D).height(0);T&&(N(H,E),N(function(a){C.push(a.innerHTML);y.push(B(f(a).css("width")))},E),N(function(a,b){a.style.width=y[b]},F),f(E).height(0));N(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+z[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=Ya[b]},D);T&&N(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+C[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=y[b]},E);r.outerWidth()<
h?(F=k.scrollHeight>k.offsetHeight||"scroll"==m.css("overflow-y")?h+b:h,x&&(k.scrollHeight>k.offsetHeight||"scroll"==m.css("overflow-y"))&&(za.width=B(F-b)),""!==c&&""===d||O(a,1,"Possible column misalignment",6)):F="100%";w.width=B(F);g.width=B(F);T&&(a.nScrollFoot.style.width=B(F));!e&&x&&(w.height=B(v.offsetHeight+b));c=r.outerWidth();n[0].style.width=B(c);l.width=B(c);d=r.height()>k.clientHeight||"scroll"==m.css("overflow-y");e="padding"+(A.bScrollbarLeft?"Left":"Right");l[e]=d?b+"px":"0px";T&&
(q[0].style.width=B(c),u[0].style.width=B(c),u[0].style[e]=d?b+"px":"0px");r.children("colgroup").insertBefore(r.children("thead"));m.trigger("scroll");!a.bSorted&&!a.bFiltered||a._drawHold||(k.scrollTop=0)}}function N(a,b,c){for(var d=0,e=0,h=b.length,g,k;e<h;){g=b[e].firstChild;for(k=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,k,d):a(g,d),d++),g=g.nextSibling,k=c?k.nextSibling:null;e++}}function Ja(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,h=d.sX,g=d.sXInner,k=c.length,l=oa(a,"bVisible"),
n=f("th",a.nTHead),m=b.getAttribute("width"),p=b.parentNode,u=!1,q,t=a.oBrowser;d=t.bScrollOversize;(q=b.style.width)&&-1!==q.indexOf("%")&&(m=q);for(q=0;q<l.length;q++){var r=c[l[q]];null!==r.sWidth&&(r.sWidth=Jb(r.sWidthOrig,p),u=!0)}if(d||!u&&!h&&!e&&k==W(a)&&k==n.length)for(q=0;q<k;q++)l=ba(a,q),null!==l&&(c[l].sWidth=B(n.eq(q).width()));else{k=f(b).clone().css("visibility","hidden").removeAttr("id");k.find("tbody tr").remove();var v=f("<tr/>").appendTo(k.find("tbody"));k.find("thead, tfoot").remove();
k.append(f(a.nTHead).clone()).append(f(a.nTFoot).clone());k.find("tfoot th, tfoot td").css("width","");n=ua(a,k.find("thead")[0]);for(q=0;q<l.length;q++)r=c[l[q]],n[q].style.width=null!==r.sWidthOrig&&""!==r.sWidthOrig?B(r.sWidthOrig):"",r.sWidthOrig&&h&&f(n[q]).append(f("<div/>").css({width:r.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(q=0;q<l.length;q++)u=l[q],r=c[u],f(Kb(a,u)).clone(!1).append(r.sContentPadding).appendTo(v);f("[name]",k).removeAttr("name");r=f("<div/>").css(h||
e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(k).appendTo(p);h&&g?k.width(g):h?(k.css("width","auto"),k.removeAttr("width"),k.width()<p.clientWidth&&m&&k.width(p.clientWidth)):e?k.width(p.clientWidth):m&&k.width(m);for(q=e=0;q<l.length;q++)p=f(n[q]),g=p.outerWidth()-p.width(),p=t.bBounding?Math.ceil(n[q].getBoundingClientRect().width):p.outerWidth(),e+=p,c[l[q]].sWidth=B(p-g);b.style.width=B(e);r.remove()}m&&(b.style.width=B(m));!m&&!h||a._reszEvt||(b=function(){f(z).on("resize.DT-"+
a.sInstance,Sa(function(){aa(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0)}function Jb(a,b){if(!a)return 0;a=f("<div/>").css("width",B(a)).appendTo(b||y.body);b=a[0].offsetWidth;a.remove();return b}function Kb(a,b){var c=Lb(a,b);if(0>c)return null;var d=a.aoData[c];return d.nTr?d.anCells[b]:f("<td/>").html(I(a,c,b,"display"))[0]}function Lb(a,b){for(var c,d=-1,e=-1,h=0,g=a.aoData.length;h<g;h++)c=I(a,h,b,"display")+"",c=c.replace(bc,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=h);return e}
function B(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function Y(a){var b=[],c=a.aoColumns;var d=a.aaSortingFixed;var e=f.isPlainObject(d);var h=[];var g=function(a){a.length&&!f.isArray(a[0])?h.push(a):f.merge(h,a)};f.isArray(d)&&g(d);e&&d.pre&&g(d.pre);g(a.aaSorting);e&&d.post&&g(d.post);for(a=0;a<h.length;a++){var k=h[a][0];g=c[k].aDataSort;d=0;for(e=g.length;d<e;d++){var l=g[d];var n=c[l].sType||"string";h[a]._idx===p&&(h[a]._idx=f.inArray(h[a][1],c[l].asSorting));
b.push({src:k,col:l,dir:h[a][1],index:h[a]._idx,type:n,formatter:q.ext.type.order[n+"-pre"]})}}return b}function rb(a){var b,c=[],d=q.ext.type.order,e=a.aoData,h=0,g=a.aiDisplayMaster;Ka(a);var k=Y(a);var f=0;for(b=k.length;f<b;f++){var n=k[f];n.formatter&&h++;Mb(a,n.col)}if("ssp"!=D(a)&&0!==k.length){f=0;for(b=g.length;f<b;f++)c[g[f]]=f;h===k.length?g.sort(function(a,b){var d,h=k.length,g=e[a]._aSortData,f=e[b]._aSortData;for(d=0;d<h;d++){var l=k[d];var m=g[l.col];var n=f[l.col];m=m<n?-1:m>n?1:0;
if(0!==m)return"asc"===l.dir?m:-m}m=c[a];n=c[b];return m<n?-1:m>n?1:0}):g.sort(function(a,b){var h,g=k.length,f=e[a]._aSortData,l=e[b]._aSortData;for(h=0;h<g;h++){var m=k[h];var n=f[m.col];var p=l[m.col];m=d[m.type+"-"+m.dir]||d["string-"+m.dir];n=m(n,p);if(0!==n)return n}n=c[a];p=c[b];return n<p?-1:n>p?1:0})}a.bSorted=!0}function Nb(a){var b=a.aoColumns,c=Y(a);a=a.oLanguage.oAria;for(var d=0,e=b.length;d<e;d++){var h=b[d];var g=h.asSorting;var k=h.sTitle.replace(/<.*?>/g,"");var f=h.nTh;f.removeAttribute("aria-sort");
h.bSortable&&(0<c.length&&c[0].col==d?(f.setAttribute("aria-sort","asc"==c[0].dir?"ascending":"descending"),h=g[c[0].index+1]||g[0]):h=g[0],k+="asc"===h?a.sSortAscending:a.sSortDescending);f.setAttribute("aria-label",k)}}function Za(a,b,c,d){var e=a.aaSorting,h=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===p&&(c=f.inArray(a[1],h));return c+1<h.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=f.inArray(b,J(e,"0")),-1!==c?(b=g(e[c],!0),null===
b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=h[b],e[c]._idx=b)):(e.push([b,h[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=h[b],e[0]._idx=b):(e.length=0,e.push([b,h[0]]),e[0]._idx=0);V(a);"function"==typeof d&&d(a)}function Qa(a,b,c,d){var e=a.aoColumns[c];$a(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(K(a,!0),setTimeout(function(){Za(a,c,b.shiftKey,d);"ssp"!==D(a)&&K(a,!1)},0)):Za(a,c,b.shiftKey,d))})}function Aa(a){var b=a.aLastSort,
c=a.oClasses.sSortColumn,d=Y(a),e=a.oFeatures,h;if(e.bSort&&e.bSortClasses){e=0;for(h=b.length;e<h;e++){var g=b[e].src;f(J(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3))}e=0;for(h=d.length;e<h;e++)g=d[e].src,f(J(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Mb(a,b){var c=a.aoColumns[b],d=q.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ca(a,b)));for(var h,g=q.ext.type.order[c.sType+"-pre"],k=0,f=a.aoData.length;k<f;k++)if(c=a.aoData[k],c._aSortData||(c._aSortData=
[]),!c._aSortData[b]||d)h=d?e[k]:I(a,k,b,"sort"),c._aSortData[b]=g?g(h):h}function Ba(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:f.extend(!0,[],a.aaSorting),search:Fb(a.oPreviousSearch),columns:f.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Fb(a.aoPreSearchCols[d])}})};A(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Ob(a,b,c){var d,
e,h=a.aoColumns;b=function(b){if(b&&b.time){var g=A(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===f.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g||b.columns&&h.length!==b.columns.length))){a.oLoadedState=f.extend(!0,{},b);b.start!==p&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==p&&(a._iDisplayLength=b.length);b.order!==p&&(a.aaSorting=[],f.each(b.order,function(b,c){a.aaSorting.push(c[0]>=h.length?[0,c[1]]:c)}));b.search!==p&&f.extend(a.oPreviousSearch,
Gb(b.search));if(b.columns)for(d=0,e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==p&&(h[d].bVisible=g.visible),g.search!==p&&f.extend(a.aoPreSearchCols[d],Gb(g.search));A(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==p&&b(g)}else c()}function Ca(a){var b=q.settings;a=f.inArray(a,J(b,"nTable"));return-1!==a?b[a]:null}function O(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+
d);if(b)z.console&&console.log&&console.log(c);else if(b=q.ext,b=b.sErrMode||b.errMode,a&&A(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function M(a,b,c,d){f.isArray(c)?f.each(c,function(c,d){f.isArray(d)?M(a,b,d[0],d[1]):M(a,b,d)}):(d===p&&(d=c),b[c]!==p&&(a[d]=b[c]))}function ab(a,b,c){var d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];f.isPlainObject(e)?(f.isPlainObject(a[d])||(a[d]={}),f.extend(!0,a[d],e)):c&&"data"!==d&&"aaData"!==
d&&f.isArray(e)?a[d]=e.slice():a[d]=e}return a}function $a(a,b,c){f(a).on("click.DT",b,function(b){f(a).blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function E(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function A(a,b,c,d){var e=[];b&&(e=f.map(a[b].slice().reverse(),function(b,c){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=f.Event(c+".dt"),f(a.nTable).trigger(b,d),e.push(b.result));return e}function Wa(a){var b=a._iDisplayStart,
c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Ra(a,b){a=a.renderer;var c=q.ext.renderer[b];return f.isPlainObject(a)&&a[b]?c[a[b]]||c._:"string"===typeof a?c[a]||c._:c._}function D(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ka(a,b){var c=Pb.numbers_length,d=Math.floor(c/2);b<=c?a=Z(0,b):a<=d?(a=Z(0,c-2),a.push("ellipsis"),a.push(b-1)):(a>=b-1-d?a=Z(b-(c-2),b):(a=Z(a-d+2,a+d-1),a.push("ellipsis"),
a.push(b-1)),a.splice(0,0,"ellipsis"),a.splice(0,0,0));a.DT_el="span";return a}function Ha(a){f.each({num:function(b){return Da(b,a)},"num-fmt":function(b){return Da(b,a,bb)},"html-num":function(b){return Da(b,a,Ea)},"html-num-fmt":function(b){return Da(b,a,Ea,bb)}},function(b,c){C.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(C.type.search[b+a]=C.type.search.html)})}function Qb(a){return function(){var b=[Ca(this[q.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return q.ext.internal[a].apply(this,
b)}}var q=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new v(Ca(this[C.iApiIndex])):new v(this)};this.fnAddData=function(a,b){var c=this.api(!0);a=f.isArray(a)&&(f.isArray(a[0])||f.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===p||b)&&c.draw();return a.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===p||a?b.draw(!1):
(""!==d.sX||""!==d.sY)&&na(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===p||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0);a=d.rows(a);var e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===p||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,f){e=this.api(!0);null===b||b===p?
e.search(a,c,d,f):e.column(b).search(a,c,d,f);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==p){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==p||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==p?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),
[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){a=this.api(!0).page(a);(b===p||b)&&a.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===p||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Ca(this[C.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=
function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===p||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===p||e)&&h.columns.adjust();(d===p||d)&&h.draw();return 0};this.fnVersionCheck=C.fnVersionCheck;var b=this,c=a===p,d=this.length;c&&(a={});this.oApi=this.internal=C.internal;for(var e in q.ext.internal)e&&(this[e]=Qb(e));this.each(function(){var e={},g=1<d?ab(e,a,!0):a,k=0,l;e=this.getAttribute("id");var n=!1,m=q.defaults,w=f(this);if("table"!=
this.nodeName.toLowerCase())O(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{jb(m);kb(m.column);L(m,m,!0);L(m.column,m.column,!0);L(m,f.extend(g,w.data()),!0);var u=q.settings;k=0;for(l=u.length;k<l;k++){var t=u[k];if(t.nTable==this||t.nTHead&&t.nTHead.parentNode==this||t.nTFoot&&t.nTFoot.parentNode==this){var v=g.bRetrieve!==p?g.bRetrieve:m.bRetrieve;if(c||v)return t.oInstance;if(g.bDestroy!==p?g.bDestroy:m.bDestroy){t.oInstance.fnDestroy();break}else{O(t,0,"Cannot reinitialise DataTable",
3);return}}if(t.sTableId==this.id){u.splice(k,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+q.ext._unique++;var r=f.extend(!0,{},q.models.oSettings,{sDestroyWidth:w[0].style.width,sInstance:e,sTableId:e});r.nTable=this;r.oApi=b.internal;r.oInit=g;u.push(r);r.oInstance=1===b.length?b:w.dataTable();jb(g);Ga(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=f.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=ab(f.extend(!0,{},m),g);M(r.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
M(r,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);M(r.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],
["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);M(r.oLanguage,g,"fnInfoCallback");E(r,"aoDrawCallback",g.fnDrawCallback,"user");E(r,"aoServerParams",g.fnServerParams,"user");E(r,"aoStateSaveParams",g.fnStateSaveParams,"user");E(r,"aoStateLoadParams",g.fnStateLoadParams,"user");E(r,"aoStateLoaded",g.fnStateLoaded,"user");E(r,"aoRowCallback",g.fnRowCallback,"user");E(r,"aoRowCreatedCallback",g.fnCreatedRow,"user");E(r,"aoHeaderCallback",g.fnHeaderCallback,"user");E(r,"aoFooterCallback",g.fnFooterCallback,
"user");E(r,"aoInitComplete",g.fnInitComplete,"user");E(r,"aoPreDrawCallback",g.fnPreDrawCallback,"user");r.rowIdFn=U(g.rowId);lb(r);var x=r.oClasses;f.extend(x,q.ext.classes,g.oClasses);w.addClass(x.sTable);r.iInitDisplayStart===p&&(r.iInitDisplayStart=g.iDisplayStart,r._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(r.bDeferLoading=!0,e=f.isArray(g.iDeferLoading),r._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,r._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var y=r.oLanguage;
f.extend(!0,y,g.oLanguage);y.sUrl&&(f.ajax({dataType:"json",url:y.sUrl,success:function(a){Ga(a);L(m.oLanguage,a);f.extend(!0,y,a);ja(r)},error:function(){ja(r)}}),n=!0);null===g.asStripeClasses&&(r.asStripeClasses=[x.sStripeOdd,x.sStripeEven]);e=r.asStripeClasses;var z=w.children("tbody").find("tr").eq(0);-1!==f.inArray(!0,f.map(e,function(a,b){return z.hasClass(a)}))&&(f("tbody tr",this).removeClass(e.join(" ")),r.asDestroyStripes=e.slice());e=[];u=this.getElementsByTagName("thead");0!==u.length&&
(fa(r.aoHeader,u[0]),e=ua(r));if(null===g.aoColumns)for(u=[],k=0,l=e.length;k<l;k++)u.push(null);else u=g.aoColumns;k=0;for(l=u.length;k<l;k++)Ia(r,e?e[k]:null);nb(r,g.aoColumnDefs,u,function(a,b){ma(r,a,b)});if(z.length){var B=function(a,b){return null!==a.getAttribute("data-"+b)?b:null};f(z[0]).children("th, td").each(function(a,b){var c=r.aoColumns[a];if(c.mData===a){var d=B(b,"sort")||B(b,"order");b=B(b,"filter")||B(b,"search");if(null!==d||null!==b)c.mData={_:a+".display",sort:null!==d?a+".@data-"+
d:p,type:null!==d?a+".@data-"+d:p,filter:null!==b?a+".@data-"+b:p},ma(r,a)}})}var C=r.oFeatures;e=function(){if(g.aaSorting===p){var a=r.aaSorting;k=0;for(l=a.length;k<l;k++)a[k][1]=r.aoColumns[k].asSorting[0]}Aa(r);C.bSort&&E(r,"aoDrawCallback",function(){if(r.bSorted){var a=Y(r),b={};f.each(a,function(a,c){b[c.src]=c.dir});A(r,null,"order",[r,a,b]);Nb(r)}});E(r,"aoDrawCallback",function(){(r.bSorted||"ssp"===D(r)||C.bDeferRender)&&Aa(r)},"sc");a=w.children("caption").each(function(){this._captionSide=
f(this).css("caption-side")});var b=w.children("thead");0===b.length&&(b=f("<thead/>").appendTo(w));r.nTHead=b[0];b=w.children("tbody");0===b.length&&(b=f("<tbody/>").appendTo(w));r.nTBody=b[0];b=w.children("tfoot");0===b.length&&0<a.length&&(""!==r.oScroll.sX||""!==r.oScroll.sY)&&(b=f("<tfoot/>").appendTo(w));0===b.length||0===b.children().length?w.addClass(x.sNoFooter):0<b.length&&(r.nTFoot=b[0],fa(r.aoFooter,r.nTFoot));if(g.aaData)for(k=0;k<g.aaData.length;k++)R(r,g.aaData[k]);else(r.bDeferLoading||
"dom"==D(r))&&pa(r,f(r.nTBody).children("tr"));r.aiDisplay=r.aiDisplayMaster.slice();r.bInitialised=!0;!1===n&&ja(r)};g.bStateSave?(C.bStateSave=!0,E(r,"aoDrawCallback",Ba,"state_save"),Ob(r,g,e)):e()}});b=null;return this},C,t,x,cb={},Rb=/[\r\n\u2028]/g,Ea=/<.*?>/g,cc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,dc=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,bb=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,P=function(a){return a&&!0!==a&&"-"!==a?!1:
!0},Sb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Tb=function(a,b){cb[b]||(cb[b]=new RegExp(Ua(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(cb[b],"."):a},db=function(a,b,c){var d="string"===typeof a;if(P(a))return!0;b&&d&&(a=Tb(a,b));c&&d&&(a=a.replace(bb,""));return!isNaN(parseFloat(a))&&isFinite(a)},Ub=function(a,b,c){return P(a)?!0:P(a)||"string"===typeof a?db(a.replace(Ea,""),b,c)?!0:null:null},J=function(a,b,c){var d=[],e=0,h=a.length;if(c!==
p)for(;e<h;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<h;e++)a[e]&&d.push(a[e][b]);return d},la=function(a,b,c,d){var e=[],h=0,g=b.length;if(d!==p)for(;h<g;h++)a[b[h]][c]&&e.push(a[b[h]][c][d]);else for(;h<g;h++)e.push(a[b[h]][c]);return e},Z=function(a,b){var c=[];if(b===p){b=0;var d=a}else d=b,b=a;for(a=b;a<d;a++)c.push(a);return c},Vb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},ta=function(a){a:{if(!(2>a.length)){var b=a.slice().sort();for(var c=b[0],d=1,
e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();b=[];e=a.length;var h,g=0;d=0;a:for(;d<e;d++){c=a[d];for(h=0;h<g;h++)if(b[h]===c)continue a;b.push(c);g++}return b};q.util={throttle:function(a,b){var c=b!==p?b:200,d,e;return function(){var b=this,g=+new Date,f=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=p;a.apply(b,f)},c)):(d=g,a.apply(b,f))}},escapeRegex:function(a){return a.replace(dc,"\\$1")}};var F=function(a,b,c){a[b]!==p&&(a[c]=a[b])},da=/\[.*?\]$/,
X=/\(\)$/,Ua=q.util.escapeRegex,ya=f("<div>")[0],$b=ya.textContent!==p,bc=/<.*?>/g,Sa=q.util.throttle,Wb=[],G=Array.prototype,ec=function(a){var b,c=q.settings,d=f.map(c,function(a,b){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase()){var e=f.inArray(a,d);return-1!==e?[c[e]]:null}if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?b=f(a):a instanceof f&&(b=a)}else return[];if(b)return b.map(function(a){e=f.inArray(this,
d);return-1!==e?c[e]:null}).toArray()};var v=function(a,b){if(!(this instanceof v))return new v(a,b);var c=[],d=function(a){(a=ec(a))&&c.push.apply(c,a)};if(f.isArray(a))for(var e=0,h=a.length;e<h;e++)d(a[e]);else d(a);this.context=ta(c);b&&f.merge(this,b);this.selector={rows:null,cols:null,opts:null};v.extend(this,this,Wb)};q.Api=v;f.extend(v.prototype,{any:function(){return 0!==this.count()},concat:G.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=
this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new v(b[a],this[a]):null},filter:function(a){var b=[];if(G.filter)b=G.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new v(this.context,b)},flatten:function(){var a=[];return new v(this.context,a.concat.apply(a,this.toArray()))},join:G.join,indexOf:G.indexOf||function(a,b){b=b||0;for(var c=this.length;b<c;b++)if(this[b]===
a)return b;return-1},iterator:function(a,b,c,d){var e=[],h,g,f=this.context,l,n=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);var m=0;for(h=f.length;m<h;m++){var q=new v(f[m]);if("table"===b){var u=c.call(q,f[m],m);u!==p&&e.push(u)}else if("columns"===b||"rows"===b)u=c.call(q,f[m],this[m],m),u!==p&&e.push(u);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){var t=this[m];"column-rows"===b&&(l=Fa(f[m],n.opts));var x=0;for(g=t.length;x<g;x++)u=t[x],u="cell"===b?c.call(q,f[m],u.row,
u.column,m,x):c.call(q,f[m],u,m,x,l),u!==p&&e.push(u)}}return e.length||d?(a=new v(f,a?e.concat.apply([],e):e),b=a.selector,b.rows=n.rows,b.cols=n.cols,b.opts=n.opts,a):this},lastIndexOf:G.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(G.map)b=G.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new v(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},
pop:G.pop,push:G.push,reduce:G.reduce||function(a,b){return mb(this,a,b,0,this.length,1)},reduceRight:G.reduceRight||function(a,b){return mb(this,a,b,this.length-1,-1,-1)},reverse:G.reverse,selector:null,shift:G.shift,slice:function(){return new v(this.context,this)},sort:G.sort,splice:G.splice,toArray:function(){return G.slice.call(this)},to$:function(){return f(this)},toJQuery:function(){return f(this)},unique:function(){return new v(this.context,ta(this))},unshift:G.unshift});v.extend=function(a,
b,c){if(c.length&&b&&(b instanceof v||b.__dt_wrapper)){var d,e=function(a,b,c){return function(){var d=b.apply(a,arguments);v.extend(d,d,c.methodExt);return d}};var h=0;for(d=c.length;h<d;h++){var g=c[h];b[g.name]="function"===g.type?e(a,g.val,g):"object"===g.type?{}:g.val;b[g.name].__dt_wrapper=!0;v.extend(a,b[g.name],g.propExt)}}};v.register=t=function(a,b){if(f.isArray(a))for(var c=0,d=a.length;c<d;c++)v.register(a[c],b);else{d=a.split(".");var e=Wb,h;a=0;for(c=d.length;a<c;a++){var g=(h=-1!==
d[a].indexOf("()"))?d[a].replace("()",""):d[a];a:{var k=0;for(var l=e.length;k<l;k++)if(e[k].name===g){k=e[k];break a}k=null}k||(k={name:g,val:{},methodExt:[],propExt:[],type:"object"},e.push(k));a===c-1?(k.val=b,k.type="function"===typeof b?"function":f.isPlainObject(b)?"object":"other"):e=h?k.methodExt:k.propExt}}};v.registerPlural=x=function(a,b,c){v.register(a,c);v.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof v?a.length?f.isArray(a[0])?new v(a.context,
a[0]):a[0]:p:a})};var fc=function(a,b){if("number"===typeof a)return[b[a]];var c=f.map(b,function(a,b){return a.nTable});return f(c).filter(a).map(function(a){a=f.inArray(this,c);return b[a]}).toArray()};t("tables()",function(a){return a?new v(fc(a,this.context)):this});t("table()",function(a){a=this.tables(a);var b=a.context;return b.length?new v(b[0]):a});x("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});x("tables().body()","table().body()",
function(){return this.iterator("table",function(a){return a.nTBody},1)});x("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});x("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});x("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});t("draw()",function(a){return this.iterator("table",function(b){"page"===
a?S(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),V(b,!1===a))})});t("page()",function(a){return a===p?this.page.info().page:this.iterator("table",function(b){Xa(b,a)})});t("page.info()",function(a){if(0===this.context.length)return p;a=this.context[0];var b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,
serverSide:"ssp"===D(a)}});t("page.len()",function(a){return a===p?0!==this.context.length?this.context[0]._iDisplayLength:p:this.iterator("table",function(b){Va(b,a)})});var Xb=function(a,b,c){if(c){var d=new v(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==D(a))V(a,b);else{K(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();va(a,[],function(c){qa(a);c=wa(a,c);for(var d=0,e=c.length;d<e;d++)R(a,c[d]);V(a,b);K(a,!1)})}};t("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});
t("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});t("ajax.reload()",function(a,b){return this.iterator("table",function(c){Xb(c,!1===b,a)})});t("ajax.url()",function(a){var b=this.context;if(a===p){if(0===b.length)return p;b=b[0];return b.ajax?f.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){f.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});t("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Xb(c,
!1===b,a)})});var eb=function(a,b,c,d,e){var h=[],g,k,l;var n=typeof b;b&&"string"!==n&&"function"!==n&&b.length!==p||(b=[b]);n=0;for(k=b.length;n<k;n++){var m=b[n]&&b[n].split&&!b[n].match(/[\[\(:]/)?b[n].split(","):[b[n]];var q=0;for(l=m.length;q<l;q++)(g=c("string"===typeof m[q]?f.trim(m[q]):m[q]))&&g.length&&(h=h.concat(g))}a=C.selector[a];if(a.length)for(n=0,k=a.length;n<k;n++)h=a[n](d,e,h);return ta(h)},fb=function(a){a||(a={});a.filter&&a.search===p&&(a.search=a.filter);return f.extend({search:"none",
order:"current",page:"all"},a)},gb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Fa=function(a,b){var c=[],d=a.aiDisplay;var e=a.aiDisplayMaster;var h=b.search;var g=b.order;b=b.page;if("ssp"==D(a))return"removed"===h?[]:Z(0,e.length);if("current"==b)for(g=a._iDisplayStart,a=a.fnDisplayEnd();g<a;g++)c.push(d[g]);else if("current"==g||"applied"==g)if("none"==h)c=e.slice();else if("applied"==h)c=
d.slice();else{if("removed"==h){var k={};g=0;for(a=d.length;g<a;g++)k[d[g]]=null;c=f.map(e,function(a){return k.hasOwnProperty(a)?null:a})}}else if("index"==g||"original"==g)for(g=0,a=a.aoData.length;g<a;g++)"none"==h?c.push(g):(e=f.inArray(g,d),(-1===e&&"removed"==h||0<=e&&"applied"==h)&&c.push(g));return c},gc=function(a,b,c){var d;return eb("row",b,function(b){var e=Sb(b),g=a.aoData;if(null!==e&&!c)return[e];d||(d=Fa(a,c));if(null!==e&&-1!==f.inArray(e,d))return[e];if(null===b||b===p||""===b)return d;
if("function"===typeof b)return f.map(d,function(a){var c=g[a];return b(a,c._aData,c.nTr)?a:null});if(b.nodeName){e=b._DT_RowIndex;var k=b._DT_CellIndex;if(e!==p)return g[e]&&g[e].nTr===b?[e]:[];if(k)return g[k.row]&&g[k.row].nTr===b.parentNode?[k.row]:[];e=f(b).closest("*[data-dt-row]");return e.length?[e.data("dt-row")]:[]}if("string"===typeof b&&"#"===b.charAt(0)&&(e=a.aIds[b.replace(/^#/,"")],e!==p))return[e.idx];e=Vb(la(a.aoData,d,"nTr"));return f(e).filter(b).map(function(){return this._DT_RowIndex}).toArray()},
a,c)};t("rows()",function(a,b){a===p?a="":f.isPlainObject(a)&&(b=a,a="");b=fb(b);var c=this.iterator("table",function(c){return gc(c,a,b)},1);c.selector.rows=a;c.selector.opts=b;return c});t("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||p},1)});t("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return la(a.aoData,b,"_aData")},1)});x("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){b=b.aoData[c];
return"search"===a?b._aFilterData:b._aSortData},1)});x("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ea(b,c,a)})});x("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});x("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var h=0,g=this[d].length;h<g;h++){var f=c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);b.push((!0===a?"#":"")+f)}return new v(c,b)});x("rows().remove()",
"row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,h=e[c],g,f;e.splice(c,1);var l=0;for(g=e.length;l<g;l++){var n=e[l];var m=n.anCells;null!==n.nTr&&(n.nTr._DT_RowIndex=l);if(null!==m)for(n=0,f=m.length;n<f;n++)m[n]._DT_CellIndex.row=l}ra(b.aiDisplayMaster,c);ra(b.aiDisplay,c);ra(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Wa(b);c=b.rowIdFn(h._aData);c!==p&&delete b.aIds[c]});this.iterator("table",function(a){for(var b=0,d=a.aoData.length;b<d;b++)a.aoData[b].idx=
b});return this});t("rows.add()",function(a){var b=this.iterator("table",function(b){var c,d=[];var g=0;for(c=a.length;g<c;g++){var f=a[g];f.nodeName&&"TR"===f.nodeName.toUpperCase()?d.push(pa(b,f)[0]):d.push(R(b,f))}return d},1),c=this.rows(-1);c.pop();f.merge(c,b);return c});t("row()",function(a,b){return gb(this.rows(a,b))});t("row().data()",function(a){var b=this.context;if(a===p)return b.length&&this.length?b[0].aoData[this[0]]._aData:p;var c=b[0].aoData[this[0]];c._aData=a;f.isArray(a)&&c.nTr.id&&
Q(b[0].rowId)(a,c.nTr.id);ea(b[0],this[0],"data");return this});t("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});t("row.add()",function(a){a instanceof f&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?pa(b,a)[0]:R(b,a)});return this.row(b[0])});var hc=function(a,b,c,d){var e=[],h=function(b,c){if(f.isArray(b)||b instanceof f)for(var d=0,g=b.length;d<g;d++)h(b[d],c);else b.nodeName&&
"tr"===b.nodeName.toLowerCase()?e.push(b):(d=f("<tr><td/></tr>").addClass(c),f("td",d).addClass(c).html(b)[0].colSpan=W(a),e.push(d[0]))};h(c,d);b._details&&b._details.detach();b._details=f(e);b._detailsShow&&b._details.insertAfter(b.nTr)},hb=function(a,b){var c=a.context;c.length&&(a=c[0].aoData[b!==p?b:a[0]])&&a._details&&(a._details.remove(),a._detailsShow=p,a._details=p)},Yb=function(a,b){var c=a.context;c.length&&a.length&&(a=c[0].aoData[a[0]],a._details&&((a._detailsShow=b)?a._details.insertAfter(a.nTr):
a._details.detach(),ic(c[0])))},ic=function(a){var b=new v(a),c=a.aoData;b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<J(c,"_details").length&&(b.on("draw.dt.DT_details",function(d,e){a===e&&b.rows({page:"current"}).eq(0).each(function(a){a=c[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),b.on("column-visibility.dt.DT_details",function(b,e,f,g){if(a===e)for(e=W(e),f=0,g=c.length;f<g;f++)b=c[f],b._details&&b._details.children("td[colspan]").attr("colspan",
e)}),b.on("destroy.dt.DT_details",function(d,e){if(a===e)for(d=0,e=c.length;d<e;d++)c[d]._details&&hb(b,d)}))};t("row().child()",function(a,b){var c=this.context;if(a===p)return c.length&&this.length?c[0].aoData[this[0]]._details:p;!0===a?this.child.show():!1===a?hb(this):c.length&&this.length&&hc(c[0],c[0].aoData[this[0]],a,b);return this});t(["row().child.show()","row().child().show()"],function(a){Yb(this,!0);return this});t(["row().child.hide()","row().child().hide()"],function(){Yb(this,!1);
return this});t(["row().child.remove()","row().child().remove()"],function(){hb(this);return this});t("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var jc=/^([^:]+):(name|visIdx|visible)$/,Zb=function(a,b,c,d,e){c=[];d=0;for(var f=e.length;d<f;d++)c.push(I(a,e[d],b));return c},kc=function(a,b,c){var d=a.aoColumns,e=J(d,"sName"),h=J(d,"nTh");return eb("column",b,function(b){var g=Sb(b);if(""===b)return Z(d.length);if(null!==
g)return[0<=g?g:d.length+g];if("function"===typeof b){var l=Fa(a,c);return f.map(d,function(c,d){return b(d,Zb(a,d,0,0,l),h[d])?d:null})}var n="string"===typeof b?b.match(jc):"";if(n)switch(n[2]){case "visIdx":case "visible":g=parseInt(n[1],10);if(0>g){var m=f.map(d,function(a,b){return a.bVisible?b:null});return[m[m.length+g]]}return[ba(a,g)];case "name":return f.map(e,function(a,b){return a===n[1]?b:null});default:return[]}if(b.nodeName&&b._DT_CellIndex)return[b._DT_CellIndex.column];g=f(h).filter(b).map(function(){return f.inArray(this,
h)}).toArray();if(g.length||!b.nodeName)return g;g=f(b).closest("*[data-dt-column]");return g.length?[g.data("dt-column")]:[]},a,c)};t("columns()",function(a,b){a===p?a="":f.isPlainObject(a)&&(b=a,a="");b=fb(b);var c=this.iterator("table",function(c){return kc(c,a,b)},1);c.selector.cols=a;c.selector.opts=b;return c});x("columns().header()","column().header()",function(a,b){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});x("columns().footer()","column().footer()",function(a,
b){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});x("columns().data()","column().data()",function(){return this.iterator("column-rows",Zb,1)});x("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});x("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return la(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});x("columns().nodes()",
"column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return la(a.aoData,e,"anCells",b)},1)});x("columns().visible()","column().visible()",function(a,b){var c=this,d=this.iterator("column",function(b,c){if(a===p)return b.aoColumns[c].bVisible;var d=b.aoColumns,e=d[c],h=b.aoData,n;if(a!==p&&e.bVisible!==a){if(a){var m=f.inArray(!0,J(d,"bVisible"),c+1);d=0;for(n=h.length;d<n;d++){var q=h[d].nTr;b=h[d].anCells;q&&q.insertBefore(b[c],b[m]||null)}}else f(J(b.aoData,"anCells",
c)).detach();e.bVisible=a}});a!==p&&this.iterator("table",function(d){ha(d,d.aoHeader);ha(d,d.aoFooter);d.aiDisplay.length||f(d.nTBody).find("td[colspan]").attr("colspan",W(d));Ba(d);c.iterator("column",function(c,d){A(c,null,"column-visibility",[c,d,a,b])});(b===p||b)&&c.columns.adjust()});return d});x("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ca(b,c):c},1)});t("columns.adjust()",function(){return this.iterator("table",function(a){aa(a)},
1)});t("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return ba(c,b);if("fromData"===a||"toVisible"===a)return ca(c,b)}});t("column()",function(a,b){return gb(this.columns(a,b))});var lc=function(a,b,c){var d=a.aoData,e=Fa(a,c),h=Vb(la(d,e,"anCells")),g=f([].concat.apply([],h)),k,l=a.aoColumns.length,n,m,q,u,t,v;return eb("cell",b,function(b){var c="function"===typeof b;if(null===b||b===p||c){n=[];m=0;for(q=e.length;m<q;m++)for(k=
e[m],u=0;u<l;u++)t={row:k,column:u},c?(v=d[k],b(t,I(a,k,u),v.anCells?v.anCells[u]:null)&&n.push(t)):n.push(t);return n}if(f.isPlainObject(b))return b.column!==p&&b.row!==p&&-1!==f.inArray(b.row,e)?[b]:[];c=g.filter(b).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!b.nodeName)return c;v=f(b).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},a,c)};t("cells()",function(a,b,c){f.isPlainObject(a)&&
(a.row===p?(c=a,a=null):(c=b,b=null));f.isPlainObject(b)&&(c=b,b=null);if(null===b||b===p)return this.iterator("table",function(b){return lc(b,a,fb(c))});var d=c?{page:c.page,order:c.order,search:c.search}:{},e=this.columns(b,d),h=this.rows(a,d),g,k,l,n;d=this.iterator("table",function(a,b){a=[];g=0;for(k=h[b].length;g<k;g++)for(l=0,n=e[b].length;l<n;l++)a.push({row:h[b][g],column:e[b][l]});return a},1);d=c&&c.selected?this.cells(d,c):d;f.extend(d.selector,{cols:b,rows:a,opts:c});return d});x("cells().nodes()",
"cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:p},1)});t("cells().data()",function(){return this.iterator("cell",function(a,b,c){return I(a,b,c)},1)});x("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});x("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return I(b,c,d,a)},
1)});x("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ca(a,c)}},1)});x("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){ea(b,c,a,d)})});t("cell()",function(a,b,c){return gb(this.cells(a,b,c))});t("cell().data()",function(a){var b=this.context,c=this[0];if(a===p)return b.length&&c.length?I(b[0],c[0].row,c[0].column):p;ob(b[0],c[0].row,c[0].column,a);ea(b[0],c[0].row,
"data",c[0].column);return this});t("order()",function(a,b){var c=this.context;if(a===p)return 0!==c.length?c[0].aaSorting:p;"number"===typeof a?a=[[a,b]]:a.length&&!f.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});t("order.listener()",function(a,b,c){return this.iterator("table",function(d){Qa(d,a,b,c)})});t("order.fixed()",function(a){if(!a){var b=this.context;b=b.length?b[0].aaSortingFixed:p;return f.isArray(b)?{pre:b}:
b}return this.iterator("table",function(b){b.aaSortingFixed=f.extend(!0,{},a)})});t(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];f.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});t("search()",function(a,b,c,d){var e=this.context;return a===p?0!==e.length?e[0].oPreviousSearch.sSearch:p:this.iterator("table",function(e){e.oFeatures.bFilter&&ia(e,f.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===
c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});x("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,h){var g=e.aoPreSearchCols;if(a===p)return g[h].sSearch;e.oFeatures.bFilter&&(f.extend(g[h],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ia(e,e.oPreviousSearch,1))})});t("state()",function(){return this.context.length?this.context[0].oSavedState:null});t("state.clear()",function(){return this.iterator("table",
function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});t("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});t("state.save()",function(){return this.iterator("table",function(a){Ba(a)})});q.versionCheck=q.fnVersionCheck=function(a){var b=q.version.split(".");a=a.split(".");for(var c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};q.isDataTable=q.fnIsDataTable=function(a){var b=f(a).get(0),c=!1;if(a instanceof
q.Api)return!0;f.each(q.settings,function(a,e){a=e.nScrollHead?f("table",e.nScrollHead)[0]:null;var d=e.nScrollFoot?f("table",e.nScrollFoot)[0]:null;if(e.nTable===b||a===b||d===b)c=!0});return c};q.tables=q.fnTables=function(a){var b=!1;f.isPlainObject(a)&&(b=a.api,a=a.visible);var c=f.map(q.settings,function(b){if(!a||a&&f(b.nTable).is(":visible"))return b.nTable});return b?new v(c):c};q.camelToHungarian=L;t("$()",function(a,b){b=this.rows(b).nodes();b=f(b);return f([].concat(b.filter(a).toArray(),
b.find(a).toArray()))});f.each(["on","one","off"],function(a,b){t(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=f.map(a[0].split(/\s/),function(a){return a.match(/\.dt\b/)?a:a+".dt"}).join(" ");var d=f(this.tables().nodes());d[b].apply(d,a);return this})});t("clear()",function(){return this.iterator("table",function(a){qa(a)})});t("settings()",function(){return new v(this.context,this.context)});t("init()",function(){var a=this.context;return a.length?a[0].oInit:null});t("data()",
function(){return this.iterator("table",function(a){return J(a.aoData,"_aData")}).flatten()});t("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,h=b.nTBody,g=b.nTHead,k=b.nTFoot,l=f(e);h=f(h);var n=f(b.nTableWrapper),m=f.map(b.aoData,function(a){return a.nTr}),p;b.bDestroying=!0;A(b,"aoDestroyCallback","destroy",[b]);a||(new v(b)).columns().visible(!0);n.off(".DT").find(":not(tbody *)").off(".DT");f(z).off(".DT-"+b.sInstance);
e!=g.parentNode&&(l.children("thead").detach(),l.append(g));k&&e!=k.parentNode&&(l.children("tfoot").detach(),l.append(k));b.aaSorting=[];b.aaSortingFixed=[];Aa(b);f(m).removeClass(b.asStripeClasses.join(" "));f("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);h.children().detach();h.append(m);g=a?"remove":"detach";l[g]();n[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),l.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&
h.children().each(function(a){f(this).addClass(b.asDestroyStripes[a%p])}));c=f.inArray(b,q.settings);-1!==c&&q.settings.splice(c,1)})});f.each(["column","row","cell"],function(a,b){t(b+"s().every()",function(a){var c=this.selector.opts,e=this;return this.iterator(b,function(d,f,k,l,n){a.call(e[b](f,"cell"===b?k:c,"cell"===b?c:p),f,k,l,n)})})});t("i18n()",function(a,b,c){var d=this.context[0];a=U(a)(d.oLanguage);a===p&&(a=b);c!==p&&f.isPlainObject(a)&&(a=a[c]!==p?a[c]:a._);return a.replace("%d",c)});
q.version="1.10.20";q.settings=[];q.models={};q.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};q.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};q.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,
sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};q.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,
bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},
fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",
sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:f.extend({},q.models.oSearch),sAjaxDataProp:"data",
sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};H(q.defaults);q.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};H(q.defaults.column);q.models.oSettings=
{oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},
aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,
aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:p,oAjaxData:p,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==D(this)?1*this._iRecordsTotal:
this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==D(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};q.ext=C={buttons:{},
classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:q.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:q.version};f.extend(C,{afnFiltering:C.search,aTypes:C.type.detect,ofnSearch:C.type.search,oSort:C.type.order,afnSortData:C.order,aoFeatures:C.feature,oApi:C.internal,oStdClasses:C.classes,oPagination:C.pager});
f.extend(q.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var Pb=q.ext.pager;f.extend(Pb,{simple:function(a,b){return["previous","next"]},full:function(a,b){return["first","previous","next","last"]},numbers:function(a,b){return[ka(a,b)]},simple_numbers:function(a,b){return["previous",ka(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ka(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ka(a,b),"last"]},_numbers:ka,numbers_length:7});f.extend(!0,q.ext.renderer,{pageButton:{_:function(a,b,
c,d,e,h){var g=a.oClasses,k=a.oLanguage.oPaginate,l=a.oLanguage.oAria.paginate||{},n,m,q=0,t=function(b,d){var p,r=g.sPageButtonDisabled,u=function(b){Xa(a,b.data.action,!0)};var w=0;for(p=d.length;w<p;w++){var v=d[w];if(f.isArray(v)){var x=f("<"+(v.DT_el||"div")+"/>").appendTo(b);t(x,v)}else{n=null;m=v;x=a.iTabIndex;switch(v){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":n=k.sFirst;0===e&&(x=-1,m+=" "+r);break;case "previous":n=k.sPrevious;0===e&&(x=-1,m+=
" "+r);break;case "next":n=k.sNext;e===h-1&&(x=-1,m+=" "+r);break;case "last":n=k.sLast;e===h-1&&(x=-1,m+=" "+r);break;default:n=v+1,m=e===v?g.sPageButtonActive:""}null!==n&&(x=f("<a>",{"class":g.sPageButton+" "+m,"aria-controls":a.sTableId,"aria-label":l[v],"data-dt-idx":q,tabindex:x,id:0===c&&"string"===typeof v?a.sTableId+"_"+v:null}).html(n).appendTo(b),$a(x,{action:v},u),q++)}}};try{var v=f(b).find(y.activeElement).data("dt-idx")}catch(mc){}t(f(b).empty(),d);v!==p&&f(b).find("[data-dt-idx="+
v+"]").focus()}}});f.extend(q.ext.type.detect,[function(a,b){b=b.oLanguage.sDecimal;return db(a,b)?"num"+b:null},function(a,b){if(a&&!(a instanceof Date)&&!cc.test(a))return null;b=Date.parse(a);return null!==b&&!isNaN(b)||P(a)?"date":null},function(a,b){b=b.oLanguage.sDecimal;return db(a,b,!0)?"num-fmt"+b:null},function(a,b){b=b.oLanguage.sDecimal;return Ub(a,b)?"html-num"+b:null},function(a,b){b=b.oLanguage.sDecimal;return Ub(a,b,!0)?"html-num-fmt"+b:null},function(a,b){return P(a)||"string"===
typeof a&&-1!==a.indexOf("<")?"html":null}]);f.extend(q.ext.type.search,{html:function(a){return P(a)?a:"string"===typeof a?a.replace(Rb," ").replace(Ea,""):""},string:function(a){return P(a)?a:"string"===typeof a?a.replace(Rb," "):a}});var Da=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Tb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};f.extend(C.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return P(a)?
"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return P(a)?"":"string"===typeof a?a.toLowerCase():a.toString?a.toString():""},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});Ha("");f.extend(!0,q.ext.renderer,{header:{_:function(a,b,c,d){f(a.nTable).on("order.dt.DT",function(e,f,g,k){a===f&&(e=c.idx,b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass("asc"==k[e]?d.sSortAsc:"desc"==k[e]?d.sSortDesc:
c.sSortingClass))})},jqueryui:function(a,b,c,d){f("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(f("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);f(a.nTable).on("order.dt.DT",function(e,f,g,k){a===f&&(e=c.idx,b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass("asc"==k[e]?d.sSortAsc:"desc"==k[e]?d.sSortDesc:c.sSortingClass),b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass("asc"==
k[e]?d.sSortJUIAsc:"desc"==k[e]?d.sSortJUIDesc:c.sSortingClassJUI))})}}});var ib=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};q.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return ib(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
a)+f+(e||"")}}},text:function(){return{display:ib,filter:ib}}};f.extend(q.ext.internal,{_fnExternApiFunc:Qb,_fnBuildAjax:va,_fnAjaxUpdate:qb,_fnAjaxParameters:zb,_fnAjaxUpdateDraw:Ab,_fnAjaxDataSrc:wa,_fnAddColumn:Ia,_fnColumnOptions:ma,_fnAdjustColumnSizing:aa,_fnVisibleToColumnIndex:ba,_fnColumnIndexToVisible:ca,_fnVisbleColumns:W,_fnGetColumns:oa,_fnColumnTypes:Ka,_fnApplyColumnDefs:nb,_fnHungarianMap:H,_fnCamelToHungarian:L,_fnLanguageCompat:Ga,_fnBrowserDetect:lb,_fnAddData:R,_fnAddTr:pa,_fnNodeToDataIndex:function(a,
b){return b._DT_RowIndex!==p?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return f.inArray(c,a.aoData[b].anCells)},_fnGetCellData:I,_fnSetCellData:ob,_fnSplitObjNotation:Na,_fnGetObjectDataFn:U,_fnSetObjectDataFn:Q,_fnGetDataMaster:Oa,_fnClearTable:qa,_fnDeleteIndex:ra,_fnInvalidate:ea,_fnGetRowElements:Ma,_fnCreateTr:La,_fnBuildHead:pb,_fnDrawHead:ha,_fnDraw:S,_fnReDraw:V,_fnAddOptionsHtml:sb,_fnDetectHeader:fa,_fnGetUniqueThs:ua,_fnFeatureHtmlFilter:ub,_fnFilterComplete:ia,_fnFilterCustom:Db,
_fnFilterColumn:Cb,_fnFilter:Bb,_fnFilterCreateSearch:Ta,_fnEscapeRegex:Ua,_fnFilterData:Eb,_fnFeatureHtmlInfo:xb,_fnUpdateInfo:Hb,_fnInfoMacros:Ib,_fnInitialise:ja,_fnInitComplete:xa,_fnLengthChange:Va,_fnFeatureHtmlLength:tb,_fnFeatureHtmlPaginate:yb,_fnPageChange:Xa,_fnFeatureHtmlProcessing:vb,_fnProcessingDisplay:K,_fnFeatureHtmlTable:wb,_fnScrollDraw:na,_fnApplyToChildren:N,_fnCalculateColumnWidths:Ja,_fnThrottle:Sa,_fnConvertToWidth:Jb,_fnGetWidestNode:Kb,_fnGetMaxLenString:Lb,_fnStringToCss:B,
_fnSortFlatten:Y,_fnSort:rb,_fnSortAria:Nb,_fnSortListener:Za,_fnSortAttachListener:Qa,_fnSortingClasses:Aa,_fnSortData:Mb,_fnSaveState:Ba,_fnLoadState:Ob,_fnSettingsFromNode:Ca,_fnLog:O,_fnMap:M,_fnBindAction:$a,_fnCallbackReg:E,_fnCallbackFire:A,_fnLengthOverflow:Wa,_fnRenderer:Ra,_fnDataSource:D,_fnRowAttributes:Pa,_fnExtend:ab,_fnCalculateEnd:function(){}});f.fn.dataTable=q;q.$=f;f.fn.dataTableSettings=q.settings;f.fn.dataTableExt=q.ext;f.fn.DataTable=function(a){return f(this).dataTable(a).api()};
f.each(q,function(a,b){f.fn.DataTable[a]=b});return f.fn.dataTable});

;/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var e=a.length,d=0;d<e;d++){var k=a[d];if(b.call(c,k,d,a))return{i:d,v:k}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,e){if(b){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];d in c||(c[d]={});c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)}):"object"===typeof exports?module.exports=function(b,c){b||(b=window);c&&c.fn.dataTable||(c=require("datatables.net")(b,c).$);return a(c,b,b.document)}:a(jQuery,window,document)})(function(a,b,c,e){var d=a.fn.dataTable;a.extend(!0,d.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
renderer:"bootstrap"});a.extend(d.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"custom-select custom-select-sm form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});d.ext.renderer.pageButton.bootstrap=function(b,l,v,w,m,r){var k=new d.Api(b),x=b.oClasses,n=b.oLanguage.oPaginate,y=b.oLanguage.oAria.paginate||{},g,h,t=0,u=function(c,d){var e,l=function(b){b.preventDefault();
a(b.currentTarget).hasClass("disabled")||k.page()==b.data.action||k.page(b.data.action).draw("page")};var q=0;for(e=d.length;q<e;q++){var f=d[q];if(a.isArray(f))u(c,f);else{h=g="";switch(f){case "ellipsis":g="&#x2026;";h="disabled";break;case "first":g=n.sFirst;h=f+(0<m?"":" disabled");break;case "previous":g=n.sPrevious;h=f+(0<m?"":" disabled");break;case "next":g=n.sNext;h=f+(m<r-1?"":" disabled");break;case "last":g=n.sLast;h=f+(m<r-1?"":" disabled");break;default:g=f+1,h=m===f?"active":""}if(g){var p=
a("<li>",{"class":x.sPageButton+" "+h,id:0===v&&"string"===typeof f?b.sTableId+"_"+f:null}).append(a("<a>",{href:"#","aria-controls":b.sTableId,"aria-label":y[f],"data-dt-idx":t,tabindex:b.iTabIndex,"class":"page-link"}).html(g)).appendTo(c);b.oApi._fnBindAction(p,{action:f},l);t++}}}};try{var p=a(l).find(c.activeElement).data("dt-idx")}catch(z){}u(a(l).empty().html('<ul class="pagination"/>').children("ul"),w);p!==e&&a(l).find("[data-dt-idx="+p+"]").focus()};return d});

;(function(){function s(g,e,n){function t(o,i){if(!e[o]){if(!g[o]){var d="function"==typeof require&&require;if(!i&&d)return d(o,!0);if(r)return r(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var a=e[o]={exports:{}};g[o][0].call(a.exports,function(e){var i=g[o][1][e];return t(i||e)},a,a.exports,s,g,e,n)}return e[o].exports}for(var r="function"==typeof require&&require,o=0;o<n.length;o++)t(n[o]);return t}return s})()({1:[function(e,t){"use strict";var n=Math.min,i=Math.max;const r=e("./src/Drawer"),o=e("./src/Parser");var a=!!("undefined"!=typeof window&&window.document&&window.document.createElement),s={Version:"1.0.0"};s.Drawer=r,s.Parser=o,s.clean=function(e){return e.replace(/[^A-Za-z0-9@\.\+\-\?!\(\)\[\]\{\}/\\=#\$:\*]/g,"")},s.apply=function(e,t="canvas[data-smiles]",n="light",o=null){let a=new r(e),g=document.querySelectorAll(t);for(var d=0;d<g.length;d++){let e=g[d];s.parse(e.getAttribute("data-smiles"),function(t){a.draw(t,e,n,!1)},function(e){o&&o(e)})}},s.parse=function(e,t,n){try{t&&t(o.parse(e))}catch(e){n&&n(e)}},a&&(window.SmilesDrawer=s),Array.prototype.fill||Object.defineProperty(Array.prototype,"fill",{value:function(e){if(null==this)throw new TypeError("this is null or not defined");for(var t=Object(this),r=t.length>>>0,o=arguments[1],a=o>>0,s=0>a?i(r+a,0):n(a,r),g=arguments[2],d=void 0===g?r:g>>0,l=0>d?i(r+d,0):n(d,r);s<l;)t[s]=e,s++;return t}}),t.exports=s},{"./src/Drawer":5,"./src/Parser":10}],2:[function(e,t){"use strict";var n=Math.min;class r{static clone(e){let t=Array.isArray(e)?[]:{};for(let n in e){let i=e[n];t[n]="function"==typeof i.clone?i.clone():"object"==typeof i?r.clone(i):i}return t}static equals(e,t){if(e.length!==t.length)return!1;let n=e.slice().sort(),r=t.slice().sort();for(var o=0;o<n.length;o++)if(n[o]!==r[o])return!1;return!0}static print(e){if(0==e.length)return"";let t="(";for(let n=0;n<e.length;n++)t+=e[n].id?e[n].id+", ":e[n]+", ";return t=t.substring(0,t.length-2),t+")"}static each(e,t){for(let n=0;n<e.length;n++)t(e[n])}static get(e,t,n){for(let r=0;r<e.length;r++)if(e[r][t]==n)return e[r]}static contains(e,t){if(!t.property&&!t.func){for(let n=0;n<e.length;n++)if(e[n]==t.value)return!0;}else if(t.func){for(let n=0;n<e.length;n++)if(t.func(e[n]))return!0;}else for(let n=0;n<e.length;n++)if(e[n][t.property]==t.value)return!0;return!1}static intersection(e,t){let n=[];for(let r=0;r<e.length;r++)for(let i=0;i<t.length;i++)e[r]===t[i]&&n.push(e[r]);return n}static unique(e){let t={};return e.filter(function(e){return!(t[e]!==void 0)&&(t[e]=!0)})}static count(e,t){let n=0;for(let r=0;r<e.length;r++)e[r]===t&&n++;return n}static toggle(e,t){let n=[],r=!1;for(let o=0;o<e.length;o++)e[o]===t?r=!0:n.push(e[o]);return r||n.push(t),n}static remove(e,t){let n=[];for(let r=0;r<e.length;r++)e[r]!==t&&n.push(e[r]);return n}static removeUnique(e,t){let n=e.indexOf(t);return-1<n&&e.splice(n,1),e}static removeAll(e,t){return e.filter(function(e){return-1===t.indexOf(e)})}static merge(e,t){let n=Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n}static containsAll(e,t){let n=0;for(let r=0;r<e.length;r++)for(let i=0;i<t.length;i++)e[r]===t[i]&&n++;return n===t.length}static sortByAtomicNumberDesc(t){let i=t.map(function(t,e){return{index:e,value:t.atomicNumber.split(".").map(Number)}});return i.sort(function(e,t){let r=n(t.value.length,e.value.length),o=0;for(;o<r&&t.value[o]===e.value[o];)o++;return o===r?t.value.length-e.value.length:t.value[o]-e.value[o]}),i.map(function(n){return t[n.index]})}static deepCopy(e){let t=[];for(let n,o=0;o<e.length;o++)n=e[o],t[o]=n instanceof Array?r.deepCopy(n):n;return t}}t.exports=r},{}],3:[function(e,t){"use strict";const n=e("./ArrayHelper"),i=e("./Vertex"),r=e("./Ring");class o{constructor(e,t="-"){this.element=1===e.length?e.toUpperCase():e,this.drawExplicit=!1,this.ringbonds=[],this.rings=[],this.bondType=t,this.branchBond=null,this.isBridge=!1,this.isBridgeNode=!1,this.originalRings=[],this.bridgedRing=null,this.anchoredRings=[],this.bracket=null,this.plane=0,this.attachedPseudoElements={},this.hasAttachedPseudoElements=!1,this.isDrawn=!0,this.isConnectedToRing=!1,this.neighbouringElements=[],this.isPartOfAromaticRing=e!==this.element,this.bondCount=0,this.chirality="",this.isStereoCenter=!1,this.priority=0,this.mainChain=!1,this.hydrogenDirection="down",this.subtreeDepth=1,this.hasHydrogen=!1}addNeighbouringElement(e){this.neighbouringElements.push(e)}attachPseudoElement(e,t,n=0,i=0){null===n&&(n=0),null===i&&(i=0);let r=n+e+i;this.attachedPseudoElements[r]?this.attachedPseudoElements[r].count+=1:this.attachedPseudoElements[r]={element:e,count:1,hydrogenCount:n,previousElement:t,charge:i},this.hasAttachedPseudoElements=!0}getAttachedPseudoElements(){let e={},t=this;return Object.keys(this.attachedPseudoElements).sort().forEach(function(n){e[n]=t.attachedPseudoElements[n]}),e}getAttachedPseudoElementsCount(){return Object.keys(this.attachedPseudoElements).length}isHeteroAtom(){return"C"!==this.element&&"H"!==this.element}addAnchoredRing(e){n.contains(this.anchoredRings,{value:e})||this.anchoredRings.push(e)}getRingbondCount(){return this.ringbonds.length}backupRings(){this.originalRings=Array(this.rings.length);for(let e=0;e<this.rings.length;e++)this.originalRings[e]=this.rings[e]}restoreRings(){this.rings=Array(this.originalRings.length);for(let e=0;e<this.originalRings.length;e++)this.rings[e]=this.originalRings[e]}haveCommonRingbond(e,t){for(let n=0;n<e.ringbonds.length;n++)for(let i=0;i<t.ringbonds.length;i++)if(e.ringbonds[n].id==t.ringbonds[i].id)return!0;return!1}neighbouringElementsEqual(e){if(e.length!==this.neighbouringElements.length)return!1;e.sort(),this.neighbouringElements.sort();for(var t=0;t<this.neighbouringElements.length;t++)if(e[t]!==this.neighbouringElements[t])return!1;return!0}getAtomicNumber(){return o.atomicNumbers[this.element]}getMaxBonds(){return o.maxBonds[this.element]}static get maxBonds(){return{H:1,C:4,N:3,O:2,P:3,S:2,B:3,F:1,I:1,Cl:1,Br:1}}static get atomicNumbers(){return{H:1,He:2,Li:3,Be:4,B:5,b:5,C:6,c:6,N:7,n:7,O:8,o:8,F:9,Ne:10,Na:11,Mg:12,Al:13,Si:14,P:15,p:15,S:16,s:16,Cl:17,Ar:18,K:19,Ca:20,Sc:21,Ti:22,V:23,Cr:24,Mn:25,Fe:26,Co:27,Ni:28,Cu:29,Zn:30,Ga:31,Ge:32,As:33,Se:34,Br:35,Kr:36,Rb:37,Sr:38,Y:39,Zr:40,Nb:41,Mo:42,Tc:43,Ru:44,Rh:45,Pd:46,Ag:47,Cd:48,In:49,Sn:50,Sb:51,Te:52,I:53,Xe:54,Cs:55,Ba:56,La:57,Ce:58,Pr:59,Nd:60,Pm:61,Sm:62,Eu:63,Gd:64,Tb:65,Dy:66,Ho:67,Er:68,Tm:69,Yb:70,Lu:71,Hf:72,Ta:73,W:74,Re:75,Os:76,Ir:77,Pt:78,Au:79,Hg:80,Tl:81,Pb:82,Bi:83,Po:84,At:85,Rn:86,Fr:87,Ra:88,Ac:89,Th:90,Pa:91,U:92,Np:93,Pu:94,Am:95,Cm:96,Bk:97,Cf:98,Es:99,Fm:100,Md:101,No:102,Lr:103,Rf:104,Db:105,Sg:106,Bh:107,Hs:108,Mt:109,Ds:110,Rg:111,Cn:112,Uut:113,Uuq:114,Uup:115,Uuh:116,Uus:117,Uuo:118}}static get mass(){return{H:1,He:2,Li:3,Be:4,B:5,b:5,C:6,c:6,N:7,n:7,O:8,o:8,F:9,Ne:10,Na:11,Mg:12,Al:13,Si:14,P:15,p:15,S:16,s:16,Cl:17,Ar:18,K:19,Ca:20,Sc:21,Ti:22,V:23,Cr:24,Mn:25,Fe:26,Co:27,Ni:28,Cu:29,Zn:30,Ga:31,Ge:32,As:33,Se:34,Br:35,Kr:36,Rb:37,Sr:38,Y:39,Zr:40,Nb:41,Mo:42,Tc:43,Ru:44,Rh:45,Pd:46,Ag:47,Cd:48,In:49,Sn:50,Sb:51,Te:52,I:53,Xe:54,Cs:55,Ba:56,La:57,Ce:58,Pr:59,Nd:60,Pm:61,Sm:62,Eu:63,Gd:64,Tb:65,Dy:66,Ho:67,Er:68,Tm:69,Yb:70,Lu:71,Hf:72,Ta:73,W:74,Re:75,Os:76,Ir:77,Pt:78,Au:79,Hg:80,Tl:81,Pb:82,Bi:83,Po:84,At:85,Rn:86,Fr:87,Ra:88,Ac:89,Th:90,Pa:91,U:92,Np:93,Pu:94,Am:95,Cm:96,Bk:97,Cf:98,Es:99,Fm:100,Md:101,No:102,Lr:103,Rf:104,Db:105,Sg:106,Bh:107,Hs:108,Mt:109,Ds:110,Rg:111,Cn:112,Uut:113,Uuq:114,Uup:115,Uuh:116,Uus:117,Uuo:118}}}t.exports=o},{"./ArrayHelper":2,"./Ring":11,"./Vertex":15}],4:[function(e,t){"use strict";var n=Number.MAX_VALUE;const i=e("./MathHelper"),o=e("./Vector2"),a=e("./Line"),s=e("./Vertex"),g=e("./Ring");t.exports=class{constructor(e,t,n){this.canvas="string"==typeof e||e instanceof String?document.getElementById(e):e,this.ctx=this.canvas.getContext("2d"),this.colors=t,this.opts=n,this.drawingWidth=0,this.drawingHeight=0,this.offsetX=0,this.offsetY=0,this.fontLarge=this.opts.fontSizeLarge+"pt Helvetica, Arial, sans-serif",this.fontSmall=this.opts.fontSizeSmall+"pt Helvetica, Arial, sans-serif",this.updateSize(this.opts.width,this.opts.height),this.ctx.font=this.fontLarge,this.hydrogenWidth=this.ctx.measureText("H").width,this.halfHydrogenWidth=this.hydrogenWidth/2,this.halfBondThickness=this.opts.bondThickness/2}updateSize(e,t){this.devicePixelRatio=window.devicePixelRatio||1,this.backingStoreRatio=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.ratio=this.devicePixelRatio/this.backingStoreRatio,1===this.ratio?(this.canvas.width=e*this.ratio,this.canvas.height=t*this.ratio):(this.canvas.width=e*this.ratio,this.canvas.height=t*this.ratio,this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.ctx.setTransform(this.ratio,0,0,this.ratio,0,0))}setTheme(e){this.colors=e}scale(e){let t=-n,r=-n,o=n,a=n;for(var s=0;s<e.length;s++){if(!e[s].value.isDrawn)continue;let n=e[s].position;t<n.x&&(t=n.x),r<n.y&&(r=n.y),o>n.x&&(o=n.x),a>n.y&&(a=n.y)}var g=this.opts.padding;t+=g,r+=g,o-=g,a-=g,this.drawingWidth=t-o,this.drawingHeight=r-a;var d=this.canvas.offsetWidth/this.drawingWidth,l=this.canvas.offsetHeight/this.drawingHeight,h=d<l?d:l;this.ctx.scale(h,h),this.offsetX=-o,this.offsetY=-a,d<l?this.offsetY+=this.canvas.offsetHeight/(2*h)-this.drawingHeight/2:this.offsetX+=this.canvas.offsetWidth/(2*h)-this.drawingWidth/2}reset(){this.ctx.setTransform(1,0,0,1,0,0)}getColor(e){return e=e.toUpperCase(),e in this.colors?this.colors[e]:this.colors.C}drawCircle(e,t,n,r,o=!0,a=!1,s=""){let g=this.ctx,d=this.offsetX,l=this.offsetY;g.save(),g.lineWidth=1.5,g.beginPath(),g.arc(e+d,t+l,n,0,i.twoPI,!0),g.closePath(),a?(o?(g.fillStyle="#f00",g.fill()):(g.strokeStyle="#f00",g.stroke()),this.drawDebugText(e,t,s)):o?(g.fillStyle=r,g.fill()):(g.strokeStyle=r,g.stroke()),g.restore()}drawLine(e,t=!1,n=1){let i=this.ctx,o=this.offsetX,a=this.offsetY,s=e.clone().shorten(4),g=s.getLeftVector().clone(),d=s.getRightVector().clone();g.x+=o,g.y+=a,d.x+=o,d.y+=a,t||(i.save(),i.globalCompositeOperation="destination-out",i.beginPath(),i.moveTo(g.x,g.y),i.lineTo(d.x,d.y),i.lineCap="round",i.lineWidth=this.opts.bondThickness+1.2,i.strokeStyle=this.getColor("BACKGROUND"),i.stroke(),i.globalCompositeOperation="source-over",i.restore()),g=e.getLeftVector().clone(),d=e.getRightVector().clone(),g.x+=o,g.y+=a,d.x+=o,d.y+=a,i.save(),i.beginPath(),i.moveTo(g.x,g.y),i.lineTo(d.x,d.y),i.lineCap="round",i.lineWidth=this.opts.bondThickness;let h=this.ctx.createLinearGradient(g.x,g.y,d.x,d.y);h.addColorStop(.4,this.getColor(e.getLeftElement())||this.getColor("C")),h.addColorStop(.6,this.getColor(e.getRightElement())||this.getColor("C")),t&&(i.setLineDash([1,1.5]),i.lineWidth=this.opts.bondThickness/1.5),1>n&&(i.globalAlpha=n),i.strokeStyle=h,i.stroke(),i.restore()}drawWedge(e,n=1){if(isNaN(e.from.x)||isNaN(e.from.y)||isNaN(e.to.x)||isNaN(e.to.y))return;let i=this.ctx,a=this.offsetX,s=this.offsetY,g=e.clone().shorten(5),d=g.getLeftVector().clone(),h=g.getRightVector().clone();d.x+=a,d.y+=s,h.x+=a,h.y+=s,d=e.getLeftVector().clone(),h=e.getRightVector().clone(),d.x+=a,d.y+=s,h.x+=a,h.y+=s,i.save();let c=o.normals(d,h);c[0].normalize(),c[1].normalize();let p=e.getRightChiral(),f=d,m=h;p&&(f=h,m=d);let b=o.add(f,o.multiplyScalar(c[0],this.halfBondThickness)),t=o.add(m,o.multiplyScalar(c[0],1.5+this.halfBondThickness)),u=o.add(m,o.multiplyScalar(c[1],1.5+this.halfBondThickness)),v=o.add(f,o.multiplyScalar(c[1],this.halfBondThickness));i.beginPath(),i.moveTo(b.x,b.y),i.lineTo(t.x,t.y),i.lineTo(u.x,u.y),i.lineTo(v.x,v.y);let x=this.ctx.createRadialGradient(h.x,h.y,this.opts.bondLength,h.x,h.y,0);x.addColorStop(.4,this.getColor(e.getLeftElement())||this.getColor("C")),x.addColorStop(.6,this.getColor(e.getRightElement())||this.getColor("C")),i.fillStyle=x,i.fill(),i.restore()}drawDashedWedge(e){if(isNaN(e.from.x)||isNaN(e.from.y)||isNaN(e.to.x)||isNaN(e.to.y))return;let n=this.ctx,i=this.offsetX,a=this.offsetY,s=e.getLeftVector().clone(),g=e.getRightVector().clone();s.x+=i,s.y+=a,g.x+=i,g.y+=a,n.save();let r=o.normals(s,g);r[0].normalize(),r[1].normalize();let d,l,h,c,p=e.getRightChiral(),u=e.clone();p?(d=g,l=s,u.shortenRight(1),h=u.getRightVector().clone(),c=u.getLeftVector().clone()):(d=s,l=g,u.shortenLeft(1),h=u.getLeftVector().clone(),c=u.getRightVector().clone()),h.x+=i,h.y+=a,c.x+=i,c.y+=a;let v=o.subtract(l,d).normalize();n.strokeStyle=this.getColor("C"),n.lineCap="round",n.lineWidth=this.opts.bondThickness,n.beginPath();let f=e.getLength(),m=1.25/(f/(3*this.opts.bondThickness)),b=!1;for(var x=0;1>x;x+=m){let t=o.multiplyScalar(v,x*f),i=o.add(d,t),a=1.5*x,s=o.multiplyScalar(r[0],a);!b&&.5<x&&(n.stroke(),n.beginPath(),n.strokeStyle=this.getColor(e.getRightElement())||this.getColor("C"),b=!0),i.subtract(s),n.moveTo(i.x,i.y),i.add(o.multiplyScalar(s,2)),n.lineTo(i.x,i.y)}n.stroke(),n.restore()}drawDebugText(e,t,n){let i=this.ctx;i.save(),i.font="5px Droid Sans, sans-serif",i.textAlign="start",i.textBaseline="top",i.fillStyle="#ff0000",i.fillText(n,e+this.offsetX,t+this.offsetY),i.restore()}drawBall(e,t,n){let r=this.ctx;r.save(),r.beginPath(),r.arc(e+this.offsetX,t+this.offsetY,this.opts.bondLength/4.5,0,i.twoPI,!1),r.fillStyle=this.getColor(n),r.fill(),r.restore()}drawPoint(e,t,n){let r=this.ctx,o=this.offsetX,a=this.offsetY;r.save(),r.globalCompositeOperation="destination-out",r.beginPath(),r.arc(e+o,t+a,1.5,0,i.twoPI,!0),r.closePath(),r.fill(),r.globalCompositeOperation="source-over",r.beginPath(),r.arc(e+this.offsetX,t+this.offsetY,.75,0,i.twoPI,!1),r.fillStyle=this.getColor(n),r.fill(),r.restore()}drawText(e,t,n,o,a,s,g,d,l={}){let h=this.ctx,c=this.offsetX,p=this.offsetY;h.save(),h.textAlign="start",h.textBaseline="alphabetic";let u="",v=0;g&&(u=this.getChargeText(g),h.font=this.fontSmall,v=h.measureText(u).width);let f="0",m=0;0<d&&(f=d.toString(),h.font=this.fontSmall,m=h.measureText(f).width),1===g&&"N"===n&&l.hasOwnProperty("0O")&&l.hasOwnProperty("0O-1")&&(l={"0O":{element:"O",count:2,hydrogenCount:0,previousElement:"C",charge:""}},g=0),h.font=this.fontLarge,h.fillStyle=this.getColor("BACKGROUND");let b=h.measureText(n);b.totalWidth=b.width+v,b.height=parseInt(this.fontLarge,10);let x=b.width>this.opts.fontSizeLarge?b.width:this.opts.fontSizeLarge;x/=1.5,h.globalCompositeOperation="destination-out",h.beginPath(),h.arc(e+c,t+p,x,0,i.twoPI,!0),h.closePath(),h.fill(),h.globalCompositeOperation="source-over";let y=-b.width/2,S=-b.width/2;h.fillStyle=this.getColor(n),h.fillText(n,e+c+y,t+this.opts.halfFontSizeLarge+p),y+=b.width,g&&(h.font=this.fontSmall,h.fillText(u,e+c+y,t-this.opts.fifthFontSizeSmall+p),y+=v),0<d&&(h.font=this.fontSmall,h.fillText(f,e+c+S-m,t-this.opts.fifthFontSizeSmall+p),S-=m),h.font=this.fontLarge;let C=0,R=0;if(1===o){let n=e+c,i=t+p+this.opts.halfFontSizeLarge;C=this.hydrogenWidth,S-=C,"left"===a?n+=S:"right"===a?n+=y:"up"===a&&s?n+=y:"down"===a&&s?n+=y:"up"!==a||s?"down"===a&&!s&&(i+=this.opts.fontSizeLarge+this.opts.quarterFontSizeLarge,n-=this.halfHydrogenWidth):(i-=this.opts.fontSizeLarge+this.opts.quarterFontSizeLarge,n-=this.halfHydrogenWidth),h.fillText("H",n,i),y+=C}else if(1<o){let n=e+c,i=t+p+this.opts.halfFontSizeLarge;C=this.hydrogenWidth,h.font=this.fontSmall,R=h.measureText(o).width,S-=C+R,"left"===a?n+=S:"right"===a?n+=y:"up"===a&&s?n+=y:"down"===a&&s?n+=y:"up"!==a||s?"down"===a&&!s&&(i+=this.opts.fontSizeLarge+this.opts.quarterFontSizeLarge,n-=this.halfHydrogenWidth):(i-=this.opts.fontSizeLarge+this.opts.quarterFontSizeLarge,n-=this.halfHydrogenWidth),h.font=this.fontLarge,h.fillText("H",n,i),h.font=this.fontSmall,h.fillText(o,n+this.halfHydrogenWidth+R,i+this.opts.fifthFontSizeSmall),y+=C+this.halfHydrogenWidth+R}for(let i in l){if(!l.hasOwnProperty(i))continue;let n=0,r=0,o=l[i].element,s=l[i].count,g=l[i].hydrogenCount,d=l[i].charge;h.font=this.fontLarge,1<s&&0<g&&(n=h.measureText("(").width,r=h.measureText(")").width);let u=h.measureText(o).width,v=0,f="",m=0;C=0,0<g&&(C=this.hydrogenWidth),h.font=this.fontSmall,1<s&&(v=h.measureText(s).width),0!==d&&(f=this.getChargeText(d),m=h.measureText(f).width),R=0,1<g&&(R=h.measureText(g).width),h.font=this.fontLarge;let b=e+c,x=t+p+this.opts.halfFontSizeLarge;h.fillStyle=this.getColor(o),0<s&&(S-=v),1<s&&0<g&&("left"===a?(S-=r,h.fillText(")",b+S,x)):(h.fillText("(",b+y,x),y+=n)),"left"===a?(S-=u,h.fillText(o,b+S,x)):(h.fillText(o,b+y,x),y+=u),0<g&&("left"===a?(S-=C+R,h.fillText("H",b+S,x),1<g&&(h.font=this.fontSmall,h.fillText(g,b+S+C,x+this.opts.fifthFontSizeSmall))):(h.fillText("H",b+y,x),y+=C,1<g&&(h.font=this.fontSmall,h.fillText(g,b+y,x+this.opts.fifthFontSizeSmall),y+=R))),h.font=this.fontLarge,1<s&&0<g&&("left"===a?(S-=n,h.fillText("(",b+S,x)):(h.fillText(")",b+y,x),y+=r)),h.font=this.fontSmall,1<s&&("left"===a?h.fillText(s,b+S+n+r+C+R+u,x+this.opts.fifthFontSizeSmall):(h.fillText(s,b+y,x+this.opts.fifthFontSizeSmall),y+=v)),0!==d&&("left"===a?h.fillText(f,b+S+n+r+C+R+u,t-this.opts.fifthFontSizeSmall+p):(h.fillText(f,b+y,t-this.opts.fifthFontSizeSmall+p),y+=m))}h.restore()}getChargeText(e){return 1===e?"+":2===e?"2+":-1===e?"-":-2===e?"2-":""}drawDebugPoint(e,t,n="",i="#f00"){this.drawCircle(e,t,2,i,!0,!0,n)}drawAromaticityRing(e){let t=this.ctx,n=i.apothemFromSideLength(this.opts.bondLength,e.getSize());t.save(),t.strokeStyle=this.getColor("C"),t.lineWidth=this.opts.bondThickness,t.beginPath(),t.arc(e.center.x+this.offsetX,e.center.y+this.offsetY,n-this.opts.bondSpacing,0,2*Math.PI,!0),t.closePath(),t.stroke(),t.restore()}clear(){this.ctx.clearRect(0,0,this.canvas.offsetWidth,this.canvas.offsetHeight)}}},{"./Line":8,"./MathHelper":9,"./Ring":11,"./Vector2":14,"./Vertex":15}],5:[function(e,t){"use strict";var n=Math.sin,i=Math.cos,r=Math.sqrt,o=Math.PI,s=Math.min,g=Math.max;const d=e("./MathHelper"),l=e("./ArrayHelper"),h=e("./Vector2"),c=e("./Line"),p=e("./Vertex"),u=e("./Edge"),v=e("./Atom"),f=e("./Ring"),m=e("./RingConnection"),b=e("./CanvasWrapper"),x=e("./Graph"),y=e("./SSSR");t.exports=class{constructor(e){this.graph=null,this.doubleBondConfigCount=0,this.doubleBondConfig=null,this.ringIdCounter=0,this.ringConnectionIdCounter=0,this.canvasWrapper=null,this.totalOverlapScore=0,this.defaultOptions={width:500,height:500,bondThickness:.6,bondLength:15,shortBondLength:.85,bondSpacing:15*.18,atomVisualization:"default",isomeric:!0,debug:!1,terminalCarbons:!1,explicitHydrogens:!1,overlapSensitivity:.42,overlapResolutionIterations:1,compactDrawing:!0,fontSizeLarge:5,fontSizeSmall:3,padding:20,experimentalSSSR:!1,kkThreshold:.1,kkInnerThreshold:.1,kkMaxIteration:2e4,kkMaxInnerIteration:50,kkMaxEnergy:1e9,themes:{dark:{C:"#fff",O:"#e74c3c",N:"#3498db",F:"#27ae60",CL:"#16a085",BR:"#d35400",I:"#8e44ad",P:"#d35400",S:"#f1c40f",B:"#e67e22",SI:"#e67e22",H:"#fff",BACKGROUND:"#141414"},light:{C:"#222",O:"#e74c3c",N:"#3498db",F:"#27ae60",CL:"#16a085",BR:"#d35400",I:"#8e44ad",P:"#d35400",S:"#f1c40f",B:"#e67e22",SI:"#e67e22",H:"#222",BACKGROUND:"#fff"}}},this.opts=this.extend(!0,this.defaultOptions,e),this.opts.halfBondSpacing=this.opts.bondSpacing/2,this.opts.bondLengthSq=this.opts.bondLength*this.opts.bondLength,this.opts.halfFontSizeLarge=this.opts.fontSizeLarge/2,this.opts.quarterFontSizeLarge=this.opts.fontSizeLarge/4,this.opts.fifthFontSizeSmall=this.opts.fontSizeSmall/5,this.theme=this.opts.themes.dark}extend(){let e=this,t={},n=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],r++);for(let i=function(i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=n&&"[object Object]"===Object.prototype.toString.call(i[r])?e.extend(!0,t[r],i[r]):i[r])};r<o;r++){let e=arguments[r];i(e)}return t}draw(e,t,n="light",r=!1){if(this.data=e,this.infoOnly=r,this.infoOnly||(this.canvasWrapper=new b(t,this.opts.themes[n],this.opts)),this.ringIdCounter=0,this.ringConnectionIdCounter=0,this.graph=new x(e,this.opts.isomeric),this.rings=[],this.ringConnections=[],this.originalRings=[],this.originalRingConnections=[],this.bridgedRing=!1,this.doubleBondConfigCount=null,this.doubleBondConfig=null,this.initRings(),this.initHydrogens(),!this.infoOnly){this.position(),this.restoreRingInformation(),this.resolvePrimaryOverlaps();let e=this.getOverlapScore();this.totalOverlapScore=this.getOverlapScore().total;for(var a=0;a<this.opts.overlapResolutionIterations;a++)for(var s=0;s<this.graph.edges.length;s++){let t=this.graph.edges[s];if(this.isEdgeRotatable(t)){let n=this.graph.getTreeDepth(t.sourceId,t.targetId),i=this.graph.getTreeDepth(t.targetId,t.sourceId),r=t.targetId,o=t.sourceId;n>i&&(r=t.sourceId,o=t.targetId);let a=this.getSubtreeOverlapScore(o,r,e.vertexScores);if(a.value>this.opts.overlapSensitivity){let t=this.graph.vertices[r],n=this.graph.vertices[o],i=n.getNeighbours(r);if(1===i.length){let e=this.graph.vertices[i[0]],r=e.position.getRotateAwayFromAngle(t.position,n.position,d.toRad(120));this.rotateSubtree(e.id,n.id,r,n.position);let o=this.getOverlapScore().total;o>this.totalOverlapScore?this.rotateSubtree(e.id,n.id,-r,n.position):this.totalOverlapScore=o}else if(2===i.length){if(0!==n.value.rings.length&&0!==t.value.rings.length)continue;let e=this.graph.vertices[i[0]],r=this.graph.vertices[i[1]];if(1===e.value.rings.length&&1===r.value.rings.length){if(e.value.rings[0]!==r.value.rings[0])continue;}else if(0!==e.value.rings.length||0!==r.value.rings.length)continue;else{let i=e.position.getRotateAwayFromAngle(t.position,n.position,d.toRad(120)),o=r.position.getRotateAwayFromAngle(t.position,n.position,d.toRad(120));this.rotateSubtree(e.id,n.id,i,n.position),this.rotateSubtree(r.id,n.id,o,n.position);let a=this.getOverlapScore().total;a>this.totalOverlapScore?(this.rotateSubtree(e.id,n.id,-i,n.position),this.rotateSubtree(r.id,n.id,-o,n.position)):this.totalOverlapScore=a}}e=this.getOverlapScore()}}}this.resolveSecondaryOverlaps(e.scores),this.opts.isomeric&&this.annotateStereochemistry(),this.opts.compactDrawing&&"default"===this.opts.atomVisualization&&this.initPseudoElements(),this.rotateDrawing(),this.canvasWrapper.scale(this.graph.vertices),this.drawEdges(this.opts.debug),this.drawVertices(this.opts.debug),this.canvasWrapper.reset(),this.opts.debug&&(console.log(this.graph),console.log(this.rings),console.log(this.ringConnections))}}edgeRingCount(e){let t=this.graph.edges[e],n=this.graph.vertices[t.sourceId],i=this.graph.vertices[t.targetId];return s(n.value.rings.length,i.value.rings.length)}getBridgedRings(){let e=[];for(var t=0;t<this.rings.length;t++)this.rings[t].isBridged&&e.push(this.rings[t]);return e}getFusedRings(){let e=[];for(var t=0;t<this.rings.length;t++)this.rings[t].isFused&&e.push(this.rings[t]);return e}getSpiros(){let e=[];for(var t=0;t<this.rings.length;t++)this.rings[t].isSpiro&&e.push(this.rings[t]);return e}printRingInfo(){let e="";for(var t=0;t<this.rings.length;t++){const n=this.rings[t];e+=n.id+";",e+=n.members.length+";",e+=n.neighbours.length+";",e+=n.isSpiro?"true;":"false;",e+=n.isFused?"true;":"false;",e+=n.isBridged?"true;":"false;",e+=n.rings.length+";",e+="\n"}return e}rotateDrawing(){let e=0,t=0,n=0;for(var r=0;r<this.graph.vertices.length;r++){let i=this.graph.vertices[r];if(i.value.isDrawn)for(var o=r+1;o<this.graph.vertices.length;o++){let a=this.graph.vertices[o];if(!a.value.isDrawn)continue;let s=i.position.distanceSq(a.position);s>n&&(n=s,e=r,t=o)}}let s=-h.subtract(this.graph.vertices[e].position,this.graph.vertices[t].position).angle();if(!isNaN(s)){let e=s%.523599;.2617995>e?s-=e:s+=.523599-e;for(var r=0;r<this.graph.vertices.length;r++)r!==t&&this.graph.vertices[r].position.rotateAround(s,this.graph.vertices[t].position);for(var r=0;r<this.rings.length;r++)this.rings[r].center.rotateAround(s,this.graph.vertices[t].position)}}getTotalOverlapScore(){return this.totalOverlapScore}getRingCount(){return this.rings.length}hasBridgedRing(){return this.bridgedRing}getHeavyAtomCount(){let e=0;for(var t=0;t<this.graph.vertices.length;t++)"H"!==this.graph.vertices[t].value.element&&e++;return e}getMolecularFormula(){let t="",n=new Map;for(var r=0;r<this.graph.vertices.length;r++){let e=this.graph.vertices[r].value;if(n.has(e.element)?n.set(e.element,n.get(e.element)+1):n.set(e.element,1),e.bracket&&!e.bracket.chirality&&(n.has("H")?n.set("H",n.get("H")+e.bracket.hcount):n.set("H",e.bracket.hcount)),!e.bracket){let t=v.maxBonds[e.element]-e.bondCount;e.isPartOfAromaticRing&&t--,n.has("H")?n.set("H",n.get("H")+t):n.set("H",t)}}if(n.has("C")){let e=n.get("C");t+="C"+(1<e?e:""),n.delete("C")}if(n.has("H")){let e=n.get("H");t+="H"+(1<e?e:""),n.delete("H")}let e=Object.keys(v.atomicNumbers).sort();return e.map(i=>{if(n.has(i)){let e=n.get(i);t+=i+(1<e?e:"")}}),t}getRingbondType(e,t){if(1>e.value.getRingbondCount()||1>t.value.getRingbondCount())return null;for(var n=0;n<e.value.ringbonds.length;n++)for(var r=0;r<t.value.ringbonds.length;r++)if(e.value.ringbonds[n].id===t.value.ringbonds[r].id)return"-"===e.value.ringbonds[n].bondType?t.value.ringbonds[r].bond:e.value.ringbonds[n].bond;return null}initRings(){let e=new Map;for(var t=this.graph.vertices.length-1;0<=t;t--){let i=this.graph.vertices[t];if(0!==i.value.ringbonds.length)for(var n=0;n<i.value.ringbonds.length;n++){let t=i.value.ringbonds[n].id,r=i.value.ringbonds[n].bond;if(!e.has(t))e.set(t,[i.id,r]);else{let o=i.id,a=e.get(t)[0],s=e.get(t)[1],g=new u(o,a,1);g.setBondType(s||r||"-");let d=this.graph.addEdge(g),l=this.graph.vertices[a];i.addRingbondChild(a,n),i.value.addNeighbouringElement(l.value.element),l.addRingbondChild(o,n),l.value.addNeighbouringElement(i.value.element),i.edges.push(d),l.edges.push(d),e.delete(t)}}}let r=y.getRings(this.graph,this.opts.experimentalSSSR);if(null!==r){for(var t=0;t<r.length;t++){let e=[...r[t]],i=this.addRing(new f(e));for(var n=0;n<e.length;n++)this.graph.vertices[e[n]].value.rings.push(i)}for(var t=0;t<this.rings.length-1;t++)for(var n=t+1;n<this.rings.length;n++){let e=this.rings[t],i=this.rings[n],r=new m(e,i);0<r.vertices.size&&this.addRingConnection(r)}for(var t=0;t<this.rings.length;t++){let e=this.rings[t];e.neighbours=m.getNeighbours(this.ringConnections,e.id)}for(var t=0;t<this.rings.length;t++){let e=this.rings[t];this.graph.vertices[e.members[0]].value.addAnchoredRing(e.id)}for(this.backupRingInformation();0<this.rings.length;){let e=-1;for(var t=0;t<this.rings.length;t++){let n=this.rings[t];this.isPartOfBridgedRing(n.id)&&!n.isBridged&&(e=n.id)}if(-1===e)break;let n=this.getRing(e),i=this.getBridgedRingRings(n.id);this.bridgedRing=!0,this.createBridgedRing(i,n.members[0]);for(var t=0;t<i.length;t++)this.removeRing(i[t])}}}initHydrogens(){if(!this.opts.explicitHydrogens)for(var e=0;e<this.graph.vertices.length;e++){let t=this.graph.vertices[e];if("H"!==t.value.element)continue;let n=this.graph.vertices[t.neighbours[0]];n.value.hasHydrogen=!0,(!n.value.isStereoCenter||2>n.value.rings.length&&!n.value.bridgedRing||n.value.bridgedRing&&2>n.value.originalRings.length)&&(t.value.isDrawn=!1)}}getBridgedRingRings(e){let t=[],o=this,a=function(e){let r=o.getRing(e);t.push(e);for(var s=0;s<r.neighbours.length;s++){let i=r.neighbours[s];-1===t.indexOf(i)&&i!==e&&m.isBridge(o.ringConnections,o.graph.vertices,e,i)&&a(i)}};return a(e),l.unique(t)}isPartOfBridgedRing(e){for(var t=0;t<this.ringConnections.length;t++)if(this.ringConnections[t].containsRing(e)&&this.ringConnections[t].isBridge(this.graph.vertices))return!0;return!1}createBridgedRing(e,t){let n=new Set,r=new Set,o=new Set;for(var a=0;a<e.length;a++){let t=this.getRing(e[a]);t.isPartOfBridged=!0;for(var s=0;s<t.members.length;s++)r.add(t.members[s]);for(var s=0;s<t.neighbours.length;s++){let n=t.neighbours[s];-1===e.indexOf(n)&&o.add(t.neighbours[s])}}let g=new Set;for(let i of r){let t=this.graph.vertices[i],r=l.intersection(e,t.value.rings);1===t.value.rings.length||1===r.length?n.add(t.id):g.add(t.id)}let d=[];for(let i of g){let e=this.graph.vertices[i],t=!1;for(let n=0;n<e.edges.length;n++)1===this.edgeRingCount(e.edges[n])&&(t=!0);t?(e.value.isBridgeNode=!0,n.add(e.id)):(e.value.isBridge=!0,n.add(e.id))}let h=new f([...n]);this.addRing(h),h.isBridged=!0,h.neighbours=[...o];for(var a=0;a<e.length;a++)h.rings.push(this.getRing(e[a]).clone());for(var a=0;a<h.members.length;a++)this.graph.vertices[h.members[a]].value.bridgedRing=h.id;for(var a=0;a<d.length;a++){let e=this.graph.vertices[d[a]];e.value.rings=[]}for(let i of n){let t=this.graph.vertices[i];t.value.rings=l.removeAll(t.value.rings,e),t.value.rings.push(h.id)}for(var a=0;a<e.length;a++)for(var s=a+1;s<e.length;s++)this.removeRingConnectionsBetween(e[a],e[s]);for(let n of o){let t=this.getRingConnections(n,e);for(var s=0;s<t.length;s++)this.getRingConnection(t[s]).updateOther(h.id,n);this.getRing(n).neighbours.push(h.id)}return h}areVerticesInSameRing(e,t){for(var n=0;n<e.value.rings.length;n++)for(var r=0;r<t.value.rings.length;r++)if(e.value.rings[n]===t.value.rings[r])return!0;return!1}getCommonRings(e,t){let n=[];for(var r=0;r<e.value.rings.length;r++)for(var o=0;o<t.value.rings.length;o++)e.value.rings[r]==t.value.rings[o]&&n.push(e.value.rings[r]);return n}getLargestOrAromaticCommonRing(e,t){let n=this.getCommonRings(e,t),r=0,o=null;for(var a=0;a<n.length;a++){let e=this.getRing(n[a]),t=e.getSize();if(e.isBenzeneLike(this.graph.vertices))return e;t>r&&(r=t,o=e)}return o}getVerticesAt(e,t,n){let r=[];for(var o=0;o<this.graph.vertices.length;o++){let i=this.graph.vertices[o];if(i.id===n||!i.positioned)continue;let a=e.distanceSq(i.position);a<=t*t&&r.push(i.id)}return r}getClosestVertex(e){let t=99999,n=null;for(var r=0;r<this.graph.vertices.length;r++){let i=this.graph.vertices[r];if(i.id===e.id)continue;let o=e.position.distanceSq(i.position);o<t&&(t=o,n=i)}return n}addRing(e){return e.id=this.ringIdCounter++,this.rings.push(e),e.id}removeRing(e){this.rings=this.rings.filter(function(t){return t.id!==e}),this.ringConnections=this.ringConnections.filter(function(t){return t.firstRingId!==e&&t.secondRingId!==e});for(var t=0;t<this.rings.length;t++){let n=this.rings[t];n.neighbours=n.neighbours.filter(function(t){return t!==e})}}getRing(e){for(var t=0;t<this.rings.length;t++)if(this.rings[t].id==e)return this.rings[t]}addRingConnection(e){return e.id=this.ringConnectionIdCounter++,this.ringConnections.push(e),e.id}removeRingConnection(e){this.ringConnections=this.ringConnections.filter(function(t){return t.id!==e})}removeRingConnectionsBetween(e,t){let n=[];for(var r=0;r<this.ringConnections.length;r++){let i=this.ringConnections[r];(i.firstRingId===e&&i.secondRingId===t||i.firstRingId===t&&i.secondRingId===e)&&n.push(i.id)}for(var r=0;r<n.length;r++)this.removeRingConnection(n[r])}getRingConnection(e){for(var t=0;t<this.ringConnections.length;t++)if(this.ringConnections[t].id==e)return this.ringConnections[t]}getRingConnections(e,t){let n=[];for(var r=0;r<this.ringConnections.length;r++){let i=this.ringConnections[r];for(var o=0;o<t.length;o++){let r=t[o];(i.firstRingId===e&&i.secondRingId===r||i.firstRingId===r&&i.secondRingId===e)&&n.push(i.id)}}return n}getOverlapScore(){let e=0,t=new Float32Array(this.graph.vertices.length);for(var n=0;n<this.graph.vertices.length;n++)t[n]=0;for(var o,n=0;n<this.graph.vertices.length;n++)for(o=this.graph.vertices.length;--o>n;){let i=this.graph.vertices[n],a=this.graph.vertices[o];if(!i.value.isDrawn||!a.value.isDrawn)continue;let s=h.subtract(i.position,a.position).lengthSq();if(s<this.opts.bondLengthSq){let i=(this.opts.bondLength-r(s))/this.opts.bondLength;e+=i,t[n]+=i,t[o]+=i}}let a=[];for(var n=0;n<this.graph.vertices.length;n++)a.push({id:n,score:t[n]});return a.sort(function(e,t){return t.score-e.score}),{total:e,scores:a,vertexScores:t}}chooseSide(e,t,n){let r=e.getNeighbours(t.id),o=t.getNeighbours(e.id),a=r.length,s=o.length,g=l.merge(r,o),d=[0,0];for(var h=0;h<g.length;h++){let i=this.graph.vertices[g[h]].position;i.sameSideAs(e.position,t.position,n[0])?d[0]++:d[1]++}let c=[0,0];for(var h=0;h<this.graph.vertices.length;h++){let i=this.graph.vertices[h].position;i.sameSideAs(e.position,t.position,n[0])?c[0]++:c[1]++}return{totalSideCount:c,totalPosition:c[0]>c[1]?0:1,sideCount:d,position:d[0]>d[1]?0:1,anCount:a,bnCount:s}}setRingCenter(e){let t=e.getSize(),n=new h(0,0);for(var r=0;r<t;r++)n.add(this.graph.vertices[e.members[r]].position);e.center=n.divide(t)}getSubringCenter(e,t){let n=t.value.originalRings,r=e.center,o=Number.MAX_VALUE;for(var a=0;a<n.length;a++)for(var s=0;s<e.rings.length;s++)n[a]===e.rings[s].id&&e.rings[s].getSize()<o&&(r=e.rings[s].center,o=e.rings[s].getSize());return r}drawEdges(e){let t=this,n=Array(this.graph.edges.length);if(n.fill(!1),this.graph.traverseBF(0,function(r){let o=t.graph.getEdges(r.id);for(var a=0;a<o.length;a++){let i=o[a];n[i]||(n[i]=!0,t.drawEdge(i,e))}}),!this.bridgedRing)for(var r=0;r<this.rings.length;r++){let e=this.rings[r];this.isRingAromatic(e)&&this.canvasWrapper.drawAromaticityRing(e)}}drawEdge(e,t){let n=this,i=this.graph.edges[e],r=this.graph.vertices[i.sourceId],o=this.graph.vertices[i.targetId],s=r.value.element,g=o.value.element;if((!r.value.isDrawn||!o.value.isDrawn)&&"default"===this.opts.atomVisualization)return;let d=r.position,a=o.position,p=this.getEdgeNormals(i),u=l.clone(p);if(u[0].multiplyScalar(10).add(d),u[1].multiplyScalar(10).add(d),"="===i.bondType||"="===this.getRingbondType(r,o)||i.isPartOfAromaticRing&&this.bridgedRing){let e=this.areVerticesInSameRing(r,o),t=this.chooseSide(r,o,u);if(e){let e=this.getLargestOrAromaticCommonRing(r,o),t=e.center;p[0].multiplyScalar(n.opts.bondSpacing),p[1].multiplyScalar(n.opts.bondSpacing);let l=null;l=t.sameSideAs(r.position,o.position,h.add(d,p[0]))?new c(h.add(d,p[0]),h.add(a,p[0]),s,g):new c(h.add(d,p[1]),h.add(a,p[1]),s,g),l.shorten(this.opts.bondLength-this.opts.shortBondLength*this.opts.bondLength),i.isPartOfAromaticRing?this.canvasWrapper.drawLine(l,!0):this.canvasWrapper.drawLine(l),this.canvasWrapper.drawLine(new c(d,a,s,g))}else if(i.center||r.isTerminal()&&o.isTerminal()){p[0].multiplyScalar(n.opts.halfBondSpacing),p[1].multiplyScalar(n.opts.halfBondSpacing);let e=new c(h.add(d,p[0]),h.add(a,p[0]),s,g),t=new c(h.add(d,p[1]),h.add(a,p[1]),s,g);this.canvasWrapper.drawLine(e),this.canvasWrapper.drawLine(t)}else if(0==t.anCount&&1<t.bnCount||0==t.bnCount&&1<t.anCount){p[0].multiplyScalar(n.opts.halfBondSpacing),p[1].multiplyScalar(n.opts.halfBondSpacing);let e=new c(h.add(d,p[0]),h.add(a,p[0]),s,g),t=new c(h.add(d,p[1]),h.add(a,p[1]),s,g);this.canvasWrapper.drawLine(e),this.canvasWrapper.drawLine(t)}else if(t.sideCount[0]>t.sideCount[1]){p[0].multiplyScalar(n.opts.bondSpacing),p[1].multiplyScalar(n.opts.bondSpacing);let e=new c(h.add(d,p[0]),h.add(a,p[0]),s,g);e.shorten(this.opts.bondLength-this.opts.shortBondLength*this.opts.bondLength),this.canvasWrapper.drawLine(e),this.canvasWrapper.drawLine(new c(d,a,s,g))}else if(t.sideCount[0]<t.sideCount[1]){p[0].multiplyScalar(n.opts.bondSpacing),p[1].multiplyScalar(n.opts.bondSpacing);let e=new c(h.add(d,p[1]),h.add(a,p[1]),s,g);e.shorten(this.opts.bondLength-this.opts.shortBondLength*this.opts.bondLength),this.canvasWrapper.drawLine(e),this.canvasWrapper.drawLine(new c(d,a,s,g))}else if(t.totalSideCount[0]>t.totalSideCount[1]){p[0].multiplyScalar(n.opts.bondSpacing),p[1].multiplyScalar(n.opts.bondSpacing);let e=new c(h.add(d,p[0]),h.add(a,p[0]),s,g);e.shorten(this.opts.bondLength-this.opts.shortBondLength*this.opts.bondLength),this.canvasWrapper.drawLine(e),this.canvasWrapper.drawLine(new c(d,a,s,g))}else if(t.totalSideCount[0]<=t.totalSideCount[1]){p[0].multiplyScalar(n.opts.bondSpacing),p[1].multiplyScalar(n.opts.bondSpacing);let e=new c(h.add(d,p[1]),h.add(a,p[1]),s,g);e.shorten(this.opts.bondLength-this.opts.shortBondLength*this.opts.bondLength),this.canvasWrapper.drawLine(e),this.canvasWrapper.drawLine(new c(d,a,s,g))}else;}else if("#"===i.bondType){p[0].multiplyScalar(n.opts.bondSpacing/1.5),p[1].multiplyScalar(n.opts.bondSpacing/1.5);let e=new c(h.add(d,p[0]),h.add(a,p[0]),s,g),t=new c(h.add(d,p[1]),h.add(a,p[1]),s,g);this.canvasWrapper.drawLine(e),this.canvasWrapper.drawLine(t),this.canvasWrapper.drawLine(new c(d,a,s,g))}else if("."===i.bondType);else{let e=r.value.isStereoCenter,t=o.value.isStereoCenter;"up"===i.wedge?this.canvasWrapper.drawWedge(new c(d,a,s,g,e,t)):"down"===i.wedge?this.canvasWrapper.drawDashedWedge(new c(d,a,s,g,e,t)):this.canvasWrapper.drawLine(new c(d,a,s,g,e,t))}if(t){let t=h.midpoint(d,a);this.canvasWrapper.drawDebugText(t.x,t.y,"e: "+e)}}drawVertices(e){for(var t=Math.abs,n=this.graph.vertices.length,n=0;n<this.graph.vertices.length;n++){let i=this.graph.vertices[n],r=i.value,a=0,s=0,g=i.value.bondCount,d=r.element,c=v.maxBonds[d]-g,p=i.getTextDirection(this.graph.vertices),u=!!(this.opts.terminalCarbons||"C"!==d||r.hasAttachedPseudoElements)&&i.isTerminal(),f="C"===r.element;if("N"===r.element&&r.isPartOfAromaticRing&&(c=0),r.bracket&&(c=r.bracket.hcount,a=r.bracket.charge,s=r.bracket.isotope),"allballs"===this.opts.atomVisualization)this.canvasWrapper.drawBall(i.position.x,i.position.y,d);else if(r.isDrawn&&(!f||r.drawExplicit||u||r.hasAttachedPseudoElements)||1===this.graph.vertices.length)"default"===this.opts.atomVisualization?this.canvasWrapper.drawText(i.position.x,i.position.y,d,c,p,u,a,s,r.getAttachedPseudoElements()):"balls"===this.opts.atomVisualization&&this.canvasWrapper.drawBall(i.position.x,i.position.y,d);else if(2===i.getNeighbourCount()&&!0==i.forcePositioned){let e=this.graph.vertices[i.neighbours[0]].position,n=this.graph.vertices[i.neighbours[1]].position,r=h.threePointangle(i.position,e,n);.1>t(o-r)&&this.canvasWrapper.drawPoint(i.position.x,i.position.y,d)}if(e){let e="v: "+i.id+" "+l.print(r.ringbonds);this.canvasWrapper.drawDebugText(i.position.x,i.position.y,e)}else;}if(this.opts.debug)for(var n=0;n<this.rings.length;n++){let e=this.rings[n].center;this.canvasWrapper.drawDebugPoint(e.x,e.y,"r: "+this.rings[n].id)}}position(){let e=null;for(var t=0;t<this.graph.vertices.length;t++)if(null!==this.graph.vertices[t].value.bridgedRing){e=this.graph.vertices[t];break}for(var t=0;t<this.rings.length;t++)this.rings[t].isBridged&&(e=this.graph.vertices[this.rings[t].members[0]]);0<this.rings.length&&null===e&&(e=this.graph.vertices[this.rings[0].members[0]]),null===e&&(e=this.graph.vertices[0]),this.createNextBond(e,null,0)}backupRingInformation(){this.originalRings=[],this.originalRingConnections=[];for(var e=0;e<this.rings.length;e++)this.originalRings.push(this.rings[e]);for(var e=0;e<this.ringConnections.length;e++)this.originalRingConnections.push(this.ringConnections[e]);for(var e=0;e<this.graph.vertices.length;e++)this.graph.vertices[e].value.backupRings()}restoreRingInformation(){let e=this.getBridgedRings();this.rings=[],this.ringConnections=[];for(var t=0;t<e.length;t++){let i=e[t];for(var n=0;n<i.rings.length;n++){let e=i.rings[n];this.originalRings[e.id].center=e.center}}for(var t=0;t<this.originalRings.length;t++)this.rings.push(this.originalRings[t]);for(var t=0;t<this.originalRingConnections.length;t++)this.ringConnections.push(this.originalRingConnections[t]);for(var t=0;t<this.graph.vertices.length;t++)this.graph.vertices[t].value.restoreRings()}createRing(e,t=null,r=null,o=null){if(e.positioned)return;t=t?t:new h(0,0);let s=e.getOrderedNeighbours(this.ringConnections),g=r?h.subtract(r.position,t).angle():0,l=d.polyCircumradius(this.opts.bondLength,e.getSize()),c=d.centralAngle(e.getSize());e.centralAngle=c;let p=g,u=this,v=r?r.id:null;if(-1===e.members.indexOf(v)&&(r&&(r.positioned=!1),v=e.members[0]),e.isBridged){this.graph.kkLayout(e.members.slice(),t,r.id,e,this.opts.bondLength,this.opts.kkThreshold,this.opts.kkInnerThreshold,this.opts.kkMaxIteration,this.opts.kkMaxInnerIteration,this.opts.kkMaxEnergy),e.positioned=!0,this.setRingCenter(e),t=e.center;for(var f=0;f<e.rings.length;f++)this.setRingCenter(e.rings[f])}else e.eachMember(this.graph.vertices,function(r){let o=u.graph.vertices[r];o.positioned||o.setPosition(t.x+i(p)*l,t.y+n(p)*l),p+=c,(!e.isBridged||3>e.rings.length)&&(o.angle=p,o.positioned=!0)},v,o?o.id:null);e.positioned=!0,e.center=t;for(var f=0;f<s.length;f++){let n=this.getRing(s[f].neighbour);if(n.positioned)continue;let i=m.getVertices(this.ringConnections,e.id,n.id);if(2===i.length){e.isFused=!0,n.isFused=!0;let o=this.graph.vertices[i[0]],a=this.graph.vertices[i[1]],s=h.midpoint(o.position,a.position),g=h.normals(o.position,a.position);g[0].normalize(),g[1].normalize();let l=d.polyCircumradius(this.opts.bondLength,n.getSize()),r=d.apothem(l,n.getSize());g[0].multiplyScalar(r).add(s),g[1].multiplyScalar(r).add(s);let c=g[0];h.subtract(t,g[1]).lengthSq()>h.subtract(t,g[0]).lengthSq()&&(c=g[1]);let p=h.subtract(o.position,c),u=h.subtract(a.position,c);-1===p.clockwise(u)?!n.positioned&&this.createRing(n,c,o,a):!n.positioned&&this.createRing(n,c,a,o)}else if(1===i.length){e.isSpiro=!0,n.isSpiro=!0;let o=this.graph.vertices[i[0]],a=h.subtract(t,o.position);a.invert(),a.normalize();let s=d.polyCircumradius(this.opts.bondLength,n.getSize());a.multiplyScalar(s),a.add(o.position),n.positioned||this.createRing(n,a,o)}}for(var f=0;f<e.members.length;f++){let t=this.graph.vertices[e.members[f]],n=t.neighbours;for(var b=0;b<n.length;b++){let e=this.graph.vertices[n[b]];e.positioned||(e.value.isConnectedToRing=!0,this.createNextBond(e,t,0))}}}rotateSubtree(e,t,n,r){let o=this;this.graph.traverseTree(e,t,function(e){e.position.rotateAround(n,r);for(var t=0;t<e.value.anchoredRings.length;t++){let i=o.rings[e.value.anchoredRings[t]];i&&i.center.rotateAround(n,r)}})}getSubtreeOverlapScore(e,t,n){let i=this,r=0,o=new h(0,0),a=0;return this.graph.traverseTree(e,t,function(e){if(e.value.isDrawn){let t=n[e.id];t>i.opts.overlapSensitivity&&(r+=t,a++);let s=i.graph.vertices[e.id].position.clone();s.multiplyScalar(t),o.add(s)}}),o.divide(r),{value:r/a,center:o}}getCurrentCenterOfMass(){let e=new h(0,0),t=0;for(var n=0;n<this.graph.vertices.length;n++){let i=this.graph.vertices[n];i.positioned&&(e.add(i.position),t++)}return e.divide(t)}getCurrentCenterOfMassInNeigbourhood(e,t=2*this.opts.bondLength){let n=new h(0,0),r=0;for(var o=0;o<this.graph.vertices.length;o++){let i=this.graph.vertices[o];i.positioned&&e.distanceSq(i.position)<t*t&&(n.add(i.position),r++)}return n.divide(r)}resolvePrimaryOverlaps(){let e=[],t=Array(this.graph.vertices.length);for(var n=0;n<this.rings.length;n++){let i=this.rings[n];for(var r=0;r<i.members.length;r++){let n=this.graph.vertices[i.members[r]];if(t[n.id])continue;t[n.id]=!0;let o=this.getNonRingNeighbours(n.id);if(1<o.length){let t=[];for(var a=0;a<n.value.rings.length;a++)t.push(n.value.rings[a]);e.push({common:n,rings:t,vertices:o})}else if(1===o.length&&2===n.value.rings.length){let t=[];for(var a=0;a<n.value.rings.length;a++)t.push(n.value.rings[a]);e.push({common:n,rings:t,vertices:o})}}}for(var n=0;n<e.length;n++){let t=e[n];if(2===t.vertices.length){let e=t.vertices[0],n=t.vertices[1];if(!e.value.isDrawn||!n.value.isDrawn)continue;let i=(2*o-this.getRing(t.rings[0]).getAngle())/6;this.rotateSubtree(e.id,t.common.id,i,t.common.position),this.rotateSubtree(n.id,t.common.id,-i,t.common.position);let r=this.getOverlapScore(),a=this.getSubtreeOverlapScore(e.id,t.common.id,r.vertexScores),s=this.getSubtreeOverlapScore(n.id,t.common.id,r.vertexScores),g=a.value+s.value;this.rotateSubtree(e.id,t.common.id,-2*i,t.common.position),this.rotateSubtree(n.id,t.common.id,2*i,t.common.position),r=this.getOverlapScore(),a=this.getSubtreeOverlapScore(e.id,t.common.id,r.vertexScores),s=this.getSubtreeOverlapScore(n.id,t.common.id,r.vertexScores),a.value+s.value>g&&(this.rotateSubtree(e.id,t.common.id,2*i,t.common.position),this.rotateSubtree(n.id,t.common.id,-2*i,t.common.position))}else 1!==t.vertices.length||2!==t.rings.length}}resolveSecondaryOverlaps(e){for(var t=0;t<e.length;t++)if(e[t].score>this.opts.overlapSensitivity){let n=this.graph.vertices[e[t].id];if(n.isTerminal()){let e=this.getClosestVertex(n);if(e){let t=null;t=e.isTerminal()?0===e.id?this.graph.vertices[1].position:e.previousPosition:0===e.id?this.graph.vertices[1].position:e.position;let i=0===n.id?this.graph.vertices[1].position:n.previousPosition;n.position.rotateAwayFrom(t,i,d.toRad(20))}}}}getLastVertexWithAngle(e){let t=0,n=null;for(;!t&&e;)n=this.graph.vertices[e],t=n.angle,e=n.parentVertexId;return n}createNextBond(e,t=null,n=0,r=!1,o=!1){if(e.positioned&&!o)return;let c=!1;if(t){let n=this.graph.getEdge(e.id,t.id);("/"===n.bondType||"\\"===n.bondType)&&1==++this.doubleBondConfigCount%2&&null===this.doubleBondConfig&&(this.doubleBondConfig=n.bondType,c=!0,null===t.parentVertexId&&e.value.branchBond&&("/"===this.doubleBondConfig?this.doubleBondConfig="\\":"\\"===this.doubleBondConfig&&(this.doubleBondConfig="/")))}if(!o)if(!t){let t=new h(this.opts.bondLength,0);t.rotate(d.toRad(-60)),e.previousPosition=t,e.setPosition(this.opts.bondLength,0),e.angle=d.toRad(-60),null===e.value.bridgedRing&&(e.positioned=!0)}else if(0<t.value.rings.length){let n=t.neighbours,i=null,r=new h(0,0);if(null===t.value.bridgedRing&&1<t.value.rings.length)for(var p=0;p<n.length;p++){let e=this.graph.vertices[n[p]];if(l.containsAll(e.value.rings,t.value.rings)){i=e;break}}if(null===i){for(var p=0;p<n.length;p++){let e=this.graph.vertices[n[p]];e.positioned&&this.areVerticesInSameRing(e,t)&&r.add(h.subtract(e.position,t.position))}r.invert().normalize().multiplyScalar(this.opts.bondLength).add(t.position)}else r=i.position.clone().rotateAround(Math.PI,t.position);e.previousPosition=t.position,e.setPositionFromVector(r),e.positioned=!0}else{let i=new h(this.opts.bondLength,0);i.rotate(n),i.add(t.position),e.setPositionFromVector(i),e.previousPosition=t.position,e.positioned=!0}if(null!==e.value.bridgedRing){let t=this.getRing(e.value.bridgedRing);if(!t.positioned){let n=h.subtract(e.previousPosition,e.position);n.invert(),n.normalize();let i=d.polyCircumradius(this.opts.bondLength,t.members.length);n.multiplyScalar(i),n.add(e.position),this.createRing(t,n,e)}}else if(0<e.value.rings.length){let t=this.getRing(e.value.rings[0]);if(!t.positioned){let n=h.subtract(e.previousPosition,e.position);n.invert(),n.normalize();let i=d.polyCircumradius(this.opts.bondLength,t.getSize());n.multiplyScalar(i),n.add(e.position),this.createRing(t,n,e)}}else{let n=e.value.isStereoCenter,i=e.getNeighbours(),o=[];for(var p=0;p<i.length;p++)this.graph.vertices[i[p]].value.isDrawn&&o.push(i[p]);t&&(o=l.remove(o,t.id));let u=e.getAngle();if(1===o.length){let n=this.graph.vertices[o[0]];if("#"===e.value.bondType||t&&"#"===t.value.bondType||"="===e.value.bondType&&t&&0===t.value.rings.length&&"="===t.value.bondType&&"-"!==e.value.branchBond){if(e.value.drawExplicit=!1,t){let n=this.graph.getEdge(e.id,t.id);n.center=!0}let i=this.graph.getEdge(e.id,n.id);i.center=!0,("#"===e.value.bondType||t&&"#"===t.value.bondType)&&(n.angle=0),n.drawExplicit=!0,this.createNextBond(n,e,u+n.angle)}else if(t&&0<t.value.rings.length){let t=d.toRad(60),i=-t,r=new h(this.opts.bondLength,0),o=new h(this.opts.bondLength,0);r.rotate(t).add(e.position),o.rotate(i).add(e.position);let a=this.getCurrentCenterOfMass(),s=r.distanceSq(a),g=o.distanceSq(a);n.angle=s<g?i:t,this.createNextBond(n,e,u+n.angle)}else{let i=e.angle;if(t&&3<t.neighbours.length)i=0<i?s(1.0472,i):0>i?g(-1.0472,i):1.0472;else if(!i){let t=this.getLastVertexWithAngle(e.id);i=t.angle,i||(i=1.0472)}if(t&&!c){let t=this.graph.getEdge(e.id,n.id).bondType;"/"===t?("/"===this.doubleBondConfig||"\\"===this.doubleBondConfig&&(i=-i),this.doubleBondConfig=null):"\\"===t&&("/"===this.doubleBondConfig?i=-i:"\\"===this.doubleBondConfig,this.doubleBondConfig=null)}n.angle=r?i:-i,this.createNextBond(n,e,u+n.angle)}}else if(2===o.length){let n=e.angle;n||(n=1.0472);let i=this.graph.getTreeDepth(o[0],e.id),a=this.graph.getTreeDepth(o[1],e.id),s=this.graph.vertices[o[0]],g=this.graph.vertices[o[1]];s.value.subtreeDepth=i,g.value.subtreeDepth=a;let r=this.graph.getTreeDepth(t?t.id:null,e.id);t&&(t.value.subtreeDepth=r);let d=0,l=1;"C"===g.value.element&&"C"!==s.value.element&&1<a&&5>i?(d=1,l=0):"C"!==g.value.element&&"C"===s.value.element&&1<i&&5>a?(d=0,l=1):a>i&&(d=1,l=0);let h=this.graph.vertices[o[d]],c=this.graph.vertices[o[l]],p=this.graph.getEdge(e.id,h.id),v=this.graph.getEdge(e.id,c.id),f=!1;r<i&&r<a&&(f=!0),c.angle=n,h.angle=-n,"\\"===this.doubleBondConfig?"\\"===c.value.branchBond&&(c.angle=-n,h.angle=n):"/"===this.doubleBondConfig&&"/"===c.value.branchBond&&(c.angle=-n,h.angle=n),this.createNextBond(c,e,u+c.angle,f),this.createNextBond(h,e,u+h.angle,f)}else if(3===o.length){let n=this.graph.getTreeDepth(o[0],e.id),i=this.graph.getTreeDepth(o[1],e.id),a=this.graph.getTreeDepth(o[2],e.id),g=this.graph.vertices[o[0]],s=this.graph.vertices[o[1]],l=this.graph.vertices[o[2]];g.value.subtreeDepth=n,s.value.subtreeDepth=i,l.value.subtreeDepth=a,i>n&&i>a?(g=this.graph.vertices[o[1]],s=this.graph.vertices[o[0]],l=this.graph.vertices[o[2]]):a>n&&a>i&&(g=this.graph.vertices[o[2]],s=this.graph.vertices[o[0]],l=this.graph.vertices[o[1]]),t&&1>t.value.rings.length&&1>g.value.rings.length&&1>s.value.rings.length&&1>l.value.rings.length&&1===this.graph.getTreeDepth(s.id,e.id)&&1===this.graph.getTreeDepth(l.id,e.id)&&1<this.graph.getTreeDepth(g.id,e.id)?(g.angle=-e.angle,0<=e.angle?(s.angle=d.toRad(30),l.angle=d.toRad(90)):(s.angle=-d.toRad(30),l.angle=-d.toRad(90)),this.createNextBond(g,e,u+g.angle),this.createNextBond(s,e,u+s.angle),this.createNextBond(l,e,u+l.angle)):(g.angle=0,s.angle=d.toRad(90),l.angle=-d.toRad(90),this.createNextBond(g,e,u+g.angle),this.createNextBond(s,e,u+s.angle),this.createNextBond(l,e,u+l.angle))}else if(4===o.length){let t=this.graph.getTreeDepth(o[0],e.id),n=this.graph.getTreeDepth(o[1],e.id),i=this.graph.getTreeDepth(o[2],e.id),r=this.graph.getTreeDepth(o[3],e.id),a=this.graph.vertices[o[0]],s=this.graph.vertices[o[1]],g=this.graph.vertices[o[2]],l=this.graph.vertices[o[3]];a.value.subtreeDepth=t,s.value.subtreeDepth=n,g.value.subtreeDepth=i,l.value.subtreeDepth=r,n>t&&n>i&&n>r?(a=this.graph.vertices[o[1]],s=this.graph.vertices[o[0]],g=this.graph.vertices[o[2]],l=this.graph.vertices[o[3]]):i>t&&i>n&&i>r?(a=this.graph.vertices[o[2]],s=this.graph.vertices[o[0]],g=this.graph.vertices[o[1]],l=this.graph.vertices[o[3]]):r>t&&r>n&&r>i&&(a=this.graph.vertices[o[3]],s=this.graph.vertices[o[0]],g=this.graph.vertices[o[1]],l=this.graph.vertices[o[2]]),a.angle=-d.toRad(36),s.angle=d.toRad(36),g.angle=-d.toRad(108),l.angle=d.toRad(108),this.createNextBond(a,e,u+a.angle),this.createNextBond(s,e,u+s.angle),this.createNextBond(g,e,u+g.angle),this.createNextBond(l,e,u+l.angle)}}}getCommonRingbondNeighbour(e){let t=e.neighbours;for(var n=0;n<t.length;n++){let i=this.graph.vertices[t[n]];if(l.containsAll(i.value.rings,e.value.rings))return i}return null}isPointInRing(e){for(var t=0;t<this.rings.length;t++){let n=this.rings[t];if(!n.positioned)continue;let i=d.polyCircumradius(this.opts.bondLength,n.getSize());if(e.distanceSq(n.center)<i*i)return!0}return!1}isEdgeInRing(e){let t=this.graph.vertices[e.sourceId],n=this.graph.vertices[e.targetId];return this.areVerticesInSameRing(t,n)}isEdgeRotatable(e){let t=this.graph.vertices[e.sourceId],n=this.graph.vertices[e.targetId];return!("-"!==e.bondType)&&!(t.isTerminal()||n.isTerminal())&&!(0<t.value.rings.length&&0<n.value.rings.length&&this.areVerticesInSameRing(t,n))}isRingAromatic(e){for(var t=0;t<e.members.length;t++){let n=this.graph.vertices[e.members[t]];if(!n.value.isPartOfAromaticRing)return!1}return!0}getEdgeNormals(e){let t=this.graph.vertices[e.sourceId].position,n=this.graph.vertices[e.targetId].position,i=h.units(t,n);return i}getNonRingNeighbours(e){let t=[],n=this.graph.vertices[e],r=n.neighbours;for(var o=0;o<r.length;o++){let e=this.graph.vertices[r[o]],i=l.intersection(n.value.rings,e.value.rings).length;0===i&&!1==e.value.isBridge&&t.push(e)}return t}annotateStereochemistry(){for(var e=0;e<this.graph.vertices.length;e++){let i=this.graph.vertices[e];if(!i.value.isStereoCenter)continue;let o=i.getNeighbours(),a=o.length,s=Array(a);for(var t=0;t<a;t++){let e=new Uint8Array(this.graph.vertices.length),r=[[]];e[i.id]=1,this.visitStereochemistry(o[t],i.id,e,r,10,0);for(var n=0;n<r.length;n++)r[n].sort(function(e,t){return t-e});s[t]=[t,r]}let g=0,l=0;for(var t=0;t<s.length;t++){s[t][1].length>g&&(g=s[t][1].length);for(var n=0;n<s[t][1].length;n++)s[t][1][n].length>l&&(l=s[t][1][n].length)}for(var t=0;t<s.length;t++){let e=g-s[t][1].length;for(var n=0;n<e;n++)s[t][1].push([]);s[t][1].push([o[t]]);for(var n=0;n<s[t][1].length;n++){let e=l-s[t][1][n].length;for(var r=0;r<e;r++)s[t][1][n].push(0)}}s.sort(function(e,t){for(var n=0;n<e[1].length;n++)for(var i=0;i<e[1][n].length;i++){if(e[1][n][i]>t[1][n][i])return-1;if(e[1][n][i]<t[1][n][i])return 1}return 0});let h=new Uint8Array(a);for(var t=0;t<a;t++)h[t]=s[t][0],i.value.priority=t;let c=this.graph.vertices[o[h[0]]].position,p=this.graph.vertices[o[h[1]]].position,u=this.graph.vertices[o[h[2]]].position,v=c.relativeClockwise(p,i.position),f=c.relativeClockwise(u,i.position),m=-1===v,b="@"===i.value.bracket.chirality?-1:1,x=1==d.parityOfPermutation(h)*b?"R":"S",y="down",S="up";(m&&"R"!==x||!m&&"S"!==x)&&(i.value.hydrogenDirection="up",y="up",S="down"),i.value.hasHydrogen&&(this.graph.getEdge(i.id,o[h[h.length-1]]).wedge=y);let C=Array(o.length-1),R=1<i.value.rings.length&&i.value.hasHydrogen,A=i.value.hasHydrogen?1:0;for(var t=0;t<h.length-A;t++){C[t]=new Uint32Array(2);let e=this.graph.vertices[o[h[t]]];C[t][0]+=e.value.isStereoCenter?0:1e5,C[t][0]+=this.areVerticesInSameRing(e,i)?0:1e4,C[t][0]+=e.value.isHeteroAtom()?1e3:0,C[t][0]-=0===e.value.subtreeDepth?1e3:0,C[t][0]+=1e3-e.value.subtreeDepth,C[t][1]=o[h[t]]}if(C.sort(function(e,t){return e[0]>t[0]?-1:e[0]<t[0]?1:0}),!R){let e=C[0][1];if(i.value.hasHydrogen)this.graph.getEdge(i.id,e).wedge=S;else{let n=S;for(var t=h.length-1;0<=t&&(n=n===y?S:y,o[h[t]]!==e);t--);this.graph.getEdge(i.id,e).wedge=n}}i.value.chirality=x}}visitStereochemistry(e,t,n,r,o,a,s=0){n[e]=1;let g=this.graph.vertices[e],d=g.value.getAtomicNumber();r.length<=a&&r.push([]);for(var l=0;l<this.graph.getEdge(e,t).weight;l++)r[a].push(1e3*s+d);let h=this.graph.vertices[e].neighbours;for(var l=0;l<h.length;l++)1!==n[h[l]]&&a<o-1&&this.visitStereochemistry(h[l],e,n.slice(),r,o,a+1,d);if(a<o-1){let t=0;for(var l=0;l<h.length;l++)t+=this.graph.getEdge(e,h[l]).weight;for(var l=0;l<g.value.getMaxBonds()-t;l++)r.length<=a+1&&r.push([]),r[a+1].push(1e3*d+1)}}initPseudoElements(){for(var e=0;e<this.graph.vertices.length;e++){const n=this.graph.vertices[e],i=n.neighbours;let r=Array(i.length);for(var t=0;t<i.length;t++)r[t]=this.graph.vertices[i[t]];if(3>n.getNeighbourCount()||0<n.value.rings.length)continue;if("P"===n.value.element)continue;if("C"===n.value.element&&3===r.length&&"N"===r[0].value.element&&"N"===r[1].value.element&&"N"===r[2].value.element)continue;let o=0,a=0;for(var t=0;t<r.length;t++){let e=r[t],n=e.value.element,i=e.getNeighbourCount();"C"!==n&&"H"!==n&&1===i&&o++,1<i&&a++}if(1<a||2>o)continue;let s=null;for(var t=0;t<r.length;t++){let e=r[t];1<e.getNeighbourCount()&&(s=e)}for(var t=0;t<r.length;t++){let e=r[t];if(1<e.getNeighbourCount())continue;e.value.isDrawn=!1;let i=v.maxBonds[e.value.element]-e.value.bondCount,o="";e.value.bracket&&(i=e.value.bracket.hcount,o=e.value.bracket.charge||0),n.value.attachPseudoElement(e.value.element,s?s.value.element:null,i,o)}}for(var e=0;e<this.graph.vertices.length;e++){const n=this.graph.vertices[e],i=n.value,r=i.element;if("C"===r||"H"===r||!i.isDrawn)continue;const o=n.neighbours;let a=Array(o.length);for(var t=0;t<o.length;t++)a[t]=this.graph.vertices[o[t]];for(var t=0;t<a.length;t++){let e=a[t].value;if(!e.hasAttachedPseudoElements||2!==e.getAttachedPseudoElementsCount())continue;const i=e.getAttachedPseudoElements();i.hasOwnProperty("0O")&&i.hasOwnProperty("3C")&&(e.isDrawn=!1,n.value.attachPseudoElement("Ac","",0))}}}}},{"./ArrayHelper":2,"./Atom":3,"./CanvasWrapper":4,"./Edge":6,"./Graph":7,"./Line":8,"./MathHelper":9,"./Ring":11,"./RingConnection":12,"./SSSR":13,"./Vector2":14,"./Vertex":15}],6:[function(e,t){"use strict";class n{constructor(e,t,n=1){this.id=null,this.sourceId=e,this.targetId=t,this.weight=n,this.bondType="-",this.isPartOfAromaticRing=!1,this.center=!1,this.wedge=""}setBondType(e){this.bondType=e,this.weight=n.bonds[e]}static get bonds(){return{"-":1,"/":1,"\\":1,"=":2,"#":3,$:4}}}t.exports=n},{}],7:[function(e,t){"use strict";var n=Math.pow,r=Math.sqrt,o=Math.min;const s=e("./MathHelper"),g=e("./Vector2"),d=e("./Vertex"),l=e("./Edge"),h=e("./Ring"),c=e("./Atom");class p{constructor(e,t=!1){this.vertices=[],this.edges=[],this.vertexIdsToEdgeId={},this.isomeric=t,this._time=0,this._init(e)}_init(e,t=0,n=null,r=!1){let o=new c(e.atom.element?e.atom.element:e.atom,e.bond);o.branchBond=e.branchBond,o.ringbonds=e.ringbonds,o.bracket=e.atom.element?e.atom:null;let a=new d(o),s=this.vertices[n];if(this.addVertex(a),null!==n){a.setParentVertexId(n),a.value.addNeighbouringElement(s.value.element),s.addChild(a.id),s.value.addNeighbouringElement(o.element),s.spanningTreeChildren.push(a.id);let e=new l(n,a.id,1),t=null;r?(e.setBondType(a.value.branchBond||"-"),t=a.id,e.setBondType(a.value.branchBond||"-"),t=a.id):(e.setBondType(s.value.bondType||"-"),t=s.id);this.addEdge(e)}let g=e.ringbondCount+1;o.bracket&&(g+=o.bracket.hcount);let h=0;if(o.bracket&&o.bracket.chirality){o.isStereoCenter=!0,h=o.bracket.hcount;for(var p=0;p<h;p++)this._init({atom:"H",isBracket:"false",branches:[],branchCount:0,ringbonds:[],ringbondCount:!1,next:null,hasNext:!1,bond:"-"},p,a.id,!0)}for(var p=0;p<e.branchCount;p++)this._init(e.branches[p],p+g,a.id,!0);e.hasNext&&this._init(e.next,e.branchCount+g,a.id)}clear(){this.vertices=[],this.edges=[],this.vertexIdsToEdgeId={}}addVertex(e){return e.id=this.vertices.length,this.vertices.push(e),e.id}addEdge(e){let t=this.vertices[e.sourceId],n=this.vertices[e.targetId];return e.id=this.edges.length,this.edges.push(e),this.vertexIdsToEdgeId[e.sourceId+"_"+e.targetId]=e.id,this.vertexIdsToEdgeId[e.targetId+"_"+e.sourceId]=e.id,e.isPartOfAromaticRing=t.value.isPartOfAromaticRing&&n.value.isPartOfAromaticRing,t.value.bondCount+=e.weight,n.value.bondCount+=e.weight,t.edges.push(e.id),n.edges.push(e.id),e.id}getEdge(e,t){let n=this.vertexIdsToEdgeId[e+"_"+t];return n===void 0?null:this.edges[n]}getEdges(e){let t=[],n=this.vertices[e];for(var r=0;r<n.neighbours.length;r++)t.push(this.vertexIdsToEdgeId[e+"_"+n.neighbours[r]]);return t}hasEdge(e,t){return this.vertexIdsToEdgeId[e+"_"+t]!==void 0}getVertexList(){let e=[this.vertices.length];for(var t=0;t<this.vertices.length;t++)e[t]=this.vertices[t].id;return e}getEdgeList(){let e=Array(this.edges.length);for(var t=0;t<this.edges.length;t++)e[t]=[this.edges[t].sourceId,this.edges[t].targetId];return e}getAdjacencyMatrix(){let e=this.vertices.length,t=Array(e);for(var n=0;n<e;n++)t[n]=Array(e),t[n].fill(0);for(var n=0;n<this.edges.length;n++){let e=this.edges[n];t[e.sourceId][e.targetId]=1,t[e.targetId][e.sourceId]=1}return t}getComponentsAdjacencyMatrix(){let e=this.vertices.length,t=Array(e),n=this.getBridges();for(var r=0;r<e;r++)t[r]=Array(e),t[r].fill(0);for(var r=0;r<this.edges.length;r++){let e=this.edges[r];t[e.sourceId][e.targetId]=1,t[e.targetId][e.sourceId]=1}for(var r=0;r<n.length;r++)t[n[r][0]][n[r][1]]=0,t[n[r][1]][n[r][0]]=0;return t}getSubgraphAdjacencyMatrix(e){let t=e.length,n=Array(t);for(var r=0;r<t;r++){n[r]=Array(t),n[r].fill(0);for(var o=0;o<t;o++)r!=o&&this.hasEdge(e[r],e[o])&&(n[r][o]=1)}return n}getDistanceMatrix(){let e=this.vertices.length,t=this.getAdjacencyMatrix(),n=Array(e);for(var r=0;r<e;r++)n[r]=Array(e),n[r].fill(1/0);for(var r=0;r<e;r++)for(var o=0;o<e;o++)1===t[r][o]&&(n[r][o]=1);for(var a=0;a<e;a++)for(var r=0;r<e;r++)for(var o=0;o<e;o++)n[r][o]>n[r][a]+n[a][o]&&(n[r][o]=n[r][a]+n[a][o]);return n}getSubgraphDistanceMatrix(e){let t=e.length,n=this.getSubgraphAdjacencyMatrix(e),r=Array(t);for(var o=0;o<t;o++)r[o]=Array(t),r[o].fill(1/0);for(var o=0;o<t;o++)for(var a=0;a<t;a++)1===n[o][a]&&(r[o][a]=1);for(var s=0;s<t;s++)for(var o=0;o<t;o++)for(var a=0;a<t;a++)r[o][a]>r[o][s]+r[s][a]&&(r[o][a]=r[o][s]+r[s][a]);return r}getAdjacencyList(){let e=this.vertices.length,t=Array(e);for(var n=0;n<e;n++){t[n]=[];for(var r=0;r<e;r++)n!=r&&this.hasEdge(this.vertices[n].id,this.vertices[r].id)&&t[n].push(r)}return t}getSubgraphAdjacencyList(e){let t=e.length,n=Array(t);for(var r=0;r<t;r++){n[r]=[];for(var o=0;o<t;o++)r!=o&&this.hasEdge(e[r],e[o])&&n[r].push(o)}return n}getBridges(){let e=this.vertices.length,t=Array(e),n=Array(e),r=Array(e),o=Array(e),a=this.getAdjacencyList(),s=[];t.fill(!1),o.fill(null),this._time=0;for(var g=0;g<e;g++)t[g]||this._bridgeDfs(g,t,n,r,o,a,s);return s}traverseBF(e,t){let n=this.vertices.length,r=Array(n);r.fill(!1);for(var o=[e];0<o.length;){let e=o.shift(),n=this.vertices[e];t(n);for(var a=0;a<n.neighbours.length;a++){let e=n.neighbours[a];r[e]||(r[e]=!0,o.push(e))}}}getTreeDepth(e,t){if(null===e||null===t)return 0;let n=this.vertices[e].getSpanningTreeNeighbours(t),r=0;for(var o=0;o<n.length;o++){let t=n[o],i=this.getTreeDepth(t,e);i>r&&(r=i)}return r+1}traverseTree(e,t,n,r=g,o=!1,a=1,s=null){var g=Number.MAX_SAFE_INTEGER;if(null===s&&(s=new Uint8Array(this.vertices.length)),a>r+1||1===s[e])return;s[e]=1;let d=this.vertices[e],l=d.getNeighbours(t);(!o||1<a)&&n(d);for(var h=0;h<l.length;h++)this.traverseTree(l[h],e,n,r,o,a+1,s)}kkLayout(e,t,o,g,d,l=.1,h=.1,c=2e3,p=50,u=1e9){for(var v=e.length;v--;){let t=this.vertices[e[v]];var f=t.neighbours.length}let m=this.getSubgraphDistanceMatrix(e),b=e.length,x=s.polyCircumradius(500,b),y=s.centralAngle(b),S=0,C=new Float32Array(b),R=new Float32Array(b),A=Array(b);for(v=b;v--;){let n=this.vertices[e[v]];n.positioned?(C[v]=n.position.x,R[v]=n.position.y):(C[v]=t.x+Math.cos(S)*x,R[v]=t.y+Math.sin(S)*x),A[v]=n.positioned,S+=y}let T=Array(b);for(v=b;v--;){T[v]=Array(b);for(var f=b;f--;)T[v][f]=d*m[v][f]}let k=Array(b);for(v=b;v--;){k[v]=Array(b);for(var f=b;f--;)k[v][f]=d*n(m[v][f],-2)}let I=Array(b),B=new Float32Array(b),w=new Float32Array(b);for(v=b;v--;)I[v]=Array(b);v=b;for(let n,i,a,s,f,m,x;v--;){n=C[v],i=R[v],a=0,s=0;for(let e=b;e--;)v!==e&&(f=C[e],m=R[e],x=1/r((n-f)*(n-f)+(i-m)*(i-m)),I[v][e]=[k[v][e]*(n-f-T[v][e]*(n-f)*x),k[v][e]*(i-m-T[v][e]*(i-m)*x)],I[e][v]=I[v][e],a+=I[v][e][0],s+=I[v][e][1]);B[v]=a,w[v]=s}let P=function(e){return[B[e]*B[e]+w[e]*w[e],B[e],w[e]]},L=function(){let e=0,t=0,n=0,i=0;for(v=b;v--;){let[r,o,a]=P(v);r>e&&!1===A[v]&&(e=r,t=v,n=o,i=a)}return[t,e,n,i]},E=function(e,t,i){let o=0,a=0,s=0,g=C[e],d=R[e],h=T[e],c=k[e];for(v=b;v--;){if(v===e)continue;let t=C[v],i=R[v],r=h[v],l=c[v],p=(g-t)*(g-t),u=1/n(p+(d-i)*(d-i),1.5);o+=l*(1-r*(d-i)*(d-i)*u),a+=l*(1-r*p*u),s+=l*(r*(g-t)*(d-i)*u)}0==o&&(o=.1),0===a&&(a=.1),0===s&&(s=.1);let p=t/o+i/s;p/=s/o-a/s;let l=-(s*p+t)/o;C[e]+=l,R[e]+=p;let u=I[e];t=0,i=0,g=C[e],d=R[e];let f,m,x,y,S;for(v=b;v--;)e!==v&&(f=C[v],m=R[v],x=u[v][0],y=u[v][1],S=1/r((g-f)*(g-f)+(d-m)*(d-m)),l=c[v]*(g-f-h[v]*(g-f)*S),p=c[v]*(d-m-h[v]*(d-m)*S),u[v]=[l,p],t+=l,i+=p,B[v]+=l-x,w[v]+=p-y);B[e]=t,w[e]=i},O=0,H=0,D=0,N=0,V=0,z=0;for(;u>l&&c>V;)for(V++,[O,u,H,D]=L(),N=u,z=0;N>h&&p>z;)z++,E(O,H,D),[N,H,D]=P(O);for(v=b;v--;){let t=e[v],n=this.vertices[t];n.position.x=C[v],n.position.y=R[v],n.positioned=!0,n.forcePositioned=!0}}_bridgeDfs(e,t,n,r,a,s,g){t[e]=!0,n[e]=r[e]=++this._time;for(var d=0;d<s[e].length;d++){let i=s[e][d];t[i]?i!==a[e]&&(r[e]=o(r[e],n[i])):(a[i]=e,this._bridgeDfs(i,t,n,r,a,s,g),r[e]=o(r[e],r[i]),r[i]>n[e]&&g.push([e,i]))}}static getConnectedComponents(e){let t=e.length,n=Array(t),i=[],r=0;n.fill(!1);for(var o=0;o<t;o++)if(!n[o]){let t=[];n[o]=!0,t.push(o),r++,p._ccGetDfs(o,n,e,t),1<t.length&&i.push(t)}return i}static getConnectedComponentCount(e){let t=e.length,n=Array(t),i=0;n.fill(!1);for(var r=0;r<t;r++)n[r]||(n[r]=!0,i++,p._ccCountDfs(r,n,e));return i}static _ccCountDfs(e,t,n){for(var i=0;i<n[e].length;i++){let r=n[e][i];r&&!t[i]&&e!==i&&(t[i]=!0,p._ccCountDfs(i,t,n))}}static _ccGetDfs(e,t,n,i){for(var r=0;r<n[e].length;r++){let o=n[e][r];o&&!t[r]&&e!==r&&(t[r]=!0,i.push(r),p._ccGetDfs(r,t,n,i))}}}t.exports=p},{"./Atom":3,"./Edge":6,"./MathHelper":9,"./Ring":11,"./Vector2":14,"./Vertex":15}],8:[function(e,t){"use strict";var n=Math.pow,i=Math.sin,o=Math.cos;const a=e("./Vector2");class s{constructor(e=new a(0,0),t=new a(0,0),n=null,i=null,r=!1,o=!1){this.from=e,this.to=t,this.elementFrom=n,this.elementTo=i,this.chiralFrom=r,this.chiralTo=o}clone(){return new s(this.from.clone(),this.to.clone(),this.elementFrom,this.elementTo)}getLength(){return Math.sqrt(n(this.to.x-this.from.x,2)+n(this.to.y-this.from.y,2))}getAngle(){let e=a.subtract(this.getRightVector(),this.getLeftVector());return e.angle()}getRightVector(){return this.from.x<this.to.x?this.to:this.from}getLeftVector(){return this.from.x<this.to.x?this.from:this.to}getRightElement(){return this.from.x<this.to.x?this.elementTo:this.elementFrom}getLeftElement(){return this.from.x<this.to.x?this.elementFrom:this.elementTo}getRightChiral(){return this.from.x<this.to.x?this.chiralTo:this.chiralFrom}getLeftChiral(){return this.from.x<this.to.x?this.chiralFrom:this.chiralTo}setRightVector(e,t){return this.from.x<this.to.x?(this.to.x=e,this.to.y=t):(this.from.x=e,this.from.y=t),this}setLeftVector(e,t){return this.from.x<this.to.x?(this.from.x=e,this.from.y=t):(this.to.x=e,this.to.y=t),this}rotateToXAxis(){let e=this.getLeftVector();return this.setRightVector(e.x+this.getLength(),e.y),this}rotate(e){let t=this.getLeftVector(),n=this.getRightVector(),r=i(e),a=o(e),s=a*(n.x-t.x)-r*(n.y-t.y)+t.x,g=r*(n.x-t.x)-a*(n.y-t.y)+t.y;return this.setRightVector(s,g),this}shortenFrom(e){let t=a.subtract(this.to,this.from);return t.normalize(),t.multiplyScalar(e),this.from.add(t),this}shortenTo(e){let t=a.subtract(this.from,this.to);return t.normalize(),t.multiplyScalar(e),this.to.add(t),this}shortenRight(e){return this.from.x<this.to.x?this.shortenTo(e):this.shortenFrom(e),this}shortenLeft(e){return this.from.x<this.to.x?this.shortenFrom(e):this.shortenTo(e),this}shorten(e){let t=a.subtract(this.from,this.to);return t.normalize(),t.multiplyScalar(e/2),this.to.add(t),this.from.subtract(t),this}}t.exports=s},{"./Vector2":14}],9:[function(e,t){"use strict";var n=Math.round,r=Math.sin,o=Math.cos,a=Math.PI;class g{static round(e,t){return t=t?t:1,+(n(e+"e"+t)+"e-"+t)}static meanAngle(e){let t=0,n=0;for(var a=0;a<e.length;a++)t+=r(e[a]),n+=o(e[a]);return Math.atan2(t/e.length,n/e.length)}static innerAngle(e){return g.toRad(180*(e-2)/e)}static polyCircumradius(e,t){return e/(2*r(a/t))}static apothem(e,t){return e*o(a/t)}static apothemFromSideLength(e,t){let n=g.polyCircumradius(e,t);return g.apothem(n,t)}static centralAngle(e){return g.toRad(360/e)}static toDeg(e){return e*g.degFactor}static toRad(e){return e*g.radFactor}static parityOfPermutation(e){let t=new Uint8Array(e.length),n=0,r=function(n,i=0){return 1===t[n]?i:(i++,t[n]=1,r(e[n],i))};for(var o=0;o<e.length;o++){if(1===t[o])continue;let e=r(o);n+=1-e%2}return n%2?-1:1}static get radFactor(){return a/180}static get degFactor(){return 180/a}static get twoPI(){return 2*a}}t.exports=g},{}],10:[function(e,t){"use strict";t.exports=function(){function e(t,n,i,r){this.message=t,this.expected=n,this.found=i,this.location=r,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}function t(t,n){function i(e,t){return{type:"literal",text:e,ignoreCase:t}}function r(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function o(e){var n,i=Ve[e];if(i)return i;for(n=e-1;!Ve[n];)n--;for(i=Ve[n],i={line:i.line,column:i.column};n<e;)10===t.charCodeAt(n)?(i.line++,i.column=1):i.column++,n++;return Ve[e]=i,i}function a(e,t){var n=o(e),i=o(t);return{start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:i.line,column:i.column}}}function s(e){De<ze||(De>ze&&(ze=De,We=[]),We.push(e))}function g(t,n){return new e(t,null,null,n)}function d(){var e,t,n,i,r,o,a,s,g,p;if(e=De,t=De,n=h(),n!==B){for(i=[],r=l();r!==B;)i.push(r),r=l();if(i!==B){for(r=[],o=De,a=c(),a===B&&(a=null),a===B?(De=o,o=B):(s=b(),s===B?(De=o,o=B):(a=[a,s],o=a));o!==B;)r.push(o),o=De,a=c(),a===B&&(a=null),a===B?(De=o,o=B):(s=b(),s===B?(De=o,o=B):(a=[a,s],o=a));if(r!==B){for(o=[],a=l();a!==B;)o.push(a),a=l();if(o===B)De=t,t=B;else if(a=c(),a===B&&(a=null),a===B)De=t,t=B;else if(s=d(),s===B&&(s=null),s!==B){for(g=[],p=l();p!==B;)g.push(p),p=l();g===B?(De=t,t=B):(n=[n,i,r,o,a,s,g],t=n)}else De=t,t=B}else De=t,t=B}else De=t,t=B}else De=t,t=B;return t!==B&&(Ne=e,t=L(t)),e=t,e}function l(){var e,n,i,r,o,a;return e=De,n=De,40===t.charCodeAt(De)?(i="(",De++):(i=B,s(E)),i===B?(De=n,n=B):(r=c(),r===B&&(r=null),r===B?(De=n,n=B):(o=d(),o===B?(De=n,n=B):(41===t.charCodeAt(De)?(a=")",De++):(a=B,s(O)),a===B?(De=n,n=B):(i=[i,r,o,a],n=i)))),n!==B&&(Ne=e,n=H(n)),e=n,e}function h(){var e,t;return e=De,t=u(),t===B&&(t=v(),t===B&&(t=p(),t===B&&(t=f()))),t!==B&&(Ne=e,t=D(t)),e=t,e}function c(){var e,n;if(e=De,N.test(t.charAt(De))){if(n=t.charAt(De),n===t.charAt(De+1))throw n=B,g("The parser encountered a bond repetition.",De+1);De++}else n=B,s(V);return n!==B&&(Ne=e,n=z(n)),e=n,e}function p(){var e,n,i,r,o,a,g,d,l,h;return e=De,n=De,91===t.charCodeAt(De)?(i="[",De++):(i=B,s(W)),i===B?(De=n,n=B):(r=j(),r===B&&(r=null),r===B?(De=n,n=B):("se"===t.substr(De,2)?(o="se",De+=2):(o=B,s(F)),o===B&&("as"===t.substr(De,2)?(o="as",De+=2):(o=B,s(M)),o===B&&(o=v(),o===B&&(o=m(),o===B&&(o=f())))),o===B?(De=n,n=B):(a=x(),a===B&&(a=null),a===B?(De=n,n=B):(g=R(),g===B&&(g=null),g===B?(De=n,n=B):(d=y(),d===B&&(d=null),d===B?(De=n,n=B):(l=A(),l===B&&(l=null),l===B?(De=n,n=B):(93===t.charCodeAt(De)?(h="]",De++):(h=B,s(q)),h===B?(De=n,n=B):(i=[i,r,o,a,g,d,l,h],n=i)))))))),n!==B&&(Ne=e,n=_(n)),e=n,e}function u(){var e,n,i,r;return e=De,n=De,66===t.charCodeAt(De)?(i="B",De++):(i=B,s(U)),i===B?(De=n,n=B):(114===t.charCodeAt(De)?(r="r",De++):(r=B,s(G)),r===B&&(r=null),r===B?(De=n,n=B):(i=[i,r],n=i)),n===B&&(n=De,67===t.charCodeAt(De)?(i="C",De++):(i=B,s(X)),i===B?(De=n,n=B):(108===t.charCodeAt(De)?(r="l",De++):(r=B,s(Y)),r===B&&(r=null),r===B?(De=n,n=B):(i=[i,r],n=i)),n===B&&(K.test(t.charAt(De))?(n=t.charAt(De),De++):(n=B,s(Z)))),n!==B&&(Ne=e,n=$(n)),e=n,e}function v(){var e,n;return e=De,J.test(t.charAt(De))?(n=t.charAt(De),De++):(n=B,s(Q)),n!==B&&(Ne=e,n=D(n)),e=n,e}function f(){var e,n;return e=De,42===t.charCodeAt(De)?(n="*",De++):(n=B,s(ee)),n!==B&&(Ne=e,n=te(n)),e=n,e}function m(){var e,n,i,r;return e=De,n=De,ne.test(t.charAt(De))?(i=t.charAt(De),De++):(i=B,s(ie)),i===B?(De=n,n=B):(re.test(t.charAt(De))?(r=t.charAt(De),De++):(r=B,s(oe)),r===B&&(r=null),r===B?(De=n,n=B):(i=[i,r],n=i)),n!==B&&(Ne=e,n=ae(n)),e=n,e}function b(){var e,n,i,r,o;return e=De,n=De,37===t.charCodeAt(De)?(i="%",De++):(i=B,s(se)),i===B?(De=n,n=B):(ge.test(t.charAt(De))?(r=t.charAt(De),De++):(r=B,s(de)),r===B?(De=n,n=B):(le.test(t.charAt(De))?(o=t.charAt(De),De++):(o=B,s(he)),o===B?(De=n,n=B):(i=[i,r,o],n=i))),n===B&&(le.test(t.charAt(De))?(n=t.charAt(De),De++):(n=B,s(he))),n!==B&&(Ne=e,n=ce(n)),e=n,e}function x(){var e,n,i,r,o,a,g;return e=De,n=De,64===t.charCodeAt(De)?(i="@",De++):(i=B,s(pe)),i===B?(De=n,n=B):(64===t.charCodeAt(De)?(r="@",De++):(r=B,s(pe)),r===B&&(r=De,"TH"===t.substr(De,2)?(o="TH",De+=2):(o=B,s(ue)),o===B?(De=r,r=B):(ve.test(t.charAt(De))?(a=t.charAt(De),De++):(a=B,s(fe)),a===B?(De=r,r=B):(o=[o,a],r=o)),r===B&&(r=De,"AL"===t.substr(De,2)?(o="AL",De+=2):(o=B,s(me)),o===B?(De=r,r=B):(ve.test(t.charAt(De))?(a=t.charAt(De),De++):(a=B,s(fe)),a===B?(De=r,r=B):(o=[o,a],r=o)),r===B&&(r=De,"SP"===t.substr(De,2)?(o="SP",De+=2):(o=B,s(be)),o===B?(De=r,r=B):(xe.test(t.charAt(De))?(a=t.charAt(De),De++):(a=B,s(ye)),a===B?(De=r,r=B):(o=[o,a],r=o)),r===B&&(r=De,"TB"===t.substr(De,2)?(o="TB",De+=2):(o=B,s(Se)),o===B?(De=r,r=B):(ge.test(t.charAt(De))?(a=t.charAt(De),De++):(a=B,s(de)),a===B?(De=r,r=B):(le.test(t.charAt(De))?(g=t.charAt(De),De++):(g=B,s(he)),g===B&&(g=null),g===B?(De=r,r=B):(o=[o,a,g],r=o))),r===B&&(r=De,"OH"===t.substr(De,2)?(o="OH",De+=2):(o=B,s(Ce)),o===B?(De=r,r=B):(ge.test(t.charAt(De))?(a=t.charAt(De),De++):(a=B,s(de)),a===B?(De=r,r=B):(le.test(t.charAt(De))?(g=t.charAt(De),De++):(g=B,s(he)),g===B&&(g=null),g===B?(De=r,r=B):(o=[o,a,g],r=o)))))))),r===B&&(r=null),r===B?(De=n,n=B):(i=[i,r],n=i)),n!==B&&(Ne=e,n=Re(n)),e=n,e}function y(){var e,t;return e=De,t=S(),t===B&&(t=C()),t!==B&&(Ne=e,t=Ae(t)),e=t,e}function S(){var e,n,i,r,o,a;return e=De,n=De,43===t.charCodeAt(De)?(i="+",De++):(i=B,s(je)),i===B?(De=n,n=B):(43===t.charCodeAt(De)?(r="+",De++):(r=B,s(je)),r===B&&(r=De,ge.test(t.charAt(De))?(o=t.charAt(De),De++):(o=B,s(de)),o===B?(De=r,r=B):(le.test(t.charAt(De))?(a=t.charAt(De),De++):(a=B,s(he)),a===B&&(a=null),a===B?(De=r,r=B):(o=[o,a],r=o))),r===B&&(r=null),r===B?(De=n,n=B):(i=[i,r],n=i)),n!==B&&(Ne=e,n=Te(n)),e=n,e}function C(){var e,n,i,r,o,a;return e=De,n=De,45===t.charCodeAt(De)?(i="-",De++):(i=B,s(ke)),i===B?(De=n,n=B):(45===t.charCodeAt(De)?(r="-",De++):(r=B,s(ke)),r===B&&(r=De,ge.test(t.charAt(De))?(o=t.charAt(De),De++):(o=B,s(de)),o===B?(De=r,r=B):(le.test(t.charAt(De))?(a=t.charAt(De),De++):(a=B,s(he)),a===B&&(a=null),a===B?(De=r,r=B):(o=[o,a],r=o))),r===B&&(r=null),r===B?(De=n,n=B):(i=[i,r],n=i)),n!==B&&(Ne=e,n=Ie(n)),e=n,e}function R(){var e,n,i,r;return e=De,n=De,72===t.charCodeAt(De)?(i="H",De++):(i=B,s(Be)),i===B?(De=n,n=B):(le.test(t.charAt(De))?(r=t.charAt(De),De++):(r=B,s(he)),r===B&&(r=null),r===B?(De=n,n=B):(i=[i,r],n=i)),n!==B&&(Ne=e,n=we(n)),e=n,e}function A(){var e,n,i,r,o,a,g;if(e=De,n=De,58===t.charCodeAt(De)?(i=":",De++):(i=B,s(Pe)),i!==B){if(r=De,ge.test(t.charAt(De))?(o=t.charAt(De),De++):(o=B,s(de)),o!==B){for(a=[],le.test(t.charAt(De))?(g=t.charAt(De),De++):(g=B,s(he));g!==B;)a.push(g),le.test(t.charAt(De))?(g=t.charAt(De),De++):(g=B,s(he));a===B?(De=r,r=B):(o=[o,a],r=o)}else De=r,r=B;r===B&&(Le.test(t.charAt(De))?(r=t.charAt(De),De++):(r=B,s(Ee))),r===B?(De=n,n=B):(i=[i,r],n=i)}else De=n,n=B;return n!==B&&(Ne=e,n=Oe(n)),e=n,e}function j(){var e,n,i,r,o;return e=De,n=De,ge.test(t.charAt(De))?(i=t.charAt(De),De++):(i=B,s(de)),i===B?(De=n,n=B):(le.test(t.charAt(De))?(r=t.charAt(De),De++):(r=B,s(he)),r===B&&(r=null),r===B?(De=n,n=B):(le.test(t.charAt(De))?(o=t.charAt(De),De++):(o=B,s(he)),o===B&&(o=null),o===B?(De=n,n=B):(i=[i,r,o],n=i))),n!==B&&(Ne=e,n=He(n)),e=n,e}n=void 0===n?{}:n;var T=t.split("(").length-1,k=t.split(")").length-1;if(T!==k)throw g("The number of opening parentheses does not match the number of closing parentheses.",0);var I,B={},w={chain:d},P=d,L=function(e){for(var t=[],n=[],r=0;r<e[1].length;r++)t.push(e[1][r]);for(var o,r=0;r<e[2].length;r++)o=e[2][r][0]?e[2][r][0]:"-",n.push({bond:o,id:e[2][r][1]});for(var r=0;r<e[3].length;r++)t.push(e[3][r]);for(var r=0;r<e[6].length;r++)t.push(e[6][r]);return{atom:e[0],isBracket:!!e[0].element,branches:t,branchCount:t.length,ringbonds:n,ringbondCount:n.length,bond:e[4]?e[4]:"-",next:e[5],hasNext:!!e[5]}},E=i("(",!1),O=i(")",!1),H=function(e){var t=e[1]?e[1]:"-";return e[2].branchBond=t,e[2]},D=function(e){return e},N=/^[\-=#$:\/\\.]/,V=r(["-","=","#","$",":","/","\\","."],!1,!1),z=function(e){return e},W=i("[",!1),F=i("se",!1),M=i("as",!1),q=i("]",!1),_=function(e){return{isotope:e[1],element:e[2],chirality:e[3],hcount:e[4],charge:e[5],class:e[6]}},U=i("B",!1),G=i("r",!1),X=i("C",!1),Y=i("l",!1),K=/^[NOPSFI]/,Z=r(["N","O","P","S","F","I"],!1,!1),$=function(e){return 1<e.length?e.join(""):e},J=/^[bcnops]/,Q=r(["b","c","n","o","p","s"],!1,!1),ee=i("*",!1),te=function(e){return e},ne=/^[A-Z]/,ie=r([["A","Z"]],!1,!1),re=/^[a-z]/,oe=r([["a","z"]],!1,!1),ae=function(t){return t.join("")},se=i("%",!1),ge=/^[1-9]/,de=r([["1","9"]],!1,!1),le=/^[0-9]/,he=r([["0","9"]],!1,!1),ce=function(e){return 1==e.length?+e:+e.join("").replace("%","")},pe=i("@",!1),ue=i("TH",!1),ve=/^[12]/,fe=r(["1","2"],!1,!1),me=i("AL",!1),be=i("SP",!1),xe=/^[1-3]/,ye=r([["1","3"]],!1,!1),Se=i("TB",!1),Ce=i("OH",!1),Re=function(e){return e[1]?"@"==e[1]?"@@":e[1].join("").replace(",",""):"@"},Ae=function(e){return e},je=i("+",!1),Te=function(e){return e[1]?"+"==e[1]?2:+e[1].join(""):1},ke=i("-",!1),Ie=function(e){return e[1]?"-"==e[1]?-2:-+e[1].join(""):-1},Be=i("H",!1),we=function(e){return e[1]?+e[1]:1},Pe=i(":",!1),Le=/^[0]/,Ee=r(["0"],!1,!1),Oe=function(e){return+(e[1][0]+e[1][1].join(""))},He=function(e){return+e.join("")},De=0,Ne=0,Ve=[{line:1,column:1}],ze=0,We=[];if("startRule"in n){if(!(n.startRule in w))throw new Error("Can't start parsing from rule \""+n.startRule+"\".");P=w[n.startRule]}if(I=P(),I!==B&&De===t.length)return I;throw I!==B&&De<t.length&&s(function(){return{type:"end"}}()),function(t,n,i){return new e(e.buildMessage(t,n),t,n,i)}(We,ze<t.length?t.charAt(ze):null,ze<t.length?a(ze,ze+1):a(ze,ze))}return function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(e,Error),e.buildMessage=function(e,t){function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return e.replace(/\\/g,"\\\\").replace(/"/g,"\\\"").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+n(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+n(e)})}function r(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+n(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+n(e)})}function o(e){return a[e.type](e)}var a={literal:function(e){return"\""+i(e.text)+"\""},class:function(e){var t,n="";for(t=0;t<e.parts.length;t++)n+=e.parts[t]instanceof Array?r(e.parts[t][0])+"-"+r(e.parts[t][1]):r(e.parts[t]);return"["+(e.inverted?"^":"")+n+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(e){return e.description}};return"Expected "+function(e){var t,n,r=Array(e.length);for(t=0;t<e.length;t++)r[t]=o(e[t]);if(r.sort(),0<r.length){for(t=1,n=1;t<r.length;t++)r[t-1]!==r[t]&&(r[n]=r[t],n++);r.length=n}switch(r.length){case 1:return r[0];case 2:return r[0]+" or "+r[1];default:return r.slice(0,-1).join(", ")+", or "+r[r.length-1];}}(e)+" but "+function(e){return e?"\""+i(e)+"\"":"end of input"}(t)+" found."},{SyntaxError:e,parse:t}}()},{}],11:[function(e,t){"use strict";const n=e("./ArrayHelper"),i=e("./Vector2"),r=e("./Vertex"),o=e("./RingConnection");class a{constructor(e){this.id=null,this.members=e,this.edges=[],this.insiders=[],this.neighbours=[],this.positioned=!1,this.center=new i(0,0),this.rings=[],this.isBridged=!1,this.isPartOfBridged=!1,this.isSpiro=!1,this.isFused=!1,this.centralAngle=0,this.canFlip=!0}clone(){let e=new a(this.members);return e.id=this.id,e.insiders=n.clone(this.insiders),e.neighbours=n.clone(this.neighbours),e.positioned=this.positioned,e.center=this.center.clone(),e.rings=n.clone(this.rings),e.isBridged=this.isBridged,e.isPartOfBridged=this.isPartOfBridged,e.isSpiro=this.isSpiro,e.isFused=this.isFused,e.centralAngle=this.centralAngle,e.canFlip=this.canFlip,e}getSize(){return this.members.length}getPolygon(e){let t=[];for(let n=0;n<this.members.length;n++)t.push(e[this.members[n]].position);return t}getAngle(){return Math.PI-this.centralAngle}eachMember(e,t,n,i){n=n||0===n?n:this.members[0];let r=n,o=0;for(;null!=r&&100>o;){let a=r;t(a),r=e[r].getNextInRing(e,this.id,i),i=a,r==n&&(r=null),o++}}getOrderedNeighbours(e){let t=Array(this.neighbours.length);for(let n,r=0;r<this.neighbours.length;r++)n=o.getVertices(e,this.id,this.neighbours[r]),t[r]={n:n.length,neighbour:this.neighbours[r]};return t.sort(function(e,t){return t.n-e.n}),t}isBenzeneLike(e){let t=this.getDoubleBondCount(e),n=this.members.length;return 3===t&&6===n||2===t&&5===n}getDoubleBondCount(e){let t=0;for(let n,r=0;r<this.members.length;r++)n=e[this.members[r]].value,("="===n.bondType||"="===n.branchBond)&&t++;return t}contains(e){for(let t=0;t<this.members.length;t++)if(this.members[t]==e)return!0;return!1}}t.exports=a},{"./ArrayHelper":2,"./RingConnection":12,"./Vector2":14,"./Vertex":15}],12:[function(e,t){"use strict";const n=e("./Vertex"),i=e("./Ring");t.exports=class{constructor(e,t){this.id=null,this.firstRingId=e.id,this.secondRingId=t.id,this.vertices=new Set;for(var n=0;n<e.members.length;n++){let i=e.members[n];for(let e,r=0;r<t.members.length;r++)e=t.members[r],i===e&&this.addVertex(i)}}addVertex(e){this.vertices.add(e)}updateOther(e,t){this.firstRingId===t?this.secondRingId=e:this.firstRingId=e}containsRing(e){return this.firstRingId===e||this.secondRingId===e}isBridge(e){if(2<this.vertices.size)return!0;for(let t of this.vertices)if(2<e[t].value.rings.length)return!0;return!1}static isBridge(e,t,n,r){let o=null;for(let a=0;a<e.length;a++)if(o=e[a],o.firstRingId===n&&o.secondRingId===r||o.firstRingId===r&&o.secondRingId===n)return o.isBridge(t);return!1}static getNeighbours(e,t){let n=[];for(let r,o=0;o<e.length;o++)r=e[o],r.firstRingId===t?n.push(r.secondRingId):r.secondRingId===t&&n.push(r.firstRingId);return n}static getVertices(e,t,n){for(let r,o=0;o<e.length;o++)if(r=e[o],r.firstRingId===t&&r.secondRingId===n||r.firstRingId===n&&r.secondRingId===t)return[...r.vertices]}}},{"./Ring":11,"./Vertex":15}],13:[function(e,t){"use strict";const n=e("./Graph");class r{static getRings(e,t=!1){let o=e.getComponentsAdjacencyMatrix();if(0===o.length)return null;let a=n.getConnectedComponents(o),s=[];for(var g=0;g<a.length;g++){let n=a[g],i=e.getSubgraphAdjacencyMatrix([...n]),o=new Uint16Array(i.length),h=new Uint16Array(i.length);for(var d=0;d<i.length;d++){h[d]=0,o[d]=0;for(var l=0;l<i[d].length;l++)o[d]+=i[d][l]}let p=0;for(var d=0;d<i.length;d++)for(var l=d+1;l<i.length;l++)p+=i[d][l];let u=p-i.length+1,v=!0;for(var d=0;d<o.length;d++)3!==o[d]&&(v=!1);if(v&&(u=2+p-i.length),1==u){s.push([...n]);continue}t&&(u=999);let{d:f,pe:m,pe_prime:b}=r.getPathIncludedDistanceMatrices(i),x=r.getRingCandidates(f,m,b),c=r.getSSSR(x,f,i,m,b,o,h,u);for(var d=0;d<c.length;d++){let e=Array(c[d].size),t=0;for(let i of c[d])e[t++]=n[i];s.push(e)}}return s}static matrixToString(e){let t="";for(var n=0;n<e.length;n++){for(var r=0;r<e[n].length;r++)t+=e[n][r]+" ";t+="\n"}return t}static getPathIncludedDistanceMatrices(e){var t=Number.POSITIVE_INFINITY;let r=e.length,o=Array(r),a=Array(r),s=Array(r);for(var g=0,d=0,h=0,c=r;c--;){o[c]=Array(r),a[c]=Array(r),s[c]=Array(r);for(var p=r;p--;)o[c][p]=c===p||1===e[c][p]?e[c][p]:t,a[c][p]=1===o[c][p]?[[[c,p]]]:[],s[c][p]=[]}for(var p,u=r;u--;)for(c=r;c--;)for(p=r;p--;){const e=o[c][p],t=o[c][u]+o[u][p];if(e>t){var g,d,h;if(e===t+1)for(s[c][p]=[a[c][p].length],g=a[c][p].length;g--;)for(s[c][p][g]=[a[c][p][g].length],d=a[c][p][g].length;d--;)for(s[c][p][g][d]=[a[c][p][g][d].length],h=a[c][p][g][d].length;h--;)s[c][p][g][d][h]=[a[c][p][g][d][0],a[c][p][g][d][1]];else s[c][p]=[];for(o[c][p]=t,a[c][p]=[[]],g=a[c][u][0].length;g--;)a[c][p][0].push(a[c][u][0][g]);for(g=a[u][p][0].length;g--;)a[c][p][0].push(a[u][p][0][g])}else if(e===t){if(a[c][u].length&&a[u][p].length){var g;if(a[c][p].length){let e=[];for(g=a[c][u][0].length;g--;)e.push(a[c][u][0][g]);for(g=a[u][p][0].length;g--;)e.push(a[u][p][0][g]);a[c][p].push(e)}else{let e=[];for(g=a[c][u][0].length;g--;)e.push(a[c][u][0][g]);for(g=a[u][p][0].length;g--;)e.push(a[u][p][0][g]);a[c][p][0]=e}}}else if(e===t-1){var g;if(s[c][p].length){let e=[];for(g=a[c][u][0].length;g--;)e.push(a[c][u][0][g]);for(g=a[u][p][0].length;g--;)e.push(a[u][p][0][g]);s[c][p].push(e)}else{let e=[];for(g=a[c][u][0].length;g--;)e.push(a[c][u][0][g]);for(g=a[u][p][0].length;g--;)e.push(a[u][p][0][g]);s[c][p][0]=e}}}return{d:o,pe:a,pe_prime:s}}static getRingCandidates(e,t,n){let r=e.length,o=[],a=0;for(let s=0;s<r;s++)for(let i=0;i<r;i++)if(0===e[s][i]||1===t[s][i].length&&0===n[s][i])continue;else a=0===n[s][i].length?2*e[s][i]:2*(e[s][i]+.5),a!==1/0&&o.push([a,t[s][i],n[s][i]]);return o.sort(function(e,t){return e[0]-t[0]}),o}static getSSSR(e,t,n,i,o,a,s,g){let d=[],l=[];for(let c=0;c<e.length;c++)if(0!=e[c][0]%2)for(let t,i=0;i<e[c][2].length;i++){t=e[c][1][0].concat(e[c][2][i]);for(var h=0;h<t.length;h++)t[h][0].constructor===Array&&(t[h]=t[h][0]);let o=r.bondsToAtoms(t);if(r.getBondCount(o,n)!==o.size||r.pathSetsContain(d,o,t,l,a,s)||(d.push(o),l=l.concat(t)),d.length>g)return d}else for(let t,i=0;i<e[c][1].length-1;i++){t=e[c][1][i].concat(e[c][1][i+1]);for(var h=0;h<t.length;h++)t[h][0].constructor===Array&&(t[h]=t[h][0]);let o=r.bondsToAtoms(t);if(r.getBondCount(o,n)!==o.size||r.pathSetsContain(d,o,t,l,a,s)||(d.push(o),l=l.concat(t)),d.length>g)return d}return d}static getEdgeCount(e){let t=0,n=e.length;for(var r=n-1;r--;)for(var o=n;o--;)1===e[r][o]&&t++;return t}static getEdgeList(e){let t=e.length,n=[];for(var r=t-1;r--;)for(var o=t;o--;)1===e[r][o]&&n.push([r,o]);return n}static bondsToAtoms(e){let t=new Set;for(var n=e.length;n--;)t.add(e[n][0]),t.add(e[n][1]);return t}static getBondCount(e,t){let n=0;for(let i of e)for(let r of e)i!==r&&(n+=t[i][r]);return n/2}static pathSetsContain(e,t,n,o,a,s){for(var g=e.length;g--;){if(r.isSupersetOf(t,e[g]))return!0;if(e[g].size===t.size&&r.areSetsEqual(e[g],t))return!0}let d=0,l=!1;for(g=n.length;g--;)for(var h=o.length;h--;)(n[g][0]===o[h][0]&&n[g][1]===o[h][1]||n[g][1]===o[h][0]&&n[g][0]===o[h][1])&&d++,d===n.length&&(l=!0);let c=!1;if(l)for(let e of t)if(s[e]<a[e]){c=!0;break}if(l&&!c)return!0;for(let i of t)s[i]++;return!1}static areSetsEqual(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}static isSupersetOf(e,t){for(var n of t)if(!e.has(n))return!1;return!0}}t.exports=r},{"./Graph":7}],14:[function(e,t){"use strict";var n=Math.acos,i=Math.sin,r=Math.cos,o=Math.sqrt;class g{constructor(e,t){0==arguments.length?(this.x=0,this.y=0):1==arguments.length?(this.x=e.x,this.y=e.y):(this.x=e,this.y=t)}clone(){return new g(this.x,this.y)}toString(){return"("+this.x+","+this.y+")"}add(e){return this.x+=e.x,this.y+=e.y,this}subtract(e){return this.x-=e.x,this.y-=e.y,this}divide(e){return this.x/=e,this.y/=e,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}invert(){return this.x=-this.x,this.y=-this.y,this}angle(){return Math.atan2(this.y,this.x)}distance(e){return o((e.x-this.x)*(e.x-this.x)+(e.y-this.y)*(e.y-this.y))}distanceSq(e){return(e.x-this.x)*(e.x-this.x)+(e.y-this.y)*(e.y-this.y)}clockwise(e){let t=this.y*e.x,n=this.x*e.y;if(t>n)return-1;return t===n?0:1}relativeClockwise(e,t){let n=(this.y-e.y)*(t.x-e.x),i=(this.x-e.x)*(t.y-e.y);if(n>i)return-1;return n===i?0:1}rotate(e){let t=new g(0,0),n=r(e),o=i(e);return t.x=this.x*n-this.y*o,t.y=this.x*o+this.y*n,this.x=t.x,this.y=t.y,this}rotateAround(e,t){let n=i(e),o=r(e);this.x-=t.x,this.y-=t.y;let a=this.x*o-this.y*n,s=this.x*n+this.y*o;return this.x=a+t.x,this.y=s+t.y,this}rotateTo(e,t,n=0){this.x+=.001,this.y-=.001;let i=g.subtract(this,t),r=g.subtract(e,t),o=g.angle(r,i);return this.rotateAround(o+n,t),this}rotateAwayFrom(e,t,n){this.rotateAround(n,t);let i=this.distanceSq(e);this.rotateAround(-2*n,t);let r=this.distanceSq(e);r<i&&this.rotateAround(2*n,t)}getRotateAwayFromAngle(e,t,n){let i=this.clone();i.rotateAround(n,t);let r=i.distanceSq(e);i.rotateAround(-2*n,t);let o=i.distanceSq(e);return o<r?n:-n}getRotateTowardsAngle(e,t,n){let i=this.clone();i.rotateAround(n,t);let r=i.distanceSq(e);i.rotateAround(-2*n,t);let o=i.distanceSq(e);return o>r?n:-n}getRotateToAngle(e,t){let n=g.subtract(this,t),i=g.subtract(e,t),r=g.angle(i,n);return Number.isNaN(r)?0:r}isInPolygon(e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++)e[n].y>this.y!=e[i].y>this.y&&this.x<(e[i].x-e[n].x)*(this.y-e[n].y)/(e[i].y-e[n].y)+e[n].x&&(t=!t);return t}length(){return o(this.x*this.x+this.y*this.y)}lengthSq(){return this.x*this.x+this.y*this.y}normalize(){return this.divide(this.length()),this}normalized(){return g.divideScalar(this,this.length())}whichSide(e,t){return(this.x-e.x)*(t.y-e.y)-(this.y-e.y)*(t.x-e.x)}sameSideAs(e,t,n){let i=this.whichSide(e,t),r=n.whichSide(e,t);return 0>i&&0>r||0==i&&0==r||0<i&&0<r}static add(e,t){return new g(e.x+t.x,e.y+t.y)}static subtract(e,t){return new g(e.x-t.x,e.y-t.y)}static multiply(e,t){return new g(e.x*t.x,e.y*t.y)}static multiplyScalar(e,t){return new g(e.x,e.y).multiplyScalar(t)}static midpoint(e,t){return new g((e.x+t.x)/2,(e.y+t.y)/2)}static normals(e,t){let n=g.subtract(t,e);return[new g(-n.y,n.x),new g(n.y,-n.x)]}static units(e,t){let n=g.subtract(t,e);return[new g(-n.y,n.x).normalize(),new g(n.y,-n.x).normalize()]}static divide(e,t){return new g(e.x/t.x,e.y/t.y)}static divideScalar(e,t){return new g(e.x/t,e.y/t)}static dot(e,t){return e.x*t.x+e.y*t.y}static angle(e,t){let i=g.dot(e,t);return n(i/(e.length()*t.length()))}static threePointangle(e,t,i){let r=g.subtract(t,e),o=g.subtract(i,t),a=e.distance(t),s=t.distance(i);return n(g.dot(r,o)/(a*s))}static scalarProjection(e,t){let n=t.normalized();return g.dot(e,n)}static averageDirection(e){let t=new g(0,0);for(var n=0;n<e.length;n++){let i=e[n];t.add(i)}return t.normalize()}}t.exports=g},{}],15:[function(e,t){"use strict";var n=Math.round,i=Math.PI;const r=e("./MathHelper"),o=e("./ArrayHelper"),a=e("./Vector2"),s=e("./Atom");class g{constructor(e,t=0,n=0){this.id=null,this.value=e,this.position=new a(t?t:0,n?n:0),this.previousPosition=new a(0,0),this.parentVertexId=null,this.children=[],this.spanningTreeChildren=[],this.edges=[],this.positioned=!1,this.angle=null,this.dir=1,this.neighbourCount=0,this.neighbours=[],this.neighbouringElements=[],this.forcePositioned=!1}setPosition(e,t){this.position.x=e,this.position.y=t}setPositionFromVector(e){this.position.x=e.x,this.position.y=e.y}addChild(e){this.children.push(e),this.neighbours.push(e),this.neighbourCount++}addRingbondChild(e,t){if(this.children.push(e),this.value.bracket){let n=1;0===this.id&&0===this.value.bracket.hcount&&(n=0),1===this.value.bracket.hcount&&0===t&&(n=2),1===this.value.bracket.hcount&&1===t&&(3>this.neighbours.length?n=2:n=3),null===this.value.bracket.hcount&&0===t&&(n=1),null===this.value.bracket.hcount&&1===t&&(3>this.neighbours.length?n=1:n=2),this.neighbours.splice(n,0,e)}else this.neighbours.push(e);this.neighbourCount++}setParentVertexId(e){this.neighbourCount++,this.parentVertexId=e,this.neighbours.push(e)}isTerminal(){return!!this.value.hasAttachedPseudoElements||null===this.parentVertexId&&2>this.children.length||0===this.children.length}clone(){let e=new g(this.value,this.position.x,this.position.y);return e.id=this.id,e.previousPosition=new a(this.previousPosition.x,this.previousPosition.y),e.parentVertexId=this.parentVertexId,e.children=o.clone(this.children),e.spanningTreeChildren=o.clone(this.spanningTreeChildren),e.edges=o.clone(this.edges),e.positioned=this.positioned,e.angle=this.angle,e.forcePositioned=this.forcePositioned,e}equals(e){return this.id===e.id}getAngle(e=null,t=!1){let n=null;return n=e?a.subtract(this.position,e):a.subtract(this.position,this.previousPosition),t?r.toDeg(n.angle()):n.angle()}getTextDirection(e){let t=this.getDrawnNeighbours(e),o=[];for(let n=0;n<t.length;n++)o.push(this.getAngle(e[t[n]].position));let a=r.meanAngle(o),s=i/2;return a=n(n(a/s)*s),2===a?"down":-2===a?"up":0===a||-0===a?"right":3===a||-3===a?"left":"down"}getNeighbours(e=null){if(null===e)return this.neighbours.slice();let t=[];for(let n=0;n<this.neighbours.length;n++)this.neighbours[n]!==e&&t.push(this.neighbours[n]);return t}getDrawnNeighbours(e){let t=[];for(let n=0;n<this.neighbours.length;n++)e[this.neighbours[n]].value.isDrawn&&t.push(this.neighbours[n]);return t}getNeighbourCount(){return this.neighbourCount}getSpanningTreeNeighbours(e=null){let t=[];for(let n=0;n<this.spanningTreeChildren.length;n++)(void 0===e||e!=this.spanningTreeChildren[n])&&t.push(this.spanningTreeChildren[n]);return null!=this.parentVertexId&&(void 0===e||e!=this.parentVertexId)&&t.push(this.parentVertexId),t}getNextInRing(e,t,n){let r=this.getNeighbours();for(let a=0;a<r.length;a++)if(o.contains(e[r[a]].value.rings,{value:t})&&r[a]!=n)return r[a];return null}}t.exports=g},{"./ArrayHelper":2,"./Atom":3,"./MathHelper":9,"./Vector2":14}]},{},[1]);
//# sourceMappingURL=smiles-drawer.min.js.map

;/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t((e=e||self).bootstrap={},e.jQuery)}(this,function(e,p){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?t(Object(r),!0).forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}p=p&&p.hasOwnProperty("default")?p.default:p;var n="transitionend";function o(e){var t=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(t)},e),this}var m={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=p(e).css("transition-duration"),n=p(e).css("transition-delay"),i=parseFloat(t),o=parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(t)+parseFloat(n))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){p(e).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=t[i],s=r&&m.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"!=typeof e.getRootNode)return e instanceof ShadowRoot?e:e.parentNode?m.findShadowRoot(e.parentNode):null;var t=e.getRootNode();return t instanceof ShadowRoot?t:null},jQueryDetection:function(){if("undefined"==typeof p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=p.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};m.jQueryDetection(),p.fn.emulateTransitionEnd=o,p.event.special[m.TRANSITION_END]={bindType:n,delegateType:n,handle:function(e){if(p(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=p.fn[r],u={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},f="alert",d="fade",g="show",_=function(){function i(e){this._element=e}var e=i.prototype;return e.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},e.dispose=function(){p.removeData(this._element,a),this._element=null},e._getRootElement=function(e){var t=m.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n=n||p(e).closest("."+f)[0]},e._triggerCloseEvent=function(e){var t=p.Event(u.CLOSE);return p(e).trigger(t),t},e._removeElement=function(t){var n=this;if(p(t).removeClass(g),p(t).hasClass(d)){var e=m.getTransitionDurationFromElement(t);p(t).one(m.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(e)}else this._destroyElement(t)},e._destroyElement=function(e){p(e).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(a);t||(t=new i(this),e.data(a,t)),"close"===n&&t[n](this)})},i._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();p(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),p.fn[r]=_._jQueryInterface,p.fn[r].Constructor=_,p.fn[r].noConflict=function(){return p.fn[r]=h,_._jQueryInterface};var v="button",y="bs.button",E="."+y,b=".data-api",w=p.fn[v],T="active",C="btn",S="focus",D='[data-toggle^="button"]',I='[data-toggle="buttons"]',A='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',N='input:not([type="hidden"])',k=".active",L=".btn",P={CLICK_DATA_API:"click"+E+b,FOCUS_BLUR_DATA_API:"focus"+E+b+" blur"+E+b,LOAD_DATA_API:"load"+E+b},x=function(){function n(e){this._element=e}var e=n.prototype;return e.toggle=function(){var e=!0,t=!0,n=p(this._element).closest(I)[0];if(n){var i=this._element.querySelector(N);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))e=!1;else{var o=n.querySelector(k);o&&p(o).removeClass(T)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(T)&&(e=!1):e=!1;e&&(i.checked=!this._element.classList.contains(T),p(i).trigger("change")),i.focus(),t=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),e&&p(this._element).toggleClass(T))},e.dispose=function(){p.removeData(this._element,y),this._element=null},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(y);e||(e=new n(this),p(this).data(y,e)),"toggle"===t&&e[t]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();p(document).on(P.CLICK_DATA_API,D,function(e){var t=e.target;if(p(t).hasClass(C)||(t=p(t).closest(L)[0]),!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();else{var n=t.querySelector(N);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void e.preventDefault();x._jQueryInterface.call(p(t),"toggle")}}).on(P.FOCUS_BLUR_DATA_API,D,function(e){var t=p(e.target).closest(L)[0];p(t).toggleClass(S,/^focus(in)?$/.test(e.type))}),p(window).on(P.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(O)),t=0,n=e.length;t<n;t++){var i=e[t],o=i.querySelector(N);o.checked||o.hasAttribute("checked")?i.classList.add(T):i.classList.remove(T)}for(var r=0,s=(e=[].slice.call(document.querySelectorAll(A))).length;r<s;r++){var a=e[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(T):a.classList.remove(T)}}),p.fn[v]=x._jQueryInterface,p.fn[v].Constructor=x,p.fn[v].noConflict=function(){return p.fn[v]=w,x._jQueryInterface};var j="carousel",H="bs.carousel",R="."+H,F=".data-api",M=p.fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},B="next",q="prev",K="left",Q="right",V={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHSTART:"touchstart"+R,TOUCHMOVE:"touchmove"+R,TOUCHEND:"touchend"+R,POINTERDOWN:"pointerdown"+R,POINTERUP:"pointerup"+R,DRAG_START:"dragstart"+R,LOAD_DATA_API:"load"+R+F,CLICK_DATA_API:"click"+R+F},Y="carousel",z="active",X="slide",G="carousel-item-right",$="carousel-item-left",J="carousel-item-next",Z="carousel-item-prev",ee="pointer-event",te=".active",ne=".active.carousel-item",ie=".carousel-item",oe=".carousel-item img",re=".carousel-item-next, .carousel-item-prev",se=".carousel-indicators",ae="[data-slide], [data-slide-to]",le='[data-ride="carousel"]',ce={TOUCH:"touch",PEN:"pen"},he=function(){function r(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(se),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=r.prototype;return e.next=function(){this._isSliding||this._slide(B)},e.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(q)},e.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(re)&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(e){var t=this;this._activeElement=this._element.querySelector(ne);var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)p(this._element).one(V.SLID,function(){return t.to(e)});else{if(n===e)return this.pause(),void this.cycle();var i=n<e?B:q;this._slide(i,this._items[e])}},e.dispose=function(){p(this._element).off(R),p.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(e){return e=l({},W,{},e),m.typeCheckConfig(j,e,U),e},e._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;(this.touchDeltaX=0)<t&&this.prev(),t<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&p(this._element).on(V.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&p(this._element).on(V.MOUSEENTER,function(e){return t.pause(e)}).on(V.MOUSELEAVE,function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&ce[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&ce[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))};p(this._element.querySelectorAll(oe)).on(V.DRAG_START,function(e){return e.preventDefault()}),this._pointerEvent?(p(this._element).on(V.POINTERDOWN,function(e){return n(e)}),p(this._element).on(V.POINTERUP,function(e){return i(e)}),this._element.classList.add(ee)):(p(this._element).on(V.TOUCHSTART,function(e){return n(e)}),p(this._element).on(V.TOUCHMOVE,function(e){return function(e){e.originalEvent.touches&&1<e.originalEvent.touches.length?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)}),p(this._element).on(V.TOUCHEND,function(e){return i(e)}))}},e._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},e._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(ie)):[],this._items.indexOf(e)},e._getItemByDirection=function(e,t){var n=e===B,i=e===q,o=this._getItemIndex(t),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return t;var s=(o+(e===q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),i=this._getItemIndex(this._element.querySelector(ne)),o=p.Event(V.SLIDE,{relatedTarget:e,direction:t,from:i,to:n});return p(this._element).trigger(o),o},e._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(te));p(t).removeClass(z);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&p(n).addClass(z)}},e._slide=function(e,t){var n,i,o,r=this,s=this._element.querySelector(ne),a=this._getItemIndex(s),l=t||s&&this._getItemByDirection(e,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=e===B?(n=$,i=J,K):(n=G,i=Z,Q),l&&p(l).hasClass(z))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=p.Event(V.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(X)){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(z),p(s).removeClass(z+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else p(s).removeClass(z),p(l).addClass(z),this._isSliding=!1,p(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var e=p(this).data(H),t=l({},W,{},p(this).data());"object"==typeof i&&(t=l({},t,{},i));var n="string"==typeof i?i:t.slide;if(e||(e=new r(this,t),p(this).data(H,e)),"number"==typeof i)e.to(i);else if("string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}else t.interval&&t.ride&&(e.pause(),e.cycle())})},r._dataApiClickHandler=function(e){var t=m.getSelectorFromElement(this);if(t){var n=p(t)[0];if(n&&p(n).hasClass(Y)){var i=l({},p(n).data(),{},p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(H).to(o),e.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return W}}]),r}();p(document).on(V.CLICK_DATA_API,ae,he._dataApiClickHandler),p(window).on(V.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(le)),t=0,n=e.length;t<n;t++){var i=p(e[t]);he._jQueryInterface.call(i,i.data())}}),p.fn[j]=he._jQueryInterface,p.fn[j].Constructor=he,p.fn[j].noConflict=function(){return p.fn[j]=M,he._jQueryInterface};var ue="collapse",fe="bs.collapse",de="."+fe,pe=p.fn[ue],me={toggle:!0,parent:""},ge={toggle:"boolean",parent:"(string|element)"},_e={SHOW:"show"+de,SHOWN:"shown"+de,HIDE:"hide"+de,HIDDEN:"hidden"+de,CLICK_DATA_API:"click"+de+".data-api"},ve="show",ye="collapse",Ee="collapsing",be="collapsed",we="width",Te="height",Ce=".show, .collapsing",Se='[data-toggle="collapse"]',De=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Se)),i=0,o=n.length;i<o;i++){var r=n[i],s=m.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(e){return e===t});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=a.prototype;return e.toggle=function(){p(this._element).hasClass(ve)?this.hide():this.show()},e.show=function(){var e,t,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(ve)&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(Ce)).filter(function(e){return"string"==typeof n._config.parent?e.getAttribute("data-parent")===n._config.parent:e.classList.contains(ye)})).length&&(e=null),!(e&&(t=p(e).not(this._selector).data(fe))&&t._isTransitioning))){var i=p.Event(_e.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){e&&(a._jQueryInterface.call(p(e).not(this._selector),"hide"),t||p(e).data(fe,null));var o=this._getDimension();p(this._element).removeClass(ye).addClass(Ee),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(be).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(Ee).addClass(ye).addClass(ve),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(_e.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},e.hide=function(){var e=this;if(!this._isTransitioning&&p(this._element).hasClass(ve)){var t=p.Event(_e.HIDE);if(p(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=m.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(ve)||p(r).addClass(be).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e.setTransitioning(!1),p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN)}).emulateTransitionEnd(a)}}},e.setTransitioning=function(e){this._isTransitioning=e},e.dispose=function(){p.removeData(this._element,fe),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(e){return(e=l({},me,{},e)).toggle=Boolean(e.toggle),m.typeCheckConfig(ue,e,ge),e},e._getDimension=function(){return p(this._element).hasClass(we)?we:Te},e._getParent=function(){var e,n=this;m.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(e.querySelectorAll(t));return p(i).each(function(e,t){n._addAriaAndCollapsedClass(a._getTargetFromElement(t),[t])}),e},e._addAriaAndCollapsedClass=function(e,t){var n=p(e).hasClass(ve);t.length&&p(t).toggleClass(be,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(e){var t=m.getSelectorFromElement(e);return t?document.querySelector(t):null},a._jQueryInterface=function(i){return this.each(function(){var e=p(this),t=e.data(fe),n=l({},me,{},e.data(),{},"object"==typeof i&&i?i:{});if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new a(this,n),e.data(fe,t)),"string"==typeof i){if("undefined"==typeof t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return me}}]),a}();p(document).on(_e.CLICK_DATA_API,Se,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=p(this),t=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(t));p(i).each(function(){var e=p(this),t=e.data(fe)?"toggle":n.data();De._jQueryInterface.call(e,t)})}),p.fn[ue]=De._jQueryInterface,p.fn[ue].Constructor=De,p.fn[ue].noConflict=function(){return p.fn[ue]=pe,De._jQueryInterface};var Ie="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,Ae=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(Ie&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}();var Oe=Ie&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Ae))}};function Ne(e){return e&&"[object Function]"==={}.toString.call(e)}function ke(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function Le(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function Pe(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=ke(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?e:Pe(Le(e))}function xe(e){return e&&e.referenceNode?e.referenceNode:e}var je=Ie&&!(!window.MSInputMethodContext||!document.documentMode),He=Ie&&/MSIE 10/.test(navigator.userAgent);function Re(e){return 11===e?je:10===e?He:je||He}function Fe(e){if(!e)return document.documentElement;for(var t=Re(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===ke(n,"position")?Fe(n):n:e?e.ownerDocument.documentElement:document.documentElement}function Me(e){return null!==e.parentNode?Me(e.parentNode):e}function We(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,o=n?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||i.contains(o))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||Fe(e.firstElementChild)===e)}(s)?s:Fe(s);var a=Me(e);return a.host?We(a.host,t):We(e,Me(t).host)}function Ue(e,t){var n="top"===(1<arguments.length&&void 0!==t?t:"top")?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"!==i&&"HTML"!==i)return e[n];var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[n]}function Be(e,t){var n="x"===t?"Left":"Top",i="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function qe(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],Re(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function Ke(e){var t=e.body,n=e.documentElement,i=Re(10)&&getComputedStyle(n);return{height:qe("Height",t,n,i),width:qe("Width",t,n,i)}}var Qe=function(e,t,n){return t&&Ve(e.prototype,t),n&&Ve(e,n),e};function Ve(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function Xe(e){return ze({},e,{right:e.left+e.width,bottom:e.top+e.height})}function Ge(e){var t={};try{if(Re(10)){t=e.getBoundingClientRect();var n=Ue(e,"top"),i=Ue(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r="HTML"===e.nodeName?Ke(e.ownerDocument):{},s=r.width||e.clientWidth||o.width,a=r.height||e.clientHeight||o.height,l=e.offsetWidth-s,c=e.offsetHeight-a;if(l||c){var h=ke(e);l-=Be(h,"x"),c-=Be(h,"y"),o.width-=l,o.height-=c}return Xe(o)}function $e(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=Re(10),r="HTML"===t.nodeName,s=Ge(e),a=Ge(t),l=Pe(e),c=ke(t),h=parseFloat(c.borderTopWidth,10),u=parseFloat(c.borderLeftWidth,10);i&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var f=Xe({top:s.top-a.top-h,left:s.left-a.left-u,width:s.width,height:s.height});if(f.marginTop=0,f.marginLeft=0,!o&&r){var d=parseFloat(c.marginTop,10),p=parseFloat(c.marginLeft,10);f.top-=h-d,f.bottom-=h-d,f.left-=u-p,f.right-=u-p,f.marginTop=d,f.marginLeft=p}return(o&&!i?t.contains(l):t===l&&"BODY"!==l.nodeName)&&(f=function(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=Ue(t,"top"),r=Ue(t,"left"),s=i?-1:1;return e.top+=o*s,e.bottom+=o*s,e.left+=r*s,e.right+=r*s,e}(f,t)),f}function Je(e){if(!e||!e.parentElement||Re())return document.documentElement;for(var t=e.parentElement;t&&"none"===ke(t,"transform");)t=t.parentElement;return t||document.documentElement}function Ze(e,t,n,i,o){var r=4<arguments.length&&void 0!==o&&o,s={top:0,left:0},a=r?Je(e):We(e,xe(t));if("viewport"===i)s=function(e,t){var n=1<arguments.length&&void 0!==t&&t,i=e.ownerDocument.documentElement,o=$e(e,i),r=Math.max(i.clientWidth,window.innerWidth||0),s=Math.max(i.clientHeight,window.innerHeight||0),a=n?0:Ue(i),l=n?0:Ue(i,"left");return Xe({top:a-o.top+o.marginTop,left:l-o.left+o.marginLeft,width:r,height:s})}(a,r);else{var l=void 0;"scrollParent"===i?"BODY"===(l=Pe(Le(t))).nodeName&&(l=e.ownerDocument.documentElement):l="window"===i?e.ownerDocument.documentElement:i;var c=$e(l,a,r);if("HTML"!==l.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===ke(t,"position"))return!0;var i=Le(t);return!!i&&e(i)}(a))s=c;else{var h=Ke(e.ownerDocument),u=h.height,f=h.width;s.top+=c.top-c.marginTop,s.bottom=u+c.top,s.left+=c.left-c.marginLeft,s.right=f+c.left}}var d="number"==typeof(n=n||0);return s.left+=d?n:n.left||0,s.top+=d?n:n.top||0,s.right-=d?n:n.right||0,s.bottom-=d?n:n.bottom||0,s}function et(e,t,i,n,o,r){var s=5<arguments.length&&void 0!==r?r:0;if(-1===e.indexOf("auto"))return e;var a=Ze(i,n,s,o),l={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},c=Object.keys(l).map(function(e){return ze({key:e},l[e],{area:function(e){return e.width*e.height}(l[e])})}).sort(function(e,t){return t.area-e.area}),h=c.filter(function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}),u=0<h.length?h[0].key:c[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function tt(e,t,n,i){var o=3<arguments.length&&void 0!==i?i:null;return $e(n,o?Je(t):We(t,xe(n)),o)}function nt(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function it(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function ot(e,t,n){n=n.split("-")[0];var i=nt(e),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=t[s]+t[l]/2-i[l]/2,o[a]=n===a?t[a]-i[c]:t[it(a)],o}function rt(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function st(e,n,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=rt(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&Ne(t)&&(n.offsets.popper=Xe(n.offsets.popper),n.offsets.reference=Xe(n.offsets.reference),n=t(n,e))}),n}function at(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function lt(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var o=t[i],r=o?""+o+n:e;if("undefined"!=typeof document.body.style[r])return r}return null}function ct(e){var t=e.ownerDocument;return t?t.defaultView:window}function ht(e,t,n,i){n.updateBound=i,ct(e).addEventListener("resize",n.updateBound,{passive:!0});var o=Pe(e);return function e(t,n,i,o){var r="BODY"===t.nodeName,s=r?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),r||e(Pe(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function ut(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return ct(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function ft(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function dt(n,i){Object.keys(i).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&ft(i[e])&&(t="px"),n.style[e]=i[e]+t})}function pt(e,t){function n(e){return e}var i=e.offsets,o=i.popper,r=i.reference,s=Math.round,a=Math.floor,l=s(r.width),c=s(o.width),h=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),f=t?h||u||l%2==c%2?s:a:n,d=t?s:n;return{left:f(l%2==1&&c%2==1&&!u&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:f(o.right)}}var mt=Ie&&/Firefox/i.test(navigator.userAgent);function gt(e,t,n){var i=rt(e,function(e){return e.name===t}),o=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!o){var r="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var _t=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],vt=_t.slice(3);function yt(e,t){var n=1<arguments.length&&void 0!==t&&t,i=vt.indexOf(e),o=vt.slice(i+1).concat(vt.slice(0,i));return n?o.reverse():o}var Et="flip",bt="clockwise",wt="counterclockwise";function Tt(e,o,r,t){var s=[0,0],a=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),i=n.indexOf(rt(n,function(e){return-1!==e.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(e,t){var n=(1===t?!a:a)?"height":"width",i=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return e;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Xe(a)[t]/100*r}(e,n,o,r)})})).forEach(function(n,i){n.forEach(function(e,t){ft(e)&&(s[i]+=e*("-"===n[t-1]?-1:1))})}),s}var Ct={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var o=e.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Ye({},l,r[l]),end:Ye({},l,r[l]+r[c]-s[c])};e.offsets.popper=ze({},s,h[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,o=e.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=ft(+n)?[+n,0]:Tt(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),e.popper=r,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,i){var t=i.boundariesElement||Fe(e.instance.popper);e.instance.reference===t&&(t=Fe(t));var n=lt("transform"),o=e.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Ze(e.instance.popper,e.instance.reference,i.padding,t,e.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var c=i.priority,h=e.offsets.popper,u={primary:function(e){var t=h[e];return h[e]<l[e]&&!i.escapeWithReference&&(t=Math.max(h[e],l[e])),Ye({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=h[t];return h[e]>l[e]&&!i.escapeWithReference&&(n=Math.min(h[t],l[e]-("right"===e?h.width:h.height))),Ye({},t,n)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";h=ze({},h,u[t](e))}),e.offsets.popper=h,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,o=e.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(e.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(e.offsets.popper[l]=r(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!gt(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=nt(i)[c];a[d]-p<s[u]&&(e.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(e.offsets.popper[u]+=a[u]+p-s[d]),e.offsets.popper=Xe(e.offsets.popper);var m=a[u]+a[c]/2-p/2,g=ke(e.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-e.offsets.popper[u]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),e.arrowElement=i,e.offsets.arrow=(Ye(n={},u,Math.round(y)),Ye(n,f,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(m,g){if(at(m.instance.modifiers,"inner"))return m;if(m.flipped&&m.placement===m.originalPlacement)return m;var _=Ze(m.instance.popper,m.instance.reference,g.padding,g.boundariesElement,m.positionFixed),v=m.placement.split("-")[0],y=it(v),E=m.placement.split("-")[1]||"",b=[];switch(g.behavior){case Et:b=[v,y];break;case bt:b=yt(v);break;case wt:b=yt(v,!0);break;default:b=g.behavior}return b.forEach(function(e,t){if(v!==e||b.length===t+1)return m;v=m.placement.split("-")[0],y=it(v);var n=m.offsets.popper,i=m.offsets.reference,o=Math.floor,r="left"===v&&o(n.right)>o(i.left)||"right"===v&&o(n.left)<o(i.right)||"top"===v&&o(n.bottom)>o(i.top)||"bottom"===v&&o(n.top)<o(i.bottom),s=o(n.left)<o(_.left),a=o(n.right)>o(_.right),l=o(n.top)<o(_.top),c=o(n.bottom)>o(_.bottom),h="left"===v&&s||"right"===v&&a||"top"===v&&l||"bottom"===v&&c,u=-1!==["top","bottom"].indexOf(v),f=!!g.flipVariations&&(u&&"start"===E&&s||u&&"end"===E&&a||!u&&"start"===E&&l||!u&&"end"===E&&c),d=!!g.flipVariationsByContent&&(u&&"start"===E&&a||u&&"end"===E&&s||!u&&"start"===E&&c||!u&&"end"===E&&l),p=f||d;(r||h||p)&&(m.flipped=!0,(r||h)&&(v=b[t+1]),p&&(E=function(e){return"end"===e?"start":"start"===e?"end":e}(E)),m.placement=v+(E?"-"+E:""),m.offsets.popper=ze({},m.offsets.popper,ot(m.instance.popper,m.offsets.reference,m.placement)),m=st(m.instance.modifiers,m,"flip"))}),m},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),e.placement=it(t),e.offsets.popper=Xe(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!gt(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=rt(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,o=e.offsets.popper,r=rt(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration,a=Fe(e.instance.popper),l=Ge(a),c={position:o.position},h=pt(e,window.devicePixelRatio<2||!mt),u="bottom"===n?"top":"bottom",f="right"===i?"left":"right",d=lt("transform"),p=void 0,m=void 0;if(m="bottom"==u?"HTML"===a.nodeName?-a.clientHeight+h.bottom:-l.height+h.bottom:h.top,p="right"==f?"HTML"===a.nodeName?-a.clientWidth+h.right:-l.width+h.right:h.left,s&&d)c[d]="translate3d("+p+"px, "+m+"px, 0)",c[u]=0,c[f]=0,c.willChange="transform";else{var g="bottom"==u?-1:1,_="right"==f?-1:1;c[u]=m*g,c[f]=p*_,c.willChange=u+", "+f}var v={"x-placement":e.placement};return e.attributes=ze({},v,e.attributes),e.styles=ze({},c,e.styles),e.arrowStyles=ze({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return dt(e.instance.popper,e.styles),function(t,n){Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&dt(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,o){var r=tt(o,t,e,n.positionFixed),s=et(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),dt(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},St=(Qe(Dt,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=tt(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=et(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=ot(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=st(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,at(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[lt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ht(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return ut.call(this)}}]),Dt);function Dt(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Dt),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=Oe(this.update.bind(this)),this.options=ze({},Dt.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(ze({},Dt.Defaults.modifiers,i.modifiers)).forEach(function(e){n.options.modifiers[e]=ze({},Dt.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ze({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&Ne(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}St.Utils=("undefined"!=typeof window?window:global).PopperUtils,St.placements=_t,St.Defaults=Ct;var It="dropdown",At="bs.dropdown",Ot="."+At,Nt=".data-api",kt=p.fn[It],Lt=new RegExp("38|40|27"),Pt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+Nt,KEYDOWN_DATA_API:"keydown"+Ot+Nt,KEYUP_DATA_API:"keyup"+Ot+Nt},xt="disabled",jt="show",Ht="dropup",Rt="dropright",Ft="dropleft",Mt="dropdown-menu-right",Wt="position-static",Ut='[data-toggle="dropdown"]',Bt=".dropdown form",qt=".dropdown-menu",Kt=".navbar-nav",Qt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Vt="top-start",Yt="top-end",zt="bottom-start",Xt="bottom-end",Gt="right-start",$t="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},en=function(){function c(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=c.prototype;return e.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(xt)){var e=p(this._menu).hasClass(jt);c._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||p(this._element).hasClass(xt)||p(this._menu).hasClass(jt))){var t={relatedTarget:this._element},n=p.Event(Pt.SHOW,t),i=c._getParentFromElement(this._element);if(p(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof St)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:m.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(i).addClass(Wt),this._popper=new St(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(i).closest(Kt).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(jt),p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN,t))}}},e.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(xt)&&p(this._menu).hasClass(jt)){var e={relatedTarget:this._element},t=p.Event(Pt.HIDE,e),n=c._getParentFromElement(this._element);p(n).trigger(t),t.isDefaultPrevented()||(this._popper&&this._popper.destroy(),p(this._menu).toggleClass(jt),p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN,e)))}},e.dispose=function(){p.removeData(this._element,At),p(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;p(this._element).on(Pt.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(e){return e=l({},this.constructor.Default,{},p(this._element).data(),{},e),m.typeCheckConfig(It,e,this.constructor.DefaultType),e},e._getMenuElement=function(){if(!this._menu){var e=c._getParentFromElement(this._element);e&&(this._menu=e.querySelector(qt))}return this._menu},e._getPlacement=function(){var e=p(this._element.parentNode),t=zt;return e.hasClass(Ht)?(t=Vt,p(this._menu).hasClass(Mt)&&(t=Yt)):e.hasClass(Rt)?t=Gt:e.hasClass(Ft)?t=$t:p(this._menu).hasClass(Mt)&&(t=Xt),t},e._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,{},t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),l({},e,{},this._config.popperConfig)},c._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(At);if(e||(e=new c(this,"object"==typeof t?t:null),p(this).data(At,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},c._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var t=[].slice.call(document.querySelectorAll(Ut)),n=0,i=t.length;n<i;n++){var o=c._getParentFromElement(t[n]),r=p(t[n]).data(At),s={relatedTarget:t[n]};if(e&&"click"===e.type&&(s.clickEvent=e),r){var a=r._menu;if(p(o).hasClass(jt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&p.contains(o,e.target))){var l=p.Event(Pt.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),t[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),p(a).removeClass(jt),p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN,s)))}}}},c._getParentFromElement=function(e){var t,n=m.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},c._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||p(e.target).closest(qt).length)):Lt.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!p(this).hasClass(xt))){var t=c._getParentFromElement(this),n=p(t).hasClass(jt);if(n||27!==e.which)if(n&&(!n||27!==e.which&&32!==e.which)){var i=[].slice.call(t.querySelectorAll(Qt)).filter(function(e){return p(e).is(":visible")});if(0!==i.length){var o=i.indexOf(e.target);38===e.which&&0<o&&o--,40===e.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===e.which){var r=t.querySelector(Ut);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}();p(document).on(Pt.KEYDOWN_DATA_API,Ut,en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API,qt,en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API+" "+Pt.KEYUP_DATA_API,en._clearMenus).on(Pt.CLICK_DATA_API,Ut,function(e){e.preventDefault(),e.stopPropagation(),en._jQueryInterface.call(p(this),"toggle")}).on(Pt.CLICK_DATA_API,Bt,function(e){e.stopPropagation()}),p.fn[It]=en._jQueryInterface,p.fn[It].Constructor=en,p.fn[It].noConflict=function(){return p.fn[It]=kt,en._jQueryInterface};var tn="modal",nn="bs.modal",on="."+nn,rn=p.fn[tn],sn={backdrop:!0,keyboard:!0,focus:!0,show:!0},an={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ln={HIDE:"hide"+on,HIDE_PREVENTED:"hidePrevented"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,FOCUSIN:"focusin"+on,RESIZE:"resize"+on,CLICK_DISMISS:"click.dismiss"+on,KEYDOWN_DISMISS:"keydown.dismiss"+on,MOUSEUP_DISMISS:"mouseup.dismiss"+on,MOUSEDOWN_DISMISS:"mousedown.dismiss"+on,CLICK_DATA_API:"click"+on+".data-api"},cn="modal-dialog-scrollable",hn="modal-scrollbar-measure",un="modal-backdrop",fn="modal-open",dn="fade",pn="show",mn="modal-static",gn=".modal-dialog",_n=".modal-body",vn='[data-toggle="modal"]',yn='[data-dismiss="modal"]',En=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",bn=".sticky-top",wn=function(){function o(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(gn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=o.prototype;return e.toggle=function(e){return this._isShown?this.hide():this.show(e)},e.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(dn)&&(this._isTransitioning=!0);var n=p.Event(ln.SHOW,{relatedTarget:e});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(ln.CLICK_DISMISS,yn,function(e){return t.hide(e)}),p(this._dialog).on(ln.MOUSEDOWN_DISMISS,function(){p(t._element).one(ln.MOUSEUP_DISMISS,function(e){p(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},e.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(ln.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(dn);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(ln.FOCUSIN),p(this._element).removeClass(pn),p(this._element).off(ln.CLICK_DISMISS),p(this._dialog).off(ln.MOUSEDOWN_DISMISS),i){var o=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return p(e).off(on)}),p(document).off(ln.FOCUSIN),p.removeData(this._element,nn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(e){return e=l({},sn,{},e),m.typeCheckConfig(tn,e,an),e},e._triggerBackdropTransition=function(){var e=this;if("static"===this._config.backdrop){var t=p.Event(ln.HIDE_PREVENTED);if(p(this._element).trigger(t),t.defaultPrevented)return;this._element.classList.add(mn);var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e._element.classList.remove(mn)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},e._showElement=function(e){var t=this,n=p(this._element).hasClass(dn),i=this._dialog?this._dialog.querySelector(_n):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(cn)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(pn),this._config.focus&&this._enforceFocus();function o(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,p(t._element).trigger(r)}var r=p.Event(ln.SHOWN,{relatedTarget:e});if(n){var s=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},e._enforceFocus=function(){var t=this;p(document).off(ln.FOCUSIN).on(ln.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===p(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?p(this._element).on(ln.KEYDOWN_DISMISS,function(e){27===e.which&&t._triggerBackdropTransition()}):this._isShown||p(this._element).off(ln.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?p(window).on(ln.RESIZE,function(e){return t.handleUpdate(e)}):p(window).off(ln.RESIZE)},e._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(fn),e._resetAdjustments(),e._resetScrollbar(),p(e._element).trigger(ln.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(e){var t=this,n=p(this._element).hasClass(dn)?dn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=un,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(ln.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t._triggerBackdropTransition()}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(pn),!e)return;if(!n)return void e();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,e).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(pn);var o=function(){t._removeBackdrop(),e&&e()};if(p(this._element).hasClass(dn)){var r=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else e&&e()},e._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(En)),t=[].slice.call(document.querySelectorAll(bn));p(e).each(function(e,t){var n=t.style.paddingRight,i=p(t).css("padding-right");p(t).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),p(t).each(function(e,t){var n=t.style.marginRight,i=p(t).css("margin-right");p(t).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(fn)},e._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(En));p(e).each(function(e,t){var n=p(t).data("padding-right");p(t).removeData("padding-right"),t.style.paddingRight=n||""});var t=[].slice.call(document.querySelectorAll(""+bn));p(t).each(function(e,t){var n=p(t).data("margin-right");"undefined"!=typeof n&&p(t).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var e=document.createElement("div");e.className=hn,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},o._jQueryInterface=function(n,i){return this.each(function(){var e=p(this).data(nn),t=l({},sn,{},p(this).data(),{},"object"==typeof n&&n?n:{});if(e||(e=new o(this,t),p(this).data(nn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return sn}}]),o}();p(document).on(ln.CLICK_DATA_API,vn,function(e){var t,n=this,i=m.getSelectorFromElement(this);i&&(t=document.querySelector(i));var o=p(t).data(nn)?"toggle":l({},p(t).data(),{},p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=p(t).one(ln.SHOW,function(e){e.isDefaultPrevented()||r.one(ln.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});wn._jQueryInterface.call(p(t),o,this)}),p.fn[tn]=wn._jQueryInterface,p.fn[tn].Constructor=wn,p.fn[tn].noConflict=function(){return p.fn[tn]=rn,wn._jQueryInterface};var Tn=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Cn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Sn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Dn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function In(e,r,t){if(0===e.length)return e;if(t&&"function"==typeof t)return t(e);for(var n=(new window.DOMParser).parseFromString(e,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(e){var t=a[e],n=t.nodeName.toLowerCase();if(-1===s.indexOf(t.nodeName.toLowerCase()))return t.parentNode.removeChild(t),"continue";var i=[].slice.call(t.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(e){!function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===Tn.indexOf(n)||Boolean(e.nodeValue.match(Sn)||e.nodeValue.match(Dn));for(var i=t.filter(function(e){return e instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(e,o)&&t.removeAttribute(e.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var An="tooltip",On="bs.tooltip",Nn="."+On,kn=p.fn[An],Ln="bs-tooltip",Pn=new RegExp("(^|\\s)"+Ln+"\\S+","g"),xn=["sanitize","whiteList","sanitizeFn"],jn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Hn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Rn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Cn,popperConfig:null},Fn="show",Mn="out",Wn={HIDE:"hide"+Nn,HIDDEN:"hidden"+Nn,SHOW:"show"+Nn,SHOWN:"shown"+Nn,INSERTED:"inserted"+Nn,CLICK:"click"+Nn,FOCUSIN:"focusin"+Nn,FOCUSOUT:"focusout"+Nn,MOUSEENTER:"mouseenter"+Nn,MOUSELEAVE:"mouseleave"+Nn},Un="fade",Bn="show",qn=".tooltip-inner",Kn=".arrow",Qn="hover",Vn="focus",Yn="click",zn="manual",Xn=function(){function i(e,t){if("undefined"==typeof St)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var e=i.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=p(e.currentTarget).data(t);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(Bn))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var e=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(e);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=m.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(Un);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new St(this.element,o,this._getPopperConfig(a)),p(o).addClass(Bn),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,p(t.element).trigger(t.constructor.Event.SHOWN),e===Mn&&t._leave(null,t)};if(p(this.tip).hasClass(Un)){var h=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},e.hide=function(e){function t(){n._hoverState!==Fn&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),p(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()}var n=this,i=this.getTipElement(),o=p.Event(this.constructor.Event.HIDE);if(p(this.element).trigger(o),!o.isDefaultPrevented()){if(p(i).removeClass(Bn),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Yn]=!1,this._activeTrigger[Vn]=!1,this._activeTrigger[Qn]=!1,p(this.tip).hasClass(Un)){var r=m.getTransitionDurationFromElement(i);p(i).one(m.TRANSITION_END,t).emulateTransitionEnd(r)}else t();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(e){p(this.getTipElement()).addClass(Ln+"-"+e)},e.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},e.setContent=function(){var e=this.getTipElement();this.setElementContent(p(e.querySelectorAll(qn)),this.getTitle()),p(e).removeClass(Un+" "+Bn)},e.setElementContent=function(e,t){"object"!=typeof t||!t.nodeType&&!t.jquery?this.config.html?(this.config.sanitize&&(t=In(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t):this.config.html?p(t).parent().is(e)||e.empty().append(t):e.text(p(t).text())},e.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e=e||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},e._getPopperConfig=function(e){var t=this;return l({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Kn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},{},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,{},t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},e._getAttachment=function(e){return Hn[e.toUpperCase()]},e._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(e){return i.toggle(e)});else if(e!==zn){var t=e===Qn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=e===Qn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(t,i.config.selector,function(e){return i._enter(e)}).on(n,i.config.selector,function(e){return i._leave(e)})}}),this._hideModalHandler=function(){i.element&&i.hide()},p(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==e||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?Vn:Qn]=!0),p(t.getTipElement()).hasClass(Bn)||t._hoverState===Fn?t._hoverState=Fn:(clearTimeout(t._timeout),t._hoverState=Fn,t.config.delay&&t.config.delay.show?t._timeout=setTimeout(function(){t._hoverState===Fn&&t.show()},t.config.delay.show):t.show())},e._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?Vn:Qn]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Mn,t.config.delay&&t.config.delay.hide?t._timeout=setTimeout(function(){t._hoverState===Mn&&t.hide()},t.config.delay.hide):t.hide())},e._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},e._getConfig=function(e){var t=p(this.element).data();return Object.keys(t).forEach(function(e){-1!==xn.indexOf(e)&&delete t[e]}),"number"==typeof(e=l({},this.constructor.Default,{},t,{},"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),m.typeCheckConfig(An,e,this.constructor.DefaultType),e.sanitize&&(e.template=In(e.template,e.whiteList,e.sanitizeFn)),e},e._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},e._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(Pn);null!==t&&t.length&&e.removeClass(t.join(""))},e._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},e._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(p(e).removeClass(Un),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data(On),t="object"==typeof n&&n;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data(On,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Rn}},{key:"NAME",get:function(){return An}},{key:"DATA_KEY",get:function(){return On}},{key:"Event",get:function(){return Wn}},{key:"EVENT_KEY",get:function(){return Nn}},{key:"DefaultType",get:function(){return jn}}]),i}();p.fn[An]=Xn._jQueryInterface,p.fn[An].Constructor=Xn,p.fn[An].noConflict=function(){return p.fn[An]=kn,Xn._jQueryInterface};var Gn="popover",$n="bs.popover",Jn="."+$n,Zn=p.fn[Gn],ei="bs-popover",ti=new RegExp("(^|\\s)"+ei+"\\S+","g"),ni=l({},Xn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ii=l({},Xn.DefaultType,{content:"(string|element|function)"}),oi="fade",ri="show",si=".popover-header",ai=".popover-body",li={HIDE:"hide"+Jn,HIDDEN:"hidden"+Jn,SHOW:"show"+Jn,SHOWN:"shown"+Jn,INSERTED:"inserted"+Jn,CLICK:"click"+Jn,FOCUSIN:"focusin"+Jn,FOCUSOUT:"focusout"+Jn,MOUSEENTER:"mouseenter"+Jn,MOUSELEAVE:"mouseleave"+Jn},ci=function(e){function i(){return e.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(i,e);var t=i.prototype;return t.isWithContent=function(){return this.getTitle()||this._getContent()},t.addAttachmentClass=function(e){p(this.getTipElement()).addClass(ei+"-"+e)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var e=p(this.getTipElement());this.setElementContent(e.find(si),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(ai),t),e.removeClass(oi+" "+ri)},t._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},t._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(ti);null!==t&&0<t.length&&e.removeClass(t.join(""))},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data($n),t="object"==typeof n?n:null;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data($n,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ni}},{key:"NAME",get:function(){return Gn}},{key:"DATA_KEY",get:function(){return $n}},{key:"Event",get:function(){return li}},{key:"EVENT_KEY",get:function(){return Jn}},{key:"DefaultType",get:function(){return ii}}]),i}(Xn);p.fn[Gn]=ci._jQueryInterface,p.fn[Gn].Constructor=ci,p.fn[Gn].noConflict=function(){return p.fn[Gn]=Zn,ci._jQueryInterface};var hi="scrollspy",ui="bs.scrollspy",fi="."+ui,di=p.fn[hi],pi={offset:10,method:"auto",target:""},mi={offset:"number",method:"string",target:"(string|element)"},gi={ACTIVATE:"activate"+fi,SCROLL:"scroll"+fi,LOAD_DATA_API:"load"+fi+".data-api"},_i="dropdown-item",vi="active",yi='[data-spy="scroll"]',Ei=".nav, .list-group",bi=".nav-link",wi=".nav-item",Ti=".list-group-item",Ci=".dropdown",Si=".dropdown-item",Di=".dropdown-toggle",Ii="offset",Ai="position",Oi=function(){function n(e,t){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+bi+","+this._config.target+" "+Ti+","+this._config.target+" "+Si,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(gi.SCROLL,function(e){return n._process(e)}),this.refresh(),this._process()}var e=n.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?Ii:Ai,o="auto"===this._config.method?e:this._config.method,r=o===Ai?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var t,n=m.getSelectorFromElement(e);if(n&&(t=document.querySelector(n)),t){var i=t.getBoundingClientRect();if(i.width||i.height)return[p(t)[o]().top+r,n]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){p.removeData(this._element,ui),p(this._scrollElement).off(fi),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(e){if("string"!=typeof(e=l({},pi,{},"object"==typeof e&&e?e:{})).target){var t=p(e.target).attr("id");t||(t=m.getUID(hi),p(e.target).attr("id",t)),e.target="#"+t}return m.typeCheckConfig(hi,e,mi),e},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),n<=e){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&e>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||e<this._offsets[o+1])&&this._activate(this._targets[o])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),n=p([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass(_i)?(n.closest(Ci).find(Di).addClass(vi),n.addClass(vi)):(n.addClass(vi),n.parents(Ei).prev(bi+", "+Ti).addClass(vi),n.parents(Ei).prev(wi).children(bi).addClass(vi)),p(this._scrollElement).trigger(gi.ACTIVATE,{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains(vi)}).forEach(function(e){return e.classList.remove(vi)})},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(ui);if(e||(e=new n(this,"object"==typeof t&&t),p(this).data(ui,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return pi}}]),n}();p(window).on(gi.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(yi)),t=e.length;t--;){var n=p(e[t]);Oi._jQueryInterface.call(n,n.data())}}),p.fn[hi]=Oi._jQueryInterface,p.fn[hi].Constructor=Oi,p.fn[hi].noConflict=function(){return p.fn[hi]=di,Oi._jQueryInterface};var Ni="bs.tab",ki="."+Ni,Li=p.fn.tab,Pi={HIDE:"hide"+ki,HIDDEN:"hidden"+ki,SHOW:"show"+ki,SHOWN:"shown"+ki,CLICK_DATA_API:"click"+ki+".data-api"},xi="dropdown-menu",ji="active",Hi="disabled",Ri="fade",Fi="show",Mi=".dropdown",Wi=".nav, .list-group",Ui=".active",Bi="> li > .active",qi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ki=".dropdown-toggle",Qi="> .dropdown-menu .active",Vi=function(){function i(e){this._element=e}var e=i.prototype;return e.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(ji)||p(this._element).hasClass(Hi))){var e,i,t=p(this._element).closest(Wi)[0],o=m.getSelectorFromElement(this._element);if(t){var r="UL"===t.nodeName||"OL"===t.nodeName?Bi:Ui;i=(i=p.makeArray(p(t).find(r)))[i.length-1]}var s=p.Event(Pi.HIDE,{relatedTarget:this._element}),a=p.Event(Pi.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(e=document.querySelector(o)),this._activate(this._element,t);var l=function(){var e=p.Event(Pi.HIDDEN,{relatedTarget:n._element}),t=p.Event(Pi.SHOWN,{relatedTarget:i});p(i).trigger(e),p(n._element).trigger(t)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){p.removeData(this._element,Ni),this._element=null},e._activate=function(e,t,n){function i(){return o._transitionComplete(e,r,n)}var o=this,r=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?p(t).children(Ui):p(t).find(Bi))[0],s=n&&r&&p(r).hasClass(Ri);if(r&&s){var a=m.getTransitionDurationFromElement(r);p(r).removeClass(Fi).one(m.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},e._transitionComplete=function(e,t,n){if(t){p(t).removeClass(ji);var i=p(t.parentNode).find(Qi)[0];i&&p(i).removeClass(ji),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(p(e).addClass(ji),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),m.reflow(e),e.classList.contains(Ri)&&e.classList.add(Fi),e.parentNode&&p(e.parentNode).hasClass(xi)){var o=p(e).closest(Mi)[0];if(o){var r=[].slice.call(o.querySelectorAll(Ki));p(r).addClass(ji)}e.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(Ni);if(t||(t=new i(this),e.data(Ni,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();p(document).on(Pi.CLICK_DATA_API,qi,function(e){e.preventDefault(),Vi._jQueryInterface.call(p(this),"show")}),p.fn.tab=Vi._jQueryInterface,p.fn.tab.Constructor=Vi,p.fn.tab.noConflict=function(){return p.fn.tab=Li,Vi._jQueryInterface};var Yi="toast",zi="bs.toast",Xi="."+zi,Gi=p.fn[Yi],$i={CLICK_DISMISS:"click.dismiss"+Xi,HIDE:"hide"+Xi,HIDDEN:"hidden"+Xi,SHOW:"show"+Xi,SHOWN:"shown"+Xi},Ji="fade",Zi="hide",eo="show",to="showing",no={animation:"boolean",autohide:"boolean",delay:"number"},io={animation:!0,autohide:!0,delay:500},oo='[data-dismiss="toast"]',ro=function(){function i(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var e=i.prototype;return e.show=function(){var e=this,t=p.Event($i.SHOW);if(p(this._element).trigger(t),!t.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Ji);var n=function(){e._element.classList.remove(to),e._element.classList.add(eo),p(e._element).trigger($i.SHOWN),e._config.autohide&&(e._timeout=setTimeout(function(){e.hide()},e._config.delay))};if(this._element.classList.remove(Zi),m.reflow(this._element),this._element.classList.add(to),this._config.animation){var i=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},e.hide=function(){if(this._element.classList.contains(eo)){var e=p.Event($i.HIDE);p(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},e.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(eo)&&this._element.classList.remove(eo),p(this._element).off($i.CLICK_DISMISS),p.removeData(this._element,zi),this._element=null,this._config=null},e._getConfig=function(e){return e=l({},io,{},p(this._element).data(),{},"object"==typeof e&&e?e:{}),m.typeCheckConfig(Yi,e,this.constructor.DefaultType),e},e._setListeners=function(){var e=this;p(this._element).on($i.CLICK_DISMISS,oo,function(){return e.hide()})},e._close=function(){function e(){t._element.classList.add(Zi),p(t._element).trigger($i.HIDDEN)}var t=this;if(this._element.classList.remove(eo),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(zi);if(t||(t=new i(this,"object"==typeof n&&n),e.data(zi,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return no}},{key:"Default",get:function(){return io}}]),i}();p.fn[Yi]=ro._jQueryInterface,p.fn[Yi].Constructor=ro,p.fn[Yi].noConflict=function(){return p.fn[Yi]=Gi,ro._jQueryInterface},e.Alert=_,e.Button=x,e.Carousel=he,e.Collapse=De,e.Dropdown=en,e.Modal=wn,e.Popover=ci,e.Scrollspy=Oi,e.Tab=Vi,e.Toast=ro,e.Tooltip=Xn,e.Util=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
;/*globals jQuery,Window,HTMLElement,HTMLDocument,HTMLCollection,NodeList,MutationObserver */
/*exported Arrive*/
/*jshint latedef:false */

/*
 * arrive.js
 * v2.4.1
 * https://github.com/uzairfarooq/arrive
 * MIT licensed
 *
 * Copyright (c) 2014-2017 Uzair Farooq
 */
var Arrive = (function(window, $, undefined) {

  "use strict";

  if(!window.MutationObserver || typeof HTMLElement === 'undefined'){
    return; //for unsupported browsers
  }

  var arriveUniqueId = 0;

  var utils = (function() {
    var matches = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector
                  || HTMLElement.prototype.msMatchesSelector;

    return {
      matchesSelector: function(elem, selector) {
        return elem instanceof HTMLElement && matches.call(elem, selector);
      },
      // to enable function overloading - By John Resig (MIT Licensed)
      addMethod: function (object, name, fn) {
        var old = object[ name ];
        object[ name ] = function(){
          if ( fn.length == arguments.length ) {
            return fn.apply( this, arguments );
          }
          else if ( typeof old == 'function' ) {
            return old.apply( this, arguments );
          }
        };
      },
      callCallbacks: function(callbacksToBeCalled, registrationData) {
        if (registrationData && registrationData.options.onceOnly && registrationData.firedElems.length == 1) {
          // as onlyOnce param is true, make sure we fire the event for only one item
          callbacksToBeCalled = [callbacksToBeCalled[0]];
        }

        for (var i = 0, cb; (cb = callbacksToBeCalled[i]); i++) {
          if (cb && cb.callback) {
            cb.callback.call(cb.elem, cb.elem);
          }
        }

        if (registrationData && registrationData.options.onceOnly && registrationData.firedElems.length == 1) {
          // unbind event after first callback as onceOnly is true.
          registrationData.me.unbindEventWithSelectorAndCallback.call(
            registrationData.target, registrationData.selector, registrationData.callback);
        }
      },
      // traverse through all descendants of a node to check if event should be fired for any descendant
      checkChildNodesRecursively: function(nodes, registrationData, matchFunc, callbacksToBeCalled) {
        // check each new node if it matches the selector
        for (var i=0, node; (node = nodes[i]); i++) {
          if (matchFunc(node, registrationData, callbacksToBeCalled)) {
            callbacksToBeCalled.push({ callback: registrationData.callback, elem: node });
          }

          if (node.childNodes.length > 0) {
            utils.checkChildNodesRecursively(node.childNodes, registrationData, matchFunc, callbacksToBeCalled);
          }
        }
      },
      mergeArrays: function(firstArr, secondArr){
        // Overwrites default options with user-defined options.
        var options = {},
            attrName;
        for (attrName in firstArr) {
          if (firstArr.hasOwnProperty(attrName)) {
            options[attrName] = firstArr[attrName];
          }
        }
        for (attrName in secondArr) {
          if (secondArr.hasOwnProperty(attrName)) {
            options[attrName] = secondArr[attrName];
          }
        }
        return options;
      },
      toElementsArray: function (elements) {
        // check if object is an array (or array like object)
        // Note: window object has .length property but it's not array of elements so don't consider it an array
        if (typeof elements !== "undefined" && (typeof elements.length !== "number" || elements === window)) {
          elements = [elements];
        }
        return elements;
      }
    };
  })();


  // Class to maintain state of all registered events of a single type
  var EventsBucket = (function() {
    var EventsBucket = function() {
      // holds all the events

      this._eventsBucket    = [];
      // function to be called while adding an event, the function should do the event initialization/registration
      this._beforeAdding    = null;
      // function to be called while removing an event, the function should do the event destruction
      this._beforeRemoving  = null;
    };

    EventsBucket.prototype.addEvent = function(target, selector, options, callback) {
      var newEvent = {
        target:             target,
        selector:           selector,
        options:            options,
        callback:           callback,
        firedElems:         []
      };

      if (this._beforeAdding) {
        this._beforeAdding(newEvent);
      }

      this._eventsBucket.push(newEvent);
      return newEvent;
    };

    EventsBucket.prototype.removeEvent = function(compareFunction) {
      for (var i=this._eventsBucket.length - 1, registeredEvent; (registeredEvent = this._eventsBucket[i]); i--) {
        if (compareFunction(registeredEvent)) {
          if (this._beforeRemoving) {
              this._beforeRemoving(registeredEvent);
          }

          // mark callback as null so that even if an event mutation was already triggered it does not call callback
          var removedEvents = this._eventsBucket.splice(i, 1);
          if (removedEvents && removedEvents.length) {
            removedEvents[0].callback = null;
          }
        }
      }
    };

    EventsBucket.prototype.beforeAdding = function(beforeAdding) {
      this._beforeAdding = beforeAdding;
    };

    EventsBucket.prototype.beforeRemoving = function(beforeRemoving) {
      this._beforeRemoving = beforeRemoving;
    };

    return EventsBucket;
  })();


  /**
   * @constructor
   * General class for binding/unbinding arrive and leave events
   */
  var MutationEvents = function(getObserverConfig, onMutation) {
    var eventsBucket    = new EventsBucket(),
        me              = this;

    var defaultOptions = {
      fireOnAttributesModification: false
    };

    // actual event registration before adding it to bucket
    eventsBucket.beforeAdding(function(registrationData) {
      var
        target    = registrationData.target,
        observer;

      // mutation observer does not work on window or document
      if (target === window.document || target === window) {
        target = document.getElementsByTagName("html")[0];
      }

      // Create an observer instance
      observer = new MutationObserver(function(e) {
        onMutation.call(this, e, registrationData);
      });

      var config = getObserverConfig(registrationData.options);

      observer.observe(target, config);

      registrationData.observer = observer;
      registrationData.me = me;
    });

    // cleanup/unregister before removing an event
    eventsBucket.beforeRemoving(function (eventData) {
      eventData.observer.disconnect();
    });

    this.bindEvent = function(selector, options, callback) {
      options = utils.mergeArrays(defaultOptions, options);

      var elements = utils.toElementsArray(this);

      for (var i = 0; i < elements.length; i++) {
        eventsBucket.addEvent(elements[i], selector, options, callback);
      }
    };

    this.unbindEvent = function() {
      var elements = utils.toElementsArray(this);
      eventsBucket.removeEvent(function(eventObj) {
        for (var i = 0; i < elements.length; i++) {
          if (this === undefined || eventObj.target === elements[i]) {
            return true;
          }
        }
        return false;
      });
    };

    this.unbindEventWithSelectorOrCallback = function(selector) {
      var elements = utils.toElementsArray(this),
          callback = selector,
          compareFunction;

      if (typeof selector === "function") {
        compareFunction = function(eventObj) {
          for (var i = 0; i < elements.length; i++) {
            if ((this === undefined || eventObj.target === elements[i]) && eventObj.callback === callback) {
              return true;
            }
          }
          return false;
        };
      }
      else {
        compareFunction = function(eventObj) {
          for (var i = 0; i < elements.length; i++) {
            if ((this === undefined || eventObj.target === elements[i]) && eventObj.selector === selector) {
              return true;
            }
          }
          return false;
        };
      }
      eventsBucket.removeEvent(compareFunction);
    };

    this.unbindEventWithSelectorAndCallback = function(selector, callback) {
      var elements = utils.toElementsArray(this);
      eventsBucket.removeEvent(function(eventObj) {
          for (var i = 0; i < elements.length; i++) {
            if ((this === undefined || eventObj.target === elements[i]) && eventObj.selector === selector && eventObj.callback === callback) {
              return true;
            }
          }
          return false;
      });
    };

    return this;
  };


  /**
   * @constructor
   * Processes 'arrive' events
   */
  var ArriveEvents = function() {
    // Default options for 'arrive' event
    var arriveDefaultOptions = {
      fireOnAttributesModification: false,
      onceOnly: false,
      existing: false
    };

    function getArriveObserverConfig(options) {
      var config = {
        attributes: false,
        childList: true,
        subtree: true
      };

      if (options.fireOnAttributesModification) {
        config.attributes = true;
      }

      return config;
    }

    function onArriveMutation(mutations, registrationData) {
      mutations.forEach(function( mutation ) {
        var newNodes    = mutation.addedNodes,
            targetNode = mutation.target,
            callbacksToBeCalled = [],
            node;

        // If new nodes are added
        if( newNodes !== null && newNodes.length > 0 ) {
          utils.checkChildNodesRecursively(newNodes, registrationData, nodeMatchFunc, callbacksToBeCalled);
        }
        else if (mutation.type === "attributes") {
          if (nodeMatchFunc(targetNode, registrationData, callbacksToBeCalled)) {
            callbacksToBeCalled.push({ callback: registrationData.callback, elem: targetNode });
          }
        }

        utils.callCallbacks(callbacksToBeCalled, registrationData);
      });
    }

    function nodeMatchFunc(node, registrationData, callbacksToBeCalled) {
      // check a single node to see if it matches the selector
      if (utils.matchesSelector(node, registrationData.selector)) {
        if(node._id === undefined) {
          node._id = arriveUniqueId++;
        }
        // make sure the arrive event is not already fired for the element
        if (registrationData.firedElems.indexOf(node._id) == -1) {
          registrationData.firedElems.push(node._id);

          return true;
        }
      }

      return false;
    }

    arriveEvents = new MutationEvents(getArriveObserverConfig, onArriveMutation);

    var mutationBindEvent = arriveEvents.bindEvent;

    // override bindEvent function
    arriveEvents.bindEvent = function(selector, options, callback) {

      if (typeof callback === "undefined") {
        callback = options;
        options = arriveDefaultOptions;
      } else {
        options = utils.mergeArrays(arriveDefaultOptions, options);
      }

      var elements = utils.toElementsArray(this);

      if (options.existing) {
        var existing = [];

        for (var i = 0; i < elements.length; i++) {
          var nodes = elements[i].querySelectorAll(selector);
          for (var j = 0; j < nodes.length; j++) {
            existing.push({ callback: callback, elem: nodes[j] });
          }
        }

        // no need to bind event if the callback has to be fired only once and we have already found the element
        if (options.onceOnly && existing.length) {
          return callback.call(existing[0].elem, existing[0].elem);
        }

        setTimeout(utils.callCallbacks, 1, existing);
      }

      mutationBindEvent.call(this, selector, options, callback);
    };

    return arriveEvents;
  };


  /**
   * @constructor
   * Processes 'leave' events
   */
  var LeaveEvents = function() {
    // Default options for 'leave' event
    var leaveDefaultOptions = {};

    function getLeaveObserverConfig() {
      var config = {
        childList: true,
        subtree: true
      };

      return config;
    }

    function onLeaveMutation(mutations, registrationData) {
      mutations.forEach(function( mutation ) {
        var removedNodes  = mutation.removedNodes,
            callbacksToBeCalled = [];

        if( removedNodes !== null && removedNodes.length > 0 ) {
          utils.checkChildNodesRecursively(removedNodes, registrationData, nodeMatchFunc, callbacksToBeCalled);
        }

        utils.callCallbacks(callbacksToBeCalled, registrationData);
      });
    }

    function nodeMatchFunc(node, registrationData) {
      return utils.matchesSelector(node, registrationData.selector);
    }

    leaveEvents = new MutationEvents(getLeaveObserverConfig, onLeaveMutation);

    var mutationBindEvent = leaveEvents.bindEvent;

    // override bindEvent function
    leaveEvents.bindEvent = function(selector, options, callback) {

      if (typeof callback === "undefined") {
        callback = options;
        options = leaveDefaultOptions;
      } else {
        options = utils.mergeArrays(leaveDefaultOptions, options);
      }

      mutationBindEvent.call(this, selector, options, callback);
    };

    return leaveEvents;
  };


  var arriveEvents = new ArriveEvents(),
      leaveEvents  = new LeaveEvents();

  function exposeUnbindApi(eventObj, exposeTo, funcName) {
    // expose unbind function with function overriding
    utils.addMethod(exposeTo, funcName, eventObj.unbindEvent);
    utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorOrCallback);
    utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorAndCallback);
  }

  /*** expose APIs ***/
  function exposeApi(exposeTo) {
    exposeTo.arrive = arriveEvents.bindEvent;
    exposeUnbindApi(arriveEvents, exposeTo, "unbindArrive");

    exposeTo.leave = leaveEvents.bindEvent;
    exposeUnbindApi(leaveEvents, exposeTo, "unbindLeave");
  }

  if ($) {
    exposeApi($.fn);
  }
  exposeApi(HTMLElement.prototype);
  exposeApi(NodeList.prototype);
  exposeApi(HTMLCollection.prototype);
  exposeApi(HTMLDocument.prototype);
  exposeApi(Window.prototype);

  var Arrive = {};
  // expose functions to unbind all arrive/leave events
  exposeUnbindApi(arriveEvents, Arrive, "unbindAllArrive");
  exposeUnbindApi(leaveEvents, Arrive, "unbindAllLeave");

  return Arrive;

})(window, typeof jQuery === 'undefined' ? null : jQuery, undefined);
;