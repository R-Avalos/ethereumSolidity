const HDWalletProvider = require('truffle-hdwallet-HDWalletProvider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'account nnemonic', // don't use a real accout with funds, and don't forget the COMMA! :)
    'https://rinkeby.infura.io/v3/6a345675cc044f49aaddf1f36d0116a6;
);

const web3 = new Web3(provider); // take provider and pass it to web3 constructor to get instance of web3