pragma solidity ^0.8.0;

contract CalledContract {
    // Method interfaces provided
    function setA(uint) public returns (uint) {}
    function a() public pure returns (uint) {}
}

contract CallerContract {

    // Assign an address to the calling contract
    CalledContract cc;
    constructor (address _t) {
        cc = CalledContract(_t);
    }

    // Read variable A through another contract
    function getA() public view returns (uint result) {
        return cc.a();
    }

    // Set variable A through another contract
    function setA(uint _val) public returns (uint result) {
        cc.setA(_val);
        return _val;
    }
}
