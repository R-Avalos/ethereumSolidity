const assert = require('assert'); //assertions about test, x = x
const ganache = require('ganache-cli'); //local ethereum test network
const Web3 = require('web3');  // UPPERCASE Web3, it is a contructor. Convention is to capitalize constructor functions

const web3 = new Web3(ganache.provider); // intance of web3 that will attempt to connect to local ganache network
