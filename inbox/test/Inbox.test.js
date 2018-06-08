const assert = require('assert'); //assertions about test, x = x
const ganache = require('ganache-cli'); //local ethereum test network
const Web3 = require('web3');  // UPPERCASE Web3, is a contructor. Convention is to capitalize constructor functions
const web3 = new Web3(ganache.provider()); // intance of web3 that will attempt to connect to local ganache network

let accounts; // predefine accounts variable

beforeEach(async () => {
	// Get a list of all accounts
	//accounts = await web3.eth.getAccounts();

	accounts = await web3.eth.getAccounts(function(error, fetchedAccounts){
		if(!error)
			console.log(JSON.stringify(fetchedAccounts));
		else
			console.error(error);
	});


	// Use one of these accounts to deploy the contract
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		console.log(accounts);
	});
});  // just putting in a dummy test to have the task complete with console log