( function( buster, type ) {

// Buster setup
var expect = buster.assertions.expect;
buster.spec.expose();

//
// Tests
//
describe( 'Type', function() {

	it( 'basic state', function() {
		expect( type ).toBeDefined();
		expect( type ).toBeFunction();
		expect( type() ).toBeFunction();
		expect( new ( type() )() ).toBeObject();
	} );

	it( 'can create types', function() {
		var Foo = type( {
				foo: 'bar',
				bar: function() {}
			} ),
			foo1 = new Foo();

		expect( foo1.foo ).toBe( 'bar' );
		expect( foo1.bar ).toBeFunction();
	} );

	it( 'can call initialize function on creation', function() {
		var init = this.spy(),
			Foo = type( {
				initialize: init,
				harry: function() {}
			} );

		new Foo( 'test', 'test2' );

		expect( init ).toHaveBeenCalledOnce();
		expect( init ).toHaveBeenCalledWith( 'test', 'test2' );

		new Foo( 'test3' );

		expect( init ).toHaveBeenCalledTwice();
		expect( init ).toHaveBeenCalledWith( 'test3' );

	} );

	it( 'types are not references', function() {
		var Foo = type( {
				bar: 3
			} ), foo1, foo2;

		foo1 = new Foo();
		foo2 = new Foo();

		expect( foo1.bar ).toBe( 3 );
		expect( foo2.bar ).toBe( 3 );

		foo1.bar = 1;

		expect( foo1.bar ).toBe( 1 );
		expect( foo2.bar ).toBe( 3 );

	} );

	it( 'can extend types', function() {
		var Foo = type( {
				bar: 3
			} ), Bar, foo1, bar1;

		Bar = Foo.extend( {
			bar: 10,
			bob: {}
		} );

		foo1 = new Foo();
		bar1 = new Bar();

		expect( foo1.bar ).toBe( 3 );
		expect( foo1.bob ).not.toBeDefined();

		expect( bar1.bar ).toBe( 10 );
		expect( bar1.bob ).toBeObject();
	} );
} );

} )(
	this.buster || require('buster'),
	this.typejs || require('..')
);