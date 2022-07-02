/*
Aufrufem im Terminal mit
node Aufgabe_5.js

Vorraussetzung: npm install merkletree
*/

//Merkle Tree Library einbinden
merkle = require('merkletree');

//Beispieltransaktionen erstellen
trxs = ['von a nach b', 'von x nach y', 'von t nach e', 'von m nach n'];

//Erzeugen des Baums
tree = merkle.default(trxs);

console.log("");
console.log("Merkleroot des Erstellten Baumes");
mroot = tree.root()
console.log(mroot);

console.log("");
console.log("Gesamter Pfad des Erstellten Baumes");
console.log(mpath = tree.proof('von x nach y'));

console.log("");
console.log("Prüfen von Transaktionen:");
console.log("");
console.log("TX: von x nach y ist");
console.log(merkle.verifyProof('von x nach y', mroot, mpath));

console.log("");
console.log("TX: von a nach b ist");
console.log(merkle.verifyProof('von a nach b', mroot, mpath));

console.log("");
console.log("TX: von m nach n ist");
console.log(merkle.verifyProof('von m nach n', mroot, mpath));
console.log("");
