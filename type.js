//
// Type creation system (class system)
//


//
// Setup environment wrappers
//
( function( root, factory ) {

	// Set global name
	var PROJECT_NAME = 'type';

	if ( typeof module === 'object' ) {
		// CommonJS
		factory( module );
	} else if ( typeof define === 'function' && define.amd ) {
		// AMD. Register as an anonymous module.
		define( [ 'module' ], factory );
	} else {
		// Browser globals
		factory( ( root[ PROJECT_NAME ] = {} ) );
	}

} )( this, function( module ) {


	//
	// Project Code
	//
	var options = {}, type;

	// Setup options
	options[ 'constructor_name' ] = 'initialize';

	//
	// Type creator
	//
	type = function( obj ) {

		var base;

		obj = obj || {};
		
		// Constructor function
		base = function() {
			var name = options[ 'constructor_name' ];

			if ( typeof this[ name ] === 'function' ) {
				this[ name ].apply( this, arguments );
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
