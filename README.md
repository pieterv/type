#Type (typejs)

[![Build Status](https://secure.travis-ci.org/pieter-vanderwerff/type.png)](http://travis-ci.org/pieter-vanderwerff/type)

A Type creation system using a lightweight prototypal inheritance implementation based on [backbone.js](http://backbonejs.org/).

----

Quick Start
===========

### JAM

1. `jam install typejs`
1. `var type = require('typejs');`

### AMD

1. `git clone https://github.com/pieter-vanderwerff/type` or `git submodule add https://github.com/pieter-vanderwerff/type`
1. Configure your loader with a package:

	```javascript
	packages: [
		{ name: 'typejs', location: 'path/to/type/', main: 'type' },
		// ... other packages ...
	]
	```

1. `define(['typejs', ...], function(type, ...) { ... });` or `require(['typejs', ...], function(type, ...) { ... });`

### Script Tag

1. `git clone https://github.com/pieter-vanderwerff/type` or `git submodule add https://github.com/pieter-vanderwerff/type`
1. `<script src="path/to/type/type.js"></script>`
1. `type` will be available as `window.typejs`

### Node

1. `npm install typejs`
1. `var type = require('typejs');`


API
===

type()
------

Create a type object:

```javascript
var Foo = type( { foo: 'bar' } );

// Returns a newable object
var foo1 = new Foo();
var foo2 = new Foo();
```

**constructor / initialize function**

As with backbone.js if the object has a function called **initialize** it will be run on the creation of an instance, receiving any arguments passed to the type.

```javascript
var Foo = type( {
	initialize: function( options ) {

		this._bar = options.bar;

	}
} );

// Create instances passing options to the initialize function
var foo1 = new Foo( { bar: 10 } );
var foo2 = new Foo( { bar: 17 } );
```

type().extend()
------------

Extend a type object:

```javascript
var Foo = type( { foo: 10 } );

// Extend Foo
var Foostream = Foo.extend( { foo: 10000000, bar: 17 } );

// Create instances of both types
var foo1 = new Foo();
var foo2 = new Foostream();
```

Running the Unit Tests
======================

Install [buster.js](http://busterjs.org/)

`npm install -g buster`

Run unit tests in Node:

1. `buster test -e node`

Run unit tests in Browsers (and Node):

1. `buster server` - this will print a url
2. Point browsers at <buster server url>/capture, e.g. `localhost:1111/capture`
3. `buster test` or `buster test -e browser`
