pragma solidity ^0.8.0;

contract LoopAssambly{

  // Publish result in loop
  function loopFunc() public pure returns(uint result){
    assembly{

      // Variable i equals zero
      // As long as variable i is less than 10
      // Multiply variable i by 2
      // Last result is output (18)
      for { let i := 0 }
          lt(i, 10)
          { i := add(i, 1) }
            { result := mul(2, i) }
        }
    }
}
