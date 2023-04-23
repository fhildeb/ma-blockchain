pragma solidity ^0.8.0;

contract FirstAssambly{

  // Add variables v1 and v2
  function inlineAdd(uint v1, uint v2) public pure returns(uint result){
    assembly{
      result := add(v1, v2)
    }
  }
}
