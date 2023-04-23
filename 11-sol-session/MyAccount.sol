pragma solidity ^0.8.0;

// Contract to assign the owner
contract Ownable {

  address payable public owner_payable;

  constructor()  {
    address owner = msg.sender; // The address from msg.sender is not payable. There is an explicit cast to payable necessary
    owner_payable = payable(owner); // Cast address to payable
  }

  // Owner gets the modifier for payment authorization
  modifier onlyOwner() {
    require(msg.sender == owner_payable);
    _;
  }

  // Transfer ownership to another address
  function transferOwnership(address payable newOwner) onlyOwner public{
    require(newOwner != address(0));
    owner_payable = newOwner;
  }
}

// Contract to dissolve ownership
contract Destructible is Ownable {

  // Method interface from Ownable provided
  constructor() payable {}

  // Dissolve ownership and send money to the owner
  function destroy() onlyOwner public{
    selfdestruct(owner_payable);
  }

  // Dissolve ownership and send money to the specified address
  function destroyAndSend(address payable _recipient) onlyOwner public {
    selfdestruct(_recipient);
  }
}

//
contract MyAccount is Ownable, Destructible {

  // Receive money with the account
  function store() public payable {}

  // Owner is allowed to send money to themselves
  // Modifier onlyOwner is checked
  function withdraw(uint amount) public onlyOwner {
    if (address(this).balance >= amount) {
      address payable receiver = payable(msg.sender); // Cast address to payable
      receiver.transfer(amount);
    }
  }
}
