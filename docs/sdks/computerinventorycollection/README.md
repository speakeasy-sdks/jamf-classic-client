# Computerinventorycollection
(*computerinventorycollection*)

### Available Operations

* [findComputerInventoryCollection](#findcomputerinventorycollection) - Finds the Jamf Pro computer inventory collection information
* [updateComputerInventoryCollection](#updatecomputerinventorycollection) - Updates the Jamf Pro computer inventory collection information

## findComputerInventoryCollection

Finds the Jamf Pro computer inventory collection information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerinventorycollection.findComputerInventoryCollection();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FindComputerInventoryCollectionResponse](../../sdk/models/operations/findcomputerinventorycollectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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

async function run() {
  const sdk = new Jamf({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
      username: "<YOUR_USERNAME_HERE>",
    },
  });

  const res = await sdk.computerinventorycollection.updateComputerInventoryCollection(new TextEncoder().encode("0x0Aea3b0A0a"));

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateComputerInventoryCollectionResponse](../../sdk/models/operations/updatecomputerinventorycollectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
