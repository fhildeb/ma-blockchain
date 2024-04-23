// Include Merkle Tree Library
const merkle = require("merkletree");

// Create example transactions
const trxs = ["from a to b", "from x to y", "from t to e", "from m to n"];

// Generate the tree
const tree = merkle.default(trxs);

console.log("");
console.log("Merkle Root of the created tree");
const mroot = tree.root();
console.log(mroot);

console.log("");
console.log("Entire path of the created tree");
const mpath = tree.proof("from x to y")
console.log(mpath);

console.log("");
console.log("Checking transactions:");
console.log("");
console.log("TX: from x to y is");
console.log(merkle.verifyProof("from x to y", mroot, mpath));

console.log("");
console.log("TX: from a to b is");
console.log(merkle.verifyProof("from a to b", mroot, mpath));

console.log("");
console.log("TX: from m to n is");
console.log(merkle.verifyProof("from m to n", mroot, mpath));
console.log("");
