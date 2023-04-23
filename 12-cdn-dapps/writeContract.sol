pragma solidity ^0.8.0;

contract WriteContract {
    string public text;
    uint256 public price = 10000;
    uint256 public counter = 0;
    address payable public owner;

    constructor() {
        owner = payable(msg.sender); // Set the contract owner to the address deploying the contract
    }

    function writeText(string memory _text) payable public {
        require(msg.value >= price, "Not enough ether");
        text = _text;

        // Transfer the received ether to the contract owner
        owner.transfer(msg.value);
    }
}
