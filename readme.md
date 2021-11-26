# Metric API

The conversions logs was save in mysql database.

## POST /v1/conversion

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

## GET /v1/conversions

### _response_

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "alias": "conversion",
      "value": "conversion",
      "input": {
        "value": 25000,
        "unit_in": "M",
        "unit_out": "K"
      },
      "output": {
        "status": "success",
        "data": {
          "value": 25
        }
      },
      "created_at": "2021-11-20T10:14:12.000Z"
    }
  ]
}
```