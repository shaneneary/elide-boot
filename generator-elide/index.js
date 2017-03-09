var Generator = require('yeoman-generator');
module.exports = class extends Generator {
	// The name `constructor` is important here
	constructor(args, opts) {
		// Calling the super constructor is important so our gener.
		super(args, opts);
		// Next, add your custom code
		this.option('babel'); // This method adds support for `--babel`
	}
	
	method1() {
		this.log('method 1 just ran');
	}	

	method2() {
		this.log('method 2 just ran');
	}
};

