# CDN dApps

A variety of dApps running in local browser to showcase the connection to Ethereum smart contracts.

## Addition Contract

Creates a simple web interface for a decentralized application that interacts with a smart contract. The web interface contains input fields for two numbers and a button to trigger the addition of these numbers using the smart contract.

![Addition Contract](/img/cdn_app_1.png)

## Ethereum Info

This dApp interacts with the Ethereum blockchain to retrieve various information such as block number, account balance, block data, and transaction data. It request access to the user's MetaMask account and gets the current block number, then continues to fetch further information.

![Ethereum Info](/img/cdn_app_2.png)

## Transaction Page

This dApp allows users to send Ether from their MetaMask account to another address. It consists of input fields for the user to enter the amount of Ether and the recipient's Ethereum address, along with a button to initiate the transfer. The sender's Ethereum address and the resulting transaction hash are also displayed on the page.

![Transaction Page](/img/cdn_app_3.png)

## Text Writing

This dApp allows users to write a text into a smart contract. It creates a contract object using the ABI and the contract address and
calls the writeText function on the smart contract, passing the input text as an argument. The transaction is send from the specified sender address. Upon receiving a response from the smart contract, it displays the transaction hash and block hash on the web interface.

![Text Writing](/img/cdn_app_4.png)

## Server

A node script that uses the express framework to create a basic web server. The server listens on port 3000 and serves HTML files. The server setup is necessary because MetaMask requires that the HTML file is served from a server, not directly from the file system.

# Development

1. Install [Node.js](https://nodejs.org/en/download/) to run the script
2. Adjust the HTML file within `server.js`
3. Search for `TODO` and adjust Addresses and Contracts

> Default blockchain: Goerli testnet

```bash
npm install express
node server.js
```

Navigate to `http://localhost:3000` to use the dApp
