var config = module.exports;

config[ 'node' ] = {
	env: 'node',
	tests: [
		'*-test.js'
	]
};

config[ 'browser global' ] = {
	environment: 'browser',
	rootPath: '../',
	tests: [
		'test/*-test.js'
	],
	sources: [
		'type.js'
	]
};