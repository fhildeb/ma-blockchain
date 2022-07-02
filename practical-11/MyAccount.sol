pragma solidity ^0.8.0;

//Contract zum zuweisen des Owners
contract Ownable {

  address payable public owner_payable;

  constructor()  {
    address owner = msg.sender; // The address from msg.sender is not payable. There is an explicit cast to payable necessary
    owner_payable = payable(owner); // Cast address to payable
  }

  //Owner bekommt Modifier zur Bezahlberechtigung
  modifier onlyOwner() {
    require(msg.sender == owner_payable);
    _;
  }

  //Ownership an andere Adresse weitergeben
  function transferOwnership(address payable newOwner) onlyOwner public{
    require(newOwner != address(0));
    owner_payable = newOwner;
  }
}

//Contract zum Auflösen des Ownerships
contract Destructible is Ownable {

  //Methodeninterface von Ownable gegeben
  constructor() payable {}

  //Ownership auflösen und Geld an Owner senden
  function destroy() onlyOwner public{
    selfdestruct(owner_payable);
  }

  //Ownership auflösen und Geld an Adresse senden
  function destroyAndSend(address payable _recipient) onlyOwner public {
    selfdestruct(_recipient);
  }
}

//
contract MyAccount is Ownable, Destructible {

  //Geld mit Account empfangen
  function store() public payable {}

  //Owner darf Geld an sich senden
  //Modifier onlyOwner wird geprüft
  function withdraw(uint amount) public onlyOwner {
    if (address(this).balance >= amount) {
      address payable receiver = payable(msg.sender); // Cast address to payable
      receiver.transfer(amount);
    }
  }
}
