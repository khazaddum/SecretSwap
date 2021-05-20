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


