# Merkle Tree Verification

## Merkle Trees

Merkle Trees are cryptographic data structures that efficiently summarize large data sets using hashing. They enable secure and efficient verification of data integrity by organizing data as leaves in a binary tree, where each non-leaf node represents the hash of its children. The Merkle Root, a single hash at the tree's top, allows quick validation of data presence, making Merkle Trees ideal for blockchain, distributed systems, and peer-to-peer networks.

## Description

This script, demonstrates the creation and verification of a Merkle Tree.

## Development

```bash
npm install merkletree
node merkle-verification.js
```

## Output

```
Merkle Root of the created tree
c53707ad8ec18b0ceeb26c073bc82dd681c1692a3d9a68b48066798c1d423201

Entire path of the created tree
[
  {
    left: 'from a to b',
    parent: '0a74c28621e0d220dfe90b938b09db81a327097544f443a1a5db1979e87b803a',
    right: 'from x to y'
  },
  {
    left: '0a74c28621e0d220dfe90b938b09db81a327097544f443a1a5db1979e87b803a',
    parent: 'c53707ad8ec18b0ceeb26c073bc82dd681c1692a3d9a68b48066798c1d423201',
    right: 'adbfc06e4dc9685c9d47b913a84932ec6d82d886e1c8a5684538110840bbe102'
  }
]

Checking transactions:

TX: from x to y is
true

TX: from a to b is
true

TX: from m to n is
false
```
