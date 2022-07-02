pragma solidity ^0.8.0;

contract If_Assambly{

  //Ergebnis in Schleife veroeffentlichen
  function loopFunc() public pure returns(uint result){
    assembly{

      //Variable i gleich Null
      //Solange Variable i kleiner 10
      //Variable i mit 2 multiplizieren
      //Letztes Ergebnis wird ausgegeben (18)
      for { let i := 0 }
          lt(i, 10)
          { i := add(i, 1) }
            { result := mul(2, i) }
        }
    }
}
