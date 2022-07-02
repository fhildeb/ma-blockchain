pragma solidity ^0.8.0;

contract CalledContract {
    //Methodeninterfaces gegeben
    function setA(uint) public returns (uint) {}
    function a() public pure returns (uint) {}
}

contract CallerContract {

    //Aufrufenden Contract eine Adresse zuweisen
    CalledContract cc;
    constructor (address _t) {
        cc = CalledContract(_t);
    }

    //Variable A über anderen Contract lesen
    function getA() public view returns (uint result) {
        return cc.a();
    }

    //Variable A über anderen Contract setzen
    function setA(uint _val) public returns (uint result) {
        cc.setA(_val);
        return _val;
    }
}
