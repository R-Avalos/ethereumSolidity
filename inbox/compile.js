const path = require('path'); // this will build a path from compilier to inbox.sol file with cross platform compatiblity 
const fs = require('fs'); //file system module
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol'); // points directly to inbox.sol file
const source = fs.readFileSync(inboxPath, 'utf8'); // read the file

console.log(solc.compile(source, 1)); // location of files, and count of files to compiled... console log to see it in action