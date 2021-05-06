# Welcome to SecretSwap

SecretSwap is a protocol to swap SecretTokens (SNIP-20s) on Secret Network. Given the encrypted nature of secret contracts, inputs to a transaction/contract are encrypted while they are on the mempool and cannot be frontrun by any adversary. This ensures SecretSwap protects its users and their money from front-running attacks and privacy threats.

SecretSwap also provides access to cross-chain liquidity through an [Ethereum bridge](https://bridge.scrt.network/), a Binance Smart Chain bridge (live in testnet), a Plasm bridge (in development), and reduces fees relative to Ethereum.

SecretSwap is an automated market maker (AMM) liquidity protocol. There is no orderbook, no centralized party, and no central facilitator of trade. Using Secret Contracts, the mempool of potential SecretSwap transactions are kept entirely encrypted - protecting users from front-running attacks and providing an increased level of privacy compared to traditional AMMs.

Each pool within SecretSwap is defined by a secret contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function `x*y=k` to maintain a curve along which trades can happen.

The pools keep track of reserves (liquidity) and updates those reserves every single time someone trades. Because the reserves are automatically rebalanced, a SecretSwap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.

- **Note:** Given the requirement to publicly update pool reserves to determine the price, an observer can see a consolidated view of changes (swaps, provide / remove liquidity) in a given block. As a result, if there’s a single transaction with the pool in a given block, it is not possible to have privacy on that transaction. With more transactions per pool in a given block, SecretSwap provides additional privacy to users.

For a more in depth description, check out how SecretSwap works in this [blog post](https://scrt.network/blog/secret-markets-front-running-prevention) outlining the theory behind an AMM using secret contracts.

In order to use SecretSwap, you will need the [Keplr Wallet](https://wallet.keplr.app/) installed on your browser and at a minimum, some `SCRT` to begin swapping.

## SCRT vs sSCRT

The Secret Network blockchain is powered by the `SCRT` token. It can be delegated to validators to secure the network for staking rewards and it is also used to pay for network fees. This token can be purchased in centralized exchanges.

SecretSwap also supports the `sSCRT` token, which is the SNIP-20 implementation of `SCRT`. This token has all the privacy features of secret smart contracts, however it cannot be used to stake or to pay network fees. `SCRT` can be swapped for `sSCRT` via the [Keplr Wallet](https://wallet.keplr.app/) or via the main SecretSwap app.

- *Pro tip:* Always keep a few un-staked `SCRT` in your wallet for network fees.

## Viewing Keys

The encrypted nature of the secret smart contracts that power SecretTokens and SecretSwap means that the balances on your wallet are not visible by default, even to you. In order to see these balances, you need to create the corresponding viewing keys.

In the SecretSwap app, you can select a SecretToken from the drop-down and the app will check your wallet for a viewing key. If one is found, the app will show your balance, otherwise it will show a button showing "View". Clicking this button triggers the creation of a viewing key for that SecretToken for your wallet. Keplr will prompt you to approve this creation and submit the transaction. This transaction needs a small amount of `SCRT` for network fees. Once this transaction is completed, the SecretSwap app will show your balance for that SecretToken, even if zero. Each SecretToken you wish to hold in your wallet will need a viewing key created. These keys can be copied and then imported into Keplr if you switch your wallet to a different computer.


## Bridging

SecretSwap supports cross-chain exchanges through bridges that allow you to lock tokens from one blockchain (e.g.: Ethereum) and receive SecretToken equivalents to use in SecretSwap. The [Ethereum bridge](https://bridge.scrt.network/) is currently available and others are in active development. The list of supported assets can be found [here](https://bridge.scrt.network/tokens).

To use the [Ethereum bridge](https://bridge.scrt.network/), you will need both the [Keplr Wallet](https://wallet.keplr.app/) and [Metamask](https://metamask.io) wallet on your browser. The bridge will then allow you to choose if you want to move tokens from Ethereum to Secret Network, or viceversa. You can bridge `ETH` or any of the supported ERC-20 tokens to their SecretToken equivalent, keep in mind that the bridging transaction will incur Ethereum network fees.

Remember to generate the appropriate viewing keys to see the balance of your freshly bridged SecretTokens.
