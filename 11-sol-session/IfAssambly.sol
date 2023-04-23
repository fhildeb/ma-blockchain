pragma solidity ^0.8.0;

contract IfAssambly{

  // If variable v1 is greater than 5, subtract the given variables
  // otherwise addition
  function inlineCalc(uint v1, uint v2) public pure returns(uint result){
    assembly{
        if gt(v1, 5) {
          result := sub(v1, v2)
        }
        if lt(v1, 5) {
          result := add(v1, v2)
        }
        if eq(v1, 5) {
          result := add(v1, v2)
        }
    }
  }
}
