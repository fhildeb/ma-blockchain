/*
Aufrufem im Terminal mit
node Aufgabe_1.js
*/

//Before:
//npm install web3

//Web3 Library
Web3JS = require('web3');

//Addresse
web3 = new Web3JS('https://ropsten.infura.io/v3/9a801a369ed247dfb3c9f0079a894e5b');

/*
Deklarieren von asynchronen Funktionen, damit mit der
gesamten Ausgabe gewartet wird, bis Informationen von
der Blockchain abgerufen wurden
*/

//Blocknummer ausgeben
async function getBlockNumber(){
  number = await web3.eth.getBlockNumber();
  console.log("Aktuelle Blocknummer:");
  console.log(number);
  console.log("");
}

//Version des Clients ausgeben
async function getClientVersion(){
  client = await web3.eth.getNodeInfo();
  console.log("Version des Clients:");
  console.log(client);
  console.log("");
}

//ID des Netzwerks abrufen
async function getNetwork(){
  net = await web3.eth.net.getId();
  console.log("Verbundenes Netzwerk     :  " + net);
  console.log("-----------Agenda------------");
  console.log("Mainnet              = ID:  1");
  console.log("Classic  Testnet PoW = ID:  2");
  console.log("Ropsten  Testnet PoW = ID:  3");
  console.log("Kinkerby Testnet PoA = ID:  4");
  console.log("Kovan    Testnet PoA = ID: 42");
  console.log("");
}

//Aktuellen Gaspreis aufrufen
async function getGasPrice(){
  price = await web3.eth.getGasPrice();
  console.log("Aktueller Gaspreis in Wei:");
  console.log(price);
  console.log("");
}

//Block 1 abrufen
async function getGenesisHash(){
  genesis = await web3.eth.getBlock('genesis');
  console.log("Genesis Block Hash:");
  console.log(genesis.hash);
  console.log("");
}

//Aktuelles Gaslimit im Block abrufen
async function getGasLimit(){
  block = await web3.eth.getBlock('latest');
  console.log("Aktuelles Gaslimit des letzten Blocks:");
  console.log(block.gasLimit);
  console.log("");
}

//Ether einer Adresse abrufen
async function getEthFromAddress(){
  ether = await web3.eth.getBalance('0x9e3d69305Da51f34eE29BfB52721e3A824d59e69');
  console.log("Aktuelles Guthaben auf Adresse");
  console.log("0x9e3d69305Da51f34eE29BfB52721e3A824d59e69");
  console.log("sind " + ether + " Ether.");
  console.log("");
}

//Transaktionszahl eines Blocks abrufen
async function getTxCountFromBlock(){
  tx = await web3.eth.getBlockTransactionCount('0xaab2e5e0967efae40975e6110d92e75e15719cfa065a47825bd173d95bcc9b53');
  console.log("Im Block ");
  console.log("0xaab2e5e0967efae40975e6110d92e75e15719cfa065a47825bd173d95bcc9b53:");
  console.log("sind insgesamt " + tx + " Transaktionen");
  console.log("");
}

//Transaktionsinformationen abrufen
async function getTransaction(){
  receipt = await web3.eth.getTransaction('0x4f080a4965d74e38a05c809708724e8d596ab9576c89e55090a9e1445b743075');
  console.log("In der Transaktion mit dem Hash");
  console.log("0x4f080a4965d74e38a05c809708724e8d596ab9576c89e55090a9e1445b743075:");
  console.log("wurden von der Adresse " + receipt.from);
  console.log( receipt.value + " Wei zu " + receipt.to)
  console.log("gesendet.")
  console.log("");
}

/*
Lokale Funktionen, deren Antwort
direkt nach der Verarbeitung und
Berechnung ausgegeben werden kann
*/

//Web3 Version checken
console.log("");
console.log("Web3 Version:");
console.log(web3.version);
console.log("");

//Hash berechnen
console.log("SHA3 Hash von Hallo Welt:");
console.log(web3.utils.sha3("Hallo Welt"));
console.log("");

//Betrag zu Wei wandeln
console.log("Wie viele Wei sind 3 Shannon?");
console.log(web3.utils.toWei('3', 'shannon'));
console.log("");

//Betrag von Wei wandeln
console.log("Wie viele Finney sind 1500000000000000 Wei?");
console.log(web3.utils.fromWei('1500000000000000', 'finney'));
console.log("");

//Asynchrone Funktionen ausführen
getBlockNumber();
getClientVersion();
getNetwork();
getGasPrice();
getGenesisHash();
getGasLimit();
getEthFromAddress();
getTxCountFromBlock();
getTransaction();
