pragma solidity ^0.7.5;

contract BasicContract{
    string public name;

    constructor(){

    }

    function helloWorld() public pure returns(string memory){
        return "Hello World!";
    }


    function calculator(uint a, uint b) public pure returns(uint){
        return a + b;
    }

    function storeName(string memory _name) public{
        name = _name;
    }

    function payMe() public payable{
        require(msg.value > 1000000);
    }

    function getBalacne() public view returns(uint){
        return address(this).balance;
    }

}
