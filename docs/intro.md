# Welcome to SecretSwap

SecretSwap is an automated market-making (AMM) decentralized exchange (DEX) built for trading SNIP-20 tokens (a.k.a. SecretTokens) on Secret Network. Leveraging secret contracts, SecretSwap protects users against malicious front-running and privacy threats, provides access to cross-chain liquidity through an [Ethereum bridge](https://bridge.scrt.network/), a Binance Smart Chain bridge (in development), a Plasm bridge (in development), and reduces fees relative to Ethereum.

In order to use SecretSwap, you will need the [Keplr Wallet](https://wallet.keplr.app/) installed on your browser and at a minimum, some `SCRT` to begin swapping.

## SCRT vs sSCRT

The Secret Network blockchain is powered by the `SCRT` token. It can be delegated to validators to secure the network for staking rewards and it is also used to pay for network fees. This token can be purchased in centralized exchanges.

SecretSwap also supports the `sSCRT` token, which is the SNIP-20 implementation of `SCRT`. This token has all the privacy features of secret smart contracts, however it cannot be used to stake or to pay network fees. `SCRT` can be swapped for `sSCRT` via the [Keplr Wallet](https://wallet.keplr.app/) or via the main SecretSwap UI.

- *Pro tip:* Always keep a few un-staked `SCRT` in your wallet for network fees.

## Viewing Keys

The encrypted nature of the secret smart contracts that power SecretTokens and SecretSwap means that the balances on your wallet are not visible by default, even to you. In order to see these balances, you need to create the corresponding viewing keys.

In the SecretSwap UI, you can select a SecretToken from the drop-down and the app will check your wallet for a viewing key. If one is found, the app will show your balance, otherwise it will show a button showing "View". Clicking this button triggers the creation of a viewing key for that SecretToken for your wallet. Keplr will prompt you to approve this creation and submit the transaction. This transaction needs a small amount of `SCRT` for network fees. Once this transaction is completed, the SecretSwap app will show your balance for that SecretToken, even if zero.
