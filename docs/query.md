# How to send a query request

- Command line:

```bash
  secretcli query wasm contract-store <contract-address> '<JSON-formatted message>'
```

- RESTful API:

```
<light-client-address>/wasm/contracts/<contract-address>/store?query=<JSON-formatted message>
```

### How to organize query message

You may check `<contract>/src/msg.rs` of each contract.
