# Pair

## Transaction

### Provide liquidity

Send user's assets to SecretSwap contract and provide liquidity.

Assets can be both contract-based and native tokens. It can be distinguished with the key under `info.token` or `info.native_token`.

```json
{
  "provide_liquidity": {
    "assets": [
      {
        "info" : {
            "token": {
                "contract_addr": "<HumanAddr>"
            }
        },
        "amount": "10"
      },
      {
        "info" : {
            "native_token": {
                "denom": "uluna"
            }
        },
        "amount": "10"
      }
    ],
    "slippage_tolerance": 0.1 // optinonal
  }
}
```

### Swap

Swap between the given two tokens. `offer_asset` is your source asset and `to` is your destination token contract.

```json
{
    "swap": {
        "offer_asset": {
            "info" : {
                "native_token": {
                    "denom": "uluna"
                }
            },
            "amount": "10"
        },
        "belief_price": 0.1,  // optional
        "max_spread": 0.1, // optional
        "to": "<HumanAddr>",
    }
}
```

```json
{
    "swap": {
        "offer_asset": {
            "info" : {
                "token": {
                    "contract_addr": "<HumanAddr>"
                }
            },
            "amount": "10"
        },
        "belief_price": 0.1,  // optional
        "max_spread": 0.1, // optional
        "to": "<HumanAddr>" // optional,
    }
}
```

## Query

### Pool

```json
{
    "pool": {}
}
```

### Simulation

```json
{
    "simulation": {
        "offer_asset": {
            "info" : {
                "token": {
                    "contract_addr": "<HumanAddr>"
                }
            },
            "amount": "10"
        }
    }
}
```

### Reverse Simulation

```json
{
    "reverse_simulation": {
        "ask_asset": {
            "info" : {
                "token": {
                    "contract_addr": "<HumanAddr>"
                }
            },
            "amount": "10"
        }
    }
}
```

