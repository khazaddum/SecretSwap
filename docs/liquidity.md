# Liquidity Pools

SecretSwap is an Automated Market Maker (AMM) built on the secret smart contracts powered by the Secret Network. This technology allows the community to swap tokens without an intermediary, by pooling tokens in SecretSwap as a liquidity provider.

The algorithm behind SecretSwap's liquidity pools is called the constant product formula, `y * x = k`. Liquidity Providers (LPs) lock their tokens in a pool at a certain ratio of `x` to `y` that determines the price the pool offers to the community.

To provide your SecretTokens to SecretSwap for liquidity, you use the "Provide" tab in the app. You can then pick the two tokens you wish to provide to SecretSwap as a LP. The app will show your available balance of each token, you can then enter the amount you wish to provide for one of your tokens and the app will calculate the amount of the other token that maintains the constant `k` of the pool. In cases where the liquidity pair does not exist, then you get to set the ratio of the liquidity pool by the amounts of tokens you choose to provide.

![](lp1.png "Liquidity")

The app will report the current price for the pool if the pair exists, and will also report the portion of the total tokens in the pool that you are providing.
You will need to approve both tokens to be used by SecretSwap using the corresponding buttons and approving the transactions in Keplr.
