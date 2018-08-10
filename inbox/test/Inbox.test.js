const assert = require('assert'); //assertions about test, x = x
const ganache = require('ganache-cli'); //local ethereum test network
const Web3 = require('web3');  // UPPERCASE Web3, is a contructor. Convention is to capitalize constructor functions

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile'); //pull the compiled bytecode and ABI
console.log('Web3 version ' + web3.version); //list web3 version

let inbox; // predefine inbox
let accounts; // predefine accounts variable

beforeEach(async () => { 
	// Get a list of all accounts
	accounts = await web3.eth.getAccounts();
	
	// deploy contract with account 0
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments: ['Hi there!']})
		.send({from: accounts[0], gas: '1000000' });
	
	inbox.setProvivder(provider);
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address); // Determine if address has been set for contract
	});
});  // just putting in a dummy test to have the task complete with console log