pragma solidity ^0.8.0;

contract addingContract{
    uint256 public result;
    
    function adding(uint256 _a, uint256 _b) public{
        result = _a + _b;
    }
}

