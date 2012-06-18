/** @license MIT License (c) copyright Pieter Vanderwerff */

/**
 * typejs
 * Type creation system (prototypal inheritance)
 *
 * Licensed under the MIT License at:
 * http://pietervanderwerff.mit-license.org/
 *
 * @version 0.1.0
 */


//
// Setup environment wrappers
//
( function( root, factory ) {

	// Set global name
	var PROJECT_NAME = 'typejs';

	if ( typeof module === 'object' ) {
		// CommonJS
		factory( module );
	} else if ( typeof define === 'function' && define.amd ) {
		// AMD. Register as an anonymous module.
		define( [ 'module' ], factory );
	} else {
		// Browser globals
		var mod = { exports: {} };
		factory( mod );
		root[ PROJECT_NAME ] = mod.exports;
	}

} )( this, function( module ) {


	//
	// Project Code
	//
	var type;

	// Setup options
	CONSTRUCTOR_NAME = 'initialize';

	//
	// Type creator
	//
	type = function( obj ) {

		var base;

		obj = obj || {};
		
		// Constructor function
		base = function() {
			if ( typeof this[ CONSTRUCTOR_NAME ] === 'function' ) {
				this[ CONSTRUCTOR_NAME ].apply( this, arguments );
			}
		};

		base.prototype = obj;

		// Create new class inheriting from this class
		base.extend = function( protoProps ) {
			var ctor = function() {},
				child = type(),
				name;

			// Copy over properties
			ctor.prototype = base.prototype;
			child.prototype = new ctor();

			// Set properties
			for ( name in protoProps ) {
				if ( protoProps.hasOwnProperty( name ) ) {
					child.prototype[ name ] = protoProps[ name ];
				}
			}

			return child;
		};

		return base;
	};

	// Export item
	module.exports = type;
} );
