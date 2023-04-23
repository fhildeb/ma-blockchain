//Crypto Library
const crypto = require('crypto');

//Address
const hash = "6a22abc984f8bed473a6fe7841cb520f879ebfa97f7b1ad0c24bcb2e7bc79428";

//Maximum amount up to which the algorithm searches
const max_amount = 10000000;

//Algorithm to search for the balance on the address
for (i = 0; i < max_amount; i++){
    var test_hash = crypto.createHash('RSA-SHA256').update(i.toString(),'utf8').digest('hex');
    
    //If balance found
    if (test_hash == hash){
        console.log("");
        console.log("Match: Account balance is " + i.toString());
        console.log("");
        break;
    }
}