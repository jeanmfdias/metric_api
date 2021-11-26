# Metric API

## GET /v1/conversion

### _payload_

```json
{
    "value": 25000.00,
    "unit_in": "M",
    "unit_out": "K"
}
```

### _response_ 

```json
{
  "status": "log successful created",
  "data": {
    "value": 25
  },
  "executed_at": "2021-11-26 19:23:56"
}
```