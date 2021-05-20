# Factory

This contract registers the relation between your token and others. It uses the pre-stored pair contract binary and instantiate it. So, you don't have to execute the pair contract additionally.

## Transaction

### Create pair

Instantiate pair from uploaded WASM binary.

```json
{
  "pair_code_id": "1",
  "token_code_id": "2",
  "init_hook": {
    "msg": "<base64_encoded_json_string>",
    "contract_addr": "<HumanAddr>"
  }
}
```

## Query

## Config

```json
{
    "config": {}
}
```

### Pair

```json
{
    "pair": {
        "asset_infos": [
            {
                "token": {
                    "contract_addr": "<HumanAddr>"
                }
            },
            {
                "native_token": {
                    "denom": "uscrt"
                }
            }
        ]
    }
}
```

### Pairs

```json
{
    "pairs": {
        "start_after": [ //optional
            {
                "token": {
                    "contract_addr": "<HumanAddr>"
                }
            },
            {
                "native_token": {
                    "denom": "uscrt"
                }
            }
        ],
        "limit": 10 //optional, default=10, max=30
    }
}
```


