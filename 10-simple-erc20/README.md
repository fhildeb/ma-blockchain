# ERC20

[ERC20](https://eips.ethereum.org/EIPS/eip-20) is a widely-adopted token standard on the Ethereum blockchain that defines a set of rules and functions for creating and managing custom tokens. The ERC20 standard allows for seamless interoperability between different tokens and decentralized applications (dApps) built on the Ethereum network.

### Functions

- `totalSupply()`: Returns the total supply of the token.
- `balanceOf(address)`: Returns the token balance of a specific address.
- `transfer(address, uint)`: Transfers a specific amount of tokens from the sender's address to another address.
- `approve(address, uint)`: Allows a specific address to spend a certain amount of tokens on behalf of the owner.
- `allowance(address, address)`: Returns the remaining token balance that the spender is allowed to spend on behalf of the owner.
- `transferFrom(address, address, uint)`: Transfers tokens from one address to another, assuming the sender has granted approval

### Events

- `Transfer(address, address, uint)`: Emitted when tokens are transferred between addresses.
- `Approval(address, address, uint)`: Emitted when the owner approves spend a specific amount of tokens on their behalf.

## Simple ERC20

Simple ERC20 token implementation that defines a token with a name, symbol, and total supply. It also includes functionality to manage token balances for addresses, grant allowances for spending tokens on behalf of other addresses, and transfer tokens between addresses. Additionally, the contract emits events to log token transfers and approvals.
