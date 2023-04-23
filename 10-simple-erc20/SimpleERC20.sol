pragma solidity ^0.8.0;

contract SimpleERC20 {

    // Token name
    string public name;

    // Token abbreviation
    string public symbol;

    // Maximum token amount
    uint public totalSupply;

    // Dynamic one-dimensional array to store balances
    mapping (address => uint) public balanceOf;

    // Dynamic two-dimensional array to store token permissions.
    // Addresses are granted the right to use specific amounts
    mapping (address => mapping (address => uint256)) public allowance;

    // Constructor is called once when creating tokens
    // The creator receives all tokens to their address
    constructor(uint _initialSupply, string memory _name, string memory _symbol) public {
        totalSupply = _initialSupply;
        name = _name;
        symbol = _symbol;
        balanceOf[msg.sender] = _initialSupply;
    }

    // Transfer tokens from the creator to another address
    function transfer(address _to, uint _value) public returns(bool success){
        require(balanceOf[msg.sender] > _value);
        require(balanceOf[_to] + _value > balanceOf[_to]);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    // Transfer tokens from an arbitrary address to another address
    function transferFrom(address _from, address _to, uint _value) public returns(bool success){
        require(allowance[_from][msg.sender] >= _value);
        require(balanceOf[_from] >= _value);
        require(balanceOf[_to] + _value > balanceOf[_to]);
        allowance[_from][msg.sender] -= _value;
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    // Approve == Grant permission for token transfer
    // Allowance indicates how large this amount can be
    function approve(address _spender, uint _value) public returns(bool success){
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    // Execute token transaction
    event Transfer(address indexed _from, address indexed _to, uint _value);

    // Execute approval transaction
    event Approval(address indexed _owner, address indexed _spender, uint _value);

}