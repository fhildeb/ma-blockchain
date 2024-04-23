//npm install web3

//Web3 Library
const Web3JS = require("web3");

//Address
const web3 = new Web3JS("https://goerli.infura.io/v3/<infura-key>");

/*
Declare asynchronous functions so that
the entire output will wait until information from
the blockchain has been retrieved
*/

//Output block number
async function getBlockNumber() {
  const number = await web3.eth.getBlockNumber();
  console.log("Current block number:");
  console.log(number);
  console.log("");
}

//Output client version
async function getClientVersion() {
  const client = await web3.eth.getNodeInfo();
  console.log("Client version:");
  console.log(client);
  console.log("");
}

//Get network ID
async function getNetwork() {
  const net = await web3.eth.net.getId();
  console.log("Connected network     :  " + net);
  console.log("-----------Agenda------------");
  console.log("Mainnet              = ID:  1");
  console.log("Classic  Testnet PoW = ID:  2");
  console.log("Ropsten  Testnet PoW = ID:  3");
  console.log("Kinkerby Testnet PoA = ID:  4");
  console.log("Kovan    Testnet PoA = ID: 42");
  console.log("");
}

//Get current gas price
async function getGasPrice() {
  const price = await web3.eth.getGasPrice();
  console.log("Current gas price in Wei:");
  console.log(price);
  console.log("");
}

//Get block 1
async function getGenesisHash() {
  const genesis = await web3.eth.getBlock("genesis");
  console.log("Genesis Block Hash:");
  console.log(genesis.hash);
  console.log("");
}

//Get current gas limit in block
async function getGasLimit() {
  const block = await web3.eth.getBlock("latest");
  console.log("Current gas limit of the last block:");
  console.log(block.gasLimit);
  console.log("");
}

//Get Ether from an address
async function getEthFromAddress() {
  const ether = await web3.eth.getBalance(
    "0x9e3d69305Da51f34eE29BfB52721e3A824d59e69"
  );
  console.log("Current balance on address");
  console.log("0x9e3d69305Da51f34eE29BfB52721e3A824d59e69");
  console.log("is " + ether + " Ether.");
  console.log("");
}

//Get the number of transactions in a block
async function getTxCountFromBlock() {
  const tx = await web3.eth.getBlockTransactionCount(
    "0xaab2e5e0967efae40975e6110d92e75e15719cfa065a47825bd173d95bcc9b53"
  );
  console.log("In block ");
  console.log(
    "0xaab2e5e0967efae40975e6110d92e75e15719cfa065a47825bd173d95bcc9b53:"
  );
  console.log("there are a total of " + tx + " transactions");
  console.log("");
}

//Get transaction information
async function getTransaction() {
  const receipt = await web3.eth.getTransaction(
    "0x4f080a4965d74e38a05c809708724e8d596ab9576c89e55090a9e1445b743075"
  );
  console.log("In the transaction with the hash");
  console.log(
    "0x4f080a4965d74e38a05c809708724e8d596ab9576c89e55090a9e1445b743075:"
  );
  console.log(receipt.value + "were sent from the address " + receipt.from);
  console.log("to address " + receipt.to);
  console.log("");
}

/*
Local functions whose response
can be output directly after processing and
calculation
*/

//Check Web3 version
console.log("");
console.log("Web3 Version:");
console.log(web3.version);
console.log("");

//Calculate hash
console.log("SHA3 Hash of Hello World:");
console.log(web3.utils.sha3("Hello World"));
console.log("");

//Convert amount to Wei
console.log("How many Wei are 3 Shannon?");
console.log(web3.utils.toWei("3", "shannon"));
console.log("");

//Convert amount from Wei
console.log("How many Finney are 1500000000000000 Wei?");
console.log(web3.utils.fromWei("1500000000000000", "finney"));
console.log("");

//Execute asynchronous functions
getBlockNumber();
getClientVersion();
getNetwork();
getGasPrice();
getGenesisHash();
getGasLimit();
getEthFromAddress();
getTxCountFromBlock();
getTransaction();
