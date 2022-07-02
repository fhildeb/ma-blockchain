pragma solidity ^0.8.0;

contract If_Assambly{

  //Falls Variable v1 großer 5, angegebene Variablen subtrahieren
  //sonst Addition
  function inlineCalc(uint v1, uint v2) public pure returns(uint result){
    assembly{
      let check := 0

      if gt(v1, 5) {
        check := 1
      }

      switch check
      case 1 {
        result := sub(v1, v2)
      }
      default {
        result := add(v1, v2)
      }
    }
  }
}
