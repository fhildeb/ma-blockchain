pragma solidity ^0.8.0;

contract Simple_ERC20{

    //Name des Tokens
    string public name;

    //Kuerzel des Tokens
    string public symbol;

    //Maximaler Tokenbetrag
    uint public totalSupply;

    //Dynamischer eindimensionaler Array um Guthaben zu speichern
    mapping (address => uint) public balanceOf;

    //Dynamischer zweidimensionaler Array um Tokenberechtigung zu speichern.
    //Den Adressen wird das Recht zum Verwenden bestimmter Betraege zugeordnet
    mapping (address => mapping (address => uint256)) public allowance;

    //Konstruktor wird beim Erstellen der Tokens einmalig aufgerufen
    //Der Ersteller erhält alle Tokens an seine Adresse
    constructor(uint _initialSupply, string memory _name, string memory _symbol) public{
        totalSupply = _initialSupply;
        name = _name;
        symbol = _symbol;
        balanceOf[msg.sender] = _initialSupply;
    }

    //Transferieren von Token des Erstellers zu einer Anderen
    function transfer(address _to, uint _value) public returns(bool success){
        require(balanceOf[msg.sender] > _value);
        require(balanceOf[_to] + _value > balanceOf[_to]);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    //Transferieren von Token von einer beliebigen zu einer weiteren Adresse
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

    //Approve == Berechtigung über Tokentransfer zusprechen
    //Allowance gibt an wie groß dieser Betrag sein darf
    function approve(address _spender, uint _value) public returns(bool success){
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    //Token Transaktion ausführen
    event Transfer(address indexed _from, address indexed _to, uint _value);

    //Approval Transaktion ausführen
    event Approval(address indexed _owner, address indexed _spender, uint _value);

}
