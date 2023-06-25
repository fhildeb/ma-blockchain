# Web3 Interactions

This script interacts with the Ethereum blockchain and includes a series of asynchronous functions that fetch various types of information from the blockchain, such as block number, client version, network ID, gas price, genesis block hash, gas limit, Ether balance of an address, the number of transactions in a block, and transaction details. It also includes local functions to display the Web3 version, calculate SHA3 hash, and convert values between different units of Ether as Wei, Shannon, and Finney.

## Development

1. Search for TODO and replace the infura key with your own.
2. Install the libraries and run the script

```bash
npm install web3
node web3-interaction.js
```

## Output

```
Web3 Version:
<Web3JS version number>

SHA3 Hash of Hello World:
<hash of "Hello World">

How many Wei are 3 Shannon?
<conversion result from 3 shannon to wei>

How many Finney are 1500000000000000 Wei?
<conversion result from 1500000000000000 wei to finney>

Current block number:
<current block number>

Client version:
<client version>

Connected network     :  <network id>
-----------Agenda------------
Mainnet              = ID:  1
Classic  Testnet PoW = ID:  2
Ropsten  Testnet PoW = ID:  3
Kinkerby Testnet PoA = ID:  4
Kovan    Testnet PoA = ID: 42

Current gas price in Wei:
<current gas price in wei>

Genesis Block Hash:
<hash of the genesis block>

Current gas limit of the last block:
<current gas limit of the latest block>

Current balance on address
0x9e3d69305Da51f34eE29BfB52721e3A824d59e69
is <ether balance> Ether.

In block
0xaab2e5e0967efae40975e6110d92e75e15719cfa065a47825bd173d95bcc9b53:
there are a total of <transaction count> transactions

In the transaction with the hash
0x4f080a4965d74e38a05c809708724e8d596ab9576c89e55090a9e1445b743075:
<value of the transaction> were sent from the address <sender address>
to address <receiver address>
```
