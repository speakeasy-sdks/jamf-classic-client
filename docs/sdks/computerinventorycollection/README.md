# computerinventorycollection

### Available Operations

* [findComputerInventoryCollection](#findcomputerinventorycollection) - Finds the Jamf Pro computer inventory collection information
* [updateComputerInventoryCollection](#updatecomputerinventorycollection) - Updates the Jamf Pro computer inventory collection information

## findComputerInventoryCollection

Finds the Jamf Pro computer inventory collection information

### Example Usage

```typescript
import { Jamf } from "jamf-classic-sdk-nodejs";
import { FindComputerInventoryCollectionResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinventorycollection.findComputerInventoryCollection().then((res: FindComputerInventoryCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateComputerInventoryCollectionResponse } from "jamf-classic-sdk-nodejs/dist/sdk/models/operations";
import {
  ComputerInventoryCollectionApplicationsApplicationPlatform,
  ComputerInventoryCollectionFontsFontPlatform,
  ComputerInventoryCollectionPluginsPluginPlatform,
} from "jamf-classic-sdk-nodejs/dist/sdk/models/shared";

const sdk = new Jamf({
  security: {
    password: "",
    username: "",
  },
});

sdk.computerinventorycollection.updateComputerInventoryCollection("itaque".encode()).then((res: UpdateComputerInventoryCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateComputerInventoryCollectionResponse](../../models/operations/updatecomputerinventorycollectionresponse.md)>**

