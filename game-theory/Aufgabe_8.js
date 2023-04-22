//Crypto Library
const crypto = require('crypto');

//Addresse
const hash = "6a22abc984f8bed473a6fe7841cb520f879ebfa97f7b1ad0c24bcb2e7bc79428";

//Maximaler Betrag bis zu welchem der Algorithmus sucht
const max_amount = 10000000;

//Algorithmus zur Suche des Guthabens auf der Adresse
for (i = 0; i < max_amount; i++){
    var   test_hash = crypto.createHash('RSA-SHA256').update(i.toString(),'utf8').digest('hex');
    
    //Falls Guthaben gefunden
    if (test_hash == hash){
        console.log("");
        console.log("Treffer: Kontoguthaben beträgt " + i.toString());
        console.log("");
        break;
    }
}
