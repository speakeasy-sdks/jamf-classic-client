# Computerinventorycollection
(*.computerinventorycollection*)

### Available Operations

* [findComputerInventoryCollection](#findcomputerinventorycollection) - Finds the Jamf Pro computer inventory collection information
* [updateComputerInventoryCollection](#updatecomputerinventorycollection) - Updates the Jamf Pro computer inventory collection information

## findComputerInventoryCollection

Finds the Jamf Pro computer inventory collection information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerinventorycollection.findComputerInventoryCollection();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FindComputerInventoryCollectionResponse](../../models/operations/findcomputerinventorycollectionresponse.md)>**


## updateComputerInventoryCollection

Updates the Jamf Pro computer inventory collection information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import {
  ComputerInventoryCollectionPlatform,
  ComputerInventoryCollectionSchemasPlatform,
  Platform,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/shared";

(async() => {
  const sdk = new Jamf({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.computerinventorycollection.updateComputerInventoryCollection(new TextEncoder().encode("0x0Aea3b0A0a"));


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateComputerInventoryCollectionResponse](../../models/operations/updatecomputerinventorycollectionresponse.md)>**

