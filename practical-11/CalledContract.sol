pragma solidity ^0.8.0;

contract CalledContract {
    uint public a = 1;

    //Setzen von Variable A
    function setA(uint _a) public returns (uint) {
        a = _a;
        return a;
    }
}
