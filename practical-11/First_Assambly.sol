pragma solidity ^0.8.0;

contract First_Assambly{

  //Variable v1 und v2 addieren
  function inlineAdd(uint v1, uint v2) public pure returns(uint result){
    assembly{
      result := add(v1, v2)
    }
  }
}
