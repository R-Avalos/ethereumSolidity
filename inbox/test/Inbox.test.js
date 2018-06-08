const assert = require('assert'); //assertions about test, x = x
const ganache = require('ganache-cli'); //local ethereum test network
const Web3 = require('web3');  // UPPERCASE Web3, is a contructor. Convention is to capitalize constructor functions
const web3 = new Web3(ganache.provider()); // intance of web3 that will attempt to connect to local ganache network

beforeEach(() => {
	// Get a list of all accounts
	//web3.eth.getAccounts()  
	//	.then(fetchedAccounts => {
	//		console.log(fetchedAccounts);
	//	});
	web3.eth.getAccounts(function(error, result){
		if(!error)
			console.log(JSON.stringify(result));
		else
			console.error(error);
	});


	// Use one of these accounts to deploy the contract

});

describe('Inbox', () => {
	it('deploys a contract', () => {

	});
});  // just putting in a dummy test to have the task complete with console log