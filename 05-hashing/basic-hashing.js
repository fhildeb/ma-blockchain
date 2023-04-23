//Crypto Library
const crypto = require('crypto');

console.log("");
console.log("Available hash functions:");
console.log(crypto.getHashes());

console.log("");
console.log("Hashing '1a' as a word character:");
console.log(crypto.createHash('RSA-SHA256').update('1a', 'utf8').digest('hex'));
console.log("");

console.log("Hashing '1a' as a hexadecimal value:");
console.log(crypto.createHash('RSA-SHA256').update('1a', 'utf8').digest('hex'));
console.log("");