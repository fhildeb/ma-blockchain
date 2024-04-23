//Crypto Library
const crypto = require("crypto");

// Address
const hash = "6a22abc984f8bed473a6fe7841cb520f879ebfa97f7b1ad0c24bcb2e7bc79428";

// Maximum amount up to which the algorithm searches
const total_searches = 10000000;

// Algorithm to search for the balance on the address
let matchFound = false;
for (let i = 0; i < total_searches; i++) {
  let test_hash = crypto
    .createHash("RSA-SHA256")
    .update(i.toString(), "utf8")
    .digest("hex");

  // If balance found
  if (test_hash === hash) {
    console.log("\nMatch: Account balance is " + i.toString() + "\n");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  console.log("\nNo match found within the specified range.\n");
}
