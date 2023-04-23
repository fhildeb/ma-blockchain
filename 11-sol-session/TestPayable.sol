pragma solidity ^0.8.0;

contract PayableTest{
    function testPayable() public payable {
        address payable receiver = payable(msg.sender);
        receiver.send(msg.value);
    }
}
