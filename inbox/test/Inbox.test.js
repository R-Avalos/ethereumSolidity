const assert = require('assert'); //assertions about test, x = x
const ganache = require('ganache-cli'); //local ethereum test network
const Web3 = require('web3');  // UPPERCASE Web3, it is a contructor. Convention is to capitalize constructor functions

const web3 = new Web3(ganache.provider()); // intance of web3 that will attempt to connect to local ganache network


// Mocha Tests

// Basic code
class Car {
	park(){
		return 'stopped';
	};

	drive(){
		return 'vroom';
	};
};

// Mocha assertions
let car; // remove const from within function... car has been initalized and undefined, hence let

beforeEach(() => {
	car = new Car();
});

describe('Car', () => {
	it('has a park string function', () => {
		assert.equal(car.park(), 'stopped'); // value it is, value it should be
	});

	it('can drive'), () => {
		assert.equal(car.drive(), 'vroom');
	};
}); // describe(first variable is the name of the test class, arrow to another function)

// npm run test   // on command line to run tests