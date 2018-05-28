pragma solidity ^0.4.17; // Specifies version of solidity

// First Contract, contract is similar to a new class with number of methods and variables
contract Inbox { 
    string public message; // defines new public string storage variables for contract instance
                            // this is will be stored on the blockchain for life of blockchain    
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }   // note the capital I for Inbox being same name as contract name
        // this is a CONSTRUCTOR function, that is invoked automatically upon contract creation on blockchain
        
    
    // Functions below (not named the same as contract) can be called after the contract has been placed on the blockchain
   
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    // changes message to newMessage
    
    function getMessage() public view returns (string) {
        return message;
    }
    
    // getMesssage returns a view of the variable messae
    
}
