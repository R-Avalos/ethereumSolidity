pragma solidity ^0.4.17;
// First Contract
contract Inbox {
    string public message; // defines new public variable "message"
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string) {
        return message;
    }
    
}
