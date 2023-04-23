pragma solidity ^0.8.0;

contract WriteContract{
    string public text;
    uint256 public price = 100000000000000000;  // In Wei = 0,01 ETH
    uint256 public counter = 0;

    function writeText(string memory _text) payable public{
        require(msg.value >= price, "Not enough ether");
        text = _text;
    }
}
