# Hashing

Hashing is a cryptographic technique that transforms input data into fixed-length, unique strings called hashes. It employs deterministic, one-way hash functions, making it infeasible to reverse-engineer the original data. Hashing ensures data integrity, as even minor changes in input result in significantly different hashes. Commonly used in password storage, data verification, and digital signatures, hashing algorithms such as SHA-256 and MD5 are crucial for secure data handling and authentication in various applications, including blockchain and cybersecurity.

## Basic Hashing

This program demonstrates basic hashing functionality. It list all available hash functions, hashes a string as a word character using the RSA-SHA256 hash function and continues hashing the input as a hexadecimal value using the RSA-SHA256 hash function.

## Development

```
node basic-hashing.js
```

## Output

```
Available hash functions:
[
  'RSA-MD5',
  'RSA-SHA1',
  'RSA-SHA1-2',
  'RSA-SHA224',
  'RSA-SHA256',
  'RSA-SHA3-224',
  'RSA-SHA3-256',
  'RSA-SHA3-384',
  'RSA-SHA3-512',
  'RSA-SHA384',
  'RSA-SHA512',
  'RSA-SHA512/224',
  'RSA-SHA512/256',
  'RSA-SM3',
  'blake2b512',
  'blake2s256',
  'id-rsassa-pkcs1-v1_5-with-sha3-224',
  'id-rsassa-pkcs1-v1_5-with-sha3-256',
  'id-rsassa-pkcs1-v1_5-with-sha3-384',
  'id-rsassa-pkcs1-v1_5-with-sha3-512',
  'md5',
  'md5-sha1',
  'md5WithRSAEncryption',
  'sha1',
  'sha1WithRSAEncryption',
  'sha224',
  'sha224WithRSAEncryption',
  'sha256',
  'sha256WithRSAEncryption',
  'sha3-224',
  'sha3-256',
  'sha3-384',
  'sha3-512',
  'sha384',
  'sha384WithRSAEncryption',
  'sha512',
  'sha512-224',
  'sha512-224WithRSAEncryption',
  'sha512-256',
  'sha512-256WithRSAEncryption',
  'sha512WithRSAEncryption',
  'shake128',
  'shake256',
  'sm3',
  'sm3WithRSAEncryption',
  'ssl3-md5',
  'ssl3-sha1'
]

Hashing '1a' as a word character:
a73fcf339640929207281fb8e038884806e2eb0840f2245694dbba1d5cc89e65

Hashing '1a' as a hexadecimal value:
a73fcf339640929207281fb8e038884806e2eb0840f2245694dbba1d5cc89e65
```
