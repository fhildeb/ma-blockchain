pragma solidity ^0.8.0;

contract MyFirstContract{

  string public output; // vertragsweit gültige Variable vom Typ String

  constructor() public{
    output = "Hello World";
  }
}
