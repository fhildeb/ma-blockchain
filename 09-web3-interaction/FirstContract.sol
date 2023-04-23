pragma solidity ^0.8.0;

contract FirstContract{

  string public output; // contract-wide valid variable of type string

  constructor() public{
    output = "This is my first contract";
  }
}
