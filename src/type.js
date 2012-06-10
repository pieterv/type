//
// Type creation system (class system)
//


//
// Setup environment wrappers
//
( function( root, factory ) {

	// Set global name
	var PROJECT_NAME = 'type';

	if ( typeof exports === 'object' ) {
		// CommonJS
		factory( exports );
	} else if ( typeof define === 'function' && define.amd ) {
		// AMD. Register as an anonymous module.
		define( [ 'exports' ], factory );
	} else {
		// Browser globals
		factory( ( root[ PROJECT_NAME ] = {} ) );
	}

} )( this, function( exports ) {


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

	};

	// Export item
	exports = type;
} );
