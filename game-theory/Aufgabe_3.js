/*
Aufrufem im Terminal mit
node Aufgabe_3.js
*/

//Crypto Library
const crypto = require('crypto');

//Aufgabe 3.0
console.log("");
console.log("Mögliche Hash-Funktionen:");
console.log(crypto.getHashes());

//Aufgabe 3.1
console.log("");
console.log("1a als Wortzeichen gehasht:");
console.log(crypto.createHash('RSA-SHA256').update('1a', 'utf8').digest('hex'));
console.log("");

//Aufgabe 3.1
console.log("1a als hexadezimaler Wert gehasht");
console.log(crypto.createHash('RSA-SHA256').update('1a', 'utf8').digest('hex'));
console.log("");
